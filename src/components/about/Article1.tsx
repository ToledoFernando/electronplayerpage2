import React from "react";

function ArticleAbout() {
  return (
    <article>
      <div className="flex max-md:flex-col max-md:p-8 max-md:h-max max-lg:flex-col items-center justify-between bg-black bg-opacity-10 rounded-xl w-11/12 shadow-lg shadow-black m-auto mt-5 py-10 relative overflow-hidden">
        <div className="w-11/12 z-50 max-xl:pb-6 px-10 max-sm:px-2 h-max max-md:w-full max-lg:w-10/12 m-auto">
          <div className="m-auto mb-5 pt-4 max-2xl:text-base max-lg:text-sm">
            <h1 className="text-3xl mb-2 text-center">ElectronPlayer v2</h1>
            <p className="text-base max-xl:text-sm ">
              ElectronPlayer es un reproductor de música disponible en sistemas
              operativos Windows. ElectronPlayer ofrece la posibilidad de
              escuchar música sin conexión y de manera local. Lee el directorio
              &quot;Music&quot; o &quot;Música&quot; (dependiendo del idioma de
              su sistema) y muestra la lista de música en formato
              &quot;.mp3&quot;. También muestra una lista de carpetas donde se
              podrá mover entre ellas y escuchar las músicas de dichas carpetas.
              ElectronPlayer utiliza una estructura de datos conocida como
              &quot;lista doblemente enlazada&quot; o &quot;doubly linked
              list&quot; para moverse entre las músicas, lo que le permite
              seleccionar una música y poder saber cuál es la
              &quot;siguiente&quot; o &quot;anterior&quot;. Una vez seleccionada
              la música, ElectronPlayer (en el proceso principal) lee el archivo
              en formato &quot;buffer&quot; y lo envía al proceso de renderizado
              (lo que el usuario ve) para luego pasarlo a un formato que sea
              capaz de interactuar como audio en el proceso de renderizado, en
              este caso &quot;blob&quot;.
            </p>
          </div>
          <a
            target="_blank"
            href="#"
            className="bg-zinc-950 border-gray-200 border-2 py-2 px-4 hover:bg-zinc-100 hover:text-zinc-900 transition-all duration-300 text-sm rounded-sm"
            rel="noopener noreferrer"
          >
            Ver en GitHub
          </a>
        </div>
        <span className="absolute bg-red-500 text-white text-xl w-96 h-96 max-md:-right-28 -top-40 right-0  blur-3xl rounded-full"></span>
        <span className="absolute bg-slate-800 text-white text-xl w-5/12 h-96 max-md:-left-0 max-md:-bottom-4 max-md:bg-slate-600 -bottom-40 -left-20 blur-3xl rounded-full"></span>
        <span className="absolute bg-green-800 bg-opacity-50 text-white text-xl w-5/12 h-96 max-md:-left-0 max-md:-bottom-4 max-md:bg-green-600 -top-60 left-52 blur-3xl rounded-full"></span>
      </div>
    </article>
  );
}

export default ArticleAbout;
