import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden bg-[#e9eee9]">
      {/* Accent geometric shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-12 left-8 w-16 h-16 bg-miso-yellow rounded-lg opacity-20 rotate-12" />
        <div className="absolute bottom-24 right-10 w-24 h-24 bg-miso-red rounded-xl opacity-10 rotate-6" />
        <div className="absolute top-1/3 right-1/4 w-32 h-6 bg-miso-platinum rounded-full opacity-30" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="flex flex-col items-start animate-slide-up">
            <span className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-miso-yellow/20 text-miso-black/70 uppercase tracking-widest text-xs font-semibold shadow-sm">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#ffe066"/></svg>
              Data-Driven Projects
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-miso-black">
              Bring Your
              <span className="relative inline-block mx-2">
                <span className="relative z-10">Ideas</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-miso-yellow/40 -z-0 rounded" />
              </span>
              to Life
            </h1>
            <p className="text-lg md:text-xl mb-8 text-miso-black/70 max-w-lg">
              Strategic project management and data-driven insights for individuals and small businesses. We simplify complex processes and identify growth opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="shadow-lg">Start Your Project</Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              {[
                { number: '10+', label: 'Years Experience' },
                { number: '200+', label: 'Projects Completed' },
                { number: '95%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <Card key={index} className="rounded-2xl shadow-md bg-white/80 backdrop-blur-sm">
                  <CardContent className="flex flex-col items-center py-6">
                    <span className="text-3xl font-bold text-miso-black">{stat.number}</span>
                    <span className="text-xs text-miso-black/60 mt-1">{stat.label}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/* Right: Visuals */}
          <div className="relative flex justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Card className="aspect-square max-w-md w-full mx-auto p-0 overflow-visible bg-white/90 shadow-xl rounded-3xl border-0">
              <CardContent className="flex items-center justify-center h-full p-0 relative">
                {/* Simulated can/product visual */}
                <div className="relative w-52 h-64 flex items-center justify-center">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-miso-yellow/30 rounded-full blur-sm" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-8 bg-miso-red/20 rounded-full blur-md" />
                  <div className="relative z-10 w-40 h-56 bg-gradient-to-tr from-miso-platinum via-white to-miso-yellow rounded-2xl shadow-2xl flex items-center justify-center border border-miso-platinum">
                    <span className="font-extrabold text-3xl text-miso-black/70 tracking-widest rotate-12">RIDGED</span>
                  </div>
                </div>
                {/* Accent floating shapes */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-miso-yellow/30 rounded-lg animate-float" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-8 left-4 w-6 h-6 bg-miso-red/20 rounded-lg animate-float" style={{ animationDuration: '3.5s', animationDelay: '0.2s' }} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
