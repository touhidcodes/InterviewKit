"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type Heading = {
  title: string;
  id: string;
  level: number;
};

export default function TocSidebar({ headings }: { headings: Heading[] }) {
  // Group headings: nest H3s under the preceding H2
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

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 px-2">
        <div className="h-1 w-1 rounded-full bg-primary" />
        <h3 className="font-bold text-xs uppercase tracking-widest text-foreground/70">
          On this page
        </h3>
      </div>
      <div className="space-y-1">
        {groupedHeadings.map((group) => (
          <Collapsible
            key={group.heading.id}
            defaultOpen={true}
            className="group/toc"
          >
            <div className="flex items-center gap-1 group/item">
              {group.subHeadings.length > 0 ? (
                <CollapsibleTrigger className="h-6 w-6 flex items-center justify-center rounded-md hover:bg-muted/80 transition-all cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-ring">
                  <ChevronRight className="h-3 w-3 text-muted-foreground/60 transition-transform duration-200 group-data-[state=open]/toc:rotate-90" />
                </CollapsibleTrigger>
              ) : (
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className="h-1 w-1 rounded-full bg-border/60" />
                </div>
              )}
              <Link
                href={`#${group.heading.id}`}
                className="text-[13px] text-muted-foreground hover:text-primary transition-colors truncate py-1 flex-1 font-medium decoration-primary/30 underline-offset-4 hover:underline"
              >
                {group.heading.title}
              </Link>
            </div>

            {group.subHeadings.length > 0 && (
              <CollapsibleContent className="ml-3 border-l border-border/40 pl-4 space-y-1 my-1 animate-in fade-in slide-in-from-left-2 duration-200">
                {group.subHeadings.map((sub) => (
                  <Link
                    key={sub.id}
                    href={`#${sub.id}`}
                    className="block py-1 text-[12px] text-muted-foreground/80 hover:text-primary transition-colors truncate relative hover:translate-x-0.5 duration-200"
                  >
                    {sub.title}
                  </Link>
                ))}
              </CollapsibleContent>
            )}
          </Collapsible>
        ))}
      </div>
    </div>
  );
}
