export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <span className="hero-highlight">AI-Driven</span> Digitalization & 
              <span className="hero-highlight">Business Transformation</span> Leader
            </h1>
            <p className="hero-subtitle">AI Safety Analyst at Meta • MBA • 10+ Years Experience</p>
            <p className="hero-description">
              Currently improving Llama model safety at Meta through AI red-teaming and adversarial testing. 
              10+ years of experience driving AI strategy and digital transformation across the U.S. and Europe, 
              with proven results in building smarter products and delivering measurable business impact.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn">
                💬 Let's Connect
              </a>
              <a href="/resume.pdf" className="btn btn-outline" download>
                📄 Download Resume
              </a>
            </div>
            <div className="hero-skills">
              <span className="skill-tag">AI Strategy & Implementation</span>
              <span className="skill-tag">Business Transformation</span>
              <span className="skill-tag">Project Management</span>
              <span className="skill-tag">Digital Innovation</span>
              <span className="skill-tag">Agile Methodologies</span>
            </div>
          </div>
          
          <div className="hero-image">
            <img 
              src="/headshot.jpg" 
              alt="Georgi Kardzhaliyski - Professional headshot"
              className="headshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
}