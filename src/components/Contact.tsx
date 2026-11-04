'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

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
          <div className="section-pill">Saluran Komunikasi</div>
          <h2 className="section-title">
            Hubungi <span className="gradient-text">Saya</span>
          </h2>
          <p className="section-description">
            Terbuka untuk diskusi kesempatan kerja di bidang Software Quality Assurance, Software Testing, maupun Frontend Development.
          </p>
        </div>

        {/* 4 Dedicated Contact Cards Grid */}
        <div className="contact-cards-grid">
          {/* 1. Email */}
          <div className="channel-card glass-card">
            <div className="channel-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="channel-info">
              <span className="channel-label">Email Utama</span>
              <strong className="channel-value">{PERSONAL_INFO.email}</strong>
              <p className="channel-subtext">Respon aktif untuk korespondensi rekrutmen &amp; penawaran kerja</p>
            </div>
            <div className="channel-actions">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="btn btn-primary channel-btn"
                id="contact-email-link"
              >
                <span>Kirim Email</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <button 
                type="button" 
                onClick={handleCopyEmail} 
                className="btn-copy"
                aria-label="Salin Email"
                id="contact-copy-email-btn"
              >
                {copiedEmail ? 'Tersalin' : 'Salin'}
              </button>
            </div>
          </div>

          {/* 2. LinkedIn */}
          <div className="channel-card glass-card">
            <div className="channel-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <div className="channel-info">
              <span className="channel-label">Profil LinkedIn</span>
              <strong className="channel-value">Annisa Fathimatuz Zahra</strong>
              <p className="channel-subtext">Terhubung secara profesional untuk melihat rekam jejak &amp; jejaring</p>
            </div>
            <div className="channel-actions">
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary channel-btn"
                id="contact-linkedin-link"
              >
                <span>Buka Profil</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* 3. WhatsApp / Phone */}
          <div className="channel-card glass-card">
            <div className="channel-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="channel-info">
              <span className="channel-label">Kontak / WhatsApp</span>
              <strong className="channel-value">{PERSONAL_INFO.phone}</strong>
              <p className="channel-subtext">Komunikasi langsung untuk koordinasi cepat &amp; jadwal interview</p>
            </div>
            <div className="channel-actions">
              <a 
                href={PERSONAL_INFO.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary channel-btn"
                id="contact-whatsapp-link"
              >
                <span>Chat WhatsApp</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <button 
                type="button" 
                onClick={handleCopyPhone} 
                className="btn-copy"
                aria-label="Salin Nomor"
                id="contact-copy-phone-btn"
              >
                {copiedPhone ? 'Tersalin' : 'Salin'}
              </button>
            </div>
          </div>

          {/* 4. Location & Availability */}
          <div className="channel-card glass-card">
            <div className="channel-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="channel-info">
              <span className="channel-label">Domisili &amp; Ketersediaan</span>
              <strong className="channel-value">{PERSONAL_INFO.location}</strong>
              <p className="channel-subtext">Terbuka untuk penempatan Kerja Remote, Hybrid, maupun On-site</p>
            </div>
            <div className="channel-actions">
              <div className="availability-badge">
                <span className="dot-pulse"></span>
                <span>Siap Bergabung Segera</span>
              </div>
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

        .contact-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.5rem;
          width: 100%;
          max-width: 980px;
          margin: 0 auto;
        }

        .channel-card {
          padding: 1.85rem 1.75rem;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease;
        }

        .channel-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--accent-taupe);
        }

        .channel-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--accent-taupe-soft);
          color: var(--accent-taupe-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.15rem;
        }

        .channel-info {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          margin-bottom: 1.25rem;
        }

        .channel-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--accent-taupe-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.35rem;
        }

        .channel-value {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 0.45rem;
          word-break: break-word;
        }

        .channel-subtext {
          font-size: 0.84rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
        }

        .channel-actions {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
          flex-wrap: wrap;
        }

        .channel-btn {
          font-size: 0.82rem;
          padding: 0.55rem 1.05rem;
        }

        .btn-copy {
          font-family: inherit;
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--text-secondary);
          background: var(--bg-secondary);
          border: 1px solid var(--border-medium);
          padding: 0.55rem 0.85rem;
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-copy:hover {
          background: #fdfbf8;
          border-color: var(--accent-taupe);
          color: var(--text-primary);
        }

        .availability-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 0.95rem;
          background: rgba(79, 107, 95, 0.12);
          border: 1px solid rgba(79, 107, 95, 0.28);
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-sage-dark);
        }

        .dot-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-sage);
          box-shadow: 0 0 0 3px rgba(79, 107, 95, 0.2);
        }

        @media (max-width: 768px) {
          .contact-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
