import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";

const VirtualTour = lazy(() => import("./components/VirtualTour"));
const ZoomShowcase = lazy(() => import("./components/ZoomShowcase"));
const Location = lazy(() => import("./components/Location"));
const TheHouse = lazy(() => import("./components/TheHouse"));
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
const ThankYou = lazy(() => import("./components/ThankYou"));

const SectionFallback = () => <div className="min-h-[40vh]" aria-hidden="true" />;

function LandingPage() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleOpenForm = () => setIsLeadFormOpen(true);
    window.addEventListener("open-lead-form", handleOpenForm);
    return () => window.removeEventListener("open-lead-form", handleOpenForm);
  }, []);

  useEffect(() => {
    const state = location.state as { openLeadForm?: boolean } | null;
    if (state?.openLeadForm) {
      setIsLeadFormOpen(true);
      window.history.replaceState({}, "");
    }
  }, [location.state]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [location.hash]);

  return (
    <main className="w-full min-h-screen bg-bg-main relative">
      <Header />
      <Hero />

      <Suspense fallback={<SectionFallback />}>
        <VirtualTour />
        <ZoomShowcase />
        <Location />
        <TheHouse />
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

export default function App() {
  return (
    <BrowserRouter basename="/siriuba-2">
      <Suspense fallback={<SectionFallback />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/obrigado" element={<ThankYou />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
