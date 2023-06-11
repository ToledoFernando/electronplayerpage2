import React from "react";
import Image from "next/image";

function Article3() {
  return (
    <article className="flex w-10/12 gap-4 m-auto my-20 mt-30 max-lg:flex-col-reverse max-lg:justify-center">
      <div className="w-1/2 max-lg:w-full m-auto">
        <h1 className="text-3xl max-lg:text-4xl text-center mb-10">
          Escucha musica sin conexion
        </h1>
        <p>
          ElectronPlayer lee la carpeta &quot;Music&quot; o &quot;Música&quot;
          (dependiendo del idioma de tu sistema) y muestra una lista de todos
          los archivos en formato &quot;.mp3&quot;. Además, también muestra una
          lista de las carpetas que se encuentren en el mismo directorio,
          permitiéndote navegar entre ellas.
        </p>
      </div>
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/electronplayer-84128.appspot.com/o/ElectronPlayer8.png?alt=media&token=93e82b26-8fb7-4727-ad6c-7f80085bb59e&_gl=1*1axejql*_ga*MTk1NDIzNDg2NS4xNjg2NDU4NjM0*_ga_CW55HF8NVT*MTY4NjQ1ODYzMy4xLjEuMTY4NjQ1OTM4MC4wLjAuMA.."
        width={900}
        height={700}
        alt="Home - local"
        className="w-1/2 m-auto max-lg:w-full fromBtoT max-lg:mb-16 h-auto hover:-translate-y-1 rounded-lg shadow-lg shadow-black hover:shadow-xl hover:shadow-black transition-all duration-300 ease-in-out"
      />
    </article>
  );
}

export default Article3;
