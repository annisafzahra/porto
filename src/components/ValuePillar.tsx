'use client';

import React from 'react';

export default function ValuePillar() {
  const pillars = [
    {
      tag: "Akademik IT",
      title: "Fondasi Informatika (IPK 3,94)",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      ),
      description: "Lulusan D3 Teknik Informatika Polindra dengan pemahaman pada struktur aplikasi web, manipulasi basis data, dan logika pemrograman yang terarah.",
      accent: "#8a6e54"
    },
    {
      tag: "Pengujian Praktis",
      title: "Pengujian API & Pelaporan Bug",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11l3 3L22 4"></path>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
      ),
      description: "Pengalaman magang 6 bulan melakukan pengujian endpoint menggunakan Postman, validasi respons status code, serta dokumentasi temuan issue sistem klien.",
      accent: "#4f6b5f"
    },
    {
      tag: "Ketelitian Kerja",
      title: "Ketelitian & Empati Pengguna",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      description: "Latar belakang operasional perhotelan melatih kedisiplinan administrasi data, kepatuhan alur kerja, dan kebiasaan melihat sistem dari sudut pandang pemakai.",
      accent: "#705944"
    }
  ];

  return (
    <section className="section-spacing value-section reveal-on-scroll" id="philosophy">
      <div className="container">
        <div className="section-header">
          <div className="section-pill section-pill-dark">Pendekatan Kerja</div>
          <h2 className="section-title section-title-dark">
            Fokus & <span className="gradient-text-light">Karakteristik</span>
          </h2>
          <p className="section-description section-description-dark">
            Menghubungkan pemahaman logika kode frontend, kebiasaan pengujian fungsionalitas sistem, 
            dan ketelitian kerja yang terstruktur.
          </p>
        </div>

        {/* 3 Bento Cards Grid */}
        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <div key={index} className="pillar-card glass-card">
              <div className="pillar-header">
                <div 
                  className="pillar-icon"
                  style={{ color: pillar.accent, background: `${pillar.accent}14` }}
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

        {/* Tech + QA Alignment Box */}
        <div className="comparison-box">
          <div className="comparison-col">
            <div className="comp-badge comp-code">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <span>Pemahaman Frontend</span>
            </div>
            <h4>Analisis Komponen & Console</h4>
            <ul>
              <li>Memahami alur komponen Next.js/React, form state, dan event handler</li>
              <li>Inspeksi Network tab, error logs console, dan struktur data respons JSON</li>
              <li>Membantu mempercepat diagnosa apakah kendala berada di layer UI atau API</li>
            </ul>
          </div>

          <div className="comp-bridge">
            <span className="bridge-pill">Sinergi QA</span>
            <div className="bridge-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </div>

          <div className="comparison-col">
            <div className="comp-badge comp-qa">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <span>Pengujian SQA</span>
            </div>
            <h4>Verifikasi Alur & Integritas Data</h4>
            <ul>
              <li>Pengujian Postman: verifikasi status code (200, 400, 500) dan payload balik</li>
              <li>Pengujian boundary nilai input formulir dan skenario edge-case pengguna</li>
              <li>Penyusunan catatan temuan bug yang runtut untuk mempermudah reproduksi tim dev</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .value-section {
          position: relative;
          background-color: #8a6e54;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .section-pill-dark {
          background: rgba(255, 255, 255, 0.15) !important;
          border: 1px solid rgba(255, 255, 255, 0.28) !important;
          color: #ffffff !important;
        }

        .section-title-dark {
          color: #ffffff !important;
        }

        .gradient-text-light {
          background: linear-gradient(135deg, #ffffff 0%, #f6ebe0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-description-dark {
          color: #f3ede4 !important;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .pillar-card {
          padding: 1.5rem 1.4rem;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 4px 20px rgba(45, 32, 20, 0.15);
        }

        .pillar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .pillar-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 9px;
        }

        .pillar-tag {
          font-size: 0.72rem;
          font-family: var(--font-mono);
          color: var(--accent-taupe-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .pillar-title {
          font-size: 1.12rem;
          margin-bottom: 0.5rem;
          line-height: 1.35;
          color: var(--text-primary);
        }

        .pillar-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .comparison-box {
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: var(--radius-lg);
          padding: 1.8rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          box-shadow: 0 6px 24px rgba(45, 32, 20, 0.16);
        }

        .comparison-col {
          flex: 1;
        }

        .comp-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.76rem;
          font-weight: 700;
          padding: 0.25rem 0.7rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.65rem;
        }

        .comp-code {
          background: var(--accent-taupe-soft);
          color: var(--accent-taupe-dark);
          border: 1px solid rgba(140, 115, 93, 0.25);
        }

        .comp-qa {
          background: var(--accent-sage-soft);
          color: var(--accent-sage-dark);
          border: 1px solid rgba(84, 110, 99, 0.25);
        }

        .comparison-col h4 {
          font-size: 1.05rem;
          margin-bottom: 0.6rem;
          color: var(--text-primary);
        }

        .comparison-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .comparison-col li {
          font-size: 0.86rem;
          color: var(--text-secondary);
          position: relative;
          padding-left: 1.15rem;
          line-height: 1.5;
        }

        .comparison-col li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.55rem;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent-taupe);
        }

        .comp-bridge {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          padding: 0 0.5rem;
        }

        .bridge-pill {
          font-size: 0.7rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          background: var(--bg-secondary);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
          color: var(--text-secondary);
          font-weight: 600;
          white-space: nowrap;
        }

        .bridge-icon {
          color: var(--accent-taupe);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 900px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }

          .comparison-box {
            flex-direction: column;
            text-align: left;
            padding: 1.4rem;
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
