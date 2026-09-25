import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>NextGenInspires</h1>
            <p className="hero-tagline">To Further the Youth</p>
            <p className="hero-description">
              We're on a mission to expand access to engaging STEM education for younger students through hands-on learning and passionate student volunteers.
            </p>
            <div className="hero-buttons">
              <Link to="/programs" className="btn btn-primary">Explore Programs</Link>
              <Link to="/team" className="btn btn-secondary">Get Involved</Link>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/images/hero-image.jpg" alt="NextGenInspires Students" className="hero-image" />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            NextGenInspires is a student-led nonprofit that gives younger students a welcoming place to explore science, technology, and art.
          </p>
          <p>
            We bring hands-on lessons to libraries, STEM centers, and day cares, led by high school volunteers who make learning practical, creative, and fun.
          </p>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="impact">
        <div className="container">
          <h2>Our Impact</h2>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-number">200+</div>
              <div className="impact-label">STEM Lessons</div>
            </div>
            <div className="impact-card">
              <div className="impact-number">20+</div>
              <div className="impact-label">Volunteer Educators</div>
            </div>
            <div className="impact-card">
              <div className="impact-number">5</div>
              <div className="impact-label">Locations</div>
            </div>
            <div className="impact-card">
              <div className="impact-number">2</div>
              <div className="impact-label">State Branches</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="what-we-do">
        <div className="container">
          <h2>What We Do</h2>
          <div className="what-we-do-grid">
            <div className="what-card">
              <div className="what-icon"></div>
              <h3>Science</h3>
              <p>Explore the fundamentals of biology, chemistry, and physics through hands-on experiments.</p>
            </div>
            <div className="what-card">
              <div className="what-icon"></div>
              <h3>Technology</h3>
              <p>Learn coding, robotics, and digital skills from passionate student educators.</p>
            </div>
            <div className="what-card">
              <div className="what-icon"></div>
              <h3>Art & Design</h3>
              <p>Combine creativity with technical skills through engineering and design projects.</p>
            </div>
          </div>

          <div className="classes-info">
            <h3>About Our Classes</h3>
            <p>
              NextGenInspires holds free classes in public libraries, STEM centers, and day cares throughout the Long Island region. Classes in art, science, and technology are taught by experienced high school students for 50 minutes. These classes are geared towards kids ages 4-13 and are available 1-2 times a week.
            </p>
            <p>
              Our goal is to inspire and bring education in a fun and creative way to children who may not be able to afford high-end classes. We've impacted kids in many locations and look forward to expanding our reach even further.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Inspire the Next Generation?</h2>
          <p>Whether you're a student looking to volunteer or an organization wanting to partner with us, we'd love to hear from you.</p>
          <Link to="/team" className="btn btn-primary">Learn How to Get Involved</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
