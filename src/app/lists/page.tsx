import List from "@/components/List";
import { getPostMetadata } from "@/utilities/metadata";

const IndexPage = () => {
  const posts = getPostMetadata();
  const postPreviews = posts.map((x) => (
    <List key={x.slug} {...x} />
  ));
  return <div className="bg-darker p-5">{postPreviews}</div>;
};

export default IndexPage;
