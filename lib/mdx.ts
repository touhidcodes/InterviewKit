import fs from "fs";
import matter from "gray-matter";
import path from "path";

const contentDirectory = path.join(process.cwd(), "content");

export function getTopics() {
  if (!fs.existsSync(contentDirectory)) return [];
  const entries = fs.readdirSync(contentDirectory, { withFileTypes: true });
  const topics = entries
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
    .map((entry) => entry.name);

  const metaPath = path.join(contentDirectory, "meta.json");
  if (fs.existsSync(metaPath)) {
    try {
      const order = JSON.parse(fs.readFileSync(metaPath, "utf8")) as string[];
      return topics.sort((a, b) => {
        const aIndex = order.indexOf(a);
        const bIndex = order.indexOf(b);
        if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
        if (aIndex === -1) return 1;
        if (bIndex === -1) return -1;
        return aIndex - bIndex;
      });
    } catch (e) {
      console.error("Error parsing meta.json in content directory", e);
    }
  }

  return topics;
}

export function getDocsForTopic(topic: string) {
  const topicPath = path.join(contentDirectory, topic);
  if (!fs.existsSync(topicPath)) return [];

  const entries = fs.readdirSync(topicPath, { withFileTypes: true });
  const docs = entries
    .filter((entry) => entry.isFile() && /\.mdx?$/.test(entry.name))
    .map((entry) => {
      const fileName = entry.name;
      const filePath = path.join(topicPath, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      const slug = fileName
        .replace(/\.mdx?$/, "")
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "");

      return {
        slug,
        meta: data,
        content,
      };
    });

  const metaPath = path.join(topicPath, "meta.json");
  if (fs.existsSync(metaPath)) {
    try {
      const order = JSON.parse(fs.readFileSync(metaPath, "utf8")) as string[];
      return docs.sort((a, b) => {
        const aIndex = order.indexOf(a.slug);
        const bIndex = order.indexOf(b.slug);
        if (aIndex === -1 && bIndex === -1) return a.slug.localeCompare(b.slug);
        if (aIndex === -1) return 1;
        if (bIndex === -1) return -1;
        return aIndex - bIndex;
      });
    } catch (e) {
      console.error(`Error parsing meta.json in ${topic} directory`, e);
    }
  }

  return docs;
}

export function getDocContent(topic: string, slug: string) {
  const topicPath = path.join(contentDirectory, topic);
  if (!fs.existsSync(topicPath)) return null;

  const entries = fs.readdirSync(topicPath, { withFileTypes: true });
  const entry = entries.find((e) => {
    if (!e.isFile()) return false;
    const s = e.name
      .replace(/\.mdx?$/, "")
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
    return s === slug;
  });

  if (!entry) return null;

  const filePath = path.join(topicPath, entry.name);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    meta: data,
    content,
  };
}

export function extractHeadings(content: string) {
  const headingRegex = /^(##|###)\s+(.*)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const title = match[2].trim();
    const id = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    headings.push({ title, id, level });
  }

  return headings;
}
