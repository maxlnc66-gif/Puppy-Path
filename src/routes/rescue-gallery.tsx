import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { usePawPath } from "@/lib/pawpath/store";
import { AppHeader, BottomNav } from "@/components/pawpath/AppShell";
import { NeedsProfile } from "@/components/pawpath/NeedsProfile";

export const Route = createFileRoute("/rescue-gallery")({
  head: () => ({
    meta: [
      { title: "Rescue Gallery — PawPath Learning" },
      {
        name: "description",
        content:
          "Browse all 160 rescue dogs and cats in PawPath Learning. Adopt, care for, and learn with your new friends.",
      },
      { property: "og:title", content: "Rescue Gallery — PawPath Learning" },
      {
        property: "og:description",
        content:
          "Browse all 160 rescue dogs and cats in PawPath Learning. Adopt, care for, and learn with your new friends.",
      },
    ],
  }),
  component: RescueGalleryPage,
});

function RescueGalleryPage() {
  const { state, adoptPet, interactWithPet, togglePetSelection } = usePawPath();
  const profile = state.profile;
  const [filter, setFilter] = useState<"all" | "dogs" | "cats" | "adopted" | "available">("all");

  if (!profile) return <NeedsProfile />;

  const filteredPets = useMemo(() => {
    return state.rescuePets.filter((pet) => {
      if (filter === "dogs" && pet.type !== "dog") return false;
      if (filter === "cats" && pet.type !== "cat") return false;
      if (filter === "adopted" && !state.adoptedPetIds.includes(pet.id)) return false;
      if (filter === "available" && state.adoptedPetIds.includes(pet.id)) return false;
      return true;
    });
  }, [filter, state.rescuePets, state.adoptedPetIds]);

  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader title="Rescue Gallery" />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-5">
        <section className="card-soft sky-panel grid gap-4 p-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:p-6">
          <div>
            <h1 className="text-3xl font-display font-extrabold">Meet the rescue pets</h1>
            <p className="mt-2 text-base text-muted-foreground">
              There are 80 dogs and 80 cats waiting for a family. Use the filters to explore each pet and adopt the ones you care for.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/home" className="btn-pop rounded-2xl bg-secondary px-4 py-3 text-sm text-secondary-foreground">
              Back to home
            </Link>
            <span className="rounded-2xl bg-card px-4 py-3 text-sm font-extrabold">
              {filteredPets.length} pets shown
            </span>
          </div>
        </section>

        <section className="mt-6 card-soft p-4 sm:p-6">
          <div className="flex flex-wrap items-center gap-3">
            {([
              { id: "all", label: "All" },
              { id: "dogs", label: "Dogs" },
              { id: "cats", label: "Cats" },
              { id: "adopted", label: "Adopted" },
              { id: "available", label: "Available" },
            ] as const).map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setFilter(option.id)}
                className={`btn-pop rounded-full px-4 py-2 text-sm font-extrabold ${
                  filter === option.id ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredPets.map((pet) => {
            const adopted = state.adoptedPetIds.includes(pet.id);
            const following = state.followingPetIds.includes(pet.id);
            const home = state.homePetIds.includes(pet.id);
            return (
              <article key={pet.id} className="rounded-3xl border border-border bg-card/80 p-4 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-secondary text-3xl">
                    {pet.type === "dog" ? "🐶" : "🐱"}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-xl font-display font-extrabold">{pet.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {pet.breed} · Age {pet.age}
                    </p>
                  </div>
                </div>
                <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <p>{pet.story}</p>
                  <p>
                    <span className="font-semibold text-foreground">Mood:</span> {pet.mood}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Favorite food:</span> {pet.favoriteFood}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Favorite toy:</span> {pet.favoriteToy}
                  </p>
                </div>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => interactWithPet(pet.id, "pet")}
                    className="btn-pop rounded-2xl bg-primary px-3 py-2 text-sm text-primary-foreground"
                  >
                    Pet
                  </button>
                  <button
                    type="button"
                    onClick={() => interactWithPet(pet.id, "feed")}
                    className="btn-pop rounded-2xl bg-secondary px-3 py-2 text-sm text-secondary-foreground"
                  >
                    Feed
                  </button>
                  <button
                    type="button"
                    onClick={() => interactWithPet(pet.id, "play")}
                    className="btn-pop rounded-2xl bg-mint px-3 py-2 text-sm text-mint-foreground"
                  >
                    Play
                  </button>
                  <button
                    type="button"
                    onClick={() => interactWithPet(pet.id, "gift")}
                    className="btn-pop rounded-2xl bg-berry px-3 py-2 text-sm text-berry-foreground"
                  >
                    Gift
                  </button>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => togglePetSelection(pet.id, "following")}
                    className={`btn-pop rounded-full px-4 py-2 text-sm ${
                      following ? "bg-success text-success-foreground" : "bg-card text-foreground"
                    }`}
                  >
                    {following ? "Following" : "Follow"}
                  </button>
                  <button
                    type="button"
                    onClick={() => togglePetSelection(pet.id, "home")}
                    className={`btn-pop rounded-full px-4 py-2 text-sm ${
                      home ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {home ? "Home" : "Add to Home"}
                  </button>
                  <button
                    type="button"
                    disabled={adopted}
                    onClick={() => adoptPet(pet.id)}
                    className={`btn-pop rounded-full px-4 py-2 text-sm ${
                      adopted ? "bg-success text-success-foreground" : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {adopted ? "Adopted" : "Adopt"}
                  </button>
                </div>
              </article>
            );
          })}
        </section>
      </main>
      <BottomNav />
    </div>
  );
}
