import type { Metadata } from "next";

// Note: globals.css is imported in (public)/layout.tsx to avoid conflicts with Payload CMS

export const metadata: Metadata = {
  title: "DEMOCRACY App",
  description: "Digitale Demokratie für Deutschland. Stimme über Abstimmungen im Bundestag direkt über die DEMOCRACY App ab.",
  metadataBase: new URL("https://www.democracy-deutschland.de"),
  openGraph: {
    title: "DEMOCRACY App",
    description: "Digitale Demokratie für Deutschland. Stimme über Abstimmungen im Bundestag direkt über die DEMOCRACY App ab.",
    url: "https://www.democracy-deutschland.de",
    siteName: "DEMOCRACY Deutschland",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEMOCRACY App",
    description: "Digitale Demokratie für Deutschland. Stimme über Abstimmungen im Bundestag direkt über die DEMOCRACY App ab.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Minimal root layout - actual layouts are in route groups
// (public) for frontend, (payload) for admin
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
