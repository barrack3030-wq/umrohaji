import { PageRoute } from '../types';

export interface SeoConfig {
  title: string;
  description: string;
  canonicalPath?: string;
  schemaJson?: Record<string, unknown> | Array<Record<string, unknown>>;
  ogType?: string;
}

export function applySeo(config: SeoConfig) {
  // Update document title
  document.title = config.title;

  // Update or create meta tags
  const setMeta = (nameAttr: 'name' | 'property', nameVal: string, content: string) => {
    let el = document.querySelector(`meta[${nameAttr}="${nameVal}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(nameAttr, nameVal);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setMeta('name', 'description', config.description);
  setMeta('property', 'og:title', config.title);
  setMeta('property', 'og:description', config.description);
  setMeta('property', 'og:type', config.ogType || 'website');
  setMeta('name', 'twitter:title', config.title);
  setMeta('name', 'twitter:description', config.description);

  // Canonical
  const fullUrl = window.location.origin + (config.canonicalPath || window.location.pathname);
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', fullUrl);
  setMeta('property', 'og:url', fullUrl);

  // Schema.org JSON-LD
  let scriptEl = document.getElementById('dynamic-schema-ld') as HTMLScriptElement | null;
  if (config.schemaJson) {
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'dynamic-schema-ld';
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(config.schemaJson);
  } else if (scriptEl) {
    scriptEl.remove();
  }
}

export function updatePageSeo(route: PageRoute) {
  const seoMap: Record<PageRoute, SeoConfig> = {
    '/': {
      title: 'Umrah dari Sulawesi | Konsultan & Affiliate Umrah Aji Zulfikar',
      description: 'Platform informasi, perbandingan rute, dan konsultasi paket Umrah resmi dari Sulawesi. Menghubungkan calon jamaah dengan PPIU resmi berizin Kemenag RI.',
      canonicalPath: '/',
      schemaJson: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Umrah Sulawesi bersama Aji Zulfikar',
        url: window.location.origin,
        description: 'Informasi dan konsultasi Umrah dari Sulawesi, Indonesia.',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${window.location.origin}/#/paket-umrah?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      }
    },
    '/paket-umrah': {
      title: 'Pilihan Paket Umrah Jamaah Sulawesi | Mitra PPIU Berizin Kemenag',
      description: 'Daftar paket Umrah 9, 12, 13, 14, dan 16 hari dengan akses keberangkatan dari kota-kota di Sulawesi via penerbangan langsung Makassar maupun connecting flight.',
      canonicalPath: '/paket-umrah'
    },
    '/umrah-dari-sulawesi': {
      title: 'Panduan Rute & Keberangkatan Umrah dari 6 Provinsi Sulawesi',
      description: 'Informasi jalur penerbangan transit UPG & CGK, bandara keberangkatan, dan tips perjalanan ibadah bagi jamaah asal seluruh provinsi Sulawesi.',
      canonicalPath: '/umrah-dari-sulawesi'
    },
    '/umrah-dari-sulawesi-tengah': {
      title: 'Paket & Panduan Umrah Sulawesi Tengah (Palu, Luwuk, Poso, Tolitoli)',
      description: 'Informasi rute connecting flight Bandara Mutiara SIS Al-Jufri Palu (PLW) dan Syukuran Aminuddin Amir Luwuk menuju hub internasional Makassar.',
      canonicalPath: '/umrah-dari-sulawesi-tengah'
    },
    '/umrah-dari-sulawesi-selatan': {
      title: 'Paket & Panduan Umrah Sulawesi Selatan (Makassar, Parepare, Palopo, Bone)',
      description: 'Jalur penerbangan langsung direct flight dari Bandara Internasional Sultan Hasanuddin Makassar (UPG) menuju Jeddah dan Madinah.',
      canonicalPath: '/umrah-dari-sulawesi-selatan'
    },
    '/umrah-dari-sulawesi-utara': {
      title: 'Paket & Panduan Umrah Sulawesi Utara (Manado, Kotamobagu, Bitung)',
      description: 'Informasi connecting flight Bandara Sam Ratulangi Manado (MDC) transit Makassar/Jakarta untuk ibadah Umrah yang nyaman.',
      canonicalPath: '/umrah-dari-sulawesi-utara'
    },
    '/umrah-dari-sulawesi-tenggara': {
      title: 'Paket & Panduan Umrah Sulawesi Tenggara (Kendari, Baubau, Kolaka)',
      description: 'Pilihan penerbangan Bandara Haluoleo Kendari (KDI) dengan konektivitas cepat ke Bandara Sultan Hasanuddin Makassar.',
      canonicalPath: '/umrah-dari-sulawesi-tenggara'
    },
    '/umrah-dari-sulawesi-barat': {
      title: 'Paket & Panduan Umrah Sulawesi Barat (Mamuju, Majene, Polewali Mandar)',
      description: 'Rute penerbangan Bandara Tampa Padang Mamuju (MJU) serta opsi jalur darat poros Polewali-Makassar untuk keberangkatan Umrah.',
      canonicalPath: '/umrah-dari-sulawesi-barat'
    },
    '/umrah-dari-gorontalo': {
      title: 'Paket & Panduan Umrah Gorontalo (Bandara Djalaluddin GTO)',
      description: 'Panduan penerbangan ibadah Umrah dari Kota Gorontalo dan sekitarnya transit Makassar untuk keluarga jamaah.',
      canonicalPath: '/umrah-dari-gorontalo'
    },
    '/panduan-umrah': {
      title: 'Panduan Lengkap Umrah Sulawesi: Dokumen, Koper, Rute & Ibadah',
      description: 'Kumpulan tips praktis pengurusan paspor di kantor imigrasi se-Sulawesi, manajemen koper, tips transit panjang, dan adab ziarah di Tanah Suci.',
      canonicalPath: '/panduan-umrah'
    },
    '/umrah-lansia': {
      title: 'Ingin Memberangkatkan Orang Tua Umrah? Panduan Khusus Lansia',
      description: 'Rekomendasi hotel ring 1 terdekat pelataran Ka\'bah, kursi roda resmi, manajemen stamina penerbangan, dan pendampingan santun untuk orang tua tercinta.',
      canonicalPath: '/umrah-lansia'
    },
    '/tentang-aji': {
      title: 'Tentang Aji Zulfikar | Konsultan Umrah & Tour Leader Jamaah Sulawesi',
      description: 'Profil, latar belakang pengalaman mendampingi jamaah di Tanah Suci, kemitraan PPIU resmi Kemenag RI, dan cara kerja affiliate yang transparan.',
      canonicalPath: '/tentang-aji'
    },
    '/faq': {
      title: 'Tanya Jawab (FAQ) Umrah Sulawesi | Jawaban Transparan & Lengkap',
      description: 'Klarifikasi status affiliate, verifikasi izin PPIU Kemenag, rute penerbangan daerah pelosok Sulawesi, dan prosedur akad pendaftaran.',
      canonicalPath: '/faq'
    },
    '/kontak': {
      title: 'Kontak Aji Zulfikar | Konsultasi WhatsApp Umrah Sulawesi',
      description: 'Hubungi Aji Zulfikar langsung via WhatsApp untuk mendiskusikan rencana perjalanan Umrah keluarga Anda dari berbagai daerah di Sulawesi.',
      canonicalPath: '/kontak'
    }
  };

  const selectedConfig = seoMap[route] || seoMap['/'];
  applySeo(selectedConfig);
}
