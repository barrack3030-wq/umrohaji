import React from 'react';
import { 
  HeartHandshake, 
  MapPin, 
  Footprints, 
  Pill, 
  Plane, 
  Accessibility, 
  Clock, 
  ShieldAlert, 
  MessageCircle, 
  ArrowRight 
} from 'lucide-react';
import { PageRoute } from '../types';

interface ElderlyCareSectionProps {
  onOpenConsultation: (pref?: { packageName?: string }) => void;
  onNavigate?: (route: PageRoute) => void;
}

export const ElderlyCareSection: React.FC<ElderlyCareSectionProps> = ({ 
  onOpenConsultation, 
  onNavigate 
}) => {
  const points = [
    {
      icon: Accessibility,
      title: 'Akses Kursi Roda & Skuter Resmi',
      description: 'Kami bantu memandu opsi sewa skuter listrik resmi di lantai mezanin atau jasa pendorong resmi berseragam hijau di Masjidil Haram, menjamin keamanan orang tua saat Thawaf & Sa’i.'
    },
    {
      icon: MapPin,
      title: 'Jarak Hotel Ring 1 (Pelataran)',
      description: 'Untuk orang tua, selisih 200 meter sangat berharga. Kami merekomendasikan hotel dengan akses lift langsung menuju pelataran suci tanpa jalan menanjak atau tangga curam.'
    },
    {
      icon: Footprints,
      title: 'Akses Langsung ke Pintu Masjid',
      description: 'Memilih pintu gerbang masuk yang paling dekat dengan sektor shalat lansia dan toilet agar orang tua tidak tersesat atau kehabisan wudhu di tengah kepadatan jamaah.'
    },
    {
      icon: HeartHandshake,
      title: 'Pendampingan Sabar & Kultural',
      description: 'Pendekatan penuh kasih sayang dengan kehangatan budaya Sulawesi (sopan santun, tidak tergesa-gesa, dan selalu mendengarkan keluhan letih orang tua).'
    },
    {
      icon: Plane,
      title: 'Manajemen Kelelahan Penerbangan',
      description: 'Pilihan penerbangan direct dari Makassar atau connecting flight dengan jeda transit yang cukup untuk tidur sebentar di lounge bandara.'
    },
    {
      icon: Pill,
      title: 'Manajemen Obat & Kesiapan Fisik',
      description: 'Panduan membawa resep dokter, takaran obat harian cadangan, serta latihan berjalan santai di kampung halaman sebelum hari keberangkatan.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-stone-100/90 text-stone-800 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3 border border-emerald-200">
            <HeartHandshake className="w-4 h-4 text-emerald-700" />
            <span>Spesialisasi Kenyamanan Keluarga & Orang Tua</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Ingin Memberangkatkan Orang Tua Umrah?
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Menghadiahkan perjalanan ke Tanah Suci untuk ayah dan ibu adalah bakti termulia. Namun stamina fisik orang tua membutuhkan perencanaan yang jauh lebih teliti dan manusiawi.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div 
                key={i} 
                className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/80 hover:shadow-md hover:border-emerald-300 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-100 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-stone-900 mb-2">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Non-Medis & CTA Box */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-emerald-200 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                <span>Pemberitahuan Etika & Batasan Pendampingan</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl">
                Konsultasi kami berfokus pada kelayakan logistik perjalanan, jarak hotel, dan penyediaan fasilitas fisik non-medis. Kami tidak memberikan diagnosis, terapi, atau nasihat medis dokter. Calon jamaah yang memiliki riwayat penyakit khusus wajib berkonsultasi dengan dokter keluarga sebelum keberangkatan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              {onNavigate && (
                <button
                  onClick={() => onNavigate('/umrah-lansia')}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium text-xs sm:text-sm transition-colors text-center"
                >
                  Baca Panduan Lengkap Lansia
                </button>
              )}
              <button
                onClick={() => onOpenConsultation({ packageName: 'Paket Spesialisasi Ramah Lansia' })}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-900/20 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Konsultasikan Kebutuhan Keluarga</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
