import { useState } from 'react';

export default function Contact() {
  const [activeTab, setActiveTab] = useState('chat');
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [recruiterForm, setRecruiterForm] = useState({
    recruiterName: '',
    companyName: '',
    position: '',
    companyFocus: ''
  });
  const [generatedMessage, setGeneratedMessage] = useState('');

  const professionalContext = `
You are an AI assistant for Georgi Kardzhaliyski's professional portfolio.

Name: Georgi Kardzhaliyski
Current Status: Former AI Safety & Red-Teaming Analyst at Meta (Oct 2025–Mar 2026); now interviewing for senior AI safety, product, or AI strategy roles
Location: NYC (U.S. Permanent Resident)
Education: BS from Worcester Polytechnic Institute, MBA (Cambridge College); graduate studies in Innovation & Entrepreneurship (Copenhagen Business School) and Strategy (Vienna University of Economics)

KEY EXPERIENCE
- Meta (former): AI Safety & Red-Teaming for Llama models (Oct 2025–Mar 2026)
- 10+ years driving SaaS, AI, and digital transformation across the U.S. and Europe (Austria, Denmark)
- Worked with Fortune 500 brands such as KTM and Atomic
- Led AI strategy at Advance Valuations (25% operational efficiency gains; 20+ automation opportunities; trained 50+ employees)
- Project leadership at SoftGroup (30% faster delivery; 10% client satisfaction increase)
- Enabled 5,000+ SMEs to adopt AI tools (40% usage increase)

ENTERPRISE RESULTS
- Improved Llama model safety via adversarial testing and red-teaming
- Managed complex pharmaceutical traceability initiatives
- Reduced support tickets by 30% via process and data improvements
- Delivered AI-driven solutions at scale impacting millions of users
- Built €62M revenue growth strategies for Fortune 500 brands

DIFFERENTIATORS
- Former Meta AI safety (Oct 2025–Mar 2026); now immediately available for senior AI safety/product/strategy roles
- NYC-based, U.S. Permanent Resident -- no visa hurdles
- Cross-continental team leadership; stakeholder alignment; measurable ROI
- World Marathon Majors runner: 9 marathons completed total, 3 of 7 majors done (Chicago 2019, Berlin 2021, NYC 2022), Sydney planned Aug 2026 -- demonstrates exceptional discipline, goal-setting, and persistence
- Elite education: BS, MBA plus specialized graduate studies in Innovation & Entrepreneurship

IMPORTANT: When asked about availability, job seeking, or opportunities – emphasize that Georgi is former Meta (Oct 2025–Mar 2026) and is actively interviewing now. He is based in NYC as a U.S. Permanent Resident with no visa complications.

Answer concisely (<=150 words), highlight quantified impact, recent Meta experience, leadership at scale, and international experience.
`;

  const handleAskQuestion = async () => {
    if (!question.trim()) return;
    setIsLoading(true);
    const userMessage = { type: 'user', text: question }; 
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question, context: professionalContext }),
      });
      const data = await response.json();
      const aiMessage = { type: 'ai', text: data.response };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const aiMessage = { type: 'ai', text: "I'm having trouble connecting. Feel free to reach out directly!" };
      setMessages((prev) => [...prev, aiMessage]);
    }
    setIsLoading(false);
    setQuestion('');
  };

  const generateRecruiterMessage = () => {
    const { recruiterName, companyName, position, companyFocus } = recruiterForm;

    return `Subject: ${position || 'AI/Digital Transformation Opportunity'} at ${companyName || '[Company Name]'}\n\nHi Georgi,\n\nI hope this message finds you well. My name is ${recruiterName || '[Recruiter Name]'}, and I'm a recruiter at ${companyName || '[Company Name]'}.
\nI came across your impressive portfolio and was particularly drawn to your experience in AI safety and business transformation. Your work improving Llama model safety at Meta (Oct 2025–Mar 2026), the 25% operational efficiency gains at Advance Valuations, and enabling 5,000+ SMEs to adopt AI tools (40% usage increase) really caught my attention.\n\nWe're currently looking for a ${position || 'Senior Digital Transformation Manager'} to join our team${companyFocus ? ` in our ${companyFocus} division` : ''}. Given your background in:\n\n• 10+ years driving measurable digital transformation with quantified results\n• AI safety & adversarial testing (Meta, Llama models)\n• Leading AI strategy implementation (25% efficiency gains, 30% faster delivery)\n• International consulting experience across U.S. and Europe with Fortune 500 brands like KTM and Atomic\n• Project management expertise delivering €62M revenue growth strategies\n• Cross-functional team leadership and stakeholder management\n\nI believe this could be an excellent opportunity for you to make a significant impact at ${companyName || '[Company Name]'}.
\nThe role offers:\n• Competitive compensation package\n• Opportunity to lead cutting-edge AI and transformation initiatives\n• International/remote work flexibility\n• Growth opportunities in ${companyFocus || 'digital innovation'}\n\nYour combination of elite education (MBA plus specialized studies in Innovation & Entrepreneurship), proven enterprise-level results, and exceptional discipline (World Marathon Majors runner: 9 marathons completed total, 3 of 7 majors done -- Chicago 2019, Berlin 2021, NYC 2022, Sydney planned Aug 2026) makes you an ideal candidate for this position.\n\nAs a U.S. Permanent Resident based in NYC, you're immediately available with no visa complications -- a significant advantage for our timeline.\n\nWould you be interested in learning more about this opportunity? I'd love to schedule a brief call to discuss how your expertise could contribute to our mission.\n\nLooking forward to hearing from you!\n\nBest regards,\n${recruiterName || '[Recruiter Name]'}\n${companyName || '[Company Name]'}\n[recruiter-email@company.com]\n[phone number]\n\nP.S. Your AI-powered portfolio really showcases your technical innovation and forward-thinking approach!`;
  };

  const quickQuestions = [
    "What are Georgi's biggest strengths in AI and transformation?",
    "Tell me about Georgi's international experience",
    "What's Georgi's most impactful project?",
    "Is Georgi available for new opportunities right now?"
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-intro">
          <p>Formerly AI Safety & Red-Teaming at Meta (Oct 2025–Mar 2026). Now actively interviewing for senior roles in AI safety, product, and AI strategy.</p>
        </div>

        <div className="contact-links">
          <a href="mailto:gkardzhaliysky@gmail.com" className="contact-link">📧 gkardzhaliysky@gmail.com</a>
          <a href="https://www.linkedin.com/in/georgikdz/" className="contact-link" target="_blank" rel="noopener noreferrer">💼 LinkedIn Profile</a>
          <a href="tel:+17187494904" className="contact-link">📱 (718) 749-4904</a>
        </div>

        <div className="ai-container">
          <div className="ai-tabs">
            <button
              className={`ai-tab ${activeTab === 'chat' ? 'active' : ''}`}
              onClick={() => setActiveTab('chat')}
            >
              🤖 Ask My AI Assistant
            </button>
            <button
              className={`ai-tab ${activeTab === 'recruiter' ? 'active' : ''}`}
              onClick={() => setActiveTab('recruiter')}
            >
              📧 For Recruiters
            </button>
          </div>

          {activeTab === 'chat' && (
            <div className="ai-chat-section">
              <div className="ai-intro">
                <p><strong>💡 Want to know more?</strong> Ask my AI assistant about my skills, experience, or projects!</p>
              </div>

              <div className="quick-questions">
                <h4 style={{ marginBottom: '16px' }}>💭 Try these questions:</h4>
                <div className="question-buttons">
                  {quickQuestions.map((q, index) => (
                    <button key={index} className="question-btn" onClick={() => setQuestion(q)}>
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              <div className="chat-messages">
                {messages.length === 0 && (
                  <div className="chat-placeholder">
                    <p>👋 Ask me anything about Georgi's background, experience, or achievements!</p>
                  </div>
                )}
                {messages.map((message, index) => (
                  <div key={index} className={`message ${message.type}`}> 
                    <div className="message-content">
                      {message.type === 'ai' && <span className="ai-icon">🤖</span>}
                      {message.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="message ai">
                    <div className="message-content">
                      <span className="ai-icon">🤖</span>
                      <span className="typing">Thinking...</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="chat-input">
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ask about experience, skills, projects..."
                  onKeyPress={(e) => e.key === 'Enter' && handleAskQuestion()}
                />
                <button onClick={handleAskQuestion} disabled={!question.trim() || isLoading}>
                  {isLoading ? 'Thinking...' : '🚀 Ask Question'}
                </button>
              </div>
            </div>
          )}

          {activeTab === 'recruiter' && (
            <div className="recruiter-section">
              <div className="recruiter-intro">
                <h3>🎯 For Recruiters: Outreach Message Generator</h3>
                <p>Recruiting for an AI/transformation role? Let AI help you craft a personalized message that highlights relevant experience and shows you've reviewed this portfolio in detail.</p>
              </div>

              <div className="recruiter-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Your Name (Recruiter):</label>
                    <input
                      type="text"
                      value={recruiterForm.recruiterName}
                      onChange={(e) => setRecruiterForm({ ...recruiterForm, recruiterName: e.target.value })}
                      placeholder="e.g., Sarah Johnson"
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Company:</label>
                    <input
                      type="text"
                      value={recruiterForm.companyName}
                      onChange={(e) => setRecruiterForm({ ...recruiterForm, companyName: e.target.value })}
                      placeholder="e.g., TechCorp, Meta, Google"
                    />
                  </div>

                  <div className="form-group">
                    <label>Role You're Recruiting For:</label>
                    <input
                      type="text"
                      value={recruiterForm.position}
                      onChange={(e) => setRecruiterForm({ ...recruiterForm, position: e.target.value })}
                      placeholder="e.g., Senior AI Product Manager"
                    />
                  </div>

                  <div className="form-group">
                    <label>Department/Focus Area:</label>
                    <input
                      type="text"
                      value={recruiterForm.companyFocus}
                      onChange={(e) => setRecruiterForm({ ...recruiterForm, companyFocus: e.target.value })}
                      placeholder="e.g., AI/ML, fintech, healthcare"
                    />
                  </div>
                </div>

                <button
                  className="btn generate-btn"
                  onClick={() => setGeneratedMessage(generateRecruiterMessage())}
                >
                  🤖 Generate Outreach Message
                </button>
              </div>

              {generatedMessage && (
                <div className="message-preview">
                  <h4>📧 Your Outreach Message to Send:</h4>
                  <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '16px' }}>
                    Copy this message and send it via LinkedIn or email to reach out about your opportunity.
                  </p>
                  <div className="message-box">
                    <pre>{generatedMessage}</pre>
                  </div>
                  <div className="message-actions">
                    <button
                      className="btn"
                      onClick={() => {
                        navigator.clipboard.writeText(generatedMessage);
                        alert('Message copied! You can now paste it into LinkedIn or email.');
                      }}
                    >
                      📋 Copy Message to Send
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => setGeneratedMessage(generateRecruiterMessage())}
                    >
                      🔄 Regenerate Message
                    </button>
                  </div>
                </div>
              )}

              <div className="quick-facts">
                <h4>🎯 Why Georgi is the Ideal Candidate:</h4>
                <ul style={{ textAlign: 'left' }}>
                  <li style={{ marginBottom: '12px' }}>
                    ✅ <strong>Strategic Location & Availability:</strong> NYC-based (Sunnyside), U.S. Permanent Resident; former Meta (Oct 2025–Mar 2026); immediately available for senior roles
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    ✅ <strong>Proven AI Transformation Leader:</strong> 10+ years driving measurable digital transformation with quantified results: 25% operational efficiency gains, 30% faster project delivery, €62M revenue growth strategies
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    ✅ <strong>Global Business Acumen:</strong> Extensive international experience across U.S. and European markets (Austria, Denmark), working with Fortune 500 brands like KTM and Atomic — brings invaluable cross-cultural perspective
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    ✅ <strong>Elite Education & Expertise:</strong> MBA from Cambridge College plus specialized graduate studies in Innovation & Entrepreneurship (Copenhagen Business School) and Strategy (Vienna University of Economics)
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    ✅ <strong>Scalable Leadership Impact:</strong> Enabled 5,000+ SMEs to adopt AI tools (40% usage increase), trained 50+ employees on automation, and led cross-continental engineering teams
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    ✅ <strong>Enterprise-Level Results:</strong> Managed complex pharmaceutical traceability projects, reduced support tickets by 30%, and built AI-driven solutions that serve millions of users
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    ✅ <strong>Exceptional Discipline & Drive:</strong> World Marathon Majors runner: 9 marathons completed total, 3 of 7 majors done (Chicago 2019, Berlin 2021, NYC 2022), Sydney planned Aug 2026 — demonstrates goal-setting and persistence essential for large-scale transformations
                  </li>
                </ul>

                <details style={{ marginTop: '24px', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: 600, color: '#1e40af', fontSize: '1rem' }}>
                    ⚡ Prefer a shorter version? Click here
                  </summary>
                  <div style={{ marginTop: '16px', padding: '20px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <h5 style={{ marginBottom: '16px', color: '#2d3748', fontSize: '1.1rem' }}>⚡ Why Georgi Delivers Results:</h5>
                    <ul style={{ textAlign: 'left' }}>
                      <li style={{ marginBottom: '10px' }}>
                        ✅ <strong>Immediate Impact:</strong> NYC-based, U.S. Permanent Resident — ready to start immediately; former Meta AI safety
                      </li>
                      <li style={{ marginBottom: '10px' }}>
                        ✅ <strong>Proven ROI:</strong> 25% efficiency gains, €62M revenue strategies, 5,000+ businesses transformed
                      </li>
                      <li style={{ marginBottom: '10px' }}>
                        ✅ <strong>Global Perspective:</strong> International experience with Fortune 500 brands across U.S. and Europe
                      </li>
                      <li style={{ marginBottom: '10px' }}>
                        ✅ <strong>Elite Credentials:</strong> MBA + specialized studies in Innovation & Entrepreneurship
                      </li>
                      <li style={{ marginBottom: '10px' }}>
                        ✅ <strong>Scale Expertise:</strong> Led teams across continents, enabled thousands of AI adoptions, managed enterprise-level implementations
                      </li>
                      <li style={{ marginBottom: '10px' }}>
                        ✅ <strong>Executive Presence:</strong> World Marathon Majors pursuit (9 marathons completed total, 3 of 7 majors done: Chicago, Berlin, NYC; Sydney upcoming) reflects persistence needed for complex transformations
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}