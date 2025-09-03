export function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="container py-10 grid gap-6 md:grid-cols-3 items-start">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
            <span className="font-extrabold tracking-tight">Promise Ibeh</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Full‑stack engineer & mobile app developer building fast, reliable products for the web and mobile.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="/#projects" className="hover:text-foreground">Projects</a></li>
            <li><a href="/#skills" className="hover:text-foreground">Skills</a></li>
            <li><a href="/#experience" className="hover:text-foreground">Experience</a></li>
            <li><a href="/cv" className="hover:text-foreground">CV</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="mailto:hello@promiseibeh.dev" className="hover:text-foreground">hello@promiseibeh.dev</a></li>
            <li><a href="https://github.com/promise-ibeh" target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/promise-ibeh" target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a></li>
            <li><a href="https://x.com/promise_idev" target="_blank" rel="noreferrer" className="hover:text-foreground">X (Twitter)</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Promise Ibeh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
