import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "D-art - Shaping Brands with Creations that Inspire",
  description: "D-art - Web base exactly as given.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased font-outfit bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
