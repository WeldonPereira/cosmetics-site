import { FaQuoteLeft, FaRegStar, FaStar } from "react-icons/fa";
import specialistImage01 from "../assets/specialists1.jpg";
import specialistImage02 from "../assets/specialists2.jpg";
import specialistImage03 from "../assets/specialists3.jpg";

const Specialists = () => {
  const specialists = [
    {
      id: 1,
      name: "Dra. Ana Carvalho",
      role: "Cirurgiã Plástica",
      image: specialistImage01,
      bio: "Especialista em procedimentos faciais, dedicada a resultados naturais e ao bem-estar de seus pacientes.",
      rating: 5,
      specialties: ["Lifting facial", "Rinoplastia", "Preenchimento labial"],
    },
    {
      id: 2,
      name: "Dr. Lucas Almeida",
      role: "Cirurgião Plástico",
      image: specialistImage02,
      bio: "Com ampla experiência em cirurgias corporais e faciais, busca sempre unir técnica e estética com segurança.",
      rating: 5,
      specialties: ["Abdominoplastia", "Lipoaspiração", "Implante de próteses"],
    },
    {
      id: 3,
      name: "Dra. Mariana Souza",
      role: "Cirurgiã Plástica",
      image: specialistImage03,
      bio: "Focada em promover autoestima através de tratamentos modernos e atendimento humanizado.",
      rating: 5,
      specialties: ["Blefaroplastia", "Botox", "Tratamentos a laser"],
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) =>
      i < rating ? (
        <FaStar key={i} className="text-yellow-400 inline" aria-hidden="true" />
      ) : (
        <FaRegStar
          key={i}
          className="text-yellow-400 inline"
          aria-hidden="true"
        />
      )
    );
  };

  return (
    <section
      id="speccialists"
      className="py-20 overflow-hidden bg-gradient-to-r from-pink-100 bg-purple-100"
    >
      <div className="container mx-auto px-4">
        <header
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center relative mb-16"
        >
          <span
            className="absolute -top-10 left-1/3 transform -translate-x-1/2 w-20 h-20 rounded-full bg-pink-400 opacity-30 z-0"
            aria-hidden="true"
          ></span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10">
            Conheça nossa{" "}
            <span className="text-pink-600">Equipe Especializada</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto relative z-10">
            Profissionais altamente qualificados, prontos para oferecer
            segurança, tecnologia e atendimento humanizado.
          </p>
          <span
            className="absolute -bottom-6 right-1/4 w-16 h-16 rounded-full bg-purple-100 opacity-20 z-0"
            aria-hidden="true"
          ></span>
        </header>

        <ul
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {specialists.map((doctor) => (
            <li key={doctor.id} className="group relative">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                <figure className="relative h-80 overflow-hidden">
                  <img
                    src={doctor.image}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    aria-hidden="true"
                  ></span>
                  <aside
                    className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full flex items-center shadow-sm"
                    aria-label={`Avaliação: ${doctor.rating} estrelas`}
                  >
                    {renderStars(doctor.rating)}
                    <span className="ml-1 text-sm font-medium">
                      {doctor.rating}
                    </span>
                  </aside>
                </figure>
                <div className="p-6 relative -mt-10">
                  <div className="bg-pink-200 rounded-lg shadow-md p-6">
                    <header>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {doctor.name}
                      </h3>
                      <p className="text-pink-600 font-medium mb-3">
                        {doctor.role}
                      </p>
                    </header>
                    <p className="text-gray-600 mb-4">{doctor.bio}</p>
                    <ul className="flex flex-wrap gap-2 mb-4">
                      {doctor.specialties.map((spec, i) => (
                        <li key={i}>
                          <span className="bg-pink-50 text-pink-600 text-xs font-medium px-3 py-1 rounded-full">
                            {spec}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <figure
                      className="absolute -top-6 left-6 bg-pink-600 text-white p-3 rounded-full shadow-lg"
                      aria-hidden="true"
                    >
                      <FaQuoteLeft className="text-lg" />
                    </figure>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <aside
          data-aos="fade-up"
          data-aos-delay="500"
          className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <span
            className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-pink-200 opacity-20"
            aria-hidden="true"
          ></span>
          <span
            className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-pink-200 opacity-20"
            aria-hidden="true"
          ></span>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Pronto para agendar sua consulta com nossos especialistas?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato e descubra como podemos valorizar sua beleza de
              forma segura, moderna e personalizada.
            </p>
            <nav className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-offset-2"
                aria-label="Agendar uma consulta"
              >
                Agendar Consulta
              </a>
              <a
                href="#"
                className="border border-pink-600 hover:bg-pink-50 text-pink-600 px-8 py-3 rounded-full transition shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                aria-label="Fale conosco"
              >
                Fale Conosco
              </a>
            </nav>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Specialists;
