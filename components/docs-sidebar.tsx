"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationItem = {
  title: string;
  docs: { slug: string; meta: any }[];
};

export default function DocsSidebar({
  navigation,
}: {
  navigation: NavigationItem[];
}) {
  const pathname = usePathname();

  return (
    <div className="w-full">
      {navigation.map((section) => (
        <div key={section.title} className="pb-8">
          <h4 className="mb-2 rounded-md px-2 py-1 text-sm font-bold uppercase tracking-wider text-primary">
            {section.title.replace("-", " ")}
          </h4>
          <div className="grid grid-flow-row auto-rows-max text-sm space-y-1">
            <Link
              href={`/docs/${section.title}`}
              className={cn(
                "flex w-full items-center rounded-md border border-transparent px-2 py-1.5 text-muted-foreground hover:underline transition-colors",
                pathname === `/docs/${section.title}` &&
                  "font-medium text-foreground bg-muted/60 underline",
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
                    "flex w-full items-center rounded-md border border-transparent px-2 py-1.5 text-muted-foreground hover:underline transition-colors",
                    isActive &&
                      "font-medium text-foreground bg-muted/60 underline",
                  )}
                >
                  {doc.meta.title || doc.slug}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
