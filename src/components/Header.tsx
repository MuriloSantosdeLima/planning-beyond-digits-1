import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Sobre",
    "Áreas de Atuação",
    "Verticais de Negócio",
    "Parcerias",
    "Cases",
    "Contato"
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100 transition-all duration-normal">
      <div className="max-w-container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-neutral-900 font-heading">
              Planning
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-neutral-700 hover:text-planning-green transition-colors duration-fast font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors duration-fast">
                <img src="https://flagcdn.com/24x18/br.png" alt="BR" className="w-6 h-4" />
              </button>
              <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors duration-fast">
                <img src="https://flagcdn.com/24x18/us.png" alt="US" className="w-6 h-4" />
              </button>
            </div>
            
            <Button variant="cta" size="lg">
              SOLICITAR PROPOSTA
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors duration-fast"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-neutral-100 pt-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-neutral-700 hover:text-planning-green transition-colors duration-fast font-medium py-2"
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors duration-fast">
                    <img src="https://flagcdn.com/24x18/br.png" alt="BR" className="w-6 h-4" />
                  </button>
                  <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors duration-fast">
                    <img src="https://flagcdn.com/24x18/us.png" alt="US" className="w-6 h-4" />
                  </button>
                </div>
                <Button variant="cta" size="lg">
                  SOLICITAR PROPOSTA
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;