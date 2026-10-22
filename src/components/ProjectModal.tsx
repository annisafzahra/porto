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
        {/* Modal Header */}
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <h2 id="modal-project-title" className="modal-title">
            {project.title}
          </h2>
          <p className="modal-tagline">{project.tagline}</p>

          {/* Quick Stats Grid */}
          <div className="modal-metrics-box">
            <h4>Dampak & Hasil Teruji</h4>
            <div className="metrics-list">
              {project.metrics.map((metric, i) => (
                <div key={i} className="metric-item">
                  <span className="metric-bullet" style={{ background: project.accentColor }}></span>
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Problem & Solution Double Column */}
          <div className="problem-solution-grid">
            <div className="ps-card ps-problem">
              <div className="ps-tag">⚠️ Tantangan & Masalah Lapangan</div>
              <p>{project.problem}</p>
            </div>
            <div className="ps-card ps-solution">
              <div className="ps-tag">💡 Pendekatan Solusi & Eksekusi</div>
              <p>{project.solution}</p>
            </div>
          </div>

          {/* Key Engineering Features */}
          <div className="modal-section">
            <h3>Fitur Utama & Interaktivitas</h3>
            <ul className="features-list">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={project.accentColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* UI/UX Design Aspects */}
          <div className="modal-section">
            <h3>Aspek UI/UX & Riset Figma</h3>
            <ul className="design-aspects-list">
              {project.designAspects.map((aspect, idx) => (
                <li key={idx}>
                  <span className="figma-dot"></span>
                  <span>{aspect}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="modal-section">
            <h3>Teknologi yang Digunakan</h3>
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
            Diskusikan Proyek Serupa
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
          background: rgba(4, 7, 12, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.2s ease-out;
        }

        .modal-content {
          width: 100%;
          max-width: 820px;
          max-height: 90vh;
          overflow-y: auto;
          background: #0d121d;
          border: 1px solid var(--border-hover);
          padding: 2.2rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
          animation: scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .modal-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .badge-category {
          font-size: 0.75rem;
          font-weight: 700;
          background: rgba(0, 242, 254, 0.12);
          color: var(--accent-cyan);
          border: 1px solid rgba(0, 242, 254, 0.3);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .badge-partner {
          font-size: 0.75rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          border: 1px solid var(--border-subtle);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
        }

        .modal-close-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .modal-close-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.15);
          transform: rotate(90deg);
        }

        .modal-title {
          font-size: clamp(1.5rem, 3vw, 2rem);
          margin-bottom: 0.4rem;
        }

        .modal-tagline {
          font-size: 1.05rem;
          color: var(--accent-cyan);
          margin-bottom: 1.75rem;
        }

        .modal-metrics-box {
          background: rgba(0, 242, 254, 0.04);
          border: 1px solid rgba(0, 242, 254, 0.18);
          border-radius: var(--radius-md);
          padding: 1.25rem 1.5rem;
          margin-bottom: 2rem;
        }

        .modal-metrics-box h4 {
          font-size: 0.95rem;
          color: var(--accent-cyan);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .metrics-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .metric-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.92rem;
          color: var(--text-primary);
        }

        .metric-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .problem-solution-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .ps-card {
          padding: 1.3rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
        }

        .ps-problem {
          background: rgba(239, 68, 68, 0.05);
          border-color: rgba(239, 68, 68, 0.2);
        }

        .ps-solution {
          background: rgba(16, 185, 129, 0.05);
          border-color: rgba(16, 185, 129, 0.2);
        }

        .ps-tag {
          font-size: 0.82rem;
          font-weight: 700;
          margin-bottom: 0.6rem;
          color: var(--text-primary);
        }

        .ps-card p {
          font-size: 0.92rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .modal-section {
          margin-bottom: 2rem;
        }

        .modal-section h3 {
          font-size: 1.15rem;
          margin-bottom: 0.85rem;
          color: var(--text-primary);
        }

        .features-list, .design-aspects-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .features-list li, .design-aspects-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .figma-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-purple);
          margin-top: 0.5rem;
          flex-shrink: 0;
        }

        .tech-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-pill {
          font-size: 0.82rem;
          font-family: var(--font-mono);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.8rem;
          border-radius: var(--radius-sm);
          color: var(--text-primary);
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-subtle);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(10px);
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
            padding: 1.5rem;
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
