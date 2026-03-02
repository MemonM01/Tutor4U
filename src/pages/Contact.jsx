import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/pages.css";

export default function Contact() {
  const whatsappNumber = "447404498638"; // no +, no spaces
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const mailto = `mailto:shafaymemon26@gmail.com?subject=${encodeURIComponent(
    "Tutor4U Enquiry"
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
  )}`;

  return (
    <div className="container page">
      <h1>Contact Me</h1>
      <p className="subtext">Message me on WhatsApp or send an enquiry by email.</p>

      <div className="contact-grid">
        <div className="card">
          <h3>WhatsApp</h3>
          <p>Tap to message me directly on WhatsApp.</p>

          <a className="btn whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
            <FaWhatsapp className="wa-icon" />
            Message on WhatsApp
          </a>

          <p className="muted small">Number: +44 7404 498638</p>
        </div>

        <div className="card">
          <h3>Email Form</h3>

          <div className="form">
            <label>
              Your Name
              <input name="name" value={form.name} onChange={onChange} placeholder="Your name" />
            </label>

            <label>
              Your Email
              <input
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
                type="email"
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="How can I help?"
                rows="5"
              />
            </label>

            <a className="btn primary" href={mailto}>
              Email Me
            </a>

            <p className="muted small">
              Emails will be responded to within 24hrs. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}