import { Card, CardContent } from "./ui/card";

export const Footer = () => {
  return (
    <footer className="py-16 relative overflow-hidden border-t border-miso-platinum/30 bg-[#f5f8f6]">
      {/* Flowing accent shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-miso-yellow rounded-xl opacity-10 rotate-12" />
        <div className="absolute bottom-0 right-1/4 w-48 h-12 bg-miso-platinum rounded-full opacity-20 rotate-6" />
      </div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-miso-yellow rounded-lg" />
              <span className="text-xl font-bold tracking-tight">MISO ANALYTICS</span>
            </div>
            <p className="text-miso-black/70 mb-8 max-w-md">
              Strategic project management and data-driven insights for individuals and small businesses.
              We simplify complex processes and identify growth opportunities.
            </p>
            <div className="flex space-x-4">
              {["twitter", "facebook", "linkedin", "instagram"].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-miso-yellow/20 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx={12} cy={12} r={10} fill="#ffe066" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                "Project Management",
                "Social Impact Consulting",
                "Risk Assessment",
                "Project Tools Setup",
                "Data Analysis",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-miso-black/70 hover:text-miso-yellow transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Case Studies",
                "Blog",
                "Careers",
                "Contact",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-miso-black/70 hover:text-miso-yellow transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Subscribe</h3>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-lg border border-miso-platinum px-4 py-3 text-base focus:ring-miso-yellow focus:border-miso-yellow transition bg-white"
              />
              <button
                type="submit"
                className="rounded-lg bg-miso-yellow text-miso-black font-bold py-3 px-4 shadow-md hover:bg-miso-yellow/90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 text-center text-miso-black/60 text-sm">
          &copy; {new Date().getFullYear()} MISO Analytics. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
