import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import LicenseTypesPage from './pages/LicenseTypesPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LicenseDetailPage from './pages/LicenseDetailPage';
import TrafficKnowledgePage from './pages/TrafficKnowledgePage';
import FirstAidPage from './pages/FirstAidPage';
import VehicleTechPage from './pages/VehicleTechPage';
import TrafficEtiquettePage from './pages/TrafficEtiquettePage';

// ScrollToTop component to handle automatic scrolling
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-gray-900">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/license-types" element={<LicenseTypesPage />} />
            <Route path="/license/:type" element={<LicenseDetailPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/traffic-knowledge" element={<TrafficKnowledgePage />} />
            <Route path="/first-aid" element={<FirstAidPage />} />
            <Route path="/vehicle-tech" element={<VehicleTechPage />} />
            <Route path="/traffic-etiquette" element={<TrafficEtiquettePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;