import Link from "next/link";

const Footer = () => {
  return (
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
};

export default Footer;
