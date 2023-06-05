"use client";
import React, { useEffect, useState } from "react";
import { getFile } from "./config/FirebaseConfig";
import Image from "next/image";

function ArticleDownload1() {
  const [urlFile, setURLFile] = useState<string>("");

  useEffect(() => {
    getFile().then((url) => {
      setURLFile(url);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", process.env.NEXT_PUBLIC_NAME_APP as string);
      link.click();
    });
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center pt-24 pb-4 w-10/12 m-auto">
        ¡Gracias por Descargar!
      </h1>
      <div className="text-center text-lg text-slate-500 flex w-10/12 m-auto justify-center gap-1 items-center">
        <p>
          La descarga iniciara en unos momentos. Si no inicia de click{" "}
          <a
            href={urlFile}
            download={process.env.NEXT_PUBLIC_NAME_APP}
            className="underline"
          >
            Aqui
          </a>
        </p>
      </div>
      <article className="flex my-20 mt-16 max-md:flex-col max-sm:p-8 max-sm:pb-0  max-md:h-max max-lg:flex-col items-center justify-between bg-black bg-opacity-10 rounded-xl w-11/12 shadow-lg shadow-black m-auto relative overflow-hidden">
        <span className="absolute bg-red-500 text-white text-xl w-96 h-96 max-md:-right-28 -top-72 left-40  blur-3xl rounded-full"></span>
        <span className="absolute bg-slate-800 text-white text-xl w-5/12 h-96 max-md:-left-0 max-md:-bottom-4 max-md:bg-slate-600 -bottom-20 -right-20 blur-3xl rounded-full"></span>
        <span className="absolute bg-green-600 max-sm:bg-opacity-70 bg-opacity-10 text-white text-xl w-5/12 h-96 max-md:-left-0 max-md:-bottom-4 max-md:bg-green-600 -bottom-40 -left-20 blur-3xl rounded-full"></span>
        <div className=" relative w-full -bottom-3 max-lg:flex max-lg:justify-center justify-center flex max-lg:w-full max-sm:w-screen  max-md:w-full  overflow-hidden lg:h-96  max-lg:h-30">
          <Image
            className="max-lg:relative max-lg:scale-100 max-lg:w-5/6 max-sm:top-2 top-16 lg:absolute lg:scale-120 max-sm:max-w-xl max-lg:top-20 max-md:-left-0 lg:bottom-10 rounded-3xl shadow-lg shadow-black hover:shadow-xl hover:shadow-black transition-all duration-300 hover:-translate-y-1"
            src="/ElectronPlayer9.png"
            alt="image"
            width={900}
            height={700}
          />
        </div>
      </article>
    </div>
  );
}

export default ArticleDownload1;
