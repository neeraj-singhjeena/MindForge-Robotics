// import "./Sidebar.css";

// function Sidebar() {
//   return (
//     <div className="social-sidebar">
//       <a
//         href="https://wa.me/917889219128"
//         target="_blank"
//         rel="noreferrer"
//         className="whatsapp"
//       >
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
//           alt="WhatsApp"
//         />
//       </a>

//       <a
//         href="https://www.facebook.com/"
//         target="_blank"
//         rel="noreferrer"
//         className="facebook"
//       >
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
//           alt="Facebook"
//         />
//       </a>

//       <a
//         href="https://twitter.com/"
//         target="_blank"
//         rel="noreferrer"
//         className="twitter"
//       >
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
//           alt="Twitter"
//         />
//       </a>
//     </div>
//   );
// }

// export default Sidebar;
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="social-sidebar">
      {/* WhatsApp */}
      <a
        href="https://wa.me/917889219128"
        target="_blank"
        rel="noreferrer"
        className="whatsapp"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
        />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
        className="facebook"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
          alt="Facebook"
        />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
        className="instagram"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
          alt="Instagram"
        />
      </a>
    </div>
  );
}

export default Sidebar;
