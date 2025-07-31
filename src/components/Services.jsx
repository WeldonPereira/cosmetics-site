import {
  FaClinicMedical,
  FaRegSmile,
  FaSyringe,
  FaUserMd,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: (
        <FaClinicMedical
          className="text-4xl text-pink-600"
          aria-hidden="true"
        />
      ),
      title: "Procedimentos Faciais",
      desc: "Rejuvenescimento facial para valorizar sua beleza de forma segura e eficaz.",
      link: "#facelift",
    },
    {
      icon: <FaUserMd className="text-4xl text-pink-600" aria-hidden="true" />,
      title: "Preenchimentos",
      desc: "Suavize linhas de expressão e restaure o volume natural do rosto.",
      link: "#botox",
    },
    {
      icon: (
        <FaRegSmile className="text-4xl text-pink-600" aria-hidden="true" />
      ),
      title: "Tratamentos a Laser",
      desc: "Tecnologia de ponta para revitalizar, clarear e rejuvenescer a pele.",
      link: "#laser",
    },
    {
      icon: <FaSyringe className="text-4xl text-pink-600" aria-hidden="true" />,
      title: "Esculpindo o Corpo",
      desc: "Procedimentos corporais para definir contornos e realçar a silhueta.",
      link: "#contouring",
    },
  ];

  return (
    <div>
      <section
        id="services"
        className="py-20 overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100"
        aria-labelledby="services-heading"
      >
        <div className="container mx-auto px-4">
          <header
            className="text-center mb-16"
            data-aos-delay="500"
            data-aos="fade-up"
          >
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Nossos <span className="text-pink-600">Serviços Premium</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos tratamentos modernos e personalizados para valorizar
              sua beleza com segurança e resultados de excelência.
            </p>
          </header>
          <ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            data-aos-delay="500"
            data-aos="fade-up"
          >
            {services.map((service, index) => (
              <li key={index}>
                <article className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col">
                  <figure className="mb-6">{service.icon}</figure>
                  <h1 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h1>
                  <p className="text-gray-600 m-6 flex-grow">{service.desc}</p>
                  <a
                    href={service.link}
                    className="text-pink-600 font-medium hover:text-pink-700 transition flex items-center mt-auto"
                    aria-label={`Saiba mais sobre ${service.title}`}
                  >
                    Saiba mais
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                </article>
              </li>
            ))}
          </ul>
          <footer
            className="mt-20 text-center"
            data-aos-delay="600"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Pronta para transformar seu visual?
            </h3>
            <a
              href="#appointement"
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full inline-block transition shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-offset-2"
              aria-label="Agende sua consulta agora"
            >
              Agende sua consulta agora
            </a>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Services;
