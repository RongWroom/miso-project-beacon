import { Card, CardContent } from "./ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#e9eee9] grid-pattern">
      {/* Flowing accent shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-32 h-32 bg-miso-yellow rounded-xl opacity-10 rotate-12" />
        <div className="absolute bottom-0 right-1/3 w-48 h-12 bg-miso-platinum rounded-full opacity-20 rotate-6" />
      </div>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Visual/Stats */}
          <div className="relative animate-slide-up">
            <Card className="w-full aspect-square max-w-md mx-auto bg-white/90 shadow-xl rounded-3xl border-0 flex items-center justify-center">
              <CardContent className="flex flex-col items-center justify-center h-full gap-6">
                <div className="text-6xl">📈</div>
                <div className="text-2xl font-bold text-miso-black">Data-Driven</div>
                <div className="text-base text-center text-miso-black/70 max-w-xs">
                  Making decisions backed by real insights
                </div>
              </CardContent>
            </Card>
            {/* Accent shape */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-miso-yellow/20 rounded-full blur-md" />
          </div>
          {/* Right: Content */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <span className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-miso-yellow/20 text-miso-black/70 uppercase tracking-widest text-xs font-semibold shadow-sm">
              <svg width={20} height={20} fill="none" viewBox="0 0 24 24"><circle cx={12} cy={12} r={10} fill="#ffe066"/></svg>
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-miso-black">Taking Projects from Idea to Reality</h2>
            <p className="text-lg mb-6 text-miso-black/70">
              At MISO ANALYTICS, we specialize in helping individuals and small businesses 
              navigate the complex journey from concept to successful execution.
            </p>
            <p className="text-lg mb-8 text-miso-black/70">
              Our team combines strategic planning expertise with data analytics capabilities, 
              ensuring every project is both visionary and actionable.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 text-miso-black/80"><span className="text-miso-yellow">●</span> Strategic Planning</li>
              <li className="flex items-center gap-2 text-miso-black/80"><span className="text-miso-yellow">●</span> Data Analytics</li>
              <li className="flex items-center gap-2 text-miso-black/80"><span className="text-miso-yellow">●</span> Impact-Driven Results</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
