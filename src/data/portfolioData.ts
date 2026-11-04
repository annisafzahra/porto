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

export interface SkillItem {
  name: string;
  level: string;
  iconType: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  type: 'Magang' | 'Kerja' | 'Akademik';
  description: string;
  achievements: string[];
}

export const PERSONAL_INFO = {
  name: "Annisa Fathimatuz Zahra",
  nickname: "Annisa",
  title: "Software Quality Assurance & Frontend Developer",
  subTitle: "Lulusan D3 Teknik Informatika Polindra (IPK 3,94/4,00) dengan fokus pada pengujian API Postman, verifikasi sistem web, dan implementasi frontend Next.js.",
  headline: "Informatics Engineering Graduate | Software QA & Frontend Development",
  education: {
    degree: "Diploma III (A.Md.Kom)",
    major: "Teknik Informatika",
    institution: "Politeknik Negeri Indramayu (Polindra)",
    period: "2023 - 2026",
    gpa: "3.94 / 4.00",
    status: "Lulusan Berprestasi (IPK 3,94)",
    highlight: "Fokus pada rekayasa web, perancangan antarmuka, basis data relasional, dan analisis sistem. Tugas akhir: Sistem Pendukung Keputusan K-Means Clustering."
  },
  secondaryEducation: {
    institution: "SMK Negeri 1 Indramayu",
    major: "Akomodasi Perhotelan",
    period: "2019 - 2022",
    highlight: "Membangun ketelitian administrasi, kedisiplinan kerja, komunikasi tim, dan kepedulian terhadap kebutuhan pengguna."
  },
  location: "Indramayu, Jawa Barat",
  availability: "Terbuka untuk posisi Software QA / Testing / Frontend (Full-Time / Remote / On-Site)",
  email: "annisafzahra1117@gmail.com",
  phone: "+62 8xx-xxxx-xxxx",
  phoneDisplay: "Hubungi via Kontak / WhatsApp",
  whatsappUrl: "https://wa.me/6280000000000",
  github: "https://github.com",
  linkedin: "https://www.linkedin.com/in/annisa-fathimatuz-zahra-231228445",
  aboutParagraphs: [
    "Saya lulusan D3 Teknik Informatika Politeknik Negeri Indramayu dengan IPK 3,94/4,00. Selama perkuliahan, saya mendalami pengembangan web, basis data, UI/UX, dan analisis sistem, yang saya terapkan dalam Tugas Akhir Sistem Pendukung Keputusan berbasis K-Means Clustering.",
    "Selama magang 6 bulan di CV. Indokoding Sukses Makmur, saya bekerja pada pengembangan frontend web serta aktif melakukan pengujian API menggunakan Postman (pengujian request, collection run, dan pengecekan respons server) dan pencatatan temuan bug sistem klien.",
    "Latar belakang perhotelan sebelumnya memberi saya kebiasaan kerja yang teliti, terstruktur, dan berorientasi pada kepuasan pengguna akhir. Penggabungan pemahaman kode dan ketelitian ini membantu saya melakukan pengujian software secara lebih detail."
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "spk-jurusan-kmeans",
    title: "SPK Penjurusan Siswa (K-Means Clustering)",
    category: "Next.js & Web",
    badge: "Tugas Akhir (IPK 3,94)",
    partner: "Riset Akademik Polindra",
    tagline: "Sistem pendukung keputusan rekomendasi penjurusan siswa berbasis web dengan validasi kuesioner bertingkat.",
    overview: "Aplikasi web untuk membantu rekomendasi peminatan siswa kelas IX dengan algoritma Machine Learning K-Means Clustering menggunakan Next.js, Django REST API, dan PostgreSQL.",
    problem: "Penjurusan manual memerlukan waktu lama dan rentan inkonsistensi penilaian saat mengolah puluhan data minat dan nilai siswa.",
    solution: "Merancang antarmuka formulir bertahap dengan validasi input batas nilai (boundary check) serta visualisasi hasil klaster yang mudah dipahami.",
    keyFeatures: [
      "Formulir asesmen bertahap dengan validasi batas input nilai siswa",
      "Kalkulasi klaster K-Means otomatis via endpoint API Django REST",
      "Visualisasi ringkasan hasil pengelompokan jurusan",
      "Tampilan responsif untuk desktop lab sekolah maupun ponsel"
    ],
    qaVerification: [
      "Boundary testing: validasi rentang angka kuesioner agar input di luar skala ditolak sistem.",
      "Verifikasi status code dan format payload JSON dari REST API kalkulasi.",
      "Pengujian navigasi form bertahap untuk mencegah data ter-reset sebelum submit.",
      "Pemeriksaan konsistensi UI pada berbagai ukuran layar (mobile & desktop)."
    ],
    techStack: ["Next.js", "Django REST API", "PostgreSQL", "Python", "Postman", "Vercel"],
    designAspects: [
      "Struktur form bertingkat untuk mengurangi beban visual pengguna",
      "Hierarki teks yang jelas untuk memudahkan pengisian data",
      "Tampilan grafik ringkas yang mudah dibaca siswa dan guru"
    ],
    metrics: [
      "Berhasil diuji dengan dataset nilai siswa kelas IX",
      "Seluruh skenario pengujian kalkulasi dan alur form terverifikasi",
      "Waktu kalkulasi instan di bawah 2 detik per submit"
    ],
    accentColor: "#8c735d",
    image: "/projects/spk-kmeans.svg",
    featured: true
  },
  {
    id: "indokoding-mobile-payroll",
    title: "Aplikasi Mobile Payroll & Presensi Karyawan",
    category: "Mobile App",
    badge: "Proyek Magang Indokoding",
    partner: "CV. Indokoding Sukses Makmur",
    tagline: "Aplikasi operasional internal untuk pencatatan jam lembur otomatis dan tracking reimbursement.",
    overview: "Aplikasi mobile internal korporat untuk memfasilitasi administrasi harian karyawan CV. Indokoding, mulai dari pencatatan lembur hingga monitoring status reimbursement.",
    problem: "Pengajuan lembur dan bukti reimbursement yang sebelumnya dikirim lewat pesan chat sering tercecer dan memperlambat rekapitulasi bulanan.",
    solution: "Membangun antarmuka mobile dengan validasi input formulir lembur dan alur status tracking persetujuan yang transparan.",
    keyFeatures: [
      "Kalkulasi durasi jam lembur berdasarkan input jam kerja",
      "Form pengajuan klaim biaya dengan upload file bukti struk",
      "Status badge real-time (Pending, Approved, Rejected)",
      "Pemisahan tampilan hak akses karyawan dan verifikator"
    ],
    qaVerification: [
      "Pengujian endpoint API pengajuan klaim via Postman (GET, POST, PATCH).",
      "Verifikasi handling tipe file dan batas ukuran maksimal upload foto bukti.",
      "Uji skenario jam lembur lintas hari (melewati pukul 00:00).",
      "Pemeriksaan kesesuaian komponen visual antar perangkat Android."
    ],
    techStack: ["React Native", "Expo", "Django Backend", "Postman", "Figma"],
    designAspects: [
      "Tata letak mobile yang ringkas untuk input data cepat di lapangan",
      "Notifikasi status visual yang kontras agar mudah dipantau",
      "Form pengisian terstruktur dengan pesan error yang jelas"
    ],
    metrics: [
      "Mempercepat waktu rekonsiliasi pengajuan lembur tim",
      "Pengujian alur input struk berjalan stabil tanpa force close",
      "Implementasi layout sesuai dengan rancangan Figma"
    ],
    accentColor: "#546e63",
    image: "/projects/payroll-app.svg",
    featured: true
  },
  {
    id: "indokoding-corporate-cms",
    title: "Website Perusahaan & Sistem CMS Konten",
    category: "Next.js & Web",
    badge: "Proyek Magang Indokoding",
    partner: "CV. Indokoding Sukses Makmur",
    tagline: "Portal profil perusahaan dengan panel admin CRUD untuk pembaruan katalog layanan.",
    overview: "Website resmi CV. Indokoding sebagai media etalase proyek dan layanan teknologi, dilengkapi panel admin konten untuk staf internal.",
    problem: "Pembaruan informasi portofolio sebelumnya harus mengubah kode secara manual sehingga memakan waktu dan berisiko salah deploy.",
    solution: "Mengembangkan website Next.js dengan dashboard admin terautentikasi untuk kemudahan manajemen konten secara mandiri.",
    keyFeatures: [
      "Panel dashboard CRUD untuk layanan, artikel, dan daftar klien",
      "Autentikasi akun admin berbasis Firebase Auth",
      "Rendering halaman cepat dengan Next.js SSR",
      "Struktur SEO teroptimasi untuk pencarian Google"
    ],
    qaVerification: [
      "Uji proteksi route: memastikan halaman admin tidak bisa diakses tanpa sesi login.",
      "Verifikasi operasi CRUD: Create, Read, Update, Delete data tersinkronisasi benar.",
      "Pencatatan temuan bug layout dan perbaikan form validation sebelum rilis.",
      "Audit performa loading halaman menggunakan DevTools dan Lighthouse."
    ],
    techStack: ["Next.js", "Firebase Auth", "Firestore", "Postman", "CSS Modules", "Vercel"],
    designAspects: [
      "Gaya visual korporat yang bersih dan mudah dibaca",
      "Form editor admin yang sederhana bagi pengguna non-teknis",
      "Navigasi rapi yang responsif di berbagai resolusi layar"
    ],
    metrics: [
      "Kecepatan loading FCP di bawah 1,5 detik di Vercel",
      "Skor performa dan aksesibilitas Lighthouse di atas 90",
      "Update konten portofolio dapat dilakukan instan tanpa build ulang"
    ],
    accentColor: "#7a6252",
    image: "/projects/corporate-cms.svg",
    featured: true
  },
  {
    id: "perpusda-indramayu-circulation",
    title: "Katalog & Sirkulasi Perpustakaan Daerah",
    category: "UI/UX & Research",
    badge: "Instansi Daerah",
    partner: "Disarpus Kabupaten Indramayu",
    tagline: "Perancangan sistem pencarian katalog buku dan reservasi peminjaman pemustaka.",
    overview: "Desain antarmuka dan prototipe sistem sirkulasi buku digital untuk memudahkan pengunjung memeriksa ketersediaan koleksi sebelum datang ke perpustakaan.",
    problem: "Pengunjung sering kali kesulitan mencari lokasi rak buku dan baru mengetahui buku sedang dipinjam saat sudah berada di lokasi.",
    solution: "Merancang alur pencarian buku dengan filter status ketersediaan rak dan alur peminjaman yang mudah digunakan masyarakat umum.",
    keyFeatures: [
      "Pencarian koleksi buku berdasarkan judul, pengarang, dan nomor rak DDC",
      "Informasi status ketersediaan koleksi secara langsung",
      "Alur pengajuan peminjaman bertahap dengan tiket reservasi",
      "Desain ramah pembaca berbagai rentang usia"
    ],
    qaVerification: [
      "Pengujian input query pencarian: karakter khusus, spasi berlebih, dan string kosong.",
      "Verifikasi konsistensi status buku (Tersedia / Dipinjam) pada hasil pencarian.",
      "Pemeriksaan kontras teks dan keterbacaan sesuai standar aksesibilitas WCAG.",
      "Uji alur user journey dari halaman cari sampai tiket terbit tanpa broken flow."
    ],
    techStack: ["Laravel", "MySQL", "Figma", "JavaScript", "HTML / CSS"],
    designAspects: [
      "Pemetaan user journey pemustaka dari rumah ke meja sirkulasi",
      "High-fidelity prototype interaktif di Figma",
      "Tipografi dengan rasio kontras tinggi untuk kenyamanan mata"
    ],
    metrics: [
      "Desain prototipe tuntas dan disetujui pihak pengelola perpustakaan",
      "Mengurangi durasi pencarian manual koleksi di rak fisik",
      "Struktur antarmuka telah diuji nyaman di layar smartphone"
    ],
    accentColor: "#617066",
    image: "/projects/perpusda-catalog.svg",
    featured: true
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Software QA & Pengujian",
    description: "Pengujian fungsionalitas, validasi endpoint API, dan dokumentasi temuan bug.",
    skills: [
      { name: "Postman API Testing", level: "Request, collections, dan status check", iconType: "api" },
      { name: "Manual Functional Testing", level: "Skenario pengujian, boundary & edge cases", iconType: "check" },
      { name: "Bug Logging & Reporting", level: "Dokumentasi temuan & langkah reproduksi", iconType: "file" },
      { name: "API Response Inspection", level: "Status code, headers, payload JSON", iconType: "inspect" },
      { name: "Cross-Device Verification", level: "Pengecekan tampilan mobile & desktop", iconType: "devices" }
    ]
  },
  {
    title: "Frontend & Inspeksi Sistem",
    description: "Pemahaman struktur kode, pelacakan error DevTools, dan alur data.",
    skills: [
      { name: "Next.js & React", level: "Struktur komponen, routing, dan state", iconType: "code" },
      { name: "Chrome DevTools", level: "Console error log & Network tab inspection", iconType: "terminal" },
      { name: "PostgreSQL & Database", level: "Relasi tabel, query dasar, dan skema data", iconType: "database" },
      { name: "Django REST API", level: "Pemahaman route backend & payload API", iconType: "server" },
      { name: "Git & Version Control", level: "Branching, pull request, dan commit tracking", iconType: "git" }
    ]
  },
  {
    title: "UI/UX & Karakteristik Kerja",
    description: "Empati kebutuhan pengguna, ketelitian administrasi, dan koordinasi kerja tim.",
    skills: [
      { name: "Figma UI/UX Design", level: "Wireframing, design system, dan prototipe", iconType: "figma" },
      { name: "Ketelitian Detail (Detail-Oriented)", level: "Pemeriksaan input data dan alur sistem", iconType: "target" },
      { name: "Evaluasi Kegunaan (Usability)", level: "Pemeriksaan kemudahan navigasi pengguna", iconType: "eye" },
      { name: "Komunikasi Kerja Tim", level: "Penyelarasan laporan progres dan temuan issue", iconType: "chat" },
      { name: "Manajemen Waktu", level: "Kedisiplinan tenggat waktu dan prioritas kerja", iconType: "clock" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "Juli 2025 - Desember 2025 (6 Bulan)",
    role: "Frontend Developer & API Testing Intern",
    organization: "CV. Indokoding Sukses Makmur",
    location: "Yogyakarta",
    type: "Magang",
    description: "Mengembangkan aplikasi web berbasis Next.js dan perancangan antarmuka Figma, sekaligus melakukan pengujian endpoint API dan dokumentasi temuan bug.",
    achievements: [
      "Melakukan pengujian API menggunakan Postman untuk memeriksa kesesuaian respons server dan kelengkapan payload data.",
      "Mencatat dan mendokumentasikan temuan bug antarmuka maupun validasi form sebagai bahan evaluasi perbaikan tim developer.",
      "Menerapkan rancangan Figma ke dalam komponen Next.js yang responsif dan terstruktur.",
      "Menggunakan GitHub untuk kolaborasi kode dan berpartisipasi dalam standup rutin koordinasi proyek.",
      "Memahami alur data backend Django dan database PostgreSQL untuk mempermudah identifikasi sumber kendala sistem."
    ]
  },
  {
    period: "Juli 2020 - Januari 2021 (7 Bulan)",
    role: "Front Desk Receptionist (Operasional Perhotelan)",
    organization: "Vinotel Cirebon",
    location: "Cirebon, Jawa Barat",
    type: "Kerja",
    description: "Menangani administrasi reservasi, akurasi data transaksi, dan pelayanan kebutuhan tamu dengan standar ketelitian tinggi.",
    achievements: [
      "Menjalankan prosedur check-in, check-out, dan input transaksi pembayaran dengan kepatuhan standar sistem hotel.",
      "Memelihara catatan data tamu dan ketersediaan kamar pada sistem operasional dengan ketelitian administrasi.",
      "Merespons kebutuhan dan keluhan tamu secara profesional, mengasah kemampuan komunikasi dan pemecahan masalah.",
      "Berkoordinasi dengan tim operasional lintas divisi untuk memastikan kesiapan kamar dan kelancaran operasional harian."
    ]
  }
];
