'use client';

import React from 'react';
import { EXPERIENCES, PERSONAL_INFO } from '@/data/portfolioData';

export default function Experience() {
  return (
    <section className="section-spacing experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-pill">Riwayat & Dedikasi</div>
          <h2 className="section-title">
            Pengalaman & <span className="gradient-text">Jejak Karya</span>
          </h2>
          <p className="section-description">
            Kombinasi pengalaman magang industri profesional, kemitraan instansi publik, dan riset terapan di dunia pendidikan.
          </p>
        </div>

        <div className="experience-layout">
          {/* Timeline Column */}
          <div className="timeline-col">
            <h3 className="col-headline">Pengalaman Kerja & Proyek Terapan</h3>
            
            <div className="timeline-items">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="timeline-card glass-card">
                  <div className="card-meta">
                    <span className="badge-period">{exp.period}</span>
                    <span className="badge-type">{exp.type}</span>
                  </div>

                  <h4 className="card-role">{exp.role}</h4>
                  <div className="card-org">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <span>{exp.organization}</span>
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
            <h3 className="col-headline">Pendidikan Formal</h3>

            <div className="education-card glass-card">
              <div className="edu-icon-badge">🎓</div>
              <div className="edu-degree">{PERSONAL_INFO.education.degree}</div>
              <h4 className="edu-major">{PERSONAL_INFO.education.major}</h4>
              <div className="edu-status-row">
                <span className="status-pill">{PERSONAL_INFO.education.status}</span>
                <span className="edu-year">Lulusan Rekayasa Terapan</span>
              </div>

              <div className="edu-divider"></div>

              <div className="edu-details">
                <h5>Keunggulan Lulusan D3 TI:</h5>
                <p>{PERSONAL_INFO.education.highlight}</p>
                <ul>
                  <li>Porsi kurikulum 70% praktikum langsung di laboratorium rekayasa perangkat lunak.</li>
                  <li>Kesiapan tinggi dalam adaptasi teknologi frontend modern tanpa banyak teori abstrak.</li>
                  <li>Telah teruji menyelesaikan produk digital bersama mitra institusi nyata.</li>
                </ul>
              </div>

              <div className="ready-badge">
                <span className="ready-dot"></span>
                <span>Siap Langsung Berkontribusi di Tim</span>
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
          grid-template-columns: 1.5fr 1fr;
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
          gap: 1.5rem;
        }

        .timeline-card {
          padding: 2rem;
          border-left: 3px solid var(--accent-cyan);
        }

        .card-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .badge-period {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--accent-cyan);
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.2);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
        }

        .badge-type {
          font-size: 0.75rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
        }

        .card-role {
          font-size: 1.25rem;
          margin-bottom: 0.35rem;
        }

        .card-org {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .card-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .card-achievements {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .card-achievements li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .ach-bullet {
          color: var(--accent-cyan);
          font-size: 0.75rem;
          margin-top: 0.2rem;
        }

        .education-card {
          padding: 2.2rem;
          position: sticky;
          top: 6rem;
        }

        .edu-icon-badge {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .edu-degree {
          font-size: 0.85rem;
          font-family: var(--font-mono);
          color: var(--accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }

        .edu-major {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .edu-status-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
        }

        .status-pill {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-emerald);
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
        }

        .edu-year {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .edu-divider {
          height: 1px;
          background: var(--border-subtle);
          margin-bottom: 1.5rem;
        }

        .edu-details h5 {
          font-size: 0.95rem;
          color: var(--text-primary);
          margin-bottom: 0.6rem;
        }

        .edu-details p {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1rem;
        }

        .edu-details ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-bottom: 1.75rem;
        }

        .edu-details li {
          font-size: 0.85rem;
          color: var(--text-secondary);
          position: relative;
          padding-left: 1.1rem;
          line-height: 1.5;
        }

        .edu-details li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--accent-cyan);
          font-weight: bold;
        }

        .ready-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.25);
          border-radius: var(--radius-md);
          padding: 0.75rem 1rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-cyan);
        }

        .ready-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 8px var(--accent-cyan);
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
