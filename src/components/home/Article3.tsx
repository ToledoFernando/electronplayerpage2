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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis a
          id dolore accusantium inventore deserunt rerum consectetur minus eum
          quam quaerat, eveniet, assumenda tempora blanditiis iusto. Reiciendis
          suscipit alias nemo rerum. Optio, iste suscipit! Rem similique
          doloribus nostrum, voluptate veritatis obcaecati optio aperiam fuga
          ratione consequuntur eligendi. Laudantium, distinctio unde.
        </p>
      </div>
      <Image
        src="/ElectronPlayer8.png"
        width={900}
        height={700}
        alt="interfaz-busqueda"
        className="w-1/2 m-auto max-lg:w-full fromBtoT max-lg:mb-16 h-auto hover:-translate-y-1 rounded-lg shadow-lg shadow-black hover:shadow-xl hover:shadow-black transition-all duration-300 ease-in-out"
      />
    </article>
  );
}

export default Article3;
