// import "./Courses.css";

// function Courses() {
//   return (
//     <section id="courses" className="courses">
//       <div className="courses-container">
//         <h2 className="courses-title">
//           Our <span>Courses</span>
//         </h2>

//         <p className="courses-subtitle">
//           Career-focused educational programs designed under our educational
//           support services framework.
//         </p>

//         <div className="courses-grid">
//           <div className="course-card">
//             <h3>Robotics & Automation</h3>
//             <p>
//               Fundamentals of robotics, sensors, automation systems, and
//               hands-on robotics projects.
//             </p>
//             <span className="duration">Duration: 3 Months</span>
//           </div>

//           <div className="course-card">
//             <h3>Artificial Intelligence</h3>
//             <p>
//               Core concepts of AI, machine learning basics, and practical
//               applications in real-world scenarios.
//             </p>
//             <span className="duration">Duration: 4 Months</span>
//           </div>

//           <div className="course-card">
//             <h3>Web & Software Development</h3>
//             <p>
//               Frontend and backend development using modern tools, with
//               project-based learning.
//             </p>
//             <span className="duration">Duration: 6 Months</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Courses;
import "./Courses.css";

function Courses() {
  return (
    <section
      id="courses"
      className="courses"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="courses-container">
        <h2 className="courses-title" data-aos="fade-up" data-aos-delay="200">
          Our <span>Courses</span>
        </h2>

        <p className="courses-subtitle" data-aos="fade-up" data-aos-delay="350">
          Career-focused educational programs designed under our educational
          support services framework.
        </p>

        <div className="courses-grid">
          <div className="course-card" data-aos="flip-up" data-aos-delay="200">
            <h3>Robotics & Automation</h3>
            <p>
              Fundamentals of robotics, sensors, automation systems, and
              hands-on robotics projects.
            </p>
            <span className="duration">Duration: 3 Months</span>
          </div>

          <div className="course-card" data-aos="flip-up" data-aos-delay="350">
            <h3>Artificial Intelligence</h3>
            <p>
              Core concepts of AI, machine learning basics, and practical
              applications in real-world scenarios.
            </p>
            <span className="duration">Duration: 4 Months</span>
          </div>

          <div className="course-card" data-aos="flip-up" data-aos-delay="500">
            <h3>Web & Software Development</h3>
            <p>
              Frontend and backend development using modern tools, with
              project-based learning.
            </p>
            <span className="duration">Duration: 6 Months</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
