import { PostMetadata } from "@/utilities/interface";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/utilities/formatDate";
import { metadata } from "@/app/layout";

const PostPreview = (props: PostMetadata) => {
  const date = formatDate(props.date)
  return (
    <div className="mt-10">
      <p className="text-sm text-slate-400">{date}</p>
      <Link href={`/posts/${props.slug}`}>
        <h2 className="my-2 font-semibold text-xl hover:underline hover:text-blue-200">
          {props.title}
        </h2>
      </Link>
        
      {props.thumbnail !== undefined && (
        <Image
        alt="thumbnail_image"
        src={"https://cinorin.github.io/cinoriblog" + props.thumbnail}
        width={1080}
        height={300}
        className=""
        />
      )}
      {/* <p className="">{props.subtitle}</p> */}
    </div>
  );
};

export default PostPreview;
