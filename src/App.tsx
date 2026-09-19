/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute, UmrahPackage } from './types';
import { updatePageSeo } from './utils/seo';

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppModal } from './components/WhatsAppModal';
import { FloatingWhatsAppBar } from './components/FloatingWhatsAppBar';
import { PackageDetailModal } from './components/PackageDetailModal';

// Pages
import { HomePage } from './pages/HomePage';
import { PackagesPage } from './pages/PackagesPage';
import { RegionHubPage } from './pages/RegionHubPage';
import { GuidesPage } from './pages/GuidesPage';
import { ElderlyCarePage } from './pages/ElderlyCarePage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('/');
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState<boolean>(false);
  const [whatsAppModalPref, setWhatsAppModalPref] = useState<{
    city?: string;
    packageName?: string;
    notes?: string;
  }>({});
  const [selectedPackageForModal, setSelectedPackageForModal] = useState<UmrahPackage | null>(null);

  // Sync route with browser hash / history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || '/';
      if (hash.startsWith('/')) {
        setCurrentRoute(hash as PageRoute);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update SEO meta tags on route change
  useEffect(() => {
    updatePageSeo(currentRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute]);

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.location.hash = route;
  };

  const handleOpenConsultation = (pref?: { city?: string; packageName?: string; notes?: string }) => {
    setWhatsAppModalPref(pref || {});
    setIsWhatsAppModalOpen(true);
  };

  // Determine which page component to render
  const renderCurrentPage = () => {
    switch (currentRoute) {
      case '/':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            onSelectPackage={(pkg) => setSelectedPackageForModal(pkg)}
          />
        );

      case '/paket-umrah':
        return (
          <PackagesPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            onSelectPackage={(pkg) => setSelectedPackageForModal(pkg)}
          />
        );

      case '/umrah-dari-sulawesi':
      case '/umrah-dari-sulawesi-tengah':
      case '/umrah-dari-sulawesi-selatan':
      case '/umrah-dari-sulawesi-utara':
      case '/umrah-dari-sulawesi-tenggara':
      case '/umrah-dari-sulawesi-barat':
      case '/umrah-dari-gorontalo':
        return (
          <RegionHubPage
            currentRoute={currentRoute}
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            onSelectPackage={(pkg) => setSelectedPackageForModal(pkg)}
          />
        );

      case '/panduan-umrah':
        return (
          <GuidesPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        );

      case '/umrah-lansia':
        return (
          <ElderlyCarePage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            onSelectPackage={(pkg) => setSelectedPackageForModal(pkg)}
          />
        );

      case '/tentang-aji':
        return (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        );

      case '/faq':
        return (
          <FaqPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        );

      case '/kontak':
        return (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        );

      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            onSelectPackage={(pkg) => setSelectedPackageForModal(pkg)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0B0D] text-white font-sans selection:bg-[#E2F827] selection:text-black">
      {/* Top Navigation */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Sticky Bottom Consultation Floating Bar */}
      <FloatingWhatsAppBar
        onOpenModal={() => handleOpenConsultation()}
      />

      {/* WhatsApp Pre-Filled Consultation Modal */}
      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        initialCity={whatsAppModalPref.city}
        initialPackageName={whatsAppModalPref.packageName}
        initialNotes={whatsAppModalPref.notes}
      />

      {/* Package Detail Modal */}
      <PackageDetailModal
        pkg={selectedPackageForModal}
        onClose={() => setSelectedPackageForModal(null)}
        onConsult={(pkg) => handleOpenConsultation({ packageName: pkg.name })}
      />
    </div>
  );
}
