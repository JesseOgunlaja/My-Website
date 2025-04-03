import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Jesse Ogunlaja",
  description: "Jesse Ogunlaja - Full Stack Developer",
  metadataBase: new URL("https://jesseogu.dev"),
  keywords: ["Jesse", "Ogunlaja", "Jesse Ogunlaja", "Full Stack Developer"],
  authors: [
    {
      name: "Jesse Ogunlaja",
    },
  ],
  openGraph: {
    title: "Jesse Ogunlaja",
    description: "Jesse Ogunlaja - Full Stack Developer",
    images: ["https://jesseogu.dev/opengraph.png"],
    locale: "en_GB",
  },
  creator: "Jesse Ogunlaja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
