import { useState } from "react";
import "../styles/ContactSection.css";
import ARROWICON from "../assets/icons/arrow-bottom-left.svg";
import GITHUBICON from "../assets/icons/github logo.svg";
import LINKEDINICON from "../assets/icons/linkedin logo.svg";
import useFormData from "../hooks/useFormData";
import CHECKICON from "../assets/icons/check.svg";

export default function ContactSection() {
  const { formData, setFormData } = useFormData();
  const [modalMessage, setModalMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://api.barnettshillman.com/api/contact",
        {
          mode: "cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // handle success
        setModalMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        // handle error
        console.error("Failed to send message");
        setModalMessage("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setModalMessage("Failed to send message: " + error);
    }
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false); // Hide modal
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-title section-title">Contact</div>
        <div className="contact-content-container">
          <div className="contact-content">
            I am currently looking for new opportunities, please contact me to
            get in touch!
          </div>
        </div>

        <div className="contact-form-container">
          <div className="contact-form-icons-container">
            <a
              href="https://github.com/shillman11"
              target="_blank"
              className="githublink"
            >
              <img src={GITHUBICON} alt="" className="contact-icon"></img>
            </a>
            <a
              href="https://www.linkedin.com/in/barnett-shillman-231b31b1/"
              target="_blank"
              className="githublink"
            >
              <img src={LINKEDINICON} alt="" className="contact-icon"></img>
            </a>
          </div>
          <form action="" className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              className="form-name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className="form-email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              id="form-message"
              cols="30"
              rows="10"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="form-submit-container">
              <button type="submit" className="form-submit-button">
                <div className="button-text">Send</div>
                <div className="button-text">Send</div>
              </button>
              <img
                className="arrow-image"
                id="submit-arrow-image"
                src={ARROWICON}
                alt=""
              />
            </div>
          </form>
        </div>
      </div>

      {isModalVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <p className="modal-message">
                {modalMessage === "Message sent successfully!" && (
                  <div className="checkIcon-container">
                    <img
                      src={CHECKICON}
                      alt="check icon"
                      className="checkIcon"
                    />
                  </div>
                )}
                {modalMessage}
              </p>

              <button onClick={closeModal} className="modal-close-button">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
