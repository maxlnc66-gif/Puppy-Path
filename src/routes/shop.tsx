import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SHOP_ITEMS, TOOL_CATEGORIES, type ShopItem } from "@/lib/pawpath/data";
import { levelInfo, usePawPath } from "@/lib/pawpath/store";
import { AppHeader, BottomNav } from "@/components/pawpath/AppShell";
import { PuppyImage } from "@/components/pawpath/PuppyImage";
import { NeedsProfile } from "@/components/pawpath/NeedsProfile";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Puppy Shop — PawPath Learning" },
      {
        name: "description",
        content:
          "Spend the coins you earned on puppy food, toys, clothes, room items, new places, and puppy skills.",
      },
      { property: "og:title", content: "Puppy Shop — PawPath Learning" },
      {
        property: "og:description",
        content: "Use your learning coins to feed, dress, and train your puppy.",
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const { state, buy } = usePawPath();
  const [message, setMessage] = useState("");
  const profile = state.profile;
  if (!profile) return <NeedsProfile />;
  const info = levelInfo(state.xp);
  const puppyName = profile.puppyName;

  function handleBuy(item: ShopItem) {
    const ok = buy(item.id);
    setMessage(
      ok
        ? `Yay! ${puppyName} loves the ${item.name}. ${item.emoji}`
        : `You need ${item.cost - state.coins} more coins for the ${item.name}. Answer more questions!`,
    );
  }

  const owned = SHOP_ITEMS.filter((i) => state.owned.includes(i.id));
  const affordableItems = SHOP_ITEMS.filter(
    (item) => !state.owned.includes(item.id) && item.cost <= state.coins,
  );

  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader title="Puppy Shop" />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-5">
        <section className="card-soft sky-panel grid gap-4 p-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center sm:p-6">
          <div className="mx-auto h-28 w-28">
            <PuppyImage
              puppyId={profile.puppyId}
              alt={profile.puppyName}
              priority
              className="h-full w-full"
            />
          </div>
          <div className="min-w-0">
            <h2 className="text-2xl">
              {profile.puppyName} · {info.current.name}
            </h2>
            <p className="text-base text-muted-foreground">
              You have <strong>{state.coins} coins</strong> to spend. No real money — only
              learning coins!
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {owned.length === 0 ? (
                <span className="text-sm text-muted-foreground">Nothing bought yet.</span>
              ) : (
                owned.map((i) => (
                  <span
                    key={i.id}
                    className="rounded-xl bg-card px-2.5 py-1 font-display text-sm font-extrabold"
                    title={i.name}
                  >
                    {i.emoji} {i.name}
                  </span>
                ))
              )}
            </div>
          </div>
        </section>

        {message ? (
          <p className="mt-4 rounded-2xl border-2 border-border bg-sunny px-4 py-3 text-base font-bold text-sunny-foreground">
            {message}
          </p>
        ) : null}

        <section className="mt-6 card-soft p-4 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl">What you can buy now</h2>
              <p className="text-sm text-muted-foreground">
                These items are affordable with your current coin balance.
              </p>
            </div>
            <span className="rounded-full bg-secondary px-3 py-1 text-sm font-extrabold text-secondary-foreground">
              {affordableItems.length} available
            </span>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {affordableItems.length === 0 ? (
              <div className="rounded-3xl border border-border bg-card p-4 text-sm text-muted-foreground">
                No affordable items right now. Keep learning to earn more coins.
              </div>
            ) : (
              affordableItems.map((item) => (
                <div key={item.id} className="card-soft flex items-center gap-3 p-3">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-secondary">
                    <span className={`tool-icon icon-${item.id}`} aria-hidden>
                      {item.emoji}
                    </span>
                    <span className="sr-only">{item.emoji}</span>
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display text-lg font-extrabold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">🪙 {item.cost} coins</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleBuy(item)}
                    className="btn-pop shrink-0 bg-primary px-4 py-2.5 text-base text-primary-foreground"
                  >
                    Buy now
                  </button>
                </div>
              ))
            )}
          </div>
        </section>

        {TOOL_CATEGORIES.map((category) => (
          <section key={category.id} className="mt-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl">
                  {category.emoji} {category.name}
                </h2>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
              <span className="rounded-full bg-secondary px-3 py-1 text-sm font-extrabold text-secondary-foreground">
                {category.variants.length} tools
              </span>
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {category.variants.map((item) => {
                const shopItem = SHOP_ITEMS.find((i) => i.id === item.id) ?? item;
                const has = state.owned.includes(shopItem.id);
                return (
                  <div key={shopItem.id} className="card-soft flex items-center gap-3 p-3">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-secondary">
                      <span className={`tool-icon icon-${shopItem.id}`} aria-hidden>
                        {shopItem.emoji}
                      </span>
                      <span className="sr-only">{shopItem.emoji}</span>
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-display text-lg font-extrabold">{shopItem.name}</p>
                      <p className="text-sm text-muted-foreground">🪙 {shopItem.cost} coins</p>
                    </div>
                    <button
                      type="button"
                      disabled={has}
                      onClick={() => handleBuy(shopItem)}
                      className={`btn-pop shrink-0 px-4 py-2.5 text-base ${
                        has
                          ? "bg-success text-success-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {has ? "Owned" : "Buy"}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </main>
      <BottomNav />
    </div>
  );
}
