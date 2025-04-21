
import { ButtonClay } from "./ui/button-clay";

const services = [
  {
    title: "Project Management",
    description:
      "Develop clear project plans, timelines, and workflows to keep your ideas on track.",
    icon: "📊",
  },
  {
    title: "Consulting for Social Impact",
    description:
      "Strategic guidance tailored to projects that drive positive change in communities.",
    icon: "🌱",
  },
  {
    title: "Risk Assessment",
    description:
      "Identify potential risks early and create practical strategies to manage them effectively.",
    icon: "🛡️",
  },
  {
    title: "Project Tools Setup",
    description:
      "Help you implement and optimise tools like Trello and Google Workspace to streamline project management.",
    icon: "🔧",
  },
];

export const ServiceSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-miso-yellow rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-miso-platinum rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="animate-slide-up">
            <div className="flex items-center justify-center mb-6">
              <div className="h-1 w-12 bg-miso-yellow mr-4" />
              <span className="text-miso-black/70 uppercase tracking-widest text-sm font-medium">
                Our Services
              </span>
              <div className="h-1 w-12 bg-miso-yellow ml-4" />
            </div>

            <h2 className="section-title">How We Can Help You</h2>
            <p className="section-subtitle">
              We offer comprehensive services designed to help you manage your projects efficiently 
              and achieve meaningful, real-world results.
            </p>
          </div>
        </div>

        <ol className="max-w-2xl mx-auto space-y-10 text-left mb-16 animate-slide-up">
          {services.map((service, idx) => (
            <li key={service.title} className="flex items-start gap-4">
              {/* Icon can be omitted or made small since it's text based */}
              <span className="mt-1 text-2xl" aria-hidden="true">{service.icon}</span>
              <div>
                <h3 className="font-semibold text-xl mb-1">{service.title}</h3>
                <p className="text-miso-black/80">{service.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="text-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <ButtonClay variant="primary" size="lg">
            View All Services
          </ButtonClay>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
