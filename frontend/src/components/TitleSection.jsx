import "../styles/TitleSection.css";

export default function TitleSection() {
  return (
    <>
      <div className="title-section">
        <div className="name-container">
          <div className="name-wrapper">
            <div className="name" id="barnett">
              Barnett Shillman
            </div>
          </div>
          {/* <div className="name-wrapper">
            <div className="name" id="developer">
              Shillman
            </div>
          </div> */}
          <div className="name-wrapper">
            {" "}
            <div className="name" id="full-stack">
              FullStack Developer
            </div>
          </div>
          {/* <div className="name-wrapper">
            <div className="name" id="developer">
              Developer
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
