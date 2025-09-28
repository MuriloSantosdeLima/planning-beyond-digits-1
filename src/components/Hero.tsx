import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import celmaLogo from "@/assets/celma-logo.png";

const Hero = () => {
  return (
    <header id="home" className="min-h-screen flex items-center bg-gradient-cream" role="banner">
      <div className="container mx-auto px-4 lg:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground font-medium">
                Artesanato Premium
              </span>
            </div>

            <h1 className="font-script text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Arte que toca
              <br />
              <span className="text-primary">o coração</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Peças únicas e exclusivas feitas à mão com amor e dedicação. 
              Cada criação conta uma história especial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="premium" size="lg" className="group">
                Ver Coleção
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="elegant" size="lg">
                Sobre Nosso Trabalho
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <div className="font-script text-2xl md:text-3xl font-bold text-primary mb-1">
                  5+
                </div>
                <div className="text-sm text-muted-foreground">
                  Anos de Experiência
                </div>
              </div>
              <div>
                <div className="font-script text-2xl md:text-3xl font-bold text-primary mb-1">
                  200+
                </div>
                <div className="text-sm text-muted-foreground">
                  Peças Criadas
                </div>
              </div>
              <div>
                <div className="font-script text-2xl md:text-3xl font-bold text-primary mb-1">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">
                  Feito à Mão
                </div>
              </div>
            </div>
          </div>

          {/* Logo/Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-golden opacity-20 blur-2xl rounded-full group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-premium hover-lift">
                <img
                  src={celmaLogo}
                  alt="Celma Belas Artes - Logo Premium"
                  width={341}
                  height={512}
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  className="w-80 h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
