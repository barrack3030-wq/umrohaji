import React from 'react';
import { PageRoute } from '../types';
import { ArrowRight, ArrowUpRight, ShieldCheck, HeartHandshake, Eye } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="bg-[#0A0B0D] text-white min-h-screen pt-32 pb-28 px-6 sm:px-8 lg:px-12 selection:bg-[#E2F827] selection:text-black">
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* Profile Hero Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl bg-[#14161A] border border-[#232730]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85"
                alt="Aji Zulfikar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E2F827]">
              <span>◆</span>
              <span>Tentang Saya</span>
            </div>

            <h1 className="text-4xl sm:text-6xl text-white font-extrabold tracking-tight">
              Aji Zulfikar
            </h1>

            <p className="text-sm uppercase tracking-wider text-[#E2F827] font-semibold -mt-2">
              Pendamping & Affiliate Umrah untuk Jamaah Sulawesi
            </p>

            <div className="space-y-4 text-base sm:text-lg text-gray-300 font-light leading-relaxed pt-2">
              <p>
                Saya membantu calon jamaah dan keluarga dari berbagai wilayah di Sulawesi—mulai dari Palu, Makassar, Kendari, Manado, Mamuju, hingga Gorontalo—memahami pilihan paket Umrah secara jernih, transparan, dan objektif.
              </p>
              <p>
                Perjalanan ibadah ke Tanah Suci adalah momen berharga yang memerlukan persiapan fisik, mental, dan logistik yang tepat. Sebagai pendamping dan mitra affiliate, peran saya adalah memberikan informasi yang jujur mengenai rute penerbangan, jarak riil akomodasi hotel, dan menghubungkan Anda langsung dengan PPIU berizin resmi Kementerian Agama RI.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="px-8 py-3.5 bg-[#E2F827] text-black hover:bg-[#D4F636] text-xs uppercase tracking-wider font-semibold rounded-full flex items-center gap-2 transition-all cursor-pointer shadow-lg hover:shadow-[#E2F827]/20"
              >
                <span>Mulai Konsultasi WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Principles Section */}
        <div className="pt-16 border-t border-[#232730]">
          <div className="max-w-2xl mb-12 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E2F827]">
              <span>◆</span>
              <span>Prinsip Kerja</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Kejujuran informasi di atas segalanya.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#14161A] border border-[#232730] rounded-2xl p-6 space-y-3 shadow-xl">
              <span className="text-xs font-bold text-[#E2F827]">01</span>
              <h3 className="text-lg font-bold text-white">Tanpa Klaim Berlebihan</h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Kami menyampaikan kondisi riil akomodasi, jarak meter hotel ke pelataran masjid, serta tantangan transit tanpa janji manis yang menyesatkan.
              </p>
            </div>

            <div className="bg-[#14161A] border border-[#232730] rounded-2xl p-6 space-y-3 shadow-xl">
              <span className="text-xs font-bold text-[#E2F827]">02</span>
              <h3 className="text-lg font-bold text-white">Keamanan Transaksi</h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Tidak ada rekening penampung pribadi. Seluruh proses pendaftaran dan pembayaran disetorkan langsung ke rekening bank resmi atas nama badan hukum PPIU terkait.
              </p>
            </div>

            <div className="bg-[#14161A] border border-[#232730] rounded-2xl p-6 space-y-3 shadow-xl">
              <span className="text-xs font-bold text-[#E2F827]">03</span>
              <h3 className="text-lg font-bold text-white">Konsultasi Bebas Biaya</h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Anda bebas berdiskusi dan menanyakan perbandingan rute tanpa kewajiban untuk langsung mendaftar. Keputusan akhir sepenuhnya di tangan Anda dan keluarga.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-8 sm:p-10 bg-[#14161A] border border-[#232730] rounded-3xl space-y-4 shadow-2xl">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#E2F827] font-semibold block">
            KETERANGAN KEMITRAAN AFFILIATE (DISCLAIMER)
          </span>
          <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
            Aji Zulfikar bukan Penyelenggara Perjalanan Ibadah Umrah (PPIU). Layanan ini beroperasi sebagai konsultan independen dan perantara informasi (affiliate) yang bermitra dengan PPIU resmi berizin SK Kementerian Agama RI yang tercantum pada setiap paket perjalanan. Penyelenggaraan perjalanan ibadah, penerbitan visa, dan tiket penerbangan sepenuhnya merupakan tanggung jawab PPIU mitra yang bersangkutan.
          </p>
        </div>

      </div>
    </div>
  );
};
