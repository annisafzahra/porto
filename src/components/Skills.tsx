'use client';

import React from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

// Clean SVG icon renderer
function SkillSvgIcon({ iconType }: { iconType?: string }) {
  switch (iconType) {
    case 'shield':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 12 12 15 16 10"></polyline>
        </svg>
      );
    case 'check':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      );
    case 'code':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      );
    case 'layers':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      );
    case 'wrench':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      );
    case 'git':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3"></circle>
          <circle cx="6" cy="6" r="3"></circle>
          <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
          <line x1="6" y1="9" x2="6" y2="21"></line>
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
    case 'cpu':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <line x1="9" y1="1" x2="9" y2="4"></line>
          <line x1="15" y1="1" x2="15" y2="4"></line>
          <line x1="9" y1="20" x2="9" y2="23"></line>
          <line x1="15" y1="20" x2="15" y2="23"></line>
          <line x1="20" y1="9" x2="23" y2="9"></line>
          <line x1="20" y1="14" x2="23" y2="14"></line>
          <line x1="1" y1="9" x2="4" y2="9"></line>
          <line x1="1" y1="14" x2="4" y2="14"></line>
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
  const { language, t } = useLanguage();

  return (
    <section className="section-spacing skills-section reveal-on-scroll" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title-pill-dark">
            {t('Keahlian', 'Technical')}{' '}
            <span className="gradient-text-soft">{t('Teknis', 'Skills')}</span>
          </h2>
        </div>

        {/* 3 Categories Grid */}
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const title = language === 'en' && cat.titleEn ? cat.titleEn : cat.title;
            const description = language === 'en' && cat.descriptionEn ? cat.descriptionEn : cat.description;

            return (
              <div key={idx} className="skill-card glass-card">
                <div className="skill-card-header">
                  <span className="category-num">0{idx + 1}</span>
                  <h3 className="category-title">{title}</h3>
                  <p className="category-desc">{description}</p>
                </div>

                <div className="skill-items-list">
                  {cat.skills.map((skill, sIdx) => {
                    const skillName = language === 'en' && skill.nameEn ? skill.nameEn : skill.name;
                    const skillLevel = language === 'en' && skill.levelEn ? skill.levelEn : skill.level;

                    return (
                      <div key={sIdx} className="skill-item-row">
                        <div className="skill-item-header">
                          <span className="skill-icon-wrap">
                            <SkillSvgIcon iconType={skill.iconType} />
                          </span>
                          <strong className="skill-name">{skillName}</strong>
                        </div>
                        <div className="skill-desc-text">
                          {skillLevel}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow Methodology Bar */}
        <div className="workflow-card glass-card">
          <div className="workflow-title-row">
            <div className="wf-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <h4>{t('Siklus Alur Pengujian & Penjaminan Mutu (SQA)', 'SQA Testing & Quality Assurance Cycle')}</h4>
          </div>
          
          <div className="workflow-steps">
            <div className="step-item">
              <span className="step-badge">1</span>
              <span>{t('Analisis Kebutuhan', 'Requirement Analysis')}</span>
            </div>
            <div className="step-arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            <div className="step-item">
              <span className="step-badge">2</span>
              <span>{t('Eksekusi Postman / UI', 'Postman / UI Execution')}</span>
            </div>
            <div className="step-arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            <div className="step-item">
              <span className="step-badge">3</span>
              <span>{t('Dokumentasi Bug', 'Defect Logging')}</span>
            </div>
            <div className="step-arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            <div className="step-item">
              <span className="step-badge">4</span>
              <span>{t('Verifikasi Perbaikan', 'Fix Verification')}</span>
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
          gap: 1.25rem;
          margin-bottom: 2rem;
          width: 100%;
        }

        .skill-card {
          padding: 1.5rem 1.35rem;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 28px rgba(35, 24, 14, 0.16);
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 38px rgba(35, 24, 14, 0.24);
        }

        .skill-card-header {
          margin-bottom: 1.1rem;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 0.75rem;
        }

        .category-num {
          font-family: var(--font-mono);
          font-size: 0.76rem;
          color: var(--accent-taupe-dark);
          font-weight: 700;
          margin-bottom: 0.2rem;
          display: block;
        }

        .category-title {
          font-size: 1.15rem;
          margin-bottom: 0.3rem;
          color: var(--text-primary);
        }

        .category-desc {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .skill-items-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex-grow: 1;
        }

        .skill-item-row {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          padding: 0.65rem 0.8rem;
          border-radius: var(--radius-sm);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .skill-item-row:hover {
          background: #fdfbf8;
          border-color: var(--accent-taupe);
        }

        .skill-item-header {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }

        .skill-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: var(--accent-taupe-soft);
          color: var(--accent-taupe-dark);
          flex-shrink: 0;
        }

        .skill-name {
          font-size: 0.85rem;
          color: var(--text-primary);
        }

        .skill-desc-text {
          font-size: 0.74rem;
          color: var(--text-secondary);
          line-height: 1.35;
          padding-left: 1.85rem;
        }

        /* Methodology Bar */
        .workflow-card {
          padding: 1.35rem 1.65rem;
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 28px rgba(35, 24, 14, 0.16);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.25rem;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .workflow-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 34px rgba(35, 24, 14, 0.22);
        }

        .workflow-title-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .wf-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: var(--accent-taupe-soft);
          color: var(--accent-taupe-dark);
        }

        .workflow-title-row h4 {
          font-size: 0.92rem;
          color: var(--text-primary);
          margin: 0;
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
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .step-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--accent-taupe);
          color: #ffffff;
          font-size: 0.7rem;
          font-weight: 700;
        }

        .step-arrow {
          color: var(--accent-taupe);
        }

        @media (max-width: 960px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }

          .workflow-card {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
