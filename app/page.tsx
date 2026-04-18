import Link from "next/link";

// Inline SVG components to replace lucide-react icons and avoid potential module-not-found issues
const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const Code2Icon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m18 16 4-4-4-4" />
    <path d="m6 8-4 4 4 4" />
    <path d="m14.5 4-5 16" />
  </svg>
);

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const CpuIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <rect width="6" height="6" x="9" y="9" rx="1" />
    <path d="M15 2v2" />
    <path d="M15 20v2" />
    <path d="M2 15h2" />
    <path d="M2 9h2" />
    <path d="M20 15h2" />
    <path d="M20 9h2" />
    <path d="M9 2v2" />
    <path d="M9 20v2" />
  </svg>
);

const InfinityIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
  </svg>
);

const ZapIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 14.5L13.5 3V10H20L10.5 21.5V14H4Z" />
  </svg>
);

const ShieldCheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1-1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const DatabaseIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
  </svg>
);

const ServerIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
    <line x1="6" x2="6.01" y1="6" y2="6" />
    <line x1="6" x2="6.01" y1="18" y2="18" />
  </svg>
);

const BarChartIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="12" x2="12" y1="20" y2="10" />
    <line x1="18" x2="18" y1="20" y2="4" />
    <line x1="6" x2="6" y1="20" y2="16" />
  </svg>
);

