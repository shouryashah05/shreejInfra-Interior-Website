import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import DifferentiatorsSection from '@/components/DifferentiatorsSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ClientShowcase from '@/components/ClientShowcase';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DifferentiatorsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ClientShowcase />
      </main>
      <Footer />
    </div>
  );
}
