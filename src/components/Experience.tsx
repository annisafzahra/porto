'use client';

import React from 'react';
import { EXPERIENCES } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

export default function Experience() {
  const { language, t } = useLanguage();

  return (
    <section className="section-spacing experience-section reveal-on-scroll" id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title-pill-dark">
            {t('Pengalaman', 'Work &')}{' '}
            <span className="gradient-text-soft">{t('Kerja & Magang', 'Internship Experience')}</span>
          </h2>
        </div>

        <div className="experience-grid">
          {EXPERIENCES.map((exp, idx) => {
            const role = language === 'en' && exp.roleEn ? exp.roleEn : exp.role;
            const period = language === 'en' && exp.periodEn ? exp.periodEn : exp.period;
            const type = language === 'en' && exp.typeEn ? exp.typeEn : exp.type;
            const location = language === 'en' && exp.locationEn ? exp.locationEn : exp.location;
            const description = language === 'en' && exp.descriptionEn ? exp.descriptionEn : exp.description;
            const achievements = language === 'en' && exp.achievementsEn ? exp.achievementsEn : exp.achievements;

            return (
              <div key={idx} className="experience-card glass-card">
                <div className="card-top-row">
                  <div className="exp-org-badge">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <span>{exp.organization}</span>
                  </div>
                  <div className="exp-meta-pills">
                    <span className="badge-period">{period}</span>
                    <span className="badge-type">{type}</span>
                  </div>
                </div>

                <h3 className="card-role">{role}</h3>

                <div className="card-loc">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{location}</span>
                </div>

                <p className="card-desc">{description}</p>

                <div className="card-divider"></div>

                <div className="achievements-heading">
                  {t('Tanggung Jawab & Kontribusi:', 'Key Responsibilities & Contributions:')}
                </div>
                <ul className="card-achievements">
                  {achievements.map((ach, aIdx) => (
                    <li key={aIdx}>
                      <span className="ach-bullet">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .experience-section {
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

        .experience-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.75rem;
          width: 100%;
        }

        .experience-card {
          padding: 2.25rem 2rem;
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 28px rgba(35, 24, 14, 0.16);
          display: flex;
          flex-direction: column;
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .experience-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(35, 24, 14, 0.24);
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.95rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .exp-org-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--accent-taupe-dark);
          background: var(--accent-taupe-soft);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
        }

        .exp-meta-pills {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .badge-period {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
          background: var(--bg-secondary);
          padding: 0.18rem 0.55rem;
          border-radius: var(--radius-full);
        }

        .badge-type {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent-taupe-dark);
          background: var(--accent-taupe-soft);
          padding: 0.18rem 0.55rem;
          border-radius: var(--radius-full);
        }

        .card-role {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          margin-bottom: 0.35rem;
        }

        .card-loc {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-bottom: 0.95rem;
        }

        .card-desc {
          font-size: 0.88rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 1.15rem;
        }

        .card-divider {
          width: 100%;
          height: 1px;
          background: var(--border-subtle);
          margin-bottom: 1rem;
        }

        .achievements-heading {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 0.75rem;
        }

        .card-achievements {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          flex-grow: 1;
        }

        .card-achievements li {
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
          font-size: 0.84rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .ach-bullet {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--accent-taupe-soft);
          color: var(--accent-taupe-dark);
          flex-shrink: 0;
          margin-top: 1px;
        }

        @media (max-width: 860px) {
          .experience-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
