import React from 'react';
import Navbar from './components/Navbar';
import HeroAndFlagship from './components/HeroAndFlagship';
import StrategicSections from './components/StrategicSections';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="bg-junex-dark min-h-screen text-white font-sans selection:bg-junex-cyan selection:text-junex-dark">
      <Navbar />
      <HeroAndFlagship />
      <StrategicSections />
      <ContactSection />
    </div>
  );
}