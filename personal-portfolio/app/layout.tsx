// app/layout.tsx
//import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"; // We need this for the theme
import Header from "./components/Header";

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
        <Providers>
          <Header />
          {children} {/* This line renders your actual page content */}
        </Providers>
      </body>
    </html>
  );
}
