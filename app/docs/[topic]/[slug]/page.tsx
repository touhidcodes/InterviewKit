import TocSidebar from "@/components/toc-sidebar";
import {
  extractHeadings,
  getDocContent,
  getDocsForTopic,
  getTopics,
} from "@/lib/mdx";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

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
          <div className="prose prose-invert prose-lg max-w-none prose-headings:scroll-mt-20">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
            >
              {doc.content}
            </ReactMarkdown>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-border/40">
          <p className="text-center text-sm text-muted-foreground">
            Found a mistake? Help us improve this guide on GitHub.
          </p>
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
