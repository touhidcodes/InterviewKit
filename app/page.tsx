import Link from "next/link";

export default function Home() {
  const topics = [
    { name: "JavaScript", slug: "javascript", icon: "🍦" },
    { name: "Node.js", slug: "nodejs", icon: "🟢" },
    { name: "Python", slug: "python", icon: "🐍" },
    { name: "System Design", slug: "system-design", icon: "⚙️" },
    { name: "Problem Solving", slug: "problem-solving", icon: "🧩" },
  ];

  return (
    <div className="container relative py-12 lg:py-24">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Master Your Tech Career with <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent italic">InterviewKit</span>
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          A comprehensive guide to backend engineering, frontend mastery, system design, and algorithms.
        </p>
        <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10 text-primary-foreground">
          <Link 
            href="/docs/javascript" 
            className="group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-primary px-6 py-3 text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px hover:bg-primary/90 shadow-lg"
          >
            Get Started
          </Link>
          <Link 
            href="https://github.com/touhidcodes/interviewkit" 
            target="_blank" 
            rel="noreferrer"
            className="group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px hover:bg-muted hover:text-foreground shadow-sm"
          >
            GitHub Repo
          </Link>
        </div>
      </div>
      
      <section className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/docs/${topic.slug}`}
            className="group block overflow-hidden rounded-lg border bg-card p-6 transition-all hover:bg-accent hover:border-primary/50"
          >
            <div className="flex flex-col items-center space-y-3 text-center">
              <span className="text-4xl">{topic.icon}</span>
              <h3 className="font-semibold text-lg">{topic.name}</h3>
              <p className="text-xs text-muted-foreground transition-colors group-hover:text-primary">
                Explore topics &rarr;
              </p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
