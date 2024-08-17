import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { twMerge } from "tailwind-merge";

const dm_Sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Startup Page",
  description: "Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={twMerge(dm_Sans.className, "antialiased bg-[#eaeefe]")}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
