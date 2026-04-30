import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Impulso Digital · Sistemas de generación de clientes para empresas de servicios",
  description:
    "Captamos y convertimos leads para empresas de servicios. Sistemas de ventas, campañas de Google Ads y sitios web optimizados para resultados.",
  keywords: [
    "agencia marketing digital",
    "google ads pymes",
    "generación de leads",
    "sitios web profesionales",
    "embudo de ventas",
  ],
  openGraph: {
    title: "Impulso Digital",
    description: "Sistemas de generación de clientes para empresas de servicios.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-white text-ink-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
