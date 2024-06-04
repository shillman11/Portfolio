import "../styles/ProjectSection.css";
import React, { useEffect, useState } from "react";
import Project from "./Project.jsx";
import useProjects from "../hooks/useProjects.jsx";

export default function ProjectSection({}) {
  const { weatherAPP } = useProjects();

  return (
    <>
      <div className="project-section-container">
        <Project
          githubLink={weatherAPP.github}
          liveSiteLink={weatherAPP.liveSite}
          image={weatherAPP.image}
          title={weatherAPP.title}
          description={weatherAPP.description}
          indent={weatherAPP.indent}
          bannerOffset={0}
        ></Project>
      </div>
    </>
  );
}
