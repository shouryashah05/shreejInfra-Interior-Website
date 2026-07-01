interface Differentiator {
  id: number;
  title: string;
  description: string;
  image: string;
}

const differentiators: Differentiator[] = [
  {
    id: 1,
    title: 'DEDICATED TEAM',
    description: 'Our specialised teams ensure seamless execution throughout the process',
    image: 'https://thebnkgroup.com/assets/images/testimonial/best-in-class-team.png',
  },
  {
    id: 2,
    title: 'BESPOKE DESIGN',
    description: 'Our designs ensure your space reflects your individual style and personality',
    image: 'https://thebnkgroup.com/assets/images/testimonial/exclusive-designs.png',
  },
  {
    id: 3,
    title: 'EFFICIENT SOLUTIONS',
    description: 'We offer end-to-end solutions for timely delivery with the highest standards',
    image: 'https://thebnkgroup.com/assets/images/testimonial/efficient-service.png',
  },
  {
    id: 4,
    title: 'DIVERSE EXPERTISE',
    description: 'We redefine the luxury of residential, commercial, and retail projects',
    image: 'https://thebnkgroup.com/assets/images/testimonial/top-notch-quality.png',
  },
];

export default function DifferentiatorsSection() {
  return (
    <section className="py-20 md:py-32 bg-navy text-white">
      <div className="container text-center">
        {/* Section Heading */}
        <div className="mb-16">
          <h3 className="text-3xl sm:text-4xl font-serif tracking-widest text-center uppercase">
            KEY DIFFERENTIATORS
          </h3>
          <div className="w-12 h-[2px] bg-gold mx-auto mt-4" />
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {differentiators.map((item, index) => (
            <div
              key={item.id}
              className="fade-in-up flex flex-col items-center max-w-sm mx-auto"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Graphic Icon Container */}
              <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 p-2 transition-transform duration-500 hover:rotate-6 hover:scale-105">
                <img
                  loading="lazy"
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain invert brightness-0"
                  width="80"
                  height="80"
                />
              </div>

              {/* Title */}
              <h4 className="text-lg font-serif tracking-wider font-light mb-3 text-gold">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-white/70 text-sm font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
