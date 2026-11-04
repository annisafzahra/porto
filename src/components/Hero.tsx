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
            {/* The image uses /profile.jpg, falling back to /profile.svg */}
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
              <span>Open to Work • SQA</span>
            </div>
          </div>
          <div className="photo-caption">
            <strong>{PERSONAL_INFO.name}</strong>
            <span>{PERSONAL_INFO.education.institution} (IPK {PERSONAL_INFO.education.gpa})</span>
          </div>
        </div>

        {/* Right Column: Editorial Hero Content */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-line"></span>
            <span>POLINDRA D3 TI • SOFTWARE TESTING & QUALITY ASSURANCE</span>
          </div>

          <h1 className="hero-title" id="main-hero-title">
            ANNISA<br />
            <span className="title-secondary">FATHIMATUZ ZAHRA</span>
          </h1>

          <div className="role-tag-pill">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Software Quality Assurance & System Validation</span>
          </div>

          <p className="hero-description">
            Lulusan D3 Teknik Informatika Politeknik Negeri Indramayu dengan <strong>IPK 3,94/4,00</strong>. 
            Memiliki pengalaman magang 6 bulan di <em>CV. Indokoding Sukses Makmur</em> dalam 
            <strong> pengujian API menggunakan Postman</strong>, pemeriksaan respons server, identifikasi temuan bug, 
            serta pengembangan antarmuka <em>Next.js</em>. Didukung latar belakang Perhotelan yang memperkuat ketelitian detail, 
            manajemen waktu, dan orientasi kepuasan pengguna.
          </p>

          {/* Quick Stats Grid (Clarice Day Style Pill Metrics) */}
          <div className="metrics-pills-row">
            <div className="metric-pill">
              <div className="metric-pill-val">3,94</div>
              <div className="metric-pill-sub">IPK / 4,00</div>
            </div>
            <div className="metric-pill">
              <div className="metric-pill-val">6 Bln</div>
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
              <span>Eksplorasi Studi Kasus & QA</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>Profil LinkedIn</span>
            </a>

            <button 
              type="button" 
              onClick={handleCopyEmail} 
              className="btn btn-outline"
              id="hero-copy-email-btn"
            >
              <span>{copied ? '✓ Email Tersalin!' : 'Salin Email'}</span>
            </button>
          </div>
        </div>

      </div>

      <style jsx>{`
        .hero-section {
          padding-top: 8.5rem;
          padding-bottom: 4.5rem;
          position: relative;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        .hero-image-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .arch-photo-container {
          position: relative;
          width: 100%;
          max-width: 360px;
          height: 460px;
          border-radius: 180px 180px 24px 24px;
          overflow: hidden;
          background: #efe7dc;
          border: 1px solid var(--border-subtle);
          box-shadow: var(--shadow-md);
        }

        .arch-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .arch-photo-container:hover .arch-photo {
          transform: scale(1.02);
        }

        .arch-badge-floating {
          position: absolute;
          bottom: 1.25rem;
          left: 50%;
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 1.1rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-primary);
          box-shadow: 0 4px 15px rgba(70, 55, 40, 0.1);
          white-space: nowrap;
        }

        .badge-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-sage);
          box-shadow: 0 0 6px rgba(84, 110, 99, 0.6);
        }

        .photo-caption {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 1rem;
          text-align: center;
          line-height: 1.35;
        }

        .photo-caption strong {
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .photo-caption span {
          font-size: 0.8rem;
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
          gap: 0.65rem;
          font-size: 0.78rem;
          font-family: var(--font-mono);
          letter-spacing: 0.08em;
          color: var(--accent-taupe-dark);
          font-weight: 600;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        .eyebrow-line {
          width: 24px;
          height: 2px;
          background: var(--accent-taupe);
        }

        .hero-title {
          font-size: clamp(2.4rem, 4.2vw, 3.6rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1.08;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .title-secondary {
          color: var(--accent-taupe);
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .role-tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.9rem;
          background: var(--accent-sage-soft);
          border: 1px solid rgba(84, 110, 99, 0.25);
          border-radius: var(--radius-full);
          color: var(--accent-sage-dark);
          font-size: 0.82rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .hero-description {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 2rem;
          max-width: 680px;
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
          gap: 0.85rem;
          width: 100%;
          max-width: 620px;
          margin-bottom: 2.25rem;
        }

        .metric-pill {
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 0.85rem 0.6rem;
          text-align: center;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-fast);
        }

        .metric-pill:hover {
          border-color: var(--border-hover);
          transform: translateY(-2px);
        }

        .metric-pill-val {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--accent-taupe);
          line-height: 1.2;
          margin-bottom: 0.15rem;
        }

        .metric-pill-sub {
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.85rem;
        }

        @media (max-width: 960px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2.5rem;
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
