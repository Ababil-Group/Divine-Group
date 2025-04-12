import Footer from "@/components/Footer";
import "../globals.css";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={`${poppins.className} flex min-h-screen flex-col`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
