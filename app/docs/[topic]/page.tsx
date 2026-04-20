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

  const introDoc = allDocs.find((doc) => doc.slug === "intro");
  const coreDocs = allDocs.filter(
    (doc) => doc.slug !== "intro" && doc.slug !== "q-and-a",
  );
  const qaDocs = allDocs.filter((doc) => doc.slug === "q-and-a");

  const topicName =
    topic.charAt(0).toUpperCase() + topic.slice(1).replace("-", " ");

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group mb-6"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-gradient">
            {introDoc?.meta.title || topicName}
          </h1>
          <p className="max-w-[700px] text-xl text-muted-foreground leading-relaxed">
            {introDoc?.meta.description ||
              `Master ${topicName} with our curated list of interview questions and guides.`}
          </p>
        </div>
      </div>

      <div className="space-y-16">
        {/* Core Topics */}
        {coreDocs.length > 0 && (
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold tracking-tight">Core Topics</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-border/60 to-transparent" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {coreDocs.map((doc) => (
                <Link
                  key={doc.slug}
                  href={`/docs/${topic}/${doc.slug}`}
                  className="group relative flex flex-col p-6 rounded-2xl border border-border/40 bg-card/50 hover:bg-muted/50 transition-all hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <FileTextIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {doc.meta.title || doc.slug}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {doc.meta.description ||
                      "Deep dive into this core concept."}
                  </p>
                  <div className="mt-6 flex items-center text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    Explore Topic
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Practice / Q&A */}
        {qaDocs.length > 0 && (
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-primary/80">
                Practice & Interview Questions
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {qaDocs.map((doc) => (
                <Link
                  key={doc.slug}
                  href={`/docs/${topic}/${doc.slug}`}
                  className="group relative flex items-center p-6 rounded-2xl border border-primary/10 bg-primary/5 hover:bg-primary/10 transition-all hover:border-primary/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground mr-6 shadow-lg shadow-primary/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">Interview Q&A</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Test your knowledge with real-world interview questions.
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
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
