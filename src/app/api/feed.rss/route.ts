import { Feed } from "feed";
import { getPostMetadata } from "@/utilities/metadata";

export async function GET(request: Request) {
  const allPosts = getPostMetadata(); 
  const site_url = "https://cinorin.github.io/cinoriblog"; 

  const feedOptions = {
    title: "Blog | cinori",
    description: "RSS for my blog",
    id: site_url,
    link: site_url,
    language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    copyright: "All rights reserved 2024, Cinori",
    generator: "https://github.com/jpmonette/feed", // optional, default = 'Feed for Node.js'
    feedLinks: {
      json: `${site_url}/json`,
      atom: `${site_url}/atom`
    },
    author: {
      name: "Cinori",
      link: "https://github.com/cinorin"
    }
  };

  const feed = new Feed(feedOptions);

  allPosts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${site_url}/posts/${post.slug}`,
      link: `${site_url}/posts/${post.slug}`,
      description: post.subtitle,
      date: new Date(post.date),
    });
  });

  let rssFeed = feed.rss2();

  const atomLink = `<atom:link href="${site_url}/feed.rss" rel="self" type="application/rss+xml"/>`;
  rssFeed = rssFeed.replace(
    '<rss version="2.0">',
    `<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">`
  );

  rssFeed = rssFeed.replace(
    '<channel>',
    `<channel>\n${atomLink}`
  );

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
