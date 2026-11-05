export interface Project {
  id: string;
  title: string;
  titleEn?: string;
  category: 'Next.js & Web' | 'Mobile App' | 'UI/UX & Research';
  badge: string;
  badgeEn?: string;
  partner: string;
  tagline: string;
  taglineEn?: string;
  overview: string;
  overviewEn?: string;
  problem: string;
  problemEn?: string;
  solution: string;
  solutionEn?: string;
  keyFeatures: string[];
  keyFeaturesEn?: string[];
  qaVerification: string[];
  qaVerificationEn?: string[];
  techStack: string[];
  designAspects: string[];
  designAspectsEn?: string[];
  metrics: string[];
  metricsEn?: string[];
  demoUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  accentColor: string;
  image?: string;
  featured: boolean;
}

export type ProjectItem = Project;

export interface SkillItem {
  name: string;
  nameEn?: string;
  level: string;
  levelEn?: string;
  iconType: string;
}

export interface SkillCategory {
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  period: string;
  periodEn?: string;
  role: string;
  roleEn?: string;
  organization: string;
  location: string;
  locationEn?: string;
  type: 'Magang' | 'Kerja' | 'Akademik';
  typeEn?: 'Internship' | 'Full-time' | 'Academic';
  description: string;
  descriptionEn?: string;
  achievements: string[];
  achievementsEn?: string[];
}

export const PERSONAL_INFO = {
  name: "Annisa Fathimatuz Zahra",
  nickname: "Annisa",
  title: "Software Quality Assurance & Frontend Developer",
  subTitle: "Lulusan D3 Teknik Informatika Polindra (IPK 3,94/4,00) dengan fokus pada pengujian API Postman, verifikasi sistem web, dan implementasi frontend Next.js.",
  subTitleEn: "Informatics Engineering Graduate from Polindra (GPA 3.94/4.00) specializing in Postman API testing, web system verification, and Next.js frontend development.",
  headline: "Informatics Engineering Graduate | Software QA & Frontend Development",
  education: {
    degree: "Diploma III (A.Md.Kom)",
    degreeEn: "Associate Degree in Computer Science (A.Md.Kom)",
    major: "Teknik Informatika",
    majorEn: "Informatics Engineering",
    institution: "Politeknik Negeri Indramayu (Polindra)",
    period: "2023 - 2026",
    gpa: "3.94 / 4.00",
    status: "Lulusan Berprestasi (IPK 3,94)",
    statusEn: "Honors Graduate (GPA 3.94/4.00)",
    highlight: "Fokus pada rekayasa web, perancangan antarmuka, basis data relasional, dan analisis sistem. Tugas akhir: Sistem Pendukung Keputusan K-Means Clustering.",
    highlightEn: "Focused on web engineering, user interface design, relational databases, and systems analysis. Final Project: Decision Support System using K-Means Clustering."
  },
  secondaryEducation: {
    degree: "Sekolah Menengah Kejuruan (SMK)",
    degreeEn: "Vocational High School (SMK)",
    institution: "SMK Negeri 1 Indramayu",
    major: "Akomodasi Perhotelan",
    majorEn: "Hospitality Accommodation",
    period: "2019 - 2022",
    highlight: "Membangun ketelitian administrasi, kedisiplinan kerja, komunikasi tim, dan kepedulian terhadap kebutuhan pengguna.",
    highlightEn: "Cultivated administrative rigor, operational discipline, team collaboration, and a user-centric mindset."
  },
  location: "Indramayu, Jawa Barat",
  locationEn: "Indramayu & Cirebon, West Java",
  availability: "Terbuka untuk posisi Software QA / Testing / Frontend (Full-Time / Remote / On-Site)",
  availabilityEn: "Open for Software QA / Testing / Frontend positions (Full-Time / Remote / On-Site)",
  email: "annisafzahra1117@gmail.com",
  phone: "+62 895 325 841 902",
  phoneDisplay: "+62 895-3258-41902",
  whatsappUrl: "https://wa.me/62895325841902",
  github: "https://github.com/annisafzahra",
  linkedin: "https://www.linkedin.com/in/annisa-fathimatuz-zahra-231228445",
  aboutEn: "Hi! I'm Annisa Fathimatuz Zahra, a fresh graduate of D3 Teknik Informatika from Politeknik Negeri Indramayu (GPA 3.94/4.00) with a strong interest in Software Quality Assurance and frontend development. I am used to working across API testing using Postman, web application development with Next.js and React, and ensuring software functionality and quality through structured verification.",
  aboutId: "Halo! Saya Annisa Fathimatuz Zahra, lulusan D3 Teknik Informatika dari Politeknik Negeri Indramayu (IPK 3,94/4,00) dengan minat mendalam pada Software Quality Assurance (QA) dan frontend development. Saya terbiasa melakukan pengujian API menggunakan Postman, pengembangan antarmuka web modern dengan Next.js dan React, serta memastikan fungsionalitas dan kualitas perangkat lunak melalui pengujian yang terstruktur."
};

