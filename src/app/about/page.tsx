import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

const getAboutPage = () => {
  const folder = "src/contents/about/";
  const file = `${folder}about-page.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

const AboutPage = () => {
  const about = getAboutPage();

  return (
    <div className="bg-darker p-5">
      <div>
        <h1 className="text-center font-bold text-3xl mt-5 mb-10">
          {about.data.title}
        </h1>
        <article className="prose dark:prose-invert sm:prose-sm md:prose-base lg:prose-lg">
          <Markdown>{about.content}</Markdown>
        </article>

        <br />
        <Link
          href="https://twitter.com/cinorinaur"
          className="underline text-blue-300 text-lg"
        >
          Xitter
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
