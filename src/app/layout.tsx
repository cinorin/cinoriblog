import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import the font
const NotoSans = Noto_Sans_JP({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "cinori blog",
  description: "wow cool description"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
