import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  mobileImage?: string;
  videoUrl: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: 'Redefining',
    subtitle: 'Luxury Living',
    image: 'https://thebnkgroup.com/assets/images/hm-banner-one.webp',
    mobileImage: 'https://thebnkgroup.com/assets/images/hm-banner-one-mobile.webp',
    videoUrl: 'https://thebnkgroup.com/assets/video/bnk-banner-2.mp4',
  },
  {
    id: 2,
    title: 'Creating Hospitality',
    subtitle: 'Experiences',
    image: 'https://thebnkgroup.com/assets/images/hm-banner-two.webp',
    videoUrl: 'https://thebnkgroup.com/assets/video/bnk-banner-2.mp4',
  },
  {
    id: 3,
    title: 'Thinking Laterally',
    subtitle: 'for Workspaces',
    image: 'https://thebnkgroup.com/assets/images/hm-banner-three-v2.webp',
    videoUrl: 'https://thebnkgroup.com/assets/video/bnk-banner-2.mp4',
  },
  {
    id: 4,
    title: 'Shaping New Age',
    subtitle: 'Healthcare Spaces',
    image: 'https://thebnkgroup.com/assets/images/slides/aaa-bnk.jpg',
    videoUrl: 'https://thebnkgroup.com/assets/video/bnk-banner-2.mp4',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay || isVideoOpen) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay, isVideoOpen]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden bg-[#151515]">
        {/* Slides */}
        {heroSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Background Image with Ken Burns Zoom animation when active */}
              <picture>
                {slide.mobileImage && (
                  <source media="(max-width: 767px)" srcSet={slide.mobileImage} />
                )}
                <img
                  src={slide.image}
                  alt={slide.subtitle}
                  className={`w-full h-full object-cover transition-transform duration-[6000ms] ${
                    isActive ? 'scale-105 zoom-animation' : 'scale-100'
                  }`}
                />
              </picture>

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/50" />

              {/* Slide Content */}
              <div
                className={`absolute inset-0 flex items-center justify-start px-8 sm:px-16 md:px-24 z-20 transition-all duration-[1000ms] delay-300 ${
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <div className="max-w-4xl text-left text-white mt-16">
                  <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-light tracking-wide leading-tight mb-2">
                    {slide.title}
                  </h1>
                  <p className="text-3xl sm:text-5xl md:text-7xl font-serif italic font-extralight text-gold tracking-wide mb-8">
                    {slide.subtitle}
                  </p>

                  <div className="btnWrap">
                    <button
                      onClick={() => setIsVideoOpen(true)}
                      className="btnA btn-secondary cursor-pointer shadow-lg flex items-center gap-2 group"
                    >
                      <Play size={14} className="fill-current text-navy group-hover:text-white transition-colors" />
                      <span>VIEW FILM</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white transition-all cursor-pointer p-2 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft size={36} strokeWidth={1} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white transition-all cursor-pointer p-2 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight size={36} strokeWidth={1} />
        </button>

        {/* Slide Indicators / Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-4">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full border border-white transition-all duration-300 ${
                index === currentSlide ? 'bg-gold border-gold scale-125' : 'bg-transparent hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Video Overlay Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 transition-opacity duration-300">
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-gold transition-colors duration-200 z-50 p-2"
            aria-label="Close video player"
          >
            <X size={32} />
          </button>
          
          <div className="w-[90vw] md:w-[80vw] aspect-video relative shadow-2xl bg-black">
            <video
              src={heroSlides[currentSlide].videoUrl}
              autoPlay
              controls
              playsInline
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
