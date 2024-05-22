import Link from "next/link";

const CustomError404 = () => {
  return (
    <div className="text-center">
      <h2 className="font-bold text-lg">404 | Not Found</h2>
      <div className="rounded-sm mt-5">
        <Link href="/" className="p-2 border hover:bg-darker">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default CustomError404;
