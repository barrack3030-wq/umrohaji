import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: (pref?: { city?: string; packageName?: string }) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  onOpenConsultation
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navBackground = scrolled
    ? 'bg-[#0B0F17]/95 backdrop-blur-md border-b border-[#253042] shadow-xl'
    : 'bg-gradient-to-b from-[#090D14]/90 via-[#0B0F17]/50 to-transparent border-b border-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Brand / Logo - Aji Zulfikar */}
        <button
          onClick={() => handleLinkClick('/')}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-[#E2F827] flex items-center justify-center font-extrabold text-black text-sm tracking-wider shrink-0 shadow-sm">
            AZ
          </div>
          <div className="min-w-0">
            <span className="block font-bold text-lg sm:text-2xl tracking-tight text-white group-hover:text-[#E2F827] transition-colors truncate">
              Aji Zulfikar
            </span>
            <span className="block text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-gray-400 font-medium -mt-0.5 truncate">
              Konsultan Umrah Sulawesi
            </span>
          </div>
        </button>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
          {/* Beranda */}
          <div className="relative group">
            <button
              onClick={() => handleLinkClick('/')}
              className={`flex items-center gap-1.5 py-2 cursor-pointer transition-colors ${
                currentRoute === '/' ? 'text-[#E2F827]' : 'text-gray-300 hover:text-white'
              }`}
            >
              <span>Beranda</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 hidden group-hover:block w-48 pt-2">
              <div className="bg-[#14161A] border border-[#232730] rounded-xl p-2 shadow-2xl space-y-1">
                <button
                  onClick={() => handleLinkClick('/')}
                  className="w-full text-left px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-[#1C1F26] rounded-lg transition-colors cursor-pointer"
                >
                  Beranda Utama
                </button>
                <button
                  onClick={() => handleLinkClick('/faq')}
                  className="w-full text-left px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-[#1C1F26] rounded-lg transition-colors cursor-pointer"
                >
                  Tanya Jawab (FAQ)
                </button>
              </div>
            </div>
          </div>

          {/* Tentang */}
          <div className="relative group">
            <button
              onClick={() => handleLinkClick('/tentang-aji')}
              className={`flex items-center gap-1.5 py-2 cursor-pointer transition-colors ${
                currentRoute === '/tentang-aji' ? 'text-[#E2F827]' : 'text-gray-300 hover:text-white'
              }`}
            >
              <span>Tentang</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 hidden group-hover:block w-52 pt-2">
              <div className="bg-[#14161A] border border-[#232730] rounded-xl p-2 shadow-2xl space-y-1">
                <button
                  onClick={() => handleLinkClick('/tentang-aji')}
                  className="w-full text-left px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-[#1C1F26] rounded-lg transition-colors cursor-pointer"
                >
                  Profil Aji Zulfikar
                </button>
                <button
                  onClick={() => handleLinkClick('/panduan-umrah')}
                  className="w-full text-left px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-[#1C1F26] rounded-lg transition-colors cursor-pointer"
                >
                  Panduan Perjalanan
                </button>
              </div>
            </div>
          </div>

          {/* Layanan & Rute */}
          <div className="relative group">
            <button
              onClick={() => handleLinkClick('/umrah-dari-sulawesi')}
              className={`flex items-center gap-1.5 py-2 cursor-pointer transition-colors ${
                currentRoute.includes('sulawesi') || currentRoute === '/umrah-lansia' ? 'text-[#E2F827]' : 'text-gray-300 hover:text-white'
              }`}
            >
              <span>Layanan & Rute</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 hidden group-hover:block w-56 pt-2">
              <div className="bg-[#14161A] border border-[#232730] rounded-xl p-2 shadow-2xl space-y-1">
                <button
                  onClick={() => handleLinkClick('/umrah-dari-sulawesi')}
                  className="w-full text-left px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-[#1C1F26] rounded-lg transition-colors cursor-pointer"
                >
                  Rute Sulawesi (6 Provinsi)
                </button>
                <button
                  onClick={() => handleLinkClick('/umrah-lansia')}
                  className="w-full text-left px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-[#1C1F26] rounded-lg transition-colors cursor-pointer"
                >
                  Pendampingan Ramah Lansia
                </button>
                <button
                  onClick={() => handleLinkClick('/kontak')}
                  className="w-full text-left px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-[#1C1F26] rounded-lg transition-colors cursor-pointer"
                >
                  Konsultasi Langsung
                </button>
              </div>
            </div>
          </div>

          {/* Paket Umrah */}
          <div className="relative group">
            <button
              onClick={() => handleLinkClick('/paket-umrah')}
              className={`flex items-center gap-1.5 py-2 cursor-pointer transition-colors ${
                currentRoute === '/paket-umrah' ? 'text-[#E2F827]' : 'text-gray-300 hover:text-white'
              }`}
            >
              <span>Paket Umrah</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 hidden group-hover:block w-52 pt-2">
              <div className="bg-[#14161A] border border-[#232730] rounded-xl p-2 shadow-2xl space-y-1">
                <button
                  onClick={() => handleLinkClick('/paket-umrah')}
                  className="w-full text-left px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-[#1C1F26] rounded-lg transition-colors cursor-pointer"
                >
                  Semua Paket Umrah
                </button>
                <button
                  onClick={() => handleLinkClick('/paket-umrah')}
                  className="w-full text-left px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-[#1C1F26] rounded-lg transition-colors cursor-pointer"
                >
                  Paket Reguler Makassar
                </button>
                <button
                  onClick={() => handleLinkClick('/umrah-lansia')}
                  className="w-full text-left px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-[#1C1F26] rounded-lg transition-colors cursor-pointer"
                >
                  Paket Ring 1 Ramah Lansia
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Right CTA Button: Electric Yellow Rounded Pill */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => onOpenConsultation()}
            className="flex items-center gap-1.5 bg-[#E2F827] hover:bg-[#D4F636] text-black font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg hover:shadow-[#E2F827]/20 transition-all duration-300 cursor-pointer active:scale-95"
          >
            <span>Konsultasi</span>
            <div className="w-4 h-4 rounded-full bg-black/10 flex items-center justify-center">
              <ArrowUpRight className="w-3 h-3 text-black" />
            </div>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => onOpenConsultation()}
            className="flex items-center gap-1 bg-[#E2F827] text-black font-semibold text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-full cursor-pointer shadow-sm active:scale-95"
          >
            <span>Konsultasi</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-white hover:text-[#E2F827] rounded-lg hover:bg-white/5 transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Buka menu navigasi"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F1115]/98 backdrop-blur-xl border-b border-[#232730] px-6 py-6 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-1">
            {[
              { route: '/', label: 'Beranda' },
              { route: '/tentang-aji', label: 'Tentang Aji Zulfikar' },
              { route: '/umrah-dari-sulawesi', label: 'Layanan & Rute Sulawesi' },
              { route: '/paket-umrah', label: 'Paket Umrah' },
              { route: '/umrah-lansia', label: 'Panduan Ramah Lansia' },
              { route: '/panduan-umrah', label: 'Panduan Perjalanan' },
              { route: '/faq', label: 'Tanya Jawab (FAQ)' },
              { route: '/kontak', label: 'Hubungi Kami' },
            ].map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleLinkClick(item.route as PageRoute)}
                  className={`w-full text-left font-semibold text-base py-3 px-3 rounded-xl flex items-center justify-between min-h-[46px] transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#E2F827]/10 text-[#E2F827]'
                      : 'text-white hover:text-[#E2F827] hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E2F827]" />}
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-[#232730]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#E2F827] hover:bg-[#D4F636] text-black font-semibold text-xs uppercase tracking-wider py-3.5 rounded-full shadow-lg active:scale-95 transition-all"
              >
                <span>Konsultasi WhatsApp Langsung</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

