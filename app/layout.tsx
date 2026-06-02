import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Akanksha Wadhwan | Marketing Portfolio",
  description:
    "Marketing strategist specializing in social media campaigns, brand storytelling, and consumer research.",
  openGraph: {
    title: "Akanksha Wadhwan | Marketing Portfolio",
    description:
      "Marketing strategist specializing in social media campaigns, brand storytelling, and consumer research.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
