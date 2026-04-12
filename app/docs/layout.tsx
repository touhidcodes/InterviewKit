import DocsSidebar from "@/components/docs-sidebar";
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
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block overflow-y-auto border-r border-border/40">
        <div className="h-full py-6 pr-6 lg:py-8">
          <DocsSidebar navigation={navigation} />
        </div>
      </aside>
      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_200px]">
        <div className="mx-auto w-full min-w-0">{children}</div>
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-4 h-[calc(100vh-3.5rem)]">
            <div className="h-full overflow-y-auto py-6 pl-6 lg:py-8 border-l border-border/40">
              <h3 className="font-semibold text-sm mb-4">On this page</h3>
              <div className="text-muted-foreground text-sm">
                <span className="opacity-60 italic">Table of contents</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
