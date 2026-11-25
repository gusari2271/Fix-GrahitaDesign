import { Project } from '../types/content';

/**
 * DATA PORTOFOLIO PROYEK DESAIN (src/data/projects.ts)
 * ----------------------------------------------------
 * Cara menambah proyek baru:
 * 1. Duplikat salah satu objek di dalam array `projects` di bawah.
 * 2. Ganti `slug` (huruf kecil tanpa spasi, pisahkan dengan strip), `name`, `cover`, `summary`, dll.
 * 3. Untuk menggunakan foto lokal sendiri: simpan foto di folder `public/images/`
 *    lalu isi path seperti `cover: '/images/nama-foto.jpg'`.
 * 4. Untuk menambah paragraf atau gambar tambahan di luar timeline Design Journey,
 *    tambahkan objek ke dalam array `extraBlocks` pada proyek tersebut.
 */
export const projects: Project[] = [
  {
    slug: 'mw-house',
    name: 'MW House',
    category: 'Single Residential',
    location: 'Denpasar, Bali',
    year: '2025',
    area: '360 m²',
    cover: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Hunian keluarga kontemporer tropis dengan bukaan silang lebar, permainan keteduhan tritisan horizontal, dan integrasi ruang dalam-luar yang hening.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
        alt: 'Fasad utama MW House dengan garis horizontal tegas',
        caption: 'Komposisi massa utama dan halaman tengah MW House',
      },
      {
        src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80',
        alt: 'Ruang keluarga terbuka MW House',
        caption: 'Transisi ruang keluarga menuju teras teduh dan taman dalam',
      },
    ],
    journey: [
      {
        step: 'Data Collection',
        subtitle: 'Penggalian Kebutuhan Ruang, Gaya Hidup & Anggaran',
        duration: '1 – 2 Minggu',
        description:
          'Diskusi terstruktur bersama pemilik untuk memetakan program ruang keluarga, karakter privasi, dokumen lahan, serta target anggaran pembangunan.',
        detailDescription:
          'Tahap awal dimulai dengan mendengarkan kebiasaan harian penghuni MW House. Tim merangkum kebutuhan kamar tidur lintas generasi, area komunal terbuka, kapasitas servis, serta mengumpulkan data ukuran sertifikat tanah dan batas regulasi setempat.',
        deliverables: [
          'Dokumen Design Brief & Tabel Program Kebutuhan Ruang (Room Programming)',
          'Kompilasi Data Awal Sertifikat, Ukuran Batas Lahan & Ketentuan Tata Ruang',
          'Kerangka Acuan Target Anggaran & Jadwal Tahapan Perancangan',
        ],
        clientNeeds: [
          'Fotokopi / pindaian gambar situasi lahan (Sertifikat Tanah / PBB)',
          'Daftar kebutuhan ruang utama beserta preferensi aktivitas keluarga',
          'Kisaran pagu anggaran konstruksi dan referensi suasana ruang yang disukai',
        ],
        images: [
          {
            src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
            alt: 'Diskusi program ruang dan sketsa awal MW House',
            caption: 'Pemetaan kebutuhan ruang dan skema hubungan antar-zona hunian',
          },
        ],
      },
      {
        step: 'Site Analyze',
        subtitle: 'Observasi Orientasi Matahari, Angin & Konteks Tapak',
        duration: '1 – 2 Minggu',
        description:
          'Pengukuran langsung kondisi fisik lahan, arah lintasan matahari, sirkulasi angin, potensi kebisingan jalan, serta ketentuan KDB, KLB, dan GSB.',
        detailDescription:
          'Lahan MW House dianalisis terhadap paparan panas matahari barat dan arah hembusan angin tenggara. Hasil analisis menentukan penempatan massa servis sebagai penahan panas dan bukaan taman dalam sebagai jalur pendinginan pasif.',
        deliverables: [
          'Diagram Analisis Tapak (Lintasan Matahari, Arah Angin, Kebisingan & View)',
          'Kajian Regulasi Teknis Tapak (GSB, KDB, KLB & Ketinggian Maksimum)',
          'Dokumentasi Foto Eksisting & Pengukuran Elevasi Dasar Lahan',
        ],
        clientNeeds: [
          'Akses kunjungan tim survei ke lokasi lahan',
          'Data titik saluran drainase lingkungan dan jaringan listrik/air eksisting',
        ],
      },
      {
        step: 'Schematic Design',
        subtitle: 'Zonasi Denah, Gubahan Massa 3D & Konsep Sirkulasi',
        duration: '2 – 3 Minggu',
        description:
          'Penerjemahan analisis tapak dan program ruang menjadi tata letak denah skematik, proporsi gubahan massa 3D awal, dan skema pencahayaan alami.',
        detailDescription:
          'Pada fase ini, konsep gubahan massa berbentuk huruf L dikunci agar seluruh ruang utama memperoleh pencahayaan alami dua sisi tanpa silau berlebih, sekaligus menjaga privasi penuh dari jalan depan.',
        deliverables: [
          'Denah Zonasi & Tata Ruang Skematik Lantai 1 dan Lantai 2',
          'Studi Gubahan Massa 3D Eksterior & Potongan Konseptual',
          'Moodboard Karakter Material Arsitektur & Lanskap Dasar',
        ],
        clientNeeds: [
          'Persetujuan (sign-off) tata letak denah ruang sebelum masuk pengembangan detail',
          'Masukan terhadap proporsi fasad awal dan alur sirkulasi penghuni',
        ],
        images: [
          {
            src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
            alt: 'Studi massa 3D MW House',
            caption: 'Studi proporsi atap datar bertingkat dan tritisan peneduh tropis',
          },
        ],
      },
      {
        step: 'Design Development',
        subtitle: 'Visualisasi 3D Final, Koordinasi Struktur/MEP & Material',
        duration: '3 – 4 Minggu',
        description:
          'Pematangan tampak, potongan arsitektural, pemilihan spesifikasi material riil, koordinasi sistem struktur serta mekanikal, elektrikal, dan plambing.',
        detailDescription:
          'Seluruh dimensi ruang, ketebalan pelat tritisan, detail kusen aluminium bentang lebar, dan titik pencahayaan arsitektural disinkronkan bersama sistem struktur beton bertulang sehingga tampilan 3D akurat untuk dibangun.',
        deliverables: [
          'Render Visualisasi 3D Eksterior & Ruang Utama Beresolusi Tinggi',
          'Gambar Pengembangan Arsitektur, Rencana Struktur & Skema MEP',
          'Daftar Spesifikasi Material Finishing (Lantai, Dinding, Plafon, Sanitair)',
        ],
        clientNeeds: [
          'Konfirmasi pilihan material finishing dan perlengkapan sanitair utama',
          'Persetujuan visualisasi 3D akhir sebelum produksi gambar kerja',
        ],
      },
      {
        step: 'Construction Drawing',
        subtitle: 'Gambar Kerja DED Lengkap & Dokumen Siap Bangun',
        duration: '3 – 5 Minggu',
        description:
          'Penyusunan paket gambar kerja teknis Detail Engineering Design (DED) secara presisi sebagai acuan pelaksanaan kontraktor dan lampiran teknis PBG.',
        detailDescription:
          'Tahap akhir menghasilkan bundel gambar kerja lengkap berskala terukur—mencakup detail sambungan arsitektur, pembesian struktur, jalur instalasi air bersih/kotor, elektrikal, hingga jadwal pintu dan jendela.',
        deliverables: [
          'Bundel Gambar Kerja DED Lengkap (Arsitektur, Struktur & MEP)',
          'Jadwal Kusen Pintu-Jendela, Detail Tangga, Kanopi & Kamar Mandi',
          'Rencana Anggaran Biaya (RAB) & Spesifikasi Teknis Pelaksanaan (RKS)',
        ],
        clientNeeds: [
          'Persetujuan dokumen akhir serah terima gambar kerja cetak dan digital (PDF)',
        ],
      },
    ],
    extraBlocks: [],
  },
  {
    slug: 'y-house',
    name: 'Y House',
    category: 'Tropical Contemporary Residence',
    location: 'Badung, Bali',
    year: '2024',
    area: '420 m²',
    cover: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Residensial dua lantai dengan komposisi bidang masif-transparan yang menyeimbangkan privasi fasad depan dan keterbukaan penuh ke arah halaman kolam belakang.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80',
        alt: 'Tampak halaman belakang Y House dengan kolam renang',
        caption: 'Bukaan penuh lantai dasar Y House menyatu dengan dek kolam',
      },
      {
        src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
        alt: 'Interior ruang makan dan dapur bersih Y House',
        caption: 'Kejujuran tekstur beton ekspos, kayu hangat, dan batu alam',
      },
    ],
    journey: [
      {
        step: 'Data Collection',
        subtitle: 'Pemetaan Program Hunian & Ruang Berkumpul',
        duration: '1 – 2 Minggu',
        description:
          'Perumusan kebutuhan ruang untuk keluarga muda yang sering menerima kerabat, memisahkan jalur servis harian dari area tamu dan kolam.',
        detailDescription:
          'Tim menggali prioritas penghuni Y House yang menginginkan ruang komunal tanpa sekat di lantai dasar serta empat kamar tidur berprivasi tinggi di lantai atas.',
        deliverables: [
          'Matriks Program Ruang & Diagram Kedekatan Antar-Ruang',
          'Verifikasi Ukuran Lahan & Dokumen Administrasi Tapak',
        ],
        clientNeeds: [
          'Data sertifikat lahan dan daftar kapasitas ruang yang diharapkan',
          'Target waktu dimulainya pembangunan fisik',
        ],
      },
      {
        step: 'Site Analyze',
        subtitle: 'Kajian Kontur Lahan, Drainase & Arah Pandang',
        duration: '1 – 2 Minggu',
        description:
          'Evaluasi kemiringan mikro lahan, arah datangnya hujan tropis, dan penentuan garis sempadan bangunan sesuai ketentuan kawasan.',
        detailDescription:
          'Elevasi lantai dasar dinaikkan secara proporsional dari level jalan guna menjamin kelancaran drainase gravitasi sekaligus menghadirkan kesan jenjang masuk yang tenang.',
        deliverables: [
          'Peta Analisis Iklim Mikro, Elevasi & Sempadan Lahan',
          'Rekomendasi Orientasi Bukaan Utama & Area Resapan Air',
        ],
        clientNeeds: [
          'Izin survei pengukuran lapangan dan foto batas patok lahan',
        ],
      },
      {
        step: 'Schematic Design',
        subtitle: 'Eksplorasi Denah Terbuka & Fasad Sekunder',
        duration: '2 – 3 Minggu',
        description:
          'Penyusunan denah terbuka yang menghubungkan foyer, ruang duduk, ruang makan, dan teras kolam dalam satu sumbu pandang menerus.',
        detailDescription:
          'Kisi-kisi vertikal dirancang pada fasad lantai dua untuk menyaring sinar matahari sore sekaligus menjaga sirkulasi udara alami tetap mengalir sepanjang hari.',
        deliverables: [
          'Gambar Denah Skematik & Potongan Sirkulasi Udara Silang',
          'Model 3D Gubahan Massa Awal & Alternatif Fasad',
        ],
        clientNeeds: [
          'Diskusi dan pemilihan alternatif fasad serta tata ruang skematik',
        ],
      },
      {
        step: 'Design Development',
        subtitle: 'Detail Kantilever, Pencahayaan & Material Tahan Cuaca',
        duration: '3 – 4 Minggu',
        description:
          'Pengembangan dimensi struktur kantilever teras, spesifikasi kaca berinsulasi termal, serta detail tata cahaya malam hari.',
        detailDescription:
          'Material batu alam potong presisi dan pelapis dinding tahan lembap dipilih agar perawatan fasad tetap minimal dalam iklim pesisir yang lembap.',
        deliverables: [
          'Visualisasi 3D Final Siang & Malam Hari',
          'Gambar Koordinasi Struktur Bentang Lebar & Jalur MEP Kolam',
        ],
        clientNeeds: [
          'Persetujuan sampel material utama dan titik lampu/saklar ruang',
        ],
      },
      {
        step: 'Construction Drawing',
        subtitle: 'Paket Gambar Kerja Konstruksi & Perhitungan Biaya',
        duration: '3 – 4 Minggu',
        description:
          'Penyelesaian dokumen gambar kerja teknis terperinci dari fondasi hingga detail waterproofing atap dan kolam renang.',
        detailDescription:
          'Setiap pertemuan material dilengkapi gambar detail skala besar untuk mencegah kebocoran air hujan dan memastikan garis arsitektur terbangun rapi di lapangan.',
        deliverables: [
          'Dokumen DED Arsitektur, Struktur, Plambing & Elektrikal',
          'Rincian Volume Pekerjaan (BoQ) & Estimasi RAB Konstruksi',
        ],
        clientNeeds: [
          'Serah terima dan persetujuan dokumen final siap tender kontraktor',
        ],
      },
    ],
    extraBlocks: [],
  },
  {
    slug: 'graha-gungwah',
    name: 'Graha Gungwah',
    category: 'Commercial & Office Building',
    location: 'Denpasar, Bali',
    year: '2024',
    area: '980 m²',
    cover: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Bangunan komersial multi-lantai dengan ritme fasad geometris modern, efisiensi tata ruang sewa tinggi, serta kesiapan penuh terhadap standar keselamatan PBG & SLF.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
        alt: 'Eksterior bangunan komersial Graha Gungwah',
        caption: 'Geometri fasad vertikal yang mereduksi beban panas radiasi matahari',
      },
      {
        src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
        alt: 'Ruang kerja atrium dalam Graha Gungwah',
        caption: 'Tata ruang kerja modular dengan pencahayaan alami merata',
      },
    ],
    journey: [
      {
        step: 'Data Collection',
        subtitle: 'Kajian Kapasitas Ruang Komersial & Regulasi Zonasi',
        duration: '2 Minggu',
        description:
          'Identifikasi target fungsi ruang kantor/komersial, kebutuhan rasio parkir, efisiensi luas bersih terpakai (net lettable area), dan kelayakan regulasi.',
        detailDescription:
          'Pada proyek bangunan komersial, pengumpulan data langsung diselaraskan dengan persyaratan teknis PBG dan SLF sejak hari pertama agar jalur evakuasi dan parkir memenuhi regulasi.',
        deliverables: [
          'Studi Kelayakan Kapasitas Ruang & Rasio Parkir Kendaraan',
          'Dokumen Program Ruang Komersial, Utilitas & Servis Gedung',
        ],
        clientNeeds: [
          'Dokumen legalitas lahan, profil bisnis pengguna gedung, dan target luas sewa',
        ],
      },
      {
        step: 'Site Analyze',
        subtitle: 'Analisis Akses Kendaraan, Sirkulasi Tapak & KDB/KLB',
        duration: '2 Minggu',
        description:
          'Pemetaan keluar-masuk kendaraan dari jalan utama, manuver parkir, titik kumpul darurat, serta batas amplop bangunan.',
        detailDescription:
          'Sirkulasi pejalan kaki dipisahkan dengan tegas dari jalur kendaraan demi kenyamanan pengunjung dan kemudahan aksesibilitas disabilitas.',
        deliverables: [
          'Skema Sirkulasi Kendaraan, Drop-off & Titik Kumpul Keselamatan',
          'Kajian Amplop Bangunan Sesuai Ketentuan Tata Ruang Kota',
        ],
        clientNeeds: [
          'Data ukur topografi lahan dan informasi lebar jalan eksisting',
        ],
      },
      {
        step: 'Schematic Design',
        subtitle: 'Grid Struktur Modular, Core Utilitas & Identitas Fasad',
        duration: '3 Minggu',
        description:
          'Perancangan grid kolom yang efisien sehingga lantai kerja bebas sekat dan fleksibel dibagi sesuai kebutuhan penyewa.',
        detailDescription:
          'Inti bangunan (tangga darurat, toilet, shaft utilitas) ditempatkan di sisi barat untuk menahan panas sekaligus memaksimalkan bukaan kaca di sisi utara-selatan.',
        deliverables: [
          'Denah Tipikal Lantai, Core Tangga Keselamatan & Layout Parkir',
          'Konsep 3D Fasad Komersial & Identitas Visual Bangunan',
        ],
        clientNeeds: [
          'Persetujuan skema pembagian ruang lantai dan kapasitas parkir',
        ],
      },
      {
        step: 'Design Development',
        subtitle: 'Integrasi Sistem Proteksi Kebakaran, MEP & Fasad',
        duration: '4 Minggu',
        description:
          'Koordinasi menyeluruh antara struktur bentang lebar, tata udara (HVAC), proteksi kebakaran aktif-pasif, serta detail selubung fasad.',
        detailDescription:
          'Seluruh lebar koridor, kemiringan ramp, penempatan APAR/hidran, dan pencahayaan darurat dirancang memenuhi standar uji kelaikan fungsi.',
        deliverables: [
          'Gambar Pengembangan Terpadu Arsitektur, Struktur & Proteksi Kebakaran',
          'Render 3D Eksterior & Lobby Utama Graha Gungwah',
        ],
        clientNeeds: [
          'Konfirmasi sistem tata udara, kapasitas daya listrik, dan spesifikasi fasad',
        ],
      },
      {
        step: 'Construction Drawing',
        subtitle: 'Dokumen DED Konstruksi & Berkas Teknis Perizinan',
        duration: '4 – 5 Minggu',
        description:
          'Produksi gambar kerja detail siap tender kontraktor sekaligus siap diunggah untuk proses penilaian teknis PBG.',
        detailDescription:
          'Kelengkapan gambar kerja memastikan proses konstruksi berjalan tepat mutu serta mempermudah penerbitan SLF saat gedung selesai dibangun.',
        deliverables: [
          'Paket Lengkap Gambar Kerja DED & Perhitungan Teknis Struktur/MEP',
          'Dokumen RKS, RAB & Lampiran Gambar Teknis Standar SIMBG',
        ],
        clientNeeds: [
          'Persetujuan akhir paket dokumen konstruksi dan perizinan',
        ],
      },
    ],
    extraBlocks: [],
  },
  {
    slug: 'kanaya-florist',
    name: 'Kanaya Florist',
    category: 'Boutique Retail & Workshop',
    location: 'Gianyar, Bali',
    year: '2025',
    area: '210 m²',
    cover: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Ruang ritel galeri bunga dan studio perangkai yang dirancang sebagai latar monokrom bersih agar warna alami rangkaian flora tampil menonjol.',
    journey: [
      {
        step: 'Data Collection',
        subtitle: 'Alur Kerja Perangkai, Penyimpanan Dingin & Pengalaman Pengunjung',
        duration: '1 Minggu',
        description:
          'Mempelajari alur operasional harian mulai dari kedatangan bunga segar, ruang pendingin (chiller), meja rangkai, hingga area pamer pelanggan.',
        detailDescription:
          'Kebutuhan suhu ruang, kelembapan terkontrol, dan pemisahan area basah potong tangkai dari galeri depan menjadi kunci utama program ruang Kanaya Florist.',
        deliverables: [
          'Diagram Alur Operasional Ritel, Workshop & Penyimpanan Flora',
          'Daftar Kebutuhan Ruang & Spesifikasi Utilitas Ruang Pendingin',
        ],
        clientNeeds: [
          'Dimensi peralatan chiller/display dan alur layanan pelanggan harian',
        ],
      },
      {
        step: 'Site Analyze',
        subtitle: 'Visibilitas Etalase Jalan & Kontrol Radiasi Cahaya Alami',
        duration: '1 Minggu',
        description:
          'Analisis sudut pandang pengendara dari jalan raya serta pengendalian cahaya matahari langsung agar kesegaran bunga tetap terjaga.',
        detailDescription:
          'Bukaan kaca besar diarahkan untuk menangkap cahaya baur alami (diffused daylight) tanpa paparan panas langsung ke area display bunga segar.',
        deliverables: [
          'Analisis Sudut Pandang Fasad Ritel & Intensitas Cahaya Alami',
          'Skema Parkir Singgah Pengunjung & Jalur Loading Barang',
        ],
        clientNeeds: [
          'Data batas tapak dan aturan garis sempadan koridor komersial',
        ],
      },
      {
        step: 'Schematic Design',
        subtitle: 'Tata Ruang Galeri Monokrom & Meja Studio Terbuka',
        duration: '2 Minggu',
        description:
          'Perancangan ruang pamer berpalet netral tenang sehingga pengunjung dapat menikmati proses perangkaian bunga secara visual.',
        detailDescription:
          'Sekat kaca berbingkai tipis memisahkan zona suhu dingin dengan area konsultasi pesanan tanpa memutus kesan lapang.',
        deliverables: [
          'Denah Tata Letak Display, Meja Workshop, Kasir & Ruang Servis',
          'Studi 3D Fasad Etalase & Suasana Ruang Dalam',
        ],
        clientNeeds: [
          'Persetujuan alur gerak pengunjung dan kapasitas rak display',
        ],
      },
      {
        step: 'Design Development',
        subtitle: 'Pencahayaan CRI Tinggi, Drainase Area Basah & Akustik',
        duration: '2 – 3 Minggu',
        description:
          'Pemilihan lampu sorot dengan indeks renderasi warna tinggi serta permukaan lantai anti-slip yang mudah dibersihkan di area kerja.',
        detailDescription:
          'Meja kerja kustom dirancang terintegrasi dengan bak cuci tersembunyi, penyimpanan gunting/pita, serta jalur pembuangan sampah organik yang rapi.',
        deliverables: [
          'Render 3D Final Eksterior & Interior Galeri Kanaya Florist',
          'Gambar Detail Furnitur Built-in, Rencana Pencahayaan & Plambing',
        ],
        clientNeeds: [
          'Persetujuan material meja kerja, warna cat tekstur, dan armatur lampu',
        ],
      },
      {
        step: 'Construction Drawing',
        subtitle: 'Gambar Kerja Arsitektur, Interior & Utilitas Siap Eksekusi',
        duration: '2 – 3 Minggu',
        description:
          'Penyusunan gambar kerja presisi untuk pelaksanaan sipil, fasad kaca, maupun fabrikasi elemen interior.',
        detailDescription:
          'Dokumen disusun ringkas dan jelas sehingga waktu pengerjaan konstruksi ritel dapat berlangsung cepat sesuai target pembukaan toko.',
        deliverables: [
          'Gambar Kerja Lengkap Arsitektur, Interior & MEP Ritel',
          'Rekapitulasi Volume Pekerjaan & RAB Pelaksanaan',
        ],
        clientNeeds: [
          'Persetujuan final gambar kerja untuk eksekusi lapangan',
        ],
      },
    ],
    extraBlocks: [],
  },
  {
    slug: 'ack-udayana',
    name: 'ACK Udayana',
    category: 'Culinary & Commercial Space',
    location: 'Jimbaran, Bali',
    year: '2025',
    area: '480 m²',
    cover: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Gerai kuliner dan ruang komunal berkapasitas tinggi di koridor kampus dengan sirkulasi pesanan cepat, penghawaan silang optimal, dan struktur baja-beton modern.',
    journey: [
      {
        step: 'Data Collection',
        subtitle: 'Standar Dapur Komersial, Kapasitas Duduk & Alur Layanan Cepat',
        duration: '1 – 2 Minggu',
        description:
          'Pengumpulan standar operasional dapur produksi, antrean kasir, layanan pesan-antar, serta target kapasitas tempat duduk pengunjung.',
        detailDescription:
          'Tingginya frekuensi kunjungan mahasiswa dan keluarga di kawasan Udayana menuntut pemisahan tegas antara antrean dine-in, pick-up kurir, dan alur staf dapur.',
        deliverables: [
          'Program Ruang Dapur Komersial, Gudang Kering/Dingin & Area Makan',
          'Skema Alur Operasional Pelanggan, Kurir & Logistik Harian',
        ],
        clientNeeds: [
          'Daftar peralatan dapur komersial (kitchen equipment) dan spesifikasi daya',
          'Target kapasitas kursi serta standar identitas ruang brand',
        ],
      },
      {
        step: 'Site Analyze',
        subtitle: 'Aksesibilitas Lahan Sudut, Parkir Motor/Mobil & Utilitas',
        duration: '1 – 2 Minggu',
        description:
          'Kajian kepadatan lalu lintas koridor jalan utama, penempatan kantong parkir yang aman, serta pengelolaan limbah dapur (grease trap & IPAL).',
        detailDescription:
          'Posisi bangunan dioptimalkan agar fasad mudah dikenali dari dua arah jalan sekaligus menyediakan area parkir motor dan mobil yang tertata rapi.',
        deliverables: [
          'Rencana Tapak Sirkulasi Parkir, Loading Dock & Pengelolaan Limbah',
          'Analisis Orientasi Panas & Penghawaan Alami Area Makan Semi-Outdoor',
        ],
        clientNeeds: [
          'Data ukuran lahan dan titik saluran kota di sekitar tapak',
        ],
      },
      {
        step: 'Schematic Design',
        subtitle: 'Gubahan Massa Ikonik, Teras Teduh & Efisiensi Dapur',
        duration: '2 – 3 Minggu',
        description:
          'Penyusunan gubahan massa berbentang lebar dengan atap menaungi area duduk indoor maupun teras semi-terbuka yang sejuk.',
        detailDescription:
          'proporsi plafon tinggi memberi keleluasaan sirkulasi udara panas keluar ruangan sehingga ruang makan tetap nyaman sepanjang siang hingga malam.',
        deliverables: [
          'Denah Skematik Area Makan, Counter Pesanan & Layout Dapur',
          'Model 3D Eksterior & Potongan Skematik Bangunan',
        ],
        clientNeeds: [
          'Review bersama tim operasional dapur terhadap tata letak alur kerja',
        ],
      },
      {
        step: 'Design Development',
        subtitle: 'Koordinasi Exhaust Dapur, Struktur Baja & Material Durabel',
        duration: '3 Minggu',
        description:
          'Pengembangan detail struktur rangka atap, sistem penghisap asap dapur (exhaust & fresh air), instalasi gas aman, serta permukaan tahan aus.',
        detailDescription:
          'Seluruh material lantai dan meja dipilih berdasarkan kemudahan sanitasi harian dan ketahanan terhadap lalu lintas pengunjung yang padat.',
        deliverables: [
          'Visualisasi 3D Eksterior & Interior Ruang Makan ACK Udayana',
          'Gambar Pengembangan Struktur, Plambing Grease Trap, Gas & Elektrikal',
        ],
        clientNeeds: [
          'Persetujuan spesifikasi material finishing dan titik utilitas peralatan dapur',
        ],
      },
      {
        step: 'Construction Drawing',
        subtitle: 'Bundel Gambar Kerja DED Konstruksi & Kelengkapan PBG',
        duration: '3 – 4 Minggu',
        description:
          'Penyelesaian seluruh gambar kerja detail arsitektur, struktur, dan utilitas komersial agar pembangunan presisi dan siap mengurus perizinan.',
        detailDescription:
          'Dokumen DED mencakup detail sambungan baja, skema instalasi pengolahan air limbah dapur, hingga standar keselamatan kebakaran ruang publik.',
        deliverables: [
          'Dokumen DED Lengkap Siap Bangun & Lampiran Teknis Perizinan',
          'Daftar Kuantitas Pekerjaan & Rencana Anggaran Biaya (RAB)',
        ],
        clientNeeds: [
          'Persetujuan akhir dokumen konstruksi untuk pelaksanaan lapangan',
        ],
      },
    ],
    extraBlocks: [],
  },
];
