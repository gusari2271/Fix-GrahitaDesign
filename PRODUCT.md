# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
React + Vite + TypeScript + Tailwind CSS + React Router + Embla Carousel + Framer Motion (pinned in PRD & user request)

## Users
- **Calon Klien Desain:** Pemilik lahan yang ingin membangun rumah/bangunan dan perlu melihat gaya desain, proses kerja (Design Journey), dan kredibilitas tim.
- **Calon Klien Izin:** Pemilik bangunan yang membutuhkan pengurusan PBG atau SLF dan ingin memahami alur, estimasi tahapan, dokumen yang dibutuhkan, serta bukti pengalaman.
- **Pengunjung Umum:** Rekan, mitra, dan calon talenta yang ingin mengenal tim serta profil studio.
- **Admin (Offline):** Pemilik/developer yang memperbarui atau menambah foto, teks, proyek, izin, atau anggota tim cukup dari file data di `src/data/` tanpa mengubah kode komponen.

## Product Purpose
Website company profile Grahita Design yang menampilkan dua layanan utama secara setara sejak layar pertama: **Desain Arsitektur** dan **Jasa Pengurusan Izin (PBG & SLF)**, memaparkan proses kerja transparan, memperkenalkan 7 anggota tim, dan mengarahkan calon klien ke konsultasi WhatsApp/Email.

## Positioning
Menggabungkan keahlian perancangan arsitektur kontekstual dengan pendampingan perizinan bangunan resmi (PBG & SLF) dalam satu biro terpadu dengan alur tahapan yang transparan.

## Capabilities and Constraints
- Route utama: `/` (Home: Split Hero + About Us), `/explore` (Semua proyek desain & izin), `/desain/:slug` (Design Journey 5 tahap), `/izin/:slug` (Alur pengurusan PBG/SLF).
- Seluruh konten berasal dari `src/data/` dan dirancang modular agar mudah menambah elemen gambar, teks, proyek, atau seksi tambahan di masa depan.
- Tanpa login/admin panel, pembayaran online, atau blog pada v1.

## Brand Commitments
- **Nama Perusahaan:** Grahita Design
- **Logo:** Logo resmi Grahita Design (huruf G geometris menyatu dengan siluet atap & jendela rumah).
- **Palet Monokrom Ketat:** Hanya hitam (`#0A0A0A`), putih (`#FFFFFF` sebagai warna utama), dan abu-abu (`#F7F7F7`, `#E5E5E5`, `#737373`, `#404040`). Foto adalah satu-satunya sumber warna.
- **Gaya Visual:** Modern minimalis dipadukan dengan glassmorphism (floating dark frosted pill navbar, translucent glass overlays & cards, kartu putih radius 24px, timeline kartu mengembang), serta Hero split dua panel bergaya DDAP Architect dengan carousel independen.
- **Tipografi:** Century Gothic (`"Century Gothic", "Questrial", sans-serif`).

## Evidence on Hand
- Dokumen `Grahita Design Brief.md` (PRD v1.0).
- Logo terlampir Grahita Design.
- Daftar 5 proyek desain klien: MW House, Y House, Graha Gungwah, Kanaya Florist, ACK Udayana.
- Daftar 2 layanan izin: PBG dan SLF (beserta draf 7 tahap pengurusan).
- Daftar 7 anggota tim: MDP, Dwi Kusuma, Yoga Pratama, Andika Satya, Doddy Indradi, Diah Sedani, Mevanie Subakti.

## Product Principles
1. Setarakan visibilitas layanan Desain dan Pengurusan Izin sejak viewport pertama.
2. Transparansi tahapan kerja melalui timeline interaktif yang menjelaskan deliverable dan kebutuhan dari klien.
3. Pemisahan total antara data (`src/data/`) dan komponen UI agar penambahan teks maupun gambar ke depannya mudah dan aman.
4. Disiplin monokrom murni: antarmuka hening dalam hitam-putih-abu sehingga fotografi arsitektur menjadi pusat perhatian.
