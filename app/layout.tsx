import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Background } from "@/components/Background";
import { profile } from "@/data/profile";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jitendra Sachwani | Senior Software Engineer & Full Stack Developer",
  description:
    "Building scalable software with clean architecture and beautiful user experiences. Specializing in Next.js, React, Node.js, and Cloud Infrastructure.",
  keywords: [
    "Jitendra Sachwani",
    "Full Stack Developer",
    "Senior Software Engineer",
    "Next.js Portfolio",
    "React Developer",
    "Clean Architecture",
    "Docker",
    "Kubernetes",
    "AWS",
    "TypeScript",
  ],
  authors: [{ name: "Jitendra Sachwani", url: "https://jitendrasachwani.dev" }],
  creator: "Jitendra Sachwani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jitendrasachwani.dev",
    title: "Jitendra Sachwani | Senior Software Engineer & Full Stack Developer",
    description:
      "Building scalable software with clean architecture and beautiful user experiences.",
    siteName: "Jitendra Sachwani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jitendra Sachwani | Senior Software Engineer & Full Stack Developer",
    description:
      "Building scalable software with clean architecture and beautiful user experiences.",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="noise-overlay" />
          <Background />
          <div className="fixed top-6 right-6 px-6 z-50 transition-all duration-300">
            <ThemeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
