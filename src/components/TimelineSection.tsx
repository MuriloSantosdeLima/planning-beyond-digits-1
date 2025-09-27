import { Card } from "@/components/ui/card";
import { Calendar, Users, Award, TrendingUp } from "lucide-react";
import teamLargeGroup from "@/assets/team-large-group.jpg";

const TimelineSection = () => {
  const timelineEvents = [
    {
      year: "2008",
      title: "Fundação",
      description: "Início das atividades com foco em atendimento personalizado",
      icon: Calendar
    },
    {
      year: "2015",
      title: "Expansão dos Serviços",
      description: "Ampliação da carteira de clientes e serviços especializados",
      icon: Users,
      featured: true
    },
    {
      year: "2020",
      title: "Digitalização Completa",
      description: "Modernização total dos processos e atendimento 100% digital",
      icon: Award
    },
    {
      year: "2024",
      title: "Consolidação",
      description: "Referência em contabilidade com mais de 500 clientes ativos",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-section bg-white">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-planning-green uppercase tracking-wider mb-4">
            NOSSA JORNADA
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-neutral-900 font-heading">
            Nossa <span className="text-planning-green">História</span>
          </h3>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-neutral-200"></div>

          <div className="space-y-12 lg:space-y-24">
            {timelineEvents.map((event, index) => (
              <div key={event.year} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content Card */}
                <div className="flex-1 w-full lg:w-auto">
                  <Card className={`p-8 ${event.featured ? 'border-planning-green bg-planning-green/5' : 'border-neutral-200'} hover:shadow-lg transition-all duration-normal`}>
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${event.featured ? 'bg-planning-green text-white' : 'bg-neutral-100 text-neutral-600'}`}>
                        <event.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-planning-green mb-2">
                          {event.year}
                        </h4>
                        <h5 className="text-xl font-semibold text-neutral-900 mb-3">
                          {event.title}
                        </h5>
                        <p className="text-neutral-600 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Year Badge */}
                <div className="hidden lg:block flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg ${event.featured ? 'bg-planning-green scale-110' : 'bg-neutral-400'} shadow-lg`}>
                    {event.year.slice(-2)}
                  </div>
                </div>

                {/* Featured Image */}
                {event.featured && (
                  <div className="flex-1 w-full lg:w-auto">
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={teamLargeGroup}
                        alt="Planning Team 2021"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}

                {/* Spacer for non-featured events */}
                {!event.featured && <div className="hidden lg:block flex-1"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;