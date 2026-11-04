'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function ValuePillar() {
  const pillars = [
    {
      tag: "Akademik & Presisi",
      title: "Fondasi Rekayasa Sistem (IPK 3,94)",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      ),
      description: "Lulusan D3 Teknik Informatika Politeknik Negeri Indramayu dengan IPK 3,94/4,00. Terlatih dalam pengembangan aplikasi web, perancangan antarmuka (UI/UX), pengelolaan basis data PostgreSQL, serta analisis sistem informasi yang diterapkan pada Tugas Akhir SPK K-Means Clustering.",
      accent: "#8c735d"
    },
    {
      tag: "Pengujian Praktis",
      title: "Postman API Testing & Bug Logging",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      ),
      description: "Pengalaman magang 6 bulan di CV. Indokoding Sukses Makmur. Aktif melakukan pengujian API via Postman (mengirim request, running collections, cek payload & respons), serta mengidentifikasi dan mendokumentasikan temuan bug/inkonsistensi pada website klien.",
      accent: "#546e63"
    },
    {
      tag: "Ketelitian Layanan",
      title: "Hospitality Discipline & Detail-Oriented",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      description: "Pendidikan Perhotelan dan pengalaman Front Desk Receptionist membekali standar ketelitian tinggi, administrasi data terstruktur, komunikasi efektif, dan empati pengguna yang kuat dalam memastikan kualitas perangkat lunak.",
      accent: "#b59d84"
    }
  ];

  return (
    <section className="section-spacing value-section reveal-on-scroll" id="philosophy">
      <div className="container">
        <div className="section-header">
          <div className="section-pill">Profil & Nilai Tambah</div>
          <h2 className="section-title">
            Mengapa Memilih <span className="gradient-text">Annisa</span>?
          </h2>
          <p className="section-description">
            Kombinasi unik antara pemahaman kode frontend modern, ketelitian pengujian API menggunakan Postman, 
            dan disiplin pelayanan berorientasi pada kepuasan pengguna akhir.
          </p>
        </div>

        {/* 3 Bento Cards Grid */}
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

        {/* The "Why Frontend-Aware QA" Callout Box */}
        <div className="comparison-box">
          <div className="comparison-col">
            <div className="comp-badge comp-code">💻 Pemahaman Jeroan Frontend</div>
            <h4>Analisis Kode & DevTools</h4>
            <ul>
              <li>Memahami struktur komponen Next.js, React, dan DOM hierarchy</li>
              <li>Inspeksi Network Tab, console error logs, dan parsing JSON response</li>
              <li>Mengetahui persis di layer mana bug terjadi (klien vs server)</li>
            </ul>
          </div>

          <div className="comp-bridge">
            <span className="bridge-pill">Keunggulan QA</span>
            <div className="bridge-icon">⇄</div>
          </div>

          <div className="comparison-col">
            <div className="comp-badge comp-qa">🔍 Metodologi Pengujian SQA</div>
            <h4>Pengujian Fungsional & API</h4>
            <ul>
              <li>Postman Collections, status code check (200/400/500) & payload</li>
              <li>Boundary value testing, form error validation & edge-case flows</li>
              <li>Dokumentasi temuan bug yang terstruktur dan mudah ditindaklanjuti dev</li>
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
          margin-bottom: 3rem;
        }

        .pillar-card {
          padding: 2.2rem 1.8rem;
          display: flex;
          flex-direction: column;
          background: #ffffff;
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
          width: 48px;
          height: 48px;
          border-radius: 12px;
        }

        .pillar-tag {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--accent-taupe-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .pillar-title {
          font-size: 1.25rem;
          margin-bottom: 0.85rem;
          line-height: 1.35;
          color: var(--text-primary);
        }

        .pillar-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.68;
        }

        .comparison-box {
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          box-shadow: var(--shadow-sm);
        }

        .comparison-col {
          flex: 1;
        }

        .comp-badge {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.3rem 0.85rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.85rem;
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
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
        }

        .comparison-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .comparison-col li {
          font-size: 0.92rem;
          color: var(--text-secondary);
          position: relative;
          padding-left: 1.25rem;
          line-height: 1.5;
        }

        .comparison-col li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--accent-taupe);
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
          background: var(--bg-secondary);
          padding: 0.25rem 0.7rem;
          border-radius: var(--radius-full);
          color: var(--text-secondary);
          font-weight: 600;
          white-space: nowrap;
        }

        .bridge-icon {
          font-size: 1.8rem;
          color: var(--accent-taupe);
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
