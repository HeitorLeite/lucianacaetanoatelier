import React from "react";
import img1 from "../assets/img/necessarie_1.png";
import img2 from "../assets/img/necessarie_2.png";
import img3 from "../assets/img/necessarie_3.png";
import img4 from "../assets/img/necessarie_4.png";
import img5 from "../assets/img/necessarie_5.png";
import img6 from "../assets/img/necessarie_6.png";

const Colecao = () => {
  const produtos = [img1, img2, img3, img4, img5, img6];

  const mensagem =
    "Olá! Gostei da coleção de verão e gostaria de encomendar uma necessarie.";
  const linkWhatsApp = `https://wa.me/5512981124495?text=${encodeURIComponent(
    mensagem
  )}`;

  return (
    <section
      id="colecao"
      className="w-full py-12 md:py-20 px-4 bg-white text-black text-center"
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12">
        Nossa coleção de verão
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
        {produtos.map((imagem, index) => (
          <div
            key={index}
            className="w-full aspect-square bg-gray-100 rounded-4xl flex items-center justify-center hover:shadow-lg transition duration-300 cursor-pointer overflow-hidden"
          >
            <img
              src={imagem}
              alt={`Necessaire ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>

      <div className="space-y-6 md:space-y-8">
        <p className="text-base md:text-xl font-medium px-4">
          Entre em contato para encomendar a sua necessarie
        </p>

        <a
          href={linkWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#2D8CBA] text-white py-3 px-8 md:px-10 rounded-full font-bold uppercase text-xs md:text-sm tracking-widest hover:opacity-90 transition shadow-md"
        >
          Encomende a sua
        </a>
      </div>
    </section>
  );
};

export default Colecao;