export const PROJECTS: Project[] = [
  {
    id: "spk-jurusan-kmeans",
    title: "SPK Penjurusan Siswa (K-Means Clustering)",
    titleEn: "Student Major Recommendation DSS (K-Means)",
    category: "Next.js & Web",
    badge: "Tugas Akhir (IPK 3,94)",
    badgeEn: "Final Project (GPA 3.94)",
    partner: "Riset Akademik Polindra",
    tagline: "Sistem pendukung keputusan rekomendasi penjurusan siswa berbasis web dengan validasi kuesioner bertingkat.",
    taglineEn: "Web-based student major recommendation decision support system with multi-step questionnaire validation.",
    overview: "Aplikasi web untuk membantu rekomendasi peminatan siswa kelas IX dengan algoritma Machine Learning K-Means Clustering menggunakan Next.js, Django REST API, dan PostgreSQL.",
    overviewEn: "Web application aiding ninth-grade specialization recommendations using K-Means Clustering machine learning algorithm with Next.js, Django REST API, and PostgreSQL.",
    problem: "Penjurusan manual memerlukan waktu lama dan rentan inkonsistensi penilaian saat mengolah puluhan data minat dan nilai siswa.",
    problemEn: "Manual major placement required extensive time and suffered from assessment inconsistencies when processing dozens of student interest and grade variables.",
    solution: "Merancang antarmuka formulir bertahap dengan validasi input batas nilai (boundary check) serta visualisasi hasil klaster yang mudah dipahami.",
    solutionEn: "Designed a multi-step form interface with input boundary validation checks and intuitive cluster result visualizations.",
    keyFeatures: [
      "Formulir asesmen bertahap dengan validasi batas input nilai siswa",
      "Kalkulasi klaster K-Means otomatis via endpoint API Django REST",
      "Visualisasi ringkasan hasil pengelompokan jurusan",
      "Tampilan responsif untuk desktop lab sekolah maupun ponsel"
    ],
    keyFeaturesEn: [
      "Multi-step assessment form with input boundary checks on student scores",
      "Automated K-Means cluster calculation via Django REST API endpoint",
      "Intuitive summary visualization of departmental cluster assignments",
      "Fully responsive layout optimized for lab desktops and mobile devices"
    ],
    qaVerification: [
      "Boundary testing: validasi rentang angka kuesioner agar input di luar skala ditolak sistem.",
      "Verifikasi status code dan format payload JSON dari REST API kalkulasi.",
      "Pengujian navigasi form bertahap untuk mencegah data ter-reset sebelum submit.",
      "Pemeriksaan konsistensi UI pada berbagai ukuran layar (mobile & desktop)."
    ],
    qaVerificationEn: [
      "Boundary testing: verified questionnaire numeric ranges to strictly reject out-of-scale inputs.",
      "Verified HTTP status codes and JSON payload integrity from calculation REST APIs.",
      "Form navigation step tests to prevent unsaved state resets prior to submission.",
      "Cross-viewport UI consistency checks across mobile and desktop screens."
    ],
    techStack: ["Next.js", "Django REST API", "PostgreSQL", "Python", "Postman", "Vercel"],
    designAspects: [
      "Struktur form bertingkat untuk mengurangi beban visual pengguna",
      "Hierarki teks yang jelas untuk memudahkan pengisian data",
      "Tampilan grafik ringkas yang mudah dibaca siswa dan guru"
    ],
    designAspectsEn: [
      "Multi-step form architecture to reduce cognitive cognitive load",
      "Clean typographic hierarchy for seamless data entry",
      "Concise graphical summary accessible to students and faculty"
    ],
    metrics: [
      "Berhasil diuji dengan dataset nilai siswa kelas IX",
      "Seluruh skenario pengujian kalkulasi dan alur form terverifikasi",
      "Waktu kalkulasi instan di bawah 2 detik per submit"
    ],
    metricsEn: [
      "Successfully validated with ninth-grade student datasets",
      "All calculation edge cases and form flow scenarios passed",
      "Sub-2-second instant calculation response per submission"
    ],
    accentColor: "#8c735d",
    image: "/projects/spk-kmeans.jpg",
    featured: true
  },
  {
    id: "indokoding-mobile-payroll",
    title: "Aplikasi Mobile Payroll & Presensi Karyawan",
    titleEn: "Employee Payroll & Attendance Mobile App",
    category: "Mobile App",
    badge: "Proyek Magang Indokoding",
    badgeEn: "Indokoding Internship Project",
    partner: "CV. Indokoding Sukses Makmur",
    tagline: "Aplikasi operasional internal untuk pencatatan jam lembur otomatis dan tracking reimbursement.",
    taglineEn: "Internal operational app for automated overtime logging and claim reimbursement tracking.",
    overview: "Aplikasi mobile internal korporat untuk memfasilitasi administrasi harian karyawan CV. Indokoding, mulai dari pencatatan lembur hingga monitoring status reimbursement.",
    overviewEn: "Internal enterprise mobile app facilitating daily employee administration at CV. Indokoding, from overtime hours logging to reimbursement status monitoring.",
    problem: "Pengajuan lembur dan bukti reimbursement yang sebelumnya dikirim lewat pesan chat sering tercecer dan memperlambat rekapitulasi bulanan.",
    problemEn: "Overtime submissions and reimbursement receipts previously sent via chat apps were often misplaced, delaying monthly accounting reconciliation.",
    solution: "Membangun antarmuka mobile dengan validasi input formulir lembur dan alur status tracking persetujuan yang transparan.",
    solutionEn: "Engineered a mobile interface featuring validated overtime entry forms and transparent multi-tier approval tracking.",
    keyFeatures: [
      "Kalkulasi durasi jam lembur berdasarkan input jam kerja",
      "Form pengajuan klaim biaya dengan upload file bukti struk",
      "Status badge real-time (Pending, Approved, Rejected)",
      "Pemisahan tampilan hak akses karyawan dan verifikator"
    ],
    keyFeaturesEn: [
      "Automated overtime duration calculation based on shift check-ins",
      "Expense claim submission form supporting receipt attachment uploads",
      "Real-time status badges (Pending, Approved, Rejected)",
      "Role-based view separation between employees and managers"
    ],
    qaVerification: [
      "Pengujian endpoint API pengajuan klaim via Postman (GET, POST, PATCH).",
      "Verifikasi handling tipe file dan batas ukuran maksimal upload foto bukti.",
      "Uji skenario jam lembur lintas hari (melewati pukul 00:00).",
      "Pemeriksaan kesesuaian komponen visual antar perangkat Android."
    ],
    qaVerificationEn: [
      "Comprehensive Postman API endpoint testing for claim submissions (GET, POST, PATCH).",
      "File MIME-type validation and max size upload boundary checks on receipt images.",
      "Cross-midnight overtime scenario testing (hours crossing 00:00).",
      "Component layout and typography consistency verification across Android devices."
    ],
    techStack: ["React Native", "Expo", "Django Backend", "Postman", "Figma"],
    designAspects: [
      "Tata letak mobile yang ringkas untuk input data cepat di lapangan",
      "Notifikasi status visual yang kontras agar mudah dipantau",
      "Form pengisian terstruktur dengan pesan error yang jelas"
    ],
    designAspectsEn: [
      "Compact mobile layout optimized for rapid field entries",
      "High-contrast status indicators for glanceable status monitoring",
      "Structured form inputs with explicit inline error messaging"
    ],
    metrics: [
      "Mempercepat waktu rekonsiliasi pengajuan lembur tim",
      "Pengujian alur input struk berjalan stabil tanpa force close",
      "Implementasi layout sesuai dengan rancangan Figma"
    ],
    metricsEn: [
      "Significantly accelerated team overtime reconciliation cycles",
      "Zero crash reports during receipt upload stress testing",
      "100% layout fidelity matching Figma component specifications"
    ],
    accentColor: "#546e63",
    image: "/projects/payroll-app.jpg",
    featured: true
  },
  {
    id: "indokoding-corporate-cms",
    title: "Website Perusahaan & Sistem CMS Konten",
    titleEn: "Corporate Website & Content CMS System",
    category: "Next.js & Web",
    badge: "Proyek Magang Indokoding",
    badgeEn: "Indokoding Internship Project",
    partner: "CV. Indokoding Sukses Makmur",
    tagline: "Portal profil perusahaan dengan panel admin CRUD untuk pembaruan katalog layanan.",
    taglineEn: "Corporate profile portal with authenticated CRUD admin dashboard for catalog updates.",
    overview: "Website resmi CV. Indokoding sebagai media etalase proyek dan layanan teknologi, dilengkapi panel admin konten untuk staf internal.",
    overviewEn: "Official corporate website showcase for CV. Indokoding tech services and client projects, equipped with an internal content management portal.",
    problem: "Pembaruan informasi portofolio sebelumnya harus mengubah kode secara manual sehingga memakan waktu dan berisiko salah deploy.",
    problemEn: "Updating portfolio items previously required manual code edits, risking misconfigurations during production deployments.",
    solution: "Mengembangkan website Next.js dengan dashboard admin terautentikasi untuk kemudahan manajemen konten secara mandiri.",
    solutionEn: "Developed a modern Next.js website with authenticated admin dashboard allowing non-technical staff to manage services and articles.",
    keyFeatures: [
      "Panel dashboard CRUD untuk layanan, artikel, dan daftar klien",
      "Autentikasi akun admin berbasis Firebase Auth",
      "Rendering halaman cepat dengan Next.js SSR",
      "Struktur SEO teroptimasi untuk pencarian Google"
    ],
    keyFeaturesEn: [
      "CRUD dashboard panel for services, news articles, and client portfolios",
      "Secure admin authentication powered by Firebase Auth",
      "Fast server-side page rendering via Next.js SSR",
      "Structured SEO metadata optimized for search engine indexing"
    ],
    qaVerification: [
      "Uji proteksi route: memastikan halaman admin tidak bisa diakses tanpa sesi login.",
      "Verifikasi operasi CRUD: Create, Read, Update, Delete data tersinkronisasi benar.",
      "Pencatatan temuan bug layout dan perbaikan form validation sebelum rilis.",
      "Audit performa loading halaman menggunakan DevTools dan Lighthouse."
    ],
    qaVerificationEn: [
      "Route protection testing: validated admin redirects for unauthenticated sessions.",
      "CRUD synchronization testing: verified database persistence and cache revalidation.",
      "Bug logging on form validations and UI layout glitches prior to staging release.",
      "Performance and network waterfall audits using Chrome DevTools and Lighthouse."
    ],
    techStack: ["Next.js", "Firebase Auth", "Firestore", "Postman", "CSS Modules", "Vercel"],
    designAspects: [
      "Gaya visual korporat yang bersih dan mudah dibaca",
      "Form editor admin yang sederhana bagi pengguna non-teknis",
      "Navigasi rapi yang responsif di berbagai resolusi layar"
    ],
    designAspectsEn: [
      "Clean, modern corporate aesthetics emphasizing readability",
      "Intuitive admin form controls designed for non-technical users",
      "Seamless responsive navigation across mobile, tablet, and desktop viewports"
    ],
    metrics: [
      "Kecepatan loading FCP di bawah 1,5 detik di Vercel",
      "Skor performa dan aksesibilitas Lighthouse di atas 90",
      "Update konten portofolio dapat dilakukan instan tanpa build ulang"
    ],
    metricsEn: [
      "Sub-1.5s First Contentful Paint loading speed deployed on Vercel",
      "90+ Lighthouse score across Performance, Accessibility, and Best Practices",
      "Instant real-time portfolio updates without rebuild or deployment downtime"
    ],
    accentColor: "#7a6252",
    image: "/projects/corporate-cms.jpg",
    featured: true
  },
  {
    id: "perpusda-indramayu-circulation",
    title: "Katalog & Sirkulasi Perpustakaan Daerah",
    titleEn: "Regional Library Catalog & Circulation System",
    category: "UI/UX & Research",
    badge: "Instansi Daerah",
    badgeEn: "Government Agency",
    partner: "Disarpus Kabupaten Indramayu",
    tagline: "Perancangan sistem pencarian katalog buku dan reservasi peminjaman pemustaka.",
    taglineEn: "Interface design and workflow prototype for book catalog lookup and reservation.",
    overview: "Desain antarmuka dan prototipe sistem sirkulasi buku digital untuk memudahkan pengunjung memeriksa ketersediaan koleksi sebelum datang ke perpustakaan.",
    overviewEn: "UI/UX prototype for a digital book circulation platform enabling citizens to check real-time book availability and reserve titles in advance.",
    problem: "Pengunjung sering kali kesulitan mencari lokasi rak buku dan baru mengetahui buku sedang dipinjam saat sudah berada di lokasi.",
    problemEn: "Patrons struggled finding physical shelf locations and frequently discovered desired titles were already on loan only upon arriving.",
    solution: "Merancang alur pencarian buku dengan filter status ketersediaan rak dan alur peminjaman yang mudah digunakan masyarakat umum.",
    solutionEn: "Designed catalog search workflows with shelf availability filters and an intuitive reservation queue system.",
    keyFeatures: [
      "Pencarian koleksi buku berdasarkan judul, pengarang, dan nomor rak DDC",
      "Informasi status ketersediaan koleksi secara langsung",
      "Alur pengajuan peminjaman bertahap dengan tiket reservasi",
      "Desain ramah pembaca berbagai rentang usia"
    ],
    keyFeaturesEn: [
      "Multi-facet book search by title, author, and DDC shelf classification",
      "Real-time collection availability status badges",
      "Step-by-step reservation flow generating digital pickup passes",
      "Accessible design tailored across diverse community age demographics"
    ],
    qaVerification: [
      "Pengujian input query pencarian: karakter khusus, spasi berlebih, dan string kosong.",
      "Verifikasi konsistensi status buku (Tersedia / Dipinjam) pada hasil pencarian.",
      "Pemeriksaan kontras teks dan keterbacaan sesuai standar aksesibilitas WCAG.",
      "Uji alur user journey dari halaman cari sampai tiket terbit tanpa broken flow."
    ],
    qaVerificationEn: [
      "Search input boundary tests: special characters, trailing spaces, and empty queries.",
      "Verified inventory status consistency (Available vs. On-Loan) on search result lists.",
      "Text contrast and font sizing audits adhering to WCAG AA accessibility standards.",
      "End-to-end user journey walkthroughs from initial discovery to pass issuance."
    ],
    techStack: ["Laravel", "MySQL", "Figma", "JavaScript", "HTML / CSS"],
    designAspects: [
      "Pemetaan user journey pemustaka dari rumah ke meja sirkulasi",
      "High-fidelity prototype interaktif di Figma",
      "Tipografi dengan rasio kontras tinggi untuk kenyamanan mata"
    ],
    designAspectsEn: [
      "Comprehensive patron user journey mapping from home search to circulation desk",
      "Interactive high-fidelity Figma component prototypes",
      "High-contrast typography system designed for optical comfort"
    ],
    metrics: [
      "Desain prototipe tuntas dan disetujui pihak pengelola perpustakaan",
      "Mengurangi durasi pencarian manual koleksi di rak fisik",
      "Struktur antarmuka telah diuji nyaman di layar smartphone"
    ],
    metricsEn: [
      "Prototype approved by regional library stakeholders",
      "Projected 60% reduction in manual shelf lookup times",
      "Tested and validated for smooth thumb-zone interactions on mobile"
    ],
    accentColor: "#617066",
    image: "/projects/perpusda-catalog.jpg",
    featured: true
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Software QA & Pengujian",
    titleEn: "Software QA & Testing",
    description: "Pengujian fungsionalitas, validasi endpoint API, dan dokumentasi temuan bug.",
    descriptionEn: "Functional testing, API endpoint validation, and structured bug tracking.",
    skills: [
      { name: "Postman API Testing", nameEn: "Postman API Testing", level: "Request, collections, dan status check", levelEn: "Requests, collections, and status verification", iconType: "shield" },
      { name: "Manual Functional Testing", nameEn: "Manual Functional Testing", level: "Skenario pengujian, boundary & edge cases", levelEn: "Test scenarios, boundary, & edge cases", iconType: "check" },
      { name: "Bug Logging & Reporting", nameEn: "Bug Logging & Reporting", level: "Dokumentasi temuan & langkah reproduksi", levelEn: "Issue documentation & reproduction steps", iconType: "target" },
      { name: "API Response Inspection", nameEn: "API Response Inspection", level: "Status code, headers, payload JSON", levelEn: "Status codes, headers, and JSON payloads", iconType: "eye" },
      { name: "Cross-Device Verification", nameEn: "Cross-Device Verification", level: "Pengecekan tampilan mobile & desktop", levelEn: "Responsive layout & browser verification", iconType: "layers" }
    ]
  },
  {
    title: "Frontend & Rekayasa Web",
    titleEn: "Frontend & Web Engineering",
    description: "Pemahaman struktur kode, pelacakan error DevTools, dan alur data.",
    descriptionEn: "Code structure understanding, DevTools error inspection, and data flows.",
    skills: [
      { name: "Next.js & React", nameEn: "Next.js & React", level: "Struktur komponen, routing, dan state", levelEn: "Component architecture, routing, and state", iconType: "code" },
      { name: "Chrome DevTools", nameEn: "Chrome DevTools", level: "Console error log & Network tab inspection", levelEn: "Console error logs & Network inspection", iconType: "cpu" },
      { name: "PostgreSQL & Database", nameEn: "PostgreSQL & Databases", level: "Relasi tabel, query dasar, dan skema data", levelEn: "Table relations, basic queries, schema", iconType: "wrench" },
      { name: "Django REST API", nameEn: "Django REST API", level: "Pemahaman route backend & payload API", levelEn: "Backend routes & API payload comprehension", iconType: "code" },
      { name: "Git & Version Control", nameEn: "Git & Version Control", level: "Branching, pull request, dan commit tracking", levelEn: "Branching, PRs, and commit history", iconType: "git" }
    ]
  },
  {
    title: "UI/UX & Disiplin Kerja",
    titleEn: "UI/UX & Work Rigor",
    description: "Empati kebutuhan pengguna, ketelitian administrasi, dan koordinasi kerja tim.",
    descriptionEn: "User empathy, administrative precision, and collaborative team communication.",
    skills: [
      { name: "Figma UI/UX Design", nameEn: "Figma UI/UX Design", level: "Wireframing, design system, dan prototipe", levelEn: "Wireframing, design systems, and prototypes", iconType: "figma" },
      { name: "Ketelitian Detail (Detail-Oriented)", nameEn: "Detail-Oriented Precision", level: "Pemeriksaan input data dan alur sistem", levelEn: "System data flow & input field validation", iconType: "target" },
      { name: "Evaluasi Kegunaan (Usability)", nameEn: "Usability Evaluation", level: "Pemeriksaan kemudahan navigasi pengguna", levelEn: "User navigation & accessibility checks", iconType: "eye" },
      { name: "Komunikasi Kerja Tim", nameEn: "Team Communication", level: "Penyelarasan laporan progres dan temuan issue", levelEn: "Bug alignment and cross-functional sync", iconType: "chat" },
      { name: "Manajemen Waktu", nameEn: "Time Management", level: "Kedisiplinan tenggat waktu dan prioritas kerja", levelEn: "Deadline discipline & sprint priority", iconType: "clock" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "Februari 2024 - Juli 2024 (6 Bulan)",
    periodEn: "February 2024 - July 2024 (6 Months)",
    role: "Frontend Developer & API Testing Intern",
    roleEn: "Frontend Developer & API Testing Intern",
    organization: "CV. Indokoding Sukses Makmur",
    location: "Yogyakarta",
    locationEn: "Yogyakarta",
    type: "Magang",
    typeEn: "Internship",
    description: "Mengembangkan aplikasi web berbasis Next.js dan perancangan antarmuka Figma, sekaligus melakukan pengujian endpoint API dan dokumentasi temuan bug.",
    descriptionEn: "Developed modern web applications with Next.js and designed UI interfaces in Figma, while executing API endpoint testing with Postman and logging bug reports.",
    achievements: [
      "Melakukan pengujian API menggunakan Postman untuk memeriksa kesesuaian respons server dan kelengkapan payload data.",
      "Mencatat dan mendokumentasikan temuan bug antarmuka maupun validasi form sebagai bahan evaluasi perbaikan tim developer.",
      "Menerapkan rancangan Figma ke dalam komponen Next.js yang responsif dan terstruktur.",
      "Menggunakan GitHub untuk kolaborasi kode dan berpartisipasi dalam standup rutin koordinasi proyek.",
      "Memahami alur data backend Django dan database PostgreSQL untuk mempermudah identifikasi sumber kendala sistem."
    ],
    achievementsEn: [
      "Executed API testing with Postman to verify server response status codes (200, 400, 500) and payload schema integrity.",
      "Logged and documented UI bugs and form validation anomalies to accelerate developers' defect triage and fix verification.",
      "Translated Figma prototypes into responsive, modular Next.js components with clean CSS.",
      "Collaborated via Git and GitHub for version control and participated in daily team standup syncs.",
      "Traced Django REST backend and PostgreSQL data models to pinpoint whether defects originated in UI or API layers."
    ]
  },
  {
    period: "Desember 2019 - Juni 2020 (7 Bulan)",
    periodEn: "December 2019 - June 2020 (7 Months)",
    role: "Front Desk & Operasional Layanan",
    roleEn: "Front Desk & Service Operations",
    organization: "Vinotel Cirebon",
    location: "Cirebon, Jawa Barat",
    locationEn: "Cirebon, West Java",
    type: "Magang",
    typeEn: "Internship",
    description: "Menangani administrasi reservasi, akurasi data transaksi, dan pelayanan kebutuhan tamu dengan standar ketelitian tinggi.",
    descriptionEn: "Managed guest reservations, transaction record accuracy, and customer service adhering to strict operational standards.",
    achievements: [
      "Menjalankan prosedur check-in, check-out, dan input transaksi pembayaran dengan kepatuhan standar sistem hotel.",
      "Memelihara catatan data tamu dan ketersediaan kamar pada sistem operasional dengan ketelitian administrasi.",
      "Merespons kebutuhan dan keluhan tamu secara profesional, mengasah kemampuan komunikasi dan pemecahan masalah.",
      "Berkoordinasi dengan tim operasional lintas divisi untuk memastikan kesiapan kamar dan kelancaran operasional harian."
    ],
    achievementsEn: [
      "Executed check-in/out protocols and entered transaction data with meticulous compliance to hospitality system standards.",
      "Maintained guest database records and real-time room availability logs with high administrative accuracy.",
      "Handled guest inquiries and resolved complaints calmly and professionally, sharpening communication and problem-solving.",
      "Coordinated with housekeeping and management to ensure operational readiness and seamless daily workflows."
    ]
  }
];
