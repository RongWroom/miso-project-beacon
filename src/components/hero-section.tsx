
import { ButtonClay } from './ui/button-clay'

export const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden grid-pattern">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -right-16 w-64 h-64 bg-miso-yellow rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-1/3 -left-16 w-64 h-64 bg-miso-red rounded-full opacity-10 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="flex flex-col items-start animate-slide-up"
          >
            <div className="flex items-center mb-6">
              <div className="h-1 w-12 bg-miso-yellow mr-4" />
              <span className="text-miso-black/70 uppercase tracking-widest text-sm font-medium">Data-Driven Projects</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Bring Your 
              <span className="relative inline-block mx-2">
                <span className="relative z-10">Ideas</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-miso-yellow/40 -z-0" />
              </span> 
              to Life
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-miso-black/70 max-w-lg">
              Strategic project management and data-driven insights for individuals and small businesses. We simplify complex processes and identify growth opportunities.
            </p>

            <div className="flex flex-wrap gap-4">
              <ButtonClay variant="primary">
                Start Your Project
              </ButtonClay>
              <ButtonClay variant="outline">
                Learn More
              </ButtonClay>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              {[
                { number: '10+', label: 'Years Experience' },
                { number: '200+', label: 'Projects Completed' },
                { number: '95%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="flex flex-col animate-slide-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <span className="text-3xl font-bold text-miso-black">{stat.number}</span>
                  <span className="text-sm text-miso-black/60">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="clay-morphism aspect-square max-w-md mx-auto relative overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-2 gap-4 p-4">
                <div 
                  className="bg-miso-yellow/20 rounded-lg animate-float"
                  style={{ animationDuration: '4s' }}
                />
                <div 
                  className="bg-miso-platinum/30 rounded-lg animate-float"
                  style={{ animationDuration: '3.5s', animationDelay: '0.2s' }}
                />
                <div 
                  className="bg-miso-red/10 rounded-lg animate-float"
                  style={{ animationDuration: '5s', animationDelay: '0.4s' }}
                />
                <div 
                  className="bg-miso-platinum/40 rounded-lg animate-float" 
                  style={{ animationDuration: '4.5s', animationDelay: '0.6s' }}
                />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-24 h-24 bg-miso-yellow rounded-2xl flex items-center justify-center animate-spin"
                  style={{ animationDuration: '20s', animationTimingFunction: 'linear' }}
                >
                  <div className="w-12 h-12 bg-white rounded-lg" />
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-miso-red/10 rounded-full" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-miso-yellow/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
