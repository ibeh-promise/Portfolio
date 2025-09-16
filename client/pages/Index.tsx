import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, Smartphone, Globe, ArrowRight, ExternalLink } from "lucide-react";
import { link } from "fs";

function SectionWrapper({ id, title, children, subtitle }: { id: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 py-16 md:py-24">
      <div className="container">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-muted-foreground max-w-2xl">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,hsl(var(--primary)/0.18)_0%,transparent_60%)]" />
      <div className="container py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground">
              <span className="size-2 rounded-full bg-primary" /> Based in Nigeria • Available for work
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Promise Ibeh — Full‑Stack Engineer & Mobile App Developer
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I design, build, and scale production‑ready web and mobile applications with TypeScript, React, Node.js, and React Native. I help startups ship faster with quality engineering and delightful UX.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#contact"><Button className="group">Hire Me <ArrowRight className="transition-transform group-hover:translate-x-0.5" /></Button></a>
              <a href="/cv"><Button variant="outline">Download CV</Button></a>
              <div className="flex items-center gap-2">
                <a href="https://github.com/promise-ibeh" target="_blank" rel="noreferrer" className="inline-flex size-10 items-center justify-center rounded-md border hover:bg-accent"><Github className="size-5" /></a>
                <a href="https://www.linkedin.com/in/promise-ibeh" target="_blank" rel="noreferrer" className="inline-flex size-10 items-center justify-center rounded-md border hover:bg-accent"><Linkedin className="size-5" /></a>
                <a href="mailto:ibehpromise3d@gmail.com" className="inline-flex size-10 items-center justify-center rounded-md border hover:bg-accent"><Mail className="size-5" /></a>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {["TypeScript","React","Node.js","React Native","PostgreSQL","Sequelize","Supabase","Tailwind","AWS"].map((s) => (
                <Badge key={s} variant="secondary">{s}</Badge>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto aspect-square w-64 sm:w-80 rounded-2xl bg-gradient-to-br from-primary to-accent p-1 shadow-2xl">
              <div className="h-full w-full rounded-xl bg-background grid place-items-center overflow-hidden">
                <img
                  src="/PromiseIbeh.png"
                  alt="Promise Ibeh"
                  className="w-full h-full object-cover roynded-xl animate-float"
                />
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm text-muted-foreground">
              <div className="rounded-lg border p-3"><p className="font-semibold text-foreground">30+ </p>Production Releases</div>
              <div className="rounded-lg border p-3"><p className="font-semibold text-foreground">4+ </p>Years Experience</div>
              <div className="rounded-lg border p-3"><p className="font-semibold text-foreground">Nigeria </p>Based in Lagos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Charmpay — Finance App",
      desc: "Cross‑platform app for payments, transfers, and savings. React Native + Node.js + PostgreSQL.",
      stack: ["React Native","Expo","Node.js","PostgreSQL"],
      link: "https://charmpay.com.ng",
    },
    {
      title: "6thtouch Academy — EdTech Platform",
      desc: "LMS with content authoring, quizzes, assignments, and analytics. React + Node.js + PostgreSQL.",
      stack: ["React","Node.js","flutterwave","PostgreSQL"],
      link: "https://www.6thtouchrobotics.com.ng/",
    },
    {
      title: "Universal Database — SaaS Platform",
      desc: "Multi‑tenant platform for managing and visualizing data. React + Next.js + Prisma + AWS.",
      stack: ["React","Next.js","Sequelize","Aiven"],
      link: "https://unidb.vercel.app",
    },
    {
      title: "Apartment — Real Estate Platform",
      desc: " A real estate platform for buying, selling, and renting properties.",
      stack: ["React", "Next.js"],
      link: "https://apartmentweb.netlify.app",
    },
    {
      title: "Kofee — Wordpress ",
      desc: "A kofee shop website built with wordpress",
      stack: ["React","Next.js","Sequelize","Aiven"],
      link: "https://pro0192.wordpress.com",
    },
    {
      title: "The laptop Store — Ecommerce Website",
      desc: "An ecommerce website built with code",
      stack: ["React","Next.js","Node.js","Express"],
      link: "https://thelapstore.vercel.app",
    },
  ];
  return (
    <SectionWrapper id="projects" title="Featured Projects" subtitle="A selection of shipped products for web and mobile.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.title} className="group overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-start justify-between gap-3">
                <span>{p.title}</span>
                <a href={p.link} target="_blank" rel="noopener noreferrer"><span className="inline-flex items-center gap-1 text-xs text-muted-foreground pointer">Live <ExternalLink className="size-3" /></span></a>
              </CardTitle>
              <CardDescription>{p.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Badge key={s} variant="secondary">{s}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

function Skills() {
  const skills = [
    { title: "Frontend", items: ["React","Next.js","TypeScript","TailwindCSS","Framer Motion","Zod"] },
    { title: "Backend", items: ["Node.js","Express","PostgreSQL","Sequelize","Supabase","tRPC/REST"] },
    { title: "Mobile", items: ["React Native","Expo","Flutter (basic)","App Store / Play Store"] },
    { title: "DevOps", items: ["CI/CD","AWS","Vercel","Netlify","Render"] },
  ];
  return (
    <SectionWrapper id="skills" title="Skills & Tools" subtitle="Battle‑tested technologies I use to deliver reliable software.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((cat) => (
          <Card key={cat.title}>
            <CardHeader>
              <CardTitle>{cat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {cat.items.map((i) => (
                  <li key={i} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-primary" /> {i}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

function Experience() {
  const xp = [
    { role: "Senior Full‑Stack Developer", org: "Freelance", period: "2021 — Present", points: [
      "Delivered apps used by thousands across FinTech, HealthTech, and EdTech.",
      "Led architecture, implementation, and observability end‑to‑end.",
      "Mentored teams and improved DX with tooling and CI/CD.",
    ]},
    { role: "Full‑Stack Engineer", org: "Product Studio", period: "2019 — 2021", points: [
      "Built multi‑tenant SaaS platforms with React, Node.js, and PostgreSQL.",
      "Collaborated with designers to ship accessible, pixel‑perfect UIs.",
    ]}
  ];
  return (
    <SectionWrapper id="experience" title="Experience" subtitle="Highlights from recent work.">
      <div className="space-y-6">
        {xp.map((e) => (
          <Card key={e.role}>
            <CardHeader>
              <CardTitle className="flex flex-wrap items-baseline justify-between gap-2">
                <span>{e.role} — {e.org}</span>
                <span className="text-sm text-muted-foreground">{e.period}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                {e.points.map((p) => (<li key={p}>{p}</li>))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

function Contact() {
  return (
    <SectionWrapper id="contact" title="Let’s build something great" subtitle="I’m open to freelance, full‑time, and collaboration opportunities.">
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Contact Details</CardTitle>
            <CardDescription>Reach out via email or phone. I typically respond within 24 hours.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <a href="mailto:ibehpromise3d@gmail.com" className="inline-flex items-center gap-2">
              <Mail className="size-4 text-primary" /> ibehpromise3d@gmail.com
            </a>
            <a href="tel:+2347031364727" className="inline-flex items-center gap-2">
              <Phone className="size-4 text-primary" /> +234 70 3136 4727
            </a>
            <a href="https://promiseibeh.netlify.app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <Globe className="size-4 text-primary" /> promiseibeh.netlify.app
            </a>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Services</CardTitle>
            <CardDescription>How I can help</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Web app development (React, Next.js)</li>
              <li>• Mobile app development (React Native)</li>
              <li>• API & backend systems (Node.js, PostgreSQL)</li>
              <li>• Performance, DX, and accessibility improvements</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6">
        <a href="mailto:ibehpromise3d@gmail.com">
          <Button className="group">Start a conversation <ArrowRight className="transition-transform group-hover:translate-x-0.5" /></Button>
        </a>
      </div>
    </SectionWrapper>
  );
}

export default function Index() {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
