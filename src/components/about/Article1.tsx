import React from "react";
import Image from "next/image";

function ArticleAbout() {
  return (
    <article>
      <div className="flex max-md:flex-col max-md:p-8 max-md:h-max max-lg:flex-col items-center justify-between bg-black bg-opacity-10 rounded-xl w-11/12 shadow-lg shadow-black m-auto mt-5 py-10 relative overflow-hidden">
        <div className="w-11/12 z-50 max-xl:pb-6 px-10 max-sm:px-2 h-max max-md:w-full max-lg:w-10/12 m-auto">
          <div className="m-auto mb-5 pt-4 max-2xl:text-base max-lg:text-sm">
            <h1 className="text-3xl mb-2 text-center">ElectronPlayer v2</h1>
            <p className="text-base max-xl:text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              molestiae distinctio voluptates laudantium quis ullam obcaecati
              earum rem sapiente? Veniam unde sunt animi molestias similique
              ipsum, optio tenetur. Soluta doloremque maiores a error est
              repellat, tenetur neque similique tempora laboriosam corrupti quae
              blanditiis iste, accusantium itaque sint veniam sit quis? Odit,
              illo. Reprehenderit cupiditate veniam necessitatibus molestiae
              repellendus eum, laborum alias. Consectetur nisi iste corrupti,
              repellat dicta explicabo illum blanditiis beatae labore laborum
              quis corporis ullam debitis earum. Delectus distinctio praesentium
              sint rerum tenetur, ipsa quo repudiandae nulla at cupiditate
              minima illum soluta incidunt facere fuga excepturi ut libero
              aspernatur.
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
