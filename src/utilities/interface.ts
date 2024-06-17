export interface PostMetadata {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
  thumbnail: string;
  draft: boolean;
  tags: string[];
}

// export type Props = {
//   params: { slug: string }
//   searchParams: { [key: string]: string | string[] | undefined }
// }

export type Props = {
  params: {
    slug: string;
  };
  searchParams: URLSearchParams;
};