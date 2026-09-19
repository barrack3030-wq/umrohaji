import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  UserCheck, 
  FileText, 
  Lock, 
  SearchCheck, 
  MessageCircle, 
  HeartHandshake 
} from 'lucide-react';

interface TrustSectionProps {
  onOpenConsultation: () => void;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ onOpenConsultation }) => {
  const trustPoints = [
    {
      icon: MapPin,
      title: 'Fokus Khusus Jamaah Sulawesi',
      desc: 'Memahami betul rute penerbangan lokal, titik transit Bandara Hasanuddin (UPG) & Soekarno-Hatta (CGK), hingga perjalanan darat dari pelosok kabupaten.'
    },
    {
      icon: UserCheck,
      title: 'Konsultasi Personal & Santun',
      desc: 'Bukan call center robotik. Anda berdiskusi langsung dengan Aji Zulfikar, praktisi tour leader yang mengerti kebutuhan psikologis keluarga dan orang tua.'
    },
    {
      icon: FileText,
      title: 'Informasi Paket yang Transparan',
      desc: 'Rincian nama hotel, jarak meter ke pelataran masjid, maskapai penerbangan, dan komponen biaya disampaikan jujur tanpa iming-iming jebakan harga.'
    },
    {
      icon: ShieldCheck,
      title: 'Identitas PPIU Resmi Terbuka',
      desc: 'Setiap paket mencantumkan nama PT dan Nomor SK Izin Operasional Kemenag RI. Anda dapat mengecek status legalitasnya secara langsung.'
    },
    {
      icon: Lock,
      title: 'Tanpa Pembayaran Terselubung',
      desc: 'Seluruh pembayaran uang muka maupun pelunasan ditransfer langsung ke rekening giro resmi atas nama badan hukum PPIU penyelenggara. Nol risiko rekening perantara.'
    },
    {
      icon: SearchCheck,
      title: 'Dukungan Verifikasi Mandiri',
      desc: 'Kami memandu Anda cara memvalidasi paket di portal resmi SISKOPATUH atau aplikasi Haji Pintar milik Kementerian Agama RI sebelum menandatangani akad.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Decorative subtle texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60 inline-block mb-3">
            Integritas & Keterbukaan
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Kenapa Konsultasi dengan Aji?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-300 leading-relaxed">
            Menghubungkan niat suci keluarga Sulawesi menuju Baitullah dengan informasi yang tenang, jernih, dan dapat dipertanggungjawabkan.
          </p>
        </div>

        {/* 6 Trust Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-stone-800/80 rounded-2xl p-6 border border-stone-700/70 hover:border-emerald-500/50 transition-all hover:bg-stone-800"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-900/60 border border-emerald-600/40 flex items-center justify-center text-emerald-300 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Transparent Legal Disclaimer Box (Prompt Requirement #14) */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 border-2 border-dashed border-amber-600/40 text-stone-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>Pernyataan Keterbukaan Hubungan Kerja (Affiliate Disclaimer)</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Website ini merupakan platform informasi dan pemasaran affiliate independen. Penyelenggaraan perjalanan ibadah Umrah sepenuhnya dilakukan oleh Penyelenggara Perjalanan Ibadah Umrah (PPIU) resmi berizin Kementerian Agama Republik Indonesia yang tercantum secara transparan pada setiap paket. Aji Zulfikar bertindak sebagai konsultan perencana dan tour leader pendamping.
              </p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="shrink-0 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Mulai Diskusi Bebas</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
