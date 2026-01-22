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
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `${context}\n\nUser Question: ${message}\n\nProvide a professional, accurate, and specific response based on the context above. Keep it under 150 words and highlight concrete achievements with numbers when relevant. If the question is outside the scope of the provided context, politely redirect to the information you do have.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ response: text });
  } catch (error) {
    console.error('Gemini API error:', error);
    console.error('Error details:', error.message);
    if (error.message?.includes('API key')) {
      console.error('⚠️ API Key issue detected');
    }
    const fallbackResponse = getSmartFallback(message);
    res.status(200).json({ response: fallbackResponse });
  }
}

function getSmartFallback(question) {
  const q = question.toLowerCase();
  
  // Check for availability questions FIRST (highest priority)
  if (q.includes('available') || q.includes('hire') || q.includes('opportunity') || 
      q.includes('looking') || q.includes('seeking') || q.includes('open to') || q.includes('new role')) {
    return "I'm currently employed at Meta Platforms as an AI Safety & Red-Teaming Analyst (since Oct 2025), working on Llama model safety. While I'm engaged in meaningful work, I'm open to discussing exceptional senior leadership opportunities in AI strategy, product management, or digital transformation roles. As a U.S. Permanent Resident based in NYC with an MBA and 10+ years of experience, I bring proven results across Fortune 500 brands and tech companies.";
  }
  
  // Check for current employment questions
  if (q.includes('work now') || q.includes('current job') || q.includes('current role') || 
      q.includes('currently work') || q.includes('where do you work') || q.includes('current employer') ||
      q.includes('working at') || q.includes('current position')) {
    return "I currently work at Meta Platforms, Inc. in New York as an AI Safety & Red-Teaming Analyst in the Product Data Operations (MetaAI) team. Since October 2025, I've been improving Llama model safety by conducting adversarial testing and red-teaming to uncover jailbreak vulnerabilities and policy-violating outputs. I analyze model responses for safety and policy compliance using Meta's taxonomy. While I'm happily employed, I'm always open to discussing exceptional senior leadership opportunities in AI strategy or digital transformation.";
  }
  
  if (q.includes('skill') || q.includes('strength')) {
    return "My biggest strengths lie in AI strategy implementation and business transformation. I have 10+ years of experience driving digital initiatives, with proven results like 25% operational efficiency gains and enabling 5,000+ SMEs to adopt AI tools (40% usage increase). I excel at combining technical AI knowledge with business strategy to deliver measurable impact. I'm currently working at Meta on Llama model safety but am open to discussing exceptional senior leadership opportunities.";
  }
  
  if (q.includes('experience') || q.includes('background') || q.includes('career')) {
    return "I have 10+ years of experience driving SaaS, AI and digital transformation initiatives across the U.S. and Europe. Currently based in Sunnyside, NY as a U.S. Permanent Resident, I've led AI strategy at Advance Valuations (25% efficiency gains), managed projects at SoftGroup (30% faster delivery), and consulted for Fortune 500 brands like KTM and Atomic. I'm currently working at Meta Platforms as an AI Safety & Red-Teaming Analyst (since Oct 2025), improving Llama model safety.";
  }
  
  if (q.includes('project') || q.includes('work') || q.includes('achievement')) {
    return "Key achievements include: leading AI strategy that reduced manual workload by 25% at Advance Valuations, building AI-driven project management tools that improved delivery by 30%, enabling 5,000+ SMEs to adopt AI (40% usage boost), developing a €62M revenue growth strategy for KTM, and managing complex pharmaceutical traceability projects. I'm currently working at Meta on AI Safety & Red-Teaming for Llama models.";
  }
  
  if (q.includes('ai') || q.includes('artificial intelligence') || q.includes('automation') || q.includes('transformation')) {
    return "I specialize in AI strategy and implementation for business transformation. At Advance Valuations, I identified 20+ automation opportunities and trained 50+ employees, achieving 25% operational efficiency gains. I've enabled 5,000+ SMEs to adopt AI tools (40% usage increase) and built AI-driven project management solutions. I'm currently at Meta Platforms working as an AI Safety & Red-Teaming Analyst, improving Llama model safety through adversarial testing.";
  }
  
  if (q.includes('leadership') || q.includes('manage') || q.includes('team')) {
    return "I've led cross-functional teams across multiple continents, from managing teams at Mitrend to training 50+ employees on AI adoption at Advance Valuations. My leadership approach combines agile methodologies with stakeholder engagement, resulting in 30% faster project delivery and 10% client satisfaction increases. I excel at international team coordination and change management. I'm currently at Meta leading AI safety initiatives for Llama models.";
  }
  
  if (q.includes('education') || q.includes('mba') || q.includes('school') || q.includes('degree') || q.includes('wpi') || q.includes('worcester')) {
    return "My educational foundation starts with a BS in Management Information Systems from Worcester Polytechnic Institute (WPI), where I was awarded Student Employee of the Year. I then earned my MBA from Cambridge College and completed specialized graduate studies in Organizational Innovation & Entrepreneurship at Copenhagen Business School, plus Strategy & Innovation at Vienna University of Economics. This blend of technical, business, and innovation expertise enables me to bridge technology and strategy effectively.";
  }
  
  if (q.includes('international') || q.includes('europe') || q.includes('marathon') || q.includes('global')) {
    return "I have extensive international experience, having worked across the U.S. and Europe (Austria, Denmark) with Fortune 500 brands like KTM and Atomic. I'm also a dedicated marathon runner who has completed races across 8+ international cities, which reflects my discipline and persistence. This international background gives me unique insights into diverse markets and business cultures. I'm currently at Meta but open to exceptional senior leadership opportunities that leverage this global perspective.";
  }
  
  if (q.includes('location') || q.includes('where') || q.includes('based') || q.includes('visa')) {
    return "I'm based in Sunnyside, NY (NYC area) and am a U.S. Permanent Resident, which means no visa complications or sponsorship needed. I'm immediately available for leadership roles and open to both on-site and remote/hybrid arrangements. My international experience across U.S. and European markets also makes me well-suited for roles with global scope.";
  }
  
  // Default response - ALWAYS mentions current employment
  return "That's a great question! I'm currently working at Meta Platforms as an AI Safety & Red-Teaming Analyst (since Oct 2025), improving Llama model safety. With 10+ years of experience in AI strategy and business transformation across the U.S. and Europe (25% efficiency gains, €62M revenue strategies, Fortune 500 brands), I bring proven, measurable results. While I'm engaged in meaningful work at Meta, I'm open to discussing exceptional senior leadership opportunities. Feel free to reach out directly!";
}
