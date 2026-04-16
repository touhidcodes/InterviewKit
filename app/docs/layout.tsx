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
          <div className="container py-6 lg:py-8 h-full">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
