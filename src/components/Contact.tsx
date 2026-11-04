'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

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

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject || 'Peluang Kerja Software QA')}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section className="section-spacing contact-section reveal-on-scroll" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-pill section-pill-dark">Saluran Komunikasi</div>
          <h2 className="section-title section-title-dark">
            Mari <span className="gradient-text-soft">Terhubung</span>
          </h2>
          <p className="section-description section-description-dark">
            Terbuka untuk diskusi penempatan kerja Software Quality Assurance (QA), pengujian sistem, 
            maupun peluang kolaborasi teknologi informasi.
          </p>
        </div>

        <div className="contact-wrapper glass-card">
          <div className="contact-grid">
            {/* Left Column: 4 Dedicated Contact Channels */}
            <div className="contact-info">
              <h3 className="contact-info-heading">Kontak Langsung</h3>
              <p className="contact-desc">
                Anda dapat menghubungi saya melalui salah satu saluran berikut:
              </p>

              {/* Channel 1: Email */}
              <div className="contact-channel-card">
                <div className="channel-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="channel-detail">
                  <span className="channel-label">Email Resmi</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="channel-value">{PERSONAL_INFO.email}</a>
                </div>
                <button type="button" className="channel-action-btn" onClick={handleCopyEmail} id="copy-email-btn">
                  {copiedEmail ? 'Tersalin' : 'Salin'}
                </button>
              </div>

              {/* Channel 2: LinkedIn */}
              <div className="contact-channel-card">
                <div className="channel-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="channel-detail">
                  <span className="channel-label">Profil LinkedIn</span>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="channel-value">
                    linkedin.com/in/annisa-fathimatuz-zahra
                  </a>
                </div>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="channel-action-btn">
                  Buka
                </a>
              </div>

              {/* Channel 3: Telepon / WhatsApp */}
              <div className="contact-channel-card">
                <div className="channel-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="channel-detail">
                  <span className="channel-label">Kontak / WhatsApp</span>
                  <span className="channel-value">{PERSONAL_INFO.phone}</span>
                </div>
                <button type="button" className="channel-action-btn" onClick={handleCopyPhone} id="copy-phone-btn">
                  {copiedPhone ? 'Tersalin' : 'Salin'}
                </button>
              </div>

              {/* Channel 4: Lokasi */}
              <div className="contact-channel-card">
                <div className="channel-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="channel-detail">
                  <span className="channel-label">Domisili & Ketersediaan</span>
                  <span className="channel-value">{PERSONAL_INFO.location}</span>
                  <span className="channel-sub">Siap Kerja: On-Site, Hybrid, maupun Remote</span>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Message Form */}
            <div className="contact-form-box">
              <h3 className="form-box-title">Kirim Pesan Cepat</h3>
              <p className="form-box-desc">
                Tuliskan penawaran posisi atau pesan Anda untuk membuka draft surat langsung di email.
              </p>

              <form onSubmit={handleSendMail} className="direct-form">
                <div className="form-group">
                  <label htmlFor="contact-subject">Subjek</label>
                  <input 
                    type="text" 
                    id="contact-subject"
                    placeholder="Contoh: Diskusi Posisi Software QA" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Pesan</label>
                  <textarea 
                    id="contact-message"
                    rows={4} 
                    placeholder="Tuliskan pesan Anda..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ width: '100%', padding: '0.8rem' }}
                  id="submit-contact-btn"
                >
                  <span>Kirim Pesan</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
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

        .contact-wrapper {
          padding: 2.25rem;
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: var(--radius-lg);
          box-shadow: 0 10px 30px rgba(45, 32, 20, 0.18);
          position: relative;
          overflow: hidden;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .contact-wrapper:hover {
          box-shadow: 0 16px 40px rgba(45, 32, 20, 0.22);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 2.25rem;
          align-items: flex-start;
          width: 100%;
        }

        .contact-info-heading {
          font-size: 1.15rem;
          margin-bottom: 0.3rem;
          color: var(--text-primary);
        }

        .contact-desc {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.1rem;
        }

        .contact-channel-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.7rem 0.9rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          margin-bottom: 0.6rem;
          transition: transform 0.22s ease, border-color 0.22s ease, background 0.22s ease, box-shadow 0.22s ease;
        }

        .contact-channel-card:hover {
          border-color: var(--accent-taupe);
          background: #fdfbf8;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(45, 32, 20, 0.08);
        }

        .channel-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: var(--accent-taupe-soft);
          color: var(--accent-taupe-dark);
          flex-shrink: 0;
        }

        .channel-detail {
          display: flex;
          flex-direction: column;
          min-width: 0;
          flex: 1;
        }

        .channel-label {
          font-size: 0.7rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--text-muted);
        }

        .channel-value {
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .channel-sub {
          font-size: 0.72rem;
          color: var(--accent-sage-dark);
          margin-top: 0.1rem;
        }

        .channel-action-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.25rem 0.65rem;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          font-size: 0.74rem;
          font-weight: 600;
          color: var(--accent-taupe-dark);
          cursor: pointer;
          transition: all var(--transition-fast);
          flex-shrink: 0;
        }

        .channel-action-btn:hover {
          background: var(--accent-taupe-soft);
          border-color: var(--accent-taupe);
          transform: translateY(-1px);
        }

        .contact-form-box {
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1.4rem;
          transition: border-color 0.2s ease;
        }

        .form-box-title {
          font-size: 1.05rem;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
        }

        .form-box-desc {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .direct-form {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.28rem;
        }

        .form-group label {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .form-group input, .form-group textarea {
          width: 100%;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 0.55rem 0.75rem;
          font-family: var(--font-main);
          font-size: 0.84rem;
          color: var(--text-primary);
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
          outline: none;
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--accent-taupe);
          box-shadow: 0 0 6px rgba(138, 110, 84, 0.2);
        }

        @media (max-width: 900px) {
          .contact-wrapper {
            padding: 1.4rem;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
