import "./About.css";

function About() {
  return (
    <section
      id="about"
      className="about"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="about-container">
        {/* LEFT CONTENT */}
        <div className="about-text" data-aos="fade-right" data-aos-delay="200">
          <h2 data-aos="fade-up" data-aos-delay="300">
            About <span>MindForge Robotics</span>
          </h2>

          <p data-aos="fade-up" data-aos-delay="400">
            MindForge Robotics is a next-generation{" "}
            <strong>STEM education company</strong> dedicated to transforming
            how students learn technology. We believe that innovation begins
            with curiosity, and our mission is to turn students from{" "}
            <strong>technology users into technology creators</strong>.
          </p>

          <p data-aos="fade-up" data-aos-delay="500">
            Founded with a vision to bridge the gap between school education and
            real-world technology, MindForge Robotics delivers industry-relevant
            programs in <strong>Robotics, AI, IoT, and Drone Technology</strong>{" "}
            directly within schools.
          </p>

          <ul>
            <li data-aos="fade-up" data-aos-delay="600">
              ✔ Hands-On Learning Approach
            </li>
            <li data-aos="fade-up" data-aos-delay="700">
              ✔ Industry-Experienced Trainers
            </li>
            <li data-aos="fade-up" data-aos-delay="800">
              ✔ Age-Appropriate Curriculum
            </li>
            <li data-aos="fade-up" data-aos-delay="900">
              ✔ Project-Based & Innovation-Focused Learning
            </li>
            <li data-aos="fade-up" data-aos-delay="1000">
              ✔ Aligned with NEP & Future Skills
            </li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="about-box" data-aos="fade-left" data-aos-delay="300">
          <h3 data-aos="zoom-in" data-aos-delay="400">
            Our Mission & Vision
          </h3>

          <p data-aos="fade-up" data-aos-delay="500">
            <strong>Mission:</strong> To empower students with practical
            technology skills, creativity, and critical thinking required for
            future careers.
          </p>

          <p data-aos="fade-up" data-aos-delay="600">
            <strong>Vision:</strong> To build a generation of innovators,
            engineers, and problem solvers prepared for the challenges of
            tomorrow.
          </p>

          <p data-aos="fade-up" data-aos-delay="700">
            <strong>Teaching Philosophy:</strong> We believe students learn best
            by doing, experimenting, and building through curiosity, teamwork,
            and real-life applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
