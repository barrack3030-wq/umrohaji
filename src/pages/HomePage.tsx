import React, { useState } from 'react';
import { PageRoute, UmrahPackage } from '../types';
import { PACKAGES_DATA } from '../data/packagesData';
import { 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Check, 
  ShieldCheck, 
  Calendar, 
  Plane, 
  Layers, 
  Search,
  Sparkles,
  Award,
  Users,
  Building2,
  Compass
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: (pref?: { city?: string; packageName?: string; notes?: string }) => void;
  onSelectPackage: (pkg: UmrahPackage) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectPackage
}) => {
  // Search Bar Filter State
  const [selectedMonth, setSelectedMonth] = useState('Okt 2026 - Des 2026');
  const [selectedCity, setSelectedCity] = useState('Makassar (Direct UPG)');
  const [selectedType, setSelectedType] = useState('Semua Paket');
  const [selectedPrice, setSelectedPrice] = useState('Semua Kisaran');

  // Package Tab State
  const [activePackageTab, setActivePackageTab] = useState(0);

  // Testimonial State
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const testimonials = [
    {
      name: 'H. Rusli Baharuddin & Hj. Nuraini',
      location: 'Palu, Sulawesi Tengah',
      packageUsed: 'Paket Umrah Reguler Makassar Connecting',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      rating: 5,
      quote: 'Melaksanakan Umrah bersama tim Aji Zulfikar dan mitra PPIU resmi sungguh menenangkan. Setiap detail perjalanan diperhatikan dengan cermat, mulai dari tiket connecting flight Palu–Makassar hingga hotel yang benar-benar di depan pelataran Masjidil Haram.'
    },
    {
      name: 'dr. H. Andi Syahrul',
      location: 'Makassar, Sulawesi Selatan',
      packageUsed: 'Paket Umrah Khusus Ramah Lansia Ring 1',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      rating: 5,
      quote: 'Saya membawa ibunda yang berusia 74 tahun. Program Ring 1 pelataran dan asistensi kursi roda yang disiapkan Mas Aji dan PPIU mitra sangat membantu. Ibu tidak kelelahan dan kami sholat 5 waktu di masjid tanpa kendala.'
    },
    {
      name: 'H. Muh. Ridwan & Keluarga',
      location: 'Kendari, Sulawesi Tenggara',
      packageUsed: 'Paket Umrah Keluarga 13 Hari',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      rating: 5,
      quote: 'Transparansi akadnya luar biasa. Tidak ada biaya tersembunyi. Izin PPIU di SISKOPATUH dicek di awal, nama hotel sesuai kesepakatan, dan muthawwif membimbing manasik dengan sangat santun.'
    }
  ];

  const packagesList = [
    {
      id: 'reguler',
      tabTitle: 'Reguler Makassar Langsung',
      pkg: PACKAGES_DATA[0],
      price: 'Rp 32,8 Jt',
      period: 'per jamaah',
      rating: '4.9/5',
      reviewsCount: '1,200+',
      timeline: 'Penerbangan Langsung UPG - JED/MED',
      services: [
        'Penerbangan Langsung Makassar (UPG) – Saudi tanpa transit Jakarta',
        'Akomodasi Hotel Bintang 4 Ring 1 (150m ke Pelataran Masjidil Haram)',
        'Visa Umrah Resmi, Asuransi Perjalanan, & SISKOPATUH Kemenag RI',
        'Bimbingan Ibadah & Muthawwif Berpengalaman asal Indonesia',
        'Handling Bandara Sultan Hasanuddin & Fasilitas Lounge Transit',
        'Makan 3x Sehari Menu Cita Rasa Nusantara & Air Zamzam Resmi'
      ]
    },
    {
      id: 'lansia',
      tabTitle: 'Ramah Lansia Ring 1',
      pkg: PACKAGES_DATA[2] || PACKAGES_DATA[0],
      price: 'Rp 36,8 Jt',
      period: 'per jamaah',
      rating: '5.0/5',
      reviewsCount: '850+',
      timeline: 'Khusus Orang Tua & Keluarga Pendamping',
      services: [
        'Hotel Pelataran Ring 1 (0–50 meter tanpa jalan menanjak)',
        'Fasilitas Kursi Roda Resmi & Pemandu Tawaf/Sai Khusus',
        'Ritme Ibadah Tenang, Tidak Memaksakan Fisik Jamaah Senior',
        'Pemberhentian Istirahat Nyaman saat Transit Bandara',
        'Menu Makanan Lembut & Ramah Pencernaan Lansia',
        'Dokter Rombongan Standby 24 Jam Selama di Makkah & Madinah'
      ]
    },
    {
      id: 'keluarga',
      tabTitle: 'Keluarga Sulawesi',
      pkg: PACKAGES_DATA[1] || PACKAGES_DATA[0],
      price: 'Rp 34,5 Jt',
      period: 'per jamaah',
      rating: '4.9/5',
      reviewsCount: '920+',
      timeline: 'Ideal untuk 3–6 Anggota Rombongan',
      services: [
        'Koneksi Tiket Terpadu dari Palu / Kendari / Manado / Gorontalo ke UPG',
        'Alokasi Kamar Quad / Family Room dalam 1 Lantai Hotel',
        'Ziarah Sejarah Islam Edukatif di Makkah, Madinah, & Thaif',
        'Transportasi Bus Eksekutif VIP ber-AC Full Selama di Saudi',
        'Handling Bagasi Door-to-Door sejak Bandara Asal Sulawesi',
        'Konsultasi Manasik Privat untuk Keluarga sebelum Keberangkatan'
      ]
    },
    {
      id: 'ramadhan',
      tabTitle: 'Ramadhan 16 Hari',
      pkg: PACKAGES_DATA[3] || PACKAGES_DATA[0],
      price: 'Rp 43,5 Jt',
      period: 'per jamaah',
      rating: '5.0/5',
      reviewsCount: '450+',
      timeline: 'Spesial 10 Malam Terakhir & Idul Fitri',
      services: [
        'Program Itikaf 10 Malam Terakhir di Masjidil Haram Makkah',
        'Akomodasi Menara Jam / Dar Al Eiman Royal (Akses Langsung)',
        'Penyediaan Sahur & Iftar Prasmanan Istimewa di Hotel',
        'Penerbangan Terjadwal untuk Mengikuti Sholat Idul Fitri di Makkah',
        'Akses Bimbingan Doa Khusus Khatam Al-Quran & Lailatul Qadr',
        'Pendampingan Ziarah Badar & Jabal Rahmah'
      ]
    }
  ];

  const currentPkg = packagesList[activePackageTab];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pricingEl = document.getElementById('packages-section');
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-[#0C1017] text-white selection:bg-[#E2F827] selection:text-black min-h-screen overflow-x-hidden">
      
      {/* =========================================================================
          BACKGROUND: VISIBLE KA'BAH PHOTOGRAPH + WARM SPIRITUAL AMBIANCE
          ========================================================================= */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* The Holy Ka'bah Photo at Masjidil Haram, Makkah */}
        <img
          src="/kaaba_tawaf.jpg"
          alt="Ka'bah Suci Masjidil Haram Makkah"
          className="w-full h-full object-cover object-center opacity-45 sm:opacity-50 filter brightness-95 contrast-110"
        />
        {/* Soft Golden Spiritual Aura Radiating from Ka'bah */}
        <div className="absolute top-[22%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[550px] bg-amber-500/20 rounded-full blur-[160px]" />
        <div className="absolute top-[10%] right-[-5%] w-[450px] h-[350px] bg-[#E2F827]/10 rounded-full blur-[140px]" />
        
        {/* Atmospheric Vignette (Warm Deep Slate/Navy keeping contrast for text) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090D14]/70 via-[#0C1017]/80 to-[#090D14]/95" />
      </div>

      {/* =========================================================================
          BAGIAN 1: HERO & PENCARIAN JADWAL / ESTIMASI BIAYA
          ========================================================================= */}
      <section className="relative z-10 min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-32 pb-14 sm:pb-18 px-4 sm:px-8 lg:px-12">
        
        {/* Hero Copy */}
        <div className="max-w-5xl mx-auto w-full text-center pt-2 sm:pt-6 my-auto">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-[#141A26]/85 backdrop-blur-md border border-[#2E3A4E] px-4 py-1.5 sm:py-2 rounded-full mb-6 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-[#E2F827] animate-pulse" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-gray-200 font-semibold">
              KEMITRAAN RESMI PPIU TERDAFTAR SISKOPATUH KEMENAG RI
            </span>
          </div>

          {/* Majestic Hero Headline */}
          <h1 className="font-extrabold text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[90px] tracking-tight leading-[1.08] text-white">
            Ibadah <span className="text-[#E2F827] drop-shadow-[0_0_35px_rgba(226,248,39,0.3)]">Umrah</span>
          </h1>

          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed drop-shadow px-2">
            Panduan personal, penerbangan langsung dari bandara di Sulawesi, dan akomodasi hotel pelataran Masjidil Haram bersama Aji Zulfikar.
          </p>

          {/* Fast Navigation Quick Links */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-gray-400 font-medium">Jelajahi:</span>
            <button 
              onClick={() => onNavigate('/paket-umrah')}
              className="bg-[#18202D]/85 hover:bg-[#222C3E] text-white border border-[#2F3C50] px-3.5 py-1.5 rounded-full transition-colors cursor-pointer"
            >
              Direct Makassar (UPG)
            </button>
            <button 
              onClick={() => onNavigate('/umrah-lansia')}
              className="bg-[#18202D]/85 hover:bg-[#222C3E] text-[#E2F827] border border-[#2F3C50] px-3.5 py-1.5 rounded-full transition-colors cursor-pointer"
            >
              Ramah Lansia Ring 1
            </button>
            <button 
              onClick={() => onNavigate('/umrah-dari-sulawesi')}
              className="bg-[#18202D]/85 hover:bg-[#222C3E] text-white border border-[#2F3C50] px-3.5 py-1.5 rounded-full transition-colors cursor-pointer"
            >
              Rute 6 Provinsi Sulawesi
            </button>
          </div>
        </div>

        {/* Floating Search Filter Bar */}
        <div className="w-full max-w-5xl mx-auto mt-8 sm:mt-10">
          <div className="bg-[#121824]/90 backdrop-blur-2xl border border-[#2A3648] rounded-2xl p-4 sm:p-6 shadow-2xl relative overflow-hidden">
            
            {/* Gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E2F827] to-transparent opacity-75" />

            <div className="text-[11px] font-semibold uppercase tracking-widest text-gray-300 mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-[#E2F827]" />
                <span>Cari Jadwal & Estimasi Biaya</span>
              </div>
              <span className="text-[10px] text-gray-400 hidden sm:inline">Transparansi Biaya & Legalitas Terjamin</span>
            </div>

            <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              
              {/* Field 1: Jadwal */}
              <div className="bg-[#192230]/90 border border-[#2B384C] rounded-xl px-3.5 py-2.5 flex flex-col justify-center min-h-[52px]">
                <label className="text-[10px] uppercase font-semibold text-gray-400 flex items-center gap-1 mb-0.5">
                  <Calendar className="w-3 h-3 text-[#E2F827]" />
                  <span>Jadwal Musim</span>
                </label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full bg-transparent text-white text-xs font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="Okt 2026 - Des 2026" className="bg-[#141A24] text-white">Okt 2026 - Des 2026</option>
                  <option value="Jan 2027 - Feb 2027" className="bg-[#141A24] text-white">Jan 2027 - Feb 2027</option>
                  <option value="Ramadhan 1448 H" className="bg-[#141A24] text-white">Ramadhan 1448 H</option>
                  <option value="Syawal / Pasca Musim" className="bg-[#141A24] text-white">Syawal / Pasca Musim</option>
                </select>
              </div>

              {/* Field 2: Asal Sulawesi */}
              <div className="bg-[#192230]/90 border border-[#2B384C] rounded-xl px-3.5 py-2.5 flex flex-col justify-center min-h-[52px]">
                <label className="text-[10px] uppercase font-semibold text-gray-400 flex items-center gap-1 mb-0.5">
                  <Plane className="w-3 h-3 text-[#E2F827]" />
                  <span>Kota Asal</span>
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full bg-transparent text-white text-xs font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="Makassar (Direct UPG)" className="bg-[#141A24] text-white">Makassar (Direct UPG)</option>
                  <option value="Palu (Transit UPG)" className="bg-[#141A24] text-white">Palu (Transit UPG)</option>
                  <option value="Kendari (Transit UPG)" className="bg-[#141A24] text-white">Kendari (Transit UPG)</option>
                  <option value="Manado (Transit UPG/CGK)" className="bg-[#141A24] text-white">Manado (Transit UPG)</option>
                  <option value="Gorontalo (Transit UPG)" className="bg-[#141A24] text-white">Gorontalo (Transit UPG)</option>
                  <option value="Mamuju / Majene" className="bg-[#141A24] text-white">Mamuju / Majene</option>
                </select>
              </div>

              {/* Field 3: Kategori Paket */}
              <div className="bg-[#192230]/90 border border-[#2B384C] rounded-xl px-3.5 py-2.5 flex flex-col justify-center min-h-[52px]">
                <label className="text-[10px] uppercase font-semibold text-gray-400 flex items-center gap-1 mb-0.5">
                  <Layers className="w-3 h-3 text-[#E2F827]" />
                  <span>Jenis Paket</span>
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full bg-transparent text-white text-xs font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="Semua Paket" className="bg-[#141A24] text-white">Semua Paket</option>
                  <option value="Reguler Direct" className="bg-[#141A24] text-white">Reguler Direct</option>
                  <option value="Ramah Lansia Ring 1" className="bg-[#141A24] text-white">Ramah Lansia Ring 1</option>
                  <option value="Keluarga Sulawesi" className="bg-[#141A24] text-white">Keluarga Sulawesi</option>
                  <option value="Ramadhan 16 Hari" className="bg-[#141A24] text-white">Ramadhan 16 Hari</option>
                </select>
              </div>

              {/* Field 4: Kisaran Biaya */}
              <div className="bg-[#192230]/90 border border-[#2B384C] rounded-xl px-3.5 py-2.5 flex flex-col justify-center min-h-[52px]">
                <label className="text-[10px] uppercase font-semibold text-gray-400 flex items-center gap-1 mb-0.5">
                  <ShieldCheck className="w-3 h-3 text-[#E2F827]" />
                  <span>Kisaran Biaya</span>
                </label>
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="w-full bg-transparent text-white text-xs font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="Semua Kisaran" className="bg-[#141A24] text-white">Semua Kisaran</option>
                  <option value="Rp 30 Jt - Rp 34 Jt" className="bg-[#141A24] text-white">Rp 30 Jt - Rp 34 Jt</option>
                  <option value="Rp 35 Jt - Rp 39 Jt" className="bg-[#141A24] text-white">Rp 35 Jt - Rp 39 Jt</option>
                  <option value="Rp 40 Jt Ke Atas" className="bg-[#141A24] text-white">Rp 40 Jt Ke Atas</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#E2F827] hover:bg-[#D4F636] text-black font-semibold text-xs uppercase tracking-wider rounded-xl px-4 py-3 min-h-[52px] flex items-center justify-center gap-1.5 transition-all shadow-lg hover:shadow-[#E2F827]/25 cursor-pointer active:scale-95"
              >
                <span>Lihat Paket</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </button>

            </form>

          </div>
        </div>

      </section>

      {/* =========================================================================
          BAGIAN 2: KATALOG PILIHAN PAKET UMRAH UNGGULAN
          ========================================================================= */}
      <section id="packages-section" className="relative z-10 py-20 sm:py-28 px-4 sm:px-8 lg:px-12 border-t border-[#222E40] bg-[#0E131D]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E2F827] mb-3">
            <span>◆</span>
            <span>Katalog Pilihan Paket</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Pilihan <span className="text-[#E2F827]">Paket Umrah</span> Terverifikasi
              </h2>
              <p className="text-sm sm:text-base text-gray-300 font-light mt-2 max-w-xl">
                Paket resmi dengan maskapai penerbangan terpercaya dan akomodasi hotel ring 1 terdekat dari Masjidil Haram.
              </p>
            </div>
            
            {/* Package Tabs */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-1.5 sm:gap-2 p-1.5 bg-[#151C28] border border-[#2B374A] rounded-xl overflow-x-auto no-scrollbar max-w-full">
              {packagesList.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActivePackageTab(idx)}
                  className={`px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap min-h-[40px] flex items-center justify-center ${
                    activePackageTab === idx
                      ? 'bg-[#E2F827] text-black shadow-md'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.tabTitle}
                </button>
              ))}
            </div>
          </div>

          {/* Large Feature Card */}
          <div className="bg-[#131924]/90 border border-[#283548] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
              
              {/* Left Column: Fasilitas Termasuk */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs uppercase tracking-widest text-[#E2F827] font-semibold">
                      Fasilitas Sudah Termasuk
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                    {currentPkg.pkg.name}
                  </h3>

                  <p className="text-sm text-gray-300 font-light leading-relaxed mb-8">
                    {currentPkg.pkg.overview}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentPkg.services.map((srv, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#E2F827]/10 border border-[#E2F827]/40 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#E2F827]" />
                        </div>
                        <span className="text-xs text-gray-300 font-light leading-snug">
                          {srv}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#242F40]">
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                      Akomodasi Hotel
                    </h4>
                    <p className="text-xs text-gray-400 font-light">
                      {currentPkg.pkg.hotelMakkah.name} & {currentPkg.pkg.hotelMadinah.name}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                      Penerbangan
                    </h4>
                    <p className="text-xs text-gray-400 font-light">
                      {currentPkg.pkg.airline} • {currentPkg.pkg.transitType}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                      Durasi
                    </h4>
                    <p className="text-xs text-gray-400 font-light">
                      {currentPkg.pkg.durationDays} Hari Program
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Pricing & Action Box */}
              <div className="lg:col-span-5 bg-[#192230]/95 border border-[#2F3C50] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
                
                {/* Visual glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#E2F827]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  {/* Rating & Guarantee Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-1 bg-[#131924] border border-[#283548] px-3 py-1.5 rounded-full text-white">
                      <Star className="w-3.5 h-3.5 text-[#E2F827] fill-[#E2F827]" />
                      <span className="font-bold">{currentPkg.rating}</span>
                      <span className="text-gray-400 font-light">({currentPkg.reviewsCount})</span>
                    </div>

                    <div className="flex items-center gap-1.5 bg-[#E2F827]/15 text-[#E2F827] border border-[#E2F827]/30 px-3 py-1.5 rounded-full font-semibold text-[11px]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>SISKOPATUH Resmi</span>
                    </div>
                  </div>

                  {/* Price Header */}
                  <div className="pt-2">
                    <span className="text-xs text-gray-400 uppercase tracking-widest block font-medium">
                      Mulai Dari
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        {currentPkg.price}
                      </span>
                      <span className="text-xs text-gray-400 font-light">
                        {currentPkg.period}
                      </span>
                    </div>
                    <p className="text-xs text-[#E2F827] mt-2 font-medium flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{currentPkg.timeline}</span>
                    </p>
                  </div>

                  {/* Benefit highlights */}
                  <div className="space-y-3 pt-2 text-xs text-gray-300">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#E2F827] shrink-0" />
                      <span>Muthawwif membimbing sejak bandara keberangkatan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#E2F827] shrink-0" />
                      <span>Asistensi paspor, visa & rekam biometrik di Sulawesi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#E2F827] shrink-0" />
                      <span>Manasik eksklusif teori & praktek sebelum terbang</span>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="relative z-10 space-y-3 pt-4 border-t border-[#2A374A]">
                  <button
                    onClick={() => {
                      onSelectPackage(currentPkg.pkg);
                    }}
                    className="w-full bg-[#E2F827] hover:bg-[#D4F636] text-black font-semibold text-xs uppercase tracking-wider py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-[#E2F827]/25 cursor-pointer min-h-[48px] active:scale-95"
                  >
                    <span>Pilih Paket & Konsultasi</span>
                    <ArrowUpRight className="w-4 h-4 text-black" />
                  </button>

                  <button
                    onClick={() => onNavigate('/paket-umrah')}
                    className="w-full bg-[#131924] hover:bg-[#1E2738] text-white border border-[#2B384C] font-medium text-xs uppercase tracking-wider py-3.5 rounded-xl flex items-center justify-center transition-colors cursor-pointer"
                  >
                    Lihat Semua Paket Umrah
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          BAGIAN 3: KEPERCAYAAN, ULASAN JAMAAH & KONSULTASI LANGSUNG DENGAN AJI
          ========================================================================= */}
      <section className="relative z-10 py-20 sm:py-28 px-4 sm:px-8 lg:px-12 border-t border-[#222E40] bg-[#0A0D15]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Kepercayaan & Profil Aji */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E2F827]">
                <span>◆</span>
                <span>Konsultan Umrah Terpercaya</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Mengapa Memilih <span className="text-[#E2F827]">Aji Zulfikar</span>?
              </h2>

              <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
                Sebagai representasi dan konsultan kemitraan PPIU resmi berizin Kementerian Agama RI di Sulawesi, kami memastikan setiap calon jamaah mendapatkan kepastian jadwal, akomodasi nyata, dan pendampingan personal penuh empati.
              </p>

              {/* 3 Metric Badges */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
                <div className="bg-[#141A26] border border-[#293548] p-4 rounded-2xl text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#E2F827]">3.000+</div>
                  <div className="text-[11px] text-gray-400 mt-1 font-medium">Jamaah Sulawesi</div>
                </div>
                <div className="bg-[#141A26] border border-[#293548] p-4 rounded-2xl text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
                  <div className="text-[11px] text-gray-400 mt-1 font-medium">Izin Kemenag</div>
                </div>
                <div className="bg-[#141A26] border border-[#293548] p-4 rounded-2xl text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#E2F827]">4.9/5</div>
                  <div className="text-[11px] text-gray-400 mt-1 font-medium">Rating Kepuasan</div>
                </div>
              </div>

              {/* 3 Key Trust Pillars */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#18202D] border border-[#2D394C] flex items-center justify-center text-[#E2F827] shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Mitra Resmi PPIU Terdaftar SISKOPATUH</h4>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      Legalitas jelas, nomor izin travel terdaftar di aplikasi resmi Umrah Cerdas Kemenag RI.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#18202D] border border-[#2D394C] flex items-center justify-center text-[#E2F827] shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Spesialisasi Rute Penerbangan Sulawesi</h4>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      Paham rute transit Makassar, Palu, Kendari, Manado, dan Gorontalo sehingga minim lelah fisik.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#18202D] border border-[#2D394C] flex items-center justify-center text-[#E2F827] shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Kepastian Hotel Pelataran Ring 1</h4>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      Nama hotel tertulis jelas di kontrak akad sebelum pelunasan, jarak dekat dan tanpa tanjakan.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Dynamic Testimonial Card & Direct WhatsApp CTA */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Testimonial Box */}
              <div className="bg-[#131924]/90 border border-[#283548] rounded-3xl p-6 sm:p-8 shadow-xl relative space-y-6">
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#E2F827]">
                    {[...Array(testimonials[currentTestimonialIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E2F827]" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 bg-[#1A2230] px-2.5 py-1 rounded-full border border-[#2B374A]">
                    Ulasan Nyata Jamaah
                  </span>
                </div>

                <p className="text-base sm:text-lg text-gray-200 font-light leading-relaxed italic">
                  "{testimonials[currentTestimonialIndex].quote}"
                </p>

                <div className="pt-4 border-t border-[#222D3E] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonials[currentTestimonialIndex].image}
                      alt={testimonials[currentTestimonialIndex].name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#E2F827] shrink-0"
                    />
                    <div>
                      <h4 className="font-bold text-sm text-white">
                        {testimonials[currentTestimonialIndex].name}
                      </h4>
                      <p className="text-xs text-gray-400">
                        {testimonials[currentTestimonialIndex].location}
                      </p>
                      <p className="text-[11px] text-[#E2F827] font-medium">
                        {testimonials[currentTestimonialIndex].packageUsed}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Nav */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => setCurrentTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                      className="w-9 h-9 rounded-full bg-[#1A2230] hover:bg-[#253042] border border-[#2C384C] flex items-center justify-center text-white transition-colors cursor-pointer"
                      aria-label="Ulasan sebelumnya"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCurrentTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                      className="w-9 h-9 rounded-full bg-[#E2F827] hover:bg-[#D4F636] flex items-center justify-center text-black transition-colors cursor-pointer"
                      aria-label="Ulasan berikutnya"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

              {/* Direct Consultation Box */}
              <div className="bg-gradient-to-br from-[#18212F] to-[#121824] border border-[#2E3B50] rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-1 text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Siap Merencanakan Ibadah Anda?
                  </h3>
                  <p className="text-xs text-gray-300 font-light max-w-sm">
                    Tanyakan ketersediaan seat, tanggal keberangkatan, atau konsultasi hotel khusus lansia via WhatsApp.
                  </p>
                </div>

                <button
                  onClick={() => onOpenConsultation()}
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#E2F827] hover:bg-[#D4F636] text-black text-xs uppercase tracking-wider font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap shadow-lg hover:shadow-[#E2F827]/25 min-h-[44px] flex items-center justify-center gap-2 shrink-0"
                >
                  <span>Konsultasi Gratis</span>
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
