import { PostMetadata } from "@/utilities/interface";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/utilities/formatDate";

const PostPreview = (props: PostMetadata) => {
  const date = formatDate(props.date)
  return (
    <div className="bg-darker my-3 p-3">
      <p className="text-xs font-extralight">{date}</p>
      <Link href={`/posts/${props.slug}`}>
        <h2 className="font-bold text-3xl my-2 hover:underline hover:text-cyan-400">
          {props.title}
        </h2>
      </Link>
      {props.thumbnail !== undefined && (
        <Image
          alt="thumbnail_image"
          src={props.thumbnail}
          width={1000}
          height={350}
          className="my-4"
        />
      )}
      <p className="font-light text-sm">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
