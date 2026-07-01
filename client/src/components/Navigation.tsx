import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [logoExists, setLogoExists] = useState(true);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about-us' },
    { label: 'Services', href: '#our-services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Recognition', href: '#testimonials' },
    { label: 'Connect', href: '#connect' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-800 ease-in-out text-white flex items-center ${
          isSticky
            ? 'bg-navy/40 backdrop-blur-md shadow-md h-[60px] md:h-[80px] border-b border-white/10'
            : 'bg-gradient-to-b from-black/50 to-transparent h-[84px] md:h-[189px] border-b border-white/20'
        }`}
      >
        <div className="container flex items-center justify-between relative h-full">
          {/* Left: Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 cursor-pointer focus:outline-none group"
            aria-label="Open Menu"
          >
            <i className="fa-solid fa-bars text-xl group-hover:text-gold transition-colors duration-300"></i>
            <span className="text-sm font-light tracking-widest group-hover:text-gold transition-colors duration-300 hidden sm:inline">
              MENU
            </span>
          </button>

          {/* Center: Brand Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center h-full justify-center">
            <Link href="/" className="h-full flex items-center">
              <div className="cursor-pointer flex items-center justify-center h-full">
                {logoExists ? (
                    <img
                      src="/shreeji-infra-logo.png"
                      alt="Shreeji Infra Logo"
                      className="h-[70%] w-auto object-contain transition-all duration-800 ease-in-out"
                      onError={() => setLogoExists(false)}
                    />
                ) : (
                  <span className="font-serif text-2xl tracking-widest font-light hover:text-gold transition-colors duration-300">
                    LOGO
                  </span>
                )}
              </div>
            </Link>
          </div>

          {/* Right: Language and Social Links */}
          <div className="flex items-center gap-6">
            
            
            <a
              href="https://instagram.com/shreeji_infra.biz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors duration-300 text-lg"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </header>

      {/* Left Sliding Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop overlay */}
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-navy/50 backdrop-blur-sm"
        />

        {/* Drawer content */}
        <div
          className={`absolute top-0 left-0 h-full w-[88vw] sm:w-[385px] bg-navy/80 backdrop-blur-md border-r border-white/10 shadow-2xl p-8 flex flex-col justify-between transition-transform duration-500 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Close button */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-white hover:text-gold transition-colors duration-300 focus:outline-none"
              aria-label="Close Menu"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
              <span className="text-xs font-light tracking-widest">CLOSE</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="my-auto text-left py-12">
            <ul className="space-y-6">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-[22px] uppercase font-serif tracking-widest transition-all duration-300 ${
                        isActive
                          ? 'text-gold pl-2 border-l-2 border-gold font-normal'
                          : 'text-white/70 hover:text-white hover:translate-x-2'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Drawer footer info */}
          <div className="text-white/40 text-xs font-light border-t border-white/10 pt-6 space-y-2">
            <p className="font-serif text-white/60 tracking-wider">THE BNK GROUP STYLE</p>
            <p>Mumbai &bull; Dubai</p>
          </div>
        </div>
      </div>
    </>
  );
}
