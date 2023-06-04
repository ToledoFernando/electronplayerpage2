import React from "react";
import Image from "next/image";
import Link from "next/link";

function SobreCambios() {
  return (
    <article className="flex my-20 mt-24 max-md:flex-col max-sm:p-8 max-sm:pb-0 max-md:p-8 max-md:h-max max-lg:flex-col items-center justify-between bg-black bg-opacity-10 rounded-xl w-11/12 shadow-lg shadow-black m-auto relative overflow-hidden">
      <div className="w-7/12 z-50  max-xl:pb-6 px-10 max-sm:px-2 h-max max-md:w-full max-lg:w-10/12 m-auto">
        <div className="m-auto mb-5  max-2xl:text-base max-lg:text-sm">
          <h1 className="text-4xl mb-12 text-center max-lg:pt-10">
            Cambios en la aplicación
          </h1>
          <section>
            <dl>
              <div className="my-2 mb-5">
                <dt className="text-lg mb-1">¡Migración a TypeScript!</dt>
                <dd className="text-sm w-10/12">
                  He refactorizado el código base de JavaScript a TypeScript
                  para mejorar la calidad, la legibilidad y la escalabilidad del
                  proyecto.
                </dd>
              </div>

              <div className="my-2 mb-5">
                <dt className="text-lg mb-1">
                  ¡Adiós a Redux, hola a Zustand!
                </dt>
                <dd className="text-sm w-10/12">
                  He reemplazado el manejo del estado de Redux con Zustand, una
                  biblioteca de gestión de estado increíblemente potente y
                  sencilla.
                </dd>
              </div>

              <div className="my-2 mb-5">
                <dt className="text-lg mb-1">¡Servidor Online!</dt>
                <dd className="text-sm w-10/12">
                  Ahora, además de escuchar música local, he agregado un
                  servidor que te permite disfrutar de música en línea.
                </dd>
              </div>

              <div className="my-2 mb-5">
                <dt className="text-lg mb-1">¡Busqueda de musica mejorada!</dt>
                <dd className="text-sm w-10/12">
                  Ahora no es necesario la URL del video que quieras descargar,
                  solo con el nombre se buscara videos/musicas que coincidan con
                  lo que estas buscando.
                </dd>
              </div>

              <div className="my-2 mb-5">
                <dt className="text-lg mb-1">
                  ¡Un toque visualmente atractivo!
                </dt>
                <dd className="text-sm w-10/12">
                  Me he asegurado de retocar significativamente los estilos de
                  la aplicación. Aunque ya utilizaba SCSS anteriormente, he
                  realizado ajustes que hacen que la interfaz sea aún más
                  agradable y atractiva.
                </dd>
              </div>
            </dl>
          </section>
        </div>
        <div className="flex justify-around">
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
            href="/about"
          >
            Ver mas detalle
          </Link>
        </div>
      </div>
      <span className="absolute bg-red-500 text-white text-xl w-96 h-96 max-md:-right-28 -top-40 right-0  blur-3xl rounded-full"></span>
      <span className="absolute bg-slate-800 text-white text-xl w-5/12 h-96 max-md:-left-0 max-md:-bottom-4 max-md:bg-slate-600 -top-40 -left-20 blur-3xl rounded-full"></span>
      <span className="absolute bg-green-600 bg-opacity-10 text-white text-xl w-5/12 h-96 max-md:-left-0 max-md:-bottom-4 max-md:bg-green-600 -bottom-40 -left-20 blur-3xl rounded-full"></span>
      <div className=" relative w-6/12  max-lg:w-full max-sm:w-screen max-lg:-right-9  max-md:w-full  overflow-hidden lg:h-screen lg:w-8/12  max-lg:h-30">
        <Image
          className="max-lg:relative  lg:absolute lg:scale-150 max-sm:max-w-xl max-lg:top-5 max-md:-left-0 lg:-right-48 lg:bottom-10 rounded-3xl shadow-lg shadow-black hover:shadow-xl hover:shadow-black transition-all duration-300 hover:-translate-y-1"
          src="/ElectronPlayer9.png"
          alt="image"
          width={1000}
          height={800}
        />
      </div>
    </article>
  );
}

export default SobreCambios;
