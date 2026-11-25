import { Link } from 'react-router-dom';
import './Footer.css';

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3zM9.5 9.75h3.8v1.5h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4z" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-brand">
          <Link to="/" className="footer-logo">
            <img src="/images/ngi-logo.png" alt="" />
            <h4>NextGenInspires</h4>
          </Link>
          <p>Igniting curiosity and unleashing creative genius in kids through STEM education.</p>
          <h4 className="footer-follow">Follow Us</h4>
          <div className="social-links">
            <a
              href="https://www.instagram.com/nextgeninspires/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/next-gen-inspires/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/michigan">Michigan</Link></li>
            <li><Link to="/team">Team</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:1-840-200-4600">1-840-200-4600</a></li>
            <li><a href="mailto:nextgeninspires@proton.me">nextgeninspires@proton.me</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>NGI Michigan</h4>
          <ul>
            <li><a href="tel:+12693654194">(269) 365-4194</a></li>
            <li><a href="mailto:ngikalamazoo@gmail.com">ngikalamazoo@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 NextGenInspires. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
