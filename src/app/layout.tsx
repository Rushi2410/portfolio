import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rushikesh-andhale.vercel.app";
const title = "Rushikesh Andhale | Full Stack Web Developer";
const description =
  "Portfolio of Rushikesh Vitthal Andhale, Full Stack Web Developer (MERN) building responsive web applications.";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Rushikesh Andhale Portfolio",
  keywords: [
    "Rushikesh Andhale",
    "Rushikesh Vitthal Andhale",
    "Full Stack Developer",
    "MERN Developer",
    "Web Developer Portfolio",
    "React Developer",
    "Node.js Developer",
  ],
  authors: [{ name: "Rushikesh Vitthal Andhale", url: siteUrl }],
  creator: "Rushikesh Vitthal Andhale",
  publisher: "Rushikesh Vitthal Andhale",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Rushikesh Andhale Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Rushikesh Andhale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/profile.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${firaCode.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
