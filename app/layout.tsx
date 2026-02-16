import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_layout/Header";
import Footer from "./_layout/Footer";
import Preloader from "@/components/PreLoader";
import IphoneViewportGuard from "@/providers/IphoneViewportGuard";
import ProgressProvider from "@/providers/ProgressProvider";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Isaac Centre for Public Policy ",
  description:
    "The Isaac Centre for Public Policy (ICPP) at Ashoka University aims to be India’s leading public policy center, generating impactful ideas and research on Indian public policy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-geist-sans antialiased`}
      >
        {" "}
        <ProgressProvider>
          <Preloader />
          <IphoneViewportGuard />
          <Header />
          {children}
          <Footer />
        </ProgressProvider>
      </body>
    </html>
  );
}
