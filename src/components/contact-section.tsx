
import { ButtonClay } from './ui/button-clay'

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-miso-yellow rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-miso-platinum rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div
            className="w-full md:w-1/2 animate-slide-up"
          >
            <div className="flex items-center mb-6">
              <div className="h-1 w-12 bg-miso-yellow mr-4" />
              <span className="text-miso-black/70 uppercase tracking-widest text-sm font-medium">Get In Touch</span>
            </div>
            
            <h2 className="section-title">Ready to Start Your Project?</h2>
            
            <p className="text-lg mb-8 text-miso-black/70">
              Whether you're just starting out or looking to optimize your current project, 
              we're here to help you achieve your goals. Let's discuss how we can work together.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-miso-yellow/20 rounded-lg mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Email Us</h3>
                  <p className="text-miso-black/70">hello@misoanalytics.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-miso-yellow/20 rounded-lg mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Call Us</h3>
                  <p className="text-miso-black/70">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-miso-yellow/20 rounded-lg mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Visit Us</h3>
                  <p className="text-miso-black/70">123 Analytics Street, Data City, 98765</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'linkedin', 'instagram'].map((social, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white shadow-claymorphism flex items-center justify-center hover:bg-miso-yellow/20 transition-colors">
                  <span className="sr-only">{social}</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div
            className="w-full md:w-1/2 animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="clay-morphism w-full h-full">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-miso-platinum/30 focus:outline-none focus:ring-2 focus:ring-miso-yellow/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-miso-platinum/30 focus:outline-none focus:ring-2 focus:ring-miso-yellow/50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-miso-platinum/30 focus:outline-none focus:ring-2 focus:ring-miso-yellow/50"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-miso-platinum/30 focus:outline-none focus:ring-2 focus:ring-miso-yellow/50"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <ButtonClay variant="primary" className="w-full">
                  Send Message
                </ButtonClay>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
