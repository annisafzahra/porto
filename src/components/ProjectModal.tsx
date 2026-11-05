'use client';

import React, { useEffect } from 'react';
import { Project } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const title = language === 'en' && project.titleEn ? project.titleEn : project.title;
  const badge = language === 'en' && project.badgeEn ? project.badgeEn : project.badge;
  const tagline = language === 'en' && project.taglineEn ? project.taglineEn : project.tagline;
  const problem = language === 'en' && project.problemEn ? project.problemEn : project.problem;
  const solution = language === 'en' && project.solutionEn ? project.solutionEn : project.solution;
  const keyFeatures = language === 'en' && project.keyFeaturesEn ? project.keyFeaturesEn : project.keyFeatures;
  const qaVerification = language === 'en' && project.qaVerificationEn ? project.qaVerificationEn : project.qaVerification;

  return (
    <div className="modal-backdrop" onClick={onClose} id="project-detail-modal">
      <div 
        className="modal-content glass-card" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Header */}
        <div className="modal-header">
          <div className="modal-badges">
            <span className="badge-category">{project.category}</span>
            <span className="badge-partner">{badge || project.partner}</span>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label={t('Tutup jendela modal', 'Close modal dialog')}
            id="close-modal-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Visual Mockup Banner */}
        {project.image && (
          <div className="modal-visual-banner">
            <img 
              src={project.image} 
              alt={title} 
              className="modal-banner-img"
            />
          </div>
        )}

        {/* Body */}
        <div className="modal-body">
          <h2 id="modal-project-title" className="modal-title">
            {title}
          </h2>
          <p className="modal-tagline">{tagline}</p>

          {/* QA Verification Box */}
          <div className="modal-qa-box">
            <h4>
              <span className="qa-badge-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              {t('Verifikasi & Cakupan Pengujian (SQA)', 'QA Verification & Test Scope (SQA)')}
            </h4>
            <div className="qa-checklist">
              {qaVerification.map((qaItem, idx) => (
                <div key={idx} className="qa-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="qa-bullet-svg">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{qaItem}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="problem-solution-grid">
            <div className="ps-card ps-problem">
              <div className="ps-tag">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>{t('Masalah & Kebutuhan', 'Problem & Requirements')}</span>
              </div>
              <p>{problem}</p>
            </div>
            <div className="ps-card ps-solution">
              <div className="ps-tag">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4"></path>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>{t('Solusi & Implementasi', 'Solution & Architecture')}</span>
              </div>
              <p>{solution}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="modal-section">
            <h3>{t('Fitur Utama', 'Key Features')}</h3>
            <ul className="features-list">
              {keyFeatures.map((feat, idx) => (
                <li key={idx}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-taupe)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="modal-section">
            <h3>{t('Teknologi & Tools', 'Technologies & Tools')}</h3>
            <div className="tech-pills-row">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={onClose}
          >
            {t('Tutup', 'Close')}
          </button>
          <a 
            href="#contact" 
            className="btn btn-primary"
            onClick={onClose}
          >
            {t('Hubungi Saya', 'Contact Me')}
          </a>
        </div>
      </div>

      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(28, 25, 22, 0.55);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.2s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: #ffffff;
          border-radius: var(--radius-lg);
          max-width: 720px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.22);
          border: 1px solid var(--border-subtle);
          animation: slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .modal-badges {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .badge-category {
          font-size: 0.74rem;
          font-weight: 600;
          color: var(--accent-taupe-dark);
          background: var(--accent-taupe-soft);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
        }

        .badge-partner {
          font-size: 0.74rem;
          color: var(--text-muted);
          background: var(--bg-secondary);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
        }

        .modal-close-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0.4rem;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease;
        }

        .modal-close-btn:hover {
          background: var(--bg-secondary);
          color: var(--text-primary);
        }

        .modal-visual-banner {
          width: 100%;
          height: 220px;
          background: var(--bg-secondary);
          overflow: hidden;
          border-bottom: 1px solid var(--border-subtle);
        }

        .modal-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-body {
          padding: 1.75rem 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .modal-title {
          font-size: 1.45rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.25;
          margin-bottom: 0.25rem;
        }

        .modal-tagline {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin: 0;
        }

        .modal-qa-box {
          background: var(--bg-secondary);
          border: 1px solid rgba(138, 110, 84, 0.25);
          border-left: 4px solid var(--accent-taupe);
          border-radius: var(--radius-sm);
          padding: 1.15rem 1.25rem;
        }

        .modal-qa-box h4 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--accent-taupe-dark);
          margin-bottom: 0.75rem;
        }

        .qa-badge-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--accent-taupe);
          color: #ffffff;
        }

        .qa-checklist {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .qa-item {
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
          font-size: 0.84rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        :global(.qa-bullet-svg) {
          color: var(--accent-sage);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .problem-solution-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .ps-card {
          padding: 1.15rem 1.25rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-subtle);
          background: #ffffff;
        }

        .ps-tag {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.76rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 0.55rem;
          color: var(--accent-taupe-dark);
        }

        .ps-card p {
          font-size: 0.84rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin: 0;
        }

        .modal-section h3 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.65rem;
        }

        .features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .features-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
          font-size: 0.84rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .tech-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .tech-pill {
          font-size: 0.76rem;
          color: var(--text-secondary);
          background: var(--bg-secondary);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-subtle);
        }

        .modal-footer {
          padding: 1rem 1.75rem;
          border-top: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.75rem;
          background: #faf8f5;
        }

        @media (max-width: 640px) {
          .problem-solution-grid {
            grid-template-columns: 1fr;
          }

          .modal-content {
            max-height: 95vh;
          }
        }
      `}</style>
    </div>
  );
}
