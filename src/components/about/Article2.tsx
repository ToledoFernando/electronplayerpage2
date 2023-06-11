import React from "react";
import Image from "next/image";

function ArticleAbout2() {
  return (
    <section className="w-full gap-4 m-auto lg:items-center max-lg:flex-col flex mb-15">
      <div className="flex max-md:flex-col max-md:p-8 max-md:h-max max-lg:w-11/12 items-center justify-between bg-black bg-opacity-20 rounded-e-xl w-7/12 shadow-lg shadow-black mt-5 h-max py-16 pl-20 pr-10 mr-10 relative overflow-hidden">
        <span className="absolute bg-red-700 bg-opacity-10 animate-pulse text-white text-xl w-10/12 h-5/6 max-md:-right-28 -bottom-44 right-20  blur-3xl rounded-full"></span>
        <div>
          <h2 className="text-3xl mb-10">Cambio completo en la Interfaz</h2>
          <p className="mb-4 ">
            - Aunque ElectronPlayer v1 ya utilizaba SASS (Syntactically Awesome
            Style Sheets) internamente, en ElectronPlayer v2 se ha cambiado la
            sintaxis a SCSS para un mejor manejo y legibilidad.
          </p>
          <p className="mb-4 ">
            - SASS es un lenguaje de hojas de estilo que se utiliza para
            escribir código CSS de manera más eficiente y estructurada. Ofrece
            características adicionales a las que se encuentran en CSS
            tradicional, como variables, anidamiento de reglas, mixins (bloques
            de código reutilizables) y funciones.
          </p>
          <p className="mb-4 ">
            - SASS originalmente utilizaba una sintaxis basada en indentación,
            en la que se usaban espacios en blanco para estructurar y anidar las
            reglas CSS. Sin embargo, esta sintaxis a veces generaba confusiones
            y dificultades de mantenimiento para los desarrolladores
            acostumbrados a la sintaxis tradicional de llaves ({}) en CSS.
          </p>
          <p className="mb-4 ">
            - Para abordar estas preocupaciones, se introdujo SCSS, que utiliza
            una sintaxis más similar a la de CSS tradicional. En SCSS, se usan
            llaves ({}) y puntos y comas (;) para estructurar y separar las
            reglas CSS, lo que facilita la transición para los desarrolladores
            CSS.
          </p>
        </div>
      </div>
      <div className="w-4/12 max-lg:w-10/12 max-lg:m-auto text-center">
        <Image
          className="w-5/6 max-lg:w-4/6 max-sm:w-full max-lg:mt-10 max-lg:m-auto my-10 h-auto rounded-md shadow-lg shadow-black hover:shadow-xl hover:shadow-black hover:-translate-y-1 transition-all duration-300"
          title="ElectronPlayer v1"
          src="https://firebasestorage.googleapis.com/v0/b/electronplayer-84128.appspot.com/o/vAnterior.webp?alt=media&token=dcf412f4-5158-45e5-982d-f050e0e7d336&_gl=1*1qx1xsf*_ga*MTk1NDIzNDg2NS4xNjg2NDU4NjM0*_ga_CW55HF8NVT*MTY4NjQ1ODYzMy4xLjEuMTY4NjQ1OTY2NS4wLjAuMA.."
          width={900}
          height={700}
          alt="vercion-anterior"
        />
        <Image
          title="ElectronPlayer v2"
          className="w-full my-10 max-sm:w-full max-lg:w-4/6 max-lg:m-auto max-lg:mt-10 h-auto rounded-md shadow-lg shadow-black hover:shadow-xl hover:shadow-black hover:-translate-y-1 transition-all duration-300"
          src="https://firebasestorage.googleapis.com/v0/b/electronplayer-84128.appspot.com/o/ElectronPlayer8.png?alt=media&token=93e82b26-8fb7-4727-ad6c-7f80085bb59e&_gl=1*1axejql*_ga*MTk1NDIzNDg2NS4xNjg2NDU4NjM0*_ga_CW55HF8NVT*MTY4NjQ1ODYzMy4xLjEuMTY4NjQ1OTM4MC4wLjAuMA.."
          width={900}
          height={700}
          alt="vercion-nueva"
        />
      </div>
    </section>
  );
}

export default ArticleAbout2;
