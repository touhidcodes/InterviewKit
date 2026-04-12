import { getDocContent, getDocsForTopic, getTopics } from "@/lib/mdx";
import Link from "next/link";
import { notFound } from "next/navigation";

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

export async function generateStaticParams() {
  const topics = getTopics();
  const params: { topic: string; slug: string }[] = [];

  for (const topic of topics) {
    const docs = getDocsForTopic(topic);
    for (const doc of docs) {
      params.push({
        topic,
        slug: doc.slug,
      });
    }
  }

  return params;
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ topic: string; slug: string }>;
}) {
  const { topic, slug } = await params;
  const doc = getDocContent(topic, slug);

  if (!doc) {
    notFound();
  }

  const topicName =
    topic.charAt(0).toUpperCase() + topic.slice(1).replace("-", " ");

  return (
    <div className="container max-w-4xl py-20 px-4 md:px-6">
      <div className="mb-12">
        <Link
          href={`/docs/${topic}`}
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to {topicName}
        </Link>
        <div className="mt-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-gradient">
            {doc.meta.title || slug}
          </h1>
          {doc.meta.description && (
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              {doc.meta.description}
            </p>
          )}
        </div>
      </div>

      <div className="relative border-l border-border/40 pl-8 ml-2">
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Simple markdown content rendering for now */}
          <div className="whitespace-pre-wrap font-sans text-foreground/90 leading-relaxed">
            {doc.content}
          </div>
        </div>
      </div>

      <div className="mt-20 pt-12 border-t border-border/40">
        <p className="text-center text-sm text-muted-foreground">
          Found a mistake? Help us improve this guide on GitHub.
        </p>
      </div>
    </div>
  );
}
