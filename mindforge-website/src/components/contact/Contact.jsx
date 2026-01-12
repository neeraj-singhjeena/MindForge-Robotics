import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      {/* ===== INFO CARDS ===== */}
      <div className="contact-cards">
        {/* LOCATION */}
        <div className="contact-card">
          <div className="icon-box">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
            </svg>
          </div>
          <h4>Location</h4>
          <p>
            Patiala
            <br />
            Punjab, India
          </p>
        </div>

        {/* CONTACT */}
        <div className="contact-card">
          <div className="icon-box">
            <svg viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.7 3.9 5.2 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3.1.5.7 0 1.3.6 1.3 1.3V21c0 .7-.6 1.3-1.3 1.3C10.6 22.3 1.7 13.4 1.7 2.3 1.7 1.6 2.3 1 3 1h4.3c.7 0 1.3.6 1.3 1.3 0 1.1.2 2.1.5 3.1.1.4 0 .9-.3 1.2l-2.2 2.2z" />
            </svg>
          </div>
          <h4>Contact</h4>
          <p>+91 788 921 9128</p>
        </div>

        {/* EMAIL */}
        <div className="contact-card">
          <div className="icon-box">
            <svg viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </div>
          <h4>Email</h4>
          <p>goyalashi0285@gmail.com</p>
        </div>

        {/* VISIT TIME */}
        <div className="contact-card">
          <div className="icon-box">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 11h-4V7h2v4h2v2z" />
            </svg>
          </div>
          <h4>Visit Between</h4>
          <p>
            Mon – Sat
            <br />
            9:00 AM – 5:00 PM
          </p>
        </div>
      </div>

      {/* ===== MAP ===== */}
      <div className="contact-map">
        <iframe
          title="MindForge Location"
          src="https://www.google.com/maps?q=Patiala,Punjab,India&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
