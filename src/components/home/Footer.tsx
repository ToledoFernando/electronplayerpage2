import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-black mt-10">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="#">
            <span className="sr-only">LinkedIn</span>
            <Image
              src="/linkedin.svg"
              width={32}
              height={32}
              alt="linkedin-icon"
              className="hover:text-red-300"
            />
          </a>
          <a href="#">
            <span className="sr-only">GitHub</span>
            <Image
              src="/github.svg"
              width={32}
              height={32}
              alt="linkedin-icon"
              className="hover:text-red-300"
            />
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-base text-gray-400">
            © 2023 electronplayer.online | ftoledo.online.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
