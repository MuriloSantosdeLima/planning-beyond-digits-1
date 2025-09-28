import { Palette, Gift, Home, Baby, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Peças Personalizadas",
      description: "Criamos peças únicas de acordo com seu gosto e necessidades específicas",
      features: ["Design exclusivo", "Escolha de cores", "Tamanhos variados", "Acabamento premium"],
      popular: true
    },
    {
      icon: Gift,
      title: "Presentes Especiais",
      description: "Presentes artesanais perfeitos para ocasiões especiais e datas comemorativas",
      features: ["Embalagem cuidadosa", "Cartão personalizado", "Entrega programada", "Garantia de qualidade"]
    },
    {
      icon: Home,
      title: "Decoração para Casa",
      description: "Itens decorativos que transformam seu lar em um espaço acolhedor e único",
      features: ["Consultoria de estilo", "Peças coordenadas", "Diferentes ambientes", "Manutenção inclusa"]
    },
    {
      icon: Baby,
      title: "Artigos Infantis",
      description: "Brinquedos e acessórios seguros e educativos para os pequenos",
      features: ["Materiais atóxicos", "Designs lúdicos", "Fácil limpeza", "Estimulam criatividade"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Nossos Serviços
          </span>
          <h2 className="font-script text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
            O que <span className="text-primary">oferecemos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desde peças personalizadas até presentes especiais, oferecemos uma gama 
            completa de serviços artesanais para atender todas as suas necessidades.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 shadow-card hover-lift animate-scale-in group ${
                service.popular ? "border-2 border-primary/20" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-8">
                  <span className="bg-gradient-golden text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-mint p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="bg-primary/10 p-1 rounded-full">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={service.popular ? "premium" : "elegant"} 
                className="w-full"
              >
                Solicitar Orçamento
              </Button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="font-script text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como <span className="text-primary">Trabalhamos</span>
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Um processo simples e transparente do primeiro contato até a entrega da sua peça.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consulta", desc: "Conversamos sobre sua ideia" },
              { step: "02", title: "Orçamento", desc: "Apresentamos proposta detalhada" },
              { step: "03", title: "Criação", desc: "Produzimos sua peça com carinho" },
              { step: "04", title: "Entrega", desc: "Você recebe sua arte única" }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-golden text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  {process.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{process.title}</h4>
                <p className="text-sm text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;