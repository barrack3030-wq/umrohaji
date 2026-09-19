import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { CITIES_DATA } from '../data/regionsData';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCity?: string;
  initialPackageName?: string;
  initialNotes?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  initialCity = '',
  initialPackageName = '',
  initialNotes = ''
}) => {
  const [city, setCity] = useState(initialCity || 'Makassar');
  const [customCity, setCustomCity] = useState('');
  const [month, setMonth] = useState('November 2026');
  const [pax, setPax] = useState('2');
  const [hasElderly, setHasElderly] = useState(false);
  const [packageName, setPackageName] = useState(initialPackageName);
  const [notes, setNotes] = useState(initialNotes);

  useEffect(() => {
    if (initialCity) setCity(initialCity);
    if (initialPackageName) setPackageName(initialPackageName);
    if (initialNotes) setNotes(initialNotes);
  }, [initialCity, initialPackageName, initialNotes, isOpen]);

  if (!isOpen) return null;

  const resolvedCity = city === 'Lainnya' ? (customCity || 'Sulawesi') : city;

  const generatedUrl = buildWhatsAppUrl({
    city: resolvedCity,
    month: month,
    pax: pax,
    hasElderly: hasElderly,
    packageName: packageName,
    customNote: notes
  });

  const previewMessage = `Assalamu'alaikum Aji Zulfikar, saya ingin berdiskusi mengenai rencana Umrah${packageName ? ` untuk *${packageName}*` : ''}. Berangkat dari ${resolvedCity}, perkiraan waktu ${month}${pax ? ` untuk ${pax} orang` : ''}${hasElderly ? ' (bersama orang tua/lansia)' : ''}.${notes ? ` Catatan: ${notes}` : ''} Mohon informasi pilihan paket PPIU resmi yang paling sesuai. Terima kasih.`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(generatedUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="bg-[#14161A] border border-[#232730] text-white w-full max-w-2xl shadow-2xl rounded-3xl p-6 sm:p-10 relative animate-in fade-in duration-300 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 transition-colors cursor-pointer"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-8">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#E2F827] font-semibold block">
            KONSULTASI PRIBADI • AJI ZULFIKAR
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Rencanakan Perjalanan Anda
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
            Diskusikan kebutuhan perjalanan keluarga Anda dari Sulawesi. Kami menyusun pesan awal yang rapi agar Aji dapat langsung memberikan rekomendasi rute dan paket PPIU yang tepat.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Kota Asal */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-300 mb-2 font-semibold">
                Kota / Kabupaten Asal
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-[#1C1F26] border border-[#2B2E36] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E2F827] transition-colors"
              >
                {CITIES_DATA.map((c) => (
                  <option key={c.id} value={c.name} className="bg-[#14161A]">
                    {c.name} ({c.provinceName})
                  </option>
                ))}
                <option value="Lainnya" className="bg-[#14161A]">Kota/Kabupaten Lainnya</option>
              </select>
            </div>

            {/* Rencana Waktu */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-300 mb-2 font-semibold">
                Perkiraan Bulan
              </label>
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full bg-[#1C1F26] border border-[#2B2E36] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E2F827] transition-colors"
              >
                <option value="Oktober 2026" className="bg-[#14161A]">Oktober 2026</option>
                <option value="November 2026" className="bg-[#14161A]">November 2026</option>
                <option value="Desember 2026 (Liburan)" className="bg-[#14161A]">Desember 2026 (Liburan)</option>
                <option value="Januari 2027" className="bg-[#14161A]">Januari 2027</option>
                <option value="Februari 2027" className="bg-[#14161A]">Februari 2027</option>
                <option value="Ramadhan 2027" className="bg-[#14161A]">Ramadhan 2027</option>
                <option value="Menyesuaikan Rekomendasi" className="bg-[#14161A]">Menyesuaikan Rekomendasi</option>
              </select>
            </div>
          </div>

          {city === 'Lainnya' && (
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-300 mb-2 font-semibold">
                Tuliskan Kota / Daerah Anda
              </label>
              <input
                type="text"
                placeholder="Contoh: Morowali, Enrekang, Toli-Toli..."
                value={customCity}
                onChange={(e) => setCustomCity(e.target.value)}
                className="w-full bg-[#1C1F26] border border-[#2B2E36] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E2F827]"
              />
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            {/* Jumlah Calon Jamaah */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-300 mb-2 font-semibold">
                Jumlah Jamaah
              </label>
              <input
                type="text"
                value={pax}
                onChange={(e) => setPax(e.target.value)}
                placeholder="Contoh: 2 orang suami-istri"
                className="w-full bg-[#1C1F26] border border-[#2B2E36] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E2F827]"
              />
            </div>

            {/* Checkbox Lansia */}
            <div className="pt-2 sm:pt-6">
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={hasElderly}
                  onChange={(e) => setHasElderly(e.target.checked)}
                  className="w-4 h-4 accent-[#E2F827] cursor-pointer"
                />
                <span className="text-xs text-gray-300">
                  Ada anggota keluarga lansia / butuh kursi roda
                </span>
              </label>
            </div>
          </div>

          {/* Catatan Kebutuhan Khusus */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-300 mb-2 font-semibold">
              Kebutuhan / Pertanyaan Tertentu (Opsional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Contoh: Menginginkan hotel yang sangat dekat pelataran, atau penerbangan langsung dari Makassar tanpa transit."
              className="w-full bg-[#1C1F26] border border-[#2B2E36] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E2F827] resize-none"
            />
          </div>

          {/* Message Preview */}
          <div className="p-4 bg-[#1C1F26] border border-[#2B2E36] rounded-xl text-xs text-gray-300 leading-relaxed">
            <span className="text-[10px] uppercase tracking-wider text-[#E2F827] block font-semibold mb-1">
              Pratinjau Pesan WhatsApp
            </span>
            <p className="italic font-light">{previewMessage}</p>
          </div>

          {/* Submit */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-gray-400 leading-normal">
              Konsultasi bebas biaya. Pembayaran resmi disetorkan langsung ke rekening PPIU berizin.
            </p>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#E2F827] hover:bg-[#D4F636] text-black text-xs uppercase tracking-wider font-semibold rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-[#E2F827]/20 transition-all"
            >
              <span>Lanjutkan ke WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
