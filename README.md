# Portfolio Resmi — Annisa Fathimatuz Zahra (A.Md.Kom)
**Design Engineer / Frontend Developer (UI/UX Focused)**

Repositori ini berisi kode sumber website portofolio interaktif yang dibangun menggunakan **Next.js (App Router)** dan **Vanilla CSS Modern** dengan standar industri. Dirancang khusus untuk memamerkan 4 studi kasus nyata, menonjolkan irisan antara riset desain Figma dan implementasi kode siap produksi, serta dioptimalkan untuk deployment instan dan gratis di **Vercel**.

---

## 🌟 Fitur Utama Website Portofolio
1. **Value Proposition Tajam:** Mengukuhkan posisi sebagai *Design Engineer* (Frontend Developer yang menguasai UI/UX Figma to Code).
2. **4 Featured Real-World Case Studies:**
   - **Hero Project:** SPK Rekomendasi Jurusan SMA/SMK berbasis K-Means Clustering (Mitra SMP Daerah).
   - **Mobile Project:** Employee Self-Service & Automated Payroll App (CV. Indokoding / Expo & Django).
   - **Web & CMS Project:** Corporate Web Platform & Headless CMS (CV. Indokoding / Next.js & Firebase).
   - **Public Sector Project:** Public Library Catalog & Circulation System (Disarpus Kab. Indramayu / Laravel & Figma).
3. **Interactive Project Modal:** Menampilkan detail masalah, solusi, fitur engineering, riset UI/UX, dan dampak terukur dari setiap proyek.
4. **No-Fake-Metric Skills Matrix:** Menampilkan keahlian nyata berdasarkan ranah kerja (UI/UX, Frontend, Tools & Workflow) tanpa progress bar persentase semu.
5. **Interactive Contact Section:** Fitur salin email instan ke clipboard dan formulir pesan langsung.

---

## 🛠️ Cara Mengubah Data Portofolio
Semua data teks, proyek, kontak, dan riwayat terpusat di satu file:
👉 [`src/data/portfolioData.ts`](./src/data/portfolioData.ts)

Cukup ubah informasi di file tersebut (misal alamat email, link GitHub, link LinkedIn, atau tautan demo proyek), maka seluruh tampilan website akan terbarui secara otomatis.

---

## 🚀 Menjalankan Secara Lokal

```bash
# Menjalankan server pengembangan
npm run dev

# Membuka di browser
http://localhost:3000
```

---

## 📦 Build & Validasi Produksi

```bash
# Uji kompilasi statis
npm run build
```

---

## 🌐 Cara Deploy ke Vercel (Gratis & Cepat)
1. Buat repositori baru di akun GitHub Anda dan push folder ini:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit portfolio Annisa"
   git branch -M main
   git remote add origin https://github.com/<username-anda>/<nama-repo>.git
   git push -u origin main
   ```
2. Buka [Vercel](https://vercel.com/) dan login menggunakan akun GitHub Anda.
3. Klik **"Add New..."** → **"Project"**, pilih repositori portofolio ini.
4. Klik **"Deploy"**. Dalam waktu kurang dari 1 menit, portofolio Anda sudah online dengan domain kustom gratis dari Vercel (misal: `annisa-portfolio.vercel.app`).
