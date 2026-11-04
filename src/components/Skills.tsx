'use client';

import React from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';

export default function Skills() {
  return (
    <section className="section-spacing skills-section reveal-on-scroll" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-pill">Keahlian & Toolkit Pengujian</div>
          <h2 className="section-title">
            Kompetensi & <span className="gradient-text">Alat Kerja Nyata</span>
          </h2>
          <p className="section-description">
            Keahlian di bawah ini diukur dari eksekusi nyata pada pengujian API menggunakan Postman, 
            identifikasi bug, perancangan antarmuka Figma, dan pengembangan kode web produksi.
          </p>
        </div>

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
                    <div className="skill-info">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-level-badge">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Real-World QA Workflow Callout Strip */}
        <div className="workflow-strip">
          <div className="workflow-title">
            <strong>Standar Workflow SQA:</strong> Dari Kebutuhan ke Rilis Stabil
          </div>
          <div className="workflow-steps">
            <div className="step-item">
              <span className="step-badge">1</span>
              <span>Analisis Kebutuhan Klien</span>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-item">
              <span className="step-badge">2</span>
              <span>Postman Test Collections</span>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-item">
              <span className="step-badge">3</span>
              <span>Identifikasi & Bug Logging</span>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-item">
              <span className="step-badge">4</span>
              <span>Verifikasi Tindak Lanjut</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          position: relative;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          margin-bottom: 3rem;
        }

        .skill-card {
          padding: 2.2rem 1.8rem;
          display: flex;
          flex-direction: column;
          background: #ffffff;
        }

        .skill-card-header {
          margin-bottom: 1.75rem;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 1.25rem;
        }

        .category-num {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--accent-taupe);
          font-weight: 700;
          margin-bottom: 0.4rem;
          display: block;
        }

        .category-title {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .category-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .skill-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.65rem 0.85rem;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
          gap: 0.6rem;
        }

        .skill-row:hover {
          background: var(--accent-taupe-soft);
          border-color: rgba(140, 115, 93, 0.3);
          transform: translateX(3px);
        }

        .skill-info {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .skill-icon {
          font-size: 1.1rem;
        }

        .skill-name {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .skill-level-badge {
          font-size: 0.72rem;
          font-family: var(--font-mono);
          color: var(--accent-taupe-dark);
          background: var(--accent-taupe-soft);
          border: 1px solid rgba(140, 115, 93, 0.25);
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-full);
          font-weight: 500;
          text-align: right;
        }

        .workflow-strip {
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 1.75rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
          box-shadow: var(--shadow-sm);
        }

        .workflow-title {
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .workflow-title strong {
          color: var(--accent-taupe-dark);
        }

        .workflow-steps {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .step-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .step-badge {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--gradient-brand);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-arrow {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .workflow-strip {
            flex-direction: column;
            align-items: flex-start;
          }
          .workflow-steps {
            flex-direction: column;
            align-items: flex-start;
          }
          .step-arrow {
            display: none;
          }
          .skill-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .skill-level-badge {
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
}
