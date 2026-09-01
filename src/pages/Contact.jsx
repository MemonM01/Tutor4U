import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "../components/SEO";
import "../styles/pages.css";

const tutorEmail = "smrecruitment6@gmail.com";

export default function Contact() {
  const whatsappNumber = "447404498638";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Tutoring enquiry",
    experience: "",
    message: "",
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const buildMailto = () => {
    const subject = `Sig Fig Tutors ${form.subject || "Enquiry"}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Experience / subject focus: ${form.experience}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    return `mailto:${tutorEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = buildMailto();
  };

  return (
    <div className="container page">
      <SEO
        title="Contact Us | Book a Free Trial Session – Sig Fig Tutors"
        description="Get in touch with Sig Fig Tutors to book a free trial tutoring session or apply to join as a tutor."
      />
      <div className="section-header">
        <div>
          <div className="eyebrow">Get in touch</div>
          <h1>Start your tutoring journey</h1>
        </div>
      </div>

      <p className="subtext">
        Whether you’re looking for support for a student or want to apply as a tutor, we’ll respond as quickly as possible.
      </p>

      <div className="contact-grid">
        <div className="card contact-card">
          <h3>Contact details</h3>
          <p className="muted">
            Reach out directly for student support, availability, or tutor opportunities.
          </p>

          <div className="contact-meta">
            <strong>Email</strong>
            <a href={`mailto:${tutorEmail}`}>{tutorEmail}</a>
          </div>

          <div className="contact-meta">
            <strong>WhatsApp</strong>
            <span>+44 7404 498638</span>
          </div>

          <a className="btn whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
            <FaWhatsapp className="wa-icon" />
            Message on WhatsApp
          </a>
        </div>

        <div className="card">
          <h3>Become a Tutor</h3>

          <form className="form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label>
                Your name
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Alex Smith"
                  required
                />
              </label>

              <label>
                Email address
                <input
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@example.com"
                  type="email"
                  required
                />
              </label>
            </div>

            <div className="form-grid">
              <label>
                Enquiry type
                <select name="subject" value={form.subject} onChange={onChange}>
                  <option value="Tutoring enquiry">Tutoring enquiry</option>
                  <option value="Tutor application">Tutor application</option>
                  <option value="General question">General question</option>
                </select>
              </label>

              <label>
                Experience / subject focus
                <input
                  name="experience"
                  value={form.experience}
                  onChange={onChange}
                  placeholder="e.g. GCSE Maths, A-Level Physics"
                />
              </label>
            </div>

            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Tell us about your goals, availability, or tutoring experience..."
                required
              />
            </label>

            <div className="form-actions">
              <button type="submit" className="btn primary">
                Send enquiry
              </button>
              <span className="form-note">This sends your details to {tutorEmail}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}