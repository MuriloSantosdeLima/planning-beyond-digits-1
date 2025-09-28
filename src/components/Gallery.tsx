import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "Todos" },
    { id: "flowers", name: "Flores" },
    { id: "accessories", name: "Acessórios" },
    { id: "decor", name: "Decoração" },
    { id: "toys", name: "Brinquedos" }
  ];

  // Placeholder for gallery items - would be replaced with real images
  const galleryItems = [
    {
      id: 1,
      title: "Flores de Crochê Delicadas",
      category: "flowers",
      description: "Conjunto de flores artesanais em tons pastéis"
    },
    {
      id: 2,
      title: "Acessórios Personalizados",
      category: "accessories",
      description: "Bolsas e carteiras únicas feitas à mão"
    },
    {
      id: 3,
      title: "Decoração para Casa",
      category: "decor",
      description: "Peças decorativas que transformam ambientes"
    },
    {
      id: 4,
      title: "Brinquedos Artesanais",
      category: "toys",
      description: "Brinquedos seguros e educativos para crianças"
    },
    {
      id: 5,
      title: "Arranjos Florais",
      category: "flowers",
      description: "Composições florais para ocasiões especiais"
    },
    {
      id: 6,
      title: "Itens Decorativos",
      category: "decor",
      description: "Objetos únicos para decoração de interiores"
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Nossa Coleção
          </span>
          <h2 className="font-script text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
            Galeria de <span className="text-primary">Criações</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra algumas de nossas peças mais especiais. Cada criação é única 
            e feita com todo o carinho e dedicação que nosso trabalho merece.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "premium" : "elegant"}
              size="sm"
              onClick={() => setActiveFilter(category.id)}
              className="transition-all duration-300"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-card hover-lift">
                {/* Placeholder for image */}
                <div className="aspect-square bg-gradient-cream flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-mint opacity-20"></div>
                  <div className="text-center z-10">
                    <div className="w-16 h-16 bg-gradient-golden rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-2xl">✨</span>
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      {item.title}
                    </p>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="elegant" size="sm">
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-card-foreground">
                      {item.title}
                    </h3>
                    <Badge variant="secondary" className="ml-2">
                      {categories.find(c => c.id === item.category)?.name}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="premium" size="lg">
            Ver Toda a Coleção
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;