interface Project {
  id: number;
  name: string;
  location: string;
  image: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'MERCURE',
    location: 'Melbourne, Australia',
    image: 'https://thebnkgroup.com/assets/images/projects/mercure-melbourne.webp',
    description: 'With its modern and stylish design, Mercure Melbourne offers a blend of functionality and luxury aesthetic.',
    link: '#connect',
  },
  {
    id: 2,
    name: 'PULLMAN THAMRIN',
    location: 'Jakarta, Indonesia',
    image: 'https://thebnkgroup.com/assets/images/projects/pullman-thamrin-hotel.webp',
    description: 'This luxurious hotel redesign combines contemporary style with top-tier hospitality architecture.',
    link: '#connect',
  },
  {
    id: 3,
    name: 'URBAN OASIS',
    location: 'Nashik, India',
    image: 'https://thebnkgroup.com/assets/images/fp-urban-oasis.JPEG',
    description: 'A premium luxury residential development showcasing sophisticated, tailored design and high-end finishes.',
    link: '#connect',
  },
  {
    id: 4,
    name: 'KAMPALA LAKEHOUSE',
    location: 'Kampala, Uganda',
    image: 'https://thebnkgroup.com/assets/images/projects/kampala-lakehouse.webp',
    description: 'An opulent waterfront luxury villa that blends tranquil nature with exquisite, custom-styled interiors.',
    link: '#connect',
  },
  {
    id: 5,
    name: 'ONE LODHA PLACE',
    location: 'Mumbai, India',
    image: 'https://thebnkgroup.com/assets/images/fp-one-lodha.JPEG',
    description: 'High-end corporate office workspace design crafted to foster collaboration and elegance.',
    link: '#connect',
  },
  {
    id: 6,
    name: 'THE BNK OFFICE',
    location: 'Mumbai, India',
    image: 'https://thebnkgroup.com/assets/images/projects/the-bnk-office.webp',
    description: 'The award-winning workspace design showcasing innovative solutions and premium luxury aesthetics.',
    link: '#connect',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-light-gray">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-light text-navy/70 tracking-widest uppercase mb-2">
            PORTFOLIO HIGHLIGHTS
          </h2>
          <h3 className="text-3xl sm:text-4xl font-serif text-navy tracking-wide">
            Project Highlights
          </h3>
          <div className="w-12 h-[2px] bg-gold mx-auto mt-4" />
        </div>

        {/* Projects 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="fade-in-up bg-white border border-border group overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div>
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-navy/10">
                  <img
                    loading="lazy"
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    width="500"
                    height="350"
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h4 className="text-xl font-serif text-navy tracking-wide mb-1 group-hover:text-gold transition-colors duration-300">
                    {project.name}
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-gold font-medium mb-4">
                    {project.location}
                  </p>
                  <p className="text-navy/70 text-sm font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Link Footer */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href={project.link}
                  className="text-xs uppercase tracking-widest font-semibold text-navy hover:text-gold transition-colors duration-300 border-b border-navy/20 hover:border-gold pb-1 inline-block"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center">
          <a
            href="#connect"
            className="btnA btn-primary shadow-sm"
          >
            <span>DISCOVER MORE</span>
          </a>
        </div>
      </div>
    </section>
  );
}
