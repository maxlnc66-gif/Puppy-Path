import { createFileRoute, Link } from "@tanstack/react-router";
import { SKILLS, SUBJECT_LABEL } from "@/lib/pawpath/data";
import { masteredSkills, percent, usePawPath, weakSkills } from "@/lib/pawpath/store";
import { AppHeader, BottomNav } from "@/components/pawpath/AppShell";
import { NeedsProfile } from "@/components/pawpath/NeedsProfile";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "My Skills — PawPath Learning" },
      {
        name: "description",
        content:
          "See the skills you have mastered and your next skill to practice. Practice a new question and earn 5 coins.",
      },
      { property: "og:title", content: "My Skills — PawPath Learning" },
      {
        property: "og:description",
        content: "Kind skill feedback for kids: your strong skills and your next skill power.",
      },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  const { state } = usePawPath();
  if (!state.profile) return <NeedsProfile />;

  const weak = weakSkills(state);
  const strong = masteredSkills(state);

  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader title="My Skills" />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-5">
        <section>
          <h2 className="text-2xl">🌟 Your Next Skills</h2>
          <p className="text-base text-muted-foreground">
            These are your next powers to unlock. Tap one to practice.
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {weak.length === 0 ? (
              <p className="text-base">Wow! No weak spots right now. Keep going! 🐾</p>
            ) : (
              weak.map((s) => (
                <Link
                  key={s.id}
                  to="/practice/$skillId"
                  params={{ skillId: s.id }}
                  className="card-soft block p-4 transition-transform hover:-translate-y-1"
                >
                  <p className="font-display text-xl font-extrabold">
                    Your Next Skill: {s.friendly}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {SUBJECT_LABEL[s.subject]} · {s.name}
                  </p>
                  <div className="mt-3 h-3 w-full rounded-full bg-muted">
                    <div
                      className="h-3 rounded-full bg-primary"
                      style={{ width: `${percent(state.bySkill[s.id])}%` }}
                    />
                  </div>
                  <p className="mt-3 font-display font-extrabold text-primary">
                    ▶ Practice and earn 5 coins
                  </p>
                </Link>
              ))
            )}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl">🏅 Skills You Have Mastered</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {strong.length === 0 ? (
              <p className="text-base text-muted-foreground">Play a mission to build skills!</p>
            ) : (
              strong.map((s) => (
                <span
                  key={s.id}
                  className="rounded-xl bg-success px-3 py-2 font-display font-extrabold text-success-foreground"
                >
                  ✓ {s.friendly} {percent(state.bySkill[s.id])}%
                </span>
              ))
            )}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl">📚 All Skills</h2>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {SKILLS.map((s) => (
              <div key={s.id} className="card-soft flex items-center gap-3 p-3">
                <div className="min-w-0 flex-1">
                  <p className="truncate font-display font-extrabold">{s.friendly}</p>
                  <p className="truncate text-sm text-muted-foreground">
                    {SUBJECT_LABEL[s.subject]} · {s.name}
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-extrabold">
                  {percent(state.bySkill[s.id])}%
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <BottomNav />
    </div>
  );
}
