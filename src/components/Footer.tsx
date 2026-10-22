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
            <span className="brand-badge">AFZ</span>
            <div className="brand-meta">
              <strong>{PERSONAL_INFO.name}</strong>
              <span>{PERSONAL_INFO.title} • {PERSONAL_INFO.education.degree}</span>
            </div>
          </div>

          <div className="footer-actions">
            <a href="#" className="back-to-top" id="back-to-top-btn">
              <span>Kembali ke Atas</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {currentYear} {PERSONAL_INFO.name}. Seluruh hak cipta dilindungi.
          </p>
          <div className="deploy-pill">
            <span className="deploy-dot"></span>
            <span>Zero-Config Static Architecture • Next.js & Vercel Ready</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-wrapper {
          border-top: 1px solid var(--border-subtle);
          background: rgba(4, 7, 12, 0.95);
          padding: 3rem 0 2rem;
          margin-top: 4rem;
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
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
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: var(--gradient-brand);
          color: #07090e;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.9rem;
        }

        .brand-meta {
          display: flex;
          flex-direction: column;
          line-height: 1.25;
        }

        .brand-meta strong {
          color: var(--text-primary);
          font-size: 0.95rem;
        }

        .brand-meta span {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .back-to-top {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }

        .back-to-top:hover {
          color: var(--accent-cyan);
        }

        .footer-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.05);
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright-text {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .deploy-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
        }

        .deploy-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
        }
      `}</style>
    </footer>
  );
}
