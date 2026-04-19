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
    return (
      <div className="px-2 text-sm text-muted-foreground italic">
        No subtopics found
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-xs uppercase tracking-wider text-primary px-2 mb-4">
        On this page
      </h3>
      <div className="space-y-1">
        {groupedHeadings.map((group) => (
          <Collapsible
            key={group.heading.id}
            defaultOpen={true}
            className="group/toc"
          >
            <div className="flex items-center gap-1 group">
              {group.subHeadings.length > 0 ? (
                <CollapsibleTrigger asChild>
                  <button className="h-6 w-6 flex items-center justify-center rounded-md hover:bg-muted transition-colors cursor-pointer outline-none">
                    <ChevronRight className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 group-data-[state=open]/toc:rotate-90" />
                  </button>
                </CollapsibleTrigger>
              ) : (
                <div className="w-6" />
              )}
              <Link
                href={`#${group.heading.id}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors truncate py-1 flex-1 font-medium"
              >
                {group.heading.title}
              </Link>
            </div>

            {group.subHeadings.length > 0 && (
              <CollapsibleContent className="ml-9 border-l border-border/40 pl-4 space-y-1 my-1">
                {group.subHeadings.map((sub) => (
                  <Link
                    key={sub.id}
                    href={`#${sub.id}`}
                    className="block py-1 text-xs text-muted-foreground hover:text-foreground transition-colors truncate"
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
