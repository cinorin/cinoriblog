import { PostMetadata } from "@/utilities/interface";
import Link from "next/link";
import { formatDate } from "@/utilities/formatDate";

const List = (props: PostMetadata) => {
  const date = formatDate(props.date);
  return (
    <Link href={`/posts/${props.slug}`}>
      <div
        key={props.slug}
        className="text-lg flex justify-between hover:cursor-pointer hover:underline hover:text-cyan-400"
      >
        <h2 className="">{props.title}</h2>
        <div>{date}</div>
      </div>
    </Link>
  );
};

export default List;
