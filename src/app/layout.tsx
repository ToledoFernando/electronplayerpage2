import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ElectronPlayer",
  description:
    "ElectronPlayer - Reproductor de música local y en línea. Descubre novedades, cambios y actualizaciones. Descarga música y disfruta de un reproductor de código abierto.",
  robots: "index, follow",
  canonical: "https://www.electronplayer.online",
  keywords:
    "ElectronPlayer, reproductor de música, música online, reproductor de música online, reproductor de música electrónica, música local, descargar música, reproductor de código abierto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
