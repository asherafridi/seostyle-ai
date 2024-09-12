import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Poppins as FontSans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { cn } from "@/lib/utils";
import { SessionProvider } from "next-auth/react";
import Provider from "@/components/Provider";

const fontSans = FontSans({
  weight:['200','400','500'],
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.APP_NAME || "Default Title",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right" />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
