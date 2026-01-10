import "./Contact.css";

function Contact() {
  //   const openWhatsApp = () => {
  //     const msg = `Hello MindForge Robotics 👋
  // I would like to get in touch regarding Robotics / AI programs.`;

  //     setTimeout(() => {
  //       window.open(
  //         `https://wa.me/917889219128?text=${encodeURIComponent(msg)}`,
  //         "_blank"
  //       );
  //     }, 150);
  //   };

  return (
    <section id="contact" className="contact">
      {/* ===== INFO CARDS ===== */}
      <div className="contact-cards" data-aos="fade-up">
        <div className="contact-card" data-aos="zoom-in">
          <span>📍</span>
          <h4>Location</h4>
          <p>
            Patiala
            <br />
            Punjab, India
          </p>
        </div>

        <div className="contact-card" data-aos="zoom-in" data-aos-delay="100">
          <span>📞</span>
          <h4>Contact</h4>
          <p>+91 788 921 9128</p>
        </div>

        <div className="contact-card" data-aos="zoom-in" data-aos-delay="200">
          <span>📧</span>
          <h4>Email</h4>
          <p>goyalashi0285@gmail.com</p>
        </div>

        <div className="contact-card" data-aos="zoom-in" data-aos-delay="300">
          <span>🕘</span>
          <h4>Visit Between</h4>
          <p>
            Mon – Sat
            <br />
            9:00 AM – 5:00 PM
          </p>
        </div>
      </div>

      {/* ===== MAP ===== */}
      <div className="contact-map" data-aos="fade-up">
        <iframe
          title="MindForge Location"
          src="https://www.google.com/maps?q=Patiala,Punjab,India&output=embed"
          loading="lazy"
        ></iframe>
      </div>

      {/* ===== FLOATING CTA (OVER FOOTER) ===== */}
      {/* <div className="contact-floating-cta" data-aos="fade-up">
        <h2>Ready to Elevate Education with MindForge Robotics?</h2>
        <button onClick={openWhatsApp}>
          Get In Touch <span>→</span>
        </button>
      </div> */}
    </section>
  );
}

export default Contact;
