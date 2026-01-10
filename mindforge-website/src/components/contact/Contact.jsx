// import "./Contact.css";

// function Contact() {
//   return (
//     <section
//       id="contact"
//       className="contact"
//       data-aos="fade-up"
//       data-aos-duration="900"
//     >
//       <div className="contact-container">
//         <h2 className="contact-title" data-aos="fade-up" data-aos-delay="200">
//           Contact <span>Us</span>
//         </h2>

//         <p className="contact-subtitle" data-aos="fade-up" data-aos-delay="350">
//           Get in touch with MindForge Robotics for educational support services,
//           skill development programs, and training-related enquiries.
//         </p>

//         <div className="contact-wrapper">
//           {/* LEFT : OFFICIAL INFO */}
//           <div
//             className="contact-info"
//             data-aos="fade-right"
//             data-aos-delay="400"
//           >
//             <h3 data-aos="fade-up" data-aos-delay="450">
//               MindForge Robotics
//             </h3>

//             <p data-aos="fade-up" data-aos-delay="500">
//               <strong>Nature of Business:</strong> Educational Support Services
//               (NIC 85500)
//             </p>

//             <p data-aos="fade-up" data-aos-delay="550">
//               <strong>Address:</strong> Goyal Cottage, Factory Area, Patiala,
//               Punjab – 147004
//             </p>

//             <p data-aos="fade-up" data-aos-delay="600">
//               <strong>Phone:</strong> +91 78892 19128
//             </p>

//             <p data-aos="fade-up" data-aos-delay="650">
//               <strong>Email:</strong> goyalashi0285@gmail.com
//             </p>

//             <p data-aos="fade-up" data-aos-delay="700">
//               <strong>UDYAM Status:</strong> Registered Micro Enterprise
//             </p>
//           </div>

//           {/* RIGHT : FORM */}
//           <form
//             className="contact-form"
//             data-aos="fade-left"
//             data-aos-delay="450"
//           >
//             <input
//               type="text"
//               placeholder="Your Full Name"
//               required
//               data-aos="fade-up"
//               data-aos-delay="500"
//             />

//             <input
//               type="email"
//               placeholder="Your Email Address"
//               required
//               data-aos="fade-up"
//               data-aos-delay="550"
//             />

//             <textarea
//               rows="5"
//               placeholder="Your Message / Enquiry"
//               required
//               data-aos="fade-up"
//               data-aos-delay="600"
//             ></textarea>

//             <button type="submit" data-aos="zoom-in" data-aos-delay="700">
//               Submit Enquiry
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;
import "./Contact.css";

function Contact() {
  return (
    <section
      id="contact"
      className="contact"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="contact-container">
        {/* TITLE */}
        <h2 className="contact-title" data-aos="fade-up" data-aos-delay="200">
          Contact <span>Us</span>
        </h2>

        <p className="contact-subtitle" data-aos="fade-up" data-aos-delay="300">
          Let’s Build the Innovators of Tomorrow – Together.
        </p>

        <div className="contact-wrapper">
          {/* LEFT INFO */}
          <div
            className="contact-info"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <h3>MindForge Robotics</h3>

            <p>
              <strong>📧 Email:</strong> goyalashi0285@gmail.com
            </p>

            <p>
              <strong>📞 Phone:</strong> +91 78892 19128
            </p>

            <p>
              <strong>🌐 Website:</strong> www.mindforgerobotics.in
            </p>

            <p>
              <strong>📍 Location:</strong> Patiala, Punjab, India
            </p>

            <p className="contact-note">
              We collaborate with schools to deliver Robotics, AI, IoT, and
              Drone education programs aligned with NEP & future skills.
            </p>
          </div>

          {/* RIGHT FORM */}
          <form
            className="contact-form"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <input type="text" placeholder="Your Full Name" required />
            <input type="email" placeholder="Your Email Address" required />
            <input type="tel" placeholder="Phone Number" required />

            <textarea
              rows="5"
              placeholder="Your Message / School Enquiry"
              required
            ></textarea>

            <button type="submit">Send Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
