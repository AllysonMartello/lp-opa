/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ZoomShowcase from "./components/ZoomShowcase";
import Location from "./components/Location";
import Investment from "./components/Investment";
import TheHouse from "./components/TheHouse";
import Experience from "./components/Experience";
import VirtualTour from "./components/VirtualTour";
import ForWho from "./components/ForWho";
import TechnicalSpecs from "./components/TechnicalSpecs";
import TheOPA from "./components/TheOPA";
import MarcosView from "./components/MarcosView";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import LeadFormModal from "./components/LeadFormModal";

export default function App() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  useEffect(() => {
    const handleOpenForm = () => setIsLeadFormOpen(true);
    window.addEventListener("open-lead-form", handleOpenForm);
    return () => window.removeEventListener("open-lead-form", handleOpenForm);
  }, []);

  return (
    <main className="w-full min-h-screen bg-bg-main relative">
      <Preloader />
      <CustomCursor />
      <Header />
      <Hero />
      <VirtualTour />
      <ZoomShowcase />
      <Location />
      <TheHouse />
      <Investment />
      <Experience />
      <ForWho />
      <TechnicalSpecs />
      <TheOPA />
      <MarcosView />
      <FinalCTA />
      <Footer />
      
      <LeadFormModal 
        isOpen={isLeadFormOpen} 
        onClose={() => setIsLeadFormOpen(false)} 
      />
    </main>
  );
}
