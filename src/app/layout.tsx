import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cinori blog",
  description: "the home of L takes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = (
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
            src="./banner_1.png"
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

  const footer = (
    <footer>
      <div className="border-t mt-10 mb-5">
        <Link href="https://vndb.org/v6700" target="_blank">
          <div className="font-extralight text-xs mt-2 hover:underline hover:text-cyan-200 text-center">
            <p className="italic">
              &quot;I&apos;ve got tons of free time, but not that much.
              I&apos;ve got anime to watch, not to mention online auctions
              I&apos;ve gotta keep my eye on!&quot;
            </p>
            <p>- すぴぱら (minori)</p>
          </div>
        </Link>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./img/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className="mx-auto max-w-3xl px-3">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
