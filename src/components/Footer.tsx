import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const offices = [
    {
      city: "Escritório Principal",
      address: "Rua das Flores, 123 - Centro",
      phone: "(11) 9999-9999",
      email: "contato@lucimaraocha.com.br"
    }
  ];

  const legalLinks = [
    "Trabalhe Conosco",
    "Fale Conosco", 
    "Política de Privacidade",
    "Política de Cookies"
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-heading mb-4">Lucimara Rocha</h3>
              <p className="text-neutral-300 leading-relaxed">
                Escritório de contabilidade com excelência em atendimento e soluções personalizadas.
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-planning-green transition-colors duration-fast"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-planning-green transition-colors duration-fast"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-planning-green transition-colors duration-fast"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Offices Grid */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold mb-6 text-lg">Contato</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div key={index} className="space-y-3">
                  <h5 className="font-semibold text-planning-green">
                    {office.city}
                  </h5>
                  <div className="space-y-2 text-sm text-neutral-300">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <span>{office.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-sm text-neutral-300 hover:text-planning-green transition-colors duration-fast"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Credits */}
            <div className="text-sm text-neutral-400 text-center lg:text-right">
              <p className="mb-1">© 2024 Lucimara Rocha Contabilidade. Todos os direitos reservados.</p>
              <p>Website desenvolvido por <span className="text-planning-green font-semibold">ELTON</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;