import React from "react";

const QuemSomos = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-white text-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="w-full md:w-1/2 aspect-square md:aspect-4/3 bg-gray-200 rounded-3xl flex items-center justify-center text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-20 h-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
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
