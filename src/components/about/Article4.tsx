import React from "react";
import Image from "next/image";

function ArticleAbout4() {
  return (
    <section className="w-full gap-4 m-auto lg:items-center max-lg:flex-col flex mb-28">
      <div className="flex max-md:flex-col max-md:p-8 max-md:h-max max-lg:w-11/12 items-center justify-between bg-black bg-opacity-20 rounded-e-xl w-7/12 shadow-lg shadow-black mt-5 h-max py-16 pl-20 pr-10 mr-10 relative overflow-hidden">
        <span className="absolute bg-green-700 bg-opacity-10 animate-pulse text-white text-xl w-10/12 h-5/6 max-md:-right-28 -bottom-44 right-20  blur-3xl rounded-full"></span>
        <div>
          <h2 className="text-3xl mb-10">¡Migración a TypeScript!</h2>
          <p className="mb-4 ">
            - Uno de los principales cambios {"(a nivel tecnivo)"} es que se ah
            refactorizado el código base de JavaScript a TypeScript para mejorar
            la calidad, la legibilidad y la escalabilidad del proyecto.
          </p>
          <p className="mb-4 ">
            - JavaScript es un lenguaje de programación ampliamente utilizado en
            el desarrollo web. Es un lenguaje de scripting interpretado que se
            ejecuta en el navegador del usuario y permite agregar interactividad
            a las páginas web
          </p>
          <p className="mb-4 ">
            - TypeScript es un lenguaje de programación que se basa en
            JavaScript y agrega características de tipado estático opcional.
            Proporciona un sistema de tipos más sólido y una sintaxis más
            estructurada que JavaScript, lo que ayuda a detectar y prevenir
            errores comunes durante la fase de desarrollo.
          </p>
          <p className="mb-4 ">
            - La migración a TypeScript se realizó con el objetivo de aprovechar
            las ventajas del tipado estático y mejorar la calidad, legibilidad y
            mantenibilidad del código en ElectronPlayer.
          </p>
        </div>
      </div>
      <div className="w-4/12 max-lg:w-10/12 flex flex-col justify-center items-center max-lg:m-auto text-center">
        <Image
          title="ElectronPlayer v2"
          className="w-3/12 relative -left-20 my-10 max-sm:w-3/6 max-lg:w-1/6 max-lg:m-auto max-lg:mt-10 h-auto rounded-md shadow-lg shadow-black hover:shadow-xl hover:shadow-black hover:-translate-y-1 transition-all duration-300"
          src="/javascript.svg"
          width={900}
          height={700}
          alt="javascript-logo"
        />
        <Image
          className="w-2/6 relative left-10 max-lg:w-2/6 max-sm:w-8/12 max-lg:mt-10 max-lg:m-auto my-10 h-auto rounded-md shadow-lg shadow-black hover:shadow-xl hover:shadow-black hover:-translate-y-1 transition-all duration-300"
          title="ElectronPlayer v1"
          src="/typescript.svg"
          width={900}
          height={700}
          alt="typescript-logo"
        />
      </div>
    </section>
  );
}

export default ArticleAbout4;
