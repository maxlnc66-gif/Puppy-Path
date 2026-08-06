import { createFileRoute } from "@tanstack/react-router";
import { AppHeader, BottomNav } from "@/components/pawpath/AppShell";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — PawPath Learning" },
      { name: "description", content: "External resources and partner sites for PawPath Learning." },
    ],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  const sites = [
    { url: "https://puppy-path-learners.lovable.app/", name: "Puppy Path Learners (lovable)" },
    { url: "https://pup-learn-haven.base44.app/", name: "Pup Learn Haven (base44)" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader title="Partners" />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-6">
        <section className="card-soft p-4">
          <h2 className="text-2xl font-display font-extrabold">Connected sites</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            These partner sites are linked to PawPath Learning. Click a card to open the site in a new tab.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {sites.map((s) => (
              <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-border bg-card/80 p-4 hover:shadow-card">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-display text-lg font-extrabold">{s.name}</p>
                    <p className="text-sm text-muted-foreground">{s.url}</p>
                  </div>
                  <div className="text-3xl">🔗</div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 text-sm text-muted-foreground">
            <p>
              Integration note: this page provides safe, minimal linking. For deeper integration (SSO, data sync, iframe embedding, or API proxy), provide API details and credentials and I can implement the chosen method.
            </p>
          </div>
        </section>
      </main>
      <BottomNav />
    </div>
  );
}
