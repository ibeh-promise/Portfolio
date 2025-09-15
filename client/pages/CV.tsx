import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CV() {
  return (
    <main className="container max-w-4xl py-10">
      <div className="flex items-center justify-between gap-4 print:hidden">
        <h1 className="text-3xl font-extrabold tracking-tight">Curriculum Vitae</h1>
        <Button onClick={() => window.print()}>Download as PDF</Button>
      </div>

      <section className="mt-6 grid gap-8 print:mt-0">
        <header className="grid gap-2">
          <h2 className="text-2xl font-bold">Promise Ibeh</h2>
          <p className="text-muted-foreground">
            Full‑Stack Engineer • Mobile App Developer • Lagos, Nigeria — ibehpromise3d@gmail.com
        </p>
        </header>

        <section>
          <h3 className="font-semibold mb-2">Summary</h3>
          <p className="text-sm leading-7 text-muted-foreground">
            Full‑stack developer and app developer delivering high‑impact products for startups and enterprises. Specialized in TypeScript, React, Node.js, and React Native with strong product thinking, DX focus, and an eye for quality.
          </p>
        </section>

        <section>
          <h3 className="font-semibold mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {["TypeScript","React","Next.js","React Native","Node.js","Express","PostgreSQL","Sequelize","Supabase","TailwindCSS","Docker","CI/CD","AWS","Vercel","Netlify"].map((s) => (
              <Badge key={s} variant="secondary">{s}</Badge>
            ))}
          </div>
        </section>

        <section className="grid gap-4">
          <h3 className="font-semibold">Experience</h3>
          <div className="space-y-4">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-medium">Senior Full‑Stack Developer — Freelance</p>
                <p className="text-xs text-muted-foreground">2021 — Present</p>
              </div>
              <ul className="list-disc pl-5 text-sm text-muted-foreground mt-2 space-y-1">
                <li>Shipped web and mobile apps serving thousands of users across FinTech, HealthTech, and EdTech.</li>
                <li>Led end‑to‑end development: architecture, delivery, observability, and growth experiments.</li>
                <li>Optimized performance and developer experience, reducing build and load times by 40%+.</li>
              </ul>
            </div>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-medium">Full‑Stack Engineer — Product Studio</p>
                <p className="text-xs text-muted-foreground">2019 — 2021</p>
              </div>
              <ul className="list-disc pl-5 text-sm text-muted-foreground mt-2 space-y-1">
                <li>Built multi‑tenant platforms with React, Node, and Postgres; integrated CI/CD and cloud infrastructure.</li>
                <li>Collaborated with designers and PMs to deliver accessible, pixel‑perfect interfaces.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-semibold mb-2">Education</h3>
          <p className="text-sm text-muted-foreground">Senior Secondary School Certificate</p>
        </section>
      </section>
    </main>
  );
}
