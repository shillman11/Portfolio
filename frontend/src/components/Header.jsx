import "../styles/Header.css";

export default function Header() {
  const scrollToSection = (sectionID) => {
    document.querySelector(sectionID).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="header-container">
        <div className="section-container"></div>
        <div className="link-container">
          <button
            className="header-button about"
            onClick={() => scrollToSection(".title-section")}
          >
            <div className="header-button-text">About</div>
            <div className="header-button-text">About</div>
          </button>

          <button
            className="header-button project"
            onClick={() => scrollToSection(".project-section-container")}
          >
            <div className="header-button-text">Projects</div>
            <div className="header-button-text">Projects</div>
          </button>

          <button
            className="header-button contact"
            onClick={() => scrollToSection(".contact-container")}
          >
            <div className="header-button-text">Contact</div>
            <div className="header-button-text">Contact</div>
          </button>
        </div>
      </div>
    </>
  );
}
