import fotoQuemSomos from "../assets/img/quem_sou_eu.jpg";

const QuemSomos = () => {
  return (
    <section
      id="quem-somos"
      className="w-full py-12 md:py-20 px-4 md:px-8 bg-white text-black"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-20">
        <div className="w-full md:w-1/2 aspect-square md:aspect-4/3 bg-gray-100 rounded-3xl overflow-hidden shadow-lg flex items-center justify-center">
          <img
            src={fotoQuemSomos}
            alt="Quem somos - Luciana Caetano"
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = "none";
              e.target.parentNode.innerHTML =
                '<span class="text-gray-400 text-center px-4">Coloque uma foto chamada "quem_somos.jpg" na pasta assets/img</span>';
            }}
          />
        </div>

        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-2xl md:text-4xl font-medium mb-4 md:mb-6 text-black">
            Quem somos?
          </h2>

          <div className="text-gray-600 leading-relaxed text-sm md:text-base space-y-4 text-justify">
            <p>
              Meu nome é Luciana Aparecida Caetano Carvalho, tenho 46 anos,
              casada com Reinaldo mãe do Miguel de 15 anos. Trabalhei em regime
              CLT por 15 anos, mas um dia me libertei.
            </p>
            <p>
              Sempre gostei de artesanato, há alguns anos me encontrei no mundo
              encantador da costura criativa. Hoje trabalho com costura
              criativa, sublimação e bordado personalizados. Conquistei meu
              ateliê que funciona em minha casa, trabalho com amor e carinho em
              cada peça que faço!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
