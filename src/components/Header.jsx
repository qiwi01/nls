import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (prevPathname.current !== location.pathname) {
      setMenuOpen(false);
      prevPathname.current = location.pathname;
    }
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/track', label: 'Tracking' },
    { path: '/locations', label: 'Locations' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner container-wide">
        {/* Logo */}
        <Link to="/" className="header-logo">
          <img src="/image.jpg" alt="NLS Logistics" className="header-logo-img" />
          <div className="header-logo-text">
            <span className="header-logo-title">NLS</span>
            <span className="header-logo-subtitle">Logistics</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header-nav">
          <ul className="header-nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`header-nav-link ${isActive(link.path) ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <Link to="/track" className="btn btn-primary btn-sm header-track-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
            Track Shipment
          </Link>

          {/* Hamburger */}
          <button
            className={`header-hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Menu</span>
          <button className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu-footer">
          <Link to="/track" className="btn btn-primary btn-block">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
            Track Your Shipment
          </Link>
        </div>
      </div>

      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: var(--white);
          border-bottom: 1px solid var(--border-light);
          transition: var(--transition);
          height: var(--nav-height);
        }

        .header-scrolled {
          box-shadow: var(--shadow-md);
          border-bottom-color: transparent;
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          gap: 32px;
        }

        .header-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .header-logo-img {
          height: 42px;
          width: auto;
          border-radius: var(--radius-sm);
        }

        .header-logo-text {
          display: flex;
          flex-direction: column;
        }

        .header-logo-title {
          font-size: 22px;
          font-weight: 800;
          color: var(--secondary);
          line-height: 1.1;
          letter-spacing: 2px;
        }

        .header-logo-subtitle {
          font-size: 10px;
          font-weight: 600;
          color: var(--text-muted);
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .header-nav {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .header-nav-list {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .header-nav-link {
          display: inline-flex;
          align-items: center;
          padding: 8px 18px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          border-radius: var(--radius);
          transition: var(--transition);
          position: relative;
        }

        .header-nav-link:hover {
          color: var(--primary);
          background: var(--primary-bg);
        }

        .header-nav-link.active {
          color: var(--primary);
          font-weight: 600;
        }

        .header-nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 3px;
          background: var(--primary);
          border-radius: 2px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .header-track-btn {
          gap: 6px;
        }

        .header-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: var(--radius);
          transition: var(--transition);
        }

        .header-hamburger:hover {
          background: var(--surface-hover);
        }

        .header-hamburger span {
          display: block;
          width: 24px;
          height: 2.5px;
          background: var(--text-primary);
          border-radius: 2px;
          transition: var(--transition);
          transform-origin: center;
        }

        .header-hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .header-hamburger.active span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .header-hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 999;
          animation: fadeIn 0.2s ease;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -320px;
          width: 320px;
          max-width: 85vw;
          height: 100vh;
          background: var(--white);
          z-index: 1000;
          transition: var(--transition-slow);
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-xl);
        }

        .mobile-menu.active { right: 0; }

        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid var(--border-light);
        }

        .mobile-menu-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .mobile-menu-close {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          color: var(--text-secondary);
          border-radius: var(--radius);
        }

        .mobile-menu-close:hover { background: var(--surface-hover); }

        .mobile-nav { flex: 1; overflow-y: auto; padding: 16px; }
        .mobile-nav-list { list-style: none; margin: 0; padding: 0; }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          padding: 14px 16px;
          font-size: 16px;
          font-weight: 500;
          color: var(--text-primary);
          text-decoration: none;
          border-radius: var(--radius);
          transition: var(--transition);
          margin-bottom: 2px;
        }

        .mobile-nav-link:hover { background: var(--primary-bg); color: var(--primary); }
        .mobile-nav-link.active { background: var(--primary-bg); color: var(--primary); font-weight: 600; }

        .mobile-menu-footer { padding: 20px 24px; border-top: 1px solid var(--border-light); }

        @media (max-width: 1024px) { .header-nav { display: none; } .header-hamburger { display: flex; } .header-track-btn { display: none; } }
        @media (min-width: 1025px) { .header-track-btn { display: inline-flex; } }
      `}</style>
    </header>
  );
};

export default Header;