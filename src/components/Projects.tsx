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
    <section className="section-spacing projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-pill">Studi Kasus Nyata</div>
          <h2 className="section-title">
            Karya & Bukti <span className="gradient-text">Eksekusi Nyata</span>
          </h2>
          <p className="section-description">
            Berikut adalah 4 sistem dan aplikasi yang telah saya selesaikan untuk instansi pemerintahan, 
            mitra sekolah, dan perusahaan komersial. Setiap proyek berakar pada riset kebutuhan pengguna dan dibangun dengan kode siap pakai.
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
                  setSelectedProject(project);
                }
              }}
            >
              {/* Card Header */}
              <div className="card-top">
                <div className="card-badges">
                  <span 
                    className="card-category-pill"
                    style={{ borderColor: `${project.accentColor}50`, color: project.accentColor }}
                  >
                    {project.category}
                  </span>
                  <span className="card-badge-pill">{project.badge}</span>
                </div>
                <div className="partner-chip">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>{project.partner}</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-tagline">{project.tagline}</p>

              {/* Visual Architecture Preview Banner */}
              <div className="card-visual-preview" style={{ background: `linear-gradient(135deg, ${project.accentColor}10, rgba(16, 24, 40, 0.9))` }}>
                <div className="preview-indicator">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                  <span className="preview-label">{project.category} • Case Study</span>
                </div>
                <div className="preview-body">
                  <div className="preview-row">
                    <span className="preview-role-tag">Role</span>
                    <span className="preview-role-val">UI/UX + Frontend</span>
                  </div>
                  <div className="preview-row">
                    <span className="preview-role-tag">Core Value</span>
                    <span className="preview-role-val">{project.metrics[0]}</span>
                  </div>
                </div>
              </div>

              {/* Problem Brief */}
              <div className="problem-brief">
                <strong>Tantangan: </strong>
                <span>{project.problem.substring(0, 115)}...</span>
              </div>

              {/* Tech Stack Chips */}
              <div className="card-tech-chips">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span key={tech} className="tech-chip">{tech}</span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="tech-chip-more">+{project.techStack.length - 4} lainnya</span>
                )}
              </div>

              {/* Action Trigger */}
              <div className="card-action">
                <span className="action-text">Pelajari Seluruh Studi Kasus</span>
                <span className="action-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-dive modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <style jsx>{`
        .projects-section {
          position: relative;
        }

        .filter-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.6rem;
          margin-bottom: 3rem;
        }

        .filter-btn {
          background: rgba(16, 24, 40, 0.6);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .filter-btn:hover {
          color: var(--text-primary);
          border-color: rgba(0, 242, 254, 0.3);
          background: rgba(22, 33, 56, 0.8);
        }

        .filter-btn.active {
          background: var(--gradient-brand);
          color: #07090e;
          border-color: transparent;
          box-shadow: 0 4px 18px rgba(0, 242, 254, 0.3);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .project-card {
          padding: 2.2rem;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          text-align: left;
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.2rem;
          gap: 0.5rem;
        }

        .card-badges {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .card-category-pill {
          font-size: 0.72rem;
          font-weight: 700;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid;
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
          text-transform: uppercase;
          font-family: var(--font-mono);
        }

        .card-badge-pill {
          font-size: 0.72rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.06);
          color: var(--text-secondary);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
        }

        .partner-chip {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .project-title {
          font-size: 1.35rem;
          margin-bottom: 0.5rem;
          line-height: 1.3;
          transition: color var(--transition-fast);
        }

        .project-card:hover .project-title {
          color: var(--accent-cyan);
        }

        .project-tagline {
          font-size: 0.92rem;
          color: var(--text-secondary);
          margin-bottom: 1.4rem;
          line-height: 1.5;
        }

        .card-visual-preview {
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1rem 1.2rem;
          margin-bottom: 1.3rem;
        }

        .preview-indicator {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 0.5rem;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .dot-red { background: #ef4444; }
        .dot-yellow { background: #f59e0b; }
        .dot-green { background: #10b981; }

        .preview-label {
          font-size: 0.72rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
          margin-left: auto;
        }

        .preview-body {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .preview-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
        }

        .preview-role-tag {
          color: var(--text-muted);
        }

        .preview-role-val {
          color: var(--text-primary);
          font-weight: 500;
        }

        .problem-brief {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1.4rem;
        }

        .problem-brief strong {
          color: var(--text-primary);
        }

        .card-tech-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-bottom: 1.6rem;
        }

        .tech-chip {
          font-size: 0.78rem;
          font-family: var(--font-mono);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
        }

        .tech-chip-more {
          font-size: 0.78rem;
          color: var(--accent-cyan);
          padding: 0.25rem 0.4rem;
        }

        .card-action {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.1rem;
          border-top: 1px solid var(--border-subtle);
        }

        .action-text {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--accent-cyan);
        }

        .action-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(0, 242, 254, 0.1);
          color: var(--accent-cyan);
          transition: transform var(--transition-fast);
        }

        .project-card:hover .action-arrow {
          transform: translateX(4px);
          background: var(--gradient-brand);
          color: #07090e;
        }

        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .project-card {
            padding: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
}
