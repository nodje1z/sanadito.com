import type { Metadata } from "next";
import { Irish_Grover, Bebas_Neue } from "next/font/google";
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
  title: "SɅNɅDITO® | Cuidado Profesional para Piercings",
  description: "La única solución estéril profesional que tu piercing necesita",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${irishGrover.variable} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
