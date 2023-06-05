import React from "react";
import Image from "next/image";

function ArticleAbout3() {
  return (
    <section className="w-full gap-4 m-auto lg:items-center justify-center max-lg:flex-col-reverse flex my-15 mb-15">
      <div className="w-5/12 pt-0 max-sm:flex-col sm:w-full lg:w-5/12 flex flex-col items-center justify-center max-lg:flex max-lg:flex-row max-lg:pt-0 max-lg:w-10/12 max-lg:m-auto text-center">
        <Image
          className="w-2/4 p-0 max-lg:w-1/6 max-sm:w-3/6 max-lg:mt-10 max-lg:m-auto my-10 h-auto rounded-md  hover:-translate-y-1 transition-all duration-300"
          title="Redux logo"
          src="/redux.svg"
          width={900}
          height={700}
          alt="redux-logo"
        />
        <Image
          title="Zustand logo"
          className="w-5/6 my-10 max-sm:w-full max-lg:w-2/6 max-lg:m-auto max-lg:mt-10 h-auto rounded-md  hover:-translate-y-1 transition-all duration-300"
          src="/zustandLogo.png"
          width={900}
          height={700}
          alt="zustand-logo"
        />
      </div>
      <div className="ml-10 flex py-10 max-md:flex-col max-md:p-8 max-md:h-max max-lg:w-11/12 items-center bg-black bg-opacity-20 rounded-s-3xl w-9/12 shadow-lg shadow-black mt-5 h-max pl-20 pr-10 relative overflow-hidden">
        <span className="absolute bg-blue-700 bg-opacity-10 animate-pulse text-white text-xl w-10/12 h-5/6 max-md:-right-28 -bottom-44 right-20  blur-3xl rounded-full"></span>
        <div>
          <h2 className="text-3xl mb-10">¡Adiós a Redux, hola a Zustand!</h2>
          <p className="mb-4 ">
            - Redux es una biblioteca de gestión del estado que ayuda a mantener
            una administración ordenada y predecible del estado en aplicaciones
            JavaScript, lo que facilita el desarrollo, la depuración y el
            mantenimiento de aplicaciones complejas.
          </p>
          <p className="mb-4 ">
            - Aunque Redux es una biblioteca muy útil y popular para gestionar
            el estado en aplicaciones JavaScript, aprender y configurar Redux
            puede requerir una curva de aprendizaje inicial, especialmente si
            eres nuevo en el desarrollo de aplicaciones basadas en Redux.
            Configurar los &quot;reducers&quot;, acciones, el &quot;store&quot;
            y comprender cómo se comunican entre sí puede ser complicado al
            principio..
          </p>
          <p className="mb-4 ">
            - En la nueva vercion de ElectronPlayer &quot;v2&quot;, se cambio
            Redux por zustand,
          </p>
          <p className="mb-4 ">
            - Zustand es una biblioteca de gestión del estado para aplicaciones
            JavaScript, especialmente diseñada para el desarrollo de
            aplicaciones React. Al igual que Redux, Zustand sigue el patrón de
            diseño Flux y proporciona una forma predecible de gestionar el
            estado de una aplicación
          </p>
          <p className="mb-4 ">
            - La principal ventaja de Zustand sobre Redux es su enfoque
            minimalista y su facilidad de uso. A diferencia de Redux, que puede
            requerir una configuración y un flujo de trabajo más complejo,
            Zustand ofrece una API simple y concisa que facilita la
            implementación y el mantenimiento del estado en una aplicación
            React.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ArticleAbout3;
