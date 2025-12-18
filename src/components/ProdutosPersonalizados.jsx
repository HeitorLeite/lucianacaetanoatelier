import React, { useState } from "react";

const ProdutosPersonalizados = () => {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [imagemAtualIndex, setImagemAtualIndex] = useState(0);

  const getImageUrl = (id) => {
    return new URL(`../assets/img/produto_${id}.jpg`, import.meta.url).href;
  };

  const getExtraImageUrl = (nomeArquivo) => {
    return new URL(`../assets/img/${nomeArquivo}`, import.meta.url).href;
  };

  const listaProdutos = [
    {
      id: 1,
      nome: "Estojo e Bolsa higienica Stitch",
      desc: "",
    },
    {
      id: 2,
      nome: "Estoje e Garrafinha personagens",
      desc: "Perfeita para viagens curtas de fim de semana.",
    },
    {
      id: 3,
      nome: "Estojo e Bolsa higienica astronauta",
      desc: "Conjunto completo com 3 tamanhos diferentes.",
    },
    {
      id: 4,
      nome: "Bolsas higienicas Stitch",
      desc: "Organize seus pincéis e proteja as cerdas.",
    },
    {
      id: 5,
      nome: "Mochila e Estojo Batman",
      desc: "Estilo e praticidade para passeios à tarde.",
    },
    {
      id: 6,
      nome: "Bolsa higienica e Garrafinha homem-aranha",
      desc: "Espaço de sobra para toalha e protetor solar.",
    },
    {
      id: 7,
      nome: "Estojo sorvete",
      desc: "Personalizado com o nome para a volta às aulas.",
      imagensExtras: ["produto_7_foto_2.jpg"],
    },
    {
      id: 8,
      nome: "Bolsa higienica sorvete",
      desc: "Térmica, mantém seus produtos na temperatura ideal.",
    },
    {
      id: 9,
      nome: "Lancheira dinosssauro",
      desc: "Pequeno e prático para o dia a dia.",
    },
    {
      id: 10,
      nome: "Bolsa camuflada",
      desc: "Formato quadrado que cabe muita coisa.",
    },
    {
      id: 11,
      nome: "Bolsinha e Bolsa higienica Stitch",
      desc: "Separe suas roupas e otimize espaço.",
    },
    {
      id: 12,
      nome: "Estojo frutas",
      desc: "Proteção acolchoada com estampa exclusiva.",
      imagensExtras: ["produto_12_foto_2.jpg"],
    },
    {
      id: 13,
      nome: "Toalinha corinthians",
      desc: "Para levar escova e pasta de dente no trabalho.",
    },
    {
      id: 14,
      nome: "Estojos Stitch",
      desc: "Substitua sacolas plásticas com estilo.",
    },
    {
      id: 15,
      nome: "Estojo Sonic",
      desc: "Compacta para levar celular e documentos.",
    },
    {
      id: 16,
      nome: "Avental Minie",
      desc: "Leve suas refeições com segurança e estilo.",
    },
    {
      id: 17,
      nome: "Bolsinha Stitch",
      desc: "Proteja seus óculos de sol dentro da bolsa.",
    },
    {
      id: 18,
      nome: "Estojo e Toalinhas Stitch",
      desc: "Mantenha seus remédios organizados em casa.",
    },
  ];

  const abrirModal = (produto) => {
    setProdutoSelecionado(produto);
    setImagemAtualIndex(0);
  };

  const fecharModal = () => {
    setProdutoSelecionado(null);
  };

  const getImagensAtuais = () => {
    if (!produtoSelecionado) return [];

    const mainImg = getImageUrl(produtoSelecionado.id);

    let extras = [];
    if (produtoSelecionado.imagensExtras) {
      extras = produtoSelecionado.imagensExtras.map((imgName) =>
        getExtraImageUrl(imgName)
      );
    }

    return [mainImg, ...extras];
  };

  const imagensAtuais = getImagensAtuais();

  const proximaImagem = (e) => {
    e.stopPropagation();
    setImagemAtualIndex((prev) =>
      prev === imagensAtuais.length - 1 ? 0 : prev + 1
    );
  };

  const imagemAnterior = (e) => {
    e.stopPropagation();
    setImagemAtualIndex((prev) =>
      prev === 0 ? imagensAtuais.length - 1 : prev - 1
    );
  };

  return (
    <section className="w-full py-20 px-4 bg-white text-black text-center font-['Poppins']">
      <h2 className="text-2xl md:text-3xl font-bold mb-16 text-black">
        Veja todos os nossos produtos personalizados
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 mb-20">
        {listaProdutos.map((produto) => (
          <div
            key={produto.id}
            className="flex flex-col items-center group cursor-pointer"
            onClick={() => abrirModal(produto)}
          >
            <div className="relative w-full aspect-square bg-gray-100 rounded-4xl mb-4 flex items-center justify-center overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <img
                src={getImageUrl(produto.id)}
                alt={produto.nome}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/300?text=Foto+Indisponivel";
                }}
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white/90 text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-md translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Ver Detalhes
                </span>
              </div>
            </div>

            <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-[#2D8CBA] transition">
              {produto.nome}
            </h3>
            <p className="text-gray-500 text-sm max-w-55 leading-relaxed">
              {produto.desc || "Descrição em breve..."}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-8">
        <p className="text-base md:text-lg text-black">
          Gostou? Entre em contato já para encomendar e personalizar o seu!
        </p>

        <a
          href="#"
          className="inline-block bg-[#2D8CBA] text-white py-3 px-12 rounded-full font-bold uppercase text-sm tracking-widest hover:opacity-90 transition shadow-md hover:-translate-y-1"
        >
          Encomende o seu
        </a>
      </div>

      {produtoSelecionado && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity"
          onClick={fecharModal}
        >
          <div
            className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={fecharModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-gray-200 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="w-full md:w-3/5 bg-gray-100 flex items-center justify-center relative aspect-square md:aspect-auto">
              <img
                src={imagensAtuais[imagemAtualIndex]}
                alt={produtoSelecionado.nome}
                className="w-full h-full object-cover md:object-contain max-h-[50vh] md:max-h-full"
              />

              {imagensAtuais.length > 1 && (
                <>
                  <button
                    onClick={imagemAnterior}
                    className="absolute left-4 p-2 rounded-full bg-white/80 hover:bg-white shadow text-black transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={proximaImagem}
                    className="absolute right-4 p-2 rounded-full bg-white/80 hover:bg-white shadow text-black transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>

                  <div className="absolute bottom-4 flex gap-2">
                    {imagensAtuais.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full shadow ${
                          idx === imagemAtualIndex ? "bg-[#2D8CBA]" : "bg-white"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center text-left bg-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                {produtoSelecionado.nome}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {produtoSelecionado.desc ||
                  "Produto personalizado feito com muito carinho. Entre em contato para escolher suas estampas e cores!"}
              </p>

              <a
                href="#"
                className="inline-block bg-[#2D8CBA] text-white py-3 px-8 rounded-full font-bold uppercase text-center text-sm tracking-widest hover:opacity-90 transition shadow-md w-full md:w-auto"
              >
                Quero encomendar
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProdutosPersonalizados;
