export type StepDetail = {
  step: string;              // Contoh: "Data Collection", "KKPR", dst
  subtitle?: string;         // Subjudul ringkas di samping judul tahap
  duration?: string;         // Chip estimasi waktu, contoh: "1 - 2 Minggu"
  description: string;       // Ringkasan singkat saat kartu tertutup
  detailDescription?: string;// Penjelasan lengkap saat kartu mengembang
  deliverables?: string[];   // Kotak kiri: "Deliverable & Dokumen Keluaran" (centang)
  clientNeeds?: string[];    // Kotak kanan: "Yang Dibutuhkan dari Klien" (titik)
  images?: {
    src: string;
    alt: string;
    caption?: string;
  }[];                       // Galeri gambar opsional di dalam tahap
};

/**
 * Blok konten modular untuk memudahkan penambahan teks, gambar,
 * galeri foto, maupun kombinasi gambar+teks di halaman mana pun.
 */
export type ContentBlock =
  | {
      type: 'text';
      eyebrow?: string;
      title?: string;
      titleMuted?: string;
      paragraphs: string[];
    }
  | {
      type: 'image';
      src: string;
      alt: string;
      caption?: string;
      aspect?: 'wide' | 'landscape' | 'auto';
    }
  | {
      type: 'gallery';
      eyebrow?: string;
      title?: string;
      columns?: 2 | 3;
      images: { src: string; alt: string; caption?: string }[];
    }
  | {
      type: 'image-text';
      imagePosition?: 'left' | 'right';
      src: string;
      alt: string;
      eyebrow?: string;
      title: string;
      titleMuted?: string;
      paragraphs: string[];
    }
  | {
      type: 'stats';
      items: { value: string; label: string; sublabel?: string }[];
    };

export type Project = {
  slug: string;              // Contoh: "mw-house"
  name: string;              // Contoh: "MW House"
  cover: string;             // Path atau URL gambar utama
  summary: string;           // Deskripsi singkat proyek
  category?: string;         // Contoh: "Single Residential" (subjudul hero & chip)
  location?: string;         // Contoh: "Denpasar, Bali"
  year?: string;             // Contoh: "2025"
  area?: string;             // Contoh: "340 m²"
  gallery?: { src: string; alt: string; caption?: string }[];
  journey: StepDetail[];     // 5 tahap Design Journey
  extraBlocks?: ContentBlock[]; // Blok tambahan opsional (teks/gambar bebas)
};

export type PermitCase = {
  id: string;
  title: string;             // Contoh: "PBG 01 — Residensial Tropis Sanur"
  location?: string;
  year?: string;
  buildingType?: string;
  summary: string;
  image?: string;
};

export type Permit = {
  slug: string;              // "pbg" | "slf"
  name: string;              // "PBG" | "SLF"
  fullName: string;          // "Persetujuan Bangunan Gedung"
  summary: string;
  heroActionLabel?: string;  // Contoh: "SEE MORE" atau "LIHAT ALUR"
  cover: string;
  steps: StepDetail[];
  cases: PermitCase[];       // PBG 1-3 / SLF 1-3
  extraBlocks?: ContentBlock[]; // Blok tambahan opsional (teks/gambar bebas)
};

export type TeamMember = {
  id: string;
  name: string;
  position: string;
  photo: string;
  bio?: string;
  education: string[];
  career: string[];
  jobdesk: string[];
};

export type SiteConfig = {
  companyName: string;
  tagline: string;
  logoLight: string;         // Untuk latar gelap (Navbar pill)
  logoDark: string;          // Untuk latar putih (Footer, kartu terang)
  heroVariant: 'split' | 'stacked'; // Varian 1 ('split' kiri-kanan) atau Varian 2 ('stacked' atas-bawah)
  heroLabels: {
    designLabel: string;
    designCta: string;
    permitLabel: string;
    permitCta: string;
  };
  navigation: {
    homeLabel: string;
    exploreLabel: string;    // Bisa diganti "Explore" atau "Project"
    aboutLabel: string;
    ctaLabel: string;
  };
  aboutSection: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
  };
  explorePage: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    designSectionEyebrow: string;
    designSectionTitle: string;
    designSectionSubtitle: string;
    permitSectionEyebrow: string;
    permitSectionTitle: string;
    permitSectionSubtitle: string;
  };
  contact: {
    whatsappNumber: string;  // Format internasional tanpa +, contoh: "6281234567890"
    whatsappDisplay: string;
    whatsappDefaultMessage: string;
    email: string;
    address: string;
    city: string;
    instagram?: string;
    workingHours?: string;
  };
  ctaBanner: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
  };
  homeExtraBlocks: ContentBlock[];    // Tambahkan blok teks/gambar baru di Home dengan mudah
  exploreExtraBlocks: ContentBlock[]; // Tambahkan blok teks/gambar baru di Explore dengan mudah
};
