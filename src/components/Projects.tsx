'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '@/data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterOptions = [
    { label: 'Semua Proyek (4)', value: 'All' },
    { label: 'Next.js & Web (2)', value: 'Next.js & Web' },
    { label: 'Mobile App (1)', value: 'Mobile App' },
    { label: 'UI/UX & Research (1)', value: 'UI/UX & Research' },
  ];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section className="section-spacing projects-section reveal-on-scroll" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-pill section-pill-dark">Studi Kasus Proyek</div>
          <h2 className="section-title section-title-dark">
            Proyek & <span className="gradient-text-soft">Verifikasi Sistem</span>
          </h2>
          <p className="section-description section-description-dark">
            Portofolio proyek nyata dengan implementasi frontend, integrasi API, 
            serta cakupan pengujian fungsionalitas dan validasi sistem.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-bar" role="tablist">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={`filter-btn ${activeFilter === opt.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(opt.value)}
              id={`filter-btn-${opt.value.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card glass-card"
              onClick={() => setSelectedProject(project)}
              id={`project-card-${project.id}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
            >
              {/* Image Frame */}
              <div className="card-mockup-frame">
                <img 
                  src={project.image || '/projects/spk-kmeans.svg'} 
                  alt={project.title}
                  className="mockup-img"
                  loading="lazy"
                />
                <div className="mockup-overlay-badge">
                  <span>{project.category}</span>
                </div>
              </div>

              {/* Meta */}
              <div className="card-top">
                <span className="card-badge-pill">{project.badge}</span>
                <div className="partner-chip">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>{project.partner}</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-tagline">{project.tagline}</p>

              {/* QA Strip */}
              <div className="qa-highlight-strip">
                <div className="qa-strip-header">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <strong>Fokus Pengujian:</strong>
                </div>
                <p className="qa-strip-desc">{project.qaVerification[0]}</p>
              </div>

              {/* Tech Stack Chips */}
              <div className="card-tech-chips">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span key={tech} className="tech-chip">{tech}</span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="tech-chip-more">+{project.techStack.length - 4}</span>
                )}
              </div>

              {/* Card Action Trigger */}
              <div className="card-action">
                <span className="action-text">Detail & Hasil Pengujian</span>
                <span className="action-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail View */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <style jsx>{`
        .projects-section {
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

        .filter-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2.25rem;
        }

        .filter-btn {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          padding: 0.45rem 1rem;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .filter-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-1px);
        }

        .filter-btn.active {
          background: #ffffff;
          color: #1e1b18;
          border-color: #ffffff;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.25rem;
          width: 100%;
        }

        .project-card {
          padding: 1.2rem;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          text-align: left;
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: var(--radius-md);
          user-select: none;
          box-shadow: 0 4px 18px rgba(35, 24, 14, 0.14);
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 34px rgba(35, 24, 14, 0.22);
          border-color: rgba(255, 255, 255, 0.95);
        }

        .project-card:focus-visible {
          outline: 2px solid #ffffff;
          outline-offset: 2px;
        }

        .card-mockup-frame {
          position: relative;
          width: 100%;
          height: 175px;
          border-radius: 10px;
          overflow: hidden;
          background: #f7f3ec;
          border: 1px solid var(--border-subtle);
          margin-bottom: 0.9rem;
        }

        .mockup-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.35s ease;
        }

        .project-card:hover .mockup-img {
          transform: scale(1.03);
        }

        .mockup-overlay-badge {
          position: absolute;
          top: 0.6rem;
          left: 0.6rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-subtle);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--accent-taupe-dark);
          text-transform: uppercase;
          font-family: var(--font-mono);
          letter-spacing: 0.04em;
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.65rem;
          gap: 0.5rem;
        }

        .card-badge-pill {
          font-size: 0.7rem;
          font-weight: 600;
          background: var(--bg-secondary);
          color: var(--text-secondary);
          padding: 0.15rem 0.55rem;
          border-radius: var(--radius-full);
        }

        .partner-chip {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .project-title {
          font-size: 1.15rem;
          margin-bottom: 0.25rem;
          line-height: 1.35;
          transition: color var(--transition-fast);
          color: var(--text-primary);
        }

        .project-card:hover .project-title {
          color: var(--accent-taupe);
        }

        .project-tagline {
          font-size: 0.84rem;
          color: var(--text-secondary);
          margin-bottom: 0.9rem;
          line-height: 1.45;
        }

        .qa-highlight-strip {
          background: var(--accent-sage-soft);
          border: 1px solid rgba(84, 110, 99, 0.2);
          border-radius: var(--radius-sm);
          padding: 0.6rem 0.8rem;
          margin-bottom: 0.9rem;
        }

        .qa-strip-header {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          color: var(--accent-sage-dark);
          margin-bottom: 0.2rem;
        }

        .qa-strip-desc {
          font-size: 0.78rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .card-tech-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-bottom: 0.9rem;
        }

        .tech-chip {
          font-size: 0.72rem;
          font-family: var(--font-mono);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
        }

        .tech-chip-more {
          font-size: 0.72rem;
          color: var(--accent-taupe-dark);
          font-weight: 600;
          padding: 0.15rem 0.35rem;
        }

        .card-action {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-subtle);
        }

        .action-text {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--accent-taupe-dark);
        }

        .action-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--accent-taupe-soft);
          color: var(--accent-taupe-dark);
          transition: transform var(--transition-fast), background var(--transition-fast), color var(--transition-fast);
        }

        .project-card:hover .action-arrow {
          transform: translateX(3px);
          background: var(--gradient-brand);
          color: #ffffff;
        }

        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .project-card {
            padding: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
}
