import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MeLi challenge",
  description: "Developed with NextJS and Tailwind CSS",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <header className="h-16 bg-primary flex ">
          <form action='/items' className="max-w-screen-xl gap-4 m-auto px-4 flex flex-1 items-center">
            <a href="/" className="flex items-center">
              <img src="/mercadolibre.com.svg" alt="MercadoLibre Logo" className="h-8 mr-2" />
            </a>
            <input name="search" type="text" className="h-8 flex-1 text-white px-2" />
            <button className="bg-lightGray px-2 py-1 h-8 text-slate-700" type="submit">Buscar</button>
          </form>
        </header>
        <main className="max-w-screen-lg m-auto p-4">{children}</main>
      </body>
    </html>
  );
}
