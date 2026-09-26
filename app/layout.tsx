import type { Metadata } from "next";
import "./globals.css";

const description = "Estratégia, dados e tecnologia para transformar a gestão pública.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.inovaigp.com.br"),
  title: "Inova | Inteligência em Gestão Pública",
  description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Inova",
    title: "Inova | Inteligência em Gestão Pública",
    description,
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
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
