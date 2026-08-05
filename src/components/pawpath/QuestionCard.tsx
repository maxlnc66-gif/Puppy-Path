import { useState } from "react";
import type { Question } from "@/lib/pawpath/data";
import { SUBJECT_LABEL, skillById } from "@/lib/pawpath/data";
import { usePawPath, type AnswerResult } from "@/lib/pawpath/store";

const SUBJECT_STYLE: Record<string, string> = {
  math: "bg-sky text-sky-foreground",
  english: "bg-berry text-berry-foreground",
  science: "bg-mint text-mint-foreground",
};

export function QuestionCard({
  question,
  mode,
  story,
  onCorrect,
  ctaLabel = "Next",
}: {
  question: Question;
  mode: "mission" | "practice";
  story?: string;
  onCorrect: (result: AnswerResult) => void;
  ctaLabel?: string;
}) {
  const { answer } = usePawPath();
  const item = mode === "practice" ? question.practice : question;
  const [picked, setPicked] = useState<number | null>(null);
  const [result, setResult] = useState<AnswerResult | null>(null);
  const skill = skillById(question.skill);

  function choose(index: number) {
    if (result?.correct) return;
    setPicked(index);
    setResult(answer(question, index, mode));
  }

  function tryAgain() {
    setPicked(null);
    setResult(null);
  }

  const solved = result?.correct === true;

  return (
    <section className="card-soft p-4 sm:p-6">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span
          className={`rounded-lg px-2.5 py-1 font-display text-xs font-extrabold ${SUBJECT_STYLE[question.subject]}`}
        >
          {SUBJECT_LABEL[question.subject]}
        </span>
        <span className="rounded-lg bg-muted px-2.5 py-1 font-display text-xs font-extrabold text-muted-foreground">
          {skill.friendly}
        </span>
      </div>

      {story ? <p className="mb-2 text-base text-muted-foreground">🐾 {story}</p> : null}
      <h2 className="text-xl leading-snug sm:text-2xl">{item.prompt}</h2>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {item.options.map((opt, index) => {
          const isPicked = picked === index;
          const showRight = result && index === item.answer && (solved || isPicked);
          let style = "bg-secondary text-secondary-foreground";
          if (showRight) style = "bg-success text-success-foreground";
          else if (result && isPicked && !result.correct)
            style = "bg-destructive text-destructive-foreground";
          return (
            <button
              key={opt}
              type="button"
              onClick={() => choose(index)}
              disabled={solved}
              className={`btn-pop min-h-16 px-4 py-3 text-left text-lg ${style}`}
            >
              <span className="mr-2 opacity-70">{["A", "B", "C", "D"][index]}</span>
              {opt}
            </button>
          );
        })}
      </div>

      {result && !result.correct ? (
        <div className="mt-5 rounded-2xl border-2 border-border bg-muted p-4">
          <h3 className="text-lg">Almost there! Let's learn it together 🐶</h3>
          <p className="mt-2 text-base">
            <span className="font-display font-extrabold">Hint: </span>
            {item.hint}
          </p>
          <p className="mt-2 text-base">
            <span className="font-display font-extrabold">Example: </span>
            {item.example}
          </p>
          <div className="mt-3">
            <p className="font-display font-extrabold">Step by step:</p>
            <ol className="mt-1 space-y-1">
              {item.steps.map((s, i) => (
                <li key={s} className="flex gap-2 text-base">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-extrabold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>
          <button
            type="button"
            onClick={tryAgain}
            className="btn-pop mt-4 w-full bg-primary px-6 py-3 text-lg text-primary-foreground sm:w-auto"
          >
            🔁 Try Again
          </button>
        </div>
      ) : null}

      {solved ? (
        <div className="mt-5 rounded-2xl border-2 border-success/40 bg-success/12 p-4">
          <h3 className="text-lg">Great job! 🎉 You earned {result?.coins} coins.</h3>
          {result?.bonus ? (
            <p className="mt-1 text-base">
              Three right in a row! Bonus 5 coins for your puppy. 🦴
            </p>
          ) : null}
          <button
            type="button"
            onClick={() => result && onCorrect(result)}
            className="btn-pop mt-4 w-full bg-success px-6 py-3 text-lg text-success-foreground sm:w-auto"
          >
            {ctaLabel} →
          </button>
        </div>
      ) : null}
    </section>
  );
}
