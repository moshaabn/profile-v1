import type { Metadata, Viewport } from "next";
import { Delius_Swash_Caps, Inter } from "next/font/google";
import "./globals.css";

const deliusSwashCaps = Delius_Swash_Caps({
  variable: "--font-delius-swash-caps",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://moshaabn.github.io/profile-v1'),
  title: {
    default: "Mohamed Shaaban - Senior Software Engineer Portfolio",
    template: "%s | Mohamed Shaaban",
  },
  description: "Professional portfolio of Mohamed Shaaban - Senior Software Engineer with 7+ years of experience in full-stack development. Expertise in .NET Core, Node.js, React, TypeScript, and scalable web applications.",
  keywords: ["Mohamed Shaaban", "Senior Software Engineer", "Full-Stack Developer", ".NET Core", "Node.js", "React", "TypeScript", "JavaScript", "Backend Engineer", "Alexandria Egypt", "Software Development", "Web Applications"],
  authors: [{ name: "Mohamed Shaaban", url: "https://moshaabn.github.io/profile-v1" }],
  creator: "Mohamed Shaaban",
  publisher: "Mohamed Shaaban",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Mohamed Shaaban - Senior Software Engineer Portfolio",
    description: "Professional portfolio of Mohamed Shaaban - Senior Software Engineer with 7+ years of experience in full-stack development. Expertise in .NET Core, Node.js, React, and TypeScript.",
    siteName: "Mohamed Shaaban Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamed Shaaban - Senior Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Shaaban - Senior Software Engineer Portfolio",
    description: "Professional portfolio of Mohamed Shaaban - Senior Software Engineer with 7+ years of experience in full-stack development.",
    images: ["/og-image.jpg"],
    creator: "@moshaabn",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${deliusSwashCaps.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
