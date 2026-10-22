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
  techStack: string[];
  designAspects: string[];
  metrics: string[];
  demoUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  accentColor: string;
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
  type: 'Internship' | 'Academic' | 'Freelance';
  description: string;
  achievements: string[];
}

export const PERSONAL_INFO = {
  name: "Annisa Fathimatuz Zahra",
  nickname: "Annisa",
  title: "Design Engineer / Frontend Developer",
  subTitle: "Bridging human-centered UI/UX design with clean, high-performance web and mobile code.",
  education: {
    degree: "Diploma 3 (A.Md.Kom)",
    major: "Teknik Informatika",
    institution: "D3 Teknik Informatika",
    status: "Fresh Graduate",
    highlight: "Berfokus pada implementasi praktis rekayasa perangkat lunak antarmuka (frontend) dan desain interaksi sistem informasi."
  },
  location: "Indonesia",
  availability: "Open to Work (Junior Frontend / UI Engineer / Full-Time / Remote)",
  email: "annisa.fathimatuz@example.com", // Placeholder to be customized
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  summary: "Frontend Developer berlatar belakang D3 Teknik Informatika dengan spesialisasi ganda di UI/UX Design dan Frontend Engineering. Terbiasa menerjemahkan kebutuhan bisnis dan alur pengguna dari riset Figma menjadi kode aplikasi siap produksi berbasis Next.js, React, dan React Native. Telah menyelesaikan 4 proyek berskala instansi pemerintahan, mitra institusi pendidikan, dan korporat."
};

