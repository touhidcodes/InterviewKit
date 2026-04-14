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
      className="mt-14 h-[calc(100vh-3.5rem)] border-none bg-transparent"
      collapsible="none"
    >
      <SidebarContent className="px-4 py-6">
        {navigation.map((section) => {
          const isSectionActive = pathname.startsWith(`/docs/${section.title}`);
          const isActiveOverview = pathname === `/docs/${section.title}`;

          return (
            <Collapsible
              key={section.title}
              defaultOpen={isSectionActive}
              className="group/collapsible"
            >
              <SidebarGroup className="px-0 py-0 mb-4">
                <SidebarGroupLabel
                  render={<CollapsibleTrigger />}
                  className="cursor-pointer mb-1 text-sm font-semibold capitalize text-foreground px-2 h-9"
                >
                  <div className="hover:bg-muted/60 transition-colors w-full rounded-md flex justify-between items-center bg-transparent border-0 px-2 h-full">
                    <span className="capitalize">
                      {section.title.replace("-", " ")}
                    </span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-data-[state=open]/collapsible:rotate-90" />
                  </div>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarGroupContent className="pl-4 ml-2 border-l border-border/50 transition-all border-opacity-70">
                    <SidebarMenu className="gap-1 mt-1">
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          render={<Link href={`/docs/${section.title}`} />}
                          isActive={isActiveOverview}
                          className="h-8 text-sm text-muted-foreground font-medium hover:text-foreground data-[active=true]:text-foreground data-[active=true]:bg-muted/60"
                        >
                          Overview
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      {section.docs.map((doc) => {
                        const href = `/docs/${section.title}/${doc.slug}`;
                        const isActive = pathname === href;
                        return (
                          <SidebarMenuItem key={doc.slug}>
                            <SidebarMenuButton
                              render={<Link href={href} />}
                              isActive={isActive}
                              className="h-8 text-sm text-muted-foreground font-medium hover:text-foreground data-[active=true]:text-foreground data-[active=true]:bg-muted/60"
                            >
                              {doc.meta.title || doc.slug}
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        );
                      })}
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
