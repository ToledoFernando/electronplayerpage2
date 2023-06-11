import React from "react";
import Image from "next/image";

function ArticleAbout5() {
  return (
    <section className="w-full gap-4 m-auto lg:items-center justify-between max-lg:flex-col-reverse flex my-15 mb-15">
      <div className="w-6/12 pt-0 max-sm:flex-col sm:w-full lg:w-5/12 flex flex-col items-center justify-center max-lg:flex max-lg:flex-row max-lg:pt-0 max-lg:w-10/12 max-lg:m-auto text-center">
        <Image
          className="ml-10 w-full p-0 max-lg:w-10/12 max-sm:w-full max-lg:mt-10 max-lg:m-auto my-10 h-auto rounded-3xl  hover:-translate-y-1 transition-all duration-300"
          src="https://firebasestorage.googleapis.com/v0/b/electronplayer-84128.appspot.com/o/ElectronPlayer6.png?alt=media&token=3afd25bd-21df-45de-9b91-9ee6fe7d9c08&_gl=1*1f7i9xb*_ga*MTk1NDIzNDg2NS4xNjg2NDU4NjM0*_ga_CW55HF8NVT*MTY4NjQ1ODYzMy4xLjEuMTY4NjQ2MDI2Ni4wLjAuMA.."
          width={900}
          title="buscador de electronPlayer"
          height={700}
          alt="redux-logo"
        />
      </div>
      <div className="w-6/12 ml-10 flex py-10 max-md:flex-col max-md:p-8 max-md:h-max max-lg:w-11/12 items-center bg-black bg-opacity-20 rounded-s-3xl shadow-lg shadow-black mt-5 h-max pl-20 pr-10 relative overflow-hidden">
        <span className="absolute bg-blue-700 bg-opacity-10 animate-pulse text-white text-xl w-10/12 h-5/6 max-md:-right-28 -bottom-44 right-20  blur-3xl rounded-full"></span>
        <div>
          <h2 className="text-3xl mb-10">¡Un nuevo buscador!</h2>
          <p className="mb-4">
            - Ahora en ElectronPlayer v2 podrás buscar tu música favorita
            utilizando solo el nombre o la URL de la música de YouTube. Tendrás
            la opción de escucharla en línea o descargarla para poder
            disfrutarla sin conexión a Internet.
          </p>
          <p className="mb-4">
            - ElectronPlayer utiliza los paquetes npm &quot;ytdl-search&quot;
            para buscar información sobre la música y &quot;ytdl-core&quot; para
            descargar y guardar la música localmente en tu dispositivo.
          </p>
          <p className="mb-4">
            - Las descargas se almacenan en la carpeta &quot;/Music&quot; o
            &quot;/Musica&quot;, dependiendo del idioma del dispositivo, en
            formato .mp3.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ArticleAbout5;
