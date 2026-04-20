import { getDocsForTopic, getTopics } from "@/lib/mdx";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const ArrowLeftIcon = ({ className }: { className?: string }) => (
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
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const FileTextIcon = ({ className }: { className?: string }) => (
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
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
);

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

export async function generateStaticParams() {
  const topics = getTopics();
  return topics.map((topic) => ({
    topic,
  }));
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const allDocs = getDocsForTopic(topic);

  const overviewDoc = allDocs.find((doc) => doc.slug === "overview");
  const coreDocs = allDocs.filter(
    (doc) =>
      doc.slug !== "overview" &&
      doc.slug !== "q-and-a" &&
      !doc.slug.includes("questions"),
  );
  const qaDocs = allDocs.filter(
    (doc) => doc.slug === "q-and-a" || doc.slug.includes("questions"),
  );

  const topicName =
    topic.charAt(0).toUpperCase() + topic.slice(1).replace("-", " ");

  return (
    <div className="max-w-6xl mx-auto pb-24">
      {/* Header / Hero Section */}
      <div className="relative mb-20">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 bg-primary/5 blur-3xl rounded-[3rem] opacity-50" />
        <div className="relative z-10">
          <Link
            href="/"
            className="flex items-center text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group mb-10 w-fit"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Explore all topics
          </Link>

          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary tracking-widest uppercase mb-4">
                Documentation Module
              </div>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl text-gradient">
                {overviewDoc?.meta.title || topicName}
              </h1>
              <p className="max-w-[700px] text-base text-muted-foreground leading-relaxed">
                {overviewDoc?.meta.description ||
                  `Master ${topicName} with our professional-grade interview guides and deep dives.`}
              </p>
            </div>
            <div className="hidden lg:flex h-32 w-32 items-center justify-center rounded-3xl bg-card border border-border shadow-2xl shadow-primary/10">
              <div className="h-16 w-16 text-primary opacity-80">
                <FileTextIcon className="h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-24">
        {/* Core Topics Section */}
        {coreDocs.length > 0 && (
          <section>
            <div className="flex items-end justify-between mb-8 pb-4 border-b border-border/40">
              <div className="space-y-1">
                <h2 className="text-2xl font-black tracking-tight">
                  Core Curriculum
                </h2>
                <p className="text-muted-foreground text-xs font-medium">
                  Fundamental internals and patterns.
                </p>
              </div>
              <div className="hidden sm:block text-xs font-bold text-muted-foreground opacity-50 tracking-tighter uppercase tabular-nums">
                {coreDocs.length} Modules
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {coreDocs.map((doc) => (
                <Link
                  key={doc.slug}
                  href={`/docs/${topic}/${doc.slug}`}
                  className="group relative flex flex-col p-8 rounded-3xl border border-border/40 bg-card hover:bg-muted/30 transition-all duration-300 hover:border-primary/20 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted border border-border/40 text-muted-foreground mb-6 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 rotate-0 group-hover:rotate-6">
                    <FileTextIcon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors leading-tight">
                    {doc.meta.title || doc.slug}
                  </h3>
                  <p className="mt-4 text-muted-foreground line-clamp-3 leading-relaxed text-sm flex-1">
                    {doc.meta.description ||
                      "In-depth guide covering core architectural concepts and modern implementation patterns."}
                  </p>
                  <div className="mt-8 flex items-center text-sm font-bold text-primary group-hover:translate-x-1 transition-all">
                    Start Learning
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Interview Readiness Section */}
        {qaDocs.length > 0 && (
          <section>
            <div className="rounded-[2.5rem] bg-muted/30 border border-border/40 p-8 sm:p-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 -m-20 h-64 w-64 bg-primary/10 blur-[100px] rounded-full" />

              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-black tracking-tight text-foreground">
                  Interview Readiness
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-border/80 to-transparent" />
              </div>

              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                {qaDocs.map((doc) => (
                  <Link
                    key={doc.slug}
                    href={`/docs/${topic}/${doc.slug}`}
                    className="group relative flex items-center p-6 rounded-2xl border border-border bg-card hover:bg-muted/50 transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mr-6 group-hover:scale-110 transition-transform">
                      <ZapIcon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold leading-tight">
                        {doc.meta.title || "Interview Q&A"}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground font-medium">
                        Focused questions and vetted technical answers.
                      </p>
                    </div>
                    <ChevronRight className="h-6 w-6 text-primary transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {allDocs.length === 0 && (
          <div className="py-24 text-center border-2 border-dashed border-border/40 rounded-3xl bg-muted/20">
            <p className="text-xl font-medium text-muted-foreground">
              No documentation found for this topic yet.
            </p>
            <p className="mt-2 text-muted-foreground/60">
              Check back soon for new content!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
