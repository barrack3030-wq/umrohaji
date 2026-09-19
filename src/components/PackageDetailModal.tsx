import React from 'react';
import { UmrahPackage } from '../types';
import { X, ArrowRight } from 'lucide-react';

interface PackageDetailModalProps {
  pkg: UmrahPackage | null;
  onClose: () => void;
  onConsult: (pkg: UmrahPackage) => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  pkg,
  onClose,
  onConsult
}) => {
  if (!pkg) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-[#14161A] border border-[#232730] text-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Editorial Top Image Banner */}
        <div className="relative h-48 sm:h-64 overflow-hidden bg-[#1C1F26]">
          <img
            src="/kaaba_tawaf.jpg"
            alt={pkg.name}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14161A] via-[#14161A]/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2.5 text-white/80 hover:text-white bg-black/60 hover:bg-black rounded-full transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#E2F827] font-semibold block mb-1">
              {pkg.category} • {pkg.durationDays} HARI
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold leading-tight">
              {pkg.name}
            </h2>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          
          {/* Price & Overview */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-[#232730]">
            <div>
              <span className="text-xs uppercase tracking-widest text-gray-400 block mb-1 font-semibold">
                Estimasi Biaya
              </span>
              <div className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                {pkg.priceEstimateDisplay}
              </div>
              <p className="text-xs text-gray-400 mt-1 font-light">
                Per jamaah (Kamar Quad). Tersedia opsi Triple dan Double.
              </p>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs uppercase tracking-widest text-gray-400 block mb-1 font-semibold">
                Penyelenggara Resmi (PPIU)
              </span>
              <div className="text-sm font-bold text-white">
                {pkg.ppiuPartner.name}
              </div>
              <div className="text-xs text-[#E2F827] mt-0.5 font-semibold">
                {pkg.ppiuPartner.izinNo}
              </div>
            </div>
          </div>

          {/* Overview text */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#E2F827] font-semibold">
              Gambaran Perjalanan
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              {pkg.overview}
            </p>
          </div>

          {/* Logistics & Hotels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#232730]">
            {/* Makkah Hotel */}
            <div className="space-y-2 bg-[#1C1F26] p-5 rounded-2xl border border-[#2B2E36]">
              <span className="text-[10px] uppercase tracking-wider text-[#E2F827] font-semibold block">
                Hotel Makkah ({pkg.hotelMakkah.stars} Bintang)
              </span>
              <h4 className="text-lg font-bold text-white">
                {pkg.hotelMakkah.name}
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed font-light">
                {pkg.hotelMakkah.distanceNote}
              </p>
            </div>

            {/* Madinah Hotel */}
            <div className="space-y-2 bg-[#1C1F26] p-5 rounded-2xl border border-[#2B2E36]">
              <span className="text-[10px] uppercase tracking-wider text-[#E2F827] font-semibold block">
                Hotel Madinah ({pkg.hotelMadinah.stars} Bintang)
              </span>
              <h4 className="text-lg font-bold text-white">
                {pkg.hotelMadinah.name}
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed font-light">
                {pkg.hotelMadinah.distanceNote}
              </p>
            </div>
          </div>

          {/* Flight & Departures */}
          <div className="space-y-4 pt-4 border-t border-[#232730]">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#E2F827] font-semibold">
              Penerbangan & Konektivitas Sulawesi
            </h3>
            <p className="text-sm text-gray-300 font-light">
              <span className="font-semibold text-white">Maskapai:</span> {pkg.airline}
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="text-gray-400 mr-1 self-center">Akses kota keberangkatan:</span>
              {pkg.departureCities.map((city) => (
                <span key={city} className="px-2.5 py-1 bg-[#1C1F26] text-gray-200 border border-[#2B2E36] rounded-md font-medium">
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Facilities */}
          <div className="space-y-3 pt-4 border-t border-[#232730]">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#E2F827] font-semibold">
              Fasilitas Termasuk
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-300 font-light">
              {pkg.facilities.map((fac, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-[#E2F827] font-bold">✦</span>
                  <span>{fac}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transparency Disclaimer */}
          <div className="p-4 bg-[#1C1F26] border border-[#2B2E36] rounded-xl text-xs text-gray-300 font-light leading-relaxed">
            <p className="font-semibold text-white mb-1">
              Catatan Kemitraan & Akad
            </p>
            <p>
              {pkg.ppiuPartner.verificationNotice} Pembayaran disetorkan langsung ke rekening giro resmi {pkg.ppiuPartner.name}. Konsultasi bersama Aji Zulfikar bebas biaya.
            </p>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-[#14161A] border-t border-[#232730] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-400 text-center sm:text-left">
            Tersedia kuota terbatas per tanggal keberangkatan.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/3 sm:w-auto px-5 py-3 border border-[#2B2E36] rounded-full text-xs uppercase tracking-wider text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Tutup
            </button>
            <button
              onClick={() => {
                onClose();
                onConsult(pkg);
              }}
              className="w-2/3 sm:w-auto px-7 py-3 bg-[#E2F827] text-black hover:bg-[#D4F636] text-xs uppercase tracking-wider font-semibold rounded-full flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-[#E2F827]/20 cursor-pointer"
            >
              <span>Konsultasi Paket Ini</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
