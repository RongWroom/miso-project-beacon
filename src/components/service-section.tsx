
import { ButtonClay } from './ui/button-clay'

const services = [
  {
    title: "Project Management",
    description: "Develop clear project plans, timelines, and workflows to keep your ideas on track.",
    icon: "📊",
  },
  {
    title: "Consulting for Social Impact",
    description: "Strategic guidance tailored to projects that drive positive change in communities.",
    icon: "🌱",
  },
  {
    title: "Risk Assessment",
    description: "Identify potential risks early and create practical strategies to manage them effectively.",
    icon: "🛡️",
  },
  {
    title: "Project Tools Setup",
    description: "Help you implement and optimise tools like Trello and Google Workspace to streamline project management.",
    icon: "🔧",
  },
]

export const ServiceSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-miso-yellow rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-miso-platinum rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="animate-slide-up"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="h-1 w-12 bg-miso-yellow mr-4" />
              <span className="text-miso-black/70 uppercase tracking-widest text-sm font-medium">Our Services</span>
              <div className="h-1 w-12 bg-miso-yellow ml-4" />
            </div>
            
            <h2 className="section-title">How We Can Help You</h2>
            <p className="section-subtitle">
              We offer comprehensive services designed to help you manage your projects efficiently 
              and achieve meaningful, real-world results.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <span className="text-4xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-miso-black/70 mb-6">{service.description}</p>
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center text-miso-black font-medium hover:text-miso-yellow transition-colors">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="text-center animate-slide-up"
          style={{ animationDelay: '0.6s' }}
        >
          <ButtonClay variant="primary" size="lg">
            View All Services
          </ButtonClay>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
