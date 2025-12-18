import fotoQuemSomos from "../assets/img/logo.png";

const QuemSomos = () => {
  return (
    <section
      id="quem-somos"
      className="w-full py-20 px-4 md:px-8 bg-white text-black"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
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
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-black">
            Quem somos?
          </h2>

          <div className="text-gray-600 leading-relaxed text-sm md:text-base space-y-4 text-justify">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sollicitudin eleifend dui ut pharetra. In vehicula vehicula
              pellentesque. Donec non rhoncus ipsum.
            </p>
            <p>
              Donec feugiat, est at volutpat molestie, eros neque pharetra nunc,
              sit amet ornare velit neque vitae eros. Quisque lobortis dapibus
              finibus. Nullam vestibulum, massa at sollicitudin molestie, velit
              libero lobortis ligula, eget ullamcorper eros eros id felis.
              Vivamus sagittis nunc non lectus accumsan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
