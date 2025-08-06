import {
  FaClock,
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import hero from "../assets/hero.jpg";

const Contact = () => {
  const contactItems = [
    {
      icon: <FaMapMarkedAlt className="text-pink-600 text-xl" />,
      title: "Localização",
      content: (
        <p className="text-gray-600">
          Rua das Estrelas, 123 - Distrito Médico <br />
          São Paulo - SP
        </p>
      ),
    },
    {
      icon: <FaPhoneAlt className="text-pink-600 text-xl" />,
      title: "Telefones",
      content: (
        <p className="text-gray-600">
          Agendamentos:{" "}
          <a href="tel:+5511999999999" className="hover:text-pink-600">
            +55 (11) 99999-9999
          </a>
          <br />
          Emergências:{" "}
          <a href="tel:+5511988888888" className="hover:text-pink-600">
            +55 (11) 98888-8888
          </a>
        </p>
      ),
    },
    {
      icon: <FaEnvelope className="text-pink-600 text-xl" />,
      title: "E-mail",
      content: (
        <p className="text-gray-600">
          <a
            href="mailto:contato@glamourclinic.com"
            className="hover:text-pink-600"
          >
            contato@glamourclinic.com
          </a>
          <br />
          <a
            href="mailto:agendamento@glamourclinic.com"
            className="hover:text-pink-600"
          >
            agendamento@glamourclinic.com
          </a>
        </p>
      ),
    },
    {
      icon: <FaClock className="text-pink-600 text-xl" />,
      title: "Horário de Atendimento",
      content: (
        <p className="text-gray-600">
          Segunda a Quinta: 08h às 20h <br />
          Sexta-feira: 09h às 18h <br />
          Sábado: 08h às 14h <br />
          Domingo: Fechado
        </p>
      ),
    },
  ];

  const services = [
    { value: "botox", label: "Tratamento com Botox" },
    { value: "fillers", label: "Preenchimento Facial" },
    { value: "laser", label: "Remoção a Laser" },
    { value: "facelift", label: "Lifting Facial" },
    { value: "other", label: "Outros Procedimentos" },
  ];

  return (
    <article
      id="contact"
      className="py-20 overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100"
    >
      <div className="container mx-auto px-4">
        <header
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center mb-16 relative"
        >
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-pink-100 opacity-30 z-10" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10">
            Fale com a <span className="text-pink-600">nossa clínica</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto relative z-10">
            Entre em contato para agendar uma consulta, tirar dúvidas ou saber
            mais sobre nossos procedimentos.
          </p>
        </header>

        <main className="flex flex-col lg:flex-row gap-12">
          <aside data-aos="fade-up" data-aos-delay="500" className="lg:w-2/5">
            <section className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Entre em Contato
              </h2>
              <address>
                {contactItems.map((item, index) => (
                  <article key={index} className="flex items-center mb-6">
                    <figure className="bg-pink-100 p-3 rounded-full mr-4 flex-shrink-0">
                      {item.icon}
                    </figure>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      {item.content}
                    </div>
                  </article>
                ))}
              </address>
              <figure className="mt-8 rounded-xl overflow-hidden shadow-md">
                <img
                  src={hero}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  width="400"
                  height="200"
                  loading="lazy"
                  alt="Imagem da clínica"
                />
              </figure>
            </section>
          </aside>

          <section data-aos="fade-up" data-aos-delay="600" className="lg:w-3/5">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Envie uma Mensagem
              </h2>
              <form className="space-y-6">
                <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>
                </fieldset>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Procedimento de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    required
                  >
                    <option value="">Selecione uma opção</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Sua mensagem
                  </label>
                  <input
                    id="message"
                    name="message"
                    className="w-full px-4 py-3 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Escreva suas dúvidas ou observações aqui"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition shadow-lg w-full md:w-auto"
                    aria-label="enviar formulário de contato"
                  >
                    Enviar mensagem
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>

        <figure
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.3957652203!2d-46.92496912037576!3d-23.681434552294135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-PT!2sbr!4v1754483740062!5m2!1spt-PT!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Mapa da localização da clínica"
            className="rounded-2xl"
            aria-label="mapa mostrando a localização da clínica"
          ></iframe>
        </figure>
      </div>
    </article>
  );
};

export default Contact;
