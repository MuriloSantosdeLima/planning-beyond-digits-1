import { Quote } from "lucide-react";

const PurposeSection = () => {
  return (
    <section className="py-section bg-neutral-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-planning-green/20 rounded-full mb-6">
              <Quote className="w-8 h-8 text-planning-green" />
            </div>
            <h2 className="text-sm font-semibold text-planning-green uppercase tracking-wider mb-6">
              NOSSO PROPÓSITO
            </h2>
          </div>

          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight mb-8">
            "Gerar informações de{" "}
            <span className="text-planning-green">valor</span>{" "}
            para tomada de decisões{" "}
            <span className="text-planning-green">relevantes</span>."
          </blockquote>

          <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
            Nosso compromisso é transformar dados em insights estratégicos que 
            impulsionam o crescimento sustentável dos nossos clientes, 
            garantindo segurança jurídica e eficiência operacional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;