import type { Metadata } from "next";
import { Irish_Grover, Bebas_Neue } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const irishGrover = Irish_Grover({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-irish-grover",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "SɅNɅDITO® | Solución Estéril Profesional",
  description: "La única solución estéril profesional que tu piercing necesita. Recomendado por expertos.",
  metadataBase: new URL('https://sanadito.com'),
  openGraph: {
    title: 'SɅNɅDITO®',
    description: 'La única solución estéril profesional que tu piercing necesita',
    url: 'https://sanadito.com',
    siteName: 'SɅNɅDITO®',
    locale: 'es',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#000000',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Script id="schema-org" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "SɅNɅDITO",
          "description": "Solución estéril profesional para el cuidado de piercings",
          "brand": {
            "@type": "Brand",
            "name": "SɅNɅDITO"
          }
        })}
      </Script>
      <body
        className={`${irishGrover.variable} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
