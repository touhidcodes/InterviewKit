<<<<<<< HEAD
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
      
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-12">
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/docs/${topic.slug}`}
            className="group block overflow-hidden rounded-lg border bg-card p-6 transition-all hover:bg-accent hover:border-primary/50"
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <span className="text-4xl">{topic.icon}</span>
              <h3 className="font-semibold text-lg">{topic.name}</h3>
              <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                Explore topics &rarr;
              </p>
            </div>
          </Link>
        ))}
      </section>
=======
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
>>>>>>> 77e7706 (feat: initial commit)
    </div>
  );
}
