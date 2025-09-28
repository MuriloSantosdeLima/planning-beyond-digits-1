import { Heart, Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" }
  ];

  const quickLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Galeria", href: "#gallery" },
    { name: "Serviços", href: "#services" },
    { name: "Contato", href: "#contact" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-script text-2xl font-bold mb-4 text-primary">
              Celma Belas Artes
            </h3>
            <p className="text-background/80 mb-6 max-w-md leading-relaxed">
              Transformando fios em sonhos desde 2019. Cada peça é criada com 
              amor, dedicação e o compromisso de trazer beleza e exclusividade 
              para sua vida.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-background/10 hover:bg-primary/20 p-2 rounded-lg transition-colors duration-300 group"
                >
                  <social.icon className="h-5 w-5 text-background group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Contato</h4>
            <div className="space-y-2 text-background/80">
              <p>São Paulo, SP</p>
              <p>(11) 99999-9999</p>
              <p>contato@celmabelasartes.com</p>
              <div className="mt-4">
                <p className="text-sm">Seg - Sex: 9h às 18h</p>
                <p className="text-sm">Sáb: 9h às 14h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} Celma Belas Artes. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-background/80">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-primary fill-current" />
            <span>e muito carinho</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;