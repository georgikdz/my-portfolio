// ProjectCard component for rendering individual projects
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <span className="project-company">{project.company}</span>
        <span className="project-period">{project.period}</span>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-tech">
        {project.tech.map((tech, i) => (
          <span key={i} className="tech-tag">{tech}</span>
        ))}
      </div>
      {project.metrics && (
        <p className="project-metrics">📈 {project.metrics}</p>
      )}
    </div>
  );
}

export default function Projects() {
  // Featured projects (most recent, high-impact)
  const featuredProjects = [
    {
      title: "AI Model Safety & Red-Teaming",
      description: "Improving Llama model safety at Meta Platforms by conducting adversarial testing and red-teaming to uncover jailbreak vulnerabilities and policy-violating outputs. Analyzing and categorizing model responses for safety and policy compliance using Meta's taxonomy.",
      tech: ["AI Safety", "Red-Teaming", "Adversarial Testing", "Llama Models", "Policy Compliance", "Model Evaluation"],
      metrics: "Identifying vulnerabilities in Meta's Llama language models for improved AI safety",
      company: "Meta Platforms, Inc.",
      period: "Oct 2025 - Present",
      featured: true
    },
    {
      title: "Tech Startup Product Leadership",
      description: "Led 5 product launches at Mitrend (Boston-based tech startup), managing cross-continental engineering and design teams. Conducted 20+ UX studies and achieved 20% increase in product-market fit.",
      tech: ["Product Management", "UX Research", "Agile", "Team Leadership", "Quality Assurance"],
      metrics: "20% increase in product-market fit, 45% faster response times",
      company: "Mitrend",
      period: "2013-2022",
      featured: true
    },
    {
      title: "AI Strategy & Business Transformation",
      description: "Led comprehensive AI adoption initiative at Advance Valuations, identifying 20+ automation opportunities and training 50+ employees. Designed and implemented AI solutions that automated routine tasks across core business functions.",
      tech: ["AI Strategy", "Process Automation", "Change Management", "Data Assessment", "Stakeholder Engagement"],
      metrics: "25% reduction in manual workload, 20% team resource optimization",
      company: "Advance Valuations",
      period: "2024-2025",
      featured: true
    }
  ];

  // Earlier career projects (consulting, early roles)
  const earlierCareerProjects = [
    {
      title: "€62M Revenue Growth Strategy",
      description: "Architected a comprehensive market expansion strategy for KTM Motorcycles through innovative EU driving school partnerships and customer acquisition modeling. Designed a license fee reimbursement program with exclusive membership benefits to convert driving school students into KTM customers, supported by detailed scenario modeling and market analysis.",
      tech: ["Strategic Planning", "Partnership Development", "Revenue Modeling", "Market Analysis", "Customer Acquisition", "B2B Sales Strategy"],
      metrics: "€62M projected revenue growth | EU-wide driving school partnership model | License reimbursement incentive program",
      company: "KTM Bike Industries",
      period: "Vienna, Austria",
      featured: false
    },
    {
      title: "IT Service Management Transformation",
      description: "Led ITSM adoption and knowledge management initiatives at Biogen's Boston headquarters, supporting 200+ IT employees serving global neurological treatment operations. Reduced IT escalations by 40% through comprehensive training programs and established a knowledge base infrastructure serving 50 front-line support technicians.",
      tech: ["ITSM", "Knowledge Management", "Technical Training", "Process Optimization", "Cross-functional Collaboration", "Documentation"],
      metrics: "40% reduction in IT escalations | Trained 50+ IT support staff | Authored 100+ KB articles | Enabled 200+ IT employees",
      company: "Biogen",
      period: "Jan 2012 - Aug 2012",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Featured Work Section */}
        <h2 className="section-title">Featured Work</h2>
        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Earlier Career Section - Collapsible */}
        <div className="early-career-section">
          <h3 className="subsection-title">Earlier Career & Consulting</h3>
          <p className="subsection-intro">
            Strategic consulting and transformation work for Fortune 500 brands across Europe and the U.S.
          </p>
          
          <details className="projects-expandable">
            <summary className="expand-toggle">
              <span className="toggle-text">View Additional Projects ({earlierCareerProjects.length})</span>
              <span className="company-badges">KTM • Biogen</span>
              <span className="chevron">▼</span>
            </summary>
            
            <div className="projects-grid earlier-projects-grid">
              {earlierCareerProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
