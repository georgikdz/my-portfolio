import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { message, context } = req.body;

  if (!process.env.GEMINI_API_KEY) {
    console.log('No API key found, using fallback');
    const fallbackResponse = getSmartFallback(message);
    return res.status(200).json({ response: fallbackResponse });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const prompt = `${context}\n\nUser Question: ${message}\n\nRespond professionally, under 150 words.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ response: text });
  } catch (error) {
    console.error('Gemini API error:', error);
    const fallbackResponse = getSmartFallback(message);
    res.status(200).json({ response: fallbackResponse });
  }
}

function getSmartFallback(question) {
  const q = question.toLowerCase();
  
  // Check for availability questions FIRST (highest priority)
  if (q.includes('available') || q.includes('hire') || q.includes('opportunity') || 
      q.includes('job') || q.includes('position') || q.includes('looking') || 
      q.includes('seeking') || q.includes('open') || q.includes('new role')) {
    return "I'm currently an AI Safety & Red-Teaming Analyst at Meta Platforms, working on Llama model safety since October 2025. While I'm engaged in this important work, I'm always open to discussing exceptional senior leadership opportunities in AI strategy, product management, and digital transformation. As a U.S. Permanent Resident based in NYC with an MBA and 10+ years of experience delivering measurable results (25% efficiency gains, €62M revenue strategies, Fortune 500 brands), I bring proven enterprise-level impact.";
  }
  
  if (q.includes('skill') || q.includes('strength')) {
    return "My biggest strengths lie in AI strategy implementation and business transformation. Currently at Meta, I'm working on Llama model safety through AI red-teaming and adversarial testing. I have 10+ years of experience driving digital initiatives, with proven results like 25% operational efficiency gains at Advance Valuations and enabling 5,000+ SMEs to adopt AI tools (40% usage increase). I excel at combining technical AI knowledge with business strategy to deliver measurable impact across industries.";
  }
  
  if (q.includes('experience') || q.includes('background') || q.includes('career')) {
    return "I'm currently an AI Safety & Red-Teaming Analyst at Meta Platforms, working on Llama model safety since October 2025. I have 10+ years of experience driving SaaS, AI and digital transformation initiatives across the U.S. and Europe. I've led AI strategy at Advance Valuations (25% efficiency gains), managed projects at SoftGroup (30% faster delivery), and consulted for Fortune 500 brands like KTM and Atomic. Based in NYC as a U.S. Permanent Resident, I bridge technical AI capabilities with business strategy.";
  }
  
  if (q.includes('project') || q.includes('work') || q.includes('achievement')) {
    return "Currently at Meta, I'm conducting adversarial testing and red-teaming on Llama models to identify vulnerabilities and ensure policy compliance. Other key achievements include: leading AI strategy that reduced manual workload by 25% at Advance Valuations, building AI-driven project management tools that improved delivery by 30%, enabling 5,000+ SMEs to adopt AI (40% usage boost), developing a €62M revenue growth strategy for KTM, and managing complex pharmaceutical traceability projects.";
  }
  
  if (q.includes('ai') || q.includes('artificial intelligence') || q.includes('automation') || q.includes('transformation')) {
    return "I specialize in AI safety and business transformation. Currently at Meta, I work on Llama model safety through adversarial testing and red-teaming to uncover vulnerabilities. Previously, at Advance Valuations, I identified 20+ automation opportunities and trained 50+ employees, achieving 25% operational efficiency gains. I've enabled 5,000+ SMEs to adopt AI tools (40% usage increase) and built AI-driven project management solutions that improved delivery by 30%. I bridge technical AI capabilities with business strategy.";
  }
  
  if (q.includes('leadership') || q.includes('manage') || q.includes('team')) {
    return "I've led cross-functional teams across multiple continents throughout my career. Currently at Meta working on AI safety, I've previously managed teams at Mitrend and trained 50+ employees on AI adoption at Advance Valuations. My leadership approach combines agile methodologies with stakeholder engagement, resulting in 30% faster project delivery and 10% client satisfaction increases. I excel at international team coordination and change management.";
  }
  
  if (q.includes('education') || q.includes('mba') || q.includes('school') || q.includes('degree')) {
    return "I hold a BS from Worcester Polytechnic Institute (awarded Student Employee of the Year), an MBA from Cambridge College, and completed specialized graduate studies in Organizational Innovation & Entrepreneurship at Copenhagen Business School, plus Strategy & Innovation at Vienna University of Economics. This educational foundation supports my current work at Meta on AI safety and my track record of driving digital transformation initiatives.";
  }
  
  if (q.includes('international') || q.includes('europe') || q.includes('marathon') || q.includes('global')) {
    return "I have extensive international experience, having worked across the U.S. and Europe (Austria, Denmark) with Fortune 500 brands like KTM and Atomic. Currently at Meta in NYC, I bring this global perspective to AI safety work. I'm also a dedicated marathon runner who has completed races across 8+ international cities, which reflects my discipline and persistence—qualities that serve well in complex AI safety and transformation initiatives.";
  }
  
  if (q.includes('location') || q.includes('where') || q.includes('based') || q.includes('visa')) {
    return "I'm based in NYC and am a U.S. Permanent Resident, which means no visa complications. Currently working at Meta on Llama model safety, I'm always open to discussing exceptional senior leadership opportunities in AI strategy, product management, and digital transformation. My international experience across U.S. and European markets makes me well-suited for roles with global scope.";
  }
  
  // Default response - mentions current Meta role
  return "That's a great question! I'm currently an AI Safety & Red-Teaming Analyst at Meta Platforms, working on Llama model safety through adversarial testing. With 10+ years of experience in AI strategy and business transformation across the U.S. and Europe (25% efficiency gains, €62M revenue strategies, Fortune 500 brands), I bring proven, measurable results. While engaged in important work at Meta, I'm always open to discussing exceptional senior leadership opportunities. Feel free to reach out directly!";
}
