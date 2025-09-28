import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem enviada!",
        description: "Obrigada pelo contato. Retornaremos em breve!",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 99999-9999",
      subtitle: "WhatsApp disponível"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contato@celmabelasartes.com",
      subtitle: "Respondemos em 24h"
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "São Paulo, SP",
      subtitle: "Atendemos toda região"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg - Sex: 9h às 18h",
      subtitle: "Sáb: 9h às 14h"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Fale Conosco
          </span>
          <h2 className="font-script text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
            Vamos criar <span className="text-primary">juntos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tem uma ideia especial? Entre em contato conosco para transformar 
            sua visão em uma obra de arte única e personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-up">
              <h3 className="font-script text-2xl md:text-3xl font-bold text-foreground mb-6">
                Como nos encontrar
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Estamos sempre prontos para atender você da melhor forma possível. 
                Entre em contato através de qualquer um dos canais abaixo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-card hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-gradient-mint w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h4 className="font-semibold text-card-foreground mb-1">
                    {info.title}
                  </h4>
                  <p className="text-foreground font-medium mb-1">
                    {info.content}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {info.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-card animate-scale-in">
            <h3 className="font-script text-2xl md:text-3xl font-bold text-foreground mb-6">
              Envie sua mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome completo"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="subject">Assunto</Label>
                <Input
                  id="subject"
                  placeholder="Como podemos ajudar?"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message">Mensagem *</Label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos sobre sua ideia ou dúvida..."
                  rows={5}
                  required
                  className="mt-1 resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="premium"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              * Campos obrigatórios. Seus dados estão seguros conosco.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;