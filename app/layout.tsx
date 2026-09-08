import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inova | Inteligência em Gestão Pública",
  description:
    "Estratégia, dados e tecnologia para transformar a gestão pública.",
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
