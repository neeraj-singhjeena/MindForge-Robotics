// import "./Services.css";

// function Services() {
//   return (
//     <section id="services" className="services">
//       <div className="services-container">
//         <h2 className="services-title">
//           Our <span>Services</span>
//         </h2>

//         <p className="services-subtitle">
//           MindForge Robotics provides educational support services focused on
//           skill development, practical training, and career-oriented learning.
//         </p>

//         <div className="services-grid">
//           <div className="service-card">
//             <h3>Skill Development Training</h3>
//             <p>
//               Industry-oriented training programs designed to build practical
//               skills in Robotics, AI, and modern technologies.
//             </p>
//           </div>

//           <div className="service-card">
//             <h3>Educational Support Services</h3>
//             <p>
//               Academic assistance, concept clarification, and technical
//               mentoring aligned with institutional and industry standards.
//             </p>
//           </div>

//           <div className="service-card">
//             <h3>Project-Based Learning</h3>
//             <p>
//               Hands-on projects, real-world problem solving, and guided
//               implementation to strengthen practical knowledge.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;
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
          data-aos-delay="350"
        >
          MindForge Robotics provides educational support services focused on
          skill development, practical training, and career-oriented learning.
        </p>

        <div className="services-grid">
          <div className="service-card" data-aos="zoom-in" data-aos-delay="200">
            <h3>Skill Development Training</h3>
            <p>
              Industry-oriented training programs designed to build practical
              skills in Robotics, AI, and modern technologies.
            </p>
          </div>

          <div className="service-card" data-aos="zoom-in" data-aos-delay="350">
            <h3>Educational Support Services</h3>
            <p>
              Academic assistance, concept clarification, and technical
              mentoring aligned with institutional and industry standards.
            </p>
          </div>

          <div className="service-card" data-aos="zoom-in" data-aos-delay="500">
            <h3>Project-Based Learning</h3>
            <p>
              Hands-on projects, real-world problem solving, and guided
              implementation to strengthen practical knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
