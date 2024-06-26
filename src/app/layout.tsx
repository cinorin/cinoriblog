import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotoSans = Noto_Sans_JP({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "cinori blog",
  description: "wow what a cool description",
  metadataBase: new URL("https://cinorin.github.io/cinoriblog/"),
  applicationName : "cinori blog",
  authors: { url: "https://github.com/cinorin", name: "cinori"},
  openGraph: {
    images: 'https://cinorin.github.io/cinoriblog/favico.ico'
  },
};

// console.log(metadata.openGraph?.images[0].url, '<<<<<<<');


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`${metadata.metadataBase}/favicon.ico`} />
      </head>
      <body className={NotoSans.className}>
        <div className="mx-auto px-3 max-w-2xl">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
