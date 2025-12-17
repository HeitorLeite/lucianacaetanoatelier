import React from "react";

const Hero = () => {
  return (
    <section className="relative h-[600px] w-full flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Imagem de Fundo com Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/caminho-da-sua-foto.jpg')`,
        }}
      >
        {/* O linear-gradient acima cria o efeito escurecido para o texto aparecer */}
      </div>

      {/* Navegação Superior */}
      <nav className="absolute top-0 w-full flex justify-between items-center px-8 py-6 z-20 max-w-7xl">
        <div className="text-2xl font-bold">
          {/* Espaço para o Logo/Ícone */}
          <div className="w-10 h-10 border-2 border-white flex items-center justify-center rounded-sm">
            <span className="text-xs">LOGO</span>
          </div>
        </div>

        <ul className="flex gap-8 text-sm font-medium uppercase tracking-widest">
          <li className="cursor-pointer hover:opacity-70 transition">Sobre</li>
          <li className="cursor-pointer hover:opacity-70 transition">
            Coleção
          </li>
          <li className="cursor-pointer hover:opacity-70 transition">
            Contato
          </li>
        </ul>
      </nav>

      {/* Conteúdo Central */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8">
          Conheça a nossa última coleção
        </h1>

        {/* Seta para baixo */}
        <div className="flex justify-center animate-bounce mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
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
