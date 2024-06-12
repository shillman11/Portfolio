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
          scrollRatio={50}
        ></Project>

        <Project
          githubLink={memoryCardAPP.github}
          liveSiteLink={memoryCardAPP.liveSite}
          image={memoryCardAPP.image}
          title={memoryCardAPP.title}
          description={memoryCardAPP.description}
          indent={memoryCardAPP.indent}
          scrollRatio={-150}
        ></Project>

        <Project
          githubLink={battleship.github}
          liveSiteLink={battleship.liveSite}
          image={battleship.image}
          title={battleship.title}
          description={battleship.description}
          indent={battleship.indent}
          scrollRatio={-350}
        ></Project>

        <Project
          githubLink={knightApp.github}
          liveSiteLink={knightApp.liveSite}
          image={knightApp.image}
          title={knightApp.title}
          description={knightApp.description}
          indent={knightApp.indent}
          scrollRatio={-550}
        ></Project>

        <Project
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
        ></Project>
      </div>
    </>
  );
}
