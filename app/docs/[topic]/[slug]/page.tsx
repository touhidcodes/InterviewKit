import Markdown from "@/components/docs/markdown";
import TocSidebar from "@/components/sidebar/toc-sidebar";
import {
  extractHeadings,
  getDocContent,
  getDocsForTopic,
  getTopics,
} from "@/lib/mdx";
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

  const headings = extractHeadings(doc.content);
  const topicName =
    topic.charAt(0).toUpperCase() + topic.slice(1).replace("-", " ");

  // Get all docs for this topic to find prev/next
  const allDocs = getDocsForTopic(topic);
  const currentIndex = allDocs.findIndex((d) => d.slug === slug);
  const prevDoc = currentIndex > 0 ? allDocs[currentIndex - 1] : null;
  const nextDoc =
    currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null;

  return (
    <div className="xl:grid xl:grid-cols-[1fr_240px] xl:gap-10">
      <div className="mx-auto w-full min-w-0 max-w-3xl">
        <div className="mb-12">
          <Link
            href={`/docs/${topic}`}
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to {topicName}
          </Link>
          <div className="mt-8">
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl text-gradient">
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
          <Markdown content={doc.content} />
        </div>

        {/* Previous / Next Navigation */}
        <div className="mt-20 pt-10 border-t border-border/40">
          <div className="flex flex-col sm:flex-row gap-4">
            {prevDoc ? (
              <Link
                href={`/docs/${topic}/${prevDoc.slug}`}
                className="flex-1 p-6 rounded-2xl border border-border/40 hover:border-primary/40 hover:bg-muted/30 transition-all group"
              >
                <div className="text-xs text-muted-foreground font-medium mb-2">
                  Previous
                </div>
                <div className="flex items-center font-bold text-lg group-hover:text-primary transition-colors">
                  <svg
                    className="mr-2 h-5 w-5 transform group-hover:-translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  {prevDoc.meta.title || prevDoc.slug}
                </div>
              </Link>
            ) : (
              <div className="flex-1 hidden sm:block" />
            )}

            {nextDoc ? (
              <Link
                href={`/docs/${topic}/${nextDoc.slug}`}
                className="flex-1 p-6 rounded-2xl border border-border/40 text-right hover:border-primary/40 hover:bg-muted/30 transition-all group"
              >
                <div className="text-xs text-muted-foreground font-medium mb-2">
                  Next
                </div>
                <div className="flex items-center justify-end font-bold text-lg group-hover:text-primary transition-colors">
                  {nextDoc.meta.title || nextDoc.slug}
                  <svg
                    className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ) : (
              <div className="flex-1 hidden sm:block" />
            )}
          </div>
        </div>
      </div>

      <div className="hidden text-sm xl:block">
        <div className="sticky top-20">
          <div className="overflow-y-auto h-[calc(100vh-6rem)] py-2 pl-6 border-l border-border/40 scrollbar-thin">
            <TocSidebar headings={headings} />
          </div>
        </div>
      </div>
    </div>
  );
}
