import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ADVENTURES, BACKGROUND_OPTIONS, getLearningSections, SUBJECT_LABEL, SHOP_ITEMS, type Grade, type Subject } from "@/lib/pawpath/data";
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
  const { state, setGrade, unlockBackground, setBackground, setHomeSlot, clearHomeSlot, claimCheckIn, interactWithPet, togglePetSelection, adoptPet } = usePawPath();
  const profile = state.profile;
  const [activeSubject, setActiveSubject] = useState<Subject>("math");
  const [message, setMessage] = useState("");
  if (!profile) return <NeedsProfile />;

  const info = levelInfo(state.xp);
  const weak = weakSkills(state).slice(0, 3);
  const todayAdventure = ADVENTURES[0]!;
  const sections = useMemo(() => getLearningSections(profile.grade, activeSubject), [profile.grade, activeSubject]);
  const selectedBackground = BACKGROUND_OPTIONS.find((bg) => bg.id === state.backgroundId) ?? BACKGROUND_OPTIONS[0]!;

  function buyBackground(backgroundId: string, cost: number) {
    const ok = unlockBackground(backgroundId, cost);
    setMessage(ok ? `New background unlocked! ${backgroundId}` : "You need more coins for that background.");
  }

  function handleCheckIn() {
    const result = claimCheckIn();
    if (result) {
      setMessage(`Check-in complete! You earned ${result.coins} coins.`);
    } else {
      setMessage("You already checked in today.");
    }
  }

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

        {message ? <p className="mt-4 rounded-2xl border border-border bg-sunny/80 px-4 py-3 text-base font-bold text-sunny-foreground">{message}</p> : null}

        <section className="mt-6 card-soft p-4 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl">Choose a grade</h2>
              <p className="text-base text-muted-foreground">Each grade has new learning paths and rescue-hotel goals.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {([1,2,3,4,5,6,7,8,9,10] as Grade[]).map((grade) => (
                <button key={grade} type="button" onClick={() => { setGrade(grade); setMessage(`Grade ${grade} is ready.`); }} className={`btn-pop rounded-xl px-3 py-2 text-sm font-extrabold ${profile.grade === grade ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
                  Grade {grade}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 card-soft p-4 sm:p-6">
          <div className="flex flex-wrap gap-2">
            {(["math", "english", "science"] as Subject[]).map((subject) => (
              <button key={subject} type="button" onClick={() => setActiveSubject(subject)} className={`btn-pop rounded-2xl px-4 py-3 text-lg font-extrabold ${activeSubject === subject ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
                {SUBJECT_LABEL[subject]}
              </button>
            ))}
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {sections.map((section) => (
              <article key={section.id} className="rounded-2xl border border-border bg-card/80 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-lg font-extrabold">{section.name}</p>
                    <p className="text-sm text-muted-foreground">Progress 60%</p>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-extrabold text-primary">Start</span>
                </div>
                <div className="mt-3 flex gap-2 text-sm text-muted-foreground">
                  <span>✅ 4 done</span>
                  <span>❌ 1 wrong</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link to="/practice/$skillId" params={{ skillId: `${activeSubject}-${section.id}` }} className="btn-pop bg-primary px-4 py-2 text-sm text-primary-foreground">Start</Link>
                  <Link to="/practice/$skillId" params={{ skillId: `${activeSubject}-${section.id}` }} className="btn-pop bg-secondary px-4 py-2 text-sm text-secondary-foreground">Practice</Link>
                  {section.name.toLowerCase().includes("word") || section.name.toLowerCase().includes("grammar") || section.name.toLowerCase().includes("reading") ? <button type="button" className="btn-pop bg-mint px-4 py-2 text-sm text-mint-foreground">Weak-skill</button> : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 card-soft p-4 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl">Rescue Hotel Home</h2>
              <p className="text-base text-muted-foreground">Move nine items, rescue pets, and build a happy home.</p>
            </div>
            <button type="button" onClick={handleCheckIn} className="btn-pop bg-primary px-4 py-3 text-base text-primary-foreground">🗓️ Daily Check-In</button>
          </div>
          <div className="mt-4 rounded-[2rem] border border-border bg-[linear-gradient(135deg,#fce7b6_0%,#fff7d6_35%,#b8f3c7_100%)] p-4">
            <div className="rounded-[1.5rem] border border-border bg-white/60 p-3">
              <div className="mb-3 flex items-center justify-between text-sm font-extrabold">
                <span>Background: {selectedBackground.name}</span>
                <span>🪙 {state.coins}</span>
              </div>
              <div className="grid gap-2 sm:grid-cols-3">
                {state.homeSlots.map((slot, index) => (
                  <button
                    key={`${slot ?? "empty"}-${index}`}
                    type="button"
                    onClick={() => {
                      if (slot) clearHomeSlot(index);
                    }}
                    className="flex h-24 items-center justify-center rounded-2xl border border-dashed border-border bg-card/80 text-2xl"
                  >
                    {slot ? (
                      <div className="flex flex-col items-center gap-1">
                        <span className={`tool-icon icon-${slot}`} aria-hidden>
                          {SHOP_ITEMS.find((i) => i.id === slot)?.emoji}
                        </span>
                        <span className="text-sm">{SHOP_ITEMS.find((i) => i.id === slot)?.name ?? slot}</span>
                      </div>
                    ) : (
                      <span className="text-sm text-muted-foreground">Slot {index + 1}</span>
                    )}
                  </button>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {SHOP_ITEMS.filter((i) => i.group === "Rescue Hotel").slice(0, 9).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      const slot = state.homeSlots.findIndex((entry) => entry === null);
                      if (slot >= 0) setHomeSlot(slot, item.id);
                    }}
                    className="flex flex-col items-center gap-2 rounded-2xl bg-secondary/70 px-3 py-3 text-sm font-extrabold"
                  >
                    <span className={`tool-icon icon-${item.id}`} aria-hidden>
                      {item.emoji}
                    </span>
                    <span className="text-sm">{item.name}</span>
                    <span className="text-xs text-muted-foreground">🪙 {item.cost}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 card-soft p-4 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl">Rescue gallery</h2>
              <p className="text-base text-muted-foreground">Browse all 160 rescue pets and see every dog and cat in their happy stories.</p>
            </div>
            <Link to="/rescue-gallery" className="btn-pop bg-primary px-4 py-3 text-sm text-primary-foreground">
              Open the full gallery
            </Link>
          </div>
        </section>

        <section className="mt-6 card-soft p-4 sm:p-6">
          <h2 className="text-2xl">Backgrounds</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {BACKGROUND_OPTIONS.map((background) => {
              const owned = state.ownedBackgroundIds.includes(background.id);
              return (
                <div key={background.id} className="rounded-2xl border border-border bg-card/70 p-4">
                  <p className="text-lg font-extrabold">{background.name}</p>
                  <p className="text-sm text-muted-foreground">{background.description}</p>
                  <p className="mt-2 text-sm font-extrabold">{background.emoji} {background.cost === 0 ? "Free" : `${background.cost} coins`}</p>
                  <div className="mt-3 flex gap-2">
                    <button type="button" onClick={() => setBackground(background.id)} className="btn-pop bg-primary px-3 py-2 text-sm text-primary-foreground">Preview</button>
                    {!owned ? <button type="button" onClick={() => buyBackground(background.id, background.cost)} className="btn-pop bg-secondary px-3 py-2 text-sm text-secondary-foreground">Buy</button> : <span className="rounded-xl bg-success px-3 py-2 text-sm font-extrabold text-success-foreground">Owned</span>}
                  </div>
                </div>
              );
            })}
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
