// import "./About.css";

// function About() {
//   return (
//     <section id="about" className="about">
//       <div className="about-container">
//         {/* LEFT CONTENT */}
//         <div className="about-text">
//           <h2>
//             About <span>MindForge Robotics</span>
//           </h2>

//           <p>
//             MindForge Robotics is a UDYAM-registered micro enterprise providing
//             educational support services with a strong focus on skill
//             development, structured learning, and practical training in emerging
//             technologies.
//           </p>

//           <p>
//             Founded in 2026 and based in Punjab, India, our mission is to bridge
//             the gap between academic education and industry-oriented skills
//             through hands-on learning, mentorship, and real-world exposure.
//           </p>

//           <ul>
//             <li>✔ UDYAM Registered (MSME)</li>
//             <li>✔ Educational Support Services (NIC 85500)</li>
//             <li>✔ Skill Development & Practical Training</li>
//             <li>✔ Career-Oriented Learning Programs</li>
//           </ul>
//         </div>

//         {/* RIGHT CARD */}
//         <div className="about-box">
//           <h3>Our Objective</h3>
//           <p>
//             To empower learners by delivering high-quality educational support,
//             practical exposure, and skill-based training that enhances
//             employability, confidence, and technical competence.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;
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
            MindForge Robotics is a UDYAM-registered micro enterprise providing
            educational support services with a strong focus on skill
            development, structured learning, and practical training in emerging
            technologies.
          </p>

          <p data-aos="fade-up" data-aos-delay="500">
            Founded in 2026 and based in Punjab, India, our mission is to bridge
            the gap between academic education and industry-oriented skills
            through hands-on learning, mentorship, and real-world exposure.
          </p>

          <ul>
            <li data-aos="fade-up" data-aos-delay="600">
              ✔ UDYAM Registered (MSME)
            </li>
            <li data-aos="fade-up" data-aos-delay="700">
              ✔ Educational Support Services (NIC 85500)
            </li>
            <li data-aos="fade-up" data-aos-delay="800">
              ✔ Skill Development & Practical Training
            </li>
            <li data-aos="fade-up" data-aos-delay="900">
              ✔ Career-Oriented Learning Programs
            </li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="about-box" data-aos="fade-left" data-aos-delay="300">
          <h3 data-aos="zoom-in" data-aos-delay="400">
            Our Objective
          </h3>
          <p data-aos="fade-up" data-aos-delay="500">
            To empower learners by delivering high-quality educational support,
            practical exposure, and skill-based training that enhances
            employability, confidence, and technical competence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
