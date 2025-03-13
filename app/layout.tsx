import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/modules/footer";
import { Header } from "@/components/modules/header";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Positivus",
  description: "Navigating the digital landscape for success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=580, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
