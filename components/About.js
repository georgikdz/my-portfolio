export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        {/* Bio */}
        <div className="about-content">
          <div className="about-item">
            <p className="about-text">
              Georgi has worn many hats throughout his career, working with CEOs, engineering teams, designers, product and project managers across startups, mid-sized and large corporations, and NGOs. His international background helps him navigate the nuances of both U.S. and European business cultures. He thrives in startup environments, even when chaotic, where he can make an impact alongside ambitious international colleagues who challenge his thinking.
            </p>
          </div>
          <div className="about-item">
            <p className="about-text">
              I hold a BS in Management Information Systems (MIS) and Economics from Worcester Polytechnic Institute (WPI), an MBA from Cambridge College, and specialized graduate studies from the Copenhagen Business School (CBS) and WU Wien (Vienna University of Economics and Business). While at WPI, my team published MIS capstone research on how mobile UX drives business value at international HCI conferences.
            </p>
          </div>
        </div>

        {/* Education */}
        <h3 className="about-subsection-title">Education</h3>
        <div className="education-grid">
          <div className="education-badge">
            <div className="edu-school">🎓 WPI</div>
            <div className="edu-degree">BS MIS &amp; Economics</div>
          </div>
          <div className="education-badge">
            <div className="edu-school">🎓 Cambridge College</div>
            <div className="edu-degree">MBA</div>
          </div>
          <div className="education-badge">
            <div className="edu-school">🌍 Copenhagen Business School</div>
            <div className="edu-degree">Graduate Studies</div>
          </div>
          <div className="education-badge">
            <div className="edu-school">🌍 WU Wien</div>
            <div className="edu-degree">Strategy &amp; Innovation</div>
          </div>
        </div>

        {/* Career Timeline */}
        <h3 className="about-subsection-title">Career</h3>
        <div className="timeline">
          <div className="timeline-item current">
            <div className="timeline-date">Oct 2025–Present</div>
            <div className="timeline-role">AI Safety &amp; Red-Teaming Analyst</div>
            <div className="timeline-company">Meta Platforms</div>
            <div className="timeline-impact">Adversarial testing on Llama models to ensure policy compliance</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2023–2025</div>
            <div className="timeline-role">AI Strategy Lead</div>
            <div className="timeline-company">Advance Valuations</div>
            <div className="timeline-impact">25% operational efficiency gains; identified 20+ automation opportunities</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2021–2023</div>
            <div className="timeline-role">Product &amp; Project Manager</div>
            <div className="timeline-company">SoftGroup</div>
            <div className="timeline-impact">30% faster project delivery with AI-driven PM tools</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2019–2021</div>
            <div className="timeline-role">Digital Transformation Consultant</div>
            <div className="timeline-company">Independent / Fortune 500 clients</div>
            <div className="timeline-impact">€62M revenue growth strategy for KTM; enabled 5,000+ SMEs to adopt AI (40% usage increase)</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2017–2019</div>
            <div className="timeline-role">Operations &amp; Business Analyst</div>
            <div className="timeline-company">Mitrend</div>
            <div className="timeline-impact">Led cross-functional teams; 10% client satisfaction increase</div>
          </div>
        </div>

        {/* Fun Fact */}
        <div className="about-content">
          <div className="about-item about-item-highlight">
            <p className="about-text">
              🏃 When I&apos;m not working, you&apos;ll find me training for my next marathon. I&apos;m pursuing the Abbott World Marathon Majors — the world&apos;s 7 most prestigious marathons. Completed: Chicago (2019), Berlin (2021), New York City (2022). Still to come: Sydney, Tokyo, Boston, London.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
