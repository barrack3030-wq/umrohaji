import { ProvinceInfo, CityInfo } from '../types';

export const CITIES_DATA: CityInfo[] = [
  // Sulawesi Selatan
  {
    id: 'makassar',
    name: 'Makassar',
    provinceId: 'sulsel',
    provinceName: 'Sulawesi Selatan',
    airportName: 'Bandara Internasional Sultan Hasanuddin',
    airportCode: 'UPG',
    isMainHub: true,
    hubPathway: 'Keberangkatan langsung atau transit 1x via CGK/KUL/JED',
    transitHub: 'Bandara Internasional Sultan Hasanuddin (UPG) - Hub Utama Indonesia Timur',
    estimatedFlightHours: '9 - 11 jam (Direct) atau 12 - 14 jam (Transit)',
    travelLogistics: 'Makassar merupakan gerbang udara utama penerbangan internasional kawasan timur Indonesia. Sejumlah maskapai melayani penerbangan langsung (direct flight) Makassar–Madinah/Jeddah atau penerbangan 1x transit di Jakarta.',
    importantNotes: [
      'Pilihan penerbangan direct charter atau reguler paling banyak tersedia dari UPG.',
      'Sangat efisien untuk jamaah lansia karena meminimalisir waktu transit antar-bandara.',
      'Hotel transit tersedia berlimpah di sekitar bandara Maros/Makassar jika perlu menginap semalam.'
    ],
    recommendedAirlines: ['Garuda Indonesia', 'Lion Air', 'Saudia Airlines', 'Batik Air']
  },
  {
    id: 'parepare',
    name: 'Parepare',
    provinceId: 'sulsel',
    provinceName: 'Sulawesi Selatan',
    hubPathway: 'Jalur darat ke Bandara Sultan Hasanuddin Makassar (UPG)',
    transitHub: 'Makassar (UPG)',
    estimatedFlightHours: 'Darat 2.5 - 3 jam ke UPG + Penerbangan 10 - 12 jam',
    isMainHub: false,
    travelLogistics: 'Calon jamaah dari Parepare umumnya menggunakan transportasi darat (mobil travel/pribadi) melalui jalur poros Parepare–Barru–Maros menuju Bandara Sultan Hasanuddin Makassar.',
    importantNotes: [
      'Waktu tempuh darat sekitar 2,5 hingga 3 jam dengan kondisi jalan poros provinsi.',
      'Disarankan tiba di Makassar minimal 4-5 jam sebelum jadwal penerbangan internasional.',
      'Bagi rombongan keluarga atau lansia, sewa armada mobil khusus sangat dianjurkan untuk kenyamanan istirahat.'
    ],
    recommendedAirlines: ['Via UPG: Garuda Indonesia, Lion Air, Saudia']
  },
  {
    id: 'palopo',
    name: 'Palopo (Luwu Raya)',
    provinceId: 'sulsel',
    provinceName: 'Sulawesi Selatan',
    airportName: 'Bandara Bua (Lagaligo)',
    airportCode: 'LLO',
    hubPathway: 'Penerbangan perintis LLO ke UPG ATAU perjalanan darat 8-9 jam',
    transitHub: 'Makassar (UPG)',
    estimatedFlightHours: 'Penerbangan LLO–UPG (45 menit) + Penerbangan Umrah',
    isMainHub: false,
    travelLogistics: 'Tersedia opsi penerbangan domestik singkat dari Bandara Bua (Palopo) ke Makassar (UPG), atau opsi perjalanan darat dengan bus eksekutif/travel malam.',
    importantNotes: [
      'Penerbangan Bua (LLO) ke Makassar memiliki kapasitas bagasi terbatas (10-20 kg), koordinasikan perlengkapan koper Umrah utama.',
      'Jika menggunakan bus darat (Toraja/Palopo–Makassar), luangkan 1 hari menginap di Makassar sebelum terbang ke tanah suci.',
      'Sangat disarankan tidak terburu-buru menyambung jadwal penerbangan internasional di hari yang sama dengan rute darat.'
    ],
    recommendedAirlines: ['Wings Air (LLO-UPG)', 'Connecting flight via Makassar']
  },
  {
    id: 'watampone',
    name: 'Watampone (Bone)',
    provinceId: 'sulsel',
    provinceName: 'Sulawesi Selatan',
    hubPathway: 'Jalur darat via Camba / Maros ke Bandara Makassar (UPG)',
    transitHub: 'Makassar (UPG)',
    estimatedFlightHours: 'Darat 3 - 4 jam ke UPG + Penerbangan internasional',
    isMainHub: false,
    travelLogistics: 'Akses dari Bone menuju Bandara Sultan Hasanuddin ditempuh melalui jalur darat melintasi poros Bone–Camba–Maros dengan jarak sekitar 140 km.',
    importantNotes: [
      'Jalur Camba memiliki kelokan pegunungan yang cukup menantang; sediakan obat anti mabuk perjalanan bagi jamaah lansia.',
      'Perhatikan perbaikan jalan berkala di jalur Maros-Bone yang terkadang memerlukan penyesuaian waktu keberangkatan.',
      'Berangkat lebih awal agar tiba di bandara dengan kondisi fisik tetap segar.'
    ],
    recommendedAirlines: ['Via UPG: Garuda Indonesia, Lion Air, Saudia']
  },

  // Sulawesi Tengah
  {
    id: 'palu',
    name: 'Palu',
    provinceId: 'sulteng',
    provinceName: 'Sulawesi Tengah',
    airportName: 'Bandara Mutiara SIS Al-Jufrie',
    airportCode: 'PLW',
    isMainHub: true,
    hubPathway: 'Penerbangan domestik PLW menuju UPG (Makassar) atau CGK (Jakarta)',
    transitHub: 'Makassar (UPG) atau Jakarta (CGK)',
    estimatedFlightHours: '1 jam ke UPG + 10 - 11 jam ke Jeddah/Madinah',
    travelLogistics: 'Palu memiliki konektivitas penerbangan domestik harian yang sangat baik menuju hub Makassar (UPG) dan Jakarta (CGK). Jamaah asal Palu dapat memilih connecting flight tiket terusan.',
    importantNotes: [
      'Gunakan tiket terusan (through check-in) dari Palu agar bagasi otomatis dipindahkan ke penerbangan internasional.',
      'Waktu transit ideal di Makassar/Jakarta adalah 3 hingga 5 jam untuk antisipasi delay dan proses imigrasi.',
      'Fasilitas manasik pra-keberangkatan biasanya dikoordinasikan secara offline di kota Palu sebelum terbang.'
    ],
    recommendedAirlines: ['Batik Air', 'Garuda Indonesia', 'Lion Air', 'Super Air Jet']
  },
  {
    id: 'luwuk',
    name: 'Luwuk (Banggai)',
    provinceId: 'sulteng',
    provinceName: 'Sulawesi Tengah',
    airportName: 'Bandara Syukuran Aminuddin Amir',
    airportCode: 'LUW',
    hubPathway: 'Penerbangan domestik LUW ke Makassar (UPG)',
    transitHub: 'Makassar (UPG)',
    estimatedFlightHours: '1 jam 15 menit ke UPG + Penerbangan ke Arab Saudi',
    isMainHub: false,
    travelLogistics: 'Masyarakat Kabupaten Banggai dan sekitarnya terhubung langsung melalui penerbangan harian dari Bandara Luwuk ke Makassar (UPG).',
    importantNotes: [
      'Hindari mengambil jadwal penerbangan internasional yang terlalu mepet dengan kedatangan dari Luwuk.',
      'Perhatikan batasan dimensi koper kabin pada pesawat domestik penghubung.',
      'Jika membawa lansia, istirahat 1 malam di hotel transit bandara Makassar sangat dianjurkan.'
    ],
    recommendedAirlines: ['Batik Air', 'Lion Air', 'Wings Air']
  },
  {
    id: 'poso',
    name: 'Poso',
    provinceId: 'sulteng',
    provinceName: 'Sulawesi Tengah',
    airportName: 'Bandara Kasiguncu',
    airportCode: 'PSJ',
    hubPathway: 'Darat ke Palu (PLW) 4-5 jam ATAU penerbangan perintis terjadwal',
    transitHub: 'Palu (PLW) lalu Makassar (UPG)',
    estimatedFlightHours: '4 jam darat ke Palu + 1 jam ke UPG + Penerbangan internasional',
    isMainHub: false,
    travelLogistics: 'Sebagian besar calon jamaah Poso menempuh jalur darat via pesisir Teluk Tomini menuju Bandara Mutiara SIS Al-Jufrie di Palu untuk mendapatkan pilihan maskapai yang lebih fleksibel.',
    importantNotes: [
      'Rencanakan keberangkatan darat Poso–Palu di pagi hari dengan kendaraan yang nyaman.',
      'Konsultasikan titik kumpul keberangkatan rombongan apakah di Poso atau langsung di Bandara Palu.'
    ],
    recommendedAirlines: ['Via PLW: Batik Air, Lion Air, Garuda']
  },
  {
    id: 'tolitoli',
    name: 'Tolitoli',
    provinceId: 'sulteng',
    provinceName: 'Sulawesi Tengah',
    airportName: 'Bandara Sultan Bantilan',
    airportCode: 'TLI',
    hubPathway: 'Penerbangan TLI ke Palu (PLW) atau Makassar (UPG) / Jalur darat',
    transitHub: 'Palu (PLW) atau Makassar (UPG)',
    estimatedFlightHours: 'Penerbangan domestik penghubung + Penerbangan internasional',
    isMainHub: false,
    travelLogistics: 'Dari pesisir utara Sulteng, jamaah dapat memanfaatkan penerbangan ATR penghubung atau kendaraan travel darat menuju Palu sebelum menyambung ke hub internasional.',
    importantNotes: [
      'Ketersediaan tiket penerbangan TLI–PLW/UPG terbatas pada hari-hari tertentu; lakukan reservasi jauh hari.',
      'Siapkan fisik dengan baik karena tahapan transit lebih panjang dibanding jamaah dari kota hub.'
    ],
    recommendedAirlines: ['Wings Air', 'Connecting flight via Palu/Makassar']
  },
  {
    id: 'donggala',
    name: 'Donggala',
    provinceId: 'sulteng',
    provinceName: 'Sulawesi Tengah',
    hubPathway: 'Jalur darat sangat dekat ke Bandara Palu (PLW) (sekitar 40-60 menit)',
    transitHub: 'Bandara Mutiara SIS Al-Jufrie Palu (PLW)',
    estimatedFlightHours: '45 menit darat ke PLW + 1 jam ke UPG + Penerbangan internasional',
    isMainHub: false,
    travelLogistics: 'Donggala berada sangat dekat dengan ibu kota Palu. Calon jamaah cukup menggunakan kendaraan darat langsung menuju Bandara Mutiara SIS Al-Jufrie.',
    importantNotes: [
      'Akses sangat praktis dan memudahkan jamaah lansia.',
      'Bimbingan manasik dapat diikuti bersama kelompok jamaah wilayah Palu & Donggala.'
    ],
    recommendedAirlines: ['Via PLW: Garuda Indonesia, Batik Air, Lion Air']
  },

  // Sulawesi Utara
  {
    id: 'manado',
    name: 'Manado',
    provinceId: 'sulut',
    provinceName: 'Sulawesi Utara',
    airportName: 'Bandara Internasional Sam Ratulangi',
    airportCode: 'MDC',
    isMainHub: true,
    hubPathway: 'Penerbangan domestik MDC ke CGK (Jakarta) atau UPG (Makassar)',
    transitHub: 'Jakarta (CGK) atau Makassar (UPG)',
    estimatedFlightHours: '3 jam ke CGK + 9 jam ke Jeddah/Madinah',
    travelLogistics: 'Bandara Sam Ratulangi memiliki jadwal penerbangan reguler padat ke Jakarta dan Makassar. Jamaah Sulawesi Utara biasanya mengambil paket dengan transit 1x di Cengkareng atau Sultan Hasanuddin.',
    importantNotes: [
      'Penerbangan dari Manado ke Jakarta memakan waktu sekitar 3 jam 15 menit.',
      'Pastikan memilih paket dengan jeda transit yang ramah lansia (minimal 3-4 jam di bandara transit).',
      'Pemberian vaksin meningitis dan polio dapat dilakukan di Kantor Kesehatan Pelabuhan (KKP) Manado.'
    ],
    recommendedAirlines: ['Garuda Indonesia', 'Batik Air', 'Lion Air']
  },

  // Sulawesi Tenggara
  {
    id: 'kendari',
    name: 'Kendari',
    provinceId: 'sultra',
    provinceName: 'Sulawesi Tenggara',
    airportName: 'Bandara Haluoleo',
    airportCode: 'KDI',
    isMainHub: true,
    hubPathway: 'Penerbangan domestik KDI ke UPG (Makassar) (hanya 45 menit) atau CGK',
    transitHub: 'Makassar (UPG)',
    estimatedFlightHours: '45 menit ke UPG + 10-11 jam ke Jeddah',
    travelLogistics: 'Kendari sangat dekat dengan hub Makassar (hanya 45 menit penerbangan). Mayoritas paket Umrah jamaah Sultra dirancang menyambung rombongan di Makassar.',
    importantNotes: [
      'Rute KDI–UPG dilayani beberapa kali setiap hari oleh maskapai Lion Group dan Garuda.',
      'Kombinasi tiket terusan (through passenger) membuat jamaah tidak perlu klaim bagasi di Makassar.',
      'Sangat bersahabat untuk jamaah keluarga dan lansia karena durasi transit domestik singkat.'
    ],
    recommendedAirlines: ['Garuda Indonesia', 'Lion Air', 'Batik Air', 'Super Air Jet']
  },

  // Sulawesi Barat
  {
    id: 'mamuju',
    name: 'Mamuju',
    provinceId: 'sulbar',
    provinceName: 'Sulawesi Barat',
    airportName: 'Bandara Tampa Padang',
    airportCode: 'MJU',
    isMainHub: true,
    hubPathway: 'Penerbangan domestik MJU ke UPG (Makassar) ATAU jalur darat',
    transitHub: 'Makassar (UPG)',
    estimatedFlightHours: '50 menit terbang ke UPG ATAU 9-10 jam darat',
    travelLogistics: 'Jamaah dari Mamuju dapat memilih penerbangan terjadwal dari Bandara Tampa Padang ke Bandara Hasanuddin Makassar, atau rombongan bus darat via Majene-Parepare.',
    importantNotes: [
      'Bagi yang memilih opsi darat dengan bus rombongan, sediakan waktu istirahat di Makassar sebelum keberangkatan internasional.',
      'Penerbangan Tampa Padang (MJU) ke UPG menghemat waktu secara signifikan bagi jamaah sepuh.'
    ],
    recommendedAirlines: ['Wings Air (MJU-UPG)', 'Batik Air via connecting']
  },

  // Gorontalo
  {
    id: 'gorontalo',
    name: 'Gorontalo',
    provinceId: 'gorontalo',
    provinceName: 'Gorontalo',
    airportName: 'Bandara Djalaluddin',
    airportCode: 'GTO',
    isMainHub: true,
    hubPathway: 'Penerbangan domestik GTO ke UPG (Makassar) atau CGK (Jakarta)',
    transitHub: 'Makassar (UPG) atau Jakarta (CGK)',
    estimatedFlightHours: '1 jam 30 menit ke UPG + 10-11 jam ke Jeddah',
    travelLogistics: 'Masyarakat Gorontalo memiliki konektivitas udara yang mapan dari Bandara Djalaluddin menuju Makassar maupun Jakarta.',
    importantNotes: [
      'Penerbangan transit di Makassar (UPG) adalah rute paling lazim dan efisien waktu bagi jamaah Gorontalo.',
      'Pastikan dokumen paspor telah dipersiapkan minimal 4-5 bulan sebelum musim keberangkatan.'
    ],
    recommendedAirlines: ['Garuda Indonesia', 'Lion Air', 'Batik Air']
  }
];

