import { useState, useEffect } from "react";
import "./styles/App.css";
import TitleSection from "./components/TitleSection.jsx";
import Header from "./components/Header.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import useScrollWheel from "./hooks/useScrollWheel.jsx";

function App() {
  const scrollY = useScrollWheel();
  const [sectionContainerScale, setSectionContainerScale] = useState(1);
  const [appBackgroundColor, setAppBackgroundColor] = useState("");

  useEffect(() => {
    if (
      scrollY.scrollY >=
      document.documentElement.scrollHeight - window.innerHeight - 200
    ) {
      setSectionContainerScale(0.95);
    } else {
      setSectionContainerScale(1);
    }
    if (scrollY.scrollY >= 1000) {
      setAppBackgroundColor("var(--contact-background-color)");
    } else {
      setAppBackgroundColor("var(--background-color)");
    }
  }, [scrollY.scrollY]);

  return (
    <>
      <div className="App" style={{ backgroundColor: appBackgroundColor }}>
        <Header></Header>
        <div
          className="section-container"
          style={{
            transform: `scale(${sectionContainerScale})`,
          }}
        >
          <div className="main-container">
            <TitleSection></TitleSection>
            <AboutSection></AboutSection>
            <ProjectSection></ProjectSection>
          </div>
        </div>

        <ContactSection></ContactSection>
      </div>
    </>
  );
}

export default App;
