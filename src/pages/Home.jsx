import { Link } from 'react-router-dom';
import CountUp from '../components/CountUp';
import useReveal from '../hooks/useReveal';
import './Home.css';

const impact = [
  { number: '200+', label: 'STEM Lessons' },
  { number: '50+', label: 'Volunteer Educators' },
  { number: '11', label: 'Locations' },
  { number: '2', label: 'State Branches' }
];

const whatWeDo = [
  {
    icon: 'S',
    title: 'Science',
    text: 'Explore the fundamentals of biology, chemistry, and physics through hands-on experiments.'
  },
  {
    icon: 'T',
    title: 'Technology',
    text: 'Learn coding, robotics, and digital skills from passionate student educators.'
  },
  {
    icon: 'A',
    title: 'Art & Design',
    text: 'Combine creativity with technical skills through engineering and design projects.'
  }
];

function Home() {
  const pageRef = useReveal();

  return (
    <div className="home" ref={pageRef}>
      {/* Hero Section */}
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-text">
            <h1 className="enter">NextGenInspires</h1>
            <p className="hero-tagline enter" style={{ animationDelay: '80ms' }}>To Further the Youth</p>
            <p className="hero-description enter" style={{ animationDelay: '160ms' }}>
              We're on a mission to expand access to engaging STEM education for younger students through hands-on learning and passionate student volunteers.
            </p>
            <div className="hero-buttons enter" style={{ animationDelay: '240ms' }}>
              <Link to="/programs" className="btn btn-primary">Explore Programs</Link>
              <Link to="/team" className="btn btn-ghost">Get Involved</Link>
            </div>
          </div>
          <div className="framed-photo home-hero-photo enter" style={{ animationDelay: '200ms' }}>
            <img src="/images/hero-image.jpg" alt="NextGenInspires Students" />
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="container">
          <div className="impact enter" style={{ animationDelay: '320ms' }}>
            <h2 className="impact-title">Our Impact</h2>
            <dl className="facts">
              {impact.map((item) => (
                <div key={item.label} className="fact">
                  <dt>{item.label}</dt>
                  <dd><CountUp value={item.number} /></dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section section-alt">
        <div className="container home-mission-grid">
          <h2 className="section-title reveal">Our Mission</h2>
          <div className="mission-text reveal" style={{ animationDelay: '80ms' }}>
            <p className="mission-lead">
              NextGenInspires is a student-led nonprofit that gives younger students a welcoming place to explore science, technology, and art.
            </p>
            <p>
              We bring hands-on lessons to libraries, STEM centers, and day cares, led by high school volunteers who make learning practical, creative, and fun.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <h2>What We Do</h2>
          </div>
          <div className="what-grid">
            {whatWeDo.map((item, i) => (
              <article key={item.title} className="card reveal" style={{ animationDelay: `${i * 80}ms` }}>
                <span className="card-icon" aria-hidden="true">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="classes-info reveal">
            <h3>About Our Classes</h3>
            <div className="classes-info-body">
              <p>
                NextGenInspires holds free classes in public libraries, STEM centers, and day cares throughout the Long Island region. Classes in art, science, and technology are taught by experienced high school students for 50 minutes. These classes are geared towards kids ages 4-13 and are available 1-2 times a week.
              </p>
              <p>
                Our goal is to inspire and bring education in a fun and creative way to children who may not be able to afford high-end classes. We've impacted kids in many locations and look forward to expanding our reach even further.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="band">
        <div className="container band-inner reveal">
          <div>
            <h2>Ready to Inspire the Next Generation?</h2>
            <p>Whether you're a student looking to volunteer or an organization wanting to partner with us, we'd love to hear from you.</p>
          </div>
          <div className="band-side">
            <Link to="/team" className="btn btn-primary">Learn How to Get Involved</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
