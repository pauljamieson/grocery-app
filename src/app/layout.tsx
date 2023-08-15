import AppBar from "@/components/AppBar";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Providers from "@/components/Providers";

const inter = Roboto({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grocery Bag",
  description: "App to help you keep track of your groceries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <AppBar />
          {children}
        </body>
      </html>
    </Providers>
  );
}
