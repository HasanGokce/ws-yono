import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Topbar } from "./components/organisms/Topbar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yono Game MVP",
  description: "Generated by H. G.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div id="globalLoader">
          <Image
            src="/infinite-spinner.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={35}
            priority={true}
          />
        </div> */}
        <Topbar  />
        {children}
        {/* <Bottombar /> */}
      </body>
    </html>
  );
}
