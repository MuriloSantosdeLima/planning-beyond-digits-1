import { Button } from "@/components/ui/button";
import heroBuilding from "@/assets/hero-building.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBuilding}
          alt="Planning Corporate Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 leading-tight">
            A melhor empresa de{" "}
            <span className="text-planning-green">contabilidade corporativa</span>{" "}
            multissetorial do Brasil
          </h1>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12">
            <Button variant="hero" size="xl">
              Conheça Nossos Serviços
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-neutral-900">
              Fale Conosco
            </Button>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="mt-16 bg-neutral-900/90 backdrop-blur-sm rounded-2xl p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-3xl lg:text-4xl font-bold text-planning-green">
                +50 bilhões
              </h3>
              <p className="text-neutral-300 font-medium">
                de faturamento sob gestão
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl lg:text-4xl font-bold text-planning-green">
                +18.000
              </h3>
              <p className="text-neutral-300 font-medium">
                colaboradores sob gestão
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl lg:text-4xl font-bold text-planning-green">
                NPS 90
              </h3>
              <p className="text-neutral-300 font-medium">
                em zona de excelência
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;