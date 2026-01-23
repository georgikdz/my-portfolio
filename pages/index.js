import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Portfolio | AI Safety & Red-Teaming Analyst at Meta</title>
        <meta name="description" content="Welcome to my portfolio! I am an AI Safety & Red-Teaming Analyst at Meta Platforms, working on Llama model safety since October 2025." />
        <meta property="og:title" content="AI Safety & Red-Teaming Analyst at Meta" />
        <meta property="og:description" content="Explore my portfolio and professional journey as an AI Safety & Red-Teaming Analyst at Meta Platforms with a strong background in AI safety and red-teaming practices." />
        <meta property="og:url" content="https://yourportfolio.com" />
        <meta property="og:image" content="https://yourportfolio.com/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Safety & Red-Teaming Analyst at Meta" />
        <meta name="twitter:description" content="Discover my work and expertise in AI safety at Meta Platforms." />
        <meta name="twitter:image" content="https://yourportfolio.com/image.jpg" />
      </Head>
      <Navigation />
      <main>
        <section>
          <h1>About Me</h1>
          <p>I am currently working at Meta Platforms as an AI Safety & Red-Teaming Analyst. My responsibilities include ensuring the safety of the Llama model, focusing on its ethical and safe deployment since October 2025.</p>
          <p>With over 10 years of experience, I hold a solid educational background that includes WPI, an MBA, and studies in Copenhagen and Vienna.</p>
        </section>
      </main>
    </>
  );
}