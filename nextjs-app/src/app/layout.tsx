import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DEMOCRACY Deutschland e.V.",
  description: "Digitale Demokratie für Deutschland. Stimme über Abstimmungen im Bundestag direkt über die DEMOCRACY App ab.",
  metadataBase: new URL("https://www.democracy-deutschland.de"),
  openGraph: {
    title: "DEMOCRACY Deutschland e.V.",
    description: "Digitale Demokratie für Deutschland. Stimme über Abstimmungen im Bundestag direkt über die DEMOCRACY App ab.",
    url: "https://www.democracy-deutschland.de",
    siteName: "DEMOCRACY Deutschland",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEMOCRACY Deutschland e.V.",
    description: "Digitale Demokratie für Deutschland. Stimme über Abstimmungen im Bundestag direkt über die DEMOCRACY App ab.",
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
    <html lang="de" className={inter.variable}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
