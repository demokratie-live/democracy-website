import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getNavigation, getFooter } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DEMOCRACY Deutschland",
    template: "%s | DEMOCRACY Deutschland",
  },
  description:
    "DEMOCRACY ermöglicht politische Mitbestimmung — transparent, unabhängig, digital.",
  metadataBase: new URL("https://www.democracy-deutschland.de"),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navigation, footer] = await Promise.all([
    getNavigation(),
    getFooter(),
  ]);

  return (
    <html lang="de" className={`${inter.className} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar navigation={navigation} />
        <main className="flex-1">{children}</main>
        <Footer footer={footer} />
      </body>
    </html>
  );
}
