// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"; 
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amira A",
  description: "A personal portfolio website",
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
          {children} 
        </Providers>
      </body>
    </html>
  );
}
