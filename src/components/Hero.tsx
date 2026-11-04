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

        {/* Right Column: Clean Editorial Name & Role */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-line"></span>
            <span>D3 TEKNIK INFORMATIKA • SOFTWARE TESTING & FRONTEND</span>
          </div>

          <h1 className="hero-title" id="main-hero-title">
            ANNISA<br />
            <span className="title-secondary">FATHIMATUZ ZAHRA</span>
          </h1>

          {/* Prominent Role Subtitle */}
          <div className="hero-role-headline" id="hero-role-headline">
            <span className="role-accent-bar"></span>
            <h2 className="role-text">Software Quality Assurance &amp; Frontend Developer</h2>
          </div>

          {/* Clean Action Buttons */}
          <div className="hero-cta-group">
            <a href="#about-me" className="btn btn-primary" id="hero-cta-about">
              <span>Tentang Saya</span>
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
          position: relative;
          padding-top: calc(var(--nav-height) + 3.5rem);
          padding-bottom: 4rem;
          background-color: var(--bg-primary);
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 0.88fr 1.12fr;
          gap: 3.5rem;
          align-items: center;
        }

        /* Arch Frame Photo Container */
        .hero-image-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .arch-photo-container {
          position: relative;
          width: 100%;
          max-width: 370px;
          aspect-ratio: 3 / 4;
          border-top-left-radius: 185px;
          border-top-right-radius: 185px;
          border-bottom-left-radius: 24px;
          border-bottom-right-radius: 24px;
          overflow: hidden;
          background: linear-gradient(180deg, #ecdcc9 0%, #dfcbbe 100%);
          box-shadow: 0 16px 40px rgba(45, 32, 20, 0.12);
          border: 1px solid rgba(140, 115, 93, 0.2);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .arch-photo-container:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 50px rgba(45, 32, 20, 0.18);
        }

        .arch-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .arch-badge-floating {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(140, 115, 93, 0.25);
          padding: 0.45rem 0.9rem;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--text-primary);
          white-space: nowrap;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }

        .badge-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-sage);
          box-shadow: 0 0 0 3px rgba(79, 107, 95, 0.25);
        }

        .photo-caption {
          margin-top: 0.85rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.15rem;
          text-align: center;
        }

        .photo-caption strong {
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .photo-caption span {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        /* Hero Content Column */
        .hero-content {
          display: flex;
          flex-direction: column;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.74rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent-taupe-dark);
          margin-bottom: 0.85rem;
        }

        .eyebrow-line {
          width: 28px;
          height: 2px;
          background: var(--accent-taupe);
          border-radius: 2px;
        }

        .hero-title {
          font-size: clamp(2.4rem, 5.2vw, 3.8rem);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .title-secondary {
          font-weight: 500;
          color: var(--accent-taupe-dark);
          letter-spacing: -0.02em;
        }

        .hero-role-headline {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin: 0.75rem 0 2rem;
          padding: 0.65rem 1rem;
          background: rgba(138, 110, 84, 0.08);
          border: 1px solid rgba(138, 110, 84, 0.18);
          border-radius: var(--radius-md);
          width: fit-content;
        }

        .role-accent-bar {
          width: 4px;
          height: 24px;
          background: var(--accent-taupe);
          border-radius: var(--radius-full);
          flex-shrink: 0;
        }

        .role-text {
          font-size: clamp(1.05rem, 2vw, 1.35rem);
          font-weight: 600;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          margin: 0;
          line-height: 1.3;
        }

        /* CTAs */
        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-wrap: wrap;
        }

        .btn-outline {
          background: transparent;
          color: var(--text-secondary);
          border: 1px solid var(--border-medium);
          padding: 0.65rem 1.15rem;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          transition: all 0.22s ease;
        }

        .btn-outline:hover {
          background: var(--bg-secondary);
          border-color: var(--accent-taupe);
          color: var(--text-primary);
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(45, 32, 20, 0.08);
        }

        @media (max-width: 900px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2.5rem;
          }

          .hero-image-wrapper {
            margin: 0 auto;
          }

          .hero-content {
            align-items: center;
          }

          .hero-role-headline {
            justify-content: center;
            text-align: center;
          }

          .hero-cta-group {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
