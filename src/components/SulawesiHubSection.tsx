import React, { useState } from 'react';
import { PageRoute, ProvinceInfo, CityInfo } from '../types';
import { PROVINCES_DATA, CITIES_DATA } from '../data/regionsData';
import { 
  MapPin, 
  Plane, 
  Clock, 
  ArrowRight, 
  Compass, 
  AlertCircle, 
  Info, 
  CheckCircle2, 
  MessageCircle 
} from 'lucide-react';

interface SulawesiHubSectionProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: (pref?: { city?: string }) => void;
}

export const SulawesiHubSection: React.FC<SulawesiHubSectionProps> = ({
  onNavigate,
  onOpenConsultation
}) => {
  const [selectedCityId, setSelectedCityId] = useState<string>('palu');

  const selectedCity = CITIES_DATA.find((c) => c.id === selectedCityId) || CITIES_DATA[0];

  return (
    <section className="py-16 sm:py-24 bg-stone-50 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 7: Khusus Jamaah Sulawesi */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-200 inline-block mb-3">
            Pusat Informasi 6 Provinsi
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Informasi Umrah yang Lebih Dekat dengan Jamaah Sulawesi
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Setiap daerah memiliki kebutuhan perjalanan yang berbeda. Karena itu, informasi Umrah perlu mempertimbangkan kota asal jamaah, pilihan penerbangan, transit, waktu perjalanan, serta kebutuhan keluarga sebelum keberangkatan.
          </p>
        </div>

        {/* 6 Provinces Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {PROVINCES_DATA.map((province) => (
            <div
              key={province.id}
              className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md hover:border-emerald-500/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700">
                    Ibu Kota: {province.capital}
                  </span>
                  <span className="text-[11px] text-emerald-700 font-medium">
                    {province.cities.length} Kota Terdata
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
                  {province.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                  {province.description}
                </p>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-150 mb-4 space-y-1 text-xs">
                  <div className="text-stone-500 font-medium flex items-center gap-1.5">
                    <Plane className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Rute Hub Penerbangan:</span>
                  </div>
                  <p className="text-stone-800 font-semibold">
                    {province.flightHubRoute}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100">
                <button
                  onClick={() => {
                    onNavigate(`/${province.slug}` as PageRoute);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-700 text-emerald-800 hover:text-white font-medium text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Lihat Panduan {province.shortName}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section 8: Berangkat dari Kota Mana di Sulawesi? */}
        <div id="section-kota-asal" className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              Simulasi Jalur Logistik Riil
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              Berangkat dari Kota Mana di Sulawesi?
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm mt-2">
              Pilih kota atau kabupaten asal Anda untuk melihat estimasi jalur penerbangan, kemungkinan transit, bandara terdekat, dan catatan penting perjalanan keluarga.
            </p>
          </div>

          {/* City Selection Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {CITIES_DATA.map((city) => {
              const isSelected = city.id === selectedCity.id;
              return (
                <button
                  key={city.id}
                  onClick={() => setSelectedCityId(city.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/60 scale-105'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white border border-stone-700'
                  }`}
                >
                  {city.name}
                  {city.isMainHub && <span className="ml-1 text-[10px] text-amber-300">• Hub</span>}
                </button>
              );
            })}
          </div>

          {/* Selected City Detail Card */}
          <div className="bg-stone-850 rounded-2xl p-6 sm:p-8 border border-stone-700">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6 border-b border-stone-750">
              <div>
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>Provinsi: {selectedCity.provinceName}</span>
                </div>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Kota / Wilayah {selectedCity.name}
                </h4>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
                  {selectedCity.travelLogistics}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                <button
                  onClick={() => onOpenConsultation({ city: selectedCity.name })}
                  className="px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Konsultasi Rute {selectedCity.name}</span>
                </button>
              </div>
            </div>

            {/* Logistics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="bg-stone-900/80 p-4 rounded-xl border border-stone-750">
                <div className="text-xs text-stone-400 flex items-center gap-1.5 mb-1">
                  <Plane className="w-4 h-4 text-emerald-400" />
                  <span>Bandara / Akses Terdekat:</span>
                </div>
                <p className="text-sm font-semibold text-white">
                  {selectedCity.airportName ? `${selectedCity.airportName} (${selectedCity.airportCode})` : 'Jalur Poros Darat ke Makassar/Palu'}
                </p>
              </div>

              <div className="bg-stone-900/80 p-4 rounded-xl border border-stone-750">
                <div className="text-xs text-stone-400 flex items-center gap-1.5 mb-1">
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>Hub / Kemungkinan Transit:</span>
                </div>
                <p className="text-sm font-semibold text-white">
                  {selectedCity.transitHub}
                </p>
              </div>

              <div className="bg-stone-900/80 p-4 rounded-xl border border-stone-750">
                <div className="text-xs text-stone-400 flex items-center gap-1.5 mb-1">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span>Estimasi Durasi Perjalanan:</span>
                </div>
                <p className="text-sm font-semibold text-white">
                  {selectedCity.estimatedFlightHours}
                </p>
              </div>
            </div>

            {/* Important Notes & Warnings */}
            <div className="bg-stone-900/50 p-4 rounded-xl border border-stone-800">
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                <span>Hal Penting yang Perlu Diperhatikan Jamaah dari {selectedCity.name}:</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-stone-300">
                {selectedCity.importantNotes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
