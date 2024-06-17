import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const inter = Inter({ subsets: ["latin"] });

export const noto = Noto_Sans_JP({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "cinori blog",
  description: "lorem ipsum",
  openGraph: {
    images: '/marusiru.png'
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <div className="mx-auto px-3 max-w-2xl">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
