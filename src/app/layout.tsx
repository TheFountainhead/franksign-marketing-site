import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FrankSign - Elektronisk Signatur for Europa",
  description: "Send dokumenter til underskrift på få sekunder. Sikker, juridisk bindende og GDPR-compliant. EU eIDAS kvalificeret e-signatur for kun 5 kr pr. dokument.",
  keywords: ["e-signatur", "elektronisk signatur", "digital signatur", "dokument signering", "eIDAS", "GDPR", "Danmark"],
  openGraph: {
    title: "FrankSign - Elektronisk Signatur for Europa",
    description: "Send dokumenter til underskrift på få sekunder. Sikker, juridisk bindende og GDPR-compliant.",
    url: "https://franksign.io",
    siteName: "FrankSign",
    locale: "da_DK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className={`${inter.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
