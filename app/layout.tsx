import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";

export const metadata: Metadata = {
  title: "MeLi challenge",
  description: "Developed with NextJS and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="max-w-screen-lg m-auto p-4">{children}</main>
      </body>
    </html>
  );
}