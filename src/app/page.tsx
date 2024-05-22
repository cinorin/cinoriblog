import { getPostMetadata } from "@/utilities/metadata";
import PostPreview from "@/components/PostPreview";
import PaginationControls from "@/components/PaginationControls";

const HomePage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const posts = getPostMetadata();

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "5";

  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...

  const entries = posts.slice(start, end);

  return (
    <div>
      {entries.map((x) => (
        <PostPreview key={x.slug} {...x} />
      ))}

      <div className="mt-8">
        <PaginationControls
          hasNextPage={end < posts.length}
          hasPrevPage={start > 0}
          totalData={posts.length}
        />
      </div>
    </div>
  );
};

export default HomePage;
