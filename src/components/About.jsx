import { FaAward, FaClinicMedical, FaHeart, FaUserMd } from "react-icons/fa";
import about from "../assets/about.jpg"

const About = () => {
  const stats = [
    {
      value: "10+",
      label: "Anos de Experiência",
      icon: <FaAward className="text-pink-500" aria-hidden="true" />,
    },
    {
      value: "2.5+",
      label: "Clientes Satisfeitos",
      icon: <FaHeart className="text-pink-500" aria-hidden="true" />,
    },
    {
      value: "15+",
      label: "Médicos Especialistas",
      icon: <FaUserMd className="text-pink-500" aria-hidden="true" />,
    },
    {
      value: "10+",
      label: "Tratamentos Oferecidos",
      icon: <FaClinicMedical className="text-pink-500" aria-hidden="true" />,
    },
  ];

  const approachItems = [
    {
      icon: <FaHeart className="text-pink-600" aria-hidden="true" />,
      text: "Cuidado humanizado e atenção aos detalhes em cada atendimento.",
    },
    {
      icon: <FaUserMd className="text-pink-600" aria-hidden="true" />,
      text: "Equipe altamente qualificada, com formação contínua e experiência.",
    },
    {
      icon: <FaClinicMedical className="text-pink-600" aria-hidden="true" />,
      text: "Tecnologia de ponta para garantir segurança e resultados naturais.",
    },
  ];

  return (
    <section
      id="about"
      className="py-14 overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100"
    >
      <div className="container mx-auto px-4">
        <article
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          <figure className="lg:w-5/12 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl w-full max-w-md mx-auto">
              <img
                src={about}
                className="w-full h-auto object-cover aspect-[4/5]"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                aria-hidden="true"
              ></div>
            </div>
            <span
              className="hidden lg:block absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-pink-500 opacity-20 z-0"
              aria-hidden="true"
            ></span>
            <span
              className="hidden lg:block absolute -top-8 -right-8 w-40 h-40 rounded-full bg-pink-600 opacity-20 z-0"
              aria-hidden="true"
            ></span>
            <aside className="absolute bottom-1 -right-5 bg-white p-3 rounded-xl shadow-lg z-20">
              <strong className="text-2xl font-bold text-pink-600">10+</strong>
              <small className="block text-xs font-medium text-gray-600">
                Anos de Experiência
              </small>
            </aside>
          </figure>

          <div data-aos="fade-up" data-aos-delay="600" className="lg:w-7/12">
            <header>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Sobre a <span className="text-pink-600">Clínica Glamour</span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Referência em tratamentos estéticos, oferecemos atendimento
                personalizado aliado a tecnologia avançada e equipe de
                especialistas. Nosso objetivo é valorizar sua beleza de forma
                segura e natural.
              </p>
            </header>

            <section className="m-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Nosso Diferencial
              </h3>
              <ul className="space-y-3">
                {approachItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <figure className="bg-pink-100 p-1 rounded-full mr-3">
                      {item.icon}
                    </figure>
                    <p className="text-gray-700">{item.text}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((item, index) => (
                <article
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center"
                >
                  <figure className="mr-3">{item.icon}</figure>
                  <div>
                    <strong className="text-xl font-bold text-pink-600">
                      {item.value}
                    </strong>
                    <p className="text-gray-600 text-sm">{item.label}</p>
                  </div>
                </article>
              ))}
            </section>

            <nav>
              <a
                href="#"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white p-6 py-3 rounded-full transition shadow-md focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-offset-2"
              >
                Conheça Nossos Especialistas
              </a>
            </nav>
          </div>
        </article>

        <aside className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
          <span
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-pink-500 opacity-40"
            aria-hidden="true"
          ></span>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Nossa Missão
            </h3>
            <blockquote className="text-lg text-gray-700 mb-6">
              "Cuidar da autoestima e bem-estar de cada pessoa, oferecendo
              tratamentos seguros, eficazes e personalizados que realçam a
              beleza natural."
            </blockquote>
            <figure className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                <FaUserMd className="text-pink-600" aria-hidden="true" />
              </div>
              <figcaption>
                <cite className="font-semibold text-gray-800 not-italic">
                  Dra. Sarah Johnson
                </cite>
                <p>Diretora Médica & Fundadora</p>
              </figcaption>
            </figure>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default About;
