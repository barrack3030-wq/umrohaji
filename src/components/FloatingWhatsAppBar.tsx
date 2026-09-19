import React from 'react';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import { OFFICIAL_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface FloatingWhatsAppBarProps {
  onOpenConsultation?: () => void;
  onOpenModal?: () => void;
}

export const FloatingWhatsAppBar: React.FC<FloatingWhatsAppBarProps> = ({ 
  onOpenConsultation,
  onOpenModal 
}) => {
  const handleOpen = onOpenConsultation || onOpenModal || (() => {});

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 p-3 bg-[#0A0B0D]/95 backdrop-blur-md border-t border-[#232730] sm:hidden shadow-2xl">
        <div className="flex items-center gap-2">
          <button
            onClick={handleOpen}
            className="flex-1 py-3 px-4 bg-[#E2F827] hover:bg-[#D4F636] text-black text-xs uppercase tracking-wider font-semibold rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all active:scale-[0.98]"
          >
            <MessageSquare className="w-3.5 h-3.5 text-black" />
            <span>Konsultasi Umrah</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-black" />
          </button>
          <a
            href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=Assalamu%27alaikum%20Aji%20Zulfikar%2C%20saya%20ingin%20berdiskusi%20mengenai%20rencana%20ibadah%20Umrah%20dari%20Sulawesi.`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#14161A] text-white hover:text-[#E2F827] border border-[#232730] rounded-full flex items-center justify-center transition-colors"
            title="Chat WhatsApp Langsung"
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Desktop Floating Action */}
      <div className="hidden sm:block fixed bottom-8 right-8 z-40 animate-in fade-in duration-500">
        <button
          onClick={handleOpen}
          className="group flex items-center gap-3 bg-[#14161A] hover:bg-[#1C1F26] text-white pl-4 pr-5 py-3 rounded-full shadow-2xl border border-[#2B2E36] transition-all hover:scale-105 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-[#E2F827] flex items-center justify-center text-black">
            <MessageSquare className="w-4 h-4 text-black" />
          </div>
          <div className="text-left pr-1">
            <div className="text-[10px] uppercase tracking-widest text-[#E2F827] font-semibold leading-none">
              Aji Zulfikar
            </div>
            <div className="text-xs font-semibold text-white mt-1 flex items-center gap-1">
              <span>Konsultasi WhatsApp</span>
              <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-[#E2F827] transition-colors" />
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

