export default function AboutSection() {
  return (
    <section id="about-us" className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Team Image */}
          <div className="fade-in-up">
            <img
              loading="lazy"
              src="https://thebnkgroup.com/assets/images/team/bnk-team.png"
              alt="The BNK Group Team"
              className="w-full object-cover shadow-sm transition-transform duration-500 hover:scale-[1.01]"
              width="600"
              height="400"
            />
          </div>

          {/* Right Side: Content */}
          <div className="fade-in-up md:pl-6" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-sm font-light text-navy/70 tracking-widest uppercase mb-2">
              THE BNK GROUP
            </h2>
            <h3 className="text-3xl sm:text-4xl font-serif text-navy tracking-wide mb-6">
              Redefining Luxury Across Frontiers!
            </h3>
            <div className="text-navy/80 font-light leading-relaxed mb-8 space-y-4 text-base">
              <p>
                Since its inception in 2005, The BNK Group has evolved from a small team into a formidable force of more than 100+ in-house designers, project managers, and site supervisors. This growth reflects our steadfast commitment to excellence, with a portfolio spanning over 500 executed projects.
              </p>
              <p>
                We redefine luxury for discerning HNI residences, villas, opulent hospitality havens, and unique workspace and healthcare designs across India, the Middle East, and Africa.
              </p>
            </div>
            
            <div className="btnWrap">
              <a
                href="#connect"
                className="btnA btn-primary shadow-sm"
              >
                <span>DISCOVER MORE</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
