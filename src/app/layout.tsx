import type { Metadata, Viewport } from "next";
import { Delius_Swash_Caps, Inter } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://shaabohub.com'),
  title: {
    default: "Mohamed Shaaban - Senior Software Engineer & Backend Team Lead",
    template: "%s | Mohamed Shaaban - Senior Backend Engineer",
  },
  description: "Senior Software Engineer & Backend Team Lead with 7+ years experience. Expert in .NET Core, Node.js, microservices architecture. Proven backend team leadership in scalable enterprise applications.",
  keywords: ["Senior Software Engineer", "Senior Backend Engineer", "Backend Team Lead", "Mohamed Shaaban", ".NET Core Expert", "Node.js Developer", "Microservices Architecture", "Team Leadership", "Backend Development", "Software Engineering Lead", "Alexandria Egypt", "Enterprise Applications", "Scalable Systems", "Backend Engineer"],
  authors: [{ name: "Mohamed Shaaban", url: "https://shaabohub.com" }],
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
    title: "Mohamed Shaaban - Senior Software Engineer & Backend Team Lead",
    description: "Senior Software Engineer & Backend Team Lead with 7+ years experience in .NET Core, Node.js, and microservices. Proven leadership in building scalable enterprise applications and managing backend teams.",
    siteName: "Mohamed Shaaban - Senior Backend Engineer Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamed Shaaban - Senior Software Engineer & Backend Team Lead Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Shaaban - Senior Software Engineer & Backend Team Lead",
    description: "Senior Software Engineer & Backend Team Lead with 7+ years experience. Expert in .NET Core, Node.js, and team leadership.",
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0C2E3VF1X6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0C2E3VF1X6');
          `}
        </Script>
      </head>
      <body
        className={`${deliusSwashCaps.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
