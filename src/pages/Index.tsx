
import React from 'react';
import { Header } from '@/components/Header';
import { HeroSlider } from '@/components/HeroSlider';
import { CompanyIntro } from '@/components/CompanyIntro';
import { ServicesGrid } from '@/components/ServicesGrid';
import { AboutSection } from '@/components/AboutSection';
import { ClientsSection } from '@/components/ClientsSection';
import { DetailedServices } from '@/components/DetailedServices';
import { ServiceShowcase } from '@/components/ServiceShowcase';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSlider />
        <CompanyIntro />
        <ServicesGrid />
        <AboutSection />
        <ClientsSection />
        <DetailedServices />
        <ServiceShowcase />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default Index;
