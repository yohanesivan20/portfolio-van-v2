import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Ivan Danasuta | Fullstack Developer Portfolio",
  description:
    "Discover the portfolio of Ivan Danasuta: fullstack developer specializing in B2B web systems, AI document processing, and modern user experiences.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-white overflow-x-hidden">
        <Navbar />
        <Cursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}