import { useState, useEffect, lazy, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

const VirtualTour = lazy(() => import("./components/VirtualTour"));
const ZoomShowcase = lazy(() => import("./components/ZoomShowcase"));
const Location = lazy(() => import("./components/Location"));
const TheHouse = lazy(() => import("./components/TheHouse"));
const Investment = lazy(() => import("./components/Investment"));
const Experience = lazy(() => import("./components/Experience"));
const ForWho = lazy(() => import("./components/ForWho"));
const TechnicalSpecs = lazy(() => import("./components/TechnicalSpecs"));
const TheOPA = lazy(() => import("./components/TheOPA"));
const MarcosView = lazy(() => import("./components/MarcosView"));
const FinalCTA = lazy(() => import("./components/FinalCTA"));
const Footer = lazy(() => import("./components/Footer"));
const LeadFormModal = lazy(() => import("./components/LeadFormModal"));
const CookieConsent = lazy(() => import("./components/CookieConsent"));
const CustomCursor = lazy(() => import("./components/CustomCursor"));

const SectionFallback = () => <div className="min-h-[40vh]" aria-hidden="true" />;

export default function App() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  useEffect(() => {
    const handleOpenForm = () => setIsLeadFormOpen(true);
    window.addEventListener("open-lead-form", handleOpenForm);
    return () => window.removeEventListener("open-lead-form", handleOpenForm);
  }, []);

  return (
    <main className="w-full min-h-screen bg-bg-main relative">
      <Header />
      <Hero />

      <Suspense fallback={<SectionFallback />}>
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
        <CookieConsent />
        <CustomCursor />
        <LeadFormModal
          isOpen={isLeadFormOpen}
          onClose={() => setIsLeadFormOpen(false)}
        />
      </Suspense>
    </main>
  );
}
