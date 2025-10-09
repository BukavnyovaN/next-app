import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/UI/layout/header";
import { Provider } from "@/providers/provider";
import { siteConfig } from "@/config/site.config";
import { layoutConfig } from "@/config/layout.config";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth/auth";
import AppLoader from "@/hoc/app-loader";
import Title from "@/components/UI/layout/title";

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

export default async function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <Provider>
      <SessionProvider session={session}>
        <AppLoader>
          <Header/>
          <Title/>
          <main className={`h-[calc(100vh-160px)] flex flex-col w-full justify-start items-center`}>
            {children}
          </main>
          <footer className={`h-[${layoutConfig.footerHeight}] w-full flex justify-center items-center`}>
            <p>{siteConfig.description}</p>
          </footer>
        </AppLoader>
      </SessionProvider>
    </Provider>
    </body>
    </html>
  );
}
