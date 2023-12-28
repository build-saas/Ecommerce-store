import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import ModelProvider from "@/providers/model-provider";
import ToastProvider from "@/providers/toast-provider";
import { constructMetadata } from "@/lib/utils";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModelProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
