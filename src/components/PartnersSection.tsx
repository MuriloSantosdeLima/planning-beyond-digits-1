import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PartnersSection = () => {
  const partners = [
    {
      name: "Elton Silva",
      role: "Líder de Auditoria",
      bio: "Especialista em auditoria corporativa com mais de 15 anos de experiência em empresas de grande porte.",
      initials: "ES"
    },
    {
      name: "Fabio Baptista",
      role: "Sócio da Unidade RJ",
      bio: "Responsável pela expansão e operações da Planning no Rio de Janeiro, com foco em grandes corporações.",
      initials: "FB"
    },
    {
      name: "Pedro Araújo",
      role: "CEO",
      bio: "Fundador e CEO da Planning, lidera a estratégia de crescimento e inovação da empresa.",
      initials: "PA"
    },
    {
      name: "Tiago Macário",
      role: "Contabilidade",
      bio: "Especialista em contabilidade corporativa e planejamento tributário para empresas multissetoriais.",
      initials: "TM"
    },
    {
      name: "João Mateus Nogueira",
      role: "Assessor Societário, M&A",
      bio: "Expert em fusões, aquisições e reestruturações societárias, assessorando grandes transações.",
      initials: "JM"
    }
  ];

  return (
    <section className="py-section bg-white">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-planning-green uppercase tracking-wider mb-4">
            NOSSA LIDERANÇA
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-neutral-900 font-heading">
            Sócios
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-normal border-0 bg-neutral-50">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <Avatar className="w-24 h-24 border-4 border-planning-green/20">
                    <AvatarImage src="#" alt={partner.name} />
                    <AvatarFallback className="text-2xl font-bold bg-planning-green text-white">
                      {partner.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-neutral-900 font-heading mb-2">
                    {partner.name}
                  </h4>
                  <p className="text-planning-green font-semibold mb-4">
                    {partner.role}
                  </p>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {partner.bio}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;