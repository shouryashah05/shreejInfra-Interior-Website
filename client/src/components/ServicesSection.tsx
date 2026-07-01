interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Residential Design',
    description: 'The BNK Group offers bespoke interior design services, creating luxurious interiors that reflect their clients\' unique tastes and lifestyles.',
    image: 'https://thebnkgroup.com/assets/images/services/residential_interiors.jpg',
    link: '#projects',
  },
  {
    id: 2,
    title: 'Workspace Design',
    description: 'The BNK Group is known for its cutting-edge approach to creating workspaces that optimize productivity and employee well-being.',
    image: 'https://thebnkgroup.com/assets/images/services/workspace_website.jpg',
    link: '#projects',
  },
  {
    id: 3,
    title: 'Hospitality Design',
    description: 'The BNK Group, with its illustrious heritage in architecture and interior design, extends its expertise to the hospitality sector.',
    image: 'https://thebnkgroup.com/assets/images/services/hospitality.jpg',
    link: '#projects',
  },
  {
    id: 4,
    title: 'Healthcare Design',
    description: 'The BNK Group provides specialized turnkey design and build services for the healthcare sector, prioritizing functional and healing layouts.',
    image: 'https://thebnkgroup.com/assets/images/services/healthcare.jpg',
    link: '#projects',
  },
  {
    id: 5,
    title: 'Turnkey Solutions',
    description: 'The BNK Group provides personalized design and build services for residences, hotels, restaurants, healthcare and commercial workspaces.',
    image: 'https://thebnkgroup.com/assets/images/services/turnkey_solutions.jpg',
    link: '#projects',
  },
];

export default function ServicesSection() {
  return (
    <section id="our-services" className="py-20 md:py-32 bg-light-gray">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-sm font-light text-navy/70 tracking-widest uppercase mb-2">
            WHAT WE DO
          </h2>
          <h3 className="text-3xl sm:text-4xl font-serif text-navy tracking-wide">
            Our Services
          </h3>
          <div className="w-12 h-[2px] bg-gold mx-auto mt-4" />
        </div>

        {/* 5-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="fade-in-up group flex flex-col bg-white border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container with Zoom hover */}
              <div className="relative h-48 sm:h-56 overflow-hidden bg-navy/10">
                <img
                  loading="lazy"
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors duration-300" />
              </div>

              {/* Service Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-serif text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                    <a href={service.link}>{service.title}</a>
                  </h4>
                  <p className="text-navy/70 text-sm font-light leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href={service.link}
                    className="text-xs uppercase tracking-widest font-medium text-gold hover:text-navy transition-colors duration-300 inline-block"
                  >
                    Explore &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
