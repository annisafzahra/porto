'use client';

import React from 'react';

export default function ValuePillar() {
  const pillars = [
    {
      title: "Tanpa Miskomunikasi 'Design-to-Dev'",
      tag: "Painless Handoff",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3"></circle>
          <circle cx="6" cy="6" r="3"></circle>
          <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
          <line x1="6" y1="9" x2="6" y2="21"></line>
        </svg>
      ),
      description: "Sering kali desain Figma diabaikan oleh developer karena dianggap rumit. Dengan pengalaman ganda di Figma dan Next.js, saya membangun komponen web dan mobile yang 100% presisi dengan desain awal.",
      accent: "#00f2fe"
    },
    {
      title: "UI/UX yang Berpijak pada Masalah Riil",
      tag: "Human-Centered",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      description: "Bukan sekadar hiasan visual. Setiap tombol, alur kuis k-means siswa, pengajuan reimburse, dan katalog buku dirancang berdasarkan observasi kebutuhan pengguna lapangan.",
      accent: "#10b981"
    },
    {
      title: "Arsitektur Komponen Bersih & Modular",
      tag: "Maintainable Code",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      description: "Memanfaatkan kekuatan Next.js, React Hooks, dan React Native untuk membuat antarmuka yang cepat dimuat, mudah di-scale, dan siap diintegrasikan dengan REST API backend.",
      accent: "#a855f7"
    }
  ];

  return (
    <section className="section-spacing value-section" id="philosophy">
      <div className="container">
        <div className="section-header">
          <div className="section-pill">Pendekatan Kerja</div>
          <h2 className="section-title">
            Mengapa <span className="gradient-text">Design Engineer</span>?
          </h2>
          <p className="section-description">
            Di antara desainer murni yang tidak mengerti batasan kode dan backend developer yang tidak memperhatikan kenyamanan visual pengguna, 
            saya hadir sebagai jembatan yang menyelesaikan produk dari konsep hingga live di browser.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <div key={index} className="pillar-card glass-card">
              <div className="pillar-header">
                <div 
                  className="pillar-icon"
                  style={{ color: pillar.accent, background: `${pillar.accent}15` }}
                >
                  {pillar.icon}
                </div>
                <span className="pillar-tag">{pillar.tag}</span>
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Callout Box */}
        <div className="comparison-box">
          <div className="comparison-col">
            <div className="comp-badge comp-design">🎨 Sisi UI/UX Design</div>
            <h4>Riset & Prototyping</h4>
            <ul>
              <li>Figma Auto-Layout & Design Systems</li>
              <li>Wireframing alur kuis, form & transaksi</li>
              <li>Empati pengguna & observasi kebutuhan instansi</li>
            </ul>
          </div>

          <div className="comp-bridge">
            <span className="bridge-pill">Integrated</span>
            <div className="bridge-icon">⇄</div>
          </div>

          <div className="comparison-col">
            <div className="comp-badge comp-code">💻 Sisi Frontend Code</div>
            <h4>Implementasi Nyata</h4>
            <ul>
              <li>Next.js App Router & Dynamic Routing</li>
              <li>React Native (Expo) untuk Aplikasi Mobile</li>
              <li>Koneksi REST API & Manajemen State Klien</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .value-section {
          position: relative;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 3.5rem;
        }

        .pillar-card {
          padding: 2.2rem 1.8rem;
          display: flex;
          flex-direction: column;
        }

        .pillar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.4rem;
        }

        .pillar-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 12px;
        }

        .pillar-tag {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .pillar-title {
          font-size: 1.25rem;
          margin-bottom: 0.85rem;
          line-height: 1.35;
        }

        .pillar-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .comparison-box {
          background: rgba(13, 18, 29, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          backdrop-filter: blur(12px);
        }

        .comparison-col {
          flex: 1;
        }

        .comp-badge {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.3rem 0.8rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.85rem;
        }

        .comp-design {
          background: rgba(0, 242, 254, 0.12);
          color: var(--accent-cyan);
          border: 1px solid rgba(0, 242, 254, 0.3);
        }

        .comp-code {
          background: rgba(16, 185, 129, 0.12);
          color: var(--accent-emerald);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .comparison-col h4 {
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
        }

        .comparison-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .comparison-col li {
          font-size: 0.92rem;
          color: var(--text-secondary);
          position: relative;
          padding-left: 1.25rem;
        }

        .comparison-col li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--accent-cyan);
          font-weight: bold;
        }

        .comp-bridge {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .bridge-pill {
          font-size: 0.72rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.08);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          color: var(--text-muted);
        }

        .bridge-icon {
          font-size: 1.8rem;
          color: var(--accent-cyan);
          line-height: 1;
        }

        @media (max-width: 900px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }

          .comparison-box {
            flex-direction: column;
            text-align: left;
            padding: 1.75rem;
          }

          .comp-bridge {
            transform: rotate(90deg);
            margin: 0.5rem 0;
          }
        }
      `}</style>
    </section>
  );
}
