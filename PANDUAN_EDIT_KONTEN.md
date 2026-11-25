# Panduan Menambah & Mengubah Konten (Gambar, Teks, Proyek, Izin, Tim)

Seluruh isi website **Grahita Design** dipisahkan dari komponen tampilan React dan diletakkan di folder `src/data/`. Anda **tidak perlu mengubah kode komponen UI** saat ingin mengganti tulisan, menambah foto baru, atau menambah blok paragraf baru.

---

## 1. Cara Menambah Foto / Gambar Sendiri (Lokal)

1. Buat folder `public/images/` (jika belum ada) lalu masukkan file foto Anda (`.jpg`, `.png`, atau `.webp`), misalnya:
   `public/images/fasad-baru.webp`
2. Di file data (`src/data/projects.ts`, `permits.ts`, `team.ts`, atau `site.ts`), tulis alamatnya diawali garis miring `/`:
   ```ts
   cover: '/images/fasad-baru.webp'
   ```
   *(Anda juga tetap bisa memakai tautan URL gambar langsung seperti `https://...`).*

---

## 2. Cara Menambah Elemen Teks atau Gambar Baru dengan Cepat (`ContentBlock`)

Setiap halaman utama dan detail mendukung array blok modular (`homeExtraBlocks`, `exploreExtraBlocks`, serta `extraBlocks` di tiap proyek/izin). Cukup salin salah satu format di bawah ini ke dalam array tersebut:

### A. Menambah Blok Teks / Paragraf Baru
```ts
{
  type: 'text',
  eyebrow: 'CATATAN ARSITEK',
  title: 'Pendekatan Iklim Tropis',
  titleMuted: 'pada Setiap Rancangan Ruang',
  paragraphs: [
    'Paragraf pertama penjelasan Anda tulis di sini.',
    'Paragraf kedua penjelasan Anda tulis di sini.',
  ],
}
```

### B. Menambah Satu Gambar Penuh + Caption
```ts
{
  type: 'image',
  src: '/images/perspektif-malam.jpg',
  alt: 'Perspektif malam hari bangunan',
  caption: 'Pencahayaan fasad hangat pada sore menuju malam hari.',
  aspect: 'landscape', // pilihan: 'wide' | 'landscape' | 'auto'
}
```

### C. Menambah Galeri Banyak Gambar (2 atau 3 Kolom + Klik Zoom)
```ts
{
  type: 'gallery',
  eyebrow: 'GALERI TAMBAHAN',
  title: 'Dokumentasi Detail Material',
  columns: 3, // pilihan: 2 atau 3
  images: [
    { src: '/images/foto-1.jpg', alt: 'Detail 1', caption: 'Keterangan foto 1' },
    { src: '/images/foto-2.jpg', alt: 'Detail 2', caption: 'Keterangan foto 2' },
    { src: '/images/foto-3.jpg', alt: 'Detail 3', caption: 'Keterangan foto 3' },
  ],
}
```

### D. Menambah Gambar + Teks Berdampingan (Kiri / Kanan)
```ts
{
  type: 'image-text',
  imagePosition: 'left', // pilihan: 'left' atau 'right'
  src: '/images/interior-utama.jpg',
  alt: 'Ruang utama',
  eyebrow: 'KONSEP RUANG DALAM',
  title: 'Sirkulasi Udara Silang',
  titleMuted: 'Tanpa Ketergantungan Pendingin Buatan',
  paragraphs: [
    'Tuliskan cerita desain atau penjelasan teknis di bagian ini.',
  ],
}
```

---

## 3. Lokasi File Data Berdasarkan Bagian Website

| Bagian yang Ingin Diubah | File yang Diedit |
|---|---|
| Nama perusahaan, logo, nomor WhatsApp, email, alamat, menu navbar, varian Hero (`'split'` / `'stacked'`), blok tambahan di Home/Explore | `src/data/site.ts` |
| Daftar proyek desain, foto proyek, 5 tahap Design Journey, foto di dalam tiap tahap, atau blok tambahan per proyek | `src/data/projects.ts` |
| Layanan PBG & SLF, urutan tahapan pengurusan tiap izin, dokumen deliverable/kebutuhan klien, contoh kasus PBG/SLF | `src/data/permits.ts` |
| Daftar anggota tim (nama, jabatan, foto, Education, Career, Jobdesk) | `src/data/team.ts` |
