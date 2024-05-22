import { getPostMetadata } from "@/utilities/metadata";
import PostPreview from "@/components/PostPreview";

const HomePage = () => {
  const posts = getPostMetadata();
  //TODO - add infinite scroll instead of dynamic pagination using params

  return (
    <div>
      {posts.map((x) => (
        <PostPreview key={x.slug} {...x} />
      ))}
    </div>
  );
};

export default HomePage;
