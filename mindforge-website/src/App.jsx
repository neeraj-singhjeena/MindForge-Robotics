// import Navbar from "./components/navbar/Navbar";
// import Home from "./components/home/Home";
// import Services from "./components/services/Services";
// import Courses from "./components/courses/Courses";
// import Contact from "./components/contact/Contact";
// import Footer from "./components/footer/Footer";
// import About from "./components/about/About";
// import Chatbot from "./components/chatbot/Chatbot";
// import Sidebar from "./components/sidebar/Sidebar";
// function App() {
//   return (
//     <>
//       <Navbar />
//       <Home />
//       <About />
//       <Services />
//       <Courses />
//       <Contact />
//       <Footer />
//       <Sidebar />
//       <Chatbot />
//     </>
//   );
// }

// export default App;
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Courses from "./components/courses/Courses";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import Chatbot from "./components/chatbot/Chatbot";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 120,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Courses />
      <Contact />
      <Footer />
      <Sidebar />
      <Chatbot />
    </>
  );
}

export default App;
