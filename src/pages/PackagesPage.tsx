import React, { useState, useMemo } from 'react';
import { PageRoute, UmrahPackage } from '../types';
import { PACKAGES_DATA } from '../data/packagesData';
import { PackageCard } from '../components/PackageCard';
import { ArrowRight, Search, Sparkles } from 'lucide-react';

interface PackagesPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: (pref?: { city?: string; packageName?: string; notes?: string }) => void;
  onSelectPackage: (pkg: UmrahPackage) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectPackage
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Semua Program' },
    { id: 'Ramah Lansia', label: 'Ramah Lansia' },
    { id: 'Keluarga', label: 'Keluarga' },
    { id: 'Eksekutif', label: 'Eksekutif' },
    { id: 'Reguler', label: 'Reguler' },
  ];

  const filteredPackages = useMemo(() => {
    return PACKAGES_DATA.filter((pkg) => {
      if (selectedCategory !== 'all' && pkg.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = pkg.name.toLowerCase().includes(q);
        const matchesCity = pkg.departureCities.some(c => c.toLowerCase().includes(q));
        const matchesHotel = pkg.hotelMakkah.name.toLowerCase().includes(q) || pkg.hotelMadinah.name.toLowerCase().includes(q);
        if (!matchesName && !matchesCity && !matchesHotel) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-[#0A0B0D] text-white min-h-screen pt-28 sm:pt-32 pb-28 px-4 sm:px-8 lg:px-12 selection:bg-[#E2F827] selection:text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E2F827]">
            <span>◆</span>
            <span>Katalog Resmi PPIU</span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl text-white font-extrabold tracking-tight">
            Pilihan Paket <span className="text-[#E2F827]">Umrah</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 font-light leading-relaxed">
            Kurasi paket ibadah Umrah dari mitra Penyelenggara Perjalanan Ibadah Umrah (PPIU) resmi berizin Kementerian Agama RI dengan rute yang dirancang khusus bagi jamaah dari Sulawesi.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 sm:gap-6 pb-8 border-b border-[#232730]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 text-xs font-semibold rounded-full transition-all cursor-pointer min-h-[40px] flex items-center justify-center ${
                    active 
                      ? 'bg-[#E2F827] text-black shadow-md' 
                      : 'bg-[#14161A] text-gray-300 hover:text-white border border-[#232730]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari hotel, kota, durasi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#14161A] border border-[#232730] rounded-full pl-11 pr-4 py-3 text-xs text-white focus:outline-none focus:border-[#E2F827] placeholder:text-gray-500 min-h-[44px]"
            />
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-10 sm:pt-12">
          {filteredPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onSelectDetail={onSelectPackage}
              onConsult={(p) => onOpenConsultation({ packageName: p.name })}
            />
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-20 text-gray-400 text-sm">
            Tidak ditemukan paket yang sesuai kriteria pencarian Anda.
          </div>
        )}

        {/* Consultation Callout */}
        <div className="mt-16 sm:mt-20 p-6 sm:p-10 lg:p-12 bg-[#14161A] text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 border border-[#232730] shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#E2F827] font-semibold block">
              BELUM MENEMUKAN JADWAL YANG TEPAT?
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              Diskusikan Kebutuhan Khusus Perjalanan Anda
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light max-w-xl">
              Aji Zulfikar dapat membantu mengecek ketersediaan kursi maskapai dari bandara asal Anda atau mencocokkan jadwal liburan keluarga.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation()}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#E2F827] hover:bg-[#D4F636] text-black text-xs uppercase tracking-wider font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap shadow-lg hover:shadow-[#E2F827]/20 min-h-[44px] flex items-center justify-center"
          >
            Konsultasi dengan Aji
          </button>
        </div>

      </div>
    </div>
  );
};
