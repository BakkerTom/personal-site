import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({ src: "./Satoshi-Variable.woff2" });

export const metadata: Metadata = {
  title: "Tom Bakker",
  description: "Designer and developer currently working at Efteling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${satoshi.className} bg-stone-50 text-zinc-900`}>
        {children}
      </body>
    </html>
  );
}
