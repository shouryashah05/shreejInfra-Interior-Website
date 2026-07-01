import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company?: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'MRS. RATI GODREJ',
    title: 'Managing Director',
    company: 'Godrej Industries',
    quote: 'Behzad Kharas and his outstanding team of young and enthusiastic architects & designers at The BNK Group have shown remarkable professionalism, creativity and hard work in renovating our family heritage home in Navsari. They have been delightful and a joy to work with on this project. They are always very sincere, respectful, and patient to understand all their clients\' needs, budget constraints and personal preferences.',
    image: 'https://thebnkgroup.com/assets/images/testimonial/new/rati-godrej.jpg',
  },
  {
    id: 2,
    name: 'DR. SONAL & DR. APOORVA SHAH',
    title: 'Doctors',
    company: 'Richfeel Trichology Center',
    quote: 'We had a 35 year old dream. Dream of a house which could be called Home. The search to make this 35 year old dream come true took us to Italy, where by sheer providence we got Behzad\'s reference from three different people related to the interior world. They translated our vision perfectly.',
    image: 'https://thebnkgroup.com/assets/images/testimonial/new/sonal-and-apoorva.jpg',
  },
  {
    id: 3,
    name: 'MRS. GAYATRI RUIA',
    title: 'Director',
    company: 'Phoenix Mills',
    quote: 'Behzad and his team have worked with me for the PIP programme at the St. Regis hotel. He and his team were able to understand my vision and design intent to be delivered and have done so to my satisfaction. The BNK Group team showed great work ethic and integrity.',
    image: 'https://thebnkgroup.com/assets/images/testimonial/new/gayatri.jpg',
  },
  {
    id: 4,
    name: 'MR. HITESH KESHWANI',
    title: 'Founder & Director',
    company: 'Silver Beach Entertainment and Hospitality India Pvt. Ltd',
    quote: 'I absolutely love working with Behzad and the team (The BNK Group Interiors). They are well coordinated, full of great ideas & carry out all activities with utmost professionalism. I get daily and weekly project updates on a regular basis which makes this entire process an incredible experience.',
    image: 'https://thebnkgroup.com/assets/images/testimonial/new/hitesh.jpg',
  },
  {
    id: 5,
    name: 'MR. MAULIK SHETH',
    title: 'Director',
    company: 'Sheth Group',
    quote: 'The BNK Group have partnered with us on two of our prestigious projects Sheth Zuri, Sheth Avalon and our corporate office. Behzad\'s understanding of my point of view and his clear, focused high standards in design aesthetics made easy, fast, almost effortless project design.',
    image: 'https://thebnkgroup.com/assets/images/testimonial/new/maulik.jpg',
  },
  {
    id: 6,
    name: 'MR. PAPPU WASAN',
    title: 'Chairman',
    company: 'Wasan Group',
    quote: 'You\'ve done a lot of work for me at various locations and I am extremely happy and satisfied with the outcome each time. Behzad\'s designs are phenomenal and extremely trendy and the quality of work is also extremely high. Overall I have always been happy with your work style.',
    image: 'https://thebnkgroup.com/assets/images/testimonial/new/wasan.jpg',
  },
  {
    id: 7,
    name: 'MS. REEMA DIWAN',
    title: 'Former AVP Technical Services - IHCL',
    company: 'Director - Technical Services Accor Group Southeast Asia',
    quote: 'Endured a fabulous journey with The BNK Group while establishing interior designs for Vivanta Vashi. Design voyage was started as Gateway Hotel and was later remodelled as Vivanta Hotel. Interior design was recreated with fresh lenses staying true to the brand. Innovation, responsive design execution gives them an extra edge.',
    image: 'https://thebnkgroup.com/assets/images/testimonial/new/reema.jpg',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-light text-navy/70 tracking-widest uppercase mb-2">
            CLIENT FEEDBACK
          </h2>
          <h3 className="text-3xl sm:text-4xl font-serif text-navy tracking-wide">
            Testimonials
          </h3>
          <div className="w-12 h-[2px] bg-gold mx-auto mt-4" />
        </div>

        {/* Carousel Slider Panel */}
        <div className="max-w-4xl mx-auto bg-light-gray border border-border p-8 md:p-12 relative shadow-sm">
          {/* Quote Icon */}
          <div className="absolute top-6 right-8 text-gold/20">
            <Quote size={64} className="fill-current" />
          </div>

          <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center relative z-10">
            {/* Client Avatar */}
            <div className="flex flex-col items-center">
              <div className="w-36 h-36 rounded-full border-4 border-gold overflow-hidden bg-navy/10 shadow-md">
                <img
                  loading="lazy"
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Testimonial Quote & Info */}
            <div className="text-center md:text-left">
              <p className="text-navy/90 font-light italic leading-relaxed text-base mb-6">
                "{activeTestimonial.quote}"
              </p>

              <div>
                <h4 className="text-lg font-serif text-navy font-semibold tracking-wide">
                  {activeTestimonial.name}
                </h4>
                <p className="text-sm text-gold font-medium">
                  {activeTestimonial.title}
                </p>
                {activeTestimonial.company && (
                  <p className="text-xs text-navy/60">
                    {activeTestimonial.company}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-10 border-t border-border pt-6">
            {/* Slide Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-gold w-6' : 'bg-navy/20 hover:bg-navy/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow keys */}
            <div className="flex gap-3">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 border border-navy/20 flex items-center justify-center text-navy hover:text-gold hover:border-gold transition-all duration-300 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 border border-navy/20 flex items-center justify-center text-navy hover:text-gold hover:border-gold transition-all duration-300 cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
