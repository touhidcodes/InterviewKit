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
      icon: <Code2Icon className="h-6 w-6" />,
      color: "from-yellow-500/10 to-yellow-500/5",
      textColor: "text-yellow-500",
    },
    {
      name: "TypeScript",
      slug: "typescript",
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      color: "from-cyan-500/10 to-cyan-500/5",
      textColor: "text-cyan-500",
    },
    {
      name: "Node.js",
      slug: "nodejs",
      icon: <GlobeIcon className="h-6 w-6" />,
      color: "from-green-500/10 to-green-500/5",
      textColor: "text-green-500",
    },
    {
      name: "Express.js",
      slug: "expressjs",
      icon: <ServerIcon className="h-6 w-6" />,
      color: "from-gray-500/10 to-gray-500/5",
      textColor: "text-gray-400",
    },
    {
      name: "MongoDB",
      slug: "mongodb",
      icon: <DatabaseIcon className="h-6 w-6" />,
      color: "from-emerald-500/10 to-emerald-500/5",
      textColor: "text-emerald-500",
    },
    {
      name: "SQL",
      slug: "sql",
      icon: <BarChartIcon className="h-6 w-6" />,
      color: "from-indigo-500/10 to-indigo-500/5",
      textColor: "text-indigo-500",
    },
    {
      name: "Python",
      slug: "python",
      icon: <CpuIcon className="h-6 w-6" />,
      color: "from-blue-500/10 to-blue-500/5",
      textColor: "text-blue-500",
    },
    {
      name: "System Design",
      slug: "system-design",
      icon: <InfinityIcon className="h-6 w-6" />,
      color: "from-purple-500/10 to-purple-500/5",
      textColor: "text-purple-500",
    },
    {
      name: "Algorithms",
      slug: "problem-solving",
      icon: <ZapIcon className="h-6 w-6" />,
      color: "from-orange-500/10 to-orange-500/5",
      textColor: "text-orange-500",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 bg-background" />

      {/* Modern Mesh Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep purple radial glow */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-purple-600/20 blur-[120px] rounded-full opacity-50" />

        {/* Magenta accent */}
        <div className="absolute top-[40%] -left-[10%] w-[800px] h-[800px] bg-fuchsia-500/10 blur-[100px] rounded-full opacity-30" />

        {/* Orange accent */}
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-orange-500/10 blur-[100px] rounded-full opacity-20" />
      </div>

      {/* Hero Grid Pattern - Matching the image */}
      <div className="absolute inset-0 z-0 hero-grid [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] opacity-50" />

      {/* Noise Texture (Subtle) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container relative z-10 px-4 md:px-6">
        <section className="flex flex-col items-center justify-center pt-24 pb-12 text-center md:pt-40 md:pb-24 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium transition-all hover:bg-primary/10 hover:scale-105 mb-8">
            <span className="text-primary font-semibold">
              InterviewKit 1.0 is here &rarr;
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-8xl text-balance leading-[1.1]">
            <span className="block text-foreground mb-4 text-2xl md:text-3xl font-medium text-muted-foreground">
              তাহলে আর দেরি কেন?
            </span>
            <span className="block text-foreground mb-2">Master your next</span>
            <span className="hero-text-gradient">Tech Interview.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-[750px] text-lg text-muted-foreground md:text-2xl leading-relaxed text-balance opacity-80">
            Learn Development,{" "}
            <span className="text-foreground font-semibold">
              Change your Future.
            </span>
            <br />
            Built for engineers who aim for the top.
          </p>

          <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row w-full max-w-2xl justify-center">
            <Link
              href="/docs/javascript"
              className="group relative flex items-center justify-center h-16 px-12 font-bold text-white rounded-2xl hero-btn-gradient overflow-hidden shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                এখনই এনরোল করো
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <div className="relative group w-full p-[1px] rounded-full bg-gradient-to-r from-border/50 via-border/20 to-border/50 focus-within:from-primary/50 focus-within:via-primary focus-within:to-primary/50 transition-all duration-500 shadow-2xl shadow-black/5">
              <div className="relative flex items-center w-full h-[54px] bg-card/40 backdrop-blur-2xl rounded-full overflow-hidden">
                <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-300"
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
                  className="block w-full h-full p-4 pl-14 text-base text-foreground bg-transparent border-none rounded-full focus:ring-0 outline-none"
                  placeholder="Search topics (e.g. System Design, Event Loop)..."
                />
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 pb-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-6xl mx-auto">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/docs/${topic.slug}`}
              className="group relative block overflow-hidden rounded-[var(--radius)] border border-border/50 bg-card/50 backdrop-blur-md p-8 transition-all hover:bg-card hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${topic.color} blur-3xl`}
              />
              <div className="relative z-10 flex flex-col items-start gap-5">
                <div
                  className={`rounded-2xl p-3 bg-background border border-border shadow-soft ${topic.textColor}`}
                >
                  {topic.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-xl">{topic.name}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors leading-relaxed">
                    Comprehensive study guides, patterns, and expert-curated
                    questions for {topic.name} mastery.
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </section>

        <section className="py-20 border-t border-border/40">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
              {[
                { label: "High-Quality Topics", value: "10+" },
                { label: "In-Depth Questions", value: "500+" },
                { label: "Community Stars", value: "2k+" },
                { label: "Success Stories", value: "100+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center space-y-2">
                  <div className="text-4xl font-extrabold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl text-gradient">
                  Built for the next generation of engineers.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe that interview preparation should be structured,
                  deep, and intuitive. InterviewKit provides you with the mental
                  models and technical depth required to ace roles at top-tier
                  companies.
                </p>
                <ul className="space-y-3">
                  {[
                    "Deep dive into System Design patterns",
                    "Optimized Algorithms with live examples",
                    "Backend mastery with Node.js & Go",
                    "Modern Frontend architectures",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium"
                    >
                      <ZapIcon className="h-4 w-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-video rounded-2xl border border-white/10 bg-black overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                <div className="flex h-full items-center justify-center p-8">
                  <code className="text-sm text-primary-foreground font-mono leading-relaxed">
                    $ npx interview-kit init
                    <br />
                    <span className="text-muted-foreground opacity-50">
                      # Preparing your path to success...
                    </span>
                    <br />
                    <span className="text-green-400">? Select track:</span>{" "}
                    [Backend, Frontend, Fullstack]
                    <br />
                    <span className="text-green-400">? Goal:</span> Senior
                    Software Engineer @ Tier 1<br />
                    ...
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 text-center">
          <div className="max-w-3xl mx-auto space-y-8 bg-primary/5 rounded-3xl p-12 border border-primary/10">
            <h2 className="text-3xl font-bold">Join the community</h2>
            <p className="text-muted-foreground">
              Stay updated with the latest interview patterns and technical
              deep-dives. Join 2,000+ engineers mastering their craft.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 px-6 rounded-full bg-background border border-border outline-none focus:ring-2 focus:ring-primary/50 lg:w-80"
              />
              <button className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-muted-foreground">
              Zero spam. Only high-quality technical content.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
