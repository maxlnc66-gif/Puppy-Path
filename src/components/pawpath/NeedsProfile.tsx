import { Link } from "@tanstack/react-router";

export function NeedsProfile() {
  return (
    <main className="sky-panel flex min-h-screen items-center justify-center px-4">
      <div className="card-soft max-w-sm p-6 text-center">
        <p className="text-5xl" aria-hidden>
          🐶
        </p>
        <h1 className="mt-3 text-2xl">Let's meet your puppy first!</h1>
        <p className="mt-2 text-base text-muted-foreground">
          Tell us your name, your grade, and your puppy's name to begin.
        </p>
        <Link
          to="/"
          className="btn-pop mt-5 inline-block bg-primary px-6 py-3 text-lg text-primary-foreground"
        >
          Go to Start Page
        </Link>
      </div>
    </main>
  );
}
