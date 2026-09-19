import React from 'react';
import { UmrahPackage } from '../types';
import { ArrowRight } from 'lucide-react';

interface PackageCardProps {
  pkg: UmrahPackage;
  onSelectDetail: (pkg: UmrahPackage) => void;
  onConsult: (pkg: UmrahPackage) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  pkg,
  onSelectDetail,
  onConsult
}) => {
  return (
    <div 
      className="bg-[#14161A] border border-[#232730] text-white rounded-2xl flex flex-col justify-between group transition-all duration-300 hover:border-[#E2F827]/50 hover:shadow-2xl cursor-pointer overflow-hidden"
      onClick={() => onSelectDetail(pkg)}
    >
      <div className="p-6 sm:p-7 space-y-4">
        {/* Category & Duration */}
        <div className="flex items-center justify-between text-[11px] uppercase tracking-wider font-semibold">
          <span className="text-[#E2F827] bg-[#E2F827]/10 px-2.5 py-1 rounded-md">
            {pkg.category}
          </span>
          <span className="text-gray-400">
            {pkg.durationDays} Hari
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-[#E2F827] transition-colors">
          {pkg.name}
        </h3>

        {/* Price */}
        <div className="pt-2 border-t border-[#232730]">
          <span className="text-[11px] uppercase tracking-wider text-gray-400 block mb-0.5 font-medium">
            Mulai Dari
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {pkg.priceEstimateDisplay}
          </div>
        </div>

        {/* Key Logistics */}
        <div className="space-y-2 pt-3 border-t border-[#232730] text-xs text-gray-300 font-light">
          <div>
            <span className="text-white font-semibold">Maskapai:</span> {pkg.airline}
          </div>
          <div>
            <span className="text-white font-semibold">Makkah:</span> {pkg.hotelMakkah.name} ({pkg.hotelMakkah.distanceMeters}m)
          </div>
          <div>
            <span className="text-white font-semibold">Madinah:</span> {pkg.hotelMadinah.name} ({pkg.hotelMadinah.distanceMeters}m)
          </div>
        </div>

        {/* PPIU Partner notice */}
        <div className="text-[11px] text-gray-400 pt-1">
          Penyelenggara Resmi: <span className="text-gray-300 font-medium">{pkg.ppiuPartner.name}</span>
        </div>
      </div>

      {/* Card Action */}
      <div className="px-6 py-4 bg-[#1C1F26] border-t border-[#232730] flex items-center justify-between text-xs">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelectDetail(pkg);
          }}
          className="text-gray-300 hover:text-white uppercase tracking-wider font-semibold transition-colors cursor-pointer py-1.5 min-h-[36px] flex items-center"
        >
          Detail Perjalanan
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onConsult(pkg);
          }}
          className="text-[#E2F827] hover:text-[#D4F636] uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-colors cursor-pointer py-1.5 min-h-[36px]"
        >
          <span>Konsultasi</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
