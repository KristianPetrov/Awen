import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Awen Chair",
  description: "Grounding, restorative hair ritual — Awen Chair",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="top" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="sticky top-0 z-20 bg-brown border-b border-maroon/20">
          <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
            <a href="#top" className="text-lg font-semibold text-maroon">Awen Chair</a>
            <nav className="flex items-center gap-4 sm:gap-6">
              <a href="#mission" className="text-sm sm:text-base text-maroon hover:opacity-90">Mission</a>
              <a href="#vision" className="text-sm sm:text-base text-maroon hover:opacity-90">Vision</a>
              <a href="#book" className="rounded-full bg-maroon text-white px-4 py-2 text-sm sm:text-base hover:opacity-90">Book Now</a>
              <a href="#contact" className="rounded-full bg-maroon text-white px-4 py-2 text-sm sm:text-base hover:opacity-90">Contact</a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
