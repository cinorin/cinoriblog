import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Image from "next/image";

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
        <article className="prose dark:prose-invert mx-auto">
          <Markdown>{about.content}</Markdown>
        </article>
      </div>
    </div>
  );
};

export default AboutPage;
