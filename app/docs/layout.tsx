import DocsSidebar from "@/components/docs-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
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
      <div className="flex min-h-[calc(100vh-3.5rem)] w-full overflow-hidden">
        <DocsSidebar navigation={navigation} />
        <main className="flex-1 relative overflow-y-auto">
          <div className="container py-6 lg:py-8 lg:gap-10 xl:grid xl:grid-cols-[1fr_240px]">
            <div className="mx-auto w-full min-w-0 max-w-3xl">{children}</div>
            <div className="hidden text-sm xl:block">
              <div className="sticky top-8">
                <div className="overflow-y-auto py-2 pl-6 border-l border-border/40">
                  <h3 className="font-semibold text-sm mb-4">On this page</h3>
                  <div className="text-muted-foreground text-sm">
                    <span className="opacity-60 italic">Table of contents</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
