import { Link } from "@tanstack/react-router";
import { usePawPath, levelInfo } from "@/lib/pawpath/store";

export function AppHeader({ title }: { title?: string }) {
  const { state } = usePawPath();
  const info = levelInfo(state.xp);

  return (
    <header className="sticky top-0 z-20 border-b-2 border-border bg-card/95 backdrop-blur">
      <div className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="text-2xl" aria-hidden>
            🐾
          </span>
          <h1 className="truncate font-display text-lg font-extrabold sm:text-xl">
            {title ?? "PawPath Learning"}
          </h1>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <span className="rounded-xl bg-sunny px-3 py-1.5 font-display text-sm font-extrabold text-sunny-foreground">
            🪙 {state.coins}
          </span>
          <span className="hidden rounded-xl bg-accent px-3 py-1.5 font-display text-sm font-extrabold text-accent-foreground sm:inline">
            Level {info.level}
          </span>
        </div>
      </div>
    </header>
  );
}

export function BottomNav() {
  const items = [
    { to: "/home", label: "Home", icon: "🏡" },
    { to: "/shop", label: "Puppy Shop", icon: "🛍️" },
    { to: "/skills", label: "My Skills", icon: "⭐" },
    { to: "/partners", label: "Partners", icon: "🔗" },
    { to: "/parent", label: "Parent", icon: "👨‍👩‍👧" },
  ] as const;

  return (
    <nav className="sticky bottom-0 z-20 border-t-2 border-border bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-stretch justify-around px-2 py-2">
        {items.map((i) => (
          <Link
            key={i.to}
            to={i.to}
            className="flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-xl px-2 py-2 text-center text-muted-foreground transition-colors hover:bg-muted data-[status=active]:bg-primary/12 data-[status=active]:text-primary"
          >
            <span className="text-xl" aria-hidden>
              {i.icon}
            </span>
            <span className="truncate font-display text-xs font-extrabold">{i.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
