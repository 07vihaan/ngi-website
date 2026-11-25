import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/programs', label: 'Programs' },
  { to: '/michigan', label: 'Michigan' },
  { to: '/team', label: 'Team' }
];

function Navbar({ darkMode, onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the page changes.
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' is-scrolled' : ''}`} aria-label="Main">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/images/ngi-logo.png" alt="NGI Logo" />
          <span>NextGenInspires</span>
        </Link>

        <ul id="primary-menu" className={`navbar-menu${mobileMenuOpen ? ' active' : ''}`}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.end}>{link.label}</NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
          <button
            type="button"
            className={`mobile-menu-toggle${mobileMenuOpen ? ' is-open' : ''}`}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
