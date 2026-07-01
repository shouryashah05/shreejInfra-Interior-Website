import { useState } from 'react';
import { Instagram, Facebook, Linkedin, Youtube, Pin, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Accordion state for locations
  const [activeLocation, setActiveLocation] = useState<'mumbai' | 'dubai' | null>('mumbai');

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', mobile: '', message: '' });
      setFormSubmitted(false);
      alert('Thank you! Your query has been submitted.');
    }, 1500);
  };

  const toggleLocation = (loc: 'mumbai' | 'dubai') => {
    if (activeLocation === loc) {
      setActiveLocation(null);
    } else {
      setActiveLocation(loc);
    }
  };

  return (
    <footer id="connect" className="bg-navy text-white mt-auto">
      
      {/* 1. Contact Us Block (secondaryFooter) */}
      <div className="border-b border-white/10 py-16 md:py-24 bg-navy">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side: Door Graphic */}
            <div className="hidden md:block fade-in-up">
              <img
                loading="lazy"
                src="https://thebnkgroup.com/assets/images/door.webp"
                alt="Luxury Entrance"
                className="w-full max-h-[500px] object-contain mx-auto"
                width="400"
                height="500"
              />
            </div>

            {/* Right side: Elegant Form */}
            <div className="fade-in-up">
              <div className="max-w-md mx-auto md:mx-0">
                <h3 className="text-2xl sm:text-3xl font-serif tracking-wider uppercase mb-8 text-gold">
                  Contact Us
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="relative border-b border-white/40 pb-2 focus-within:border-gold transition-colors duration-300">
                    <input
                      type="text"
                      name="name"
                      placeholder="YOUR NAME"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-0 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-0 uppercase tracking-wider"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative border-b border-white/40 pb-2 focus-within:border-gold transition-colors duration-300">
                    <input
                      type="email"
                      name="email"
                      placeholder="YOUR EMAIL"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-0 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-0 uppercase tracking-wider"
                    />
                  </div>

                  {/* Mobile Input */}
                  <div className="relative border-b border-white/40 pb-2 focus-within:border-gold transition-colors duration-300">
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="YOUR NUMBER"
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10 digit number"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-0 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-0 uppercase tracking-wider"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="relative border-b border-white/40 pb-2 focus-within:border-gold transition-colors duration-300">
                    <textarea
                      name="message"
                      placeholder="YOUR MESSAGE"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-0 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-0 uppercase tracking-wider resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={formSubmitted}
                      className="btnA btn-secondary cursor-pointer shadow-lg w-full sm:w-auto text-center"
                    >
                      <span>{formSubmitted ? 'SUBMITTING...' : 'SUBMIT QUERY'}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Directory */}
      <div className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
            
            {/* Column 1: Logo & Brand */}
            <div className="lg:col-span-1">
              <a href="#home" className="inline-block mb-4">
                <img
                  src="/logo.svg"
                  alt="Logo"
                  className="h-12 w-auto object-contain brightness-0 invert"
                  onError={(e) => {
                    // Fallback to text logo if svg does not exist
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="font-serif text-xl tracking-widest text-gold uppercase block">
                  THE BNK GROUP
                </span>
              </a>
            </div>

            {/* Column 2: Accordion Locations */}
            <div className="lg:col-span-1">
              <h4 className="text-xs uppercase tracking-widest font-semibold mb-6 text-gold">
                CONTACT US
              </h4>
              <div className="space-y-4">
                {/* Mumbai Header */}
                <div>
                  <button
                    onClick={() => toggleLocation('mumbai')}
                    className="flex justify-between items-center w-full text-left font-serif text-sm border-b border-white/10 pb-2 hover:text-gold transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <i className="fa-solid fa-location-dot text-gold text-xs"></i> Mumbai
                    </span>
                    {activeLocation === 'mumbai' ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                  
                  {activeLocation === 'mumbai' && (
                    <div className="mt-2 text-xs font-light text-white/75 leading-relaxed space-y-2">
                      <p className="font-semibold text-white">The BNK Group</p>
                      
                      <p>P: +91 22 6610 0312/13</p>
                      <a href="mailto:info@thebnkgroup.com" className="text-gold hover:underline block">
                        info@thebnkgroup.com
                      </a>
                    </div>
                  )}
                </div>

                {/* Dubai Header */}
                <div>
                  <button
                    onClick={() => toggleLocation('dubai')}
                    className="flex justify-between items-center w-full text-left font-serif text-sm border-b border-white/10 pb-2 hover:text-gold transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <i className="fa-solid fa-location-dot text-gold text-xs"></i> Dubai
                    </span>
                    {activeLocation === 'dubai' ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>

                  {activeLocation === 'dubai' && (
                    <div className="mt-2 text-xs font-light text-white/75 leading-relaxed space-y-2">
                      <p className="font-semibold text-white">DESIGN BNK</p>
                      <p>
                        602/603 API Business Suites,<br />
                        Sheikh Zayed Road,<br />
                        Dubai - UAE
                      </p>
                      <p>P: +971 58 514 5312</p>
                      <a href="mailto:info@thebnkgroup.com" className="text-gold hover:underline block">
                        info@thebnkgroup.com
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Column 3: Menu */}
            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold mb-6 text-gold">
                MENU
              </h4>
              <ul className="space-y-3 text-xs font-light text-white/75">
                <li><a href="#home" className="hover:text-gold transition-colors">HOME</a></li>
                <li><a href="#about-us" className="hover:text-gold transition-colors">ACHIEVING GREATNESS</a></li>
                <li><a href="#client-showcase" className="hover:text-gold transition-colors">FAQ</a></li>
                <li><a href="#connect" className="hover:text-gold transition-colors">CONNECT</a></li>
              </ul>
            </div>

            {/* Column 4: Projects */}
            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold mb-6 text-gold">
                PROJECTS
              </h4>
              <ul className="space-y-3 text-xs font-light text-white/75">
                <li><a href="#projects" className="hover:text-gold transition-colors">RESIDENTIAL</a></li>
                <li><a href="#projects" className="hover:text-gold transition-colors">HOSPITALITY</a></li>
                <li><a href="#projects" className="hover:text-gold transition-colors">WORKSPACES</a></li>
                <li><a href="#projects" className="hover:text-gold transition-colors">HEALTHCARE</a></li>
              </ul>
            </div>

            {/* Column 5: Locations */}
            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold mb-6 text-gold">
                LOCATIONS
              </h4>
              <ul className="space-y-3 text-xs font-light text-white/75 uppercase">
                <li><span className="hover:text-gold cursor-default transition-colors">Bangalore</span></li>
                <li><span className="hover:text-gold cursor-default transition-colors">Chennai</span></li>
                <li><span className="hover:text-gold cursor-default transition-colors">Goa</span></li>
                <li><span className="hover:text-gold cursor-default transition-colors">Hyderabad</span></li>
                <li><span className="hover:text-gold cursor-default transition-colors">Pune</span></li>
              </ul>
            </div>

            {/* Column 6: Follow Us */}
            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold mb-6 text-gold">
                FOLLOW US
              </h4>
              <div className="flex gap-4 mb-8">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors text-lg">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors text-lg">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors text-lg">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors text-lg">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
              <div>
                <img
                  loading="lazy"
                  src="https://thebnkgroup.com/assets/images/team/second-logo.png"
                  alt="Certification Badge"
                  className="max-h-16 w-auto object-contain opacity-80"
                  width="120"
                  height="60"
                />
              </div>
            </div>

          </div>

          {/* 3. Culture Summary Block */}
          <div className="border-t border-white/10 mt-16 pt-8 pb-4">
            <h4 className="font-serif text-lg tracking-wider text-gold mb-3">
              Culture @ The BNK Group
            </h4>
            <div className="text-white/70 text-xs font-light leading-relaxed space-y-2 max-w-4xl">
              <p>
                With a dedicated team of 100+ individuals and a workforce of 300+ workers, the team at The BNK Group works on a clear philosophy of humbleness, humility, and honesty. With our first employee still working for us, the average tenure spent by an employee at The BNK Group is 11-12 years.
              </p>
              <p>
                Our team is stronger than ever because of our commitment and dedication towards not only the group, but also towards our clients and their projects.
              </p>
            </div>
          </div>

          {/* 4. Bottom Footer Info */}
          <div className="border-t border-white/10 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-white/50 gap-4">
            <p>Terms &amp; Conditions / Privacy Policy &copy; {currentYear} The BNK Group. All rights reserved.</p>
            <p className="font-serif tracking-widest text-gold text-[10px]">DESIGN BNK CLONE</p>
          </div>

        </div>
      </div>

      {/* 5. Floating Pulsing WhatsApp Widget */}
      <div className="whatsapp-pulse">
        <a
          href="https://api.whatsapp.com/send?phone=+919920136767&text=Hi!"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="text-white flex items-center justify-center w-full h-full text-3xl"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>

    </footer>
  );
}
