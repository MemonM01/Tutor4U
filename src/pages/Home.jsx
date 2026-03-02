import { Link } from "react-router-dom";
import "../styles/pages.css";

export default function Home() {
  return (
    <div className="container page">
      <section className="homeHero">
        <div className="homeHeroLeft">
          <div className="homeTag">
            Online Tutoring • Affordable • Results-Focused
          </div>

          <h1 className="homeH1">Tutor4U</h1>
          <h2 className="homeH2">Private tutoring that builds confidence and grades.</h2>

          <p className="homeP">
            Structured, friendly support for <strong>Maths</strong>, <strong>Science</strong> and{" "}
            <strong>Computer Science</strong>. Lessons are tailored to your level, exam board, and
            target grade.
          </p>

          <div className="homeButtons">
            <Link className="btn primary" to="/contact">
              Book a Free Chat
            </Link>
            <Link className="btn" to="/subjects">
              View Subjects
            </Link>
          </div>

          <div className="homeBadges">
            <span className="homeBadge">✅ 10+ years experience</span>
            <span className="homeBadge">✅ Online tutoring available</span>
            <span className="homeBadge">✅ GCSE & A-Level support</span>
          </div>
        </div>

        <div className="homeHeroRight card">
          <h3 className="cardTitle">What you get</h3>

          <ul className="homeBullets">
            <li>Personalised lesson plan (strengths, gaps, target grade)</li>
            <li>Clear explanations + worked examples</li>
            <li>Homework help + weekly practice questions</li>
            <li>Exam-style questions + mark-scheme technique</li>
            <li>Regular progress updates and next steps</li>
          </ul>

          <div className="homeMiniCta">
            <p className="muted small">
              Message me with the student’s <strong>year group</strong>, <strong>subject</strong>{" "}
              and <strong>target grade</strong>.
            </p>
            <Link className="btn" to="/contact">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <section className="homeSection">
        <h2 className="sectionTitle">How lessons work</h2>
        <p className="subtext">Simple, structured, and focused on improvement.</p>

        <div className="homeCards">
          <div className="card">
            <h3 className="cardTitle">1) Quick assessment</h3>
            <ul className="homeBullets">
              <li>Identify strengths and weak areas</li>
              <li>Agree a clear target and plan</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="cardTitle">2) Learn + practise</h3>
            <ul className="homeBullets">
              <li>Short explanations (easy to follow)</li>
              <li>Guided questions → exam-style questions</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="cardTitle">3) Track progress</h3>
            <ul className="homeBullets">
              <li>Regular checkpoints to show improvement</li>
              <li>Adjust plan to keep momentum</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="homeSection">
        <div className="homeSplit card">
          <div>
            <h2 className="sectionTitle">Affordable online tutoring</h2>
            <p className="muted">
              Online sessions are flexible and cost-effective — ideal for consistent weekly
              support. You’ll get structured practice and clear next steps after each session.
            </p>

            <ul className="homeBullets">
              <li>Flexible times to fit around school and work</li>
              <li>Clear homework + practice after every lesson</li>
              <li>Focus on exam technique and confidence</li>
            </ul>

            <div className="homeButtons">
              <Link className="btn primary" to="/contact">
                Ask About Availability
              </Link>
              <Link className="btn" to="/reviews">
                See Reviews
              </Link>
            </div>
          </div>

          <div>
            <h3 className="cardTitle">Best for students who want:</h3>
            <ul className="homeBullets">
              <li>Better understanding of topics</li>
              <li>Higher marks in tests and mock exams</li>
              <li>Calm support and a clear plan</li>
              <li>Consistent weekly improvement</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}