import AppBar from "@/components/AppBar";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Providers from "@/components/Providers";
import FooterBar from "@/components/FooterBar";

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
      <html lang="en" className="h-full">
        <body
          className={`border-t-4 border-black ${inter.className} h-full flex flex-col`}
        >
          <div className="flex-[1_0_auto]">
            <AppBar />
            {children}
          </div>
          <FooterBar />
        </body>
      </html>
    </Providers>
  );
}
