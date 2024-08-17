import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainHeader from "@/components/main-header/main-header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "distort-apps",
  description: "Distort the Ordinary, Create the Extraordinary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><MainHeader/>{children}</body>
    </html>
  );
}
