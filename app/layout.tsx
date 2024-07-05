import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import VideoContent from "@/components/sub/VideoContent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caglar Keskin",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <VideoContent  />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
