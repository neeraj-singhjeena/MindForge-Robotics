import "./Footer.css";

function Footer() {
  const openWhatsApp = () => {
    const message = `Hello MindForge Robotics 👋
I would like to get in touch regarding your Robotics / AI programs.`;

    window.open(
      `https://wa.me/917889219128?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <footer className="footer">
      {/* ===== FLOATING CTA ===== */}
      <div className="footer-cta">
        <h2>Ready to Elevate Education with MindForge Robotics?</h2>
        <button onClick={openWhatsApp}>
          Get In Touch <span>→</span>
        </button>
      </div>

      {/* ===== FOOTER CONTENT ===== */}
      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-brand">
          <h3>MindForge Robotics</h3>
          <p>
            UDYAM-registered educational support services enterprise focused on
            skill development, practical training, and career-oriented learning
            in emerging technologies.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>Our Services</h4>
          <a href="#services">Educational Support</a>
          <a href="#services">Skill Development</a>
          <a href="#services">Project-Based Learning</a>
          <a href="#courses">Training Programs</a>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 Patiala, Punjab, India</p>
          <p>📞 +91 788 921 9128</p>
          <p>✉️ goyalashi0285@gmail.com</p>
        </div>
      </div>

      {/* ===== BOTTOM ===== */}
      <div className="footer-bottom">
        <p>
          © 2026 MindForge Robotics <br />
          Educational Support Services (NIC 85500)
        </p>
      </div>
    </footer>
  );
}

export default Footer;
