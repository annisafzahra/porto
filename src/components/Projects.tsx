'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '@/data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterOptions = [
    { label: 'Semua Studi Kasus (4)', value: 'All' },
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
          <div className="section-pill">Studi Kasus & Verifikasi Riil</div>
          <h2 className="section-title">
            Karya & Bukti <span className="gradient-text">Pengujian Sistem</span>
          </h2>
          <p className="section-description">
            4 sistem dan aplikasi nyata yang telah saya selesaikan untuk mitra sekolah, instansi pemerintahan, dan perusahaan. 
            Setiap proyek dilengkapi aspek pengujian API, validasi batasan sistem, dan verifikasi antarmuka.
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
              {/* Project Image Mockup Frame */}
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

              {/* Card Meta & Badges */}
              <div className="card-top">
                <div className="card-badges">
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

              {/* QA Verification Highlight Box */}
              <div className="qa-highlight-strip">
                <div className="qa-strip-header">
                  <span className="qa-icon">✓</span>
                  <strong>Fokus Pengujian QA:</strong>
                </div>
                <p className="qa-strip-desc">
                  {project.qaVerification[0]}
                </p>
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
                <span className="action-text">Buka Laporan Studi Kasus Lengkap</span>
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
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
          box-shadow: 0 1px 3px rgba(70, 55, 40, 0.03);
        }

        .filter-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-hover);
          background: #ffffff;
        }

        .filter-btn.active {
          background: var(--gradient-brand);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 14px rgba(140, 115, 93, 0.28);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .project-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          text-align: left;
          background: #ffffff;
        }

        .card-mockup-frame {
          position: relative;
          width: 100%;
          height: 240px;
          border-radius: 14px;
          overflow: hidden;
          background: #f7f3ec;
          border: 1px solid var(--border-subtle);
          margin-bottom: 1.4rem;
        }

        .mockup-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .project-card:hover .mockup-img {
          transform: scale(1.03);
        }

        .mockup-overlay-badge {
          position: absolute;
          top: 0.85rem;
          left: 0.85rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-subtle);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.72rem;
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
          margin-bottom: 1rem;
          gap: 0.5rem;
        }

        .card-badges {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .card-badge-pill {
          font-size: 0.72rem;
          font-weight: 600;
          background: var(--bg-secondary);
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
          margin-bottom: 0.4rem;
          line-height: 1.3;
          transition: color var(--transition-fast);
          color: var(--text-primary);
        }

        .project-card:hover .project-title {
          color: var(--accent-taupe);
        }

        .project-tagline {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
          line-height: 1.5;
        }

        .qa-highlight-strip {
          background: var(--accent-sage-soft);
          border: 1px solid rgba(84, 110, 99, 0.25);
          border-radius: var(--radius-md);
          padding: 0.85rem 1rem;
          margin-bottom: 1.25rem;
        }

        .qa-strip-header {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: var(--accent-sage-dark);
          margin-bottom: 0.25rem;
        }

        .qa-icon {
          font-weight: 900;
        }

        .qa-strip-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .card-tech-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-bottom: 1.4rem;
        }

        .tech-chip {
          font-size: 0.78rem;
          font-family: var(--font-mono);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
        }

        .tech-chip-more {
          font-size: 0.78rem;
          color: var(--accent-taupe-dark);
          font-weight: 600;
          padding: 0.25rem 0.4rem;
        }

        .card-action {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }

        .action-text {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-taupe-dark);
        }

        .action-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--accent-taupe-soft);
          color: var(--accent-taupe-dark);
          transition: transform var(--transition-fast);
        }

        .project-card:hover .action-arrow {
          transform: translateX(4px);
          background: var(--gradient-brand);
          color: #ffffff;
        }

        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .project-card {
            padding: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
