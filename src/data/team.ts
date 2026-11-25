import { TeamMember } from '../types/content';

/**
 * DATA TIM GRAHITA DESIGN (src/data/team.ts)
 * ------------------------------------------
 * Berisi 7 anggota tim sesuai brief klien.
 * Untuk mengganti foto, jabatan, riwayat pendidikan, karier, atau jobdesk:
 * cukup sunting teks/path di bawah ini tanpa menyentuh komponen React.
 * Untuk menambah anggota ke-8 dst., cukup tambahkan objek baru ke array `teamMembers`.
 */
export const teamMembers: TeamMember[] = [
  {
    id: 'mdp',
    name: 'MDP',
    position: 'Principal Architect & Founder',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    education: [
      'Sarjana Teknik Arsitektur (S.T.) — Pendidikan Profesi Arsitek',
      'Sertifikasi Keahlian Arsitektur & Regulasi Bangunan Gedung',
    ],
    career: [
      'Pendiri & Principal Architect Grahita Design',
      'Pengalaman memimpin perancangan proyek residensial, komersial, dan perizinan bangunan di Bali & Indonesia',
    ],
    jobdesk: [
      'Mengarahkan visi desain arsitektur dan kualitas konseptual seluruh proyek studio',
      'Memimpin diskusi strategis bersama klien sejak tahap konsultasi awal',
      'Menjamin keselarasan rancangan estetika dengan kepatuhan teknis regulasi PBG & SLF',
    ],
  },
  {
    id: 'dwi-kusuma',
    name: 'Dwi Kusuma',
    position: 'Senior Architect & Project Lead',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    education: [
      'Sarjana Teknik Arsitektur (S.Ars.)',
      'Pelatihan Pengelolaan Proyek & Koordinasi BIM Arsitektur',
    ],
    career: [
      'Senior Architect di Grahita Design',
      'Berpengalaman menangani pengembangan desain hunian tropis dan bangunan komersial bertingkat',
    ],
    jobdesk: [
      'Mengembangkan konsep skematik menjadi rancangan arsitektur terukur (Design Development)',
      'Mengkoordinasikan jadwal kerja tim desain lintas tahapan proyek',
      'Melakukan kontrol mutu terhadap detail proporsi fasad, tata ruang, dan pemilihan material',
    ],
  },
  {
    id: 'yoga-pratama',
    name: 'Yoga Pratama',
    position: 'Architectural Designer & 3D Specialist',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    education: [
      'Sarjana Arsitektur (S.Ars.)',
      'Spesialisasi Pemodelan 3D Arsitektural & Simulasi Pencahayaan Alami',
    ],
    career: [
      'Architectural Designer di Grahita Design',
      'Menangani eksplorasi gubahan massa dan visualisasi arsitektur residensial-komersial',
    ],
    jobdesk: [
      'Menyusun studi gubahan massa 3D, orientasi matahari, dan penghawaan tapak',
      'Memproduksi visualisasi eksterior dan interior beresolusi tinggi untuk presentasi klien',
      'Menyiapkan moodboard tekstur dan skema pencahayaan ruang',
    ],
  },
  {
    id: 'andika-satya',
    name: 'Andika Satya',
    position: 'Technical & Permit Specialist (PBG / SLF)',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    education: [
      'Sarjana Teknik Sipil / Arsitektur (S.T.)',
      'Pelatihan Sistem Informasi Manajemen Bangunan Gedung (SIMBG) & Standar Teknis Bangunan',
    ],
    career: [
      'Koordinator Divisi Pengurusan Perizinan di Grahita Design',
      'Berpengalaman mendampingi puluhan pengajuan PBG dan pemeriksaan kelaikan fungsi SLF',
    ],
    jobdesk: [
      'Memeriksa kesesuaian tata ruang (KKPR) dan kelengkapan dokumen legalitas pemohon',
      'Mengelola proses pengunggahan dokumen teknis dan administrasi pada sistem SIMBG',
      'Mendampingi jalannya sidang konsultasi TPA/TPT hingga penerbitan SK PBG dan SLF',
    ],
  },
  {
    id: 'doddy-indradi',
    name: 'Doddy Indradi',
    position: 'Structure, MEP & Construction Drawing Lead',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    education: [
      'Sarjana Teknik Sipil (S.T.)',
      'Keahlian Perhitungan Struktur Bangunan Gedung & Koordinasi Utilitas MEP',
    ],
    career: [
      'Lead Engineering & DED Coordinator di Grahita Design',
      'Pengalaman teknis dalam perencanaan struktur, inspeksi bangunan terbangun, dan gambar kerja DED',
    ],
    jobdesk: [
      'Menyusun gambar kerja konstruksi (DED) serta integrasi jalur struktur dan MEP',
      'Melaksanakan survei pengukuran lapangan dan audit fisik keandalan bangunan untuk SLF',
      'Menyusun perhitungan teknis struktur, Rencana Anggaran Biaya (RAB), dan spesifikasi RKS',
    ],
  },
  {
    id: 'diah-sedani',
    name: 'Diah Sedani',
    position: 'Interior & Materiality Architect',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    education: [
      'Sarjana Desain Interior / Arsitektur',
      'Riset Material Tropis Berkelanjutan & Tata Ruang Komersial',
    ],
    career: [
      'Interior & Space Planner di Grahita Design',
      'Menangani perancangan tata ruang dalam untuk hunian privat, butik ritel, dan ruang kuliner',
    ],
    jobdesk: [
      'Merancang tata letak ergonomi ruang dalam dan detail furnitur terintegrasi (built-in)',
      'Mengkurasi palet material finishing yang tahan lama, fungsional, dan selaras arsitektur',
      'Menyiapkan gambar detail interior serta spesifikasi perlengkapan ruang',
    ],
  },
  {
    id: 'mevanie-subakti',
    name: 'Mevanie Subakti',
    position: 'Client Relations & Permit Administration',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    education: [
      'Sarjana Manajemen & Administrasi Proyek',
      'Tata Kelola Dokumen Legalitas & Komunikasi Klien Korporat',
    ],
    career: [
      'Client Relations & Document Controller di Grahita Design',
      'Berpengalaman mengelola penjadwalan proyek, komunikasi klien, dan arsip perizinan daerah',
    ],
    jobdesk: [
      'Menjadi penghubung komunikasi progres mingguan antara studio dan klien',
      'Mengelola kelengkapan berkas administrasi pengajuan KKPR, PBG, dan SLF',
      'Mengatur jadwal konsultasi, survei lapangan, serta serah terima dokumen akhir',
    ],
  },
];
