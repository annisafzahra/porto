'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const [currentYear, setCurrentYear] = React.useState(2026);
  const { t } = useLanguage();

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-badge">AZ</span>
            <div className="brand-meta">
              <strong>Annisa Zahra</strong>
              <span>{PERSONAL_INFO.title}</span>
            </div>
          </div>

          <div className="footer-actions">
            <a href="#" className="back-to-top" id="back-to-top-btn">
              <span>{t('Kembali ke Atas', 'Back to Top')}</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {currentYear} Annisa Zahra. {t('Seluruh hak cipta dilindungi.', 'All rights reserved.')}
          </p>
          <div className="deploy-pill">
            <span className="deploy-dot"></span>
            <span>Next.js &amp; TypeScript • Vercel Ready</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-wrapper {
          background: #2a221a;
          color: #dfd8cf;
          padding: 3rem 0 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.25rem;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .brand-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--accent-taupe);
          color: #ffffff;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.9rem;
        }

        .brand-meta {
          display: flex;
          flex-direction: column;
        }

        .brand-meta strong {
          color: #ffffff;
          font-size: 1rem;
        }

        .brand-meta span {
          font-size: 0.78rem;
          color: #b5a89b;
        }

        .back-to-top {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.8rem;
          color: #dfd8cf;
          text-decoration: none;
          padding: 0.45rem 0.95rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: all 0.2s ease;
        }

        .back-to-top:hover {
          color: #ffffff;
          border-color: var(--accent-taupe);
          background: rgba(255, 255, 255, 0.05);
        }

        .footer-divider {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
          margin: 1.75rem 0 1.25rem;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.85rem;
          font-size: 0.78rem;
          color: #9e9185;
        }

        .copyright-text {
          margin: 0;
        }

        .deploy-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: #b5a89b;
        }

        .deploy-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-sage);
        }

        @media (max-width: 640px) {
          .footer-top {
            flex-direction: column;
            align-items: flex-start;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
