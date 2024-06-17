import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { getPostMetadata } from "@/utilities/metadata";
import { formatDate } from "@/utilities/formatDate";
import { Metadata, ResolvingMetadata } from "next";
import { Props } from "@/utilities/interface";
import { log } from "console";

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

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // console.log(params, searchParams, "<<< From Metadata");

  const allMetadatas = getPostMetadata()
  const [metadata] = allMetadatas.filter(x => x.slug === params.slug)
  // console.log(metadata, "perpost metadata");
  

  const id = params?.slug ? " - " + params?.slug : "";
  const post = getPostContent(params?.slug);

  const parentMetadata = await parent;
  const metadataBase = parentMetadata.metadataBase;

  const baseImageUrl = metadataBase ? new URL(metadataBase) : new URL("https://cinorin.github.io/cinoriblog/");
  const thumbnailUrl = new URL(metadata.thumbnail, baseImageUrl).href;
  // console.log(baseImageUrl, thumbnailUrl, "<<<<");
  
  return {
    title: metadata.title,
    description: post.data.subtitle,
    openGraph: {
      images: [
        {
          url: thumbnailUrl,
          alt: metadata.title,
        },
      ],
    },
  };
}

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  const date = formatDate(post.data.date);
  // const tags = post.data.tags.toString(" ") // TODO

  return (
    <div className="">
      <h1 className="font-semibold text-3xl border-b-2 pb-5">
        {post.data.title}
      </h1>
      <p className="mt-1 text-sm">{date}</p>
      <article className="prose dark:prose-invert sm:prose-sm md:prose-base lg:prose-lg">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
