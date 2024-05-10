import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FSW Foods",
  description: "FSW Food um app para pedidos de comida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
