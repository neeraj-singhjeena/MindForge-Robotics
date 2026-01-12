import { useState } from "react";
import "./Home.css";

function Home() {
  const [openDemo, setOpenDemo] = useState(false);

  return (
    <section id="home" className="home">
      {/* BACKGROUND ANIMATION */}
      <div className="bg-animation">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="home-layout">
        {/* LEFT CONTENT */}
        <div className="home-content">
          <h1>
            MindForge Robotics <br />
            <span>
              <span className="type-text">Shaping Young Minds into </span>
            </span>
            <br />
            <span>
              <span className="type-text"> Future Innovators</span>
            </span>
          </h1>

          <p className="home-tagline">
            Empowering School Students with{" "}
            <strong>Robotics, AI, IoT & Drone Education</strong> through
            Hands-On Learning. MindForge Robotics is an education-focused
            technology company delivering practical, future-ready STEM programs
            in schools.
          </p>

          {/* CTA BUTTONS */}
          <div className="home-buttons">
            <a href="#contact" className="btn primary">
              Partner With Us
            </a>

            <button className="btn secondary" onClick={() => setOpenDemo(true)}>
              Book a Free Demo
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="home-image">
          <img src="/robot.png" alt="Robot Illustration" />
        </div>
      </div>

      {/* DEMO MODAL */}
      {openDemo && (
        <div className="demo-modal">
          <div className="demo-box">
            <h3>Book a Free School Demo</h3>

            <input placeholder="School Name" />
            <input placeholder="Contact Person" />
            <input placeholder="Phone Number" />
            <input placeholder="Email Address" />

            <button className="btn primary">Confirm Booking</button>

            <span className="close" onClick={() => setOpenDemo(false)}>
              ✖
            </span>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
