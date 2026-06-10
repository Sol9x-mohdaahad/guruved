import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guruved — AI-Powered Operating System for Modern Education",
  description:
    "Guruved unifies LMS, ERP, attendance, communications and AI analytics for 21,000+ institutions. One platform. Limitless learning.",
  authors: [{ name: "Guruved" }],
  openGraph: {
    title: "Guruved — AI-Powered Operating System for Education",
    description:
      "One AI-native platform for LMS, ERP, attendance, comms and analytics.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
