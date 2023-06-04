import React from "react";
import Image from "next/image";
import Link from "next/link";

function Article1() {
  return (
    <article>
      <div className="flex max-md:flex-col max-md:p-8 max-md:h-max max-lg:flex-col items-center justify-between bg-black bg-opacity-10 rounded-xl w-11/12 shadow-lg shadow-black m-auto mt-5 relative overflow-hidden">
        <div className="w-7/12 z-50 max-xl:pb-6 px-10 max-sm:px-2 h-max max-md:w-full max-lg:w-10/12 m-auto">
          <div className="m-auto mb-5 pt-4 max-2xl:text-base max-lg:text-sm">
            <h1 className="text-3xl mb-2 text-center">ElectronPlayer v2</h1>
            <p className="text-base max-xl:text-sm">
              ¡La nueva versión ya está disponible! Hemos realizado cambios
              significativos en nuestra aplicación. Se ha modificado toda la
              interfaz. Hemos agregado nuevas funcionalidades para escuchar
              música en línea. Además, hemos mejorado el buscador para mostrar
              de 12 a 20 resultados por nombre de música. Puedes escucharla en
              streaming o descargarla para disfrutarla sin conexión. Si deseas
              obtener más detalles sobre todas las mejoras, puedes encontrarlos{" "}
              <Link href="#" className="underline">
                aquí
              </Link>{" "}
              o ver el código fuente haciendo clic en el botón de abajo.
            </p>
          </div>
          <div className="pt-4 flex gap-8">
            <a
              target="_blank"
              href="#"
              className="bg-zinc-950 border-gray-200 border-2 py-2 px-4 hover:bg-zinc-100 hover:text-zinc-900 transition-all duration-300 text-sm rounded-sm"
              rel="noopener noreferrer"
            >
              Ver en GitHub
            </a>
            <Link
              className="bg-zinc-950 border-gray-200 border-2 py-2 px-4 hover:bg-zinc-100 hover:text-zinc-900 transition-all duration-300 text-sm rounded-sm"
              href="/download"
            >
              Descargar
            </Link>
          </div>
        </div>
        <span className="absolute bg-red-500 text-white text-xl w-96 h-96 max-md:-right-28 -top-40 right-0  blur-3xl rounded-full"></span>
        <span className="absolute bg-slate-800 text-white text-xl w-5/12 h-96 max-md:-left-0 max-md:-bottom-4 max-md:bg-slate-600 -bottom-40 -left-20 blur-3xl rounded-full"></span>
        <div className=" relative w-6/12 max-lg:w-full max-sm:w-screen max-lg:-right-9  max-md:w-full -right-8 -bottom-8 overflow-hidden h-30">
          <Image
            className="relative fromBtoT max-sm:max-w-xl top-9 max-lg:top-5 max-md:-left-0 left-8 rounded-3xl shadow-lg shadow-black hover:shadow-xl hover:shadow-black transition-all duration-300 hover:-translate-y-1"
            src="/ElectronPlayer1.png"
            alt="image"
            width={900}
            height={700}
          />
        </div>
      </div>
    </article>
  );
}

export default Article1;
