
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div
            className="relative animate-slide-up"
          >
            <div className="clay-morphism w-full aspect-square max-w-md mx-auto relative z-10">
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3 p-4">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-lg animate-pulse-slow ${
                      i % 3 === 0 ? 'bg-miso-yellow/30' : 
                      i % 3 === 1 ? 'bg-miso-platinum/40' : 'bg-miso-red/10'
                    }`}
                    style={{ 
                      animationDuration: `${3 + (i % 3) * 1.2}s`, 
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>
            </div>
            
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xs animate-float"
              style={{ animationDuration: '10s' }}
            >
              <div className="clay-morphism bg-white/70 backdrop-blur-sm py-6 px-8 flex flex-col items-center">
                <div className="text-5xl mb-3">📈</div>
                <div className="text-xl font-bold">Data-Driven</div>
                <div className="text-sm text-center text-miso-black/70 mt-2">
                  Making decisions backed by real insights
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-miso-yellow/20 rounded-full blur-md" />
          </div>

          <div
            className="animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="flex items-center mb-6">
              <div className="h-1 w-12 bg-miso-yellow mr-4" />
              <span className="text-miso-black/70 uppercase tracking-widest text-sm font-medium">Who We Are</span>
            </div>
            
            <h2 className="section-title">Taking Projects from Idea to Reality</h2>
            
            <p className="text-lg mb-6 text-miso-black/70">
              At MISO ANALYTICS, we specialize in helping individuals and small businesses 
              navigate the complex journey from concept to successful execution.
            </p>
            
            <p className="text-lg mb-8 text-miso-black/70">
              Our team combines strategic planning expertise with data analytics capabilities, 
              particularly focusing on socially impactful projects. We believe that with the 
              right guidance and tools, any idea can be transformed into meaningful results.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { label: "Strategic Planning", value: "100%" },
                { label: "Data Analysis", value: "98%" },
                { label: "Risk Assessment", value: "95%" },
                { label: "Project Management", value: "100%" },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="animate-slide-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{stat.label}</span>
                    <span className="text-miso-yellow font-bold">{stat.value}</span>
                  </div>
                  <div className="h-2 bg-miso-platinum/50 rounded-full w-full overflow-hidden">
                    <div 
                      className="h-full bg-miso-yellow rounded-full transition-all duration-1500"
                      style={{ width: stat.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
