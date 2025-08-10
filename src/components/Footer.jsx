import {
  FaClinicMedical,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdAccessTime, MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF className="text-lg" />, label: "Facebook" },
    { icon: <FaTwitter className="text-lg" />, label: "Twitter" },
    { icon: <FaInstagram className="text-lg" />, label: "Instagram" },
    { icon: <FaLinkedinIn className="text-lg" />, label: "Linkedin" },
    { icon: <FaYoutube className="text-lg" />, label: "Youtube" },
  ];

  const quickLinks = [
    { text: "Início", href: "#" },
    { text: "Sobre Nós", href: "#about" },
    { text: "Nossos Serviços", href: "#services" },
    { text: "Nossos Especialistas", href: "#speccialists" },
    { text: "Fale Conosco", href: "#contact" },
    { text: "Agendar Consulta", href: "#appointement" },
  ];

  const contactInfo = [
    {
      icon: (
        <MdLocationOn className="text-pink-500 text-xl mt-1 mr-4 flex-shrink-0" />
      ),
      content: (
        <a href="#" className="text-gray-400 hover:text-pink-500 transition">
          Av. da Beleza, 123 - Distrito Médico, São Paulo - SP
        </a>
      ),
    },
    {
      icon: (
        <MdPhone className="text-pink-500 text-xl mt-1 mr-4 flex-shrink-0" />
      ),
      content: (
        <a href="#" className="text-gray-400 hover:text-pink-500 transition">
          +55 (11) 99999-9999
        </a>
      ),
    },
    {
      icon: (
        <MdEmail className="text-pink-500 text-xl mt-1 mr-4 flex-shrink-0" />
      ),
      content: (
        <a href="#" className="text-gray-400 hover:text-pink-500 transition">
          contato@glamourclinic.com
        </a>
      ),
    },
    {
      icon: (
        <MdAccessTime className="text-pink-500 text-xl mt-1 mr-4 flex-shrink-0" />
      ),
      content: (
        <a href="#" className="text-gray-400 hover:text-pink-500 transition">
          Seg-Qui: 9h-20h, Sex: 14h-21h
        </a>
      ),
    },
  ];

  const legalLinks = [
    { text: "Política de Privacidade", href: "#" },
    { text: "Termos de Serviço", href: "#" },
    { text: "Mapa do Site", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <section className="lg:col-span-2">
            <header className="flex items-center mb-6">
              <FaClinicMedical
                className="text-3xl text-pink-500 mr-3"
                aria-hidden="true"
              />
              <h2 className="text-2xl font-bold">Glamour Clinic</h2>
            </header>
            <p className="text-gray-400 mb-6">
              Oferecemos atendimento de excelência com profissionais
              qualificados e tecnologia de ponta para cuidar da sua saúde e
              beleza.
            </p>
            <nav aria-label="Redes sociais">
              <ul className="flex space-x-4">
                {socialLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="bg-gray-800 hover:bg-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition"
                      aria-label={item.label}
                    >
                      {item.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-pink-500">
              Links Rápidos
            </h3>
            <nav aria-label="Links rápidos">
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-pink-500 transition"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          <address>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-pink-600">
              Contato
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center">
                  {info.icon}
                  {info.content}
                </li>
              ))}
            </ul>
          </address>
        </div>
        <div className="pt-6 text-center text-gray-500 text-sm">
          © 2025 Glamour Clinic. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
