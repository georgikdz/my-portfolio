import { GoogleGenAI } from "@google/genai";

// Simple in-memory rate limiter: 10 requests per IP per 60 seconds
const rateLimitMap = new Map();
const RATE_LIMIT = 10;
const WINDOW_MS = 60 * 1000;

function getRateLimitKey(req) {
  return (
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "unknown"
  );
}

function isRateLimited(req) {
  const key = getRateLimitKey(req);
  const now = Date.now();
  const windowStart = now - WINDOW_MS;
  const timestamps = rateLimitMap.get(key) || [];
  const recent = timestamps.filter((t) => t > windowStart);
  recent.push(now);
  rateLimitMap.set(key, recent);

  if (rateLimitMap.size > 1000) {
    for (const [k, ts] of rateLimitMap) {
      if (ts[ts.length - 1] <= windowStart) {
        rateLimitMap.delete(k);
      }
    }
  }

  return recent.length > RATE_LIMIT;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (isRateLimited(req)) {
    return res
      .status(429)
      .json({ message: "Too many requests. Please wait a moment before trying again." });
  }

  const { message, context } = req.body;

  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return res.status(400).json({ message: "Message is required." });
  }

  if (message.length > 1000) {
    return res
      .status(400)
      .json({ message: "Message is too long. Please keep it under 1000 characters." });
  }

  if (!process.env.GEMINI_API_KEY) {
    const fallbackResponse = getSmartFallback(message);
    return res.status(200).json({ response: fallbackResponse });
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const prompt = `${context}\n\nUser Question: ${message}\n\nRespond professionally, under 150 words.`;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    const text = response.text;
    res.status(200).json({ response: text });
  } catch (error) {
    console.error("Gemini API error:", error);
    const fallbackResponse = getSmartFallback(message);
    res.status(200).json({ response: fallbackResponse });
  }
}

function getSmartFallback(question) {
  const q = question.toLowerCase();

  const availability = () =>
    "Georgi is a former AI Safety & Red-Teaming Analyst at Meta (Oct 2025–Mar 2026) and is now interviewing for senior AI safety, product, or AI strategy roles. NYC-based U.S. Permanent Resident; immediate start; 10+ years of quantified impact (25% efficiency gains, €62M strategies, Fortune 500 clients).";

  if (
    q.includes("available") ||
    q.includes("hire") ||
    q.includes("opportunity") ||
    q.includes("job") ||
    q.includes("position") ||
    q.includes("looking") ||
    q.includes("seeking") ||
    q.includes("open") ||
    q.includes("new role")
  ) {
    return availability();
  }

  if (q.includes("skill") || q.includes("strength")) {
    return "Georgi excels in AI safety, adversarial testing, and AI strategy. Formerly at Meta improving Llama model safety; now interviewing. Delivered 25% efficiency gains and enabled 5,000+ SMEs to adopt AI (40% usage lift).";
  }

  if (q.includes("experience") || q.includes("background") || q.includes("career")) {
    return "Former Meta AI Safety & Red-Teaming Analyst (Oct 2025–Mar 2026); 10+ years leading SaaS/AI transformations across U.S. and Europe. Drove 25% efficiency gains, €62M revenue strategies, and complex pharma traceability programs. Now interviewing.";
  }

  if (q.includes("project") || q.includes("work") || q.includes("achievement")) {
    return "At Meta, Georgi improved Llama safety via adversarial testing and red-teaming. Other wins: 25% workload reduction at Advance Valuations; 30% faster delivery via AI PM tools; €62M growth strategy for KTM; 5,000+ SMEs adopting AI (40% usage lift). Now interviewing.";
  }

  if (
    q.includes("ai") ||
    q.includes("artificial intelligence") ||
    q.includes("automation") ||
    q.includes("transformation")
  ) {
    return "Georgi focuses on AI safety and business transformation. Former Meta red-teamer for Llama; previously identified 20+ automations, trained 50+ staff, and shipped AI tooling for 30% faster delivery. Now interviewing for senior AI safety/product/strategy roles.";
  }

  if (q.includes("leadership") || q.includes("manage") || q.includes("team")) {
    return "Led cross-continental teams; delivered 30% faster projects and 10% higher client satisfaction. Former Meta AI safety; now interviewing. Skilled in stakeholder alignment and change management.";
  }

  if (q.includes("education") || q.includes("mba") || q.includes("school") || q.includes("degree")) {
    return "BS (WPI), MBA (Cambridge College), grad studies in Innovation & Entrepreneurship (CBS) and Strategy (WU Vienna). Former Meta AI safety; now interviewing.";
  }

  if (
    q.includes("international") ||
    q.includes("europe") ||
    q.includes("marathon") ||
    q.includes("global") ||
    q.includes("running") ||
    q.includes("world marathon majors")
  ) {
    return "Pursuing Abbott World Marathon Majors: Chicago 2019, Berlin 2021, NYC 2022; Sydney planned Aug 2026. Demonstrates discipline and persistence. Former Meta; now interviewing.";
  }

  if (q.includes("location") || q.includes("where") || q.includes("based") || q.includes("visa")) {
    return "NYC-based, U.S. Permanent Resident (no visa needed). Former Meta AI safety; now interviewing for senior roles.";
  }

  return availability();
}