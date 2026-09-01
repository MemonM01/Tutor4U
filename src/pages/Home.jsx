import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import "../styles/pages.css";

const services = [
  {
    title: "1:1 tutoring",
    text: "Support that adapts to the student’s pace, strengths and target grade.",
  },
  {
    title: "Maths & sciences",
    text: "Clear teaching across key subjects, from foundational basics to exam technique.",
  },
  {
    title: "Progress that sticks",
    text: "Structured practice and focused feedback keep confidence growing week by week.",
  },
];

const steps = [
  { title: "Tell us your goals", text: "Share the subject, year group and target outcome." },
  { title: "We match the support", text: "Get a plan designed around the student’s needs." },
  { title: "See the progress", text: "Build confidence with calm, consistent guidance." },
];

export default function Home() {
  return (
    <div className="container page">
      <SEO
        title="Sig Fig Tutors | Online GCSE & A-Level Tutoring in Maths, Science & Computer Science"
        description="Sig Fig Tutors offers 1:1 online tutoring in Maths, Science, Computer Science and more for GCSE and A-Level students. Book a free trial session today."
      />
      <section className="site-hero">
        <div className="site-hero-copy">
          <div className="homeTag">Premium online tutoring</div>

          <h1 className="homeH1">Confident learning, clearer results.</h1>
          <h2 className="homeH2">Support designed to help students feel calmer, smarter and ready.</h2>

          <p className="homeP">
            Sig Fig Tutors offers focused one-to-one support in <strong>Maths</strong>, <strong>Science</strong>
            and <strong>Computer Science</strong> for students who want better understanding and stronger,
            more confident exam performance.
          </p>

          <div className="homeButtons">
            <Link className="btn primary" to="/contact">
              Book a free consultation
            </Link>
            <Link className="btn secondary" to="/subjects">
              Explore subjects
            </Link>
          </div>

          <div className="homeBadges">
            <span className="homeBadge highlight">Free trial session</span>
            <span className="homeBadge">GCSE & A-Level</span>
            <span className="homeBadge">Online lessons</span>
            <span className="homeBadge">Friendly guidance</span>
          </div>

          <p className="homeNote">Get in touch for your free trial session.</p>
        </div>

        <div className="hero-visual" aria-label="Student learning online with tutor support">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=70"
            alt="Student learning online at a computer"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="floating-card">
            <strong>92%</strong>
            <span>of students report greater confidence after tutoring</span>
          </div>
        </div>
      </section>

      <section className="homeSection">
        <div className="section-header">
          <div>
            <div className="eyebrow">Why families choose us</div>
            <h2 className="sectionTitle">Simple, thoughtful support that feels personal.</h2>
          </div>
        </div>

        <div className="feature-grid">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <h3>{service.title}</h3>
              <p className="muted">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="homeSection image-showcase">
        <div className="showcase-card large">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=70"
            alt="Students collaborating and learning together"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="showcase-copy">
          <div className="eyebrow">A calmer way to learn</div>
          <h3>Focused lessons that reduce overwhelm and build momentum.</h3>
          <p className="muted">
            Every session is built around clarity, consistency and confidence — helping students improve
            without pressure.
          </p>
        </div>
      </section>

      <section className="homeSection">
        <div className="section-header">
          <div>
            <div className="eyebrow">How it works</div>
            <h2 className="sectionTitle">A clear path to progress.</h2>
          </div>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={step.title}>
              <div className="step-number">0{index + 1}</div>
              <h3>{step.title}</h3>
              <p className="muted">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="section-header" style={{ marginBottom: 0 }}>
          <div>
            <div className="eyebrow" style={{ background: "rgba(255,255,255,0.14)", color: "#fff", borderColor: "rgba(255,255,255,0.14)" }}>
              Join the team
            </div>
            <h2>Become a tutor with Sig Fig Tutors</h2>
          </div>

          <Link className="btn" to="/contact">
            Apply now
          </Link>
        </div>
      </section>
    </div>
  );
}