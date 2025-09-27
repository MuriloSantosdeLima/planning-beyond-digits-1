import { Card } from "@/components/ui/card";
import { MapPin, Shield, Award, TrendingUp } from "lucide-react";
import officeInterior from "@/assets/office-interior-bw.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: MapPin,
      title: "Localização Estratégica",
      description: "Atendimento presencial e remoto para todo o Brasil"
    },
    {
      icon: Shield,
      title: "Conformidade Fiscal",
      description: "Especialistas em legislação tributária e compliance"
    },
    {
      icon: Award,
      title: "Atendimento Personalizado",
      description: "Cada cliente recebe atenção dedicada e soluções customizadas"
    },
    {
      icon: TrendingUp,
      title: "Crescimento do Negócio",
      description: "Consultoria estratégica para impulsionar resultados"
    }
  ];

  return (
    <section className="py-section bg-neutral-50">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={officeInterior}
                alt="Planning Office Interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-planning-green rounded-2xl opacity-20"></div>
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-semibold text-planning-green uppercase tracking-wider mb-4">
                QUEM SOMOS
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-neutral-900 font-heading mb-6">
                Conheça a{" "}
                <span className="text-planning-green">Lucimara Rocha</span>
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                O escritório Lucimara Rocha Contabilidade oferece serviços contábeis 
                especializados com mais de 15 anos de experiência no mercado. 
                Nosso compromisso é fornecer soluções personalizadas e eficientes 
                para empresas de todos os portes, sempre com foco na excelência 
                do atendimento e na conformidade fiscal.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-normal border-0 bg-white">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-planning-green/10 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-planning-green" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-neutral-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;