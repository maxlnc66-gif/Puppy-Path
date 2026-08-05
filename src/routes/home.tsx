import { createFileRoute, Link } from "@tanstack/react-router";
import { ADVENTURES } from "@/lib/pawpath/data";
import { levelInfo, usePawPath, weakSkills } from "@/lib/pawpath/store";
import { AppHeader, BottomNav } from "@/components/pawpath/AppShell";
import { PuppyImage } from "@/components/pawpath/PuppyImage";
import { NeedsProfile } from "@/components/pawpath/NeedsProfile";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Puppy Home — PawPath Learning" },
      {
        name: "description",
        content:
          "See your puppy, your coins, your level, and your learning streak. Pick an adventure and start today's mission.",
      },
      { property: "og:title", content: "Puppy Home — PawPath Learning" },
      {
        property: "og:description",
        content: "Your puppy, your coins, and your adventure map in PawPath Learning.",
      },
    ],
  }),
  component: HomePage,
});

const COLOR_CLASS: Record<string, string> = {
  sunny: "bg-sunny text-sunny-foreground",
  mint: "bg-mint text-mint-foreground",
  sky: "bg-sky text-sky-foreground",
  berry: "bg-berry text-berry-foreground",
};

function HomePage() {
  const { state } = usePawPath();
  const profile = state.profile;
  if (!profile) return <NeedsProfile />;

  const info = levelInfo(state.xp);
  const weak = weakSkills(state).slice(0, 3);
  const todayAdventure = ADVENTURES[0]!;

  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader title={`Hi, ${profile.name}!`} />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-5">
        <section className="card-soft sky-panel overflow-hidden p-4 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center">
            <div className="mx-auto h-36 w-36 sm:h-44 sm:w-44">
              <PuppyImage
                puppyId={profile.puppyId}
                alt={`${profile.puppyName} the puppy`}
                priority
                className="h-full w-full"
              />
            </div>
            <div className="min-w-0">
              <h2 className="text-2xl">
                {profile.puppyName} {info.current.emoji}
              </h2>
              <p className="text-base text-muted-foreground">
                {info.current.name} · Grade {profile.grade}
              </p>
              <div className="mt-3">
                <div className="h-4 w-full rounded-full bg-card">
                  <div
                    className="h-4 rounded-full bg-primary transition-all"
                    style={{ width: `${info.progress}%` }}
                  />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {info.next
                    ? `${info.progress}% to ${info.next.name}`
                    : "Top level reached! Keep learning."}
                </p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-xl bg-card px-3 py-1.5 font-display font-extrabold">
                  🪙 {state.coins} coins
                </span>
                <span className="rounded-xl bg-card px-3 py-1.5 font-display font-extrabold">
                  ⭐ Level {info.level}
                </span>
                <span className="rounded-xl bg-card px-3 py-1.5 font-display font-extrabold">
                  🔥 {state.dayStreak}-day streak
                </span>
              </div>
            </div>
          </div>
        </section>

        <Link
          to="/mission/$adventureId"
          params={{ adventureId: todayAdventure.id }}
          className="btn-pop mt-5 block bg-primary px-6 py-5 text-center text-2xl text-primary-foreground"
        >
          ▶ Start Today's Mission
        </Link>

        <h2 className="mt-7 text-2xl">🗺️ Adventure Map</h2>
        <p className="text-base text-muted-foreground">
          Every path mixes Math, English, and a little Science.
        </p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          {ADVENTURES.map((a, i) => {
            const done = state.adventureProgress[a.id] ?? 0;
            return (
              <Link
                key={a.id}
                to="/mission/$adventureId"
                params={{ adventureId: a.id }}
                className="card-soft block p-4 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-3xl ${COLOR_CLASS[a.color]}`}
                    aria-hidden
                  >
                    {a.emoji}
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate text-xl">
                      {i + 1}. {a.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{a.blurb}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  {a.steps.map((_, s) => (
                    <span
                      key={s}
                      className={`h-3 flex-1 rounded-full ${s < done ? "bg-success" : "bg-muted"}`}
                    />
                  ))}
                  <span className="font-display text-sm font-extrabold text-muted-foreground">
                    {done}/{a.steps.length}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {weak.length > 0 ? (
          <section className="mt-7">
            <h2 className="text-2xl">🌟 Your Next Skills</h2>
            <p className="text-base text-muted-foreground">
              Practice these to make {profile.puppyName} even stronger.
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {weak.map((s) => (
                <Link
                  key={s.id}
                  to="/practice/$skillId"
                  params={{ skillId: s.id }}
                  className="card-soft block p-4 text-center transition-transform hover:-translate-y-1"
                >
                  <p className="font-display text-lg font-extrabold">{s.friendly}</p>
                  <p className="mt-1 text-sm text-muted-foreground">Practice and earn 5 coins</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <BottomNav />
    </div>
  );
}
