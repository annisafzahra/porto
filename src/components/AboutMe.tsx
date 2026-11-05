'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutMe() {
  const { language, t } = useLanguage();

  return (
    <section className="section-spacing about-section reveal-on-scroll" id="about-me">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title-pill-dark">
            {t('Tentang', 'About')}{' '}
            <span className="gradient-text-soft">{t('Saya', 'Me')}</span>
          </h2>
        </div>

        {/* Clean, Focused Statement Card */}
        <div className="about-card-container">
          <div className="about-editorial-card glass-card">
            <div className="quote-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <div className="statement-content">
              {language === 'en' ? (
                <>
                  <p className="statement-lead">
                    Hi! I&apos;m <strong>Annisa Fathimatuz Zahra</strong>, a fresh graduate of 
                    <strong> D3 Teknik Informatika from Politeknik Negeri Indramayu</strong> (GPA 3.94/4.00) 
                    with a strong interest in <strong>Software Quality Assurance</strong> and <strong>Frontend Development</strong>. 
                    I am used to working across API testing using <strong>Postman</strong>, web application development with 
                    <strong> Next.js</strong> and <strong>React</strong>, and ensuring software functionality and quality through structured verification.
                  </p>

                  <div className="statement-divider"></div>

                  <p className="statement-id">
                    Equipped with a solid informatics foundation and rigorous administrative discipline from my vocational background, I bring strong attention to detail, boundary test cases, and a user-centric mindset to modern software development and QA verification cycles.
                  </p>
                </>
              ) : (
                <>
                  <p className="statement-lead">
                    Halo! Saya <strong>Annisa Fathimatuz Zahra</strong>, lulusan 
                    <strong> D3 Teknik Informatika Politeknik Negeri Indramayu</strong> (IPK 3,94/4,00) 
                    dengan minat mendalam pada <strong>Software Quality Assurance (QA)</strong> dan <strong>Frontend Development</strong>. 
                    Saya terbiasa melakukan pengujian API menggunakan <strong>Postman</strong>, pengembangan antarmuka web modern dengan 
                    <strong> Next.js</strong> dan <strong>React</strong>, serta memastikan keandalan fungsionalitas perangkat lunak melalui pengujian yang terstruktur.
                  </p>

                  <div className="statement-divider"></div>

                  <p className="statement-id">
                    Latar belakang akademik Teknik Informatika yang diperkuat disiplin kerja operasional perhotelan membentuk kebiasaan kerja yang teliti, terbiasa memeriksa detail alur sistem dan boundary input formulir, serta berorientasi kuat pada kenyamanan pengguna akhir.
                  </p>
                </>
              )}
            </div>

            <div className="statement-footer">
              <div className="author-pill">
                <span className="dot-active"></span>
                <span>Annisa Fathimatuz Zahra, A.Md.Kom</span>
              </div>
              <div className="location-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{t(PERSONAL_INFO.location, PERSONAL_INFO.locationEn)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
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

        .about-card-container {
          max-width: 860px;
          margin: 0 auto;
          width: 100%;
        }

        .about-editorial-card {
          position: relative;
          padding: 2.5rem 3rem;
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: var(--radius-lg);
          box-shadow: 0 10px 32px rgba(35, 24, 14, 0.18);
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .about-editorial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 46px rgba(35, 24, 14, 0.24);
        }

        .quote-badge {
          position: absolute;
          top: -16px;
          left: 2.5rem;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--accent-taupe);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(138, 110, 84, 0.35);
        }

        .statement-content {
          margin-top: 0.5rem;
        }

        .statement-lead {
          font-size: 1.12rem;
          line-height: 1.75;
          color: var(--text-primary);
          font-weight: 400;
        }

        .statement-lead strong {
          color: var(--accent-taupe-dark);
          font-weight: 600;
        }

        .statement-divider {
          width: 100%;
          height: 1px;
          background: var(--border-subtle);
          margin: 1.5rem 0;
        }

        .statement-id {
          font-size: 0.95rem;
          line-height: 1.65;
          color: var(--text-secondary);
        }

        .statement-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1.75rem;
          padding-top: 1.25rem;
          border-top: 1px dashed var(--border-medium);
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .author-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-taupe-dark);
        }

        .dot-active {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-sage);
        }

        .location-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .about-editorial-card {
            padding: 2rem 1.5rem;
          }

          .statement-lead {
            font-size: 1rem;
          }

          .statement-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
