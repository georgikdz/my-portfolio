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
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-M8B90KPCXR"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-M8B90KPCXR');
</script>
        <title>Georgi Kardzhaliyski, MBA · Product & Research · Product Data Operations · GenAI</title>
        <meta name="description" content="AI Safety & Red-Teaming Analyst at Meta working on Llama model safety. 10+ years driving AI strategy & digital transformation. 25% efficiency gains, 5,000+ businesses transformed. Based in NYC." />
        <meta property="og:title" content="Georgi Kardzhaliyski - AI Safety Analyst at Meta" />
        <meta property="og:description" content="AI Safety & Red-Teaming Analyst at Meta | AI Strategy & Digital Transformation Expert | 10+ Years Experience" />
        <meta property="og:image" content="https://georgikdz.vercel.app/headshot.jpg" />
        <meta property="og:url" content="https://georgikdz.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Georgi Kardzhaliyski - Building & Breaking GenAI @Meta" />
        <meta name="twitter:description" content="AI Safety & Red-Teaming Analyst at Meta | AI Strategy Expert" />
        <meta name="twitter:image" content="https://georgikdz.vercel.app/headshot.jpg" />
        <meta name="google-site-verification" content="g-6FihM9qAVcH7FFqUjSZPJmUFxiIkpwxCBiDkRZ5x8" />
        <meta name="keywords" content="AI Strategy, Digital Transformation, Meta, Llama, AI Safety, Red Teaming, Worcester Polytechnic Institute (WPI), WPI, Cambridge College, Copenhagen Business School, WU Wien, open to opportunities in NYC and Boston,Business Transformation, Product Management, NYC, Georgi Kardzhaliyski, recruiters NYC, customer success manager NYC" />
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
            { "@type": "CollegeOrUniversity", "name": "Worcester Polytechnic Institute (WPI)" },
            { "@type": "CollegeOrUniversity", "name": "Cambridge College" },
            { "@type": "CollegeOrUniversity", "name": "Copenhagen Business School (CBS)" },
            { "@type": "CollegeOrUniversity", "name": "WU (Vienna University of Economics and Business)" }
          ],
          "knowsAbout": ["AI Strategy", "Digital Transformation", "AI Safety", "Red Teaming", "Product Management", "Business Transformation"]
        }) }} />
      </Head>
      <Navigation />
      <main style={{ paddingTop: '40px' }}>
        <Hero />
        <section id="about" className="section about-section">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <div className="about-item">
                <p className="about-text">
  Georgi has worn many hats throughout his career, working with CEOs, engineering teams, designers, product and project managers across startups, mid-sized and large corporations, and NGOs. His international background helps him navigate the nuances of both U.S. and European business cultures. He thrives in startup environments, even when chaotic, where he can make an impact alongside ambitious international colleagues who challenge his thinking.    
    </p>
              </div>
              <div className="about-item">
                <p className="about-text">
                  I hold a BS in Management Information Systems (MIS) and Economics from Worcester Polytechnic Institute (WPI), an MBA from Cambridge College, and specialized graduate studies from the Copenhagen Business School (CBS) and WU Wien (Vienna University of Economics and Business).
                  <br /><br />
                  While at WPI, Georgi and his team published their MIS capstone research on how mobile user experience (UX) drives business value at international Human-Computer Interaction (HCI) conferences. Beyond academic work, he collaborated with the Bulgarian-American Fulbright Commission to publish and distribute a collection of stories to high schools throughout Bulgaria.
                </p>
              </div>
              <div className="about-item about-item-highlight"> 
                <p className="about-text">
When I'm not working, you'll find me training for my next marathon. I'm pursuing the Abbott World Marathon Majors, a series of the world's 7 most prestigious marathons. So far, I've completed 3/7: Chicago (2019), Berlin (2021), and New York City (2022), plus six other marathons along the way. Still to come: Sydney, Tokyo, Boston, and London.
                </p>
              </div>
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
