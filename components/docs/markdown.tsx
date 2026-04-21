"use client";

import { Check, Copy } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="p-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground/60 hover:text-foreground outline-none focus-visible:ring-1 focus-visible:ring-primary/40 relative group/copy"
      aria-label="Copy code"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-primary animate-in zoom-in" />
      ) : (
        <Copy className="h-3.5 w-3.5 transition-transform group-hover/copy:scale-110" />
      )}
    </button>
  );
};

export default function Markdown({ content }: { content: string }) {
  const { resolvedTheme } = useTheme();

  return (
    <div
      className="prose dark:prose-invert max-w-none transition-colors duration-300
      prose-headings:scroll-mt-20 
      prose-headings:font-black prose-headings:tracking-tight
      prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl
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
            const language = match ? match[1] : "";
            const isInline = !className;

            if (isInline) {
              return (
                <code className="font-mono text-sm" {...props}>
                  {children}
                </code>
              );
            }

            const codeContent = String(children).replace(/\n$/, "");

            return (
              <div className="relative group my-8 overflow-hidden rounded-xl border border-border/40 bg-card transition-all hover:border-border/80">
                <div className="flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/40">
                  <span className="text-sm font-medium text-primary/80">
                    {language || "code"}
                  </span>
                  <CopyButton text={codeContent} />
                </div>
                <div className="overflow-x-auto prose-code:bg-transparent prose-code:border-none">
                  <SyntaxHighlighter
                    style={(resolvedTheme === "dark" ? oneDark : prism) as any}
                    language={language}
                    PreTag="div"
                    customStyle={{
                      margin: 0,
                      padding: "1.5rem",
                      fontSize: "0.875rem",
                      lineHeight: "1.7",
                      background: "transparent",
                    }}
                  >
                    {codeContent}
                  </SyntaxHighlighter>
                </div>
              </div>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
