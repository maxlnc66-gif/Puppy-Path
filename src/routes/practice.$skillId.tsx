import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useState } from "react";
import { QUESTIONS, pickQuestion, skillById } from "@/lib/pawpath/data";
import { usePawPath } from "@/lib/pawpath/store";
import { AppHeader, BottomNav } from "@/components/pawpath/AppShell";
import { QuestionCard } from "@/components/pawpath/QuestionCard";
import { NeedsProfile } from "@/components/pawpath/NeedsProfile";

export const Route = createFileRoute("/practice/$skillId")({
  head: () => ({
    meta: [
      { title: "Skill Practice — PawPath Learning" },
      {
        name: "description",
        content:
          "Practice a new question with the same skill but new numbers or words. Earn 5 coins when you get it right.",
      },
      { property: "og:title", content: "Skill Practice — PawPath Learning" },
      {
        property: "og:description",
        content: "Same skill, new question. Practice and earn 5 coins.",
      },
    ],
  }),
  component: PracticePage,
});

function PracticePage() {
  const { skillId } = useParams({ from: "/practice/$skillId" });
  const { state, addMinutes } = usePawPath();
  const [done, setDone] = useState(false);
  const profile = state.profile;
  if (!profile) return <NeedsProfile />;

  const skill = skillById(skillId);
  const missed = state.wrongLog.filter((w) => w.skill === skillId).at(-1);
  const question =
    (missed ? QUESTIONS.find((q) => q.id === missed.questionId) : undefined) ??
    pickQuestion(skill.subject, skill.id, profile.grade);

  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader title={skill.friendly} />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-5">
        <section className="card-soft sky-panel mb-4 p-4">
          <p className="font-display text-lg font-extrabold">Your Next Skill: {skill.friendly}</p>
          <p className="text-base text-muted-foreground">
            Same skill, new question. Get it right and earn 5 coins! 🪙
          </p>
        </section>

        {done ? (
          <section className="card-soft p-6 text-center">
            <h2 className="text-2xl">Skill practice finished! 🎉</h2>
            <p className="mt-2 text-base">
              You are getting stronger at {skill.friendly}. {profile.puppyName} is proud of you.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Link
                to="/skills"
                className="btn-pop bg-primary px-5 py-3 text-lg text-primary-foreground"
              >
                ⭐ More skills
              </Link>
              <Link to="/home" className="btn-pop bg-card px-5 py-3 text-lg">
                🏡 Back to Home
              </Link>
            </div>
          </section>
        ) : (
          <QuestionCard
            question={question}
            mode="practice"
            ctaLabel="Finish practice"
            onCorrect={() => {
              addMinutes(1);
              setDone(true);
            }}
          />
        )}
      </main>
      <BottomNav />
    </div>
  );
}
