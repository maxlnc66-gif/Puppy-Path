import { createFileRoute, Link } from "@tanstack/react-router";
import { QUESTIONS, SUBJECT_LABEL, skillById } from "@/lib/pawpath/data";
import {
  masteredSkills,
  overallPercent,
  percent,
  totals,
  usePawPath,
  weakSkills,
} from "@/lib/pawpath/store";
import { AppHeader, BottomNav } from "@/components/pawpath/AppShell";
import { CircleStat } from "@/components/pawpath/CircleStat";
import { NeedsProfile } from "@/components/pawpath/NeedsProfile";

export const Route = createFileRoute("/parent")({
  head: () => ({
    meta: [
      { title: "Parent Report — PawPath Learning" },
      {
        name: "description",
        content:
          "A clear parent report: overall mastery, Math, English and Science percentages, time spent learning, and every wrong answer explained.",
      },
      { property: "og:title", content: "Parent Report — PawPath Learning" },
      {
        property: "og:description",
        content:
          "See mastery circles, mastered skills, skills that need practice, and a full wrong-answer report.",
      },
    ],
  }),
  component: ParentPage,
});

function ParentPage() {
  const { state } = usePawPath();
  const profile = state.profile;
  if (!profile) return <NeedsProfile />;

  const overall = overallPercent(state);
  const t = totals(state);
  const strong = masteredSkills(state);
  const weak = weakSkills(state);
  const hours = Math.floor(state.minutesLearning / 60);
  const mins = state.minutesLearning % 60;

  const wrongItems = [...state.wrongLog]
    .sort((a, b) => b.at - a.at)
    .map((w) => ({ entry: w, question: QUESTIONS.find((q) => q.id === w.questionId) }))
    .filter((x) => x.question);

  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader title="Parent Report" />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-5">
        <section className="card-soft sky-panel p-5 text-center">
          <h2 className="text-2xl">
            {profile.name} · Grade {profile.grade}
          </h2>
          <p className="text-base text-muted-foreground">
            Puppy: {profile.puppyName} · Learning streak: {state.dayStreak} days
          </p>
          <div className="mt-4 flex justify-center">
            <CircleStat value={overall} label="Overall Mastery" size={190} />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            <CircleStat
              value={percent(state.bySubject.math)}
              label="Math"
              size={104}
              color="var(--sky)"
            />
            <CircleStat
              value={percent(state.bySubject.english)}
              label="English"
              size={104}
              color="var(--berry)"
            />
            <CircleStat
              value={percent(state.bySubject.science)}
              label="Science"
              size={104}
              color="var(--mint)"
            />
          </div>
        </section>

        <section className="mt-5 grid gap-3 sm:grid-cols-4">
          <Stat label="Correct answers" value={String(t.correct)} emoji="✅" />
          <Stat label="Wrong answers" value={String(t.wrong)} emoji="📝" />
          <Stat
            label="Time spent learning"
            value={hours > 0 ? `${hours}h ${mins}m` : `${mins}m`}
            emoji="⏱️"
          />
          <Stat
            label="Weekly improvement"
            value={`+${state.weeklyImprovement}%`}
            emoji="📈"
          />
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="card-soft p-4">
            <h3 className="text-xl">Skills mastered</h3>
            <ul className="mt-2 space-y-1">
              {strong.length === 0 ? (
                <li className="text-base text-muted-foreground">No mastered skills yet.</li>
              ) : (
                strong.map((s) => (
                  <li key={s.id} className="flex items-center justify-between gap-2 text-base">
                    <span className="min-w-0 truncate">
                      {s.name} <span className="text-muted-foreground">({SUBJECT_LABEL[s.subject]})</span>
                    </span>
                    <span className="shrink-0 font-display font-extrabold text-success">
                      {percent(state.bySkill[s.id])}%
                    </span>
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="card-soft p-4">
            <h3 className="text-xl">Skills that need more practice</h3>
            <ul className="mt-2 space-y-1">
              {weak.length === 0 ? (
                <li className="text-base text-muted-foreground">
                  Nothing below 70% right now.
                </li>
              ) : (
                weak.map((s) => (
                  <li key={s.id} className="flex items-center justify-between gap-2 text-base">
                    <span className="min-w-0 truncate">
                      {s.name} <span className="text-muted-foreground">({SUBJECT_LABEL[s.subject]})</span>
                    </span>
                    <span className="shrink-0 font-display font-extrabold text-primary">
                      {percent(state.bySkill[s.id])}%
                    </span>
                  </li>
                ))
              )}
            </ul>
          </div>
        </section>

        <section className="mt-7">
          <h2 className="text-2xl">Wrong Answer Report</h2>
          <p className="text-base text-muted-foreground">
            Each question shows what went wrong, why, and what to practice next.
          </p>
          <div className="mt-3 space-y-4">
            {wrongItems.length === 0 ? (
              <p className="card-soft p-4 text-base">No wrong answers recorded yet.</p>
            ) : (
              wrongItems.map(({ entry, question }) => {
                const q = question!;
                const skill = skillById(q.skill);
                return (
                  <article key={entry.id} className="card-soft p-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-lg bg-muted px-2.5 py-1 font-display text-xs font-extrabold">
                        {SUBJECT_LABEL[q.subject]} · {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(entry.at).toLocaleDateString()}
                      </span>
                      {entry.practiced ? (
                        <span className="rounded-lg bg-success px-2.5 py-1 font-display text-xs font-extrabold text-success-foreground">
                          Practiced ✓
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-2 text-lg leading-snug">{q.prompt}</h3>
                    <dl className="mt-3 grid gap-2 sm:grid-cols-2">
                      <Row term="Child's answer" value={q.options[entry.chosen] ?? "No answer"} bad />
                      <Row term="Correct answer" value={q.options[q.answer]!} />
                    </dl>
                    <p className="mt-3 text-base">
                      <span className="font-display font-extrabold">Explanation: </span>
                      {q.steps.join(" ")}
                    </p>
                    <div className="mt-3 rounded-2xl border-2 border-border bg-muted p-3">
                      <p className="font-display font-extrabold">New similar question:</p>
                      <p className="text-base">{q.practice.prompt}</p>
                    </div>
                    <Link
                      to="/practice/$skillId"
                      params={{ skillId: q.skill }}
                      className="btn-pop mt-4 inline-block bg-primary px-5 py-3 text-base text-primary-foreground"
                    >
                      🪙 Practice and Earn 5 Coins
                    </Link>
                  </article>
                );
              })
            )}
          </div>
        </section>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link to="/home" className="btn-pop bg-card px-5 py-3 text-center text-lg">
            🎒 Student View
          </Link>
          <Link to="/" className="btn-pop bg-secondary px-5 py-3 text-center text-lg">
            ⚙️ Change details
          </Link>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

function Stat({ label, value, emoji }: { label: string; value: string; emoji: string }) {
  return (
    <div className="card-soft p-4 text-center">
      <p className="text-2xl" aria-hidden>
        {emoji}
      </p>
      <p className="font-display text-2xl font-extrabold">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function Row({ term, value, bad = false }: { term: string; value: string; bad?: boolean }) {
  return (
    <div className={`rounded-xl px-3 py-2 ${bad ? "bg-destructive/12" : "bg-success/12"}`}>
      <dt className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{term}</dt>
      <dd className="text-base">{value}</dd>
    </div>
  );
}
