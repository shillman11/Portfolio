import "../styles/ContactSection.css";
import ARROWICON from "../assets/icons/arrow-bottom-left.svg";
import GITHUBICON from "../assets/icons/github logo.svg";
import LINKEDINICON from "../assets/icons/linkedin logo.svg";

export default function ContactSection() {
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
            <img src={GITHUBICON} alt="" className="contact-icon"></img>
            <img src={LINKEDINICON} alt="" className="contact-icon"></img>
          </div>
          <form action="" className="contact-form">
            <input
              type="text"
              name="name"
              className="form-name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              className="form-email"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              id="form-message"
              cols="30"
              rows="10"
              placeholder="Message"
              required
            ></textarea>
            <div className="form-submit-container">
              <button type="submit" className="form-submit-button">
                Send
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
    </>
  );
}
