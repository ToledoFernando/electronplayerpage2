import React from "react";
import Image from "next/image";

function Article2() {
  return (
    <div className="grid grid-flow-row grid-cols-2 w-10/12 m-auto max-lg:grid-cols-1 max-lg:justify-center">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/electronplayer-84128.appspot.com/o/ElectronPlayer2.png?alt=media&token=22b11665-36eb-4ce5-8e74-a17692bdd9de&_gl=1*evff1k*_ga*MTk1NDIzNDg2NS4xNjg2NDU4NjM0*_ga_CW55HF8NVT*MTY4NjQ1ODYzMy4xLjEuMTY4NjQ1OTMzNC4wLjAuMA.."
        width={900}
        height={700}
        alt="interfaz-busqueda"
        className="w-11/12 m-auto max-lg:w-full fromBtoT max-lg:mb-16 h-auto hover:-translate-y-1 rounded-lg shadow-lg shadow-black hover:shadow-xl hover:shadow-black transition-all duration-300 ease-in-out"
      />
      <div className="w-11/12 m-auto">
        <h1 className="text-3xl max-lg:text-4xl text-center mb-10">
          Nueva interfaz de busqueda
        </h1>
        <p>
          Aunque ElectronPlayer ya utilizaba SASS (Syntactically Awesome Style
          Sheets), en esta nueva versión hemos cambiado la sintaxis a SCSS para
          lograr una mayor legibilidad. Además, hemos realizado cambios
          significativos en los estilos, lo que ha resultado en una interfaz
          completamente renovada que es más agradable y amigable para el
          usuario. Ahora podrás disfrutar de una experiencia visual mejorada y
          una interfaz más intuitiva.
        </p>
      </div>
    </div>
  );
}

export default Article2;
