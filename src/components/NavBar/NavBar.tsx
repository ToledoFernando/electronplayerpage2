"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Button from "../home/Button";

function NavBar() {
  const [viewMenu, setMenuView] = useState<boolean>(false);

  return (
    <header>
      <nav className="flex justify-between items-center py-4 px-8 max-sm:flex-col">
        <div className="absolute right-4 top-3 sm:hidden">
          <Button state={viewMenu} setState={setMenuView} />
        </div>
        <div className="flex items-center max-sm:w-full gap-3">
          <Image
            src="/icon.png"
            alt="electronplayer-logo"
            width={35}
            height={35}
          />
          <h1 className="text-3xl">
            <Link href="/">ElectronPlayer</Link>
          </h1>
        </div>
        <div className="flex max-sm:w-full">
          <div
            className={` max-sm:w-full ${
              viewMenu ? "max-sm:visible" : "max-sm:hidden"
            }`}
          >
            <ul className="flex gap-3 relative max-sm:flex-col max-sm:pt-3 max-sm:w-full sm:flex text-slate-300">
              <li className="hover:text-white max-sm:my-1">
                <Link href="/">Inicio</Link>
              </li>
              <li className="hover:text-white max-sm:my-1">
                <Link href="/about">Sobre</Link>
              </li>
              <li className="hover:text-white max-sm:my-1">
                <Link href="/download">Descargar</Link>
              </li>
              <li className="hover:text-white max-sm:my-1">
                <Link href="/contact">Soporte</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
