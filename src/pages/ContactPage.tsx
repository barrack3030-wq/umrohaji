import React from 'react';
import { PageRoute } from '../types';
import { ArrowRight, ArrowUpRight, MessageSquare, ShieldCheck, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { OFFICIAL_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="bg-[#0A0B0D] text-white min-h-screen pt-32 pb-28 px-6 sm:px-8 lg:px-12 selection:bg-[#E2F827] selection:text-black">
      <div className="max-w-5xl mx-auto">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E2F827]">
            <span>◆</span>
            <span>Komunikasi & Konsultasi</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl text-white font-extrabold tracking-tight">
            Hubungi <span className="text-[#E2F827]">Aji Zulfikar</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            Silakan hubungi kami untuk mendiskusikan rencana keberangkatan keluarga, mengecek legalitas izin resmi PPIU mitra di SISKOPATUH, atau berkonsultasi mengenai rute penerbangan paling nyaman dari daerah Anda di Sulawesi.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Main Action Block */}
          <div className="lg:col-span-7 bg-[#14161A] text-white p-8 sm:p-10 rounded-3xl border border-[#232730] space-y-8 shadow-2xl">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#E2F827] font-semibold block">
                KONSULTASI LANGSUNG
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Diskusi Personal via WhatsApp
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                Setiap percakapan ditanggapi secara langsung oleh Aji Zulfikar tanpa pesan otomatis bot, demi memahami detail kebutuhan keluarga Anda secara tepat.
              </p>
            </div>

            <div className="p-6 bg-[#1C1F26] rounded-2xl border border-[#2B2E36] space-y-3 text-xs text-gray-300">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Nomor WhatsApp Resmi:</span>
                <span className="font-mono text-white font-semibold">+62 821-8888-0000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Waktu Respon:</span>
                <span className="text-white">Setiap Hari (08.00 - 21.00 WITA)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Email Korespondensi:</span>
                <span className="text-white">konsultasi@ajizulfikar.com</span>
              </div>
            </div>

            <div>
              <button
                onClick={onOpenConsultation}
                className="w-full py-4 bg-[#E2F827] hover:bg-[#D4F636] text-black text-xs uppercase tracking-wider font-semibold rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg hover:shadow-[#E2F827]/20"
              >
                <span>Mulai Percakapan WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>

          {/* Context and Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#14161A] p-7 rounded-3xl border border-[#232730] space-y-3 shadow-xl">
              <span className="text-xs uppercase tracking-widest text-[#E2F827] font-semibold block">
                Jangkauan Wilayah Konsultasi
              </span>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                Melayani jamaah dan keluarga dari 6 provinsi: Sulawesi Selatan, Sulawesi Tengah, Sulawesi Tenggara, Sulawesi Utara, Sulawesi Barat, dan Gorontalo.
              </p>
            </div>

            <div className="p-7 bg-[#14161A] border border-[#232730] rounded-3xl space-y-3 text-xs shadow-xl">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#E2F827]" />
                <span>Transparansi Pembayaran</span>
              </div>
              <p className="text-gray-300 leading-relaxed font-light">
                Demi keamanan mutlak jamaah, kami tidak pernah meminta transfer dana ke rekening individu. Seluruh akad dan pembayaran paket Umrah disetorkan langsung ke rekening giro resmi PPIU yang berizin Kemenag RI.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
