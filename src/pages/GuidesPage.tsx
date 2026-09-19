import React, { useState } from 'react';
import { PageRoute, GuideArticle } from '../types';
import { GUIDES_DATA } from '../data/guidesData';
import { ArrowLeft, ArrowRight, Clock, BookOpen, MessageSquare } from 'lucide-react';

interface GuidesPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: (pref?: { notes?: string }) => void;
}

export const GuidesPage: React.FC<GuidesPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [activeArticle, setActiveArticle] = useState<GuideArticle | null>(null);

  // Curated imagery for articles
  const articleImages: Record<string, string> = {
    'dokumen-paspor-sulawesi': 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1600&q=85',
    'perjalanan-transit-sulawesi': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=85',
    'persiapan-lansia-umrah': 'https://images.unsplash.com/photo-1584441405886-bc91be61e56a?auto=format&fit=crop&w=1600&q=85',
    'koper-dan-perlengkapan': 'https://images.unsplash.com/photo-1588600878108-578307a3cc9d?auto=format&fit=crop&w=1600&q=85',
  };

  if (activeArticle) {
    const articleImg = articleImages[activeArticle.id] || 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1600&q=85';
    return (
      <div className="bg-[#0A0B0D] text-white min-h-screen pt-28 sm:pt-32 pb-28 px-4 sm:px-8 lg:px-12 selection:bg-[#E2F827] selection:text-black">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <button
            onClick={() => setActiveArticle(null)}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400 hover:text-[#E2F827] transition-colors mb-8 sm:mb-10 cursor-pointer font-semibold min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Panduan
          </button>

          {/* Article Header */}
          <div className="space-y-4 mb-8 sm:mb-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E2F827]">
              <span>◆</span>
              <span>{activeArticle.categoryLabel} • {activeArticle.readTimeMinutes} MENIT BACA</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl text-white font-extrabold leading-tight tracking-tight">
              {activeArticle.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed pt-2">
              {activeArticle.excerpt}
            </p>
          </div>

          {/* Featured Photograph */}
          <div className="aspect-[16/9] overflow-hidden rounded-3xl bg-[#14161A] mb-8 sm:mb-12 shadow-2xl border border-[#232730]">
            <img
              src={articleImg}
              alt={activeArticle.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Takeaways */}
          <div className="p-6 sm:p-8 bg-[#14161A] border-l-4 border-[#E2F827] rounded-2xl mb-8 sm:mb-12 space-y-4 shadow-xl">
            <span className="text-xs uppercase tracking-widest text-[#E2F827] font-bold block">
              Poin Penting
            </span>
            <ul className="space-y-3 text-sm text-gray-200 font-light">
              {activeArticle.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#E2F827] font-bold">✦</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body */}
          <div className="max-w-none text-gray-200 font-light text-base sm:text-lg leading-relaxed space-y-6">
            <div 
              className="whitespace-pre-line leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ 
                __html: activeArticle.contentHtmlOrMarkdown
                  .replace(/### (.*?)\n/g, '<h3 class="text-2xl font-bold text-white mt-8 mb-3">$1</h3>')
                  .replace(/\* (.*?)\n/g, '<li class="ml-4 list-disc text-sm sm:text-base text-gray-300 my-1">$1</li>') 
              }}
            />
          </div>

          {/* Footer of Article */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-[#232730] flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#14161A] p-6 sm:p-8 rounded-3xl border border-[#232730]">
            <div className="text-center sm:text-left">
              <p className="text-lg sm:text-xl font-bold text-white">
                Punya pertanyaan mengenai topik ini?
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Aji Zulfikar siap membantu mendiskusikan kebutuhan teknis perjalanan Anda.
              </p>
            </div>
            <button
              onClick={() => onOpenConsultation({ notes: `Pertanyaan dari panduan: ${activeArticle.title}` })}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#E2F827] text-black hover:bg-[#D4F636] text-xs uppercase tracking-wider font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap shadow-lg min-h-[44px] flex items-center justify-center"
            >
              Tanya via WhatsApp
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0A0B0D] text-white min-h-screen pt-28 sm:pt-32 pb-28 px-4 sm:px-8 lg:px-12 selection:bg-[#E2F827] selection:text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E2F827]">
            <span>◆</span>
            <span>Edisi Panduan Perjalanan</span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl text-white font-extrabold tracking-tight">
            Panduan <span className="text-[#E2F827]">Perjalanan</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 font-light leading-relaxed">
            Catatan praktis, informasi regulasi paspor imigrasi, strategi transit penerbangan, dan panduan mendampingi orang tua di Tanah Suci khusus bagi jamaah asal Sulawesi.
          </p>
        </div>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 pt-8 border-t border-[#232730]">
          {GUIDES_DATA.map((article) => {
            const img = articleImages[article.id] || 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1600&q=85';
            return (
              <article
                key={article.id}
                onClick={() => {
                  setActiveArticle(article);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group cursor-pointer bg-[#14161A] border border-[#232730] hover:border-[#E2F827]/50 rounded-3xl overflow-hidden flex flex-col space-y-0 transition-all duration-300 shadow-xl"
              >
                <div className="aspect-[16/10] overflow-hidden bg-black relative">
                  <img
                    src={img}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-wider text-[#E2F827] font-semibold">
                    {article.categoryLabel}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-gray-400">
                      <span>{article.readTimeMinutes} menit baca</span>
                    </div>

                    <h2 className="text-2xl font-bold text-white group-hover:text-[#E2F827] transition-colors leading-snug">
                      {article.title}
                    </h2>

                    <p className="text-sm text-gray-300 font-light leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#232730] flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-[#E2F827] font-semibold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                      Baca Selengkapnya <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </div>
  );
};
