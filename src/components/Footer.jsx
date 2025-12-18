import logo from "../assets/img/logo.png";

const Footer = () => {
  const mensagemWhatsApp =
    "Olá! Vim pelo site e gostaria de saber mais sobre os produtos personalizados.";
  const linkWhatsApp = `https://wa.me/5512981124495?text=${encodeURIComponent(
    mensagemWhatsApp
  )}`;

  return (
    <footer className="w-full bg-[#2D8CBA] text-white font-['Poppins']">
      <div className="max-w-7xl mx-auto py-8 md:py-12 px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="shrink-0">
          <img
            src={logo}
            alt="Logo Luciana Caetano"
            className="w-24 md:w-32 h-auto opacity-90 hover:opacity-100 transition duration-300"
          />
        </div>

        <div className="flex-1 max-w-lg">
          <p className="text-base md:text-xl font-medium leading-relaxed">
            Encomende a sua necessarie ou entre em contato para personalizar
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm md:text-base font-light">
          <a
            href="https://instagram.com/lucianacaetanoatelier"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-3 hover:opacity-80 transition group"
          >
            <div className="p-2 border border-white rounded-full group-hover:bg-white group-hover:text-[#2D8CBA] transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <span>@lucianacaetanoatelier</span>
          </a>

          <a
            href={linkWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-3 hover:opacity-80 transition group"
          >
            <div className="p-2 border border-white rounded-full group-hover:bg-white group-hover:text-[#2D8CBA] transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <span>(12) 98112-4495</span>
          </a>
        </div>
      </div>

      <div className="bg-[#24759b] py-4 text-center text-xs opacity-90 tracking-wide">
        <p>
          &copy; {new Date().getFullYear()} Luciana Caetano Atelier. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
