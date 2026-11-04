'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Footer() {
  const [currentYear, setCurrentYear] = React.useState(2026);

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
              <span>Kembali ke Atas</span>
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
            © {currentYear} Annisa Zahra. Seluruh hak cipta dilindungi.
          </p>
          <div className="deploy-pill">
            <span className="deploy-dot"></span>
            <span>Next.js & TypeScript • Vercel Ready</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-wrapper {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          background: #2a221a;
          color: #f2ebe1;
          padding: 2.25rem 0 1.6rem;
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
        }

        .footer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .brand-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: var(--gradient-brand);
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.88rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .brand-meta {
          display: flex;
          flex-direction: column;
          line-height: 1.25;
        }

        .brand-meta strong {
          color: #ffffff;
          font-size: 0.95rem;
        }

        .brand-meta span {
          font-size: 0.78rem;
          color: #b8aba0;
        }

        .back-to-top {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.82rem;
          font-weight: 600;
          color: #dcd3c8;
          transition: color var(--transition-fast), transform var(--transition-fast);
        }

        .back-to-top:hover {
          color: #ffffff;
          transform: translateY(-2px);
        }

        .footer-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.85rem;
        }

        .copyright-text {
          font-size: 0.8rem;
          color: #a4978c;
        }

        .deploy-pill {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.72rem;
          font-family: var(--font-mono);
          color: #dcd3c8;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
        }

        .deploy-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-sage);
        }
      `}</style>
    </footer>
  );
}
