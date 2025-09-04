// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"; // Import the Header

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amira's Portfolio",
  description: "A personal portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
       
      </body>
    </html>
  );
}
