import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className=" border-b-2 mb-8">
      <div className="my-5">
        <Link href="/">
          <div className="hover:cursor-pointer">
            <h1 className="font-bold text-3xl">cinori blog</h1>
            <p className="text-sm font-light">最も尊い自己犠牲精神を発露して</p>
          </div>
        </Link>
        <Link href="https://vndb.org/v30837" target="_blank">
          <Image
            alt="banner_image"
            src="./banner_1.png" //Change this before deployment
            width={1000}
            height={350}
            className="mt-4 hover:cursor-pointer"
          />
        </Link>
      </div>
      <div className="mx-auto w-full max-w-md text-center mb-5">
        <Link href="/" className="mx-1 hover:bg-darker  p-3 ">
          Home
        </Link>
        <Link href="/about" className="mx-2 hover:bg-darker  p-3">
          About
        </Link>
        <Link href="/lists" className="mx-2 hover:bg-darker  p-3">
          Index
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
