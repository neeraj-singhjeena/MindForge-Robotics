import "./Services.css";

function Services() {
  return (
    <section
      id="services"
      className="services"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="services-container">
        <h2 className="services-title" data-aos="fade-up" data-aos-delay="200">
          Our <span>Services</span>
        </h2>

        <p
          className="services-subtitle"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          MindForge Robotics delivers structured, practical, and future-ready
          STEM education programs designed specially for school students.
        </p>

        <div className="services-grid">
          {/* Robotics */}
          <div className="service-card" data-aos="fade-up" data-aos-delay="400">
            <h3>🤖 Robotics Education</h3>
            <p>
              Structured robotics programs where students design, build, and
              program robots using sensors, motors, and microcontrollers.
            </p>
            <ul>
              <li>Beginner to Advanced Levels</li>
              <li>Age-wise Curriculum (Class 3–12)</li>
              <li>Real-World Problem Solving</li>
            </ul>
          </div>

          {/* AI */}
          <div className="service-card" data-aos="fade-up" data-aos-delay="500">
            <h3>🧠 Artificial Intelligence (AI) & Coding</h3>
            <p>
              Simplified and engaging AI programs focused on logical thinking,
              coding, and machine learning fundamentals.
            </p>
            <ul>
              <li>Block Coding & Python</li>
              <li>AI Concepts (Vision, Automation, Chatbots)</li>
              <li>Creativity + Logic Development</li>
            </ul>
          </div>

          {/* IoT */}
          <div className="service-card" data-aos="fade-up" data-aos-delay="600">
            <h3>🌐 Internet of Things (IoT)</h3>
            <p>
              Students explore how smart devices communicate and work together
              to solve real-life problems.
            </p>
            <ul>
              <li>Smart Home & Smart City Projects</li>
              <li>Sensor-Based Automation</li>
              <li>Industry-Relevant Skills</li>
            </ul>
          </div>

          {/* Drone */}
          <div className="service-card" data-aos="fade-up" data-aos-delay="700">
            <h3>🚁 Drone Technology</h3>
            <p>
              From building to flying, our drone programs inspire innovation and
              technical confidence.
            </p>
            <ul>
              <li>Drone Assembly & Components</li>
              <li>Flight Training & Safety</li>
              <li>Applications in Agriculture, Defense & Mapping</li>
            </ul>
          </div>

          {/* Lab */}
          <div className="service-card" data-aos="fade-up" data-aos-delay="800">
            <h3>🏫 School Lab Setup & Curriculum Support</h3>
            <p>
              We help schools establish Robotics & Innovation Labs aligned with
              NEP and CBSE/ICSE guidelines.
            </p>
            <ul>
              <li>Complete Lab Setup</li>
              <li>Teacher Training</li>
              <li>Annual Academic Plans</li>
            </ul>
          </div>

          {/* Workshops */}
          <div className="service-card" data-aos="fade-up" data-aos-delay="900">
            <h3>🏆 Workshops & Innovation Programs</h3>
            <p>
              Hands-on workshops and competitions that promote creativity,
              teamwork, and innovation.
            </p>
            <ul>
              <li>Robotics Workshops</li>
              <li>STEM Bootcamps</li>
              <li>Inter-School Competitions</li>
              <li>Science Fair Project Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
