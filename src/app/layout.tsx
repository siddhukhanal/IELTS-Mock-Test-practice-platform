import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ielts user dashboard",
  description: "A dashboard for ielts users to track their progress and performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${inter.className} text-stone-950 bg-stone-100 h-screen overflow-hidden`} 
        suppressHydrationWarning
      >
       
        {children}
      </body>
    </html>
  );
}