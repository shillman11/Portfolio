import "../styles/Project.css";
import ARROWICON from "../assets/icons/arrow-bottom-left.svg";
import React, { useEffect, useState } from "react";
import useScrollWheel from "../hooks/useScrollWheel";

export default function Project({
  githubLink,
  liveSiteLink,
  image,
  title,
  description,
  indent,
  bannerOffset,
}) {
  const scrollY = useScrollWheel();

  return (
    <>
      <div className="projects-container">
        <div className="title-divider"></div>

        <div className="project">
          <div className="project-container">
            <div className="project-preview">
              <div className="project-border"></div>
              <img
                src={image}
                alt=""
                className="project-image weather-image"
                id="weather"
              />
            </div>
            <div
              className="project-content-wrapper"
              style={{
                bottom: `calc(-${bannerOffset}px + (17vw * 3))`,
                transform: `translateY(-${scrollY.scrollY * 0.3}px)`,
              }}
            >
              <div className="project-content-title">{title}</div>
              <div className="project-content-container">
                <div className="project-content">
                  {description}
                  <p className="project-content indent">{indent}</p>
                </div>
                <div className="project-button-container">
                  <a
                    href={githubLink}
                    target="_blank"
                    className="project-link-container"
                  >
                    <span className="project-button-github">
                      <div className="button-text">Github</div>
                      <div className="button-text">Github</div>
                    </span>
                    <img className="arrow-image" src={ARROWICON} alt="" />
                  </a>

                  <a
                    href={liveSiteLink}
                    target="_blank"
                    className="project-link-container"
                  >
                    <span className="project-button-liveSite">
                      <div className="button-text">Live Site</div>
                      <div className="button-text">Live Site</div>
                    </span>
                    <img className="arrow-image" src={ARROWICON} alt="" />
                  </a>
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
