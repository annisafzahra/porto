export interface Project {
  id: string;
  title: string;
  category: 'Next.js & Web' | 'Mobile App' | 'UI/UX & Research';
  badge: string;
  partner: string;
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  qaVerification: string[];
  techStack: string[];
  designAspects: string[];
  metrics: string[];
  demoUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  accentColor: string;
  image?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: string; icon: string }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  type: 'Internship' | 'Professional' | 'Academic';
  description: string;
  achievements: string[];
}

export const PERSONAL_INFO = {
  name: "Annisa Fathimatuz Zahra",
  nickname: "Annisa",
  title: "Software Quality Assurance & System Validation",
  subTitle: "Lulusan D3 Teknik Informatika Polindra (IPK 3,94/4,00) dengan keahlian pengujian API Postman, verifikasi fungsionalitas sistem, dan pemahaman mendalam pada struktur kode web modern.",
  headline: "Informatics Engineering Graduate | UI/UX Design, Front-end Development & Software Testing",
  education: {
    degree: "Diploma III (A.Md.Kom)",
    major: "Teknik Informatika",
    institution: "Politeknik Negeri Indramayu (Polindra)",
    period: "September 2023 - Agustus 2026",
    gpa: "3.94 / 4.00",
    status: "Lulusan Berprestasi (IPK 3,94)",
    highlight: "Mempelajari rekayasa perangkat lunak web, perancangan UI/UX, manajemen basis data PostgreSQL, dan analisis sistem. Menyelesaikan Tugas Akhir SPK berbasis K-Means Clustering."
  },
  secondaryEducation: {
    institution: "SMK Negeri 1 Indramayu",
    major: "Hospitality and Recreation Marketing Operations",
    period: "Juli 2019 - Juni 2022",
    highlight: "Membentuk fondasi ketelitian tingkat tinggi, standar kualitas pelayanan, administrasi terstruktur, komunikasi efektif, dan empati kebutuhan pengguna."
  },
  location: "Indramayu, Jawa Barat, Indonesia",
  availability: "Open to Work (Software QA / Testing / Technical Documentation / Full-Time / Remote / On-Site)",
  email: "annisafzahra1117@gmail.com",
  github: "https://github.com",
  linkedin: "https://www.linkedin.com/in/annisa-fathimatuz-zahra-231228445",
  aboutParagraphs: [
    "Saya merupakan lulusan D3 Teknik Informatika dari Politeknik Negeri Indramayu dengan IPK 3,94/4,00. Selama menempuh pendidikan, saya mempelajari pengembangan aplikasi berbasis web, perancangan antarmuka pengguna (UI/UX), pengelolaan basis data, serta analisis sistem informasi yang saya terapkan pada Tugas Akhir Sistem Pendukung Keputusan K-Means Clustering.",
    "Saya memiliki pengalaman magang selama 6 bulan di CV. Indokoding Sukses Makmur. Di sana, selain mengembangkan antarmuka Next.js dan perancangan Figma, saya aktif melakukan pengujian API menggunakan Postman (mengirim request, running collections, dan memeriksa respons API), serta mengidentifikasi dan mendokumentasikan temuan bug/inkonsistensi sistem pada website klien.",
    "Latar belakang pendidikan Perhotelan sebelumnya membekali saya dengan ketelitian administrasi, manajemen waktu, kemampuan koordinasi operasional, dan orientasi pelayanan pelanggan. Gabungan latar belakang teknis dan pelayanan ini membentuk pemahaman saya mengenai pentingnya kualitas perangkat lunak, ketepatan proses, dan kepuasan pengguna akhir."
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "spk-jurusan-kmeans",
    title: "SPK Rekomendasi Jurusan SMA/SMK (K-Means Clustering)",
    category: "Next.js & Web",
    badge: "Tugas Akhir Unggulan (IPK 3,94)",
    partner: "Mitra SMP Daerah & Riset Polindra",
    tagline: "Sistem Pendukung Keputusan Berbasis Web dengan K-Means Clustering & Pengujian Validasi Kuesioner Bertingkat",
    overview: "Platform web interaktif untuk penentuan rekomendasi arah studi lanjutan siswa kelas IX menggunakan algoritma Machine Learning K-Means Clustering, dibangun dengan Next.js, Django REST API, dan PostgreSQL.",
    problem: "Penilaian penjurusan manual rawan bias subjektif dan memakan waktu berhari-hari. Dibutuhkan sistem objektif yang mengolah data kognitif dan minat-bakat siswa secara akurat tanpa kegagalan input.",
    solution: "Merancang dan membangun web bertahap (stepper form) dengan validasi ketat di sisi klien dan server, visualisasi klaster jurusan yang mudah dipahami siswa, serta integrasi API yang cepat.",
    keyFeatures: [
      "Interactive 3-Tier Assessment: Form bertahap untuk penilaian Akademik, Minat, dan Bakat dengan validasi boundary check.",
      "Dynamic Analytics Dashboard: Visualisasi grafik 6 jurusan terpopuler secara real-time.",
      "K-Means Clustering Machine: Mesin pengelompokan otomatis berbasis pustaka Python Scikit-Learn dan PostgreSQL.",
      "Responsive Cross-Device Layout: Diuji stabil di layar smartphone maupun komputer laboratorium sekolah."
    ],
    qaVerification: [
      "Boundary Testing: Memvalidasi rentang skor form kuesioner kognitif agar tidak menerima data nilai di luar skala batas.",
      "Cluster Output Verification: Menguji akurasi pengelompokan K-Means terhadap dataset riil siswa kelas IX mitra SMP.",
      "API Response Integrity: Memastikan respons API kalkulasi dari Django REST API kembali dalam waktu < 2 detik dengan status 200 OK.",
      "Form Usability Check: Memverifikasi stepper flow bebas dari dead-end link dan state reset yang tidak disengaja."
    ],
    techStack: ["Next.js", "Django REST API", "PostgreSQL", "Python (Scikit-Learn)", "Postman", "Vercel"],
    designAspects: [
      "Riset empati pengguna untuk siswa usia 14-15 tahun agar minim beban kognitif.",
      "High-Fidelity Prototype di Figma dengan hierarki tipografi yang jelas.",
      "Desain dashboard bersih dengan visualisasi grafik yang mudah dipahami orang tua."
    ],
    metrics: [
      "Diujikan langsung dengan data siswa kelas IX di SMP mitra setempat.",
      "100% fungsionalitas kuis dan kalkulasi klaster lolos uji skenario tugas akhir.",
      "Hasil rekomendasi instan keluar dalam hitungan detik setelah asesmen selesai."
    ],
    accentColor: "#8c735d",
    image: "/projects/spk-kmeans.svg",
    featured: true
  },
  {
    id: "indokoding-mobile-payroll",
    title: "Employee Self-Service & Automated Payroll App",
    category: "Mobile App",
    badge: "Solusi Magang CV. Indokoding",
    partner: "CV. Indokoding Sukses Makmur",
    tagline: "Aplikasi Mobile Operasional Karyawan, Kalkulasi Jam Lembur Otomatis, dan Tracking Reimbursement",
    overview: "Aplikasi mobile internal korporat untuk memfasilitasi administrasi harian karyawan CV. Indokoding, mulai dari presensi jam lembur hingga tracking pencairan reimbursement dengan pengujian endpoint ketat.",
    problem: "Pengajuan reimbursement via chat manual memicu keterlambatan approval dan salah input nominal gaji lembur pada akhir bulan.",
    solution: "Mengembangkan aplikasi mobile berbasis React Native/Expo dengan alur pengajuan terstruktur, kalkulator jam kerja otomatis, dan pelaporan status berjenjang.",
    keyFeatures: [
      "Smart Overtime Calculator: Input jam mulai dan selesai lembur dengan validasi otomatis terhadap shift kerja.",
      "Reimbursement Claim Tracking: Upload bukti struk, pemilihan kategori biaya, dan live status badge (Pending/Approved/Rejected).",
      "Salary & Slip Preview: Transparansi rincian tunjangan dan potongan sebelum payroll didistribusikan.",
      "Role-Based Navigation: Tampilan berbeda untuk karyawan umum dan manajer pemberi persetujuan."
    ],
    qaVerification: [
      "Postman API Testing: Pengujian request GET/POST/PATCH pada endpoint status pengajuan reimburse dan approval.",
      "Edge Case Calculation: Verifikasi kalkulasi jam lembur yang melewati pergantian hari (cross-midnight shifts).",
      "Upload File Validation: Memastikan input foto struk dibatasi format file dan ukuran kapasitas yang diizinkan.",
      "Cross-Platform UI Inspection: Memverifikasi konsistensi rendering komponen antarmuka pada berbagai resolusi Android."
    ],
    techStack: ["React Native", "Expo", "Django Backend", "Postman API", "AsyncStorage", "Figma"],
    designAspects: [
      "Mobile-First UI Design di Figma berpedoman pada Human Interface Guidelines.",
      "Form validation micro-interactions untuk mencegah salah ketik nominal uang.",
      "Status badge yang kontras untuk mempercepat scanning mata pengguna."
    ],
    metrics: [
      "Memotong waktu proses pengajuan reimburse dari 3 hari menjadi hitungan jam.",
      "Aplikasi berjalan mulus di perangkat Android dengan responsivitas optimal.",
      "100% konsistensi fungsionalitas antara prototipe Figma dan kode React Native."
    ],
    accentColor: "#546e63",
    image: "/projects/payroll-app.svg",
    featured: true
  },
  {
    id: "indokoding-corporate-cms",
    title: "Corporate Web Platform & Dynamic CMS",
    category: "Next.js & Web",
    badge: "Solusi Magang CV. Indokoding",
    partner: "CV. Indokoding Sukses Makmur",
    tagline: "Platform Web Perusahaan Modern dengan Panel Admin CRUD Terintegrasi Firebase & Verifikasi Respons",
    overview: "Portal web resmi CV. Indokoding sebagai etalase portofolio digital klien dan sistem manajemen konten (CMS) internal yang dikelola secara mandiri oleh staf non-teknis.",
    problem: "Perusahaan memerlukan kredibilitas digital untuk tender proyek teknologi dan membutuhkan kemudahan update katalog tanpa harus mengubah baris kode berkali-kali.",
    solution: "Membangun web Next.js dengan SSR untuk performa dan SEO tinggi, dilengkapi panel admin terproteksi dengan operasi CRUD lengkap dan pengujian respons autentikasi.",
    keyFeatures: [
      "Custom Admin Dashboard: CRUD lengkap untuk manajemen portofolio layanan, artikel berita, dan testimoni klien.",
      "Role-Based Authentication: Panel admin diamankan dengan autentikasi Firebase Auth.",
      "High-Performance Frontend: Server-side rendering (SSR) Next.js untuk skor Lighthouse optimal.",
      "Zero-Downtime Deployment: Dikonfigurasi untuk continuous deployment di Vercel."
    ],
    qaVerification: [
      "Authentication Flow Testing: Pengujian unauthorized access pada URL rute admin yang terproteksi.",
      "CRUD Operations Verification: Memastikan setiap aksi Create, Read, Update, Delete di admin ter-update real-time di database.",
      "Bug Documentation: Mengidentifikasi dan mendokumentasikan temuan inkonsistensi layout atau form error sebelum rilis klien.",
      "Page Speed & Lighthouse Audit: Memverifikasi waktu muat halaman FCP tetap di bawah 1.5 detik."
    ],
    techStack: ["Next.js", "Firebase Auth", "Cloud Firestore", "Postman", "Vanilla CSS", "Vercel"],
    designAspects: [
      "Gaya visual korporat modern dengan tata letak bersih dan tipografi yang terstruktur rapi.",
      "Desain form admin yang intuitif agar staf non-teknis bisa mengunggah konten tanpa kesalahan.",
      "Responsive layout yang rapi di layar monitor desktop, tablet, dan smartphone."
    ],
    metrics: [
      "Waktu muat halaman (FCP) di bawah 1.2 detik di platform Vercel.",
      "Skor SEO 95+ pada audit Google Lighthouse.",
      "Seluruh data konten dapat diubah secara real-time tanpa build ulang kode."
    ],
    accentColor: "#7a6252",
    image: "/projects/corporate-cms.svg",
    featured: true
  },
  {
    id: "perpusda-indramayu-circulation",
    title: "Public Library Catalog & Circulation System",
    category: "UI/UX & Research",
    badge: "Instansi Publik Daerah",
    partner: "Dinas Arsip dan Perpustakaan Daerah (Disarpus) Indramayu",
    tagline: "Modernisasi Layanan Peminjaman Buku dan Pengujian Kemudahan Akses Masyarakat Umum",
    overview: "Solusi antarmuka digital yang memodernisasi cara pemustaka mencari katalog buku, memeriksa ketersediaan fisik di rak perpustakaan, dan alur peminjaman buku secara daring.",
    problem: "Pemustaka sering kali harus mencari buku manual di rak besar dan mendapati buku sedang dipinjam orang lain. Alur pencarian belum terpusat secara digital.",
    solution: "Merancang desain sistem antarmuka berbasis Figma yang ramah bagi warga segala usia, lalu mengimplementasikannya ke web Laravel dengan fitur pencarian real-time dan reservasi peminjaman.",
    keyFeatures: [
      "Smart Catalog Search: Filter berdasarkan judul, penulis, nomor rak (DDC), dan ketersediaan stok fisik.",
      "Detailed Book Dossier: Tampilan sinopsis buku, informasi penerbitan, dan status ketersediaan secara visual.",
      "Multi-Step Borrowing Flow: Alur peminjaman terstruktur dengan batas waktu peminjaman dan notifikasi pengembalian.",
      "Accessible Design for Public: Kontras warna dan ukuran teks dioptimalkan untuk kenyamanan membaca publik umum."
    ],
    qaVerification: [
      "Search Query Edge-Cases: Menguji pencarian dengan karakter khusus, typo toleran, dan kata kunci kosong.",
      "Stock Status Consistency: Memverifikasi status buku fisik 'Tersedia' dan 'Dipinjam' akurat sesuai database.",
      "Accessibility & Readability: Menguji rasio kontras warna memenuhi standar WCAG untuk kenyamanan berbagai kelompok usia.",
      "User Navigation Testing: Memastikan alur peminjaman dari pemilihan buku hingga konfirmasi tiket bebas hambatan."
    ],
    techStack: ["Laravel", "MySQL", "Figma Design System", "JavaScript ES6+", "HTML5 / CSS3"],
    designAspects: [
      "Desain alur kerja (User Journey Map) mulai dari pencarian awal hingga pengambilan buku di meja sirkulasi.",
      "Wireframing dan High-Fidelity Prototype lengkap di Figma.",
      "Antarmuka yang mengutamakan keterbacaan (readability) untuk berbagai kelompok usia pembaca."
    ],
    metrics: [
      "Mengurangi antrean pengecekan ketersediaan buku di loket perpustakaan.",
      "Desain disetujui langsung oleh pengelola perpustakaan daerah.",
      "Desain responsif yang dapat diakses dari browser smartphone warga."
    ],
    accentColor: "#617066",
    image: "/projects/perpusda-catalog.svg",
    featured: true
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Software Quality Assurance & Testing",
    description: "Keahlian utama dalam pengujian fungsionalitas, validasi endpoint API, dokumentasi temuan bug, dan integritas sistem aplikasi.",
    skills: [
      { name: "Postman API Testing", level: "Permintaan Manual, Running Collections, Response Validation", icon: "📬" },
      { name: "Functional & Manual Testing", level: "Skenario Pengujian, Boundary Testing & Edge Cases", icon: "🔍" },
      { name: "Bug Identification & Logging", level: "Dokumentasi Temuan, Pelaporan Isu & Verifikasi Solusi", icon: "📝" },
      { name: "API Response Inspection", level: "Status Code (200/400/500), Payload JSON, Headers", icon: "⚡" },
      { name: "Cross-Browser & Device QA", level: "Pemeriksaan Resolusi Layar & Konsistensi UI", icon: "📱" }
    ]
  },
  {
    title: "Frontend & Technical Inspection",
    description: "Fondasi rekayasa perangkat lunak untuk memahami kode di balik layar, inspeksi DevTools, dan navigasi data sistem.",
    skills: [
      { name: "Next.js & React", level: "Struktur Komponen, Routing, & State Validation", icon: "⚛️" },
      { name: "Chrome DevTools", level: "Console Error Tracking & Network Request Inspection", icon: "🛠️" },
      { name: "PostgreSQL & Database", level: "Inspeksi Skema Data, Query Dasar & Relasi Tabel", icon: "🗄️" },
      { name: "Django REST API", level: "Pemahaman Alur Backend & Pemetaan Endpoints", icon: "🐍" },
      { name: "Git & GitHub", level: "Version Control, Pull Request, & Kolaborasi Tim", icon: "🐙" }
    ]
  },
  {
    title: "UI/UX, Usability & Professional Attributes",
    description: "Kombinasi empati desain, ketelitian tinggi standar perhotelan, dan kedisiplinan kerja tim profesional.",
    skills: [
      { name: "Figma (UI/UX Design)", level: "Design System, Wireframing, & Interactive Prototype", icon: "🎨" },
      { name: "High Attention to Detail", level: "Ketelitian Administrasi & Keandalan Operasional", icon: "🎯" },
      { name: "Usability & Heuristic Check", level: "Evaluasi Kenyamanan & Kemudahan Pengguna Riil", icon: "👁️" },
      { name: "Effective Communication", level: "Penyelarasan Tugas Tim & Pelaporan Progres", icon: "💬" },
      { name: "Structured Time Management", level: "Tanggung Jawab Tenggat Waktu & Adaptabilitas", icon: "⏱️" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "Juli 2025 - Desember 2025 (6 bulan)",
    role: "Frontend Developer & API Testing Intern",
    organization: "CV. Indokoding Sukses Makmur",
    location: "Yogyakarta, Indonesia",
    type: "Internship",
    description: "Terlibat dalam pengembangan web Next.js dan perancangan antarmuka Figma, sekaligus berperan aktif dalam pengujian API dan dokumentasi temuan bug pada sistem klien.",
    achievements: [
      "Menjalankan pengujian API menggunakan Postman dengan mengirim manual requests dan mengeksekusi collections untuk memeriksa kesesuaian respons server.",
      "Mengidentifikasi, mencatat, dan mendokumentasikan temuan bug atau inkonsistensi pada website klien sebagai bahan evaluasi tindak lanjut tim pengembang.",
      "Merancang antarmuka aplikasi di Figma berdasarkan kebutuhan klien dan menerjemahkannya ke dalam kode Next.js yang fungsional dan responsif.",
      "Berkolaborasi intensif melalui GitHub serta berpartisipasi aktif dalam rapat harian (daily standup) untuk penyelarasan tugas dan pemantauan progres proyek.",
      "Memperluas pemahaman backend Django dan basis data PostgreSQL untuk memperdalam analisis alur data sistem secara menyeluruh."
    ]
  },
  {
    period: "Juli 2020 - Januari 2021 (7 bulan)",
    role: "Front Desk Receptionist (Hospitality Operations)",
    organization: "Vinotel Cirebon",
    location: "Cirebon, Jawa Barat, Indonesia",
    type: "Professional",
    description: "Mengelola administrasi reservasi, pembayaran, dan penanganan keluhan tamu dengan standar ketelitian tinggi, akurasi data sistem, dan komunikasi profesional.",
    achievements: [
      "Menjalankan prosedur check-in, check-out, reservasi, dan transaksi pembayaran dengan kepatuhan standar hotel dan akurasi data 100%.",
      "Mengelola informasi ketersediaan kamar dan memelihara catatan tamu pada sistem komputer hotel dengan penekanan pada ketelitian administrasi.",
      "Menangani pertanyaan tamu dan merespons keluhan (complaint handling) secara profesional dan solutif, mengasah empati dan komunikasi.",
      "Berkoordinasi terstruktur dengan tim housekeeping dan departemen terkait untuk memastikan kesiapan kamar dan kelancaran operasional.",
      "Membangun manajemen waktu yang disiplin, ketelitian terhadap detail, dan ketahanan dalam pemecahan masalah harian."
    ]
  }
];
