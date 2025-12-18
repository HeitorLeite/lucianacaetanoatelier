import React from "react";
import imagemFundo from "../assets/img/necessarie_mar.png";
import logo from "../assets/img/logo.png";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-end pb-20 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover z-0 scale-100"
        style={{
          backgroundPosition: "center 24%",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${imagemFundo})`,
        }}
      ></div>

      <nav className="absolute top-0 w-full flex justify-center items-center py-10 z-20">
        <div className="absolute left-10 top-2 hidden md:block">
          <img
            src={logo}
            alt="Logo Luciana Caetano Ateliê"
            className="w-32 h-auto opacity-90 hover:opacity-100 transition duration-300"
          />
        </div>

        <ul className="flex gap-30 text-sm font-light uppercase tracking-[0.2em]">
          <li className="cursor-pointer hover:opacity-60 transition">Sobre</li>
          <li className="cursor-pointer hover:opacity-60 transition">
            Coleção
          </li>
          <li className="cursor-pointer hover:opacity-60 transition">
            Contato
          </li>
        </ul>
      </nav>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight mb-4 leading-tight">
          Conheça a nossa última coleção
        </h1>

        <div className="flex justify-center mt-8 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-10 h-10 font-thin opacity-80"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
