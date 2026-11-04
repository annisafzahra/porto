'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="hero-section reveal-on-scroll" id="about">
      <div className="container hero-container">
        
        {/* Left Column: Editorial Arch Photo Frame */}
        <div className="hero-image-wrapper">
          <div className="arch-photo-container">
            <img 
              src="/profile.jpg" 
              alt={PERSONAL_INFO.name} 
              className="arch-photo"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.endsWith('/profile.svg')) {
                  target.src = '/profile.svg';
                }
              }}
            />
            <div className="arch-badge-floating">
              <span className="badge-indicator"></span>
              <span>Open to Work • Software QA</span>
            </div>
          </div>
          <div className="photo-caption">
            <strong>Annisa Zahra</strong>
            <span>{PERSONAL_INFO.education.institution} (IPK {PERSONAL_INFO.education.gpa})</span>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-line"></span>
            <span>D3 TEKNIK INFORMATIKA • SOFTWARE TESTING & FRONTEND</span>
          </div>

          <h1 className="hero-title" id="main-hero-title">
            ANNISA<br />
            <span className="title-secondary">FATHIMATUZ ZAHRA</span>
          </h1>

          <div className="role-tag-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Software Quality Assurance & Frontend Developer</span>
          </div>

          <p className="hero-description">
            Lulusan D3 Teknik Informatika Politeknik Negeri Indramayu dengan <strong>IPK 3,94/4,00</strong>. 
            Memiliki pengalaman magang 6 bulan di <em>CV. Indokoding Sukses Makmur</em> dalam 
            <strong> pengujian API menggunakan Postman</strong>, verifikasi respons server, pelaporan temuan bug, 
            serta pengembangan antarmuka web modern. Berbekal latar belakang perhotelan yang membentuk 
            ketelitian administrasi dan fokus pada kenyamanan pengguna.
          </p>

          {/* Quick Stats Grid */}
          <div className="metrics-pills-row">
            <div className="metric-pill">
              <div className="metric-pill-val">3,94</div>
              <div className="metric-pill-sub">IPK / 4,00</div>
            </div>
            <div className="metric-pill">
              <div className="metric-pill-val">6 Bulan</div>
              <div className="metric-pill-sub">Magang IT</div>
            </div>
            <div className="metric-pill">
              <div className="metric-pill-val">Postman</div>
              <div className="metric-pill-sub">API Testing</div>
            </div>
            <div className="metric-pill">
              <div className="metric-pill-val">4 Proyek</div>
              <div className="metric-pill-sub">Studi Kasus</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary" id="hero-cta-projects">
              <span>Lihat Proyek & Pengujian</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>

            <a 
              href={PERSONAL_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary" 
              id="hero-cta-linkedin"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <button 
              type="button" 
              onClick={handleCopyEmail} 
              className="btn btn-outline"
              id="hero-copy-email-btn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>{copied ? 'Tersalin' : 'Salin Email'}</span>
            </button>
          </div>
        </div>

      </div>

      <style jsx>{`
        .hero-section {
          padding-top: 7rem;
          padding-bottom: 3.5rem;
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 3rem;
          align-items: center;
          width: 100%;
        }

        .hero-image-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .arch-photo-container {
          position: relative;
          width: 100%;
          max-width: 310px;
          height: 410px;
          border-radius: 155px 155px 20px 20px;
          overflow: hidden;
          background: #efe7dc;
          border: 1px solid var(--border-subtle);
          box-shadow: var(--shadow-md);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .arch-photo-container:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
        }

        .arch-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .arch-photo-container:hover .arch-photo {
          transform: scale(1.025);
        }

        .arch-badge-floating {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.35rem 0.95rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          font-size: 0.74rem;
          font-weight: 600;
          color: var(--text-primary);
          box-shadow: 0 4px 15px rgba(70, 55, 40, 0.08);
          white-space: nowrap;
        }

        .badge-indicator {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-sage);
          box-shadow: 0 0 5px rgba(84, 110, 99, 0.5);
        }

        .photo-caption {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 0.85rem;
          text-align: center;
          line-height: 1.35;
        }

        .photo-caption strong {
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .photo-caption span {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          letter-spacing: 0.06em;
          color: var(--accent-taupe-dark);
          font-weight: 600;
          margin-bottom: 0.85rem;
          text-transform: uppercase;
        }

        .eyebrow-line {
          width: 20px;
          height: 2px;
          background: var(--accent-taupe);
        }

        .hero-title {
          font-size: clamp(2.2rem, 3.8vw, 3.2rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 0.85rem;
          color: var(--text-primary);
        }

        .title-secondary {
          background: linear-gradient(135deg, #1e1b18 0%, #6e553f 60%, #8a6e54 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .role-tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.3rem 0.85rem;
          background: var(--accent-sage-soft);
          border: 1px solid rgba(84, 110, 99, 0.25);
          border-radius: var(--radius-full);
          color: var(--accent-sage-dark);
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
        }

        .hero-description {
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.75rem;
          max-width: 650px;
        }

        .hero-description strong {
          color: var(--text-primary);
        }

        .hero-description em {
          color: var(--accent-taupe-dark);
          font-style: normal;
          font-weight: 600;
        }

        .metrics-pills-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
          width: 100%;
          max-width: 580px;
          margin-bottom: 2rem;
        }

        .metric-pill {
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 0.75rem 0.5rem;
          text-align: center;
          box-shadow: var(--shadow-sm);
          cursor: pointer;
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
        }

        .metric-pill:hover {
          border-color: var(--border-hover);
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }

        .metric-pill-val {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--accent-taupe);
          line-height: 1.2;
          margin-bottom: 0.1rem;
        }

        .metric-pill-sub {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem;
        }

        @media (max-width: 960px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }

          .hero-content {
            align-items: center;
            text-align: center;
          }

          .hero-eyebrow {
            justify-content: center;
          }

          .metrics-pills-row {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero-cta-group {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
