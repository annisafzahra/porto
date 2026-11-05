'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '@/data/portfolioData';
import ProjectModal from './ProjectModal';
import { useLanguage } from '@/context/LanguageContext';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'qa' | 'frontend'>('all');
  const { language, t } = useLanguage();

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === 'qa') {
      return proj.category.toLowerCase().includes('qa') || proj.category.toLowerCase().includes('pengujian');
    }
    if (activeFilter === 'frontend') {
      return proj.category.toLowerCase().includes('frontend') || proj.category.toLowerCase().includes('web');
    }
    return true;
  });

  return (
    <section className="section-spacing projects-section reveal-on-scroll" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-pill">{t('Studi Kasus & Portofolio', 'Case Studies & Portfolio')}</div>
          <h2 className="section-title">
            {t('Proyek', 'Featured')}{' '}
            <span className="gradient-text">{t('Unggulan', 'Projects')}</span>
          </h2>
          <p className="section-description">
            {t(
              'Implementasi antarmuka web modern serta pengujian fungsionalitas dan integritas API secara mendalam.',
              'Modern web applications featuring structured functional testing, API validation, and clean UI engineering.'
            )}
          </p>

          {/* Filter Pills */}
          <div className="filter-pill-group">
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              {t('Semua Proyek', 'All Projects')} ({PROJECTS.length})
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'qa' ? 'active' : ''}`}
              onClick={() => setActiveFilter('qa')}
            >
              {t('Fokus SQA & API', 'SQA & API Focus')}
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'frontend' ? 'active' : ''}`}
              onClick={() => setActiveFilter('frontend')}
            >
              Frontend &amp; UI
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => {
            const title = language === 'en' && project.titleEn ? project.titleEn : project.title;
            const tagline = language === 'en' && project.taglineEn ? project.taglineEn : project.tagline;
            const qaSnippet = language === 'en' && project.qaVerificationEn ? project.qaVerificationEn[0] : project.qaVerification[0];

            return (
              <div
                key={project.id}
                className="project-card glass-card"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedProject(project);
                  }
                }}
                id={`project-card-${project.id}`}
              >
                {/* Image Frame */}
                <div className="card-image-box">
                  <img
                    src={project.image}
                    alt={title}
                    className="project-img"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src.endsWith('.jpg')) {
                        target.src = target.src.replace('.jpg', '.svg');
                      }
                    }}
                  />
                  <div className="card-category-tag">{project.category}</div>
                </div>

                {/* Title & Tagline */}
                <h3 className="project-title">{title}</h3>
                <p className="project-tagline">{tagline}</p>

                {/* QA Strip */}
                <div className="qa-highlight-strip">
                  <div className="qa-strip-header">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <strong>{t('Fokus Pengujian:', 'Testing Focus:')}</strong>
                  </div>
                  <p className="qa-strip-desc">{qaSnippet}</p>
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
                  <span className="action-text">{t('Detail & Hasil Pengujian', 'Details & Test Results')}</span>
                  <span className="action-arrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </div>
            );
          })}
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
          background-color: var(--bg-primary);
          width: 100%;
          overflow: hidden;
        }

        .filter-pill-group {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1.25rem;
          padding: 0.25rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
        }

        .filter-btn {
          font-family: inherit;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
          background: transparent;
          border: none;
          padding: 0.4rem 1rem;
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          color: var(--text-primary);
        }

        .filter-btn.active {
          background: var(--accent-taupe);
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(138, 110, 84, 0.25);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.75rem;
          width: 100%;
        }

        .project-card {
          padding: 1.5rem;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--accent-taupe);
        }

        .card-image-box {
          position: relative;
          width: 100%;
          height: 180px;
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: 1.15rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.45s ease;
        }

        .project-card:hover .project-img {
          transform: scale(1.03);
        }

        .card-category-tag {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(140, 115, 93, 0.2);
          color: var(--accent-taupe-dark);
          font-size: 0.72rem;
          font-weight: 600;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 0.35rem;
        }

        .project-tagline {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 0.85rem;
        }

        .qa-highlight-strip {
          background: var(--bg-secondary);
          border-left: 3px solid var(--accent-taupe);
          padding: 0.6rem 0.75rem;
          border-radius: 4px;
          margin-bottom: 0.9rem;
        }

        .qa-strip-header {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.74rem;
          color: var(--accent-taupe-dark);
          margin-bottom: 0.2rem;
        }

        .qa-strip-desc {
          font-size: 0.78rem;
          color: var(--text-secondary);
          line-height: 1.45;
          margin: 0;
        }

        .card-tech-chips {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-wrap: wrap;
          margin-bottom: 1.15rem;
          margin-top: auto;
        }

        .tech-chip {
          font-size: 0.72rem;
          color: var(--text-secondary);
          background: var(--bg-secondary);
          padding: 0.18rem 0.55rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-subtle);
        }

        .tech-chip-more {
          font-size: 0.72rem;
          color: var(--accent-taupe-dark);
          background: var(--accent-taupe-soft);
          padding: 0.18rem 0.5rem;
          border-radius: var(--radius-full);
          font-weight: 600;
        }

        .card-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.85rem;
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
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--accent-taupe-soft);
          color: var(--accent-taupe-dark);
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .project-card:hover .action-arrow {
          transform: translateX(3px);
          background: var(--accent-taupe);
          color: #ffffff;
        }

        @media (max-width: 860px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
