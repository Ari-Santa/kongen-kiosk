import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { getBuildId } from "./build-id";
import { BuildWatcher } from "./build-watcher";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kong Harald",
  description: "Kong Harald V av Norge",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="no" className={`${geistSans.variable} h-full antialiased`}>
      <body className="h-full bg-black text-white overflow-hidden">
        <BuildWatcher initialBuildId={getBuildId()} />
        {children}
      </body>
    </html>
  );
}
