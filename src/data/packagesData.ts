import { UmrahPackage } from '../types';

export const PACKAGES_DATA: UmrahPackage[] = [
  {
    id: 'pkg-makassar-direct-12d',
    slug: 'umrah-reguler-12-hari-direct-makassar',
    name: 'Umrah 12 Hari — Berangkat Langsung dari Makassar',
    durationDays: 12,
    priceEstimateDisplay: 'Rp 32.800.000',
    priceEstimateNumber: 32800000,
    airline: 'Lion Air / Saudia (Direct Flight UPG–JED/MED)',
    transitType: 'Direct',
    departureCities: ['Makassar', 'Parepare', 'Bone', 'Palopo', 'Kendari', 'Mamuju'],
    hotelMakkah: {
      name: 'Anjum Hotel / Hilton Convention / Setaraf',
      stars: 5,
      distanceMeters: 250,
      distanceNote: '± 250 meter ke pelataran Masjidil Haram (Akses Shofa/Marwah mudah)'
    },
    hotelMadinah: {
      name: 'Rove Al Madinah / Frontel Al Harithia / Setaraf',
      stars: 4,
      distanceMeters: 150,
      distanceNote: '± 150 meter ke pintu utama Masjid Nabawi (Pintu Pria & Wanita dekat)'
    },
    ppiuPartner: {
      name: 'PT Al-Mabrur Sulawesi Wisata',
      izinNo: 'SK Kemenag RI No. 124 Tahun 2021',
      legalEntity: 'Penyelenggara Resmi Perjalanan Ibadah Umrah (PPIU)',
      verificationNotice: 'Terdaftar resmi di SISKOPATUH Kementerian Agama RI. Pembayaran langsung ke rekening giro resmi perusahaan PPIU.'
    },
    departureDates: ['Oktober 2026', 'November 2026', 'Desember 2026', 'Januari 2027', 'Februari 2027'],
    facilities: [
      'Tiket pesawat PP langsung Makassar–Madinah / Jeddah',
      'Visa Ibadah Umrah resmi & Asuransi Perjalanan Arab Saudi',
      'Hotel berbintang di Makkah (5 malam) dan Madinah (4 malam)',
      'Makan 3x sehari prasmanan menu masakan khas Nusantara',
      'Pembimbing Ibadah (Muthawwif) berpengalaman asal Sulawesi',
      'Bus AC eksekutif model terbaru untuk ziarah dan transfer antar kota',
      'Koper bagasi, tas selempang, kain ihram / mukena, dan seragam batik',
      'Bimbingan manasik intensif sebelum keberangkatan'
    ],
    highlights: [
      'Penerbangan langsung dari Bandara Sultan Hasanuddin Makassar tanpa transit negara ketiga',
      'Sangat diminati jamaah keluarga dan lansia karena meminimalisir letih fisik di perjalanan',
      'Akomodasi hotel berada di ring 1 zona pelataran masjid suci'
    ],
    suitableFor: ['Keluarga', 'Calon jamaah lansia', 'Jamaah pertama kali'],
    isElderlyFriendly: true,
    category: 'Ramah Lansia',
    overview: 'Cocok buat yang ingin perjalanan lebih sederhana dari awal. Berangkat dari Makassar dan tidak perlu transit di Jakarta, jadi waktu di perjalanan bisa lebih singkat.'
  },
  {
    id: 'pkg-palu-connecting-13d',
    slug: 'umrah-keluarga-13-hari-transit-efisien-palu-sulteng',
    name: 'Umrah 13 Hari — Berangkat dari Palu dan Sekitarnya',
    durationDays: 13,
    priceEstimateDisplay: 'Rp 34.500.000',
    priceEstimateNumber: 34500000,
    airline: 'Garuda Indonesia / Batik Air (Connecting PLW–UPG/CGK–JED)',
    transitType: '1x Transit',
    departureCities: ['Palu', 'Donggala', 'Poso', 'Luwuk', 'Tolitoli', 'Gorontalo'],
    hotelMakkah: {
      name: 'Pullman Zamzam / Swissotel Makkah Clock Tower / Setaraf',
      stars: 5,
      distanceMeters: 100,
      distanceNote: '± 100 meter (Kompleks Abraj Al Bait, lift langsung ke pelataran)'
    },
    hotelMadinah: {
      name: 'Dar Al Hijrah InterContinental / Setaraf',
      stars: 5,
      distanceMeters: 120,
      distanceNote: '± 120 meter dari pelataran pintu utara Masjid Nabawi'
    },
    ppiuPartner: {
      name: 'PT Cahaya Haramain Nusantara',
      izinNo: 'SK Kemenag RI No. 892 Tahun 2020',
      legalEntity: 'Penyelenggara Resmi Perjalanan Ibadah Umrah (PPIU)',
      verificationNotice: 'Terdaftar resmi di SISKOPATUH Kementerian Agama RI. Pendaftaran diverifikasi via sistem Siskopatuh online.'
    },
    departureDates: ['November 2026', 'Desember 2026', 'Februari 2027', 'Maret 2027'],
    facilities: [
      'Tiket connecting tiket terusan dari Palu (PLW) menuju Makkah / Madinah PP',
      'Bagasi terusan domestik-internasional (through checked baggage)',
      'Akomodasi hotel bintang 5 tepat di pelataran Masjidil Haram & Nabawi',
      'Makan 3 kali sehari full board prasmanan Indonesia',
      'Ziarah kota Makkah (Jabal Tsur, Arafah, Mina) dan Madinah (Masjid Quba, Uhud)',
      'Manasik Umrah teori dan praktek di kota Palu sebelum terbang',
      'Pendampingan Tour Leader dari Palu/Makassar dan Muthawwif lokal Saudi',
      'Air Zamzam 5 liter (disesuaikan dengan ketentuan otoritas Saudi/Maskapai)'
    ],
    highlights: [
      'Koper besar langsung masuk dari Bandara Mutiara SIS Al-Jufrie Palu tanpa repot klaim di bandara transit',
      'Fasilitas hotel menara Clock Tower memudahkan jamaah yang ingin istirahat cepat seusai shalat berjamaah',
      'Jadwal transit terstruktur dengan waktu istirahat yang cukup di lounge bandara'
    ],
    suitableFor: ['Keluarga dengan anak', 'Pasangan suami istri', 'Jamaah yang membutuhkan akses hotel terdekat'],
    isElderlyFriendly: true,
    category: 'Eksekutif',
    overview: 'Buat yang berangkat dari Palu dan sekitarnya, pilihan ini dibuat supaya urusan tiket dan bagasi lebih gampang. Transit tetap ada, tapi alurnya sudah disiapkan dari awal.'
  },
  {
    id: 'pkg-lansia-vip-14d',
    slug: 'umrah-ramah-lansia-14-hari-pendampingan-khusus',
    name: 'Umrah 14 Hari — Lebih Nyaman untuk Orang Tua',
    durationDays: 14,
    priceEstimateDisplay: 'Rp 36.900.000',
    priceEstimateNumber: 36900000,
    airline: 'Saudia Airlines / Garuda Indonesia (Kelas Utama & Fasilitas Khusus)',
    transitType: 'Direct',
    departureCities: ['Makassar', 'Kendari', 'Gorontalo', 'Manado', 'Palu', 'Mamuju'],
    hotelMakkah: {
      name: 'Mövenpick Hotel & Residences Hajar Tower / Setaraf',
      stars: 5,
      distanceMeters: 80,
      distanceNote: '± 80 meter (Paling depan pelataran King Abdulaziz Gate, tanpa jalan menanjak)'
    },
    hotelMadinah: {
      name: 'Maden Hotel / Pullman Zamzam Madinah / Setaraf',
      stars: 5,
      distanceMeters: 100,
      distanceNote: '± 100 meter ke pelataran Nabawi, ramah untuk pengguna kursi roda'
    },
    ppiuPartner: {
      name: 'PT Mina Barakah Mandiri',
      izinNo: 'SK Kemenag RI No. 445 Tahun 2022',
      legalEntity: 'Penyelenggara Resmi Perjalanan Ibadah Umrah (PPIU)',
      verificationNotice: 'Memiliki divisi layanan khusus jamaah lansia dan risti (risiko tinggi). Akad transparan dan berizin resmi Kemenag.'
    },
    departureDates: ['Oktober 2026', 'Desember 2026', 'Januari 2027', 'Maret 2027'],
    facilities: [
      'Tiket penerbangan direct dari Makassar atau connecting terkoordinasi dari kota asal di Sulawesi',
      'Hotel ring terdekat pelataran masjid tanpa tanjakan atau tangga curam',
      'Fasilitas pendorong kursi roda bersertifikat resmi saat Thawaf & Sa’i (dapat dikoordinasikan)',
      'Rasio pendamping pembimbing yang lebih rapat (1 pembimbing tiap 15-20 jamaah)',
      'Menu makanan ramah lansia (disediakan pilihan bubur/sup lunak dan rendah garam bila diperlukan)',
      'Konsultasi kesiapan fisik non-medis dan panduan obat-obatan pribadi sebelum berangkat',
      'Kunjungan ziarah dengan durasi santai tanpa jadwal tergesa-gesa',
      'Asuransi kesehatan komprehensif'
    ],
    highlights: [
      'Dirancang khusus untuk putra-putri yang ingin menghadiahkan perjalanan ibadah terbaik bagi orang tua tercinta',
      'Jarak hotel hanya beberapa puluh langkah dari pelataran shalat, menghemat energi orang tua',
      'Pendampingan ramah, sabar, dan mengedepankan kesantunan budaya Bugis, Makassar, Kaili, Minahasa, Mandar, dan Gorontalo'
    ],
    suitableFor: ['Jamaah lanjut usia', 'Orang tua pengguna kursi roda', 'Keluarga pendamping'],
    isElderlyFriendly: true,
    category: 'Ramah Lansia',
    overview: 'Kalau berangkat bersama orang tua, hal kecil seperti jarak hotel, lift, waktu istirahat, dan akses kursi roda bisa sangat berarti. Paket ini dibuat untuk keluarga yang ingin perjalanan lebih santai dan tidak terburu-buru.'
  },
  {
    id: 'pkg-ekonomis-terencana-09d',
    slug: 'umrah-awal-musim-09-hari-syiar-sulawesi',
    name: 'Umrah 9 Hari — Buat yang Waktunya Terbatas',
    durationDays: 9,
    priceEstimateDisplay: 'Rp 28.700.000',
    priceEstimateNumber: 28700000,
    airline: 'Lion Air / Batik Air / Scoot / AirAsia via Hub',
    transitType: '1x Transit',
    departureCities: ['Makassar', 'Manado', 'Kendari', 'Palu', 'Gorontalo'],
    hotelMakkah: {
      name: 'Rayyana Ajyad / Elaf Bakkah / Grand Al Massa / Setaraf',
      stars: 4,
      distanceMeters: 450,
      distanceNote: '± 450 meter atau shuttle bus 24 jam langsung ke terminal Haram'
    },
    hotelMadinah: {
      name: 'Mirage Al Salam / Al Andalus Palace / Setaraf',
      stars: 3,
      distanceMeters: 250,
      distanceNote: '± 250 meter dari pelataran Masjid Nabawi'
    },
    ppiuPartner: {
      name: 'PT Al-Hijrah Nusantara Wisata',
      izinNo: 'SK Kemenag RI No. 718 Tahun 2021',
      legalEntity: 'Penyelenggara Resmi Perjalanan Ibadah Umrah (PPIU)',
      verificationNotice: 'Terdaftar resmi di Kemenag RI. Harga terstruktur transparan tanpa biaya tersembunyi.'
    },
    departureDates: ['November 2026', 'Januari 2027', 'Februari 2027'],
    facilities: [
      'Tiket penerbangan PP dengan transit terjadwal rapi',
      'Visa Umrah elektronik & asuransi wajib',
      'Hotel berbintang 3 dan 4 yang bersih, nyaman, dan ber-AC dingin',
      'Makan 3x sehari masakan Indonesia',
      'Muthawwif membimbing rukun ibadah hingga selesai',
      'Ziarah tempat bersejarah di Makkah dan Madinah',
      'Koper standar dan seragam seragam identitas jamaah'
    ],
    highlights: [
      'Cocok untuk jamaah usia muda, pekerja, atau pasangan yang menginginkan durasi singkat 9 hari',
      'Biaya yang sangat proporsional tanpa mengurangi standar keselamatan dan izin legal Kemenag',
      'Fasilitas shuttle bus 24 jam yang memudahkan mobilitas bolak-balik ke Masjidil Haram'
    ],
    suitableFor: ['Jamaah usia produktif', 'Calon jamaah budget terencana', 'Pasangan muda'],
    isElderlyFriendly: false,
    category: 'Reguler',
    overview: 'Cuma punya waktu sekitar 9 hari? Pilihan ini lebih ringkas buat yang ingin fokus ibadah tanpa perlu mengambil cuti terlalu panjang.'
  },
  {
    id: 'pkg-plus-turki-16d',
    slug: 'umrah-plus-turki-istanbul-bursa-16-hari',
    name: 'Umrah + Turki 16 Hari — Ibadah Sekalian Jelajah Sejarah',
    durationDays: 16,
    priceEstimateDisplay: 'Rp 41.500.000',
    priceEstimateNumber: 41500000,
    airline: 'Turkish Airlines / Emirates / Qatar Airways',
    transitType: '1x Transit',
    departureCities: ['Makassar', 'Manado', 'Palu', 'Kendari'],
    hotelMakkah: {
      name: 'Fairmont Makkah Clock Royal Tower / Setaraf',
      stars: 5,
      distanceMeters: 50,
      distanceNote: 'Berada di pelataran utama Masjidil Haram'
    },
    hotelMadinah: {
      name: 'The Oberoi Madinah / Anwar Al Madinah Mövenpick / Setaraf',
      stars: 5,
      distanceMeters: 70,
      distanceNote: 'Akses langsung pintu gerbang utama pelataran Nabawi'
    },
    ppiuPartner: {
      name: 'PT Barakatullah Travel Wisata',
      izinNo: 'SK Kemenag RI No. 511 Tahun 2023',
      legalEntity: 'Penyelenggara Resmi Perjalanan Ibadah Umrah (PPIU)',
      verificationNotice: 'PPIU resmi spesialis perjalanan religi dan wisata muslim internasional.'
    },
    departureDates: ['Desember 2026', 'Februari 2027', 'April 2027'],
    facilities: [
      'Tiket penerbangan internasional kelas ekonomi maskapai bintang lima',
      'Akomodasi hotel bintang 5 di Makkah, Madinah, dan Istanbul/Bursa',
      'City tour ziarah jejak Khilafah Utsmaniyah (Hagia Sophia, Blue Mosque, Topkapi Palace, Bosphorus Cruise)',
      'Wisata sejarah ke kota sejuk Thaif dengan cable car dan ziarah Masjid Abdullah bin Abbas',
      'Visa Umrah dan Visa Turki',
      'Makanan halal khas Turki dan masakan Nusantara',
      'Tour Leader asal Indonesia dan Local Guide berlisensi di Turki'
    ],
    highlights: [
      'Kombinasi ibadah Umrah khusyuk dengan edukasi sejarah peradaban Islam di Istanbul dan Thaif',
      'Akomodasi hotel mewah bintang 5 di pusat kota',
      'Pengalaman perjalanan tak terlupakan untuk keluarga besar'
    ],
    suitableFor: ['Keluarga besar', 'Pecinta sejarah Islam', 'Pemberangkatan milad / hadiah pernikahan'],
    isElderlyFriendly: false,
    category: 'Bisnis',
    overview: 'Setelah Makkah dan Madinah, perjalanan dilanjutkan ke Turki. Cocok buat yang ingin sekalian melihat tempat-tempat bersejarah sambil menikmati perjalanan yang lebih panjang.'
  }
];
