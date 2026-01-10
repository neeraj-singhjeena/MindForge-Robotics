// import "./Home.css";

// function Home() {
//   return (
//     <section id="home" className="home">
//       {/* LIVE BACKGROUND */}
//       <div className="bg-animation">
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>

//       {/* CONTENT */}
//       <div className="home-content">
//         <h1>
//           Empowering <br />
//           <span className="typewriter">
//             <span>Future-Ready Learners</span>
//           </span>
//         </h1>

//         <p>
//           MindForge Robotics is a UDYAM-registered educational support services
//           enterprise focused on skill development and practical learning through
//           modern technology.
//         </p>

//         <div className="home-buttons">
//           <a href="#courses" className="btn primary">
//             View Courses
//           </a>
//           <a href="#about" className="btn secondary">
//             About Us
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Home;
import "./Home.css";

function Home() {
  return (
    <section
      id="home"
      className="home"
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      {/* LIVE BACKGROUND */}
      <div className="bg-animation">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* CONTENT */}
      <div className="home-content" data-aos="zoom-in" data-aos-delay="200">
        <h1 data-aos="fade-up" data-aos-delay="300">
          Empowering <br />
          <span className="typewriter">
            <span>Future-Ready Learners</span>
          </span>
        </h1>

        <p data-aos="fade-up" data-aos-delay="500">
          MindForge Robotics is a UDYAM-registered educational support services
          enterprise focused on skill development and practical learning through
          modern technology.
        </p>

        <div className="home-buttons" data-aos="fade-up" data-aos-delay="700">
          <a href="#courses" className="btn primary">
            View Courses
          </a>
          <a href="#about" className="btn secondary">
            About Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
