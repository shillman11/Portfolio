import "../styles/ProjectSection.css";
import WEATHERAPPIMAGE from "../assets/icons/weatherapp-image.jpg";
import ARROWICON from "../assets/icons/arrow-bottom-left.svg";
import React, { useEffect, useState } from "react";
import useScrollWheel from "../hooks/useScrollWheel";

export default function ProjectSection() {
  const scrollY = useScrollWheel();

  return (
    <>
      {console.log(scrollY.scrollY)}
      <div className="projects-container">
        <div className="project-title section-title">Projects</div>
        <div className="title-divider"></div>

        <div className="project">
          <div className="project-container">
            <div className="project-preview">
              <div className="project-border"></div>
              <img
                src={WEATHERAPPIMAGE}
                alt=""
                className="project-image weather-image"
                id="weather"
              />
            </div>
            <div
              className="project-content-wrapper"
              style={{ transform: `translateY(-${scrollY.scrollY * 0.3}px)` }}
            >
              <div className="project-content-title">Weather App</div>
              <div className="project-content-container">
                <div className="project-content">
                  This weather app shows you the current weather data as well as
                  the 3 day forecast or hourly forecast with the ability to
                  search for the weather in any city or area.
                  <p className="project-content indent">
                    Built using weather API
                  </p>
                </div>
                <div className="project-button-container">
                  <span className="project-button">Github</span>
                  <img className="arrow-image" src={ARROWICON} alt="" />
                  <span className="project-button">Live Site</span>
                  <img className="arrow-image" src={ARROWICON} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="title-divider"></div>
        </div>
      </div>
    </>
  );
}
