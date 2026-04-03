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
      name: "Node.js",
      slug: "nodejs",
      icon: <GlobeIcon className="h-6 w-6" />,
      color: "from-green-500/10 to-green-500/5",
      textColor: "text-green-500",
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
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-full max-w-[1200px] bg-primary/20 blur-[120px]" />

      <div className="container relative z-10 px-4 md:px-6">
        <section className="flex flex-col items-center justify-center pt-24 pb-12 text-center md:pt-40 md:pb-24">
          <div className="inline-flex items-center rounded-3xl border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-primary/10">
            <span className="text-primary-foreground">
              InterviewKit 1.0 is here &rarr;
            </span>
          </div>

          <h1 className="mt-8 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block text-foreground">The Complete Guide to</span>
            <span className="bg-gradient-to-t from-foreground to-foreground/50 bg-clip-text text-transparent">
              Tech Interviews.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-[600px] text-lg text-muted-foreground md:text-xl">
            Streamlined paths to master backend engineering, system design, and
            competitive programming with a focus on real-world application.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/docs/javascript"
              className="group relative flex items-center justify-center h-12 px-8 font-semibold text-background rounded-full bg-foreground transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
            >
              Get Started
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="https://github.com/touhidcodes/interviewkit"
              target="_blank"
              className="flex items-center justify-center h-12 px-8 font-medium border rounded-full border-border bg-background transition-colors hover:bg-muted active:scale-95"
            >
              GitHub Repo
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 pb-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/docs/${topic.slug}`}
              className="group relative block overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:bg-white/[0.05] hover:border-white/10"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${topic.color} blur-xl`}
              />
              <div className="relative z-10 flex flex-col items-start gap-4">
                <div
                  className={`rounded-xl p-2 bg-background border border-border shadow-sm ${topic.textColor}`}
                >
                  {topic.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-lg">{topic.name}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    Expert resources and curated questions.
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </section>

        <section className="py-20 border-t border-border/40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-gradient">
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
        </section>
      </div>
    </div>
  );
}
