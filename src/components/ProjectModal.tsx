'use client';

import React, { useEffect } from 'react';
import { Project } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
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
            <span className="badge-partner">{project.partner}</span>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Tutup jendela modal"
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
              alt={project.title} 
              className="modal-banner-img"
            />
          </div>
        )}

        {/* Body */}
        <div className="modal-body">
          <h2 id="modal-project-title" className="modal-title">
            {project.title}
          </h2>
          <p className="modal-tagline">{project.tagline}</p>

          {/* QA Verification Box */}
          <div className="modal-qa-box">
            <h4>
              <span className="qa-badge-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              Verifikasi & Cakupan Pengujian
            </h4>
            <div className="qa-checklist">
              {project.qaVerification.map((qaItem, idx) => (
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
                <span>Masalah & Kebutuhan</span>
              </div>
              <p>{project.problem}</p>
            </div>
            <div className="ps-card ps-solution">
              <div className="ps-tag">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4"></path>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>Solusi & Implementasi</span>
              </div>
              <p>{project.solution}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="modal-section">
            <h3>Fitur Utama</h3>
            <ul className="features-list">
              {project.keyFeatures.map((feat, idx) => (
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
            <h3>Teknologi & Tools</h3>
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
            Tutup
          </button>
          <a 
            href="#contact" 
            className="btn btn-primary"
            onClick={onClose}
          >
            Hubungi Saya
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
          padding: 1.25rem;
          animation: fadeIn 0.2s ease-out;
        }

        .modal-content {
          width: 100%;
          max-width: 760px;
          max-height: 88vh;
          overflow-y: auto;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          box-shadow: 0 20px 50px rgba(70, 55, 40, 0.16);
          animation: scaleUp 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .modal-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .badge-category {
          font-size: 0.72rem;
          font-weight: 700;
          background: var(--accent-taupe-soft);
          color: var(--accent-taupe-dark);
          border: 1px solid rgba(140, 115, 93, 0.25);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .badge-partner {
          font-size: 0.72rem;
          font-weight: 600;
          background: var(--bg-secondary);
          color: var(--text-secondary);
          border: 1px solid var(--border-subtle);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
        }

        .modal-close-btn {
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .modal-close-btn:hover {
          color: var(--text-primary);
          background: var(--bg-tertiary);
          transform: rotate(90deg);
        }

        .modal-visual-banner {
          width: 100%;
          height: 190px;
          border-radius: 10px;
          overflow: hidden;
          background: #f7f3ec;
          border: 1px solid var(--border-subtle);
          margin-bottom: 1.25rem;
        }

        .modal-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .modal-title {
          font-size: clamp(1.25rem, 2.5vw, 1.6rem);
          margin-bottom: 0.35rem;
        }

        .modal-tagline {
          font-size: 0.88rem;
          color: var(--accent-taupe-dark);
          font-weight: 500;
          margin-bottom: 1.25rem;
          line-height: 1.5;
        }

        .modal-qa-box {
          background: var(--accent-sage-soft);
          border: 1px solid rgba(84, 110, 99, 0.25);
          border-radius: var(--radius-md);
          padding: 1rem 1.15rem;
          margin-bottom: 1.25rem;
        }

        .modal-qa-box h4 {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.85rem;
          color: var(--accent-sage-dark);
          margin-bottom: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .qa-badge-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--accent-sage);
          color: #ffffff;
        }

        .qa-checklist {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .qa-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.84rem;
          color: var(--text-primary);
          line-height: 1.45;
        }

        .qa-bullet-svg {
          color: var(--accent-sage);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .problem-solution-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .ps-card {
          padding: 0.95rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
        }

        .ps-problem {
          background: #fbf9f6;
          border-color: #e8ded3;
        }

        .ps-solution {
          background: var(--accent-taupe-soft);
          border-color: rgba(140, 115, 93, 0.25);
        }

        .ps-tag {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
          color: var(--text-primary);
        }

        .ps-card p {
          font-size: 0.84rem;
          line-height: 1.55;
          color: var(--text-secondary);
        }

        .modal-section {
          margin-bottom: 1.25rem;
        }

        .modal-section h3 {
          font-size: 0.95rem;
          margin-bottom: 0.55rem;
          color: var(--text-primary);
        }

        .features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .features-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .tech-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .tech-pill {
          font-size: 0.76rem;
          font-family: var(--font-mono);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-sm);
          color: var(--text-primary);
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 0.75rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-subtle);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(8px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @media (max-width: 700px) {
          .problem-solution-grid {
            grid-template-columns: 1fr;
          }
          .modal-content {
            padding: 1.25rem;
          }
          .modal-footer {
            flex-direction: column;
          }
          .modal-footer .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
