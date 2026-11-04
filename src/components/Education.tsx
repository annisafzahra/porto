'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Education() {
  return (
    <section className="section-spacing education-section reveal-on-scroll" id="education">
      <div className="container">
        <div className="section-header">
          <div className="section-pill">Latar Belakang Akademik</div>
          <h2 className="section-title">
            Riwayat <span className="gradient-text">Pendidikan</span>
          </h2>
          <p className="section-description">
            Fondasi keilmuan teknologi informasi, rekayasa perangkat lunak, serta disiplin operasional dan orientasi pengguna.
          </p>
        </div>

        <div className="education-grid">
          {/* Main Higher Education */}
          <div className="edu-main-card glass-card">
            <div className="edu-top-row">
              <div className="edu-icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <div className="edu-badges-row">
                <span className="gpa-pill">IPK {PERSONAL_INFO.education.gpa}</span>
                <span className="period-pill">{PERSONAL_INFO.education.period}</span>
              </div>
            </div>

            <div className="edu-degree-tag">{PERSONAL_INFO.education.degree}</div>
            <h3 className="edu-title">{PERSONAL_INFO.education.major}</h3>
            <div className="edu-institution">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18"></path>
                <path d="M5 21V7l8-4 8 4v14"></path>
                <path d="M9 18h6"></path>
                <path d="M10 12h4"></path>
              </svg>
              <strong>{PERSONAL_INFO.education.institution}</strong>
            </div>

            <p className="edu-desc">
              Selama menempuh pendidikan D3 Teknik Informatika, fokus pembelajaran ditekankan pada pengujian perangkat lunak, perancangan antarmuka pengguna (UI/UX), rekayasa aplikasi web, serta analisis sistem informasi. Menyelesaikan tugas akhir berupa pengembangan sistem pendukung keputusan (SPK) berbasis web dengan metode Simple Additive Weighting (SAW).
            </p>

            <div className="edu-highlights-list">
              <div className="hl-item">
                <span className="hl-bullet">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Pengujian API & Fungsionalitas Aplikasi</span>
              </div>
              <div className="hl-item">
                <span className="hl-bullet">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Pengembangan Web Modern (Next.js &amp; React)</span>
              </div>
              <div className="hl-item">
                <span className="hl-bullet">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Analisis Kebutuhan &amp; Perancangan Basis Data</span>
              </div>
            </div>
          </div>

          {/* Secondary Vocational Education */}
          <div className="edu-secondary-card glass-card">
            <div className="edu-top-row">
              <div className="edu-icon-container sec-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <div className="edu-badges-row">
                <span className="period-pill">{PERSONAL_INFO.secondaryEducation.period}</span>
              </div>
            </div>

            <div className="edu-degree-tag">{PERSONAL_INFO.secondaryEducation.degree}</div>
            <h3 className="edu-title">{PERSONAL_INFO.secondaryEducation.major}</h3>
            <div className="edu-institution">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18"></path>
                <path d="M5 21V7l8-4 8 4v14"></path>
                <path d="M9 18h6"></path>
              </svg>
              <strong>{PERSONAL_INFO.secondaryEducation.institution}</strong>
            </div>

            <p className="edu-desc">
              Membekali pengalaman praktis mengenai standar pelayanan pelanggan, kedisiplinan pencatatan administrasi, koordinasi operasional tim, serta ketelitian kerja di lingkungan berstandar tinggi.
            </p>

            <div className="edu-highlights-list">
              <div className="hl-item">
                <span className="hl-bullet">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Ketelitian Administrasi &amp; Pencatatan Data</span>
              </div>
              <div className="hl-item">
                <span className="hl-bullet">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Pola Pikir Berorientasi Kepuasan Pengguna</span>
              </div>
              <div className="hl-item">
                <span className="hl-bullet">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Komunikasi Efektif &amp; Koordinasi Tim</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .education-section {
          position: relative;
          background-color: var(--bg-primary);
          width: 100%;
          overflow: hidden;
        }

        .education-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 1.75rem;
          align-items: stretch;
          width: 100%;
        }

        .edu-main-card,
        .edu-secondary-card {
          padding: 2.25rem 2rem;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease;
        }

        .edu-main-card:hover,
        .edu-secondary-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--accent-taupe);
        }

        .edu-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .edu-icon-container {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--accent-taupe-soft);
          color: var(--accent-taupe-dark);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sec-icon {
          background: rgba(79, 107, 95, 0.12);
          color: var(--accent-sage-dark);
        }

        .edu-badges-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .gpa-pill {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-taupe-dark);
          background: var(--accent-taupe-soft);
          border: 1px solid rgba(140, 115, 93, 0.3);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
        }

        .period-pill {
          font-size: 0.78rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
          background: var(--bg-secondary);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
        }

        .edu-degree-tag {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--accent-taupe-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.35rem;
        }

        .edu-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          margin-bottom: 0.35rem;
        }

        .edu-institution {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.92rem;
          color: var(--text-secondary);
          margin-bottom: 1.15rem;
        }

        .edu-desc {
          font-size: 0.88rem;
          line-height: 1.65;
          color: var(--text-secondary);
          margin-bottom: 1.35rem;
          flex-grow: 1;
        }

        .edu-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          padding-top: 1.15rem;
          border-top: 1px dashed var(--border-medium);
        }

        .hl-item {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.84rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .hl-bullet {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--accent-taupe-soft);
          color: var(--accent-taupe-dark);
          flex-shrink: 0;
        }

        @media (max-width: 860px) {
          .education-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

