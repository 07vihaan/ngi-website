import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

function Navbar({ darkMode, onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
        <img src="/images/ngi-logo.png" alt="NGI Logo" />          <span>NextGenInspires</span>
        </Link>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/programs" onClick={() => setMobileMenuOpen(false)}>Programs</Link></li>
          <li><Link to="/team" onClick={() => setMobileMenuOpen(false)}>Team</Link></li>
        </ul>
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
        >
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
