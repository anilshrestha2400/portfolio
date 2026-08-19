import type { Metadata } from "next";
import { Bangers, Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bangers = Bangers({
  weight: "400",
  variable: "--font-bangers",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anil Shrestha - Full Stack Developer",
  description:
    "Passionate Full Stack Developer specializing in React.js, Node.js, and TypeScript. Building modern web applications with attention to detail and user experience.",
  keywords: [
    "Full Stack Developer",
    "React.js",
    "Node.js",
    "TypeScript",
    "Web Development",
    "Anil Shrestha",
  ],
  authors: [{ name: "Anil Shrestha" }],
  creator: "Anil Shrestha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anilshrestha.dev",
    title: "Anil Shrestha - Full Stack Developer",
    description:
      "Passionate Full Stack Developer specializing in React.js, Node.js, and TypeScript.",
    siteName: "Anil Shrestha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anil Shrestha - Full Stack Developer",
    description:
      "Passionate Full Stack Developer specializing in React.js, Node.js, and TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bangers.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
