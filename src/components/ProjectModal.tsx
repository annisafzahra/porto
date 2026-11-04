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

        {/* Modal Visual Mockup Preview */}
        {project.image && (
          <div className="modal-visual-banner">
            <img 
              src={project.image} 
              alt={project.title} 
              className="modal-banner-img"
            />
          </div>
        )}

        {/* Modal Body */}
        <div className="modal-body">
          <h2 id="modal-project-title" className="modal-title">
            {project.title}
          </h2>
          <p className="modal-tagline">{project.tagline}</p>

          {/* QA & Testing Verification Checklist Box */}
          <div className="modal-qa-box">
            <h4>
              <span className="qa-badge-icon">✓</span>
              Verifikasi & Skenario Pengujian (QA Highlights)
            </h4>
            <div className="qa-checklist">
              {project.qaVerification.map((qaItem, idx) => (
                <div key={idx} className="qa-item">
                  <span className="qa-check-bullet">✓</span>
                  <span>{qaItem}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Impact & Outcome Grid */}
          <div className="modal-metrics-box">
            <h4>Hasil Teruji & Metrik Dampak</h4>
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
              <div className="ps-tag">⚠️ Masalah & Kebutuhan Lapangan</div>
              <p>{project.problem}</p>
            </div>
            <div className="ps-card ps-solution">
              <div className="ps-tag">💡 Solusi & Implementasi Teknis</div>
              <p>{project.solution}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="modal-section">
            <h3>Fitur & Kemampuan Sistem</h3>
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
            <h3>Aspek UI/UX & Kegunaan Pengguna</h3>
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
            <h3>Teknologi & Alat Pengujian</h3>
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
            Diskusikan Peluang QA di Tim Anda
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
          background: rgba(28, 25, 22, 0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
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
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 2.2rem;
          box-shadow: 0 25px 60px rgba(70, 55, 40, 0.18);
          animation: scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .modal-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .badge-category {
          font-size: 0.75rem;
          font-weight: 700;
          background: var(--accent-taupe-soft);
          color: var(--accent-taupe-dark);
          border: 1px solid rgba(140, 115, 93, 0.25);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .badge-partner {
          font-size: 0.75rem;
          font-weight: 600;
          background: var(--bg-secondary);
          color: var(--text-secondary);
          border: 1px solid var(--border-subtle);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
        }

        .modal-close-btn {
          background: var(--bg-secondary);
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
          background: var(--bg-tertiary);
          transform: rotate(90deg);
        }

        .modal-visual-banner {
          width: 100%;
          height: 240px;
          border-radius: 12px;
          overflow: hidden;
          background: #f7f3ec;
          border: 1px solid var(--border-subtle);
          margin-bottom: 1.5rem;
        }

        .modal-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .modal-title {
          font-size: clamp(1.4rem, 2.8vw, 1.85rem);
          margin-bottom: 0.4rem;
        }

        .modal-tagline {
          font-size: 0.98rem;
          color: var(--accent-taupe-dark);
          font-weight: 500;
          margin-bottom: 1.5rem;
          line-height: 1.55;
        }

        .modal-qa-box {
          background: var(--accent-sage-soft);
          border: 1px solid rgba(84, 110, 99, 0.25);
          border-radius: var(--radius-md);
          padding: 1.25rem 1.4rem;
          margin-bottom: 1.5rem;
        }

        .modal-qa-box h4 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.92rem;
          color: var(--accent-sage-dark);
          margin-bottom: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .qa-badge-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--accent-sage);
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 900;
        }

        .qa-checklist {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .qa-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.88rem;
          color: var(--text-primary);
          line-height: 1.5;
        }

        .qa-check-bullet {
          color: var(--accent-sage);
          font-weight: 800;
        }

        .modal-metrics-box {
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1.25rem 1.4rem;
          margin-bottom: 1.5rem;
        }

        .modal-metrics-box h4 {
          font-size: 0.9rem;
          color: var(--accent-taupe-dark);
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
          font-size: 0.9rem;
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
          margin-bottom: 1.75rem;
        }

        .ps-card {
          padding: 1.2rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
        }

        .ps-problem {
          background: #fbf8f5;
          border-color: #ebdcd0;
        }

        .ps-solution {
          background: var(--accent-taupe-soft);
          border-color: rgba(140, 115, 93, 0.25);
        }

        .ps-tag {
          font-size: 0.82rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .ps-card p {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .modal-section {
          margin-bottom: 1.75rem;
        }

        .modal-section h3 {
          font-size: 1.1rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .features-list, .design-aspects-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .features-list li, .design-aspects-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .figma-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-taupe);
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
          background: var(--bg-secondary);
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
