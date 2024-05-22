import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "./interface";

export const getPostMetadata = (): PostMetadata[] => {
  const folder = "src/contents/posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((f) => f.endsWith(".md"));

  const allPosts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`src/contents/posts/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: filename.replace(".md", ""),
      thumbnail: matterResult.data.thumbnail,
      draft: matterResult.data.draft,
      tags: matterResult.data.tags
    };
  });

  const posts = allPosts.filter((x) => x.draft === false);

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};
