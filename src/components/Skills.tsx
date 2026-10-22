'use client';

import React from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';

export default function Skills() {
  return (
    <section className="section-spacing skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-pill">Keahlian & Toolkit</div>
          <h2 className="section-title">
            Kompetensi <span className="gradient-text">Tanpa Metrik Semu</span>
          </h2>
          <p className="section-description">
            Saya tidak mencantumkan persentase palsu seperti &quot;React 85%&quot;. Keahlian di bawah ini diukur dari 
            kemampuan saya mengeksekusi proyek nyata, memecahkan masalah pengguna, dan bekerja sama dalam tim profesional.
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

        {/* Real-World Workflow Callout */}
        <div className="workflow-strip">
          <div className="workflow-title">
            <strong>Standar Workflow:</strong> Dari Ide ke Produksi
          </div>
          <div className="workflow-steps">
            <div className="step-item">
              <span className="step-badge">1</span>
              <span>Observasi & User Empathy</span>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-item">
              <span className="step-badge">2</span>
              <span>Figma System & Prototyping</span>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-item">
              <span className="step-badge">3</span>
              <span>Next.js / Expo Coding</span>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-item">
              <span className="step-badge">4</span>
              <span>Vercel Deploy & User Testing</span>
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
        }

        .skill-card-header {
          margin-bottom: 1.75rem;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 1.25rem;
        }

        .category-num {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--accent-cyan);
          margin-bottom: 0.4rem;
          display: block;
        }

        .category-title {
          font-size: 1.35rem;
          margin-bottom: 0.5rem;
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
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
        }

        .skill-row:hover {
          background: rgba(0, 242, 254, 0.06);
          border-color: rgba(0, 242, 254, 0.25);
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
          font-weight: 500;
          color: var(--text-primary);
        }

        .skill-level-badge {
          font-size: 0.72rem;
          font-family: var(--font-mono);
          color: var(--accent-cyan);
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.2);
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .workflow-strip {
          background: rgba(13, 18, 29, 0.8);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 1.75rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .workflow-title {
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .workflow-title strong {
          color: var(--accent-cyan);
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
          color: #07090e;
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
        }
      `}</style>
    </section>
  );
}
