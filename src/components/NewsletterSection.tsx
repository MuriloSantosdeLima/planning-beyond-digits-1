import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Building, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha pelo menos o nome e e-mail.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Newsletter subscription:", formData);
    
    toast({
      title: "Inscrição realizada!",
      description: "Obrigado por se inscrever em nossa newsletter.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: ""
    });
  };

  return (
    <section className="py-section bg-gradient-planning">
      <div className="max-w-container mx-auto px-6">
        <Card className="p-8 lg:p-12 bg-white shadow-2xl border-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-planning-green/10 rounded-full mb-6">
                  <Mail className="w-8 h-8 text-planning-green" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 font-heading mb-4">
                  Assine a nossa{" "}
                  <span className="text-planning-green">Newsletter!</span>
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Receba insights exclusivos sobre contabilidade corporativa, 
                  tributação, compliance e as últimas tendências do mercado 
                  diretamente em sua caixa de entrada.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-planning-green">500+</div>
                  <div className="text-sm text-neutral-600">Empresas Atendidas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-planning-green">15+</div>
                  <div className="text-sm text-neutral-600">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-planning-green">98%</div>
                  <div className="text-sm text-neutral-600">Satisfação Cliente</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <Input
                      type="text"
                      name="name"
                      placeholder="Nome completo"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-10 h-12 border-neutral-200 focus:border-planning-green"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <Input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 h-12 border-neutral-200 focus:border-planning-green"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Telefone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="pl-10 h-12 border-neutral-200 focus:border-planning-green"
                    />
                  </div>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <Input
                      type="text"
                      name="company"
                      placeholder="Empresa"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="pl-10 h-12 border-neutral-200 focus:border-planning-green"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full sm:w-auto"
                >
                  Inscrever-se na Newsletter
                </Button>

                <p className="text-xs text-neutral-500 leading-relaxed">
                  Ao se inscrever, você concorda em receber e-mails da Planning. 
                  Você pode cancelar a inscrição a qualquer momento.
                </p>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSection;