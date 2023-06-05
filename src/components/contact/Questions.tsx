"use client";
import React, { useState } from "react";
import Acording from "./Acording";
import questionAndAnswers from "./Questions.json";
import Image from "next/image";
import axios from "axios";
import { IFormData, IQuestions, initialFormData } from "./FormDataType";
import Notification from "./Notification";

function Questions() {
  const [formData, setFormData] = useState<IFormData>(initialFormData);
  const [error, setError] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(false);
  const [notify, setNotify] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      );
      if (validEmailRegex.test(e.target.value)) {
        setError(false);
      } else {
        setError(true);
      }
    }
  };

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      setLoad(true);
      const { data } = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "email/send-soport",
        formData,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
          },
        }
      );
      setNotify(true);
      setFormData(initialFormData);
      setLoad(false);
    } catch (error: unknown | any) {
      console.log(error.message);
    }
  };

  console.log(process.env.NEXT_PUBLIC_API_URL);

  return (
    <section>
      <div className="flex items-center max-lg:flex-col">
        <div className="bg-black bg-opacity-25 w-6/12 max-lg:w-10/12 m-auto mt-20 rounded-xl p-10 max-md:w-11/12">
          <h2 className="text-4xl text-center">Preguntas Frecuentes</h2>
          {questionAndAnswers.map((Q_A: IQuestions, index: number) => (
            <Acording question={Q_A.question} key={index} answer={Q_A.answer} />
          ))}
        </div>
        <div className="w-5/12 m-auto max-lg:w-10/12">
          <form
            onSubmit={handleSubmit}
            className="bg-black relative bg-opacity-25 w-full m-auto mt-20 rounded-xl flex flex-col gap-9 p-10 max-sm:w-full max-md:w-11/12"
          >
            {load && (
              <span className="absolute top-0 right-0 text-red-500 text-sm w-full flex justify-center items-center h-full z-50 bg-black bg-opacity-50 rounded-xl">
                <Image
                  src="/loadAnim.svg"
                  width={100}
                  height={100}
                  alt="load-Animation"
                />
              </span>
            )}
            <div>
              <h3 className="text-center text-2xl">Tiene alguna duda?</h3>
              <p className="text-slate-500 text-center">
                Envieme un email y le respondere lo antes posible
              </p>
            </div>
            <div className="flex justify-between max-md:flex-col max-md:gap-4">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Nombre"
                className="bg-zinc-900 py-2 px-5 w-5/12 max-md:w-full rounded-sm outline-none"
              />
              <input
                type="text"
                name="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="Email"
                className="bg-zinc-900 py-2 px-5 w-6/12 max-md:w-full rounded-sm outline-none"
              />
            </div>
            <div className="flex flex-col gap-6 h-72 justify-between">
              <textarea
                name="message"
                onChange={handleChangeTextArea}
                value={formData.message}
                className="h-5/6 bg-zinc-900 py-2 px-5 w-full rounded-sm outline-none resize-none"
                placeholder="Mensaje"
              ></textarea>
              <button
                className="bg-blue-800 py-2 px-5 rounded-sm disabled:bg-gray-500 disabled:cursor-not-allowed"
                disabled={
                  formData.name.length < 3 ||
                  formData.email.length < 3 ||
                  formData.message.length < 3 ||
                  error
                }
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
      {notify && <Notification set={setNotify} />}
    </section>
  );
}

export default Questions;
