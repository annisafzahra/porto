'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function AboutMe() {
  return (
    <section className="section-spacing about-section reveal-on-scroll" id="about-me">
      <div className="container">
        <div className="section-header">
          <div className="section-pill section-pill-dark">Profil Lengkap</div>
          <h2 className="section-title section-title-dark">
            Tentang <span className="gradient-text-soft">Annisa Zahra</span>
          </h2>
          <p className="section-description section-description-dark">
            Latar belakang akademik, pengalaman praktik pengujian sistem, dan ketelitian kerja operasional.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Story Narrative Card */}
          <div className="about-narrative-card glass-card">
            <div className="narrative-lead">
              Lulusan <strong>D3 Teknik Informatika Politeknik Negeri Indramayu</strong> dengan <strong>IPK 3,94/4,00</strong>. 
              Memiliki pengalaman magang 6 bulan di <em>CV. Indokoding Sukses Makmur</em> dalam 
              <strong> pengujian API menggunakan Postman</strong>, verifikasi respons server, pelaporan temuan bug, 
              serta pengembangan antarmuka web modern. Berbekal latar belakang perhotelan yang membentuk 
              ketelitian administrasi dan fokus pada kenyamanan pengguna.
            </div>

            <div className="narrative-divider"></div>

            <div className="narrative-paragraphs">
              {PERSONAL_INFO.aboutParagraphs.map((para, idx) => (
                <p key={idx} className="narrative-text">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Highlights Bento Column */}
          <div className="about-highlights-col">
            {/* Card 1: Fokus Minat Karir */}
            <div className="highlight-box glass-card">
              <div className="hl-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 12 15 16 10"></polyline>
                </svg>
              </div>
              <h4 className="hl-title">Fokus & Minat Karir</h4>
              <p className="hl-desc">
                Software Quality Assurance (QA), Software Testing, API Validation, Systems Analysis, dan Application Management.
              </p>
            </div>

            {/* Card 2: Pengalaman Praktik */}
            <div className="highlight-box glass-card">
              <div className="hl-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h4 className="hl-title">Pengalaman Industri</h4>
              <p className="hl-desc">
                <strong>CV. Indokoding (6 Bulan):</strong> Pengujian API Postman & Frontend Next.js.<br />
                <strong>Vinotel Cirebon (7 Bulan):</strong> Ketelitian administrasi data & standar layanan.
              </p>
            </div>

            {/* Card 3: Nilai Tambah Kerja */}
            <div className="highlight-box glass-card">
              <div className="hl-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h4 className="hl-title">Karakteristik & Nilai Kerja</h4>
              <p className="hl-desc">
                Terbiasa kerja terstruktur, komunikasi tim terbuka, pencatatan teliti, serta disiplin terhadap tenggat waktu dan standar kualitas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          position: relative;
          background-color: #8a6e54;
          width: 100%;
          overflow: hidden;
        }

        .section-pill-dark {
          background: rgba(255, 255, 255, 0.16) !important;
          border: 1px solid rgba(255, 255, 255, 0.28) !important;
          color: #ffffff !important;
        }

        .section-title-dark {
          color: #ffffff !important;
        }

        .gradient-text-soft {
          background: linear-gradient(135deg, #ffffff 0%, #faedd8 50%, #dfcbb5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .section-description-dark {
          color: #f3ede4 !important;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.45fr 1fr;
          gap: 1.5rem;
          align-items: flex-start;
          width: 100%;
        }

        .about-narrative-card {
          padding: 2.25rem;
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: var(--radius-lg);
          box-shadow: 0 6px 24px rgba(35, 24, 14, 0.16);
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .about-narrative-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 36px rgba(35, 24, 14, 0.22);
        }

        .narrative-lead {
          font-size: 1.05rem;
          color: var(--text-primary);
          line-height: 1.75;
          margin-bottom: 1.25rem;
        }

        .narrative-lead strong {
          color: var(--text-primary);
        }

        .narrative-lead em {
          color: var(--accent-taupe-dark);
          font-style: normal;
          font-weight: 600;
        }

        .narrative-divider {
          height: 1px;
          background: var(--border-subtle);
          margin-bottom: 1.25rem;
        }

        .narrative-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .narrative-text {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .about-highlights-col {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }

        .highlight-box {
          padding: 1.4rem;
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: var(--radius-md);
          box-shadow: 0 4px 18px rgba(35, 24, 14, 0.14);
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .highlight-box:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(35, 24, 14, 0.2);
        }

        .hl-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 9px;
          background: var(--accent-taupe-soft);
          color: var(--accent-taupe-dark);
          margin-bottom: 0.75rem;
        }

        .hl-title {
          font-size: 1.05rem;
          margin-bottom: 0.4rem;
          color: var(--text-primary);
        }

        .hl-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .hl-desc strong {
          color: var(--text-primary);
        }

        @media (max-width: 960px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-narrative-card {
            padding: 1.6rem;
          }
        }
      `}</style>
    </section>
  );
}
