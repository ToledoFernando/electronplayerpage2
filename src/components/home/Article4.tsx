import React from "react";
import Image from "next/image";

function Article4() {
  return (
    <div className="grid grid-flow-row grid-cols-2 w-10/12 m-auto my-24 max-lg:grid-cols-1 max-lg:justify-center">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/electronplayer-84128.appspot.com/o/ElectronPlayer6.png?alt=media&token=3afd25bd-21df-45de-9b91-9ee6fe7d9c08&_gl=1*t2cwme*_ga*MTk1NDIzNDg2NS4xNjg2NDU4NjM0*_ga_CW55HF8NVT*MTY4NjQ1ODYzMy4xLjEuMTY4NjQ1OTQzMS4wLjAuMA.."
        width={900}
        height={700}
        alt="Download - Page"
        className="w-11/12 m-auto max-lg:w-full fromBtoT max-lg:mb-16 h-auto hover:-translate-y-1 rounded-lg shadow-lg shadow-black hover:shadow-xl hover:shadow-black transition-all duration-300 ease-in-out"
      />
      <div className="w-11/12 m-auto">
        <h1 className="text-3xl max-lg:text-4xl text-center mb-10">
          Descarga tu musica preferida
        </h1>
        <p>
          Puedes buscar y descargar tu música favorita. Al ingresar un nombre,
          ElectronPlayer te mostrará entre 12 y 20 canciones relacionadas con el
          nombre que estás buscando. Tendrás la opción de escuchar o descargar
          las canciones que prefieras.
        </p>
      </div>
    </div>
  );
}

export default Article4;
