import React, { useState } from 'react';
import { PageRoute, UmrahPackage } from '../types';
import { PROVINCES_DATA, CITIES_DATA } from '../data/regionsData';
import { PACKAGES_DATA } from '../data/packagesData';
import { PackageCard } from '../components/PackageCard';
import { ArrowRight, Plane, MapPin } from 'lucide-react';

interface RegionHubPageProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: (pref?: { city?: string; packageName?: string }) => void;
  onSelectPackage: (pkg: UmrahPackage) => void;
}

export const RegionHubPage: React.FC<RegionHubPageProps> = ({
  currentRoute,
  onNavigate,
  onOpenConsultation,
  onSelectPackage
}) => {
  const currentSlug = currentRoute.replace('/', '');
  const matchedProvince = PROVINCES_DATA.find((p) => p.slug === currentSlug);
  const isMasterHub = !matchedProvince || currentRoute === '/umrah-dari-sulawesi';
  const province = matchedProvince || PROVINCES_DATA[0];

  const [activeCityId, setActiveCityId] = useState<string>(
    isMasterHub ? 'makassar' : province.cities[0]?.id || 'palu'
  );

  const displayedCities = isMasterHub ? CITIES_DATA : province.cities;
  const currentCity = displayedCities.find((c) => c.id === activeCityId) || displayedCities[0];

  const relevantPackages = PACKAGES_DATA.filter((pkg) => {
    if (isMasterHub) return true;
    return pkg.departureCities.some((c) => 
      c.toLowerCase().includes(province.name.toLowerCase()) || 
      c.toLowerCase().includes(province.capital.toLowerCase()) ||
      c.toLowerCase() === 'makassar'
    );
  });

  return (
    <div className="bg-[#0A0B0D] text-white min-h-screen pt-28 sm:pt-32 pb-28 px-4 sm:px-8 lg:px-12 selection:bg-[#E2F827] selection:text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E2F827]">
            <span>◆</span>
            <span>Panduan Regional Keberangkatan</span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl text-white font-extrabold tracking-tight">
            {isMasterHub ? 'Umrah dari ' : 'Umrah dari '}
            <span className="text-[#E2F827]">{isMasterHub ? 'Sulawesi' : province.name}</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 font-light leading-relaxed">
            {isMasterHub
              ? 'Panduan menyeluruh jadwal penerbangan langsung (direct flight) via Makassar maupun connecting flights dari 6 provinsi se-Sulawesi.'
              : province.description}
          </p>
        </div>

        {/* Province Navigation Bar (Pill buttons) */}
        <div className="flex flex-wrap items-center gap-2 pb-6 sm:pb-8 border-b border-[#232730] text-xs font-semibold">
          <button
            onClick={() => onNavigate('/umrah-dari-sulawesi')}
            className={`px-4 py-2.5 rounded-full cursor-pointer transition-all min-h-[40px] flex items-center justify-center ${
              isMasterHub 
                ? 'bg-[#E2F827] text-black shadow-md' 
                : 'bg-[#14161A] text-gray-300 hover:text-white border border-[#232730]'
            }`}
          >
            Seluruh Sulawesi
          </button>
          {PROVINCES_DATA.map((p) => {
            const active = !isMasterHub && matchedProvince?.id === p.id;
            return (
              <button
                key={p.id}
                onClick={() => onNavigate(`/${p.slug}` as PageRoute)}
                className={`px-4 py-2.5 rounded-full cursor-pointer transition-all min-h-[40px] flex items-center justify-center ${
                  active 
                    ? 'bg-[#E2F827] text-black shadow-md' 
                    : 'bg-[#14161A] text-gray-300 hover:text-white border border-[#232730]'
                }`}
              >
                {p.shortName}
              </button>
            );
          })}
        </div>

        {/* Logistics Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 sm:pt-12 items-start">
          
          {/* City Selector & Detail */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#E2F827] font-semibold block">
                Pilih Kota Asal Keberangkatan:
              </span>
              <div className="flex flex-wrap gap-2">
                {displayedCities.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveCityId(c.id)}
                    className={`px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs font-semibold rounded-xl transition-all cursor-pointer min-h-[38px] flex items-center justify-center ${
                      currentCity?.id === c.id
                        ? 'bg-[#E2F827] text-black shadow-md'
                        : 'bg-[#14161A] text-gray-300 hover:text-white border border-[#232730]'
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {currentCity && (
              <div className="p-6 sm:p-8 bg-[#14161A] border border-[#232730] rounded-3xl space-y-6 shadow-2xl">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#E2F827] font-semibold block mb-1">
                    DETAIL LOGISTIK • {currentCity.name}
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white flex items-center gap-2">
                    <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-[#E2F827]" />
                    <span>{currentCity.airportName || 'Keberangkatan'} {currentCity.airportCode ? `(${currentCity.airportCode})` : ''}</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-300 bg-[#1C1F26] p-4 rounded-xl border border-[#2B2E36]">
                  <div>
                    <span className="text-gray-400 block mb-0.5 font-medium">Alur Penghubung:</span>
                    <span className="font-semibold text-white">{currentCity.hubPathway}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-0.5 font-medium">Estimasi Waktu Terbang:</span>
                    <span className="font-semibold text-white">{currentCity.estimatedFlightHours}</span>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-300 font-light leading-relaxed pt-2 border-t border-[#232730]">
                  <p>{currentCity.travelLogistics}</p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenConsultation({ city: currentCity.name })}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#E2F827] hover:underline font-semibold cursor-pointer"
                  >
                    <span>Konsultasikan Keberangkatan dari {currentCity.name}</span>
                    <ArrowRight className="w-4 h-4 text-[#E2F827]" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Regional Context Image & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-[#14161A] shadow-2xl border border-[#232730]">
              <img
                src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=85"
                alt="Wilayah Sulawesi"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            
            <div className="p-6 bg-[#14161A] text-white space-y-3 rounded-2xl border border-[#232730] shadow-xl">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#E2F827] block font-semibold">
                CATATAN AJI ZULFIKAR
              </span>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                Untuk keluarga dengan lansia dari luar Makassar, kami sarankan mengambil jeda transit minimal 3–4 jam di Bandara Sultan Hasanuddin atau menginap 1 malam di hotel bandara sebelum penerbangan jarak jauh menuju Jeddah/Madinah.
              </p>
            </div>
          </div>

        </div>

        {/* Relevant Packages */}
        <div className="mt-24 pt-16 border-t border-[#232730]">
          <div className="mb-10">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#E2F827] font-semibold block mb-2">
              REKOMENDASI PROGRAM
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Paket Umrah Terkait Wilayah Ini
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relevantPackages.slice(0, 3).map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onSelectDetail={onSelectPackage}
                onConsult={(p) => onOpenConsultation({ packageName: p.name, city: currentCity?.name })}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
