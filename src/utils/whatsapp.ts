export const OFFICIAL_WHATSAPP_NUMBER = '6281242998877'; // Aji Zulfikar WhatsApp Contact Line

export interface BuildWhatsAppUrlOptions {
  city?: string;
  month?: string;
  pax?: string;
  hasElderly?: boolean;
  packageName?: string;
  customNote?: string;
}

export function buildWhatsAppUrl(options: BuildWhatsAppUrlOptions = {}): string {
  const city = options.city?.trim() || '[Kota Anda di Sulawesi]';
  const month = options.month?.trim() || '[Bulan rencana berangkat]';
  const pax = options.pax?.trim() ? ` untuk ${options.pax} orang` : '';
  const elderlyNote = options.hasElderly ? ` (termasuk orang tua/lansia)` : '';
  const pkg = options.packageName ? ` mengenai *${options.packageName}*` : '';

  let message = `Assalamu'alaikum Mas Aji, saya ingin konsultasi paket Umrah${pkg}. Saya berasal dari ${city} dan berencana berangkat sekitar ${month}${pax}${elderlyNote}. Mohon informasi pilihan paket PPIU resmi yang sesuai dan rekomendasi rutenya. Terima kasih.`;

  if (options.customNote?.trim()) {
    message += `\n\nCatatan tambahan: ${options.customNote.trim()}`;
  }

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encoded}`;
}
