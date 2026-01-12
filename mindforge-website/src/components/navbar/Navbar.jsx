import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <span className="brand">Mindforge Robotic</span>
      </div>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* MENU */}
      <div className={`nav-right ${menuOpen ? "open" : ""}`}>
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("about")}>About Us</button>
        <button onClick={() => scrollToSection("services")}>Services</button>
        <button onClick={() => scrollToSection("courses")}>Courses</button>
        <button onClick={() => scrollToSection("contact")}>Contact Us</button>
      </div>
    </nav>
  );
}

export default Navbar;
// import { useState } from "react";
// import "./Navbar.css";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setMenuOpen(false);
//     }
//   };

//   return (
//     <nav className="navbar">
//       {/* LEFT LOGO */}
//       <div className="nav-left" onClick={() => scrollToSection("home")}>
//         <img
//           src="/Mindforge robotic.png"
//           alt="MindForge Robotics Logo"
//           className="nav-logo"
//         />
//       </div>

//       {/* HAMBURGER */}
//       <div
//         className={`hamburger ${menuOpen ? "active" : ""}`}
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>

//       {/* MENU */}
//       <div className={`nav-right ${menuOpen ? "open" : ""}`}>
//         <button onClick={() => scrollToSection("home")}>Home</button>
//         <button onClick={() => scrollToSection("about")}>About Us</button>
//         <button onClick={() => scrollToSection("services")}>Services</button>
//         <button onClick={() => scrollToSection("courses")}>Courses</button>
//         <button onClick={() => scrollToSection("contact")}>Contact Us</button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
