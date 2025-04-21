import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#e9eee9] grid-pattern">
      {/* Flowing accent shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-32 h-32 bg-miso-yellow rounded-xl opacity-10 rotate-12" />
        <div className="absolute bottom-0 left-0 w-48 h-12 bg-miso-platinum rounded-full opacity-20 rotate-6" />
      </div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Left: Contact Info */}
          <div className="w-full md:w-1/2 animate-slide-up">
            <span className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-miso-yellow/20 text-miso-black/70 uppercase tracking-widest text-xs font-semibold shadow-sm">
              <svg width={20} height={20} fill="none" viewBox="0 0 24 24"><circle cx={12} cy={12} r={10} fill="#ffe066"/></svg>
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-miso-black">Ready to Start Your Project?</h2>
            <p className="text-lg mb-8 text-miso-black/70">
              Whether you're just starting out or looking to optimize your current project, we're here to help you achieve your goals. Let's discuss how we can work together.
            </p>
            <div className="space-y-6 mb-8">
              <Card className="rounded-2xl shadow-md bg-white/90 backdrop-blur-sm border-0">
                <CardContent className="flex items-center gap-4 py-6 px-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-miso-yellow/20 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-miso-black">Email Us</h3>
                    <p className="text-miso-black/70">hello@misoanalytics.com</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-md bg-white/90 backdrop-blur-sm border-0">
                <CardContent className="flex items-center gap-4 py-6 px-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-miso-yellow/20 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-miso-black">Call Us</h3>
                    <p className="text-miso-black/70">+1 (555) 123-4567</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-md bg-white/90 backdrop-blur-sm border-0">
                <CardContent className="flex items-center gap-4 py-6 px-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-miso-yellow/20 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-miso-black">Visit Us</h3>
                    <p className="text-miso-black/70">123 Main St, City, Country</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Button size="lg" className="shadow-lg mt-8">Contact Us</Button>
          </div>
          {/* Right: Contact Form */}
          <div className="w-full md:w-1/2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Card className="rounded-2xl shadow-md bg-white/90 backdrop-blur-sm border-0">
              <CardContent className="py-10 px-8">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-miso-black mb-1">Name</label>
                    <input type="text" id="name" className="w-full rounded-lg border border-miso-platinum px-4 py-3 text-base focus:ring-miso-yellow focus:border-miso-yellow transition" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-miso-black mb-1">Email</label>
                    <input type="email" id="email" className="w-full rounded-lg border border-miso-platinum px-4 py-3 text-base focus:ring-miso-yellow focus:border-miso-yellow transition" placeholder="you@email.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-miso-black mb-1">Message</label>
                    <textarea id="message" rows={5} className="w-full rounded-lg border border-miso-platinum px-4 py-3 text-base focus:ring-miso-yellow focus:border-miso-yellow transition" placeholder="How can we help you?" />
                  </div>
                  <Button type="submit" size="lg" className="w-full shadow-lg">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
