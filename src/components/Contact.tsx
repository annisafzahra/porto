'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject || 'Tawaran Kerja / Diskusi Proyek')}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section className="section-spacing contact-section" id="contact">
      <div className="container">
        <div className="contact-wrapper glass-card">
          <div className="contact-grid">
            {/* Left Info Column */}
            <div className="contact-info">
              <div className="section-pill" style={{ marginBottom: '1.25rem' }}>Siap Berkontribusi</div>
              <h2 className="contact-title">
                Mari Bangun Solusi Digital yang <span className="gradient-text">Berdampak</span>
              </h2>
              <p className="contact-desc">
                Saya sedang aktif membuka peluang kerja untuk posisi <strong>Junior Frontend Developer</strong>, 
                <strong>UI Engineer</strong>, maupun <strong>Design Engineer</strong>. Baik sistem kerja Full-Time, Kontrak, On-Site maupun Remote.
              </p>

              <div className="contact-card-direct">
                <div className="direct-label">Alamat Email Resmi:</div>
                <div className="email-copy-bar">
                  <span className="email-text">{PERSONAL_INFO.email}</span>
                  <button 
                    type="button" 
                    className="copy-btn" 
                    onClick={handleCopyEmail}
                    id="copy-email-btn"
                  >
                    {copied ? (
                      <span className="copied-text">✓ Tersalin!</span>
                    ) : (
                      <span>Salin Email</span>
                    )}
                  </button>
                </div>
              </div>

              {/* Status List */}
              <div className="contact-status-list">
                <div className="status-item">
                  <span className="status-dot"></span>
                  <span><strong>Status:</strong> {PERSONAL_INFO.availability}</span>
                </div>
                <div className="status-item">
                  <span className="status-dot"></span>
                  <span><strong>Lokasi:</strong> {PERSONAL_INFO.location} (Siap Relokasi / WFH / WFO)</span>
                </div>
                <div className="status-item">
                  <span className="status-dot"></span>
                  <span><strong>Gelar:</strong> {PERSONAL_INFO.education.degree} ({PERSONAL_INFO.education.major})</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="social-links-row">
                <a 
                  href={PERSONAL_INFO.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn"
                  id="social-link-github"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>GitHub Profile</span>
                </a>

                <a 
                  href={PERSONAL_INFO.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn"
                  id="social-link-linkedin"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            {/* Right Quick Message Form */}
            <div className="contact-form-box">
              <h3 className="form-box-title">Kirim Pesan Langsung</h3>
              <p className="form-box-desc">
                Punya penawaran posisi di tim atau ingin melihat pratinjau source code? Isi form ini untuk membuka pesan di email Anda.
              </p>

              <form onSubmit={handleSendMail} className="direct-form">
                <div className="form-group">
                  <label htmlFor="contact-subject">Subjek / Keperluan</label>
                  <input 
                    type="text" 
                    id="contact-subject"
                    placeholder="Contoh: Peluang Frontend Developer di Perusahaan X" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Pesan / Rincian Penawaran</label>
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
                  style={{ width: '100%', padding: '0.9rem' }}
                  id="submit-contact-btn"
                >
                  <span>Kirim ke Email ({PERSONAL_INFO.nickname})</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
        }

        .contact-wrapper {
          padding: 3.5rem;
          background: rgba(13, 18, 29, 0.9);
          border: 1px solid var(--border-hover);
          position: relative;
          overflow: hidden;
        }

        .contact-wrapper::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(0, 242, 254, 0.15), transparent 70%);
          pointer-events: none;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        .contact-title {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          margin-bottom: 1rem;
        }

        .contact-desc {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .contact-card-direct {
          background: rgba(16, 24, 40, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1.25rem 1.5rem;
          margin-bottom: 2rem;
        }

        .direct-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .email-copy-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .email-text {
          font-family: var(--font-mono);
          font-size: 1.05rem;
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .copy-btn {
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.3);
          color: var(--accent-cyan);
          padding: 0.45rem 1rem;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .copy-btn:hover {
          background: var(--gradient-brand);
          color: #07090e;
        }

        .copied-text {
          color: #10b981;
          font-weight: 700;
        }

        .contact-status-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 2rem;
        }

        .status-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .status-item strong {
          color: var(--text-primary);
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-cyan);
        }

        .social-links-row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1.2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          color: var(--text-primary);
          transition: all var(--transition-fast);
        }

        .social-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .contact-form-box {
          background: rgba(16, 24, 40, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 2.2rem;
        }

        .form-box-title {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }

        .form-box-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .direct-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .form-group input, .form-group textarea {
          width: 100%;
          background: rgba(7, 9, 14, 0.8);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 0.75rem 1rem;
          font-family: var(--font-main);
          font-size: 0.9rem;
          color: var(--text-primary);
          transition: border-color var(--transition-fast);
          outline: none;
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 12px rgba(0, 242, 254, 0.2);
        }

        @media (max-width: 900px) {
          .contact-wrapper {
            padding: 2rem;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
