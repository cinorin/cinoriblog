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
  description: "wow cool description",
  metadataBase: new URL("https://cinorin.github.io/cinoriblog/"),
  openGraph: {
    images: 'https://cinorin.github.io/cinoriblog' + '/favicon.ico',
  }
};

console.log(metadata.openGraph?.images, '<<<<<<<');


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
