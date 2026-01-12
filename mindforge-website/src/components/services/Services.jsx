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
        <h2 className="services-title" data-aos="fade-up">
          Our <span>Services</span>
        </h2>

        <p
          className="services-subtitle"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Structured, practical, and future-ready STEM education services
          designed for modern schools.
        </p>

        <div className="services-grid">
          {/* CARD 1 */}
          <div className="service-card" data-aos="fade-up">
            <div className="service-image">
              {/* YAHAN APNI IMAGE LAGANA */}
              <img src="/images/robotics.jpg" alt="Robotics Education" />
            </div>

            <div className="service-content">
              <h3>Robotics Education</h3>
              <p>
                Hands-on robotics programs where students design, build, and
                program robots using sensors and controllers.
              </p>
              <ul>
                <li>Beginner to Advanced Levels</li>
                <li>Age-wise Curriculum (Class 3–12)</li>
                <li>Real-World Problem Solving</li>
              </ul>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="service-card" data-aos="fade-up" data-aos-delay="100">
            <div className="service-image">
              <img src="/images/ai.jpg" alt="AI & Coding" />
            </div>

            <div className="service-content">
              <h3>Artificial Intelligence & Coding</h3>
              <p>
                Simplified AI and coding programs focused on logic, creativity,
                and problem-solving skills.
              </p>
              <ul>
                <li>Block Coding & Python</li>
                <li>AI Concepts & Automation</li>
                <li>Logical Thinking Development</li>
              </ul>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="service-card" data-aos="fade-up" data-aos-delay="200">
            <div className="service-image">
              <img src="/images/iot.jpg" alt="IoT & Smart Tech" />
            </div>

            <div className="service-content">
              <h3>IoT & Smart Technology</h3>
              <p>
                Learn how smart devices communicate and automate real-life
                solutions using IoT technologies.
              </p>
              <ul>
                <li>Smart Home & Smart City Projects</li>
                <li>Sensor-Based Automation</li>
                <li>Industry-Relevant Skills</li>
              </ul>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="service-card" data-aos="fade-up" data-aos-delay="300">
            <div className="service-image">
              <img src="/images/drone.jpg" alt="Drone Technology" />
            </div>

            <div className="service-content">
              <h3>Drone Technology</h3>
              <p>
                Drone assembly, flight training, and applications that build
                technical confidence and innovation.
              </p>
              <ul>
                <li>Drone Assembly & Components</li>
                <li>Flight Training & Safety</li>
                <li>Industrial Applications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
