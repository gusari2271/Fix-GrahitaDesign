import { Permit } from '../types/content';

/**
 * DATA LAYANAN & PORTOFOLIO PENGURUSAN IZIN (src/data/permits.ts)
 * ---------------------------------------------------------------
 * Catatan penting sesuai PRD:
 * - Daftar tahapan `steps` antara PBG dan SLF berdiri sendiri (data-driven),
 *   sehingga urutan, nama tahap, durasi, maupun dokumen tiap izin dapat diubah
 *   secara terpisah kapan saja setelah konfirmasi final klien.
 * - Anda juga dapat menambah studi kasus baru di array `cases` atau menambah
 *   blok teks/gambar bebas di `extraBlocks`.
 */
export const permits: Permit[] = [
  {
    slug: 'pbg',
    name: 'PBG',
    fullName: 'Persetujuan Bangunan Gedung',
    heroActionLabel: 'SEE MORE',
    cover: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Pendampingan menyeluruh pengurusan Persetujuan Bangunan Gedung (pengganti IMB) melalui sistem SIMBG—mulai dari pemeriksaan kesesuaian tata ruang, penyusunan dokumen gambar teknis standar, pendampingan sidang TPA/TPT, hingga dokumen PBG resmi diterbitkan.',
    steps: [
      {
        step: 'Pengumpulan Data',
        subtitle: 'Verifikasi Dokumen Legalitas Pemilik, Tanah & Riwayat Bangunan',
        duration: '3 – 5 Hari Kerja',
        description:
          'Pemeriksaan kelengkapan administrasi kepemilikan lahan, identitas pemohon, serta pengumpulan data awal rencana atau kondisi bangunan.',
        detailDescription:
          'Tim perizinan Grahita Design memverifikasi kesesuaian nama pemohon, bukti penguasaan tanah, dan fungsi bangunan yang diajukan agar tidak terjadi kendala administratif saat pendaftaran di portal SIMBG.',
        deliverables: [
          'Checklist Kelengkapan Administrasi & Legalitas Lahan Terverifikasi',
          'Pemetaan Kategori Fungsi & Klasifikasi Kompleksitas Bangunan Gedung',
        ],
        clientNeeds: [
          'KTP/NPWP Pemohon (atau Akta Pendirian & NIB untuk Badan Usaha)',
          'Sertifikat Tanah (SHM/SHGB) atau bukti perjanjian pemanfaatan tanah',
          'SPPT & Bukti Lunas PBB tahun berjalan serta dokumen gambar awal (bila ada)',
        ],
      },
      {
        step: 'KKPR',
        subtitle: 'Kesesuaian Kegiatan Pemanfaatan Ruang & Ketentuan Tata Kota',
        duration: '1 – 2 Minggu',
        description:
          'Pengurusan dan verifikasi Kesesuaian Kegiatan Pemanfaatan Ruang (KKPR / Informasi Tata Ruang) terhadap rencana fungsi dan intensitas bangunan.',
        detailDescription:
          'Tahap ini memastikan lokasi tapak diizinkan untuk fungsi hunian atau usaha yang direncanakan, sekaligus mengunci batasan KDB, KLB, KDH, GSB, dan ketinggian maksimum bangunan.',
        deliverables: [
          'Dokumen KKPR / Konfirmasi Kesesuaian Tata Ruang & Peta Poligon Lahan',
          'Ringkasan Parameter Teknis Tapak (GSB, KDB, KLB, KDH) sebagai Acuan Gambar',
        ],
        clientNeeds: [
          'Titik koordinat batas lahan dan surat kuasa pengurusan (bila diwakilkan)',
          'Data rencana luas lantai dan jenis kegiatan usaha (khusus non-hunian)',
        ],
      },
      {
        step: 'Survey',
        subtitle: 'Tinjauan Lapangan, Pengukuran Eksisting & Dokumentasi Tapak',
        duration: '2 – 4 Hari Kerja',
        description:
          'Kunjungan teknis ke lokasi untuk mengukur batas fisik lahan, lebar jalan depan, jarak sempadan riil, serta dokumentasi kondisi lapangan.',
        detailDescription:
          'Tim melakukan pengecekan langsung di lapangan guna menyelaraskan ukuran sertifikat dengan kondisi aktual tapak, jaringan drainase lingkungan, serta aksesibilitas sekitar.',
        deliverables: [
          'Berita Acara & Laporan Dokumentasi Survei Teknis Lapangan',
          'Data Ukur Situasi Tapak Aktual, Lebar Jalan & Sempadan Eksisting',
        ],
        clientNeeds: [
          'Izin akses lokasi bagi tim survei teknis Grahita Design',
          'Penunjukan batas patok tanah di lapangan oleh pemilik/perwakilan',
        ],
      },
      {
        step: 'Gambar',
        subtitle: 'Penyusunan Gambar Teknis Arsitektur, Struktur & MEP Standar SIMBG',
        duration: '2 – 4 Minggu',
        description:
          'Pembuatan dan penyesuaian paket gambar rencana teknis beserta perhitungan struktur dan utilitas sesuai format standar pemeriksaan PBG.',
        detailDescription:
          'Seluruh dokumen teknis disusun oleh tenaga ahli bersertifikasi sesuai standar pedoman teknis bangunan gedung—meliputi gambar situasi, denah, tampak, potongan, detail struktur, sanitasi, air hujan, dan kelistrikan.',
        deliverables: [
          'Paket Gambar Rencana Teknis Arsitektur, Struktur & MEP Standar PBG',
          'Laporan Perhitungan Struktur & Spesifikasi Teknis Bangunan Gedung',
          'Pengunggahan Berkas Lengkap ke Sistem Informasi Manajemen Bangunan Gedung (SIMBG)',
        ],
        clientNeeds: [
          'Konfirmasi final fungsi tiap ruang dan persetujuan draf gambar teknis',
          'Laporan penyelidikan tanah / Sondir (khusus bangunan bertingkat tertentu)',
        ],
      },
      {
        step: 'Sidang',
        subtitle: 'Konsultasi Teknis & Pemaparan Bersama TPA / TPT Dinas Terkait',
        duration: '1 – 3 Minggu (Sesuai Jadwal Dinas)',
        description:
          'Pendampingan dan pemaparan aspek keandalan bangunan di hadapan Tim Profesi Ahli (TPA) atau Tim Penilai Teknis (TPT).',
        detailDescription:
          'Tim arsitek dan perizinan kami hadir mempresentasikan pemenuhan standar keselamatan, kesehatan, kenyamanan, dan kemudahan bangunan serta mencatat seluruh masukan berita acara konsultasi.',
        deliverables: [
          'Materi Presentasi Teknis Sidang Konsultasi TPA / TPT',
          'Risalah & Catatan Resmi Hasil Pemeriksaan Teknis SIMBG',
        ],
        clientNeeds: [
          'Kehadiran pemilik atau surat kuasa perwakilan resmi saat jadwal konsultasi',
        ],
      },
      {
        step: 'Revisi',
        subtitle: 'Penyempurnaan Dokumen Teknis & Perhitungan Retribusi Daerah',
        duration: '1 – 2 Minggu',
        description:
          'Tindak lanjut perbaikan gambar maupun dokumen perhitungan sesuai berita acara sidang hingga memperoleh rekomendasi pemenuhan standar teknis.',
        detailDescription:
          'Setelah seluruh catatan teknis disempurnakan dan disetujui penilai, proses berlanjut ke penerbitan Surat Pernyataan Pemenuhan Standar Teknis dan perhitungan nilai retribusi daerah resmi.',
        deliverables: [
          'Dokumen Gambar & Perhitungan Teknis Hasil Penyempurnaan Final',
          'Penerbitan Surat Pemenuhan Standar Teknis & SKRD (Surat Ketetapan Retribusi Daerah)',
        ],
        clientNeeds: [
          'Pembayaran retribusi PBG resmi langsung ke kas daerah sesuai tagihan SKRD',
        ],
      },
      {
        step: 'Terbit',
        subtitle: 'Penerbitan Dokumen Resmi Persetujuan Bangunan Gedung (PBG)',
        duration: '3 – 7 Hari Kerja Setelah Retribusi',
        description:
          'Verifikasi bukti bayar retribusi di sistem dan penerbitan SK PBG resmi beserta lampiran gambar teknis yang telah disahkan.',
        detailDescription:
          'Dokumen PBG resmi diserahkan dalam bentuk berkas digital tervalidasi kode QR dan cetak arsip, sehingga pembangunan atau legalitas gedung Anda sah secara hukum.',
        deliverables: [
          'Dokumen Resmi Persetujuan Bangunan Gedung (PBG) Tervalidasi SIMBG',
          'Bundel Lampiran Gambar Teknis Pengesahan (Cetak & Arsip Digital)',
        ],
        clientNeeds: [
          'Bukti setor pembayaran retribusi daerah (SSRD) untuk pengunggahan tahap akhir',
        ],
      },
    ],
    cases: [
      {
        id: 'pbg-01',
        title: 'PBG 01 — Residensial Tropis Dua Lantai',
        buildingType: 'Fungsi Hunian',
        location: 'Denpasar Selatan, Bali',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
        summary:
          'Pengurusan PBG bangunan rumah tinggal baru seluas 380 m² mencakup penyelarasan GSB, penyusunan paket gambar teknis arsitektur-struktur-MEP, hingga SK PBG terbit.',
      },
      {
        id: 'pbg-02',
        title: 'PBG 02 — Gedung Kantor & Ruang Usaha Tiga Lantai',
        buildingType: 'Fungsi Usaha',
        location: 'Badung, Bali',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        summary:
          'Pendampingan KKPR, perhitungan struktur bertingkat, skema keselamatan kebakaran, dan sidang TPA untuk bangunan komersial seluas 860 m².',
      },
      {
        id: 'pbg-03',
        title: 'PBG 03 — Vila Akomodasi & Fasilitas Penunjang',
        buildingType: 'Fungsi Usaha / Akomodasi',
        location: 'Gianyar, Bali',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
        summary:
          'Penyusunan dokumen rencana teknis lengkap dan pengurusan PBG kompleks vila tropis dengan perhatian khusus pada koefisien dasar hijau dan resapan air.',
      },
    ],
    extraBlocks: [],
  },
  {
    slug: 'slf',
    name: 'SLF',
    fullName: 'Sertifikat Laik Fungsi',
    heroActionLabel: 'SEE MORE',
    cover: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Jasa pemeriksaan kelaikan fungsi dan pengurusan Sertifikat Laik Fungsi (SLF) bagi bangunan gedung yang telah terbangun—memastikan kesesuaian terbangun (as-built), keandalan struktur, keselamatan kebakaran, sanitasi, serta kelancaran operasional usaha.',
    steps: [
      {
        step: 'Pengumpulan Data',
        subtitle: 'Audit Dokumen Eksisting Bangunan, Riwayat IMB/PBG & Legalitas',
        duration: '3 – 5 Hari Kerja',
        description:
          'Inventarisasi dokumen legalitas pemilik, sertifikat tanah, dokumen IMB/PBG terdahulu (bila ada), serta gambar bangunan eksisting.',
        detailDescription:
          'Tim memeriksa kesesuaian antara izin terdahulu dengan kondisi pemanfaatan gedung saat ini serta memetakan kelengkapan dokumen lingkungan dan operasional usaha.',
        deliverables: [
          'Matriks Audit Kelengkapan Dokumen Administrasi & Teknis Eksisting',
          'Rencana Kerja Pemeriksaan Kelaikan Fungsi Bangunan Gedung',
        ],
        clientNeeds: [
          'Dokumen identitas pemilik / Badan Usaha (Akta, NIB, NPWP)',
          'Sertifikat Tanah, IMB/PBG lama (apabila sudah memiliki), dan gambar bangunan yang ada',
        ],
      },
      {
        step: 'KKPR',
        subtitle: 'Verifikasi Kesesuaian Tata Ruang & Perizinan Lingkungan',
        duration: '1 – 2 Minggu',
        description:
          'Pengecekan dan pengurusan Kesesuaian Kegiatan Pemanfaatan Ruang (KKPR) serta kelengkapan dokumen lingkungan sesuai skala kegiatan bangunan.',
        detailDescription:
          'Memastikan fungsi operasional gedung terbangun selaras dengan peruntukan zonasi tata ruang daerah dan ketentuan lingkungan hidup yang berlaku.',
        deliverables: [
          'Dokumen Verifikasi KKPR & Kesesuaian Fungsi Pemanfaatan Gedung',
          'Rekapitulasi Kepatuhan Parameter Intensitas Bangunan Eksisting',
        ],
        clientNeeds: [
          'Data kapasitas operasional gedung, NIB, dan dokumen SPPL / UKL-UPL eksisting',
        ],
      },
      {
        step: 'Survey',
        subtitle: 'Inspeksi Kelaikan Lapangan: Struktur, Arsitektur, MEP & Damkar',
        duration: '3 – 7 Hari Kerja',
        description:
          'Pemeriksaan fisik menyeluruh terhadap kondisi bangunan terbangun oleh pengkaji teknis—mencakup keselamatan struktur, jalur evakuasi, kelistrikan, dan sanitasi.',
        detailDescription:
          'Pengujian visual dan pengukuran dimensi aktual di lapangan dilakukan untuk menilai empat aspek keandalan bangunan: keselamatan, kesehatan, kenyamanan, dan kemudahan.',
        deliverables: [
          'Laporan Pemeriksaan Lapangan & Dokumentasi Bukti Uji Kelaikan Fisik',
          'Daftar Rekomendasi Penyesuaian Lapangan (Apabila Ditemukan Temuan Teknis)',
        ],
        clientNeeds: [
          'Pendampingan teknisi gedung saat pemeriksaan ruang panel, pompa, atap & jalur evakuasi',
        ],
      },
      {
        step: 'Gambar',
        subtitle: 'Penyusunan As-Built Drawing & Laporan Kajian Pengkaji Teknis',
        duration: '2 – 4 Minggu',
        description:
          'Penggambaran ulang atau pemutakhiran As-Built Drawing sesuai kondisi riil terbangun disertai penyusunan Laporan Pemeriksaan Kelaikan Fungsi.',
        detailDescription:
          'Apabila bangunan belum memiliki gambar terbangun yang akurat, tim kami menyusun As-Built Drawing lengkap (Arsitektur, Struktur, MEP) dan Surat Pernyataan Kelaikan Fungsi dari Pengkaji Teknis bersertifikat.',
        deliverables: [
          'Bundel Lengkap As-Built Drawing (Arsitektur, Struktur, MEP & Proteksi Kebakaran)',
          'Laporan Kajian Teknis Kelaikan Fungsi & Pengunggahan ke Portal SIMBG',
        ],
        clientNeeds: [
          'Data riwayat perawatan utilitas gedung (SLO listrik, uji petir, APAR/hidran bila ada)',
        ],
      },
      {
        step: 'Sidang',
        subtitle: 'Pemaparan Kajian Kelaikan & Verifikasi Lapangan Dinas Terkait',
        duration: '1 – 3 Minggu (Sesuai Jadwal Dinas)',
        description:
          'Pendampingan sidang evaluasi dokumen kajian teknis serta peninjauan verifikasi bersama tim dinas teknis daerah.',
        detailDescription:
          'Pengkaji teknis bersama tim Grahita Design mempresentasikan hasil pemeriksaan gedung dan mendampingi kunjungan verifikasi instansi terkait di lokasi bangunan.',
        deliverables: [
          'Paparan Kajian Kelaikan Fungsi Gedung pada Sidang Verifikasi',
          'Berita Acara Hasil Pemeriksaan & Verifikasi Lapangan Instansi Teknis',
        ],
        clientNeeds: [
          'Kesiapan area gedung dan fasilitas keselamatan saat jadwal peninjauan verifikasi',
        ],
      },
      {
        step: 'Revisi',
        subtitle: 'Pemenuhan Tindak Lanjut Teknis & Kelengkapan Berita Acara',
        duration: '1 – 2 Minggu',
        description:
          'Penyempurnaan catatan administratif/teknis maupun penyesuaian minor rambu keselamatan sesuai berita acara verifikasi.',
        detailDescription:
          'Seluruh bukti tindak lanjut perbaikan—seperti kelengkapan rambu jalur evakuasi, titik kumpul, atau pemutakhiran gambar—diunggah kembali hingga dinyatakan lengkap.',
        deliverables: [
          'Laporan Bukti Tindak Lanjut Pemenuhan Catatan Teknis & Visual Lapangan',
          'Persetujuan Akhir Verifikasi Teknis pada Sistem SIMBG',
        ],
        clientNeeds: [
          'Pelaksanaan penyesuaian minor fasilitas keselamatan di gedung (apabila disyaratkan)',
        ],
      },
      {
        step: 'Terbit',
        subtitle: 'Penerbitan Sertifikat Laik Fungsi (SLF) Resmi Bangunan Gedung',
        duration: '3 – 7 Hari Kerja',
        description:
          'Penerbitan Sertifikat Laik Fungsi (SLF) resmi yang menyatakan bangunan gedung andal dan sah dioperasikan sesuai fungsinya.',
        detailDescription:
          'Dokumen SLF berlaku selama jangka waktu sesuai ketentuan peraturan (5 tahun untuk bangunan umum/usaha dan 20 tahun untuk hunian) dan diserahkan lengkap beserta arsip teknisnya.',
        deliverables: [
          'Dokumen Resmi Sertifikat Laik Fungsi (SLF) Tervalidasi SIMBG',
          'Arsip Lengkap As-Built Drawing & Laporan Kajian Kelaikan Fungsi',
        ],
        clientNeeds: [
          'Tanda terima penyerahan dokumen SLF resmi untuk operasional gedung',
        ],
      },
    ],
    cases: [
      {
        id: 'slf-01',
        title: 'SLF 01 — Gedung Perkantoran & Co-Working Space',
        buildingType: 'Fungsi Usaha',
        location: 'Denpasar, Bali',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
        summary:
          'Pemeriksaan kelaikan fungsi, penyusunan As-Built Drawing 3 lantai, audit jalur evakuasi serta proteksi kebakaran hingga SLF gedung kantor terbit.',
      },
      {
        id: 'slf-02',
        title: 'SLF 02 — Bangunan Ritel & Restoran Komersial',
        buildingType: 'Fungsi Usaha / Kuliner',
        location: 'Badung, Bali',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
        summary:
          'Pendampingan inspeksi teknis struktur, instalasi pengolahan air limbah dapur, kelistrikan, dan kelengkapan keselamatan untuk syarat operasional usaha.',
      },
      {
        id: 'slf-03',
        title: 'SLF 03 — Kompleks Hunian Sewa & Boutique Stay',
        buildingType: 'Fungsi Akomodasi',
        location: 'Gianyar, Bali',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        summary:
          'Penyusunan dokumen kajian pengkaji teknis dan pemutakhiran gambar terbangun untuk penerbitan SLF fasilitas akomodasi wisata.',
      },
    ],
    extraBlocks: [],
  },
];
