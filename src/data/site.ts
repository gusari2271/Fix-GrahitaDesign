import { SiteConfig } from '../types/content';

/**
 * KONFIGURASI UTAMA WEBSITE GRAHITA DESIGN
 * -----------------------------------------
 * Ubah teks, nomor WhatsApp, alamat, label menu, atau tambahkan elemen
 * gambar & paragraf baru melalui `homeExtraBlocks` dan `exploreExtraBlocks`.
 */
export const siteConfig: SiteConfig = {
  companyName: 'Grahita Design',
  tagline: 'Studio Arsitektur & Jasa Pengurusan Perizinan Bangunan (PBG & SLF)',
  logoLight: '/logo-light.png',
  logoDark: '/logo-dark.png',

  // Pilihan tampilan Hero: 'split' (kiri-kanan di desktop, atas-bawah di mobile) atau 'stacked' (atas-bawah)
  heroVariant: 'split',

  heroLabels: {
    designLabel: 'DESAIN ARSITEKTUR',
    designCta: 'SEE MORE',
    permitLabel: 'PENGURUSAN IZIN',
    permitCta: 'SEE MORE',
  },

  navigation: {
    homeLabel: 'Home',
    exploreLabel: 'Explore', // Dapat diganti menjadi "Project" kapan saja
    aboutLabel: 'About Us',
    ctaLabel: 'Konsultasi',
  },

  aboutSection: {
    eyebrow: 'TENTANG GRAHITA DESIGN',
    titleLine1: 'Kolaborasi Arsitek & Spesialis Perizinan',
    titleLine2: 'dalam Satu Studio Terpadu',
    description:
      'Grahita Design memadukan kepekaan perancangan arsitektur kontekstual dengan ketepatan teknis pengurusan Persetujuan Bangunan Gedung (PBG) serta Sertifikat Laik Fungsi (SLF). Klik salah satu anggota tim untuk melihat latar belakang pendidikan, perjalanan karier, dan tanggung jawab kerja.',
  },

  explorePage: {
    eyebrow: 'PORTOFOLIO & REKAM JEJAK',
    titleLine1: 'Karya Desain Arsitektur',
    titleLine2: '& Pengurusan Izin Bangunan',
    description:
      'Jelajahi seluruh rancangan hunian maupun ruang komersial kami beserta rekam jejak pendampingan perizinan PBG dan SLF yang telah kami tangani.',
    designSectionEyebrow: 'LAYANAN DESAIN ARSITEKTUR',
    designSectionTitle: 'Portofolio Proyek Desain',
    designSectionSubtitle:
      'Klik pada kartu proyek untuk mempelajari tahapan Design Journey mulai dari pengumpulan data hingga gambar kerja konstruksi.',
    permitSectionEyebrow: 'JASA PENGURUSAN PERIZINAN',
    permitSectionTitle: 'Portofolio Pengurusan PBG & SLF',
    permitSectionSubtitle:
      'Klik pada salah satu studi kasus atau jenis izin untuk membaca alur tahapan teknis pengurusan perizinan secara lengkap.',
  },

  contact: {
    whatsappNumber: '6281238009900',
    whatsappDisplay: '+62 812-3800-9900',
    whatsappDefaultMessage:
      'Halo Grahita Design, saya ingin berkonsultasi mengenai rencana desain arsitektur / pengurusan izin bangunan (PBG/SLF).',
    email: 'studio@grahitadesign.com',
    address: 'Jl. Tukad Badung, Renon, Denpasar Selatan',
    city: 'Bali, Indonesia',
    instagram: '@grahitadesign',
    workingHours: 'Senin – Jumat, 09.00 – 17.30 WITA',
  },

  ctaBanner: {
    eyebrow: 'DISKUSI AWAL PROYEK',
    titleLine1: 'Siap Merancang Bangunan',
    titleLine2: 'atau Mengurus Legalitas PBG & SLF?',
    description:
      'Sampaikan lokasi lahan, fungsi bangunan, atau kebutuhan dokumen perizinan Anda. Tim kami siap membantu memetakan langkah teknis dengan jelas dan transparan.',
    primaryButtonLabel: 'Konsultasi via WhatsApp',
    secondaryButtonLabel: 'Kirim Email Studio',
  },

  /**
   * TAMBAH ELEMEN BARU DI HALAMAN HOME DENGAN MUDAH:
   * Cukup tambahkan objek bertipe 'text', 'image', 'gallery', 'image-text', atau 'stats' di dalam array ini.
   * Biarkan kosong `[]` jika hanya ingin menampilkan Hero + Stats Ringkas + About Us sesuai struktur utama.
   */
  homeExtraBlocks: [
    {
      type: 'stats',
      items: [
        {
          value: '2 Layanan Inti',
          label: 'Desain Arsitektur & Perizinan',
          sublabel: 'Terintegrasi dari konsep hingga legalitas PBG/SLF',
        },
        {
          value: '5 Tahap',
          label: 'Design Journey Terukur',
          sublabel: 'Data Collection hingga Construction Drawing',
        },
        {
          value: 'PBG & SLF',
          label: 'Pendampingan Teknis Resmi',
          sublabel: 'Persiapan dokumen, gambar teknis, hingga terbit',
        },
        {
          value: '7 Profesional',
          label: 'Tim Multidisiplin',
          sublabel: 'Arsitek, drafter teknis, dan spesialis perizinan',
        },
      ],
    },
  ],

  /**
   * TAMBAH ELEMEN BARU DI HALAMAN EXPLORE DENGAN MUDAH:
   * Tambahkan blok teks atau galeri foto tambahan di sini kapan pun diperlukan.
   */
  exploreExtraBlocks: [],
};

export function getWhatsAppUrl(customMessage?: string): string {
  const message = encodeURIComponent(customMessage || siteConfig.contact.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${message}`;
}
