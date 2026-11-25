import useReveal from '../hooks/useReveal';
import './Michigan.css';

const SIGNUP_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdJxDf_OoAtBSBKFZ_0JWOunOqbcmBodoQy2611Td2qdugHDg/viewform?usp=header';
const EMAIL = 'ngikalamazoo@gmail.com';
const PHONE_DISPLAY = '(269) 365-4194';
const PHONE_LINK = '+12693654194';
const ADDRESS = '5334 Parkview Ave, Kalamazoo, MI 49009';
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const facts = [
  { label: 'Class length', value: '1 hour' },
  { label: 'Grades', value: 'K–6' },
  { label: 'Subjects', value: 'All of STEM' },
  { label: 'Cost', value: 'Free' }
];

const subjects = [
  { letter: 'S', name: 'Science', text: 'Experiments that show kids how the world around them works.' },
  { letter: 'T', name: 'Technology', text: 'Exploring the tools and ideas behind the tech kids use every day.' },
  { letter: 'E', name: 'Engineering', text: 'Designing, building and testing their own projects.' },
  { letter: 'M', name: 'Math', text: 'Puzzles and challenges that make math hands-on.' }
];

const lessonSteps = [
  { title: 'Introduction', text: "We introduce the concept and get kids excited about what they'll learn." },
  { title: 'Hands-On Learning', text: 'Students engage in experiments, build projects, and explore real-world applications.' },
  { title: 'Discussion & Reflection', text: 'We wrap up by discussing what they learned and answer any questions.' }
];

const signupSteps = [
  { title: 'Fill out the form', text: 'Takes a couple of minutes. Tell us about your child and their grade.' },
  { title: 'Hear back from us', text: 'We reach out with class dates, times and anything you need to know.' },
  { title: 'Come to class', text: 'Drop in, build something, and learn. There is never a cost to attend.' }
];

const team = [
  { name: 'Aayush Paul', role: 'Co-Founder & President', image: 'aayushpaul' },
  { name: 'Ryan Fan', role: 'Co-Founder & Vice President', image: 'ryanfan' },
  { name: 'Sophia Shinh', role: 'Director of STEM Education', image: 'sophiashinh' },
  { name: 'Adelaide VanderNaald', role: 'Director of Student Development', image: 'adelaidevandernaald', src: '/images/1795579330912_0ADF11A8-A461-49B9-B504-77AF943BA79D.jpeg' }
];

function Michigan() {
  const rootRef = useReveal();

  return (
    <div className="michigan" ref={rootRef}>
      {/* Hero */}
      <section className="mi-hero">
        <div className="container mi-hero-grid">
          <div className="mi-hero-text">
            <p className="mi-eyebrow enter" style={{ animationDelay: '0ms' }}>
              NextGenInspires Michigan · Kalamazoo
            </p>
            <h1 className="enter" style={{ animationDelay: '80ms' }}>
              Free, hands-on STEM classes for Kalamazoo kids.
            </h1>
            <p className="mi-lead enter" style={{ animationDelay: '160ms' }}>
              Student volunteers teach one-hour science, technology, engineering and math
              lessons for kids in grades K–6. Every class is completely free.
            </p>
            <div className="mi-actions enter" style={{ animationDelay: '240ms' }}>
              <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Sign up for classes
              </a>
              <a href="#contact" className="btn btn-ghost">Contact us</a>
            </div>
          </div>
          <div className="framed-photo mi-hero-photo enter" style={{ animationDelay: '200ms' }}>
            <img src="/images/1795579249682_image.png" alt="Two students watching their foam experiment erupt at a NextGenInspires Michigan class" />
          </div>
        </div>

        <div className="container">
          <dl className="facts mi-facts enter" style={{ animationDelay: '320ms' }}>
            {facts.map((fact) => (
              <div key={fact.label} className={`fact${fact.value === 'Free' ? ' is-accent' : ''}`}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* What we teach */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="kicker">What we do</p>
            <h2>All of STEM, one hands-on hour at a time</h2>
            <p>
              Each class covers a different STEM topic, so kids get to try a little of everything
              and find what they love.
            </p>
          </div>
          <div className="mi-subjects">
            {subjects.map((subject, i) => (
              <article key={subject.name} className="card reveal" style={{ animationDelay: `${i * 70}ms` }}>
                <span className="card-icon" aria-hidden="true">{subject.letter}</span>
                <h3>{subject.name}</h3>
                <p>{subject.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How a class works */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head reveal">
            <p className="kicker">How a class works</p>
            <h2>Every lesson follows three steps</h2>
          </div>
          <ol className="steps">
            {lessonSteps.map((step, i) => (
              <li key={step.title} className="step reveal" style={{ animationDelay: `${i * 90}ms` }}>
                <span className="step-num">Step {i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Sign up */}
      <section className="section" id="signup">
        <div className="container">
          <div className="section-head reveal">
            <p className="kicker">How to sign up</p>
            <h2>Signing up takes three steps</h2>
          </div>
          <ol className="steps">
            {signupSteps.map((step, i) => (
              <li key={step.title} className="step reveal" style={{ animationDelay: `${i * 90}ms` }}>
                <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mi-signup-cta reveal">
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Open the sign-up form
            </a>
            <span>Free for every family. No cost to participate.</span>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section section-alt">
        <div className="container mi-location">
          <div className="reveal">
            <p className="kicker">Where we teach</p>
            <h2>Classes in Kalamazoo</h2>
            <p>
              Classes are currently held in Kalamazoo. We're also working on bringing classes to
              Portage District Library and Kalamazoo Public Library.
            </p>
            <p className="mi-muted">
              Right now we teach grades K–6. As more families sign up, we plan to add more classes
              and grade levels.
            </p>
          </div>
          <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="mi-address reveal">
            <span className="mi-address-label">Current location</span>
            <span className="mi-address-line">5334 Parkview Ave</span>
            <span className="mi-address-line">Kalamazoo, MI 49009</span>
            <span className="mi-address-link">Open in Google Maps →</span>
          </a>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="kicker">The Michigan team</p>
            <h2>Run by students in Southwest Michigan</h2>
          </div>
          <div className="mi-team">
            {team.map((person, i) => (
              <div key={person.name} className="mi-member reveal" style={{ animationDelay: `${i * 70}ms` }}>
                <div className="mi-member-photo">
                  <img src={person.src || `/images/${person.image}.jpg`} alt={person.name} loading="lazy" />
                </div>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="band" id="contact">
        <div className="container band-inner reveal">
          <div>
            <h2>Ready to sign up, or have a question?</h2>
            <p>Reach the NextGenInspires Michigan team directly. Classes are always free.</p>
          </div>
          <div className="band-side">
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Sign up for classes
            </a>
            <a href={`mailto:${EMAIL}`} className="mi-contact-line">{EMAIL}</a>
            <a href={`tel:${PHONE_LINK}`} className="mi-contact-line">{PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Michigan;
