"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalData: number;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  totalData
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "5";

  return (
    <div className="grid grid-cols-3 gap-4 border-t-2 pt-3 text-lg font-semibold">
      <div className="">
        <button
          className="hover:text-cyan-400 p-1 pr-2"
          disabled={!hasPrevPage}
          onClick={() => {
            router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`);
          }}
        >
          《 Previous
        </button>
      </div>

      <div className="text-center p-1">
        {page} of {Math.ceil(totalData / Number(per_page))}
      </div>

      <div className="text-right">
        <button
          className="hover:text-cyan-400 p-1 pl-2"
          disabled={!hasNextPage}
          onClick={() => {
            router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`);
          }}
        >
          Next 》
        </button>
      </div>
    </div>
  );
};

//TODO - fix pagination in home => review this code below locally

// const HomePage = ({
//   searchParams,
// }: {
//   searchParams: { [key: string]: string | string[] | undefined };
// }) => {
//   const posts = getPostMetadata();

//   const page = searchParams["page"] ?? "1";
//   const per_page = searchParams["per_page"] ?? "5";

//   const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
//   const end = start + Number(per_page); // 5, 10, 15 ...

//   const entries = posts.slice(start, end);

//   return (
//     <div>
//       {entries.map((x) => (
//         <PostPreview key={x.slug} {...x} />
//       ))}

//       <div className="mt-8">
//         <PaginationControls
//           hasNextPage={end < posts.length}
//           hasPrevPage={start > 0}
//           totalData={posts.length}
//         />
//       </div>
//     </div>
//   );
// };

export default PaginationControls;
