import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/UI/header";
import { Provider } from "@/providers/provider";
import { siteConfig } from "@/config/site.config";
import { layoutConfig } from "@/config/layout.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <Provider>
      <Header/>
      <main className={`h-[calc(100vh-${layoutConfig.footerHeight}-${layoutConfig.headerHeight})] flex flex-col w-full justify-start items-center`}>
        {children}
      </main>
      <footer className={`h-[${layoutConfig.footerHeight}] w-full flex justify-center items-center`}>
        <p>{siteConfig.description}</p>
      </footer>
    </Provider>
    </body>
    </html>
  );
}