export default function Home() {
  const topics = [
    {
      name: "JavaScript",
      slug: "javascript",
      icon: <Code2Icon className="h-5 w-5" />,
      description: "Core concepts, Event Loop, and modern ES6+ patterns.",
    },
    {
      name: "TypeScript",
      slug: "typescript",
      icon: <ShieldCheckIcon className="h-5 w-5" />,
      description: "Type safety, Generics, and advanced utility types.",
    },
    {
      name: "Node.js",
      slug: "nodejs",
      icon: <GlobeIcon className="h-5 w-5" />,
      description: "Runtime, Streams, and Backend architecture.",
    },
    {
      name: "Express.js",
      slug: "expressjs",
      icon: <ServerIcon className="h-5 w-5" />,
      description: "Middleware, Routing, and RESTful API patterns.",
    },
    {
      name: "MongoDB",
      slug: "mongodb",
      icon: <DatabaseIcon className="h-5 w-5" />,
      description: "NoSQL patterns, Aggregations, and indexing.",
    },
    {
      name: "System Design",
      slug: "system-design",
      icon: <InfinityIcon className="h-5 w-5" />,
      description: "Scalability, Caching, and Load balancing.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-background font-sans selection:bg-primary/10">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 doc-hero-bg opacity-70" />
      <div className="absolute inset-0 z-0 hero-grid [mask-image:radial-gradient(ellipse_at_center,black_80%,transparent_100%)] opacity-40 dark:opacity-60" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation / Top Header area would be here - Hero starts below */}

        <section className="flex flex-col items-center justify-center pt-20 pb-16 text-center md:pt-32 md:pb-28">
          <div className="animate-in fade-in slide-in-from-bottom-3 duration-1000">
            <Link href="#" className="command-pill mb-10 inline-flex">
              <span>InterviewKit 1.0 is officially here</span>
              <span className="h-3 w-px bg-border" />
              <span className="flex items-center gap-1 font-semibold">
                Read the announcement <ArrowRightIcon className="h-3 w-3" />
              </span>
            </Link>

            <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
              <span className="block text-foreground mb-1">
                Master Your Next
              </span>
              <span className="hero-text-gradient italic">Tech Interview.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
              Curated guides, deep dives into system architecture, and the
              technical mental models required to ace roles at top-tier
              companies.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/docs/javascript"
                className="flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-neat transition-all hover:opacity-90 active:scale-95"
              >
                Get Started
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>

              <div className="relative group min-w-[320px]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-muted-foreground"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  className="block w-full h-12 pl-11 pr-12 text-sm text-foreground bg-muted/20 border border-border/60 rounded-lg outline-none focus:bg-muted/40 transition-colors focus:ring-1 focus:ring-primary/20"
                  placeholder="Search documentation..."
                />
                <div className="absolute inset-y-0 right-3 flex items-center">
                  <kbd className="hidden sm:inline-flex h-6 select-none items-center gap-1 rounded border border-border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-60">
                    <span className="text-xs">⌘</span>K
                  </kbd>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="grid grid-cols-1 gap-px bg-border/20 overflow-hidden rounded-2xl border border-border/50 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/docs/${topic.slug}`}
                className="group relative bg-background p-8 transition-colors hover:bg-muted/30"
              >
                <div className="flex flex-col gap-4">
                  <div className="doc-card-icon shadow-neat">{topic.icon}</div>
                  <div>
                    <h3 className="text-base font-semibold leading-7">
                      {topic.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {topic.description}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1">
                  <ArrowRightIcon className="h-4 w-4 text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-24 border-t border-border/30">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Documentation optimized for developer experience.
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                We believe that interview preparation should be structured,
                deep, and intuitive. InterviewKit provides you with the mental
                models required to excel in modern engineering roles.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-muted-foreground lg:max-w-none">
                {[
                  {
                    title: "Deep Dive Patterns",
                    description:
                      "Beyond basics, we cover real-world architecture.",
                  },
                  {
                    title: "Optimized Algorithms",
                    description:
                      "Patterns for problem solving, not just memorization.",
                  },
                  {
                    title: "System Excellence",
                    description:
                      "Mastering large scale backend and frontend systems.",
                  },
                ].map((feature) => (
                  <div key={feature.title} className="relative pl-9">
                    <dt className="inline font-semibold text-foreground">
                      <ZapIcon className="absolute left-1 top-1 h-5 w-5 text-primary/60" />
                      {feature.title}
                    </dt>
                    <dd className="inline block mt-1">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative lg:mt-0 mt-12 bg-muted/20 border border-border/40 rounded-xl overflow-hidden shadow-neat">
              <div className="flex items-center gap-1.5 px-4 py-3 bg-muted/40 border-b border-border/40">
                <div className="h-2 w-2 rounded-full bg-red-500/50" />
                <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
                <div className="h-2 w-2 rounded-full bg-green-500/50" />
                <div className="ml-2 text-[10px] font-mono text-muted-foreground">
                  bash — 80×24
                </div>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="flex gap-3">
                  <span className="text-primary/60">$</span>
                  <span>npx interview-kit@latest init</span>
                </div>
                <div className="mt-2 text-muted-foreground opacity-60">
                  # Initializing interview path...
                </div>
                <div className="mt-4 flex gap-3">
                  <span className="text-green-500">?</span>
                  <span className="font-bold">Select target track:</span>
                </div>
                <div className="mt-1 pl-6 text-muted-foreground">
                  <div>❯ Fullstack (React + Node.js)</div>
                  <div> Backend (System Design + Go)</div>
                  <div> Frontend (Performance + Architecture)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-border/30">
          <div className="rounded-3xl bg-muted/10 border border-border/40 px-6 py-16 sm:px-16 sm:py-24 lg:flex lg:items-center lg:px-24">
            <div className="lg:flex-auto">
              <h2 className="text-3xl font-bold tracking-tight">
                Stay update with InterviewKit.
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Zero spam. Only high-quality technical content and new interview
                patterns.
              </p>
            </div>
            <div className="mt-10 lg:ml-12 lg:mt-0 lg:flex-none">
              <form className="flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="min-w-0 flex-auto rounded-md border border-border/60 bg-background px-3.5 py-2 text-foreground shadow-sm focus:ring-1 focus:ring-primary/20 sm:text-sm sm:leading-6 outline-none"
                  placeholder="name@gmail.com"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-xs leading-5 text-muted-foreground">
                Join 2,000+ engineers mastering their craft.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
