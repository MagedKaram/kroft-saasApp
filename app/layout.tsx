import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Cairo, Geist_Mono } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-sans",
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kroft Scheduling App",
  description: "Simplify your scheduling with Kroft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cairo.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
