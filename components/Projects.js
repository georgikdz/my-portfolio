export default function Projects() {
  const projects = [
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
      title: "AI Strategy & Business Transformation",
      description: "Led comprehensive AI adoption initiative at Advance Valuations, identifying 20+ automation opportunities and training 50+ employees. Designed and implemented AI solutions that automated routine tasks across core business functions.",
      tech: ["AI Strategy", "Process Automation", "Change Management", "Data Assessment", "Stakeholder Engagement"],
      metrics: "25% reduction in manual workload, 20% team resource optimization",
      company: "Advance Valuations",
      period: "2024-2025",
      featured: true
    },
    {
      title: "AI-Driven Project Management Suite", 
      description: "Built 5 project management tools using Generative AI at SoftGroup, streamlining complex workflows for pharmaceutical traceability technology. Applied agile methodologies to boost team efficiency and ensure client alignment.",
      tech: ["Generative AI", "Project Management", "Agile", "Pharmaceutical Tech", "Workflow Optimization"],
      metrics: "30% faster project delivery, 10% increase in client satisfaction",
      company: "SoftGroup",
      period: "2024",
      featured: true
    },
    {
      title: "SME AI Adoption Platform",
      description: "Enabled 5,000+ SMEs to adopt AI tools through the Austrian Economic Chamber initiative. Surveyed 30,000+ businesses to identify AI-optimizable functions and delivered MVP matching SMEs with tailored AI solutions.",
      tech: ["Market Research", "AI Tool Matching", "MVP Development", "Training Hub", "Business Analysis"],
      metrics: "40% boost in AI tool usage, 5,000+ businesses enabled",
      company: "Austrian Economic Chamber",
      period: "2023-2024",
      featured: true
    },
    {
      title: "Customer Support Optimization",
      description: "Reduced Zendesk tickets by 30% for Camping Vision through data-driven insights and cross-cultural workflow mapping. Analyzed engagement patterns and delivered comprehensive improvement roadmap.",
      tech: ["Zendesk", "Google Analytics", "Customer Support", "Data Analysis", "Process Optimization"],
      metrics: "30% reduction in support tickets",
      company: "Camping Vision",
      period: "2023",
      featured: false
    },
    {
      title: "Revenue Growth Strategy - KTM",
      description: "Outlined €62M growth plan for KTM Bike Industries through EU driving school partnerships and customer incentive programs. Built revenue forecasts using scenario modeling and market data analysis.",
      tech: ["Revenue Strategy", "Partnership Development", "Financial Modeling", "Market Analysis"],
      metrics: "€62M projected revenue growth",
      company: "KTM Bike Industries",
      period: "2023",
      featured: false
    },
    {
      title: "Tech Startup Product Leadership",
      description: "Led 5 product launches at Mitrend (Boston-based tech startup), managing cross-continental engineering and design teams. Conducted 20+ UX studies and achieved 20% increase in product-market fit.",
      tech: ["Product Management", "UX Research", "Agile", "Team Leadership", "Quality Assurance"],
      metrics: "20% increase in product-market fit, 45% faster response times",
      company: "Mitrend",
      period: "2013-2022",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects & Achievements</h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#4a5568', marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px' }}>
          A showcase of AI-driven transformations, business optimizations, and strategic initiatives 
          that delivered measurable impact across industries and continents
        </p>
        
        <div className="projects-grid">
          {projects.filter(project => project.featured).map((project, index) => (
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

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '24px' }}>
            <strong>Additional Experience:</strong> Revenue strategy consulting, loyalty program development, 
            IT service management, and academic technology leadership across multiple industries.
          </p>
          <a href="https://www.linkedin.com/in/georgikdz/" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            📄 View Complete Experience on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
