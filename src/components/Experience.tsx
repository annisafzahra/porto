'use client';

import React from 'react';
import { EXPERIENCES, PERSONAL_INFO } from '@/data/portfolioData';

export default function Experience() {
  return (
    <section className="section-spacing experience-section reveal-on-scroll" id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-pill section-pill-dark">Riwayat & Jejak Kerja</div>
          <h2 className="section-title section-title-dark">
            Pengalaman & <span className="gradient-text-soft">Pendidikan</span>
          </h2>
          <p className="section-description section-description-dark">
            Pengalaman magang pengembangan frontend dan pengujian API, 
            serta fondasi kedisiplinan kerja dari latar belakang perhotelan.
          </p>
        </div>

        <div className="experience-layout">
          {/* Timeline Column */}
          <div className="timeline-col">
            <h3 className="col-headline col-headline-dark">Pengalaman Kerja & Magang</h3>
            
            <div className="timeline-items">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="timeline-card glass-card">
                  <div className="card-meta">
                    <span className="badge-period">{exp.period}</span>
                    <span className="badge-type">{exp.type}</span>
                    <span className="badge-loc">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {exp.location}
                    </span>
                  </div>

                  <h4 className="card-role">{exp.role}</h4>
                  <div className="card-org">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <strong>{exp.organization}</strong>
                  </div>

                  <p className="card-desc">{exp.description}</p>

                  <ul className="card-achievements">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>
                        <span className="ach-bullet">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="education-col">
            <h3 className="col-headline col-headline-dark">Pendidikan</h3>

            <div className="education-card glass-card">
              <div className="edu-icon-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <div className="edu-degree">{PERSONAL_INFO.education.degree}</div>
              <h4 className="edu-major">{PERSONAL_INFO.education.major}</h4>
              <div className="edu-inst">{PERSONAL_INFO.education.institution}</div>
              
              <div className="edu-status-row">
                <span className="status-pill">IPK {PERSONAL_INFO.education.gpa}</span>
                <span className="edu-year">{PERSONAL_INFO.education.period}</span>
              </div>

              <div className="edu-divider"></div>

              <div className="edu-details">
                <h5>Fokus Akademik:</h5>
                <p>{PERSONAL_INFO.education.highlight}</p>
              </div>

              {/* Secondary Education */}
              <div className="secondary-edu-box">
                <div className="sec-edu-title">{PERSONAL_INFO.secondaryEducation.institution}</div>
                <div className="sec-edu-sub">{PERSONAL_INFO.secondaryEducation.major} ({PERSONAL_INFO.secondaryEducation.period})</div>
                <p className="sec-edu-desc">{PERSONAL_INFO.secondaryEducation.highlight}</p>
              </div>

              <div className="ready-badge">
                <span className="ready-dot"></span>
                <span>Terbuka untuk Peluang Kerja Software QA</span>
              </div>
            </div>
          </div>
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

        .col-headline-dark {
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

        .experience-layout {
          display: grid;
          grid-template-columns: 1.55fr 1fr;
          gap: 1.5rem;
          align-items: flex-start;
          width: 100%;
        }

        .col-headline {
          font-size: 1.15rem;
          margin-bottom: 1.25rem;
        }

        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .timeline-card {
          padding: 1.5rem;
          background: #ffffff;
          border-left: 3px solid var(--accent-taupe);
          border-radius: var(--radius-md);
          box-shadow: 0 4px 18px rgba(35, 24, 14, 0.14);
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .timeline-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 34px rgba(35, 24, 14, 0.22);
        }

        .card-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.6rem;
          flex-wrap: wrap;
        }

        .badge-period {
          font-size: 0.72rem;
          font-family: var(--font-mono);
          color: var(--accent-taupe-dark);
          background: var(--accent-taupe-soft);
          border: 1px solid rgba(140, 115, 93, 0.25);
          padding: 0.15rem 0.55rem;
          border-radius: var(--radius-full);
          font-weight: 600;
        }

        .badge-type {
          font-size: 0.72rem;
          color: var(--text-muted);
          background: var(--bg-secondary);
          padding: 0.15rem 0.55rem;
          border-radius: var(--radius-full);
        }

        .badge-loc {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .card-role {
          font-size: 1.15rem;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
        }

        .card-org {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.88rem;
          color: var(--accent-taupe-dark);
          margin-bottom: 0.75rem;
        }

        .card-desc {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 0.85rem;
        }

        .card-achievements {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .card-achievements li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.84rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .ach-bullet {
          color: var(--accent-sage);
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .education-card {
          padding: 1.5rem;
          background: #ffffff;
          border-radius: var(--radius-md);
          box-shadow: 0 4px 18px rgba(35, 24, 14, 0.14);
          position: sticky;
          top: 5.5rem;
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .education-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 34px rgba(35, 24, 14, 0.22);
        }

        .edu-icon-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--accent-taupe-soft);
          color: var(--accent-taupe-dark);
          margin-bottom: 0.75rem;
        }

        .edu-degree {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--accent-taupe-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.2rem;
          font-weight: 700;
        }

        .edu-major {
          font-size: 1.2rem;
          margin-bottom: 0.2rem;
          color: var(--text-primary);
        }

        .edu-inst {
          font-size: 0.86rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
          font-weight: 500;
        }

        .edu-status-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .status-pill {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--accent-sage-dark);
          background: var(--accent-sage-soft);
          border: 1px solid rgba(84, 110, 99, 0.3);
          padding: 0.15rem 0.6rem;
          border-radius: var(--radius-full);
        }

        .edu-year {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .edu-divider {
          height: 1px;
          background: var(--border-subtle);
          margin-bottom: 1rem;
        }

        .edu-details h5 {
          font-size: 0.88rem;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
        }

        .edu-details p {
          font-size: 0.84rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .secondary-edu-box {
          background: #fdfbf8;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 0.75rem 0.85rem;
          margin-bottom: 1rem;
        }

        .sec-edu-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.15rem;
        }

        .sec-edu-sub {
          font-size: 0.74rem;
          color: var(--accent-taupe-dark);
          margin-bottom: 0.35rem;
          font-family: var(--font-mono);
        }

        .sec-edu-desc {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .ready-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--accent-sage-soft);
          border: 1px solid rgba(84, 110, 99, 0.3);
          border-radius: var(--radius-sm);
          padding: 0.55rem 0.8rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--accent-sage-dark);
        }

        .ready-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-sage);
          box-shadow: 0 0 6px rgba(84, 110, 99, 0.4);
        }

        @media (max-width: 900px) {
          .experience-layout {
            grid-template-columns: 1fr;
          }
          .education-card {
            position: static;
          }
        }
      `}</style>
    </section>
  );
}
