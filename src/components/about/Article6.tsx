import React from "react";
import Image from "next/image";

function ArticleAbout6() {
  return (
    <section className="w-full gap-4 m-auto lg:items-center max-lg:flex-col flex mb-15">
      <div className="flex max-md:flex-col max-md:p-8 max-md:h-max max-lg:w-11/12 items-center justify-between bg-black bg-opacity-20 rounded-e-xl w-6/12 shadow-lg shadow-black mt-5 h-max py-16 pl-20 pr-10 mr-10 relative overflow-hidden">
        <span className="absolute bg-red-700 bg-opacity-10 animate-pulse text-white text-xl w-10/12 h-5/6 max-md:-right-28 -bottom-44 right-20  blur-3xl rounded-full"></span>
        <div>
          <h2 className="text-3xl mb-10">
            Servidor para escuchar musica Online
          </h2>
          <p className="mb-4 ">
            - Se ha creado un servidor para escuchar musica online, esta creado
            usando NodeJS, ExpressJS y Typescript. Las musicas se almacenan en
            una base de datos de MongoDB
          </p>
          <p className="mb-4 ">
            - ElectronPlayer utiliza el packete "ytdl-core" extraer la
            información relevante, como el título, la duración, las etiquetas y,
            lo más importante, los enlaces de descarga del audio.
          </p>
        </div>
      </div>
      <div className="w-5/12 max-lg:w-10/12 max-lg:m-auto text-center">
        <Image
          className="w-full my-10 max-sm:w-full max-lg:w-4/6 max-lg:m-auto max-lg:mt-10 h-auto rounded-md shadow-lg shadow-black hover:shadow-xl hover:shadow-black hover:-translate-y-1 transition-all duration-300"
          src="/ElectronPLayer1.png"
          width={900}
          height={700}
          alt="page-musics-online"
        />
      </div>
    </section>
  );
}

export default ArticleAbout6;
