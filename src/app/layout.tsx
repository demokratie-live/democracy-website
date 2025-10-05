import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DEMOCRACY Deutschland",
  description: "Weil deine Stimme zählt! - Die DEMOCRACY App für politische Teilhabe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
