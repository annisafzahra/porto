'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { t } = useLanguage();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section className="section-spacing contact-section reveal-on-scroll" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title-pill">
            <span>{t('Hubungi', 'Get in')}</span>
            <span className="gradient-text">{t('Saya', 'Touch')}</span>
          </h2>
        </div>

        {/* 4 Cards Arranged in 1 Horizontal Line */}
        <div className="contact-row">
          {/* 1. Email */}
          <div className="contact-col-card glass-card">
            <div className="card-icon-wrap">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <span className="card-label">{t('Email', 'Email')}</span>
            <span className="card-val" title={PERSONAL_INFO.email}>
              {PERSONAL_INFO.email}
            </span>
            <div className="card-actions-compact">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="btn btn-primary btn-mini"
                id="contact-email-link"
              >
                <span>{t('Kirim', 'Send')}</span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <button 
                type="button" 
                onClick={handleCopyEmail} 
                className="btn-copy-mini"
                title={t('Salin Email', 'Copy Email')}
                id="contact-copy-email-btn"
              >
                {copiedEmail ? t('Disalin', 'Copied') : t('Salin', 'Copy')}
              </button>
            </div>
          </div>

          {/* 2. LinkedIn */}
          <div className="contact-col-card glass-card">
            <div className="card-icon-wrap">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <span className="card-label">LinkedIn</span>
            <span className="card-val" title="Annisa Fathimatuz Zahra">
              Annisa Zahra
            </span>
            <div className="card-actions-compact">
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-mini"
                id="contact-linkedin-link"
              >
                <span>{t('Buka Profil', 'View Profile')}</span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* 3. WhatsApp / Telepon */}
          <div className="contact-col-card glass-card">
            <div className="card-icon-wrap">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <span className="card-label">WhatsApp</span>
            <span className="card-val" title={PERSONAL_INFO.phoneDisplay || PERSONAL_INFO.phone}>
              {PERSONAL_INFO.phoneDisplay || PERSONAL_INFO.phone}
            </span>
            <div className="card-actions-compact">
              <a 
                href={PERSONAL_INFO.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-mini"
                id="contact-whatsapp-link"
              >
                <span>Chat</span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <button 
                type="button" 
                onClick={handleCopyPhone} 
                className="btn-copy-mini"
                title={t('Salin Nomor', 'Copy Phone')}
                id="contact-copy-phone-btn"
              >
                {copiedPhone ? t('Disalin', 'Copied') : t('Salin', 'Copy')}
              </button>
            </div>
          </div>

          {/* 4. Lokasi & Ketersediaan */}
          <div className="contact-col-card glass-card">
            <div className="card-icon-wrap">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <span className="card-label">{t('Domisili', 'Location')}</span>
            <span className="card-val" title={t(PERSONAL_INFO.location, PERSONAL_INFO.locationEn)}>
              {t(PERSONAL_INFO.location, PERSONAL_INFO.locationEn)}
            </span>
            <div className="card-actions-compact">
              <span className="status-badge-mini">
                <span className="dot-mini"></span>
                <span>Open to Work</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          position: relative;
          background-color: var(--bg-primary);
          width: 100%;
          overflow: hidden;
        }

        .contact-row {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1.15rem;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        .contact-col-card {
          padding: 1.35rem 1.15rem;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease;
        }

        .contact-col-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--accent-taupe);
        }

        .card-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--accent-taupe-soft);
          color: var(--accent-taupe-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.75rem;
          flex-shrink: 0;
        }

        .card-label {
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--accent-taupe-dark);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 0.3rem;
        }

        .card-val {
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 0.95rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
          display: block;
        }

        .card-actions-compact {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          margin-top: auto;
          width: 100%;
        }

        .btn-mini {
          font-size: 0.76rem;
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-full);
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-weight: 500;
        }

        .btn-copy-mini {
          font-family: inherit;
          font-size: 0.74rem;
          font-weight: 500;
          color: var(--text-secondary);
          background: var(--bg-secondary);
          border: 1px solid var(--border-medium);
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-copy-mini:hover {
          background: #fdfbf8;
          border-color: var(--accent-taupe);
          color: var(--text-primary);
        }

        .status-badge-mini {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.75rem;
          background: rgba(79, 107, 95, 0.12);
          border: 1px solid rgba(79, 107, 95, 0.28);
          border-radius: var(--radius-full);
          font-size: 0.74rem;
          font-weight: 600;
          color: var(--accent-sage-dark);
        }

        .dot-mini {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-sage);
        }

        @media (max-width: 900px) {
          .contact-row {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem;
          }
        }

        @media (max-width: 540px) {
          .contact-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
