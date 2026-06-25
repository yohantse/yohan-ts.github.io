import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Safe Town Electromechanical | Turnkey Engineering & Installation Services",
  description: "Safe Town Electromechanical provides world-class HVAC, plumbing, firefighting, electrical installation, generator erection, and street lighting engineering services in Ethiopia.",
  keywords: ["electromechanical contractor", "HVAC Ethiopia", "electrical installation Addis Ababa", "plumbing engineering", "Safe Town Electromechanical"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
