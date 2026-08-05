import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useState } from "react";
import { ADVENTURES, pickQuestion } from "@/lib/pawpath/data";
import { usePawPath } from "@/lib/pawpath/store";
import { AppHeader, BottomNav } from "@/components/pawpath/AppShell";
import { QuestionCard } from "@/components/pawpath/QuestionCard";
import { PuppyImage } from "@/components/pawpath/PuppyImage";
import { NeedsProfile } from "@/components/pawpath/NeedsProfile";

export const Route = createFileRoute("/mission/$adventureId")({
  head: () => ({
    meta: [
      { title: "Today's Mission — PawPath Learning" },
      {
        name: "description",
        content:
          "Play a learning adventure that mixes Math, English, and Science. Earn coins for every correct answer.",
      },
      { property: "og:title", content: "Today's Mission — PawPath Learning" },
      {
        property: "og:description",
        content: "Solve math, read clues, and help animals to finish your adventure.",
      },
    ],
  }),
  component: MissionPage,
});

function MissionPage() {
  const { adventureId } = useParams({ from: "/mission/$adventureId" });
  const { state, setAdventureStep, addMinutes } = usePawPath();
  const [step, setStep] = useState(0);
  const [earned, setEarned] = useState(0);

  const profile = state.profile;
  const adventure = ADVENTURES.find((a) => a.id === adventureId);

  if (!profile) return <NeedsProfile />;
  if (!adventure) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4">
        <div className="card-soft p-6 text-center">
          <h1 className="text-2xl">Adventure not found 🐾</h1>
          <Link
            to="/home"
            className="btn-pop mt-4 inline-block bg-primary px-5 py-3 text-lg text-primary-foreground"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  const finished = step >= adventure.steps.length;
  const current = adventure.steps[Math.min(step, adventure.steps.length - 1)]!;
  const question = pickQuestion(current.subject, current.skill, profile.grade);

  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader title={adventure.title} />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-5">
        <div className="mb-4 flex items-center gap-2">
          {adventure.steps.map((_, i) => (
            <span
              key={i}
              className={`h-3 flex-1 rounded-full ${i < step ? "bg-success" : "bg-muted"}`}
            />
          ))}
          <span className="font-display text-sm font-extrabold text-muted-foreground">
            {Math.min(step + 1, adventure.steps.length)}/{adventure.steps.length}
          </span>
        </div>

        {finished ? (
          <section className="card-soft sky-panel p-6 text-center">
            <div className="mx-auto h-40 w-40">
              <PuppyImage
                puppyId={profile.puppyId}
                alt={profile.puppyName}
                className="h-full w-full"
              />
            </div>
            <h2 className="mt-2 text-3xl">Adventure complete! 🎉</h2>
            <p className="mt-2 text-lg">
              You earned <strong>{earned} coins</strong>. {profile.puppyName} is very happy!
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Link
                to="/shop"
                className="btn-pop bg-primary px-5 py-4 text-lg text-primary-foreground"
              >
                🛍️ Spoil my puppy
              </Link>
              <Link to="/home" className="btn-pop bg-card px-5 py-4 text-lg">
                🏡 Back to Home
              </Link>
            </div>
          </section>
        ) : (
          <QuestionCard
            key={`${adventure.id}-${step}`}
            question={question}
            mode="mission"
            story={current.story}
            ctaLabel={step === adventure.steps.length - 1 ? "Finish adventure" : "Next"}
            onCorrect={(result) => {
              setEarned((c) => c + result.coins);
              const next = step + 1;
              setStep(next);
              setAdventureStep(adventure.id, next);
              addMinutes(2);
            }}
          />
        )}
      </main>
      <BottomNav />
    </div>
  );
}
