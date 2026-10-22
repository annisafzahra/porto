'use client';

import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';

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
    { label: 'Pendekatan Desain & Kode', href: '#philosophy' },
    { label: 'Proyek Unggulan', href: '#projects' },
    { label: 'Keahlian Teknis', href: '#skills' },
    { label: 'Pengalaman', href: '#experience' },
    { label: 'Kontak', href: '#contact' },
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="brand-logo" id="nav-brand-logo">
          <span className="brand-badge">AFZ</span>
          <span className="brand-text">
            <strong>Annisa</strong>
            <span className="brand-sub">.DesignEngineer</span>
          </span>
        </a>

        {/* Desktop Nav */}
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
            <span>Hubungi Saya</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              style={{ marginTop: '1rem', width: '100%' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Hubungi Saya
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
          padding: 1.25rem 0;
          transition: all 0.3s ease;
        }

        .navbar-wrapper.scrolled {
          padding: 0.75rem 0;
          background: rgba(7, 9, 14, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-subtle);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .brand-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--gradient-brand);
          color: #07090e;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.95rem;
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.35);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .brand-text strong {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          color: var(--text-primary);
        }

        .brand-sub {
          font-size: 0.75rem;
          color: var(--accent-cyan);
          font-family: var(--font-mono);
          letter-spacing: -0.02em;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          background: rgba(16, 24, 40, 0.55);
          padding: 0.45rem 1.4rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-subtle);
          backdrop-filter: blur(10px);
        }

        .nav-item {
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .nav-item:hover {
          color: var(--accent-cyan);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .nav-cta-btn {
          padding: 0.55rem 1.25rem;
          font-size: 0.88rem;
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          padding: 0.5rem;
          border-radius: 8px;
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
            background: rgba(7, 9, 14, 0.98);
            border-bottom: 1px solid var(--border-subtle);
            padding: 1.5rem;
            animation: slideDown 0.25s ease-out;
          }

          .mobile-nav-links {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .mobile-nav-item {
            font-size: 1.05rem;
            font-weight: 500;
            color: var(--text-primary);
            padding: 0.5rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
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
