import { Inter } from "next/font/google";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { HeaderProvider } from "@/contexts/HeaderContext";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        {/* FontAwesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <HeaderProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </HeaderProvider>
      </body>
    </html>
  );
}
