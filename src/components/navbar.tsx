
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { ButtonClay } from '@/components/ui/button-clay'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out py-4 px-6",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div 
            className="w-10 h-10 bg-miso-yellow rounded-lg transition-transform duration-500"
            style={{ transform: isScrolled ? 'rotate(45deg)' : 'rotate(0)' }}
          />
          <span 
            className="text-xl font-bold tracking-tight"
          >
            MISO ANALYTICS
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a 
              key={link.name}
              href={link.href}
              className="relative text-miso-black font-medium transition-colors hover:text-miso-yellow group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-miso-yellow transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <ButtonClay variant="primary">
            Get Started
          </ButtonClay>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-miso-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={cn(
              "w-full h-0.5 bg-miso-black block transition-transform", 
              isOpen && "absolute top-2 rotate-45"
            )} />
            <span className={cn(
              "w-full h-0.5 bg-miso-black block transition-opacity", 
              isOpen && "opacity-0"
            )} />
            <span className={cn(
              "w-full h-0.5 bg-miso-black block transition-transform", 
              isOpen && "absolute top-2 -rotate-45"
            )} />
          </div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-x-0 bg-white shadow-xl p-6 md:hidden transition-all duration-300",
          isOpen ? "opacity-100 h-auto" : "opacity-0 h-0 overflow-hidden"
        )}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map(link => (
            <a 
              key={link.name}
              href={link.href}
              className="text-miso-black font-medium py-2 border-b border-miso-platinum/30"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <ButtonClay variant="primary" className="mt-4">
            Get Started
          </ButtonClay>
        </div>
      </div>
    </header>
  )
}

export default Navbar
