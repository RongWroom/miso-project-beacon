
import { useEffect } from 'react'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import ServiceSection from '@/components/service-section'
import AboutSection from '@/components/about-section'
import ProjectsSection from '@/components/projects-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'
// Remove duplicate font import as it's already in main.tsx

const Index = () => {
  // Enable smooth scrolling
  useEffect(() => {
    // Add event listener to handle smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-miso-black overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
