'use client';

import React from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';

function getSkillIcon(type: string) {
  switch (type) {
    case 'api':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      );
    case 'check':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 12 12 15 16 10"></polyline>
        </svg>
      );
    case 'file':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>
      );
    case 'inspect':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      );
    case 'devices':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      );
    case 'code':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      );
    case 'terminal':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
      );
    case 'database':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      );
    case 'server':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      );
    case 'git':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="6" y1="3" x2="6" y2="15"></line>
          <circle cx="18" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <path d="M18 9a9 9 0 0 1-9 9"></path>
        </svg>
      );
    case 'figma':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
          <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
          <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
          <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
          <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
        </svg>
      );
    case 'target':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      );
    case 'eye':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      );
    case 'chat':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      );
    case 'clock':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      );
    default:
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 11 12 14 22 4"></polyline>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
      );
  }
}

export default function Skills() {
  return (
    <section className="section-spacing skills-section reveal-on-scroll" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-pill section-pill-dark">Keahlian & Toolkit</div>
          <h2 className="section-title section-title-dark">
            Kompetensi <span className="gradient-text-soft">Teknis</span>
          </h2>
          <p className="section-description section-description-dark">
            Alat dan kemampuan yang dipraktikkan dalam pengujian API Postman, inspeksi sistem web, 
            serta perancangan antarmuka pengguna.
          </p>
        </div>

        {/* 3 Compact Cards Grid */}
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div key={idx} className="skill-card glass-card">
              <div className="skill-card-header">
                <span className="category-num">0{idx + 1}</span>
                <h3 className="category-title">{category.title}</h3>
                <p className="category-desc">{category.description}</p>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-row">
                    <div className="skill-row-top">
                      <span className="skill-icon-svg">{getSkillIcon(skill.iconType)}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-row-sub">{skill.level}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Strip */}
        <div className="workflow-strip">
          <div className="workflow-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--accent-sage)'}}>
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            <strong>Alur Kerja Pengujian:</strong> Dari Analisis hingga Verifikasi
          </div>
          <div className="workflow-steps">
            <div className="step-item">
              <span className="step-badge">1</span>
              <span>Kebutuhan Klien</span>
            </div>
            <div className="step-arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            <div className="step-item">
              <span className="step-badge">2</span>
              <span>Postman Collections</span>
            </div>
            <div className="step-arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            <div className="step-item">
              <span className="step-badge">3</span>
              <span>Dokumentasi Bug</span>
            </div>
            <div className="step-arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            <div className="step-item">
              <span className="step-badge">4</span>
              <span>Verifikasi Perbaikan</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills-section {
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

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.15rem;
          margin-bottom: 2rem;
          width: 100%;
        }

        .skill-card {
          padding: 1.35rem 1.25rem;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: var(--radius-md);
          box-shadow: 0 4px 18px rgba(35, 24, 14, 0.14);
          cursor: pointer;
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 34px rgba(35, 24, 14, 0.22);
          border-color: rgba(255, 255, 255, 0.95);
        }

        .skill-card-header {
          margin-bottom: 1.1rem;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 0.75rem;
        }

        .category-num {
          font-family: var(--font-mono);
          font-size: 0.76rem;
          color: var(--accent-taupe);
          font-weight: 700;
          margin-bottom: 0.2rem;
          display: block;
        }

        .category-title {
          font-size: 1.08rem;
          margin-bottom: 0.3rem;
          color: var(--text-primary);
        }

        .category-desc {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .skill-row {
          display: flex;
          flex-direction: column;
          padding: 0.55rem 0.7rem;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
          gap: 0.2rem;
        }

        .skill-row:hover {
          background: var(--accent-taupe-soft);
          border-color: rgba(138, 110, 84, 0.4);
          transform: translateX(2px);
        }

        .skill-row-top {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .skill-icon-svg {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-taupe);
          flex-shrink: 0;
        }

        .skill-name {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .skill-row-sub {
          font-size: 0.72rem;
          color: var(--text-secondary);
          padding-left: 1.45rem;
          line-height: 1.35;
        }

        .workflow-strip {
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: var(--radius-lg);
          padding: 1.15rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          box-shadow: 0 4px 18px rgba(35, 24, 14, 0.14);
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .workflow-strip:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(35, 24, 14, 0.18);
        }

        .workflow-title {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.86rem;
          color: var(--text-primary);
        }

        .workflow-title strong {
          color: var(--text-primary);
        }

        .workflow-steps {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .step-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          color: var(--text-secondary);
        }

        .step-badge {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--gradient-brand);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.68rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-arrow {
          color: var(--text-muted);
          display: flex;
          align-items: center;
        }

        @media (max-width: 960px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .workflow-strip {
            flex-direction: column;
            align-items: flex-start;
          }
          .workflow-steps {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          .step-arrow {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
