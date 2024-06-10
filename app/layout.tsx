import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MeLi challenge",
  description: "Developed with NextJS and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