export const PROJECTS: Project[] = [
  {
    id: "spk-jurusan-kmeans",
    title: "SPK Rekomendasi Jurusan SMA/SMK (K-Means Clustering)",
    category: "Next.js & Web",
    badge: "Tugas Akhir Unggulan",
    partner: "Mitra SMP Daerah (Disetujui untuk Siswa Kelas IX)",
    tagline: "Sistem Pendukung Keputusan Berbasis Web untuk Pemetaan Potensi Siswa Menggunakan Algoritma K-Means",
    overview: "Platform web interaktif yang membantu ratusan siswa kelas IX menentukan arah studi lanjutan secara objektif melalui 3 pilar asesmen kognitif dan algoritma machine learning K-Means clustering.",
    problem: "Banyak siswa SMP mengalami dilema dalam memilih jurusan SMA/SMK karena kurangnya bimbingan objektif. Penilaian manual di sekolah memakan waktu berhari-hari dan rawan bias subjektif guru pembimbing.",
    solution: "Merancang dan membangun antarmuka web bertahap (stepper questionnaire) yang ramah anak sekolah, dipadukan dengan visualisasi dashboard 6 jurusan terpopuler dan mesin rekomendasi otomatis berbasis clustering data akademik dan minat-bakat.",
    keyFeatures: [
      "Interactive 3-Tier Assessment: Form bertahap untuk penilaian Akademik, Minat, dan Bakat dengan progress indicator yang jelas.",
      "Dynamic Analytics Dashboard: Menampilkan grafik 6 jurusan SMA/SMK terfavorit di wilayah setempat secara real-time.",
      "K-Means Clustering Visualization: Penyajian hasil pengelompokan rekomendasi jurusan yang mudah dipahami orang tua dan siswa.",
      "Responsive User Experience: Dioptimalkan untuk diakses siswa melalui smartphone maupun komputer lab sekolah."
    ],
    techStack: ["Next.js", "Django REST API", "Python (Scikit-Learn)", "Chart.js / SVG Charts", "CSS Modules", "Vercel"],
    designAspects: [
      "User Research & Empathy Mapping untuk siswa usia 14-15 tahun.",
      "Perancangan High-Fidelity Prototype di Figma sebelum implementasi kode.",
      "Desain antarmuka kuis minim distraksi kognitif untuk meningkatkan tingkat penyelesaian asesmen."
    ],
    metrics: [
      "Diujikan langsung dengan data siswa kelas IX di SMP mitra.",
      "100% alur kuis berhasil ditranslasikan dari wireframe Figma ke Next.js.",
      "Hasil rekomendasi instan dalam hitungan detik setelah kuis selesai."
    ],
    accentColor: "#00f2fe",
    featured: true
  },
  {
    id: "indokoding-mobile-payroll",
    title: "Employee Self-Service & Automated Payroll App",
    category: "Mobile App",
    badge: "Commercial Mobile Solution",
    partner: "CV. Indokoding",
    tagline: "Aplikasi Manajemen Operasional Kantor, Pengajuan Lembur, dan Reimbursement Karyawan",
    overview: "Aplikasi mobile internal korporat untuk memfasilitasi kebutuhan administrasi harian karyawan CV. Indokoding, mulai dari presensi jam lembur hingga tracking pencairan dana reimbursement.",
    problem: "Proses pengajuan reimburse operasional dan perhitungan lembur sebelumnya dilakukan manual via chat dan spreadsheet, memicu keterlambatan approval serta ketidakakuratan slip gaji akhir bulan.",
    solution: "Membangun aplikasi mobile berbasis React Native/Expo dengan desain antarmuka bersih yang memudahkan karyawan mengajukan klaim dengan bukti foto struk, kalkulator jam lembur otomatis, dan tracking status approval berjenjang.",
    keyFeatures: [
      "Smart Overtime Calculator: Input jam mulai dan selesai lembur dengan validasi otomatis terhadap shift kerja.",
      "Reimbursement Claim Tracking: Upload bukti pembayaran fisik, kategori biaya, dan live status badge (Pending/Approved/Rejected).",
      "Salary & Slip Preview: Transparansi rincian tunjangan dan potongan sebelum payroll didistribusikan.",
      "Role-Based Navigation: Tampilan berbeda untuk karyawan umum dan manajer pemberi persetujuan."
    ],
    techStack: ["React Native", "Expo", "Django Backend", "Figma Design System", "AsyncStorage", "REST API"],
    designAspects: [
      "Mobile-First UI Design di Figma berpedoman pada kaidah Human Interface Guidelines.",
      "Form validation micro-interactions untuk mencegah salah ketik nominal uang.",
      "Status cards dengan hierarki warna yang tegas untuk efisiensi scanning mata pengguna."
    ],
    metrics: [
      "Memotong waktu proses pengajuan reimburse dari 3 hari menjadi hitungan jam.",
      "Aplikasi berjalan mulus di platform Android dengan performa native 60 FPS.",
      "100% konsistensi komponen antara desain Figma dan kode React Native."
    ],
    accentColor: "#10b981",
    featured: true
  },
  {
    id: "indokoding-corporate-cms",
    title: "Corporate Web Platform & Dynamic CMS",
    category: "Next.js & Web",
    badge: "Production Web App",
    partner: "CV. Indokoding",
    tagline: "Website Profil Perusahaan Modern dengan Panel Admin CRUD Terintegrasi Firebase",
    overview: "Portal web resmi CV. Indokoding yang berfungsi ganda sebagai etalase portofolio digital klien dan sistem manajemen konten (CMS) internal yang dapat dikelola secara mandiri oleh tim non-teknis.",
    problem: "Perusahaan membutuhkan representasi digital yang kredibel untuk memenangkan tender proyek teknologi, serta membutuhkan fleksibilitas memperbarui katalog layanan tanpa harus selalu mengubah source code.",
    solution: "Mengembangkan platform Next.js yang dioptimalkan untuk SEO dan performa tinggi (Vercel deployment), dilengkapi modul dashboard admin terproteksi dengan operasi CRUD lengkap menggunakan Firebase Firestore dan Authentication.",
    keyFeatures: [
      "Custom Admin Dashboard: CRUD lengkap untuk manajemen portofolio layanan, artikel berita, dan testimoni klien.",
      "Role-Based Authentication: Panel admin diamankan dengan autentikasi Firebase Auth.",
      "High-Performance Frontend: Server-side rendering (SSR) Next.js untuk skor Lighthouse optimal dan SEO ramah mesin pencari.",
      "Zero-Downtime Deployment: Dikonfigurasi untuk continuous deployment di Vercel."
    ],
    techStack: ["Next.js", "Firebase Auth", "Cloud Firestore", "Vanilla CSS / Glassmorphism", "Vercel"],
    designAspects: [
      "Gaya visual teknologi modern dengan dark tone, glowing accents, dan tipografi kontemporer.",
      "Desain form admin yang intuitif agar staf non-programmer bisa mengunggah konten dengan mudah.",
      "Responsive layout yang rapi di layar monitor desktop, tablet, dan smartphone."
    ],
    metrics: [
      "Waktu muat halaman (FCP) di bawah 1.2 detik di platform Vercel.",
      "Skor SEO 95+ pada audit Google Lighthouse.",
      "Seluruh data konten dapat diubah secara real-time tanpa build ulang kode."
    ],
    accentColor: "#6366f1",
    featured: true
  },
  {
    id: "perpusda-indramayu-circulation",
    title: "Public Library Catalog & Circulation System",
    category: "UI/UX & Research",
    badge: "Public Sector Project",
    partner: "Dinas Arsip dan Perpustakaan Daerah (Disarpus) Indramayu",
    tagline: "Modernisasi Layanan Peminjaman Buku dan Eksplorasi Koleksi Digital untuk Masyarakat",
    overview: "Solusi antarmuka digital yang memodernisasi cara pemustaka mencari katalog buku, mengecek ketersediaan fisik di rak perpustakaan, dan melakukan alur peminjaman buku secara daring.",
    problem: "Pemustaka sering kali harus datang langsung dan mencari buku secara manual di rak rak besar, hanya untuk menemukan bahwa buku yang dicari sedang dipinjam orang lain atau rusak.",
    solution: "Merancang desain sistem antarmuka berbasis Figma yang ramah bagi segala usia warga, lalu mengimplementasikannya ke dalam web berbasis Laravel dengan fitur pencarian real-time, detail buku lengkap, dan reservasi peminjaman.",
    keyFeatures: [
      "Smart Catalog Search: Filter berdasarkan judul, penulis, nomor rak (DDC), dan ketersediaan stok fisik.",
      "Detailed Book Dossier: Tampilan sinopsis buku, informasi penerbitan, dan status ketersediaan secara visual.",
      "Multi-Step Borrowing Flow: Alur peminjaman terstruktur dengan batas waktu peminjaman dan notifikasi pengembalian.",
      "Accessible Design for Public: Kontras warna dan ukuran teks dioptimalkan untuk kenyamanan membaca publik umum."
    ],
    techStack: ["Laravel", "Figma Design System", "HTML5 / Semantic CSS", "JavaScript ES6+", "MySQL"],
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
    accentColor: "#f59e0b",
    featured: true
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "UI/UX & Product Design",
    description: "Keahlian riset kebutuhan pengguna, arsitektur informasi, dan perancangan antarmuka siap implementasi.",
    skills: [
      { name: "Figma (Auto-layout & Components)", level: "Advanced", icon: "🎨" },
      { name: "Design System & Tokens", level: "Intermediate", icon: "📐" },
      { name: "User Flow & Wireframing", level: "Advanced", icon: "🗺️" },
      { name: "Interactive Prototyping", level: "Advanced", icon: "⚡" },
      { name: "Heuristic Evaluation & Usability", level: "Intermediate", icon: "🔍" }
    ]
  },
  {
    title: "Frontend Engineering",
    description: "Menerjemahkan rancangan visual menjadi kode yang bersih, cepat, modular, dan mudah dirawat.",
    skills: [
      { name: "Next.js (App Router & SSR/SSG)", level: "Advanced", icon: "▲" },
      { name: "React.js & Hooks Lifecycle", level: "Advanced", icon: "⚛️" },
      { name: "React Native / Expo", level: "Intermediate", icon: "📱" },
      { name: "TypeScript & Modern JavaScript", level: "Intermediate", icon: "📘" },
      { name: "Modern CSS (Flexbox, Grid, Tokens)", level: "Advanced", icon: "✨" },
      { name: "REST API Integration & State", level: "Advanced", icon: "🔌" }
    ]
  },
  {
    title: "Tools, Delivery & Soft Skills",
    description: "Komunikasi profesional lintas tim dan pemahaman workflow industri nyata.",
    skills: [
      { name: "Git & GitHub Collaboration", level: "Intermediate", icon: "🐙" },
      { name: "Vercel Cloud Deployment", level: "Intermediate", icon: "🚀" },
      { name: "Firebase (Auth & Firestore)", level: "Intermediate", icon: "🔥" },
      { name: "Stakeholder Communication", level: "High", icon: "💬" },
      { name: "User Empathy & Presentation", level: "High", icon: "🎯" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "Pengalaman Magang Kuliah",
    role: "Frontend Developer Intern",
    organization: "CV. Indokoding",
    type: "Internship",
    description: "Bertanggung jawab dalam pengembangan antarmuka website profil perusahaan dan aplikasi mobile manajemen kantor internal, bekerja berdampingan dengan tim engineer dan stakeholder.",
    achievements: [
      "Mengembangkan website profil perusahaan dengan Next.js dan dashboard CMS berbasis Firebase.",
      "Merancang antarmuka di Figma dan membangun aplikasi mobile manajemen karyawan (reimburse & lembur) menggunakan Expo.",
      "Mengurangi diskrepansi desain ke kode dengan menerapkan komponen UI yang terstandarisasi."
    ]
  },
  {
    period: "Proyek Kolaborasi Instansi",
    role: "UI/UX Designer & Web Developer",
    organization: "Disarpus (Perpustakaan Daerah) Kab. Indramayu",
    type: "Academic",
    description: "Mengembangkan solusi sistem sirkulasi peminjaman buku dan katalog digital untuk meningkatkan efisiensi operasional perpustakaan daerah.",
    achievements: [
      "Membuat prototype Figma end-to-end berdasarkan observasi alur kerja staf perpustakaan.",
      "Mengimplementasikan antarmuka katalog buku interaktif berbasis Laravel dengan fokus pada aksesibilitas publik."
    ]
  },
  {
    period: "Tugas Akhir Pendidikan D3",
    role: "Lead Researcher, UI/UX & Frontend Engineer",
    organization: "Mitra SMP Daerah (Program D3 Teknik Informatika)",
    type: "Academic",
    description: "Membangun sistem pendukung keputusan rekomendasi jurusan SMA/SMK berbasis web untuk membantu pemetaan minat dan bakat siswa kelas IX.",
    achievements: [
      "Mendesain form kuis asesmen bertahap yang interaktif dan mudah diakses ratusan siswa.",
      "Membangun dashboard visualisasi data menggunakan Next.js yang mengintegrasikan hasil perhitungan K-Means dari backend Django."
    ]
  }
];
