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
      q.includes('job') || q.includes('position') || q.includes('looking') || 
      q.includes('seeking') || q.includes('open') || q.includes('new role')) {
    return "Yes! I'm actively available and seeking new opportunities in the NYC area right now. As a U.S. Permanent Resident based in Sunnyside, NY, there are no visa complications—I can start immediately. With my MBA and 10+ years of international experience in AI strategy and digital transformation (25% efficiency gains, €62M revenue strategies, Fortune 500 brands like KTM and Atomic), I'm particularly interested in senior leadership roles where I can drive measurable business impact. Ready to start from day one!";
  }
  
  if (q.includes('skill') || q.includes('strength')) {
    return "My biggest strengths lie in AI strategy implementation and business transformation. I have 10+ years of experience driving digital initiatives, with proven results like 25% operational efficiency gains and enabling 5,000+ SMEs to adopt AI tools (40% usage increase). I excel at combining technical AI knowledge with business strategy to deliver measurable impact. I'm currently actively seeking new opportunities in NYC and am immediately available.";
  }
  
  if (q.includes('experience') || q.includes('background') || q.includes('career')) {
    return "I have 10+ years of experience driving SaaS, AI and digital transformation initiatives across the U.S. and Europe. Currently based in Sunnyside, NY as a U.S. Permanent Resident, I've led AI strategy at Advance Valuations (25% efficiency gains), managed projects at SoftGroup (30% faster delivery), and consulted for Fortune 500 brands like KTM and Atomic. I'm actively seeking new opportunities and am immediately available with no visa complications.";
  }
  
  if (q.includes('project') || q.includes('work') || q.includes('achievement')) {
    return "Key achievements include: leading AI strategy that reduced manual workload by 25% at Advance Valuations, building AI-driven project management tools that improved delivery by 30%, enabling 5,000+ SMEs to adopt AI (40% usage boost), developing a €62M revenue growth strategy for KTM, and managing complex pharmaceutical traceability projects. I'm currently actively seeking new leadership opportunities in the NYC area.";
  }
  
  if (q.includes('ai') || q.includes('artificial intelligence') || q.includes('automation') || q.includes('transformation')) {
    return "I specialize in AI strategy and implementation for business transformation. At Advance Valuations, I identified 20+ automation opportunities and trained 50+ employees, achieving 25% operational efficiency gains. I've enabled 5,000+ SMEs to adopt AI tools (40% usage increase) and built AI-driven project management solutions. I'm currently actively seeking new opportunities in the NYC area and am immediately available as a U.S. Permanent Resident with no visa complications.";
  }
  
  if (q.includes('leadership') || q.includes('manage') || q.includes('team')) {
    return "I've led cross-functional teams across multiple continents, from managing teams at Mitrend to training 50+ employees on AI adoption at Advance Valuations. My leadership approach combines agile methodologies with stakeholder engagement, resulting in 30% faster project delivery and 10% client satisfaction increases. I excel at international team coordination and change management. I'm actively seeking new leadership opportunities in NYC.";
  }
  
  if (q.includes('education') || q.includes('mba') || q.includes('school') || q.includes('degree')) {
    return "I hold an MBA from Cambridge College and have completed specialized graduate studies in Organizational Innovation & Entrepreneurship at Copenhagen Business School, plus Strategy & Innovation at Vienna University of Economics. I also have a BS in Management Information Systems from Worcester Polytechnic Institute, where I was awarded Student Employee of the Year. I'm currently seeking new opportunities to apply this education in senior leadership roles.";
  }
  
  if (q.includes('international') || q.includes('europe') || q.includes('marathon') || q.includes('global')) {
    return "I have extensive international experience, having worked across the U.S. and Europe (Austria, Denmark) with Fortune 500 brands like KTM and Atomic. I'm also a dedicated marathon runner who has completed races across 8+ international cities, which reflects my discipline and persistence. This international background gives me unique insights into diverse markets and business cultures. I'm actively seeking new opportunities that leverage this global perspective.";
  }
  
  if (q.includes('location') || q.includes('where') || q.includes('based') || q.includes('visa')) {
    return "I'm based in Sunnyside, NY (NYC area) and am a U.S. Permanent Resident, which means no visa complications or sponsorship needed. I'm immediately available for leadership roles and open to both on-site and remote/hybrid arrangements. My international experience across U.S. and European markets also makes me well-suited for roles with global scope.";
  }
  
  // Default response - ALWAYS mentions availability
  return "That's a great question! I'm currently actively seeking new opportunities in the NYC area. As a U.S. Permanent Resident, I can start immediately with no visa complications. With 10+ years of experience in AI strategy and business transformation across the U.S. and Europe (25% efficiency gains, €62M revenue strategies, Fortune 500 brands), I bring proven, measurable results. I'd love to discuss how my background can add value to your organization. Feel free to reach out directly!";
}
