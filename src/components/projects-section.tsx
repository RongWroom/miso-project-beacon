
import { ButtonClay } from './ui/button-clay'

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
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden grid-pattern">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="animate-slide-up"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="h-1 w-12 bg-miso-yellow mr-4" />
              <span className="text-miso-black/70 uppercase tracking-widest text-sm font-medium">Case Studies</span>
              <div className="h-1 w-12 bg-miso-yellow ml-4" />
            </div>
            
            <h2 className="section-title">Our Recent Projects</h2>
            <p className="section-subtitle">
              We've helped numerous clients achieve success with their projects. 
              Here are some examples of our recent work.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`service-card overflow-hidden ${project.color} animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <span className="inline-block bg-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-miso-black/70 mb-6 flex-grow">{project.description}</p>
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center text-miso-black font-medium hover:text-miso-yellow transition-colors">
                    View case study
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
          className="text-center mt-12 animate-slide-up"
          style={{ animationDelay: '0.6s' }}
        >
          <ButtonClay variant="primary" size="lg">
            View All Projects
          </ButtonClay>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
