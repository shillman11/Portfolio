import { useState } from "react";
import "./styles/App.css";
import TitleSection from "./components/TitleSection.jsx";
import Header from "./components/Header.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import ContactSection from "./components/ContactSection.jsx";

function App() {
  return (
    <>
      <div className="App">
        <div className="main-container">
          <Header></Header>
          <TitleSection></TitleSection>
          <AboutSection></AboutSection>
          <ProjectSection></ProjectSection>
        </div>
        <ContactSection></ContactSection>
      </div>
    </>
  );
}

export default App;
