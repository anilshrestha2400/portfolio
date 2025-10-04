import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
