import React, { Dispatch, SetStateAction } from "react";

function Notification({ set }: { set: Dispatch<SetStateAction<boolean>> }) {
  return (
    <div className=" absolute top-0 left-0 w-full h-full flex justify-end items-end">
      <div className="relative bottom-10 flex bg-gradient-to-tr to-green-500 from-green-800 w-80 p-5 rounded-s-lg gap-4">
        <button onClick={() => set(false)}>X</button>
        <h1 className="">Correo enviado con exito</h1>
      </div>
    </div>
  );
}

export default Notification;
