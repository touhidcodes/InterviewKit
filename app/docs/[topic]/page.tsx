import { getDocsForTopic, getTopics } from "@/lib/mdx";
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
  const docs = getDocsForTopic(topic);
  const topicName =
    topic.charAt(0).toUpperCase() + topic.slice(1).replace("-", " ");

  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
          {topicName}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Master {topicName} with our curated list of interview questions and
          guides.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {docs.length > 0 ? (
          docs.map((doc) => (
            <Link
              key={doc.slug}
              href={`/docs/${topic}/${doc.slug}`}
              className="group relative flex flex-col p-6 rounded-2xl border border-border/40 bg-card hover:bg-muted/50 transition-all hover:border-primary/20"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <FileTextIcon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">
                {doc.meta.title || doc.slug}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {doc.meta.description || "Learn more about this topic."}
              </p>
              <div className="mt-6 flex items-center text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
                Read guide
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-20 text-center border-2 border-dashed border-border/40 rounded-2xl">
            <p className="text-muted-foreground">
              No documentation found for this topic yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
