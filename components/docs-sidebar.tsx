"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavigationItem = {
  title: string;
  docs: { slug: string; meta: any }[];
};

function NavSection({
  section,
  pathname,
}: {
  section: NavigationItem;
  pathname: string;
}) {
  const isSectionActive = pathname.startsWith(`/docs/${section.title}`);
  const [isOpen, setIsOpen] = useState(isSectionActive);

  useEffect(() => {
    if (isSectionActive) setIsOpen(true);
  }, [isSectionActive]);

  return (
    <div className="pb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm font-semibold capitalize hover:text-foreground transition-colors text-foreground"
      >
        <span>{section.title.replace("-", " ")}</span>
        <ChevronRight
          className={cn(
            "h-4 w-4 text-muted-foreground/70 transition-transform duration-200",
            isOpen && "rotate-90",
          )}
        />
      </button>
      {isOpen && (
        <div className="mt-1 flex flex-col space-y-[2px] border-l border-border/50 ml-3 pl-3">
          <Link
            href={`/docs/${section.title}`}
            className={cn(
              "flex w-full items-center rounded-md border border-transparent px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted/60 hover:text-foreground transition-colors",
              pathname === `/docs/${section.title}` &&
                "font-medium text-foreground bg-muted/60",
            )}
          >
            Overview
          </Link>
          {section.docs.map((doc) => {
            const href = `/docs/${section.title}/${doc.slug}`;
            const isActive = pathname === href;
            return (
              <Link
                key={doc.slug}
                href={href}
                className={cn(
                  "flex w-full items-center rounded-md border border-transparent px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted/60 hover:text-foreground transition-colors",
                  isActive && "font-medium text-foreground bg-muted/60",
                )}
              >
                {doc.meta.title || doc.slug}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function DocsSidebar({
  navigation,
}: {
  navigation: NavigationItem[];
}) {
  const pathname = usePathname();

  return (
    <div className="w-full">
      {navigation.map((section) => (
        <NavSection key={section.title} section={section} pathname={pathname} />
      ))}
    </div>
  );
}
