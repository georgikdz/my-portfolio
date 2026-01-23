export default function Projects() {
  // Featured Projects - Top 3, always visible
  const featuredProjects = [
    {
      title: "AI Model Safety & Red-Teaming",
      description: "Improving Llama model safety at Meta Platforms by conducting adversarial testing and red-teaming to uncover jailbreak vulnerabilities and policy-violating outputs. Analyzing and categorizing model responses for safety and policy compliance using Meta's taxonomy.",
      tech: ["AI Safety", "Red-Teaming", "Adversarial Testing", "Llama Models", "Policy Compliance", "Model Evaluation"],
      metrics: "Identifying vulnerabilities in Meta's Llama language models for improved AI safety",
      company: "Meta Platforms, Inc.",
      period: "Oct 2025 - Present"
    },
    {
      title: "Tech Startup Product Leadership",
      description: "Led 5 product launches at Mitrend (Boston-based tech startup), managing cross-continental engineering and design teams. Conducted 20+ UX studies and achieved 20% increase in product-market fit.",
      tech: ["Product Management", "UX Research", "Agile", "Team Leadership", "Quality Assurance"],
      metrics: "20% increase in product-market fit, 45% faster response times",
      company: "Mitrend",
      period: "2013-2022"
    },
    {
      title: "AI Strategy & Business Transformation",
      description: "Led comprehensive AI adoption initiative at Advance Valuations, identifying 20+ automation opportunities and training 50+ employees. Designed and implemented AI solutions that automated routine tasks across core business functions.",
      tech: ["AI Strategy", "Process Automation", "Change Management", "Data Assessment", "Stakeholder Engagement"],
      metrics: "25% reduction in manual workload, 20% team resource optimization",
      company: "Advance Valuations",
      period: "2024-2025"
    }
  ];

  // Earlier Career Projects - Collapsed by default
  const earlierCareerProjects = [
    {
      title: "€62M Revenue Growth Strategy",
      description: "Architected comprehensive market expansion for KTM Motorcycles through EU driving school partnerships. Designed license fee reimbursement program with membership benefits, supported by scenario modeling and market analysis.",
      tech: ["Strategic Planning", "Partnership Development", "Revenue Modeling", "Market Analysis", "B2B Sales"],
      metrics: "€62M projected growth | EU-wide partnership model | License reimbursement program",
      company: "KTM Bike Industries",
      period: "Vienna, Austria"
    },
    {
      title: "IT Service Management Transformation",
      description: "Led ITSM adoption at Biogen's Boston HQ, supporting 200+ IT employees. Reduced escalations 40% through training programs and knowledge base infrastructure.",
      tech: ["ITSM", "Knowledge Management", "Training", "Process Optimization"],
      metrics: "40% reduction in escalations | 50+ staff trained | 100+ KB articles",
      company: "Biogen",
      period: "Jan 2012 - Aug 2012"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Work</h2>
        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <h3 className="project-title">{project.title}</h3>
                <span style={{ fontSize: '0.8rem', color: '#718096', fontWeight: '500' }}>{project.period}</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#667eea', fontWeight: '600', marginBottom: '12px' }}>
                {project.company}
              </p>
              <p className="project-description">{project.description}</p>
              
              <div className="project-metrics">
                📈 {project.metrics}
              </div>
              
              <div className="tech-tags">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href="https://www.linkedin.com/in/georgikdz/" className="btn" target="_blank" rel="noopener noreferrer">
                  💼 View Details on LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="early-career-section">
          <h3 className="subsection-title">Earlier Career & Consulting</h3>
          <p className="subsection-intro">
            Strategic work for Fortune 500 brands across Europe and the U.S.
          </p>
          
          <details className="projects-expandable">
            <summary>
              <span>View Additional Projects (2)</span>
              <span className="brands">KTM • Biogen</span>
              <span className="chevron">▼</span>
            </summary>
            
            <div className="projects-grid">
              {earlierCareerProjects.map((project, index) => (
                <div key={index} className="project-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <h3 className="project-title">{project.title}</h3>
                    <span style={{ fontSize: '0.8rem', color: '#718096', fontWeight: '500' }}>{project.period}</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#667eea', fontWeight: '600', marginBottom: '12px' }}>
                    {project.company}
                  </p>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-metrics">
                    📈 {project.metrics}
                  </div>
                  
                  <div className="tech-tags">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a href="https://www.linkedin.com/in/georgikdz/" className="btn" target="_blank" rel="noopener noreferrer">
                      💼 View Details on LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
