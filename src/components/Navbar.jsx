import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaBook, FaStar, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo.svg";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="nav-header">
      <div className="nav-inner">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <img src={logo} alt="" className="brand-logo" width="32" height="32" />
          Sig <span className="brand-accent">Fig</span> Tutors
        </NavLink>

        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/" onClick={closeMenu} className="nav-item">
            <FaHome className="nav-icon" />
            <span>Home</span>
          </NavLink>

          <NavLink to="/subjects" onClick={closeMenu} className="nav-item">
            <FaBook className="nav-icon" />
            <span>Subjects</span>
          </NavLink>

          <NavLink to="/reviews" onClick={closeMenu} className="nav-item">
            <FaStar className="nav-icon" />
            <span>Reviews</span>
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu} className="nav-item">
            <FaEnvelope className="nav-icon" />
            <span>Contact</span>
          </NavLink>

          <Link to="/contact" className="nav-cta" onClick={closeMenu}>
            Become a Tutor
          </Link>
        </nav>
      </div>
    </header>
  );
}