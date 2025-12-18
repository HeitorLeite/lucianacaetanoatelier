import { useState } from "react";
import imagemFundo from "../assets/img/necessarie_mar.png";
import logo from "../assets/img/logo.png";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkWhatsApp = `https://wa.me/5512981124495?text=${encodeURIComponent(
    "Olá! Vim pelo site e gostaria de entrar em contato."
  )}`;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-end pb-20 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover z-0 scale-100"
        style={{
          backgroundPosition: "center 30%",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${imagemFundo})`,
        }}
      ></div>

      <nav className="absolute top-0 w-full flex justify-between md:justify-center items-center py-6 px-6 md:py-10 z-20">
        <div className="md:absolute md:left-8">
          <img
            src={logo}
            alt="Logo Luciana Caetano"
            className="w-24 md:w-32 h-auto opacity-90 hover:opacity-100 transition duration-300"
          />
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none p-2"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-12 text-sm font-light uppercase tracking-[0.2em]">
          <li>
            <a
              href="#quem-somos"
              className="cursor-pointer hover:opacity-60 transition"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#colecao"
              className="cursor-pointer hover:opacity-60 transition"
            >
              Coleção
            </a>
          </li>
          <li>
            <a
              href="#produtos"
              className="cursor-pointer hover:opacity-60 transition"
            >
              Produtos
            </a>
          </li>
          <li>
            <a
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:opacity-60 transition"
            >
              Contato
            </a>
          </li>
        </ul>

        {/* Menu Mobile (Overlay) */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md p-6 flex flex-col items-center gap-6 text-lg font-light uppercase tracking-widest md:hidden shadow-xl border-t border-white/10 transition-all">
            <a
              href="#quem-somos"
              onClick={toggleMenu}
              className="hover:text-[#2D8CBA] transition"
            >
              Sobre
            </a>
            <a
              href="#colecao"
              onClick={toggleMenu}
              className="hover:text-[#2D8CBA] transition"
            >
              Coleção
            </a>
            <a
              href="#produtos"
              onClick={toggleMenu}
              className="hover:text-[#2D8CBA] transition"
            >
              Produtos
            </a>
            <a
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
              className="hover:text-[#2D8CBA] transition"
            >
              Contato
            </a>
          </div>
        )}
      </nav>

      <div className="relative z-10 text-center px-4 max-w-4xl mt-auto md:mt-0">
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-medium tracking-tight mb-4 leading-tight">
          Conheça a nossa última coleção
        </h1>

        <a
          href="#colecao"
          className="flex justify-center mt-6 md:mt-8 animate-bounce cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-8 h-8 md:w-10 md:h-10 font-thin opacity-80"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
