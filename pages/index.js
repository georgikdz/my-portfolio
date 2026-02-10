import Head from 'next/head'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Georgi Kardzhaliyski, MBA · Product & Research · Product Data Operations · GenAI</title>
        <meta name="description" content="AI Safety & Red-Teaming Analyst at Meta working on Llama model safety. 10+ years driving AI strategy & digital transformation. 25% efficiency gains, 5,000+ businesses transformed. Based in NYC." />
        <meta property="og:title" content="Georgi Kardzhaliyski - AI Safety Analyst at Meta" />
        <meta property="og:description" content="AI Safety & Red-Teaming Analyst at Meta | AI Strategy & Digital Transformation Expert | 10+ Years Experience" />
        <meta property="og:image" content="https://georgikdz.vercel.app/headshot.jpg" />
        <meta property="og:url" content="https://georgikdz.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Georgi Kardzhaliyski - AI Safety Analyst at Meta" />
        <meta name="twitter:description" content="AI Safety & Red-Teaming Analyst at Meta | AI Strategy Expert" />
        <meta name="twitter:image" content="https://georgikdz.vercel.app/headshot.jpg" />
        <meta name="keywords" content="AI Strategy, Digital Transformation, Meta, Llama, AI Safety, Red Teaming, Business Transformation, Product Management, NYC, Georgi Kardzhaliyski" />
        <link rel="canonical" href="https://georgikdz.vercel.app" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Georgi Kardzhaliyski",
          "jobTitle": "AI Safety & Red-Teaming Analyst",
          "worksFor": { "@type": "Organization", "name": "Meta Platforms" },
          "url": "https://georgikdz.vercel.app",
          "sameAs": [
            "https://linkedin.com/in/georgikdz",
            "https://github.com/georgikdz"
          ],
          "alumniOf": [
            { "@type": "CollegeOrUniversity", "name": "Worcester Polytechnic Institute" },
            { "@type": "CollegeOrUniversity", "name": "Cambridge College" },
            { "@type": "CollegeOrUniversity", "name": "Copenhagen Business School" },
            { "@type": "CollegeOrUniversity", "name": "Vienna University of Economics and Business" }
          ],
          "knowsAbout": ["AI Strategy", "Digital Transformation", "AI Safety", "Red Teaming", "Product Management", "Business Transformation"]
        }) }} />
      </Head>
      <Navigation />
      <main style={{ paddingTop: '80px' }}>
        <Hero />
        
        <section id="about" className="section about-section">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <p className="about-text">
                I'm currently an AI Safety & Red-Teaming Analyst at Meta Platforms, working on Llama model safety 
                through adversarial testing and red-teaming to uncover vulnerabilities and ensure policy compliance. 
                Since October 2025, I've been contributing to Meta's AI safety infrastructure and model evaluation processes.
              </p>
              <p className="about-text">
                With 10+ years of experience driving AI strategy and digital transformation across the U.S. and Europe, 
                I specialize in bridging technical AI capabilities with business strategy. My background includes leading 
                AI adoption initiatives (25% efficiency gains at Advance Valuations), enabling 5,000+ SMEs to adopt AI tools, 
                and consulting for Fortune 500 brands like KTM and Atomic. I hold a BS from Worcester Polytechnic Institute, 
                an MBA from Cambridge College, and specialized graduate studies from Copenhagen Business School and Vienna University of Economics.
              </p>
              <p className="about-text">
                Beyond my professional work, I'm pursuing the World Marathon Majors—a personal quest to run all 7 of the world's most prestigious marathons. So far, I've completed 3/7: Chicago (2019), Berlin (2021), and NYC (2022), with Sydney scheduled for August 2026. This journey reflects the same discipline, persistence, and goal-oriented mindset I bring to driving AI strategy and digital transformation initiatives.
              </p>
            </div>
          </div>
        </section>
        
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
