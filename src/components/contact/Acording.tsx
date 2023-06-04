"use client";
import React, { useState } from "react";

function Acording({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="border-zinc-900 hover:border-zinc-700 cursor-pointer border-2 rounded-md p-4 my-8"
    >
      <dl>
        <dt className={isOpen ? "text-zinc-300 pb-4" : "text-zinc-500"}>
          {question}
        </dt>
        <dd
          className={`border-0 border-dashed border-t-2 border-slate-800 pt-4 ${
            isOpen
              ? "h-max overflow-hidden visible text-slate-300"
              : "h-0 hidden overflow-hidden"
          }`}
        >
          {answer}
        </dd>
        {question === "¿Es de código abierto?" && (
          <dd
            className={` border-slate-800 pt-4 ${
              isOpen
                ? "h-max overflow-hidden visible text-slate-300"
                : "h-0 hidden overflow-hidden"
            }`}
          >
            <a href="#" className="underline">
              Ver código
            </a>
          </dd>
        )}
      </dl>
    </div>
  );
}

export default Acording;
