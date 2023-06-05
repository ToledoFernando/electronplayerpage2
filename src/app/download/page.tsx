import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar/NavBar";
import ArticleDownload1 from "@/components/download/Article1";

export const metadata = {
  title: "ElectronPlayer | Download",
  description:
    "ElectronPlayer - Reproductor de música local y en línea. Descubre novedades, cambios y actualizaciones. Descarga música y disfruta de un reproductor de código abierto. Descargar reproductor gratis.",
  robots: "index, follow",
  canonical: "https://www.electronplayer.online",
  keywords:
    "ElectronPlayer, reproductor de música, música online, reproductor de música online, reproductor de música electrónica, música local, descargar música, reproductor de código abierto",
};

function page() {
  return (
    <>
      <NavBar />
      <main>
        <ArticleDownload1 />
      </main>
      <Footer />
    </>
  );
}

export default page;
