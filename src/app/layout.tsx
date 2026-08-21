import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Convoa | AI Voice Assistant for Business Calls",
  description:
    "Convoa automates calls, bookings, and lead handling with a smart AI voice assistant that works 24/7 to grow your business.",
};

import StyledComponentsRegistry from '@/lib/registry';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <AntdRegistry>
            <Navbar />
            {children}
            <Footer />
          </AntdRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
