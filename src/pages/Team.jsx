import { useState } from 'react';
import './Team.css';

function Team() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [isTeamPhotoOpen, setIsTeamPhotoOpen] = useState(false);
  const [isTeamPhotoZoomed, setIsTeamPhotoZoomed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Website message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    window.location.href = `mailto:nextgeninspires@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormStatus('Your email app should open with this message ready to send.');
    setFormData({ name: '', email: '', message: '' });
  };

  const officers = [
    { name: 'Vihaan Singh', role: 'President', image: 'vihaansingh' },
    { name: 'Muhammad Rao', role: 'Vice President', image: 'muhammadrao' },
    { name: 'Meharbaan Kaler', role: 'Operations Manager', image: 'meharbaankaler' },
    { name: 'Ethan Kim', role: 'Curriculum Manager', image: 'ethankim' },
    { name: 'Jay Pharma', role: 'Personal Relations Chair', image: 'jaypharma' }
  ];

  const michiganTeam = [
    { name: 'Aayush Paul', role: 'President', image: 'aayushpaul' },
    { name: 'Ryan Fan', role: 'Vice President', image: 'ryanfan' },
    { name: 'Sophia Shinh', role: 'Director of STEM Education', image: 'sophiashinh' }
  ];

  const founders = [
    { name: 'Aayush Butala', role: 'Founder', image: 'aayushbutala' },
    { name: 'Tanmay Shah', role: 'Founder', image: 'tanmayshah' },
    { name: 'Kailash Thayvallay', role: 'Founder', image: 'kailashthayvallay' },
    { name: 'Harsh Patel', role: 'Founder', image: 'harshpatel' }
  ];

  return (
    <div className="team">
      {/* Header */}
      <section className="team-header">
        <div className="container">
          <h1>Meet The Team</h1>
          <p>Passionate student leaders dedicated to inspiring the next generation</p>
        </div>
      </section>

      {/* About Section */}
      <section className="team-about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                NextGenInspires was founded by a group of dedicated high school students who believed that every child deserves access to quality STEM education. What started as a passion project has grown into a thriving nonprofit organization with chapters across multiple states.
              </p>
              <p>
                Our team is made up of student volunteers, educators, and leaders who are committed to making a difference in their communities. We believe in the power of peer-to-peer learning and the importance of making STEM education accessible, fun, and engaging for all kids.
              </p>
            </div>
            <div className="about-image">
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

      {/* Leadership Section */}
      <section className="leadership">
        <div className="container">
          <h2>Leadership</h2>
          
          {/* Main Officers */}
          <div className="team-section officer-section">
            <h3 className="team-section-title">Officers</h3>
            <div className="team-grid officer-grid">
              {officers.map((person, index) => {
                const isJay = person.name === 'Jay Pharma';

                return (
                <div
                  key={index}
                  className={['team-member', 'officer-member', isJay ? 'jay-centered' : ''].join(' ')}
                >
                  <div className="member-image-container">
                    <img
                      src={`/images/${person.image}.jpg`}
                      alt={person.name}
                      className="member-image"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="member-image-placeholder">
                      <span>Photo</span>
                    </div>
                  </div>
                  <h4>{person.name}</h4>
                  <p className="role">{person.role}</p>
                </div>
                );
              })}
            </div>
          </div>

          {/* Michigan Team */}
          <div className="team-section">
            <h3 className="team-section-title">Michigan Team</h3>
            <div className="team-grid">
              {michiganTeam.map((person, index) => (
                <div key={index} className="team-member">
                  <div className="member-image-container">
                    <img
                      src={`/images/${person.image}.jpg`}
                      alt={person.name}
                      className="member-image"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="member-image-placeholder">
                      <span>Photo</span>
                    </div>
                  </div>
                  <h4>{person.name}</h4>
                  <p className="role">{person.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Founders */}
          <div className="team-section">
            <h3 className="team-section-title">Founders</h3>
            <div className="team-grid">
              {founders.map((person, index) => (
                <div key={index} className="team-member">
                  <div className="member-image-container">
                    <img
                      src={`/images/${person.image}.jpg`}
                      alt={person.name}
                      className="member-image"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="member-image-placeholder">
                      <span>Photo</span>
                    </div>
                  </div>
                  <h4>{person.name}</h4>
                  <p className="role">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="volunteer">
        <div className="container">
          <h2>Get Involved</h2>
          <div className="volunteer-content">
            <div className="volunteer-info">
              <h3>Join Our Team</h3>
              <p>
                Are you passionate about STEM education and want to make a difference? We're always looking for dedicated volunteers to join our mission!
              </p>
              
            

              <div className="volunteer-details">
                <p><strong>No experience necessary!</strong> We provide training and support for all volunteers.</p>
                <p>If you're interested in volunteering or want more information, fill out the form below or contact us directly.</p>
              </div>
            </div>

            <div className="volunteer-form">
              <h3>Contact Us</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Tell us about your interests and how you'd like to get involved!"
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

      {/* Mission Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>
                To expand access to engaging STEM education for younger students through hands-on educational programs and passionate student volunteers.
              </p>
            </div>
            <div className="mission-card">
              <h3>Our Vision</h3>
              <p>
                A world where every child has access to quality STEM education and the opportunity to discover their potential.
              </p>
            </div>
            <div className="mission-card">
              <h3>Our Values</h3>
              <p>
                We value accessibility, creativity, student leadership, hands-on learning, and community impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
