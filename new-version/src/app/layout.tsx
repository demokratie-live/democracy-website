import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HashRedirect } from "@/components/HashRedirect";
import { getNavigation, getFooter, getGlobalSEO } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getGlobalSEO();
  return {
    title: {
      default: seo.title,
      template: `%s | ${seo.title}`,
    },
    description: seo.description,
    metadataBase: new URL(seo.siteUrl),
    openGraph: {
      siteName: seo.openGraph.siteName,
      type: "website",
      locale: seo.locale,
      url: seo.siteUrl,
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: seo.openGraph.image,
          width: seo.openGraph.imageWidth,
          height: seo.openGraph.imageHeight,
          alt: seo.openGraph.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.openGraph.image],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [navigation, footer] = await Promise.all([getNavigation(), getFooter()]);

  return (
    <html lang="de" className={`${inter.className} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <HashRedirect />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-none"
        >
          Zum Hauptinhalt springen
        </a>
        <Navbar navigation={navigation} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer footer={footer} />
      </body>
    </html>
  );
}
