import React from 'react';
import { PageRoute, UmrahPackage } from '../types';
import { PACKAGES_DATA } from '../data/packagesData';
import { PackageCard } from '../components/PackageCard';
import { Heart, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ElderlyCarePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: (pref?: { packageName?: string; notes?: string }) => void;
  onSelectPackage: (pkg: UmrahPackage) => void;
}

export const ElderlyCarePage: React.FC<ElderlyCarePageProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectPackage
}) => {
  const elderlyPackages = PACKAGES_DATA.filter((p) => p.isElderlyFriendly);

  return (
    <div className="bg-[#0A0B0D] text-white min-h-screen pt-28 sm:pt-32 pb-28 px-4 sm:px-8 lg:px-12 selection:bg-[#E2F827] selection:text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E2F827]">
            <span>◆</span>
            <span>Dampingi Orang Tua & Jamaah Senior</span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl text-white font-extrabold tracking-tight leading-tight">
            Untuk mereka yang ingin <span className="text-[#E2F827]">kita muliakan</span>.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed pt-2">
            Bagi banyak keluarga, Umrah bukan hanya perjalanan pribadi. Ada orang tua yang ingin kita dampingi, keluarga yang ingin kita ajak, dan doa yang ingin kita panjatkan bersama di depan Ka'bah.
          </p>
        </div>

        {/* Hero Visual Pair */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-24">
          <div className="lg:col-span-7">
            <div className="aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl bg-[#14161A] border border-[#232730]">
              <img
                src="https://images.unsplash.com/photo-1584441405886-bc91be61e56a?auto=format&fit=crop&w=1600&q=85"
                alt="Mendampingi Orang Tua Umrah"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Kenyamanan fisik menentukan kekhusyukan hati.
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              Kondisi fisik orang tua tentu berbeda dengan usia muda. Menghindarkan mereka dari tanjakan curam, memastikan jeda waktu istirahat yang lapang antar-waktu shalat, serta memilih penerbangan langsung dari Makassar tanpa transit melelahkan adalah langkah awal terbaik.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenConsultation({ notes: 'Konsultasi kebutuhan Umrah khusus orang tua/lansia' })}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#E2F827] text-black hover:bg-[#D4F636] text-xs uppercase tracking-wider font-semibold rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg hover:shadow-[#E2F827]/20 min-h-[44px]"
              >
                <span>Konsultasikan Bersama Aji</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Pillars in Dark Cards */}
        <div className="py-12 border-t border-b border-[#232730] mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#14161A] border border-[#232730] rounded-2xl p-6 space-y-3 shadow-xl">
              <span className="text-xs font-bold text-[#E2F827]">01</span>
              <h3 className="text-lg font-bold text-white">Hotel Ring 1</h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Jarak 50–250 meter langsung ke pelataran Masjidil Haram dan Nabawi, memudahkan orang tua beristirahat di kamar seusai shalat berjamaah tanpa perlu naik shuttle bus.
              </p>
            </div>

            <div className="bg-[#14161A] border border-[#232730] rounded-2xl p-6 space-y-3 shadow-xl">
              <span className="text-xs font-bold text-[#E2F827]">02</span>
              <h3 className="text-lg font-bold text-white">Kursi Roda & Skuter</h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Akses jalur pendorong kursi roda resmi terdaftar di Masjidil Haram serta skuter elektrik di lantai mezanin untuk tawaf dan sa'i yang aman dan tidak melelahkan.
              </p>
            </div>

            <div className="bg-[#14161A] border border-[#232730] rounded-2xl p-6 space-y-3 shadow-xl">
              <span className="text-xs font-bold text-[#E2F827]">03</span>
              <h3 className="text-lg font-bold text-white">Penerbangan Efisien</h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Prioritas jadwal penerbangan langsung dari Bandara Sultan Hasanuddin Makassar (UPG) menuju Jeddah/Madinah untuk memangkas keletihan transit berulang kali.
              </p>
            </div>

            <div className="bg-[#14161A] border border-[#232730] rounded-2xl p-6 space-y-3 shadow-xl">
              <span className="text-xs font-bold text-[#E2F827]">04</span>
              <h3 className="text-lg font-bold text-white">Ritme Ibadah Tenang</h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Jadwal ziarah yang tidak terburu-buru, pendampingan muthawwif berpengalaman yang sabar dan santun, serta waktu istirahat yang manusiawi dan mencukupi.
              </p>
            </div>
          </div>
        </div>

        {/* Recommended Packages for Parents */}
        <div className="space-y-10">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#E2F827] font-semibold block mb-2">
              PROGRAM PILIHAN
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Paket dengan Akomodasi Dekat Pelataran
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {elderlyPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onSelectDetail={onSelectPackage}
                onConsult={(p) => onOpenConsultation({ packageName: p.name, notes: 'Konsultasi paket ramah lansia' })}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
