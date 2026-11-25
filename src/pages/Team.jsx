import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MemberCard from '../components/MemberCard';
import useReveal from '../hooks/useReveal';
import './Team.css';

const officers = [
  { name: 'Vihaan Singh', role: 'President', image: 'vihaansingh' },
  { name: 'Muhammad Rao', role: 'Vice President', image: 'muhammadrao' },
  { name: 'Meharbaan Kaler', role: 'Operations Manager', image: 'meharbaankaler' },
  { name: 'Ethan Kim', role: 'Curriculum Manager', image: 'ethankim' },
  { name: 'Jay Pharma', role: 'Personal Relations Chair', image: 'jaypharma' }
];

const michiganTeam = [
  { name: 'Aayush Paul', role: 'Co-Founder & President', image: 'aayushpaul' },
  { name: 'Ryan Fan', role: 'Co-Founder & Vice President', image: 'ryanfan' },
  { name: 'Sophia Shinh', role: 'Director of STEM Education', image: 'sophiashinh' },
  { name: 'Adelaide VanderNaald', role: 'Director of Student Development', image: 'adelaidevandernaald', src: '/images/1795579330912_0ADF11A8-A461-49B9-B504-77AF943BA79D.jpeg' }
];

const founders = [
  { name: 'Aayush Butala', role: 'Founder', image: 'aayushbutala' },
  { name: 'Tanmay Shah', role: 'Founder', image: 'tanmayshah' },
  { name: 'Kailash Thayvallay', role: 'Founder', image: 'kailashthayvallay' },
  { name: 'Harsh Patel', role: 'Founder', image: 'harshpatel' }
];

const MAX_FIELD = { name: 100, email: 254, message: 2000 };

function TeamGroup({ title, people, children }) {
  return (
    <div className="team-section">
      <div className="team-section-head reveal">
        <h3 className="team-section-title">{title}</h3>
        {children}
      </div>
      <div className="team-grid">
        {people.map((person, index) => (
          <MemberCard key={person.name} person={person} style={{ animationDelay: `${index * 60}ms` }} />
        ))}
      </div>
    </div>
  );
}

function Team() {
  const pageRef = useReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [isTeamPhotoOpen, setIsTeamPhotoOpen] = useState(false);
  const [isTeamPhotoZoomed, setIsTeamPhotoZoomed] = useState(false);

  // Close the photo with Escape and stop the page scrolling behind it.
  useEffect(() => {
    if (!isTeamPhotoOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setIsTeamPhotoOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isTeamPhotoOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value.slice(0, MAX_FIELD[name] ?? 2000)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Strip line breaks from single-line fields so they can't add extra lines to the email header.
    const name = formData.name.replace(/[\r\n]+/g, ' ').trim();
    const email = formData.email.replace(/[\r\n]+/g, '').trim();
    const subject = `Website message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${formData.message}`;
    window.location.href = `mailto:nextgeninspires@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormStatus('Your email app should open with this message ready to send.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="team" ref={pageRef}>
      {/* Header */}
      <section className="page-hero">
        <div className="container">
          <h1 className="enter">Meet The Team</h1>
          <p className="enter" style={{ animationDelay: '80ms' }}>Passionate student leaders dedicated to inspiring the next generation</p>
        </div>
      </section>

      {/* About Section */}
      <section className="section team-about">
        <div className="container about-content">
          <div className="about-text reveal">
            <h2 className="section-title">Our Story</h2>
            <p>
              NextGenInspires was founded by a group of dedicated high school students who believed that every child deserves access to quality STEM education. What started as a passion project has grown into a thriving nonprofit organization with chapters across multiple states.
            </p>
            <p>
              Our team is made up of student volunteers, educators, and leaders who are committed to making a difference in their communities. We believe in the power of peer-to-peer learning and the importance of making STEM education accessible, fun, and engaging for all kids.
            </p>
          </div>
          <div className="about-image framed-photo reveal" style={{ animationDelay: '100ms' }}>
            <button
              type="button"
              className="team-photo-trigger"
              aria-label="Expand team photo"
              onClick={() => {
                setIsTeamPhotoOpen(true);
                setIsTeamPhotoZoomed(false);
              }}
            >
              <img
                src="/images/teamphoto.jpg"
                alt="NextGenInspires team"
                className="team-photo"
              />
            </button>
          </div>
        </div>
      </section>

      {isTeamPhotoOpen && (
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded team photo"
          onClick={() => setIsTeamPhotoOpen(false)}
        >
          <button
            type="button"
            className="photo-lightbox-close"
            aria-label="Close expanded team photo"
            autoFocus
            onClick={() => setIsTeamPhotoOpen(false)}
          >
            &times;
          </button>
          <img
            src="/images/teamphoto.jpg"
            alt="NextGenInspires team"
            className={`photo-lightbox-image${isTeamPhotoZoomed ? ' is-zoomed' : ''}`}
            onClick={(event) => {
              event.stopPropagation();
              setIsTeamPhotoZoomed((isZoomed) => !isZoomed);
            }}
          />
        </div>
      )}

      {/* Mission Section */}
      <section className="section section-alt mission-vision">
        <div className="container mission-grid">
          {[
            ['Our Mission', 'To expand access to engaging STEM education for younger students through hands-on educational programs and passionate student volunteers.'],
            ['Our Vision', 'A world where every child has access to quality STEM education and the opportunity to discover their potential.'],
            ['Our Values', 'We value accessibility, creativity, student leadership, hands-on learning, and community impact.']
          ].map(([title, text], i) => (
            <div key={title} className="card mission-card reveal" style={{ animationDelay: `${i * 80}ms` }}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section leadership">
        <div className="container">
          <div className="section-head reveal">
            <h2>Leadership</h2>
          </div>

          <TeamGroup title="Founders" people={founders} />
          <TeamGroup title="Officers" people={officers} />
          <TeamGroup title="Michigan Team" people={michiganTeam}>
            <Link to="/michigan" className="team-section-link">Visit NGI Michigan →</Link>
          </TeamGroup>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="section section-alt volunteer" id="get-involved">
        <div className="container">
          <div className="section-head reveal">
            <h2>Get Involved</h2>
          </div>
          <div className="volunteer-content">
            <div className="volunteer-info reveal">
              <h3>Join Our Team</h3>
              <p>
                Are you passionate about STEM education and want to make a difference? We're always looking for dedicated volunteers to join our mission!
              </p>

              <div className="volunteer-details">
                <p><strong>No experience necessary!</strong> We provide training and support for all volunteers.</p>
                <p>If you're interested in volunteering or want more information, fill out the form below or contact us directly.</p>
              </div>
            </div>

            <div className="volunteer-form card reveal" style={{ animationDelay: '100ms' }}>
              <h3>Contact Us</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="contact-name" className="visually-hidden">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    autoComplete="name"
                    maxLength={MAX_FIELD.name}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email" className="visually-hidden">Your Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    autoComplete="email"
                    maxLength={MAX_FIELD.email}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message" className="visually-hidden">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us about your interests and how you'd like to get involved!"
                    maxLength={MAX_FIELD.message}
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
              {formStatus && <p className="form-status" role="status">{formStatus}</p>}

              <div className="contact-direct">
                <p><strong>Or reach out directly:</strong></p>
                <p>
                  <a href="mailto:nextgeninspires@proton.me">nextgeninspires@proton.me</a>
                </p>
                <p>
                  <a href="tel:1-840-200-4600">1-840-200-4600</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
