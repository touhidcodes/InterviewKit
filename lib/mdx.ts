import fs from "fs";
import matter from "gray-matter";
import path from "path";

const contentDirectory = path.join(process.cwd(), "content");

export function getTopics() {
  if (!fs.existsSync(contentDirectory)) return [];
  const entries = fs.readdirSync(contentDirectory, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

export function getDocsForTopic(topic: string) {
  const topicPath = path.join(contentDirectory, topic);
  if (!fs.existsSync(topicPath)) return [];

  const files = fs.readdirSync(topicPath);
  return files.map((fileName) => {
    const filePath = path.join(topicPath, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      slug: fileName.replace(/\.mdx?$/, ""),
      meta: data,
      content,
    };
  });
}

export function getDocContent(topic: string, slug: string) {
  const filePath = path.join(contentDirectory, topic, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    meta: data,
    content,
  };
}
