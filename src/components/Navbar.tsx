'use client';

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tentang', href: '#about' },
    { label: 'Pendekatan', href: '#philosophy' },
    { label: 'Proyek', href: '#projects' },
    { label: 'Keahlian', href: '#skills' },
    { label: 'Pengalaman', href: '#experience' },
    { label: 'Kontak', href: '#contact' },
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
          <a
            href="#contact"
            className="btn btn-primary nav-cta-btn"
            id="nav-hire-btn"
          >
            <span>Hubungi</span>
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
              Hubungi
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
          cursor: pointer;
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
          box-shadow: 0 2px 8px rgba(138, 110, 84, 0.24);
          transition: transform 0.2s ease;
        }

        .brand-logo:hover .brand-badge {
          transform: scale(1.05);
        }

        .brand-text {
          display: flex;
          align-items: center;
        }

        .brand-text strong {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.35rem;
          background: rgba(255, 255, 255, 0.92);
          padding: 0.38rem 1.25rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-subtle);
          backdrop-filter: blur(8px);
          box-shadow: 0 2px 8px rgba(70, 55, 40, 0.02);
        }

        .nav-item {
          font-size: 0.84rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color var(--transition-fast), transform var(--transition-fast);
        }

        .nav-item:hover {
          color: var(--accent-taupe);
          transform: translateY(-1px);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .nav-cta-btn {
          padding: 0.45rem 1.05rem;
          font-size: 0.82rem;
        }

        .mobile-toggle {
          display: none;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          padding: 0.45rem;
          border-radius: 7px;
          cursor: pointer;
        }

        .mobile-drawer {
          display: none;
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

          .mobile-drawer {
            display: block;
            background: rgba(251, 249, 245, 0.98);
            border-bottom: 1px solid var(--border-subtle);
            padding: 1.25rem;
            animation: slideDown 0.2s ease-out;
            box-shadow: 0 10px 25px rgba(70, 55, 40, 0.06);
          }

          .mobile-nav-links {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }

          .mobile-nav-item {
            font-size: 0.95rem;
            font-weight: 500;
            color: var(--text-primary);
            padding: 0.4rem 0;
            border-bottom: 1px solid var(--border-subtle);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
