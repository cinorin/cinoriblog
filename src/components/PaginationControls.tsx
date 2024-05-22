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

export default PaginationControls;
