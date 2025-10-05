import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '80px' }}>
        <Hero />
        
        <section id="about" className="section about-section">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <p className="about-text">
                I'm a seasoned business transformation leader with 10+ years of experience driving SaaS, AI, 
                and digital transformation initiatives across the U.S. and Europe. Currently based in Sunnyside, NY, 
                I specialize in identifying automation opportunities, implementing AI solutions, and streamlining 
                operations to deliver measurable business impact.
              </p>
              <p className="about-text">
                With an MBA and extensive experience in project management, I've successfully led cross-functional teams, 
                reduced operational costs by up to 25%, and enabled thousands of businesses to adopt cutting-edge AI tools. 
                My approach combines strategic thinking with hands-on execution to build smarter products and scale customer success.
              </p>
            </div>
          </div>
        </section>
        
        <Projects />
        <Contact />
      </main>
    </>
  );
}
