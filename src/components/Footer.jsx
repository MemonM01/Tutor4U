import "../styles/pages.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Tutor4U. All rights reserved.</p>
      </div>
    </footer>
  );
}