import Head from 'next/head'
import Script from 'next/script'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
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
        <meta name="twitter:title" content="Georgi Kardzhaliyski - Building & Breaking GenAI @Meta" />
        <meta name="twitter:description" content="AI Safety & Red-Teaming Analyst at Meta | AI Strategy Expert" />
        <meta name="twitter:image" content="https://georgikdz.vercel.app/headshot.jpg" />
        <meta name="google-site-verification" content="55A62UzQViq0d2ouDFKqLGQSXKklmR9c3MLqsvoQDrA" />        
        <meta name="keywords" content="AI Strategy, Digital Transformation, Meta, Llama, AI Safety, Red Teaming, Worcester Polytechnic Institute (WPI), WPI, Cambridge College, Copenhagen Business School, WU Wien, open to opportunities in NYC and Boston,Business Transformation, Product Management, NYC, Georgi Kardzhaliyski, recruiters NYC, customer success manager NYC" />
        <link rel="canonical" href="https://georgikdz.vercel.app" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KNSVR2EQC3"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KNSVR2EQC3');
        `}
      </Script>
      <Navigation />
      <main style={{ paddingTop: '40px' }}>
        <Hero />
        <About />
        
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}