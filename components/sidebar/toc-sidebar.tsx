"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type Heading = {
  title: string;
  id: string;
  level: number;
};

export default function TocSidebar({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0% -80% 0%" },
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const groupedHeadings: {
    heading: Heading;
    subHeadings: Heading[];
  }[] = [];

  let currentMain: {
    heading: Heading;
    subHeadings: Heading[];
  } | null = null;

  headings.forEach((h) => {
    if (h.level === 2) {
      currentMain = { heading: h, subHeadings: [] };
      groupedHeadings.push(currentMain);
    } else if (h.level === 3) {
      if (currentMain) {
        currentMain.subHeadings.push(h);
      } else {
        groupedHeadings.push({ heading: h, subHeadings: [] });
      }
    }
  });

  if (headings.length === 0) return null;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex items-center gap-2.5 px-2">
        <h3 className="font-bold text-[11px] uppercase tracking-[0.2em] text-foreground/50">
          In this article
        </h3>
      </div>
      <div className="space-y-1">
        {groupedHeadings.map((group) => {
          const isMainActive = activeId === group.heading.id;
          const isAnySubActive = group.subHeadings.some(
            (s) => s.id === activeId,
          );

          return (
            <Collapsible
              key={group.heading.id}
              defaultOpen={true}
              className="group/toc"
            >
              <div
                className={cn(
                  "flex items-center gap-1 group/item rounded-lg transition-all duration-200",
                  isMainActive || isAnySubActive
                    ? "bg-primary/10"
                    : "hover:bg-muted/50",
                )}
              >
                {group.subHeadings.length > 0 ? (
                  <CollapsibleTrigger className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-muted transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary/20">
                    <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60 transition-transform duration-300 group-data-[state=open]/toc:rotate-90" />
                  </CollapsibleTrigger>
                ) : (
                  <div className="w-7 h-7 flex items-center justify-center">
                    <div
                      className={cn(
                        "h-1 w-1 rounded-full transition-all duration-300",
                        isMainActive ? "bg-primary scale-125" : "bg-border/60",
                      )}
                    />
                  </div>
                )}
                <Link
                  href={`#${group.heading.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(group.heading.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                    setActiveId(group.heading.id);
                  }}
                  className={cn(
                    "text-[13px] transition-all duration-300 truncate py-1.5 flex-1 font-medium",
                    isMainActive
                      ? "text-primary font-bold translate-x-0.5"
                      : "text-muted-foreground/80 hover:text-foreground",
                  )}
                >
                  {group.heading.title}
                </Link>
              </div>

              {group.subHeadings.length > 0 && (
                <CollapsibleContent className="ml-3.5 border-l-2 border-primary/5 pl-4 space-y-1 my-1 overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                  {group.subHeadings.map((sub) => {
                    const isActive = activeId === sub.id;
                    return (
                      <Link
                        key={sub.id}
                        href={`#${sub.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById(sub.id)
                            ?.scrollIntoView({ behavior: "smooth" });
                          setActiveId(sub.id);
                        }}
                        className={cn(
                          "block py-1.5 text-[12px] transition-all duration-300 truncate relative pl-2",
                          isActive
                            ? "text-primary font-bold border-l-2 border-primary -ml-[18px] pl-[18px]"
                            : "text-muted-foreground/60 hover:text-foreground hover:translate-x-1",
                        )}
                      >
                        {sub.title}
                      </Link>
                    );
                  })}
                </CollapsibleContent>
              )}
            </Collapsible>
          );
        })}
      </div>
    </div>
  );
}
