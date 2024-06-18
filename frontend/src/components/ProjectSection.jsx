import "../styles/ProjectSection.css";
import React, { useEffect, useState } from "react";
import Project from "./Project.jsx";
import useProjects from "../hooks/useProjects.jsx";

export default function ProjectSection({}) {
  const {
    weatherAPP,
    memoryCardAPP,
    battleship,
    calculator,
    knightApp,
    gameStore,
    ticTacToe,
    resume,
  } = useProjects();

  return (
    <>
      <div className="project-section-container">
        <div className="project-title section-title">Projects</div>

        <Project
          githubLink={weatherAPP.github}
          liveSiteLink={weatherAPP.liveSite}
          image={weatherAPP.image}
          title={weatherAPP.title}
          description={weatherAPP.description}
          indent={weatherAPP.indent}
          bannerScrollRatio={50}
          imageScrollRatio={0}
        ></Project>

        <Project
          githubLink={memoryCardAPP.github}
          liveSiteLink={memoryCardAPP.liveSite}
          image={memoryCardAPP.image}
          title={memoryCardAPP.title}
          description={memoryCardAPP.description}
          indent={memoryCardAPP.indent}
          bannerScrollRatio={-150}
          imageScrollRatio={-100}
        ></Project>

        <Project
          githubLink={resume.github}
          liveSiteLink={resume.liveSite}
          image={resume.image}
          title={resume.title}
          description={resume.description}
          indent={resume.indent}
          bannerScrollRatio={-350}
          imageScrollRatio={-200}
        ></Project>

        <Project
          githubLink={battleship.github}
          liveSiteLink={battleship.liveSite}
          image={battleship.image}
          title={battleship.title}
          description={battleship.description}
          indent={battleship.indent}
          bannerScrollRatio={-550}
          imageScrollRatio={-270}
        ></Project>

        <Project
          githubLink={knightApp.github}
          liveSiteLink={knightApp.liveSite}
          image={knightApp.image}
          title={knightApp.title}
          description={knightApp.description}
          indent={knightApp.indent}
          bannerScrollRatio={-800}
          imageScrollRatio={-370}
        ></Project>

        {/* <Project
          githubLink={ticTacToe.github}
          liveSiteLink={ticTacToe.liveSite}
          image={ticTacToe.image}
          title={ticTacToe.title}
          description={ticTacToe.description}
          indent={ticTacToe.indent}
          scrollRatio={-800}
        ></Project>

        <Project
          githubLink={calculator.github}
          liveSiteLink={calculator.liveSite}
          image={calculator.image}
          title={calculator.title}
          description={calculator.description}
          indent={calculator.indent}
          scrollRatio={-1000}
        ></Project> */}
      </div>
    </>
  );
}
