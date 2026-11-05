'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('Tentang', 'About'), href: '#about-me' },
    { label: t('Pendidikan', 'Education'), href: '#education' },
    { label: t('Pengalaman', 'Experience'), href: '#experience' },
    { label: t('Proyek', 'Projects'), href: '#projects' },
    { label: t('Keahlian', 'Skills'), href: '#skills' },
    { label: t('Kontak', 'Contact'), href: '#contact' },
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="brand-logo" id="nav-brand-logo">
          <span className="brand-badge">AZ</span>
          <span className="brand-text">
            <strong>Annisa Zahra</strong>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-item"
              id={`nav-link-${link.href.replace('#', '')}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          {/* Language Switcher Pill */}
          <div className="lang-switcher" id="nav-language-switcher">
            <button
              type="button"
              className={`lang-btn ${language === 'id' ? 'active' : ''}`}
              onClick={() => setLanguage('id')}
              aria-label="Ubah ke Bahasa Indonesia"
              id="lang-btn-id"
            >
              ID
            </button>
            <button
              type="button"
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
              aria-label="Switch to English"
              id="lang-btn-en"
            >
              EN
            </button>
          </div>

          <a
            href="#contact"
            className="btn btn-primary nav-cta-btn"
            id="nav-hire-btn"
          >
            <span>{t('Hubungi', 'Contact')}</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" id="mobile-nav-drawer">
          <div className="mobile-drawer-top">
            <div className="lang-switcher-mobile">
              <span className="lang-mobile-label">Language:</span>
              <div className="lang-switcher">
                <button
                  type="button"
                  className={`lang-btn ${language === 'id' ? 'active' : ''}`}
                  onClick={() => setLanguage('id')}
                >
                  ID
                </button>
                <button
                  type="button"
                  className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                  onClick={() => setLanguage('en')}
                >
                  EN
                </button>
              </div>
            </div>
          </div>

          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ marginTop: '0.85rem', width: '100%' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('Hubungi Saya', 'Contact Me')}
            </a>
          </nav>
        </div>
      )}

      <style jsx>{`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.25s ease;
        }

        .navbar-wrapper.scrolled {
          padding: 0.6rem 0;
          background: rgba(251, 249, 245, 0.94);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border-subtle);
          box-shadow: 0 4px 18px rgba(70, 55, 40, 0.04);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          text-decoration: none;
        }

        .brand-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: var(--accent-taupe);
          color: #ffffff;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          box-shadow: 0 2px 6px rgba(138, 110, 84, 0.3);
        }

        .brand-text {
          font-size: 0.98rem;
          letter-spacing: -0.01em;
          color: var(--text-primary);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(239, 233, 222, 0.6);
          padding: 0.3rem 0.5rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-subtle);
        }

        .nav-item {
          padding: 0.35rem 0.85rem;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          border-radius: var(--radius-full);
          transition: all 0.2s ease;
        }

        .nav-item:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.7);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        /* Language Switcher */
        .lang-switcher {
          display: inline-flex;
          align-items: center;
          background: rgba(239, 233, 222, 0.85);
          border: 1px solid var(--border-medium);
          padding: 2px;
          border-radius: var(--radius-full);
        }

        .lang-btn {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: transparent;
          border: none;
          padding: 0.28rem 0.65rem;
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: all 0.22s ease;
        }

        .lang-btn:hover {
          color: var(--text-primary);
        }

        .lang-btn.active {
          background: var(--accent-taupe);
          color: #ffffff;
          box-shadow: 0 2px 6px rgba(138, 110, 84, 0.3);
        }

        .nav-cta-btn {
          padding: 0.5rem 1.1rem;
          font-size: 0.82rem;
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          border: 1px solid var(--border-medium);
          padding: 0.4rem;
          border-radius: 8px;
          color: var(--text-primary);
          cursor: pointer;
        }

        .mobile-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #fbf9f5;
          border-bottom: 1px solid var(--border-subtle);
          padding: 1.25rem 1.5rem 1.5rem;
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.08);
        }

        .mobile-drawer-top {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .lang-switcher-mobile {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .lang-mobile-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mobile-nav-item {
          padding: 0.65rem 0.75rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-primary);
          text-decoration: none;
          border-radius: var(--radius-sm);
          transition: background 0.15s ease;
        }

        .mobile-nav-item:hover {
          background: var(--bg-secondary);
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }

          .mobile-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </header>
  );
}
