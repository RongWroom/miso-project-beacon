import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Community Garden Planning",
    category: "Social Impact",
    description: "Strategic planning for a neighborhood community garden initiative that increased local food access.",
    color: "bg-miso-yellow/20",
  },
  {
    title: "Small Business Digital Transition",
    category: "Business Operations",
    description: "Helped a family business implement digital tools, resulting in 40% operational efficiency increase.",
    color: "bg-miso-platinum/30",
  },
  {
    title: "Nonprofit Fundraising Campaign",
    category: "Strategy & Analytics",
    description: "Data-driven campaign strategy that exceeded fundraising targets by 35% through targeted outreach.",
    color: "bg-miso-red/10",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#e9eee9] grid-pattern">
      {/* Flowing accent shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-miso-yellow rounded-xl opacity-10 rotate-12" />
        <div className="absolute bottom-0 right-1/4 w-48 h-12 bg-miso-platinum rounded-full opacity-20 rotate-6" />
      </div>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <span className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-miso-yellow/20 text-miso-black/70 uppercase tracking-widest text-xs font-semibold shadow-sm">
            <svg width={20} height={20} fill="none" viewBox="0 0 24 24"><circle cx={12} cy={12} r={10} fill="#ffe066"/></svg>
            Case Studies
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-miso-black">Our Recent Projects</h2>
          <p className="text-lg text-miso-black/70 mb-2">
            We've helped numerous clients achieve success with their projects. Here are some examples of our recent work.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`rounded-2xl shadow-md ${project.color} bg-white/90 backdrop-blur-sm border-0 animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="flex flex-col h-full py-8 px-6">
                <div className="mb-6">
                  <span className="inline-block bg-white px-3 py-1 rounded-full text-sm shadow-sm text-miso-black/80">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-miso-black">{project.title}</h3>
                <p className="text-miso-black/70 mb-6 flex-grow">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16 animate-slide-up">
          <Button size="lg" className="shadow-lg">View More Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
