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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: "Portfolio | Mohamed Shaaban",
    template: "%s | Mohamed Shaaban Portfolio",
  },
  description: "Professional portfolio of Mohamed Shaaban - Senior Software Engineer with 7+ years of experience in designing and developing scalable web applications. Built with Next.js, TypeScript, and Tailwind CSS.",
  keywords: ["portfolio", "software engineer", "senior developer", ".NET Core", "Node.js", "React", "TypeScript", "JavaScript", "Mohamed Shaaban"],
  authors: [{ name: "Mohamed Shaaban" }],
  creator: "Mohamed Shaaban",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Portfolio | Mohamed Shaaban",
    description: "Professional portfolio of Mohamed Shaaban - Senior Software Engineer with 7+ years of experience in designing and developing scalable web applications.",
    siteName: "Mohamed Shaaban Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamed Shaaban Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Mohamed Shaaban",
    description: "Professional portfolio of Mohamed Shaaban - Senior Software Engineer with 7+ years of experience in designing and developing scalable web applications.",
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
