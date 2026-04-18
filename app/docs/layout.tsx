import DocsSidebar from "@/components/docs-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { getDocsForTopic, getTopics } from "@/lib/mdx";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const topics = getTopics();
  const navigation = topics.map((topic) => ({
    title: topic,
    docs: getDocsForTopic(topic),
  }));

  return (
    <SidebarProvider>
      <div className="flex min-h-[calc(100vh-3.5rem)] w-full">
        <DocsSidebar navigation={navigation} />
        <main className="flex-1 relative">
          <div className="sticky top-0 z-20 flex h-12 items-center gap-4 border-b border-border/40 bg-background/80 px-4 backdrop-blur-lg md:hidden">
            <SidebarTrigger />
            <div className="h-4 w-px bg-border/60" />
            <span className="text-sm font-medium text-muted-foreground">
              Menu
            </span>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
