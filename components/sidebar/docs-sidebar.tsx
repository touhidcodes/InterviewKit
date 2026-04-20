"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

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
    <Sidebar
      className="sticky top-14 h-[calc(100vh-3.5rem)] border-none bg-transparent"
      collapsible="none"
    >
      <SidebarContent className="px-4 py-6 scrollbar-thin">
        {navigation.map((section) => {
          const isSectionActive = pathname.startsWith(`/docs/${section.title}`);
          const coreDocs = section.docs.filter(
            (doc) =>
              doc.slug !== "q-and-a" &&
              doc.slug !== "overview" &&
              !doc.slug.includes("questions"),
          );
          const qaDocs = section.docs.filter(
            (doc) => doc.slug === "q-and-a" || doc.slug.includes("questions"),
          );
          const overviewDoc = section.docs.find(
            (doc) => doc.slug === "overview",
          );

          return (
            <Collapsible
              key={section.title}
              defaultOpen={isSectionActive}
              className="group/collapsible"
            >
              <SidebarGroup className="px-0 py-0 mb-4">
                <SidebarGroupLabel
                  className="cursor-pointer mb-1 text-sm font-semibold capitalize text-foreground px-2 h-9"
                  render={(props) => (
                    <CollapsibleTrigger
                      {...props}
                      className="hover:bg-muted/60 transition-colors w-full rounded-md flex justify-between items-center bg-transparent border-0 px-2 h-full outline-none"
                    >
                      <span className="capitalize">
                        {section.title.replace("-", " ")}
                      </span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    </CollapsibleTrigger>
                  )}
                />
                <CollapsibleContent>
                  <SidebarGroupContent className="pl-4 ml-2 border-l border-border/50 transition-all border-opacity-70">
                    <SidebarMenu className="gap-1 mt-1">
                      {/* Intro/Overview */}
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          isActive={pathname === `/docs/${section.title}`}
                          className="h-8 text-sm text-muted-foreground font-medium hover:text-foreground data-[active=true]:text-foreground data-[active=true]:bg-muted/60"
                          render={<Link href={`/docs/${section.title}`} />}
                        >
                          Overview
                        </SidebarMenuButton>
                      </SidebarMenuItem>

                      {/* Core Topics Group */}
                      {coreDocs.length > 0 && (
                        <>
                          <div className="px-2 py-2 mt-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
                            Core Topics
                          </div>
                          {coreDocs.map((doc) => {
                            const href = `/docs/${section.title}/${doc.slug}`;
                            const isActive = pathname === href;
                            return (
                              <SidebarMenuItem key={doc.slug}>
                                <SidebarMenuButton
                                  isActive={isActive}
                                  className="h-8 text-sm text-muted-foreground font-medium hover:text-foreground data-[active=true]:text-foreground data-[active=true]:bg-muted/60"
                                  render={<Link href={href} />}
                                >
                                  {doc.meta.title || doc.slug.replace("-", " ")}
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            );
                          })}
                        </>
                      )}

                      {/* Interview Questions Group */}
                      {qaDocs.length > 0 && (
                        <>
                          <div className="px-2 py-2 mt-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
                            Interview Questions
                          </div>
                          {qaDocs.map((doc) => {
                            const href = `/docs/${section.title}/${doc.slug}`;
                            const isActive = pathname === href;
                            return (
                              <SidebarMenuItem key={doc.slug}>
                                <SidebarMenuButton
                                  isActive={isActive}
                                  className="h-8 text-sm text-muted-foreground font-medium hover:text-foreground data-[active=true]:text-foreground data-[active=true]:bg-muted/60"
                                  render={<Link href={href} />}
                                >
                                  {doc.meta.title || doc.slug.replace("-", " ")}
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            );
                          })}
                        </>
                      )}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
}
