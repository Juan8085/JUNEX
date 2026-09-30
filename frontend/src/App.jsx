import React from 'react';
import Navbar from './components/Navbar';
import HeroAndFlagship from './components/HeroAndFlagship';
import StrategicSections from './components/StrategicSections';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="bg-junex-dark min-h-screen text-white font-sans selection:bg-junex-cyan selection:text-junex-dark">
      <Navbar />
      <HeroAndFlagship />
      <StrategicSections />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}