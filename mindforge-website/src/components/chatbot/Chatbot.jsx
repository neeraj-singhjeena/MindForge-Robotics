import { useState, useRef, useEffect } from "react";
import "./Chatbot.css";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 I am MindForge Assistant. Ask me about courses, services, or training.",
    },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userText = input;

    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: getBotReply(userText) },
      ]);
    }, 600);
  };

  const getBotReply = (msg) => {
    const text = msg.toLowerCase();

    /* ABOUT */
    if (text.includes("about") || text.includes("mindforge")) {
      return (
        "MindForge Robotics is a UDYAM-registered micro enterprise providing " +
        "educational support services. We focus on skill development, practical " +
        "training, and career-oriented learning in emerging technologies."
      );
    }

    /* COURSES */
    if (text.includes("course") || text.includes("training")) {
      return (
        "We offer industry-focused courses in Robotics & Automation, " +
        "Artificial Intelligence, and Web / Software Development. " +
        "All courses include practical training and project-based learning."
      );
    }

    /* SERVICES */
    if (text.includes("service")) {
      return (
        "Our services include Educational Support Services (NIC 85500), " +
        "skill development programs, mentorship, and hands-on project guidance."
      );
    }

    /* FEES */
    if (
      text.includes("fee") ||
      text.includes("cost") ||
      text.includes("price")
    ) {
      return (
        "Course fees depend on the selected program and duration. " +
        "Please contact us for detailed fee structure and enrollment guidance."
      );
    }

    /* LOCATION */
    if (text.includes("location") || text.includes("address")) {
      return "MindForge Robotics is based in Patiala, Punjab, India.";
    }

    /* CONTACT */
    if (
      text.includes("contact") ||
      text.includes("phone") ||
      text.includes("email")
    ) {
      return "You can contact us at 📞 +91 78892 19128 or ✉️ goyalashi0285@gmail.com";
    }

    /* UDYAM */
    if (text.includes("udyam") || text.includes("msme")) {
      return (
        "Yes ✅ MindForge Robotics is a UDYAM-registered MSME under " +
        "Educational Support Services (NIC Code 85500)."
      );
    }

    /* GREETING */
    if (text.includes("hi") || text.includes("hello")) {
      return "Hello 😊 How can I help you today?";
    }

    /* DEFAULT */
    return (
      "Thanks for your message 👍 You can ask me about our courses, services, " +
      "training programs, or contact details."
    );
  };

  return (
    <>
      {/* CHAT BUTTON */}
      <div
        className={`chatbot-fab ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
          alt="Chatbot"
        />
      </div>

      {/* CHAT WINDOW */}
      <div className={`chatbot ${open ? "open" : ""}`}>
        <div className="chat-header">
          🤖 MindForge Assistant
          <span onClick={() => setOpen(false)}>✖</span>
        </div>

        <div className="chat-body">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          <div ref={chatEndRef}></div>
        </div>

        <div className="chat-footer">
          <input
            type="text"
            placeholder="Ask about courses, services, fees..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>➤</button>
        </div>
      </div>
    </>
  );
}

export default Chatbot;
