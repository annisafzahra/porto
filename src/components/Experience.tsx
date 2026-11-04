'use client';

import React from 'react';
import { EXPERIENCES, PERSONAL_INFO } from '@/data/portfolioData';

export default function Experience() {
  return (
    <section className="section-spacing experience-section reveal-on-scroll" id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-pill">Riwayat & Dedikasi Nyata</div>
          <h2 className="section-title">
            Pengalaman & <span className="gradient-text">Jejak Karya</span>
          </h2>
          <p className="section-description">
            Kombinasi pengalaman magang teknologi informasi, pengujian API sistem klien, 
            dan latar belakang kedisiplinan pelayanan profesional.
          </p>
        </div>

        <div className="experience-layout">
          {/* Timeline Column */}
          <div className="timeline-col">
            <h3 className="col-headline">Pengalaman Kerja & Magang Industri</h3>
            
            <div className="timeline-items">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="timeline-card glass-card">
                  <div className="card-meta">
                    <span className="badge-period">{exp.period}</span>
                    <span className="badge-type">{exp.type}</span>
                    <span className="badge-loc">📍 {exp.location}</span>
                  </div>

                  <h4 className="card-role">{exp.role}</h4>
                  <div className="card-org">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <strong>{exp.organization}</strong>
                  </div>

                  <p className="card-desc">{exp.description}</p>

                  <ul className="card-achievements">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>
                        <span className="ach-bullet">✦</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credential Card */}
          <div className="education-col">
            <h3 className="col-headline">Pendidikan & Sertifikasi</h3>

            {/* Polindra Card */}
            <div className="education-card glass-card">
              <div className="edu-icon-badge">🎓</div>
              <div className="edu-degree">{PERSONAL_INFO.education.degree}</div>
              <h4 className="edu-major">{PERSONAL_INFO.education.major}</h4>
              <div className="edu-inst">{PERSONAL_INFO.education.institution}</div>
              
              <div className="edu-status-row">
                <span className="status-pill">IPK: {PERSONAL_INFO.education.gpa}</span>
                <span className="edu-year">{PERSONAL_INFO.education.period}</span>
              </div>

              <div className="edu-divider"></div>

              <div className="edu-details">
                <h5>Kompetensi Inti:</h5>
                <p>{PERSONAL_INFO.education.highlight}</p>
              </div>

              {/* Secondary Education Box (Hospitality) */}
              <div className="secondary-edu-box">
                <div className="sec-edu-title">SMK Negeri 1 Indramayu</div>
                <div className="sec-edu-sub">Hospitality & Recreation Marketing (2019 - 2022)</div>
                <p className="sec-edu-desc">{PERSONAL_INFO.secondaryEducation.highlight}</p>
              </div>

              {/* Ready Badge */}
              <div className="ready-badge">
                <span className="ready-dot"></span>
                <span>Siap Berkontribusi di Bidang Software QA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience-section {
          position: relative;
        }

        .experience-layout {
          display: grid;
          grid-template-columns: 1.55fr 1fr;
          gap: 2.5rem;
          align-items: flex-start;
        }

        .col-headline {
          font-size: 1.35rem;
          margin-bottom: 1.75rem;
          color: var(--text-primary);
        }

        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .timeline-card {
          padding: 2.2rem;
          background: #ffffff;
          border-left: 4px solid var(--accent-taupe);
        }

        .card-meta {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 0.75rem;
          flex-wrap: wrap;
        }

        .badge-period {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--accent-taupe-dark);
          background: var(--accent-taupe-soft);
          border: 1px solid rgba(140, 115, 93, 0.25);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
          font-weight: 600;
        }

        .badge-type {
          font-size: 0.75rem;
          color: var(--text-muted);
          background: var(--bg-secondary);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
        }

        .badge-loc {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .card-role {
          font-size: 1.3rem;
          margin-bottom: 0.35rem;
          color: var(--text-primary);
        }

        .card-org {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.95rem;
          color: var(--accent-taupe-dark);
          margin-bottom: 1rem;
        }

        .card-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.25rem;
        }

        .card-achievements {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .card-achievements li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .ach-bullet {
          color: var(--accent-taupe);
          font-size: 0.75rem;
          margin-top: 0.2rem;
        }

        .education-card {
          padding: 2.2rem;
          background: #ffffff;
          position: sticky;
          top: 6rem;
        }

        .edu-icon-badge {
          font-size: 2.2rem;
          margin-bottom: 0.85rem;
        }

        .edu-degree {
          font-size: 0.82rem;
          font-family: var(--font-mono);
          color: var(--accent-taupe-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
          font-weight: 700;
        }

        .edu-major {
          font-size: 1.4rem;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
        }

        .edu-inst {
          font-size: 0.92rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .edu-status-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1.4rem;
          flex-wrap: wrap;
        }

        .status-pill {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-sage-dark);
          background: var(--accent-sage-soft);
          border: 1px solid rgba(84, 110, 99, 0.3);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
        }

        .edu-year {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .edu-divider {
          height: 1px;
          background: var(--border-subtle);
          margin-bottom: 1.4rem;
        }

        .edu-details h5 {
          font-size: 0.95rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .edu-details p {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.4rem;
        }

        .secondary-edu-box {
          background: #fdfbf8;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1rem;
          margin-bottom: 1.5rem;
        }

        .sec-edu-title {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .sec-edu-sub {
          font-size: 0.78rem;
          color: var(--accent-taupe-dark);
          margin-bottom: 0.5rem;
          font-family: var(--font-mono);
        }

        .sec-edu-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .ready-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--accent-sage-soft);
          border: 1px solid rgba(84, 110, 99, 0.3);
          border-radius: var(--radius-md);
          padding: 0.75rem 1rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-sage-dark);
        }

        .ready-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-sage);
          box-shadow: 0 0 8px rgba(84, 110, 99, 0.5);
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
