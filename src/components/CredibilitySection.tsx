import { Button } from "@/components/ui/button";
import { Shield, Globe, Award, ArrowRight } from "lucide-react";
import credibilityBg from "@/assets/credibility-bg.jpg";

const CredibilitySection = () => {
  return (
    <section className="py-section bg-neutral-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={credibilityBg}
          alt="Credibility Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-semibold text-planning-green uppercase tracking-wider mb-4">
                QUALIDADE COMPROVADA
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-neutral-900 font-heading mb-6">
                Confiança e{" "}
                <span className="text-planning-green">Credibilidade</span>
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Com registro no <strong>CRC</strong> e certificações profissionais, 
                oferecemos serviços contábeis com total segurança jurídica. 
                Nossa expertise e comprometimento garantem a tranquilidade 
                que sua empresa precisa para crescer com solidez.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-planning-green/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-planning-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    Registro CRC
                  </h4>
                  <p className="text-sm text-neutral-600">
                    Profissional habilitada e regularizada
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-planning-green/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-planning-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    Atualização Constante
                  </h4>
                  <p className="text-sm text-neutral-600">
                    Educação continuada e conhecimento atualizado
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-planning-green/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-planning-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    Resultados Comprovados
                  </h4>
                  <p className="text-sm text-neutral-600">
                    15+ anos de experiência e clientes satisfeitos
                  </p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg" className="group">
              Saiba mais
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-fast" />
            </Button>
          </div>

          {/* Logo/Visual Element */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-planning rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="text-4xl font-bold text-neutral-900 font-heading mb-2">
                      Lucimara
                    </h4>
                    <div className="w-16 h-0.5 bg-planning-green mx-auto mb-4"></div>
                    <p className="text-planning-green font-semibold text-lg">
                      Rocha
                    </p>
                    <p className="text-neutral-600 text-sm">
                      Contabilidade
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-planning-green rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-planning-green/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;