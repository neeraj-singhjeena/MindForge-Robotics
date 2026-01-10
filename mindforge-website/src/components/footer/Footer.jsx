import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
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

        {/* SERVICES */}
        <div className="footer-links">
          <h4>Our Services</h4>
          <a href="#services">Educational Support</a>
          <a href="#services">Skill Development</a>
          <a href="#services">Project-Based Learning</a>
          <a href="#courses">Training Programs</a>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4>Contact Information</h4>
          <p>📍 Patiala, Punjab, India</p>
          <p>📞 +91 78892 19128</p>
          <p>✉️ goyalashi0285@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 MindForge Robotics | UDYAM Registered Micro Enterprise <br />
          Educational Support Services (NIC 85500)
        </p>
      </div>
    </footer>
  );
}

export default Footer;
