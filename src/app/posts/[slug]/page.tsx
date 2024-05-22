import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { getPostMetadata } from "@/utilities/metadata";
import { formatDate } from "@/utilities/formatDate";

const getPostContent = (slug: string) => {
  const folder = "src/contents/posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((x) => ({
    slug: x.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  const date = formatDate(post.data.date)
  // const tags = post.data.tags.toString(" ") // TODO
  
  return (
    <div className="bg-darker p-5">
      <h1 className="text-center font-bold text-3xl mt-5 pb-10 border-b-2">{post.data.title}</h1>
      <p className="mt-1 mb-10 font-extralight text-sm">{date}</p>
      <article className="prose dark:prose-invert sm:prose-sm md:prose-base lg:prose-lg">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
