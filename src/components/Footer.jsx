import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>NextGenInspires</h4>
          <p>Igniting curiosity and unleashing creative genius in kids through STEM education.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/team">Team</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>
            <a href="tel:1-840-200-4600">1-840-200-4600</a><br />
            <a href="mailto:nextgeninspires@proton.me">nextgeninspires@proton.me</a>
          </p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a
              href="https://www.instagram.com/nextgeninspires/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              @
            </a>
            <a
              href="https://www.linkedin.com/company/next-gen-inspires/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              in
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 NextGenInspires. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
