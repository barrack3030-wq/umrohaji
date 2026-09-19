import React, { useState } from 'react';
import { PageRoute } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const [legalModal, setLegalModal] = useState<'disclaimer' | 'privacy' | 'terms' | null>(null);

  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090D14] text-white border-t border-[#202B3B] pt-20 sm:pt-28 pb-28 sm:pb-16 relative overflow-hidden">
      
      {/* Background ambient glow behind CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E2F827]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Giant Hero CTA: Mari Bicara */}
        <div className="text-center py-10 sm:py-16">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#E2F827] font-semibold mb-4">
            MULAI KONSULTASI IBADAH ANDA
          </p>
          
          <button
            onClick={onOpenConsultation}
            className="group inline-flex flex-wrap items-center justify-center font-bold text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[130px] tracking-tighter leading-none hover:scale-[1.02] transition-transform duration-300 cursor-pointer gap-x-2 gap-y-1"
          >
            <span className="text-white group-hover:text-gray-200 transition-colors">Mari </span>
            <span className="text-[#E2F827] group-hover:underline decoration-4 underline-offset-8">Bicara</span>
            <ArrowUpRight className="w-8 h-8 xs:w-10 xs:h-10 sm:w-16 sm:h-16 lg:w-24 lg:h-24 text-[#E2F827] group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 shrink-0" />
          </button>

          <p className="mt-5 text-xs sm:text-base text-gray-300 max-w-xl mx-auto font-light leading-relaxed px-2">
            Terhubung langsung dengan Aji Zulfikar untuk mendiskusikan ketersediaan kursi, jadwal transit penerbangan dari bandara di Sulawesi, serta akomodasi hotel ring 1 terbaik.
          </p>

          <div className="mt-7 flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto">
            <button
              onClick={onOpenConsultation}
              className="w-full xs:w-auto flex items-center justify-center gap-2 bg-[#E2F827] hover:bg-[#D4F636] text-black font-semibold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full shadow-lg hover:shadow-[#E2F827]/25 transition-all duration-300 cursor-pointer min-h-[44px]"
            >
              <span>Hubungi via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleNav('/paket-umrah')}
              className="w-full xs:w-auto flex items-center justify-center gap-2 bg-[#14161A] hover:bg-[#1C1F26] text-white border border-[#2B2E36] font-medium text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-300 cursor-pointer min-h-[44px]"
            >
              <span>Jelajahi Semua Paket</span>
            </button>
          </div>
        </div>

        {/* Minimal Navigation & Regional Strip */}
        <div className="pt-14 pb-12 border-t border-[#232730] grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <span className="block text-xs uppercase tracking-widest text-[#E2F827] font-semibold mb-3">
              LAYANAN & PAKET
            </span>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button onClick={() => handleNav('/paket-umrah')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Paket Umrah Reguler Makassar
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/umrah-lansia')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Paket Khusus Ramah Lansia
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/paket-umrah')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Paket Umrah Keluarga Sulawesi
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/paket-umrah')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Paket Ramadhan & Lailatul Qadr
                </button>
              </li>
            </ul>
          </div>

          <div>
            <span className="block text-xs uppercase tracking-widest text-[#E2F827] font-semibold mb-3">
              RUTE DARI SULAWESI
            </span>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button onClick={() => handleNav('/umrah-dari-sulawesi-selatan')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Sulawesi Selatan (Direct UPG)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/umrah-dari-sulawesi-tengah')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Sulawesi Tengah (Palu & Luwuk)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/umrah-dari-sulawesi-tenggara')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Sulawesi Tenggara (Kendari & Bau-Bau)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/umrah-dari-sulawesi-utara')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Sulawesi Utara & Gorontalo
                </button>
              </li>
            </ul>
          </div>

          <div>
            <span className="block text-xs uppercase tracking-widest text-[#E2F827] font-semibold mb-3">
              INFORMASI RESMI
            </span>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button onClick={() => handleNav('/panduan-umrah')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Panduan Paspor & Biometrik
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/tentang-aji')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Tentang Aji Zulfikar
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/faq')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Tanya Jawab (FAQ)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/kontak')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Hubungi Kontak Resmi
                </button>
              </li>
            </ul>
          </div>

          <div>
            <span className="block text-xs uppercase tracking-widest text-[#E2F827] font-semibold mb-3">
              KEMITRAAN RESMI
            </span>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Mitra resmi Penyelenggara Perjalanan Ibadah Umrah (PPIU) berizin Kementerian Agama RI terdaftar di SISKOPATUH. Transparan, amanah, dan tanpa biaya perantara tambahan.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#232730] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="text-center sm:text-left">
            © 2026 Aji Zulfikar. Seluruh Hak Cipta Dilindungi.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button onClick={() => setLegalModal('disclaimer')} className="hover:text-white transition-colors cursor-pointer">
              Penafian Kemitraan
            </button>
            <button onClick={() => setLegalModal('privacy')} className="hover:text-white transition-colors cursor-pointer">
              Kebijakan Privasi
            </button>
            <button onClick={() => setLegalModal('terms')} className="hover:text-white transition-colors cursor-pointer">
              Syarat & Ketentuan
            </button>
          </div>
        </div>

      </div>

      {/* Legal Information Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#14161A] border border-[#2B2E36] rounded-2xl max-w-lg w-full p-8 text-white space-y-5 animate-in fade-in duration-200 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#232730] pb-4">
              <h3 className="font-bold text-xl">
                {legalModal === 'disclaimer' && 'Disclaimer Kemitraan Affiliate'}
                {legalModal === 'privacy' && 'Kebijakan Privasi'}
                {legalModal === 'terms' && 'Syarat & Ketentuan'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="text-gray-400 hover:text-white text-sm"
              >
                Tutup
              </button>
            </div>

            <div className="text-xs leading-relaxed text-gray-300 space-y-4 max-h-[60vh] overflow-y-auto pr-2 font-light">
              {legalModal === 'disclaimer' && (
                <>
                  <p>
                    Aji Zulfikar bertindak sebagai konsultan independen, pendamping, dan mitra affiliate resmi yang memfasilitasi calon jamaah di wilayah Sulawesi untuk memilih program paket Umrah dari Penyelenggara Perjalanan Ibadah Umrah (PPIU) berizin resmi Kementerian Agama Republik Indonesia.
                  </p>
                  <p>
                    Semua akad pendaftaran dan transfer biaya paket Umrah disetorkan langsung ke rekening giro resmi PPIU partner, bukan ke rekening perseorangan Aji Zulfikar.
                  </p>
                </>
              )}
              {legalModal === 'privacy' && (
                <p>
                  Data kontak (nama, nomor WhatsApp, kota asal di Sulawesi) yang Anda masukkan hanya digunakan untuk membantu merumuskan solusi tiket, akomodasi, dan konsultasi keberangkatan Umrah bersama PPIU mitra.
                </p>
              )}
              {legalModal === 'terms' && (
                <p>
                  Jadwal keberangkatan, tipe hotel, dan maskapai penerbangan tunduk pada regulasi resmi Kementerian Haji Arab Saudi serta PPIU yang bersangkutan.
                </p>
              )}
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 bg-[#E2F827] text-black text-xs font-semibold rounded-full hover:bg-[#D4F636] transition-colors cursor-pointer"
              >
                Mengerti
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

