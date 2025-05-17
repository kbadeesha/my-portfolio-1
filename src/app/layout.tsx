import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Adeesha Kristhorubaduge",
  description:
    "Frontend & Chatbot Developer - Explore projects, skills, and experience.",
  keywords: [
    "Adeesha Kristhorubaduge",
    "Adeesha's portfolio",
    "Portfolio of Adeesha",
    "Frontend Developer",
    "Chatbot Developer",
    "Next.js Developer",
    "React Developer",
    "Software Engineer Portfolio",
    "Web Developer Portfolio",
    "Fullstack Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Next.js Portfolio",
    "GitHub Portfolio",
  ],
  alternates: {
    canonical: "/my-portfolio-1/",
  },
  authors: [{ name: "Adeesha Kristhorubaduge" }],
  creator: "Adeesha Kristhorubaduge",
  metadataBase: new URL("https://kbadeesha.github.io/my-portfolio-1"),
  openGraph: {
    title: "Adeesha Kristhorubaduge | Portfolio",
    description:
      "Showcasing frontend and chatbot development projects by Adeesha.",
    url: "https://kbadeesha.github.io/my-portfolio-1",
    siteName: "Adeesha's Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Make sure this exists in the public folder
        width: 1200,
        height: 630,
        alt: "Adeesha Kristhorubaduge Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adeesha Kristhorubaduge | Portfolio",
    description:
      "Showcasing frontend and chatbot development projects by Adeesha.",
    images: ["/og-image.jpg"], // Same as above
    creator: "@yourTwitterHandle", // Optional
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
