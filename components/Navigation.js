export default function Navigation() {
  const scrollToChat = () => {
    const chatSection = document.querySelector('#contact') || document.querySelector('.ai-chat-section');
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">Georgi Kardzhaliyski, MBA</div>
          
          <div className="nav-center">
            <span className="nav-location">📍 New York, NY</span>
            <button className="nav-cta" onClick={scrollToChat}>
              💬 Ask Me Anything
            </button>
          </div>
          
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
