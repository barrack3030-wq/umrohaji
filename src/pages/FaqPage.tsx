import React, { useState, useMemo } from 'react';
import { PageRoute } from '../types';
import { FAQ_DATA } from '../data/faqData';
import { Plus, Minus, Search, ArrowUpRight } from 'lucide-react';

interface FaqPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: (pref?: { notes?: string }) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': true
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = [
    { id: 'all', label: 'Semua Pertanyaan' },
    { id: 'Pendaftaran & Transaksi', label: 'Pendaftaran & Transaksi' },
    { id: 'Rute & Penerbangan Sulawesi', label: 'Rute Sulawesi' },
    { id: 'Lansia & Keluarga', label: 'Lansia & Keluarga' },
    { id: 'Legalitas & PPIU', label: 'Legalitas PPIU' },
  ];

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchQ = item.question.toLowerCase().includes(q);
        const matchA = item.answer.toLowerCase().includes(q);
        if (!matchQ && !matchA) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-[#0A0B0D] text-white min-h-screen pt-32 pb-28 px-6 sm:px-8 lg:px-12 selection:bg-[#E2F827] selection:text-black">
      <div className="max-w-4xl mx-auto">
        
        {/* Editorial Header */}
        <div className="mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E2F827]">
            <span>◆</span>
            <span>Pertanyaan Umum</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl text-white font-extrabold tracking-tight">
            Tanya <span className="text-[#E2F827]">Jawab</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            Jawaban jernih seputar status affiliate Aji Zulfikar, keamanan setoran dana jamaah, prosedur penerbangan dari Sulawesi, dan pendampingan orang tua.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#232730]">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full cursor-pointer transition-all ${
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

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari topik pertanyaan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#14161A] border border-[#232730] rounded-full pl-10 pr-4 py-2 text-xs text-white focus:outline-none focus:border-[#E2F827] placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* FAQ Accordion in Dark Cards */}
        <div className="space-y-4 pt-6">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openItems[faq.id];
            return (
              <div 
                key={faq.id} 
                className="bg-[#14161A] border border-[#232730] rounded-2xl p-6 transition-colors shadow-lg hover:border-[#E2F827]/40"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-start justify-between gap-6 text-left cursor-pointer group"
                >
                  <span className="text-lg sm:text-xl text-white font-bold group-hover:text-[#E2F827] transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <span className="text-[#E2F827] p-1 flex-shrink-0 mt-0.5">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-4 text-sm sm:text-base text-gray-300 font-light leading-relaxed animate-in fade-in duration-200 border-t border-[#232730] mt-4">
                    <p>{faq.answer}</p>
                    <span className="text-[10px] uppercase tracking-wider text-[#E2F827] block font-semibold mt-3">
                      Kategori: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Inquiry Callout */}
        <div className="mt-16 p-8 bg-[#14161A] text-white rounded-3xl border border-[#232730] shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Pertanyaan Anda belum tercantum?
            </h3>
            <p className="text-xs text-gray-300 mt-1">
              Diskusikan langsung pertanyaan Anda secara santai via WhatsApp bersama Aji Zulfikar.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation({ notes: 'Pertanyaan baru dari halaman FAQ' })}
            className="px-7 py-3.5 bg-[#E2F827] hover:bg-[#D4F636] text-black text-xs uppercase tracking-wider font-semibold rounded-full flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shadow-lg"
          >
            <span>Tanya via WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 text-black" />
          </button>
        </div>

      </div>
    </div>
  );
};
