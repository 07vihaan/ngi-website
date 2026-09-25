import './Programs.css';

function Programs() {
  const programs = [
    {
      id: 1,
      title: 'Hicksville Public Library',
      location: 'Hicksville, NY',
      description: 'Join us at Hicksville Public Library for hands-on STEM learning and creative exploration.',
      registerUrl: 'https://hicksvillelibrary.org/'
    },
    {
      id: 2,
      title: 'East Meadow Library',
      location: 'East Meadow, NY',
      description: 'Experience engaging science, technology, and art classes at East Meadow Library.',
      registerUrl: 'https://eastmeadow.info/'
    },
    {
      id: 3,
      title: 'Portage District Library',
      location: 'Portage, Michigan',
      description: 'Bringing STEM education to Michigan! Join our programs at Portage District Library.',
      registerUrl: 'https://www.portagelibrary.info/'
    },
    {
      id: 4,
      title: 'Online Classes',
      location: 'Remote',
      description: 'Can\'t make it in person? Join our virtual STEM classes from anywhere!',
      registerUrl: 'https://forms.gle/FdXo66PtGSw7bevd8'
    }
  ];

  const pastLocations = [
    'Hicksville Public Library',
    'East Meadow Library',
    'Our House Montessori',
    'Holy Trinity',
    'Jericho STEM Center',
    'Heart & Mind STEM Center',
    'Carle Place',
    'Portage District, Michigan'
  ];

  return (
    <div className="programs">
      {/* Header */}
      <section className="programs-header">
        <div className="container">
          <h1>Our Programs</h1>
          <p>Explore hands-on STEM learning opportunities in your area</p>
        </div>
      </section>

    
      {/* How Lessons Work */}
      <section className="how-it-works">
        <div className="container">
          <h2>How Our Lessons Work</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Introduction</h3>
              <p>We introduce the concept and get kids excited about what they'll learn.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Hands-On Learning</h3>
              <p>Students engage in experiments, build projects, and explore real-world applications.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Discussion & Reflection</h3>
              <p>We wrap up by discussing what they learned and answer any questions.</p>
            </div>
          </div>
          <div className="lesson-details">
            <div className="detail-item">
              <span className="detail-label">Duration</span>
              <span className="detail-value">50 minutes</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Age Range</span>
              <span className="detail-value">4-13 years old</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Frequency</span>
              <span className="detail-value">1-2 classes per week</span>
            </div>
            <div className="detail-item emphasis">
              <span className="detail-label">Program Access</span>
              <span className="detail-value">No cost to participate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Past Locations */}
      <section className="past-locations">
        <div className="container">
          <h2>Where We've Been</h2>
          <p>NextGenInspires has made an impact across multiple locations. Here are some of the places we've taught:</p>
          <div className="locations-list">
            {pastLocations.map((location, index) => (
              <div key={index} className="location-tag">
                {location}
              </div>
            ))}
          </div>
          <p className="expansion-message">
            We're constantly expanding to serve more communities. If you'd like to partner with us or host a class, <a href="mailto:nextgeninspires@proton.me">get in touch!</a>
          </p>
        </div>
      </section>

      {/* Registration Section */}
      <section className="registration">
        <div className="container">
          <h2>Register for Classes</h2>
          <p className="section-description">Choose a location near you and sign up for our upcoming classes!</p>
          
          <div className="programs-grid">
            {programs.map((program) => (
              <div key={program.id} className="program-card">
                <div className="program-number">0{program.id}</div>
                <h3>{program.title}</h3>
                <p className="program-location"> {program.location}</p>
                <p className="program-description">{program.description}</p>
                <a 
                  href={program.registerUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Register Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="partnership-cta">
        <div className="container">
          <h2>Interested in Partnering?</h2>
          <p>Are you a school, library, or community organization interested in hosting NextGenInspires classes?</p>
          <div className="contact-info">
            <p>
              <strong>Email:</strong> <a href="mailto:nextgeninspires@proton.me">nextgeninspires@proton.me</a>
            </p>
            <p>
              <strong>Phone:</strong> <a href="tel:1-840-200-4600">1-840-200-4600</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Programs;
