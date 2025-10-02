import Navigation from '../components/Navigation'

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: 'white' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          {/* Left Side - Content */}
          <div className="hero-content">
            {/* Social Proof */}
            <div className="social-proof">
              <div className="profile-pics">
                <div className="profile-pic"></div>
                <div className="profile-pic"></div>
                <div className="profile-pic"></div>
              </div>
              <span className="proof-text">100+ Active Donations</span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-heading">
              United for a Nourished and Empowered Tomorrow
            </h1>

            {/* Subheadline */}
            <p className="hero-subheadline">
              Through nutritious meals, education, and community support, we're helping children and families rise from hunger to hope.
            </p>

            {/* Call to Action Buttons */}
            <div className="hero-buttons">
              <button className="cta-button">
                Donate Now
                <span className="arrow-icon">→</span>
              </button>
              <a href="#" className="learn-more">Learn More</a>
            </div>

            {/* Partners Section */}
            <div className="partners-section">
              <h3 className="partners-title">Our most loved partners</h3>
              <div className="partner-logos">
                <div className="partner-logo">waves</div>
                <div className="partner-logo">RotaShow</div>
                <div className="partner-logo">travelers</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="hero-image-section">
            <div className="hero-image">
              {/* Image placeholder - you can add actual image here */}
              <div className="image-placeholder">
                <div className="volunteers-image">
                  {/* Volunteers with signs */}
                  <div className="volunteer-signs">
                    <div className="sign">HOT</div>
                    <div className="sign">VOLUNTEER</div>
                    <div className="sign">Donation Box</div>
                    <div className="sign">SAVE THE WORLD</div>
                  </div>
                </div>
              </div>

              {/* Speech Bubble */}
              <div className="speech-bubble">
                <div className="bubble-profile"></div>
                <p>"Because of this organization, I was given hope and a second chance."</p>
              </div>

              {/* Video Playback */}
              <div className="video-overlay">
                <span>Watch our story reel</span>
                <div className="play-button">▶</div>
              </div>

              {/* Text Overlay */}
              <div className="text-overlay">
                Real lives changed by your support
              </div>

              {/* Information Card */}
              <div className="info-card">
                <h3>Dedicated team</h3>
                <p>Providing essential resources and aid to those who are in need in emergency.</p>
                <div className="team-info">
                  <div className="team-pics">
                    <div className="team-pic"></div>
                    <div className="team-pic"></div>
                    <div className="team-pic"></div>
                    <div className="team-pic"></div>
                  </div>
                  <span className="impact-number">9k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 