import { Heart, Award, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Feito com Amor",
      description: "Cada peça é criada com dedicação e carinho especial"
    },
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Materiais selecionados e técnicas refinadas"
    },
    {
      icon: Users,
      title: "Personalização",
      description: "Criações únicas adaptadas ao seu gosto"
    },
    {
      icon: Sparkles,
      title: "Arte Exclusiva",
      description: "Peças originais que você não encontra em outros lugares"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <div className="mb-6">
              <span className="text-primary font-medium text-sm tracking-wider uppercase">
                Nossa História
              </span>
              <h2 className="font-script text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                Transformando fios em
                <span className="text-primary"> sonhos</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Em Celma Belas Artes, cada criação nasce da paixão pela arte artesanal. 
              Há mais de 5 anos, dedicamo-nos a criar peças únicas que trazem beleza, 
              conforto e personalidade para a sua vida.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nossa filosofia é simples: transformar materiais simples em obras de arte 
              que contam histórias. Cada ponto, cada detalhe é pensado para criar 
              algo verdadeiramente especial e duradouro.
            </p>

            <Button variant="premium" size="lg">
              Conheça Nossa Jornada
            </Button>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card hover-lift group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-mint w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;