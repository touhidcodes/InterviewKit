"use client";

import { useTheme } from "next-themes";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export default function Markdown({ content }: { content: string }) {
  const { resolvedTheme } = useTheme();

  return (
    <div
      className="prose dark:prose-invert max-w-none transition-colors duration-300
      prose-headings:scroll-mt-20 
      prose-headings:font-black prose-headings:tracking-tight
      prose-a:text-primary prose-a:no-underline hover:prose-a:underline
      prose-strong:text-foreground prose-strong:font-bold
      prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
      prose-pre:bg-transparent prose-pre:p-0
      prose-img:rounded-3xl prose-img:border prose-img:border-border/40 prose-img:shadow-2xl
    "
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
        components={{
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            const isInline = !className;
            return !isInline && match ? (
              <SyntaxHighlighter
                style={(resolvedTheme === "dark" ? oneDark : prism) as any}
                language={match[1]}
                PreTag="div"
                className="rounded-xl border border-border/40 my-6 shadow-2xl transition-all"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className="font-mono text-sm" {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
