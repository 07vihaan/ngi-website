import useReveal from '../hooks/useReveal';
import './Programs.css';

const MICHIGAN_SIGNUP_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdJxDf_OoAtBSBKFZ_0JWOunOqbcmBodoQy2611Td2qdugHDg/viewform?usp=header';

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
    registerUrl: MICHIGAN_SIGNUP_URL
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

const steps = [
  { title: 'Introduction', text: "We introduce the concept and get kids excited about what they'll learn." },
  { title: 'Hands-On Learning', text: 'Students engage in experiments, build projects, and explore real-world applications.' },
  { title: 'Discussion & Reflection', text: 'We wrap up by discussing what they learned and answer any questions.' }
];

const details = [
  { label: 'Duration', value: '50 minutes' },
  { label: 'Age Range', value: '4-13 years old' },
  { label: 'Frequency', value: '1-2 classes per week' },
  { label: 'Program Access', value: 'No cost to participate', accent: true }
];

function Programs() {
  const pageRef = useReveal();

  return (
    <div className="programs" ref={pageRef}>
      {/* Header */}
      <section className="page-hero">
        <div className="container">
          <h1 className="enter">Our Programs</h1>
          <p className="enter" style={{ animationDelay: '80ms' }}>Explore hands-on STEM learning opportunities in your area</p>
        </div>
      </section>

      {/* Registration Section */}
      <section className="section registration" id="register">
        <div className="container">
          <div className="section-head reveal">
            <h2>Register for Classes</h2>
            <p>Choose a location near you and sign up for our upcoming classes!</p>
          </div>

          <div className="programs-grid">
            {programs.map((program, i) => (
              <article key={program.id} className="program-card reveal" style={{ animationDelay: `${i * 70}ms` }}>
                <div className="program-number" aria-hidden="true">0{program.id}</div>
                <h3>{program.title}</h3>
                <p className="program-location">{program.location}</p>
                <p className="program-description">{program.description}</p>
                <a
                  href={program.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  aria-label={`Register Now: ${program.title}`}
                >
                  Register Now
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How Lessons Work */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head reveal">
            <h2>How Our Lessons Work</h2>
          </div>
          <ol className="steps">
            {steps.map((step, i) => (
              <li key={step.title} className="step reveal" style={{ animationDelay: `${i * 90}ms` }}>
                <span className="step-num" aria-hidden="true">{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <dl className="facts lesson-details reveal">
            {details.map((detail) => (
              <div key={detail.label} className={`fact${detail.accent ? ' is-accent' : ''}`}>
                <dt>{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Past Locations */}
      <section className="section">
        <div className="container past-locations">
          <div className="reveal">
            <h2 className="section-title">Where We've Been</h2>
            <p>NextGenInspires has made an impact across multiple locations. Here are some of the places we've taught:</p>
          </div>
          <div className="reveal" style={{ animationDelay: '80ms' }}>
            <ul className="locations-list">
              {pastLocations.map((location) => (
                <li key={location} className="location-tag">{location}</li>
              ))}
            </ul>
            <p className="expansion-message">
              We're constantly expanding to serve more communities. If you'd like to partner with us or host a class, <a href="mailto:nextgeninspires@proton.me">get in touch!</a>
            </p>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="band">
        <div className="container band-inner reveal">
          <div>
            <h2>Interested in Partnering?</h2>
            <p>Are you a school, library, or community organization interested in hosting NextGenInspires classes?</p>
          </div>
          <div className="band-side contact-info">
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
