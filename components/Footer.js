export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-name">Georgi Kardzhaliyski</h3>
            <p className="footer-tagline">Product & AI Professional · NYC</p>
          </div>

          <div className="footer-links">
            <a href="https://www.linkedin.com/in/georgikdz/" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="LinkedIn">
              💼 LinkedIn
            </a>
            <a href="https://github.com/georgikdz" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="GitHub">
              🐙 GitHub
            </a>
            <a href="mailto:gkardzhaliysky@gmail.com" className="footer-link" aria-label="Email">
              📧 Email
            </a>
          </div>

          <div className="footer-status">
            <span className="status-badge">
              <span className="status-dot"></span>
              Open to senior AI & product leadership roles
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Georgi Kardzhaliyski. Built with Next.js & Gemini AI.</p>
          <a href="#home" className="back-to-top" aria-label="Back to top">↑ Back to top</a>
        </div>
      </div>
    </footer>
  );
}
