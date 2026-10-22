'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Hero() {
  return (
    <section className="hero-section" id="about">
      <div className="container hero-container">
        {/* Availability Badge */}
        <div className="status-badge-wrapper">
          <span className="status-indicator"></span>
          <span className="status-text">{PERSONAL_INFO.availability}</span>
        </div>

        {/* Hero Title */}
        <h1 className="hero-title" id="main-hero-title">
          Mendesain dengan Empati User,<br />
          Membangun dengan Kode <span className="gradient-highlight">Next.js & React</span>.
        </h1>

        {/* Hero Description */}
        <p className="hero-description">
          Halo, saya <strong>{PERSONAL_INFO.name}</strong> ({PERSONAL_INFO.education.degree}). 
          Saya adalah <strong>Design Engineer & Frontend Developer</strong> yang menghilangkan hambatan antara 
          rancangan desain di <em>Figma</em> dan implementasi kode nyata di browser serta aplikasi mobile. 
          Bukan sekadar menggambar tampilan, tapi mewujudkan sistem antarmuka yang cepat, teruji, dan menyelesaikan masalah nyata.
        </p>

        {/* Hero CTAs */}
        <div className="hero-cta-group">
          <a href="#projects" className="btn btn-primary" id="hero-cta-projects">
            <span>Lihat 4 Studi Kasus Riil</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </a>

          <a href="#contact" className="btn btn-secondary" id="hero-cta-contact">
            <span>Diskusi Kebutuhan Tim</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </a>

          <a 
            href="#contact" 
            className="btn btn-outline"
            id="hero-cta-resume"
          >
            <span>Preview Profil & Kualifikasi</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
        </div>

        {/* Credibility & Impact Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">4+</div>
            <div className="stat-label">Studi Kasus Produksi & Kemitraan Riil</div>
            <div className="stat-sub">Bukan sekadar clone tutorial kosong</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Figma to Interactive Code</div>
            <div className="stat-sub">Presisi komponen & responsive layout</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">D3 TI</div>
            <div className="stat-label">Lulusan Rekayasa Terapan</div>
            <div className="stat-sub">Fokus eksekusi praktis & siap adaptasi</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">Next.js</div>
            <div className="stat-label">& React Native Eco-System</div>
            <div className="stat-sub">Web modern & aplikasi mobile terpadu</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          padding-top: 8.5rem;
          padding-bottom: 5rem;
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .status-badge-wrapper {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.45rem 1.1rem;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: var(--radius-full);
          margin-bottom: 2rem;
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.1);
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: pulseGreen 2s infinite;
        }

        @keyframes pulseGreen {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.3);
          }
        }

        .status-text {
          font-size: 0.85rem;
          font-weight: 600;
          color: #34d399;
          letter-spacing: 0.02em;
        }

        .hero-title {
          font-size: clamp(2.3rem, 5vw, 3.8rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          max-width: 950px;
          margin-bottom: 1.5rem;
          line-height: 1.18;
        }

        .gradient-highlight {
          background: var(--gradient-brand);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .hero-description {
          font-size: clamp(1.05rem, 1.8vw, 1.25rem);
          max-width: 780px;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 2.5rem;
        }

        .hero-description strong {
          color: var(--text-primary);
        }

        .hero-description em {
          color: var(--accent-cyan);
          font-style: normal;
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4.5rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          width: 100%;
          margin-top: 1rem;
        }

        .stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1.6rem 1.2rem;
          text-align: center;
          backdrop-filter: blur(10px);
          transition: all var(--transition-smooth);
        }

        .stat-card:hover {
          border-color: var(--border-hover);
          transform: translateY(-4px);
          background: var(--bg-card-hover);
        }

        .stat-number {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--accent-cyan);
          margin-bottom: 0.35rem;
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .stat-sub {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 500px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .hero-cta-group {
            flex-direction: column;
            width: 100%;
          }
          .hero-cta-group .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
