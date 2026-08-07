#!/usr/bin/env python3
"""
Slice catalog images into tight, transparent 40x40 icons and build a sprite.

Usage:
  python3 tools/slice_catalogs.py public/images/catalog-1.png public/images/catalog-2.png \
    --out public/images/tools --size 40 --cols 10 --sprite public/images/tools-sprite.png

The script will:
 - detect grid cells by projecting non-background pixels
 - crop each cell to the tight bounding box of the item
 - fit-center each item into a transparent square of the requested size
 - save individual icons as icon_001.png, icon_002.png, ... in the output dir
 - assemble a sprite PNG and a companion CSS file with `.icon-N` classes

Requirements: Pillow (PIL). Install: `pip3 install pillow`
"""
from __future__ import annotations
import argparse
import math
import os
from typing import List, Tuple
from PIL import Image, ImageOps


def detect_background_color(img: Image.Image) -> Tuple[int, int, int]:
    # sample corners and average
    w, h = img.size
    samples = []
    for x in (0, w - 1):
        for y in (0, h - 1):
            samples.append(img.getpixel((x, y))[:3])
    r = sum(s[0] for s in samples) // len(samples)
    g = sum(s[1] for s in samples) // len(samples)
    b = sum(s[2] for s in samples) // len(samples)
    return (r, g, b)


def make_mask(img: Image.Image, bg: Tuple[int, int, int], thresh=30) -> Image.Image:
    rgba = img.convert("RGBA")
    data = rgba.getdata()
    mask = Image.new("L", img.size, 0)
    mdata = []
    for px in data:
        r, g, b, a = px
        # if transparent already, mark
        if a < 10:
            mdata.append(0)
            continue
        # color distance
        d = abs(r - bg[0]) + abs(g - bg[1]) + abs(b - bg[2])
        mdata.append(255 if d > thresh else 0)
    mask.putdata(mdata)
    return mask


def projection_ranges(proj: List[int], min_peak:int=4) -> List[Tuple[int,int]]:
    ranges = []
    in_range = False
    start = 0
    for i, v in enumerate(proj):
        if not in_range and v > min_peak:
            in_range = True
            start = i
        elif in_range and v <= min_peak:
            in_range = False
            ranges.append((start, i))
    if in_range:
        ranges.append((start, len(proj)))
    return ranges


def find_cells(mask: Image.Image) -> List[Tuple[int,int,int,int]]:
    w, h = mask.size
    # compute vertical and horizontal projections
    mx = [0] * w
    my = [0] * h
    mpx = mask.load()
    for x in range(w):
        s = 0
        for y in range(h):
            if mpx[x, y] > 0:
                s += 1
        mx[x] = s
    for y in range(h):
        s = 0
        for x in range(w):
            if mpx[x, y] > 0:
                s += 1
        my[y] = s

    x_ranges = projection_ranges(mx, min_peak=max(2, max(mx)//40))
    y_ranges = projection_ranges(my, min_peak=max(2, max(my)//40))

    cells = []
    for yr in y_ranges:
        for xr in x_ranges:
            left, right = xr
            top, bottom = yr
            # crop the mask cell and check if it contains any pixels
            box = (left, top, right, bottom)
            sub = mask.crop(box)
            if sub.getbbox():
                cells.append(box)
    return cells


def crop_tight(img: Image.Image, mask: Image.Image, box: Tuple[int,int,int,int]) -> Image.Image | None:
    left, top, right, bottom = box
    sub_mask = mask.crop(box)
    bbox = sub_mask.getbbox()
    if not bbox:
        return None
    l, t, r, b = bbox
    crop_box = (left + l, top + t, left + r, top + b)
    return img.crop(crop_box)


def fit_center(image: Image.Image, size: int) -> Image.Image:
    # fit image into size x size, preserving aspect ratio, centered on transparent background
    image = image.convert("RGBA")
    iw, ih = image.size
    scale = min(size / iw, size / ih)
    nw = max(1, int(iw * scale))
    nh = max(1, int(ih * scale))
    im2 = image.resize((nw, nh), Image.LANCZOS)
    canvas = Image.new("RGBA", (size, size), (0,0,0,0))
    ox = (size - nw) // 2
    oy = (size - nh) // 2
    canvas.paste(im2, (ox, oy), im2)
    return canvas


def build_sprite(icons: List[str], out_path: str, cols: int, size: int):
    if not icons:
        return
    rows = math.ceil(len(icons) / cols)
    sprite = Image.new("RGBA", (cols * size, rows * size), (0,0,0,0))
    for idx, path in enumerate(icons):
        im = Image.open(path).convert("RGBA")
        col = idx % cols
        row = idx // cols
        sprite.paste(im, (col * size, row * size), im)
    sprite.save(out_path)


def write_css(out_css: str, sprite_url: str, count: int, cols: int, size: int):
    lines = []
    lines.append(f".tool-sprite {{ background-image: url('{sprite_url}'); background-repeat: no-repeat; background-size: {cols*size}px auto; width: {size}px; height: {size}px; display:inline-block }}")
    for i in range(count):
        col = i % cols
        row = i // cols
        x = -col * size
        y = -row * size
        lines.append(f".icon-{i+1} {{ background-position: {x}px {y}px }}")
    with open(out_css, 'w') as f:
        f.write("\n".join(lines))


def main():
    p = argparse.ArgumentParser()
    p.add_argument('inputs', nargs='+')
    p.add_argument('--out', default='public/images/tools')
    p.add_argument('--size', type=int, default=40)
    p.add_argument('--cols', type=int, default=10)
    p.add_argument('--sprite', default='public/images/tools-sprite.png')
    p.add_argument('--css', default='public/images/tools-sprite.css')
    args = p.parse_args()

    os.makedirs(args.out, exist_ok=True)
    icons = []
    idx = 1
    for inp in args.inputs:
        img = Image.open(inp).convert('RGBA')
        bg = detect_background_color(img)
        mask = make_mask(img, bg, thresh=30)
        cells = find_cells(mask)
        if not cells:
            # fallback: treat whole image as single grid by scanning for large items
            bbox = mask.getbbox()
            if bbox:
                cells = [bbox]
        for cell in cells:
            cropped = crop_tight(img, mask, cell)
            if cropped is None:
                continue
            fitted = fit_center(cropped, args.size)
            out_name = os.path.join(args.out, f'icon_{idx:03d}.png')
            fitted.save(out_name)
            icons.append(out_name)
            idx += 1

    # build sprite and css
    build_sprite(icons, args.sprite, args.cols, args.size)
    write_css(args.css, '/' + args.sprite.lstrip('/'), len(icons), args.cols, args.size)
    print(f"Wrote {len(icons)} icons to {args.out}, sprite: {args.sprite}, css: {args.css}")


if __name__ == '__main__':
    main()
