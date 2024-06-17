import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className=" border-b-2 mb-8">
      {/* <div className="my-5">
        <Link href="https://vndb.org/c3930" target="_blank"></Link>
      </div> */}
      <div className="flex flex-row justify-between mb-5 mt-2">
        <div className="flex flex-row justify-between items-center">
          <Link href="/" className="hover:cursor-pointer pr-3">
            <div className="flex flex-row items-center">
              {/* <div className="p-2">
                <Image
                  alt="banner_image"
                  src="/favicon.ico"
                  width={50}
                  height={50}
                  className=""
                />
              </div> */}
              <div className="">
                <p className="font-bold text-3xl text-center hover:text-blue-200">cinori</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-row justify-between items-center">
          <Link href="/about" className="mx-2 hover:bg-darker p-3">
            about
          </Link>
          <Link href="/lists" className="mx-2 hover:bg-darker p-3">
            index
          </Link>
          <Link href="/api/feed.rss" className="mx-2 hover:bg-darker p-3">
            rss
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
