import hero from "../assets/hero.jpg";

const Hero = () => {
  const stats = [
    { value: "2500+", label: "Clientes Satisfeitos" },
    { value: "15+", label: "Especialistas" },
    { value: "50+", label: "Tratamentos" },
    { value: "10+", label: "Anos de Experiência" },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100"
    >
      <article className="container mx-auto px-4 py-14 md:py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <hgroup data-aos="fade-up" data-aos-delay="500">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Realce Sua{" "}
              <mark className="text-pink-600 bg-transparent">
                Beleza Natural
              </mark>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Transformamos autoestima em bem-estar através de tratamentos
              estéticos modernos, personalizados e realizados por uma equipe
              qualificada. Descubra como realçar sua beleza com segurança,
              conforto e resultados comprovados.
            </p>
          </hgroup>
          <nav
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <a
              href="#appointment"
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full text-center transition shadow-lg"
            >
              Agendar Consulta
            </a>
            <a
              href="#services"
              className="border border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full text-center transition"
              aria-label="Explorar nossos serviços"
            >
              Conheça Nossos Serviços
            </a>
          </nav>
          <aside data-aos="fade-up" data-aos-delay="800" className="py-4">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-center">
              {stats.map((stat, index) => (
                <li key={index} className="px-2">
                  <strong className="text-2xl font-bold text-pink-600">
                    {stat.value}
                  </strong>
                  <small className="block text-sm text-gray-600">
                    {stat.label}
                  </small>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <figure
          data-aos="fade-up"
          data-aos-delay="700"
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <span
              className="bg-pink-500 rounded-full w-80 h-80 absolute -top-10 -left-10 opacity-20"
              aria-hidden="true"
            ></span>
            <span
              className="bg-purple-400 rounded-full w-64 h-64 absolute -bottom-10 -right-10 opacity-20"
              aria-hidden="true"
            ></span>
            <img
              src={hero}
              alt="Tratamento estético"
              className="relative z-10 rounded-full shadow-2xl w-full h-full object-cover"
              width="500"
              height="500"
              loading="eager"
            />
          </div>
        </figure>
      </article>
    </section>
  );
};

export default Hero;