export const PROVINCES_DATA: ProvinceInfo[] = [
  {
    id: 'sulteng',
    slug: 'umrah-dari-sulawesi-tengah',
    name: 'Sulawesi Tengah',
    shortName: 'Sulteng',
    capital: 'Palu',
    mainAirport: 'Bandara Mutiara SIS Al-Jufrie (PLW)',
    description: 'Pusat panduan dan pilihan paket Umrah untuk masyarakat Palu, Luwuk, Poso, Donggala, Tolitoli, dan kabupaten sekitarnya. Terhubung efisien melalui transit Makassar dan Jakarta.',
    flightHubRoute: 'Palu / Luwuk ➔ Transit Makassar (UPG) atau Jakarta (CGK) ➔ Jeddah / Madinah',
    geographicalContext: 'Wilayah Sulawesi Tengah yang membentang luas memiliki karakteristik perjalanan berjenjang. Jamaah pesisir timur (Banggai/Luwuk) dan barat (Palu/Donggala) memiliki jalur akses penerbangan yang perlu dihitung secara cermat agar tidak melelahkan keluarga.',
    cities: CITIES_DATA.filter((c) => c.provinceId === 'sulteng'),
    keyAdvice: [
      'Pilih connecting flight dengan sistem through check-in agar koper besar langsung masuk ke maskapai penerbangan internasional.',
      'Bagi jamaah dari Luwuk atau Tolitoli, sediakan jeda transit minimal 4 jam di Makassar untuk kenyamanan shalat dan makan keluarga.',
      'Pastikan paspor dan rekam biometrik (Bio Visa KSA) diselesaikan sebelum hari keberangkatan menuju bandara hub.'
    ],
    seoTitle: 'Paket Umrah Sulawesi Tengah – Panduan Keberangkatan Palu, Luwuk & Poso',
    seoDescription: 'Informasi lengkap paket Umrah resmi untuk calon jamaah Sulawesi Tengah. Rute transit bandara Palu & Luwuk, estimasi waktu, serta pendampingan ramah lansia bersama Aji Zulfikar.'
  },
  {
    id: 'sulsel',
    slug: 'umrah-dari-sulawesi-selatan',
    name: 'Sulawesi Selatan',
    shortName: 'Sulsel',
    capital: 'Makassar',
    mainAirport: 'Bandara Internasional Sultan Hasanuddin (UPG)',
    description: 'Pusat informasi paket Umrah keberangkatan langsung (direct flight) dan transit efisien dari Makassar, Parepare, Bone (Watampone), Palopo, dan seluruh wilayah Sulsel.',
    flightHubRoute: 'Makassar (UPG) ➔ Penerbangan Langsung / 1x Transit ➔ Madinah / Jeddah',
    geographicalContext: 'Sulawesi Selatan adalah hub perhubungan udara terpenting di Indonesia Timur untuk ibadah Umrah. Bandara Internasional Sultan Hasanuddin memiliki frekuensi penerbangan langsung ke Arab Saudi yang sangat membantu kenyamanan jamaah sepuh.',
    cities: CITIES_DATA.filter((c) => c.provinceId === 'sulsel'),
    keyAdvice: [
      'Manfaatkan opsi penerbangan direct Makassar–Madinah/Jeddah jika membawa orang tua atau anak-anak untuk menghindari kelelahan transit.',
      'Bagi jamaah luar Makassar (Bone, Parepare, Enrekang, Palopo), atur transportasi darat menuju bandara agar tiba minimal 4 jam sebelum jadwal terbang internasional.',
      'Pilih hotel di Makkah dan Madinah dengan jarak jalan kaki yang wajar dari pelataran masjid.'
    ],
    seoTitle: 'Paket Umrah Sulawesi Selatan – Direct Flight & Keberangkatan Makassar',
    seoDescription: 'Temukan pilihan paket Umrah resmi dari Makassar dan Sulawesi Selatan. Info penerbangan langsung, hotel dekat pelataran, dan konsultasi PPIU terpercaya bersama Aji Zulfikar.'
  },
  {
    id: 'sulut',
    slug: 'umrah-dari-sulawesi-utara',
    name: 'Sulawesi Utara',
    shortName: 'Sulut',
    capital: 'Manado',
    mainAirport: 'Bandara Internasional Sam Ratulangi (MDC)',
    description: 'Panduan perjalanan ibadah Umrah terencana untuk jamaah Manado, Kotamobagu, Bolaang Mongondow, dan wilayah Sulawesi Utara dengan rute transit terpilih.',
    flightHubRoute: 'Manado (MDC) ➔ Transit Jakarta (CGK) atau Makassar (UPG) ➔ Jeddah / Madinah',
    geographicalContext: 'Jamaah dari Sulawesi Utara menempuh penerbangan domestik awal sekitar 3 jam ke Jakarta atau 1,5 jam ke Makassar sebelum terbang menuju tanah suci. Perencanaan waktu transit yang cukup menjadi kunci kenyamanan.',
    cities: CITIES_DATA.filter((c) => c.provinceId === 'sulut'),
    keyAdvice: [
      'Gunakan jeda transit yang cukup di Cengkareng atau Makassar untuk relaksasi tubuh dan pergantian pakaian ihram jika miqat di pesawat.',
      'Pengurusan vaksinasi internasional di KKP Kelas II Manado dianjurkan selesai maksimal 2 pekan sebelum tanggal terbang.',
      'Koordinasikan penjemputan dan pelepasan rombongan dengan perwakilan PPIU resmi.'
    ],
    seoTitle: 'Paket Umrah Sulawesi Utara – Panduan Lengkap Jamaah Manado & Sekitarnya',
    seoDescription: 'Informasi paket Umrah resmi untuk jamaah Sulawesi Utara. Jalur transit Manado, panduan dokumen paspor, dan pendampingan personal bersama Aji Zulfikar.'
  },
  {
    id: 'sultra',
    slug: 'umrah-dari-sulawesi-tenggara',
    name: 'Sulawesi Tenggara',
    shortName: 'Sultra',
    capital: 'Kendari',
    mainAirport: 'Bandara Haluoleo (KDI)',
    description: 'Pusat konsultasi dan pilihan paket Umrah untuk masyarakat Kendari, Baubau, Kolaka, Konawe, dan sekitarnya dengan konektivitas singkat via Makassar.',
    flightHubRoute: 'Kendari (KDI) / Baubau ➔ Transit Singkat Makassar (UPG) ➔ Jeddah / Madinah',
    geographicalContext: 'Letak Sulawesi Tenggara yang sangat dekat secara jalur udara dengan Makassar (sekitar 40-50 menit penerbangan) memberikan kemudahan besar bagi calon jamaah dalam menyambung penerbangan internasional.',
    cities: CITIES_DATA.filter((c) => c.provinceId === 'sultra'),
    keyAdvice: [
      'Penerbangan dari Kendari ke Makassar sangat singkat sehingga jamaah tidak mudah lelah sebelum penerbangan panjang ke tanah suci.',
      'Pastikan memilih paket PPIU yang menyediakan fasilitas lounge transit atau ruang tunggu nyaman di Bandara Hasanuddin.',
      'Periksa kembali masa berlaku paspor (minimal 7-8 bulan sebelum kepulangan).'
    ],
    seoTitle: 'Paket Umrah Sulawesi Tenggara – Jalur Keberangkatan Kendari & Baubau',
    seoDescription: 'Konsultasi paket Umrah resmi masyarakat Kendari dan Sulawesi Tenggara. Solusi transit cepat via Makassar, hotel dekat masjid, dan bimbingan amanah bersama Aji Zulfikar.'
  },
  {
    id: 'sulbar',
    slug: 'umrah-dari-sulawesi-barat',
    name: 'Sulawesi Barat',
    shortName: 'Sulbar',
    capital: 'Mamuju',
    mainAirport: 'Bandara Tampa Padang (MJU)',
    description: 'Solusi perjalanan Umrah nyaman untuk calon jamaah Mamuju, Polewali Mandar, Majene, Mamasa, dan Pasangkayu menuju tanah suci.',
    flightHubRoute: 'Mamuju (MJU) / Jalur Darat ➔ Hub Makassar (UPG) ➔ Jeddah / Madinah',
    geographicalContext: 'Masyarakat Sulawesi Barat memiliki dua alternatif: jalur udara perintis/domestik dari Mamuju ke Makassar, atau rombongan bus darat dari Polman/Majene langsung menuju Makassar.',
    cities: CITIES_DATA.filter((c) => c.provinceId === 'sulbar'),
    keyAdvice: [
      'Bila memilih jalur darat dari Polman/Majene ke Makassar, usahakan menginap satu malam di Makassar agar stamina jamaah bugar saat masuk bandara.',
      'Konsultasikan ketersediaan bagasi penerbangan domestik jika terbang dari Bandara Tampa Padang.',
      'Pastikan PPIU memiliki perwakilan resmi yang mendampingi di Makassar sebelum keberangkatan.'
    ],
    seoTitle: 'Paket Umrah Sulawesi Barat – Panduan Jamaah Mamuju & Polewali Mandar',
    seoDescription: 'Informasi paket Umrah terpercaya untuk masyarakat Sulawesi Barat. Estimasi perjalanan, pilihan transit Makassar, dan konsultasi ramah keluarga bersama Aji Zulfikar.'
  },
  {
    id: 'gorontalo',
    slug: 'umrah-dari-gorontalo',
    name: 'Gorontalo',
    shortName: 'Gorontalo',
    capital: 'Kota Gorontalo',
    mainAirport: 'Bandara Djalaluddin (GTO)',
    description: 'Panduan lengkap dan perbandingan paket Umrah untuk masyarakat Gorontalo, Bone Bolango, Limboto, dan sekitarnya dengan rute penerbangan terencana.',
    flightHubRoute: 'Gorontalo (GTO) ➔ Transit Makassar (UPG) atau Jakarta (CGK) ➔ Jeddah / Madinah',
    geographicalContext: 'Gorontalo yang berjuluk Bumi Serambi Madinah memiliki antusiasme Umrah yang sangat tinggi. Perjalanan udara terhubung reguler menuju hub Makassar dan Jakarta.',
    cities: CITIES_DATA.filter((c) => c.provinceId === 'gorontalo'),
    keyAdvice: [
      'Penerbangan transit via Makassar umumnya memberikan total waktu perjalanan paling hemat dibanding transit via kota lain.',
      'Selesaikan bimbingan manasik secara komprehensif sebelum keberangkatan agar ibadah rukun dan sunnah berjalan khusyuk.',
      'Konsultasikan kebutuhan orang tua sejak awal terkait penyediaan kursi roda saat thawaf dan sa’i di Makkah.'
    ],
    seoTitle: 'Paket Umrah Gorontalo – Pilihan Resmi Mitra PPIU Serambi Madinah',
    seoDescription: 'Pusat informasi paket Umrah resmi masyarakat Gorontalo. Jalur penerbangan Bandara Djalaluddin, tips persiapan keluarga, dan konsultasi transparan bersama Aji Zulfikar.'
  }
];
