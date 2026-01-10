// import { useState } from "react";
// import "./Home.css";

// function Home() {
//   const [openDemo, setOpenDemo] = useState(false);

//   return (
//     <section id="home" className="home">
//       {/* BACKGROUND ANIMATION */}
//       <div className="bg-animation">
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>

//       <div className="home-content">
//         <h1>
//           MindForge Robotics <br />
//           <span className="typewriter">
//             <span className="type-text">
//               Shaping Young Minds into Future Innovators
//             </span>
//           </span>
//         </h1>

//         <p className="home-tagline">
//           Empowering School Students with{" "}
//           <strong>Robotics, AI, IoT & Drone Education</strong> through Hands-On
//           Learning.
//         </p>

//         <p className="home-intro">
//           MindForge Robotics is an education-focused technology company
//           delivering practical, future-ready STEM programs in schools.
//         </p>

//         {/* HIGHLIGHTS */}
//         <div className="home-highlights">
//           <div className="highlight">🤖 Hands-On Robotics Learning</div>
//           <div className="highlight">🧠 AI & Coding (Basics to Advanced)</div>
//           <div className="highlight">🌐 IoT & Smart Technology Projects</div>
//           <div className="highlight">🚁 Drone Building & Flight Training</div>
//           <div className="highlight">🏫 School Curriculum Integration</div>
//           <div className="highlight">👨‍🏫 Expert Trainers & Mentors</div>
//         </div>

//         {/* CTA BUTTONS */}
//         <div className="home-buttons">
//           <a href="#contact" className="btn primary">
//             Partner With Us
//           </a>

//           <button className="btn secondary" onClick={() => setOpenDemo(true)}>
//             Book a Free Demo
//           </button>

//           {/* <a href="/school-proposal.pdf" download className="btn outline">
//             Download School Proposal
//           </a> */}
//         </div>
//       </div>

//       {/* DEMO MODAL */}
//       {openDemo && (
//         <div className="demo-modal">
//           <div className="demo-box">
//             <h3>Book a Free School Demo</h3>

//             <input placeholder="School Name" />
//             <input placeholder="Contact Person" />
//             <input placeholder="Phone Number" />
//             <input placeholder="Email Address" />

//             <button className="btn primary">Confirm Booking</button>

//             <span className="close" onClick={() => setOpenDemo(false)}>
//               ✖
//             </span>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Home;
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
              <span className="type-text">into Future Innovators</span>
            </span>
          </h1>

          <p className="home-tagline">
            Empowering School Students with{" "}
            <strong>Robotics, AI, IoT & Drone Education</strong> through
            Hands-On Learning.
          </p>

          <p className="home-intro">
            MindForge Robotics is an education-focused technology company
            delivering practical, future-ready STEM programs in schools.
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
