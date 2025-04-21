import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

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
    <section id="services" className="py-24 relative overflow-hidden bg-[#f5f8f6]">
      {/* Flowing accent shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-miso-yellow rounded-xl opacity-10 rotate-12" />
        <div className="absolute bottom-0 right-1/4 w-48 h-12 bg-miso-platinum rounded-full opacity-20 rotate-6" />
      </div>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <span className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-miso-yellow/20 text-miso-black/70 uppercase tracking-widest text-xs font-semibold shadow-sm">
            <svg width={20} height={20} fill="none" viewBox="0 0 24 24"><circle cx={12} cy={12} r={10} fill="#ffe066"/></svg>
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-miso-black">How We Can Help You</h2>
          <p className="text-lg text-miso-black/70 mb-2">
            We offer comprehensive services designed to help you manage your projects efficiently and achieve meaningful, real-world results.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto mb-16 animate-slide-up">
          {services.map((service, idx) => (
            <Card key={service.title} className="rounded-2xl shadow-md bg-white/90 backdrop-blur-sm border-0">
              <CardContent className="flex flex-col md:flex-row items-center gap-6 py-8 px-6">
                <div className="flex-shrink-0 text-4xl md:text-5xl">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-miso-black">{service.title}</h3>
                  <p className="text-miso-black/70 text-base">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center animate-slide-up">
          <Button size="lg" className="shadow-lg">See All Services</Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
