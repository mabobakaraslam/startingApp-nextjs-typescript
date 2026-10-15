import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./(website)/component/layout/Navbar/page";
import Footer from "./(website)/component/layout/Footer/page";

export const metadata: Metadata = {
  title: "First NextJS App With Built-in",
  description: "first application with nextjs and typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Navbar />
        <main>{children}</main>
      <Footer />
      </body>
    </html>
  );
}
