import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PUPPIES, STARTER_DOGS, type Grade } from "@/lib/pawpath/data";
import { usePawPath } from "@/lib/pawpath/store";
import { PuppyImage } from "@/components/pawpath/PuppyImage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PawPath Learning — Adopt a Puppy, Learn Math & English" },
      {
        name: "description",
        content:
          "PawPath Learning is a fun app for Grades 3–5. Adopt a puppy, go on learning adventures, and grow in Math, English, and Science.",
      },
      { property: "og:title", content: "PawPath Learning — Adopt a Puppy, Learn Math & English" },
      {
        property: "og:description",
        content:
          "PawPath Learning is a fun app for Grades 3–5. Adopt a puppy, go on learning adventures, and grow in Math, English, and Science.",
      },
    ],
  }),
  component: StartPage,
});

const GRADES: Grade[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function StartPage() {
  const { state, startProfile } = usePawPath();
  const navigate = useNavigate();
  const [name, setName] = useState(state.profile?.name ?? "");
  const [grade, setGrade] = useState<Grade>(state.profile?.grade ?? 3);
  const [puppyName, setPuppyName] = useState(state.profile?.puppyName ?? "");
  const [puppyId, setPuppyId] = useState(state.profile?.puppyId ?? "sunny");
  const [starterPetId, setStarterPetId] = useState(state.profile?.starterPetId ?? "corgi");
  const [error, setError] = useState("");

  function go(where: "/home" | "/parent") {
    if (!name.trim() || !puppyName.trim()) {
      setError("Please write your name and your puppy's name. 🐾");
      return;
    }
    setError("");
    startProfile({ name: name.trim(), grade, puppyName: puppyName.trim(), puppyId, starterPetId });
    navigate({ to: where });
  }

  return (
    <main className="sky-panel min-h-screen px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <p className="font-display text-lg font-extrabold text-primary">🐾 Welcome to</p>
          <h1 className="text-4xl sm:text-5xl">PawPath Learning</h1>
          <p className="mx-auto mt-2 max-w-md text-lg text-muted-foreground">
            Adopt a puppy. Go on adventures. Your puppy grows when you learn!
          </p>
        </div>

        <div className="mx-auto mt-4 h-40 w-40 sm:h-48 sm:w-48">
          <PuppyImage puppyId={puppyId} alt="Your puppy" priority className="h-full w-full" />
        </div>

        <div className="card-soft mt-4 space-y-6 p-4 sm:p-6">
          <div>
            <label htmlFor="name" className="font-display text-lg font-extrabold">
              Your name
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type your name"
              className="mt-2 w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-lg outline-none focus:border-primary"
            />
          </div>

          <div>
            <p className="font-display text-lg font-extrabold">Your grade</p>
            <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {GRADES.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGrade(g)}
                  className={`btn-pop px-3 py-3 text-lg ${
                    grade === g
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  Grade {g}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="puppyName" className="font-display text-lg font-extrabold">
              Puppy name
            </label>
            <input
              id="puppyName"
              value={puppyName}
              onChange={(e) => setPuppyName(e.target.value)}
              placeholder="Give your puppy a name"
              className="mt-2 w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-lg outline-none focus:border-primary"
            />
          </div>

          <div>
            <p className="font-display text-lg font-extrabold">Choose a starter rescue dog</p>
            <div className="mt-2 grid gap-3 sm:grid-cols-3">
              {STARTER_DOGS.map((pet) => (
                <button
                  key={pet.id}
                  type="button"
                  onClick={() => setStarterPetId(pet.id)}
                  className={`btn-pop flex flex-col items-start gap-1 p-3 text-left ${
                    starterPetId === pet.id
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <span className="text-2xl">🐶</span>
                  <span className="font-display text-sm font-extrabold">{pet.name}</span>
                  <span className="text-sm">{pet.breed}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-lg font-extrabold">Choose a puppy</p>
            <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {PUPPIES.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPuppyId(p.id)}
                  className={`btn-pop flex flex-col items-center gap-1 p-3 ${
                    puppyId === p.id
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <PuppyImage puppyId={p.id} alt={p.name} className="h-16 w-16" />
                  <span className="font-display text-sm font-extrabold">{p.name}</span>
                </button>
              ))}
            </div>
          </div>

          {error ? <p className="text-base font-bold text-destructive">{error}</p> : null}

          <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => go("/home")}
              className="btn-pop bg-primary px-6 py-4 text-xl text-primary-foreground"
            >
              🎒 Student View
            </button>
            <button
              type="button"
              onClick={() => go("/parent")}
              className="btn-pop bg-mint px-6 py-4 text-xl text-mint-foreground"
            >
              👨‍👩‍👧 Parent View
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
