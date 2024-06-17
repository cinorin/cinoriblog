import { PostMetadata } from "@/utilities/interface";
import Link from "next/link";
import { formatDate } from "@/utilities/formatDate";

const List = (props: PostMetadata) => {
  const date = formatDate(props.date);
  return (
    <Link href={`/posts/${props.slug}`}>
      <div
        key={props.slug}
        className="lg:text-lg md:text-base flex justify-between hover:cursor-pointer hover:underline hover:text-blue-200"
      >
        <h2 className="">{props.title}</h2>
        <div className="flex-none">{date}</div>
      </div>
    </Link>
  );
};

export default List;
