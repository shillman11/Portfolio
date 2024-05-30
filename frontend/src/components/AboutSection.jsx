import "../styles/AboutSection.css";
import AWSLOGO from "../assets/icons/aws-logo.svg";
import CSSLOGO from "../assets/icons/css-logo.svg";
import EXPRESSLOGO from "../assets/icons/express-logo.svg";
import GITLOGO from "../assets/icons/git-logo.svg";
import HTMLLOGO from "../assets/icons/html-logo.svg";
import JESTLOGO from "../assets/icons/jest-logo.svg";
import JSLOGO from "../assets/icons/js-logo.svg";
import MONGODBLOGO from "../assets/icons/mongodb-logo.svg";
import NODELOGO from "../assets/icons/nodejs-logo.svg";
import NPMLOGO from "../assets/icons/npm-logo.svg";
import REACTLOGO from "../assets/icons/react-logo.svg";
import SQLLOGO from "../assets/icons/sql-logo.svg";
import VITELOGO from "../assets/icons/vite-logo.svg";
import WEBPACKLOGO from "../assets/icons/webpack-logo.svg";

export default function AboutSection() {
  return (
    <>
      <div className="about-container">
        <div className="about-title">About</div>
        <div className="about-content">
          <p>
            Hi there! My name is Barnett, but you can call me Barney. I'm a full
            stack developer (as you might have guessed from the title).
          </p>
          <p>
            Growing up, I always had an attraction to everything tech-related. I
            built my first computer when I was a young kid, hacked my school's
            computer by bypassing the firewall to play games, modded gaming
            consoles, and programmed robots to complete mazes. All these
            experiences helped me develop my problem-solving skills and shaped
            me into the engineer I am today.
          </p>
          <p>
            Currently, I'm interested in applying my problem-solving skills from
            being an Electrical Engineer to becoming a full stack developer. I
            enjoy creating new user experiences, tackling challenging data
            analysis, designing efficient logic, and handling servers.
          </p>
          <div className="cards-container">
            <div className="card-container">
              <img src={HTMLLOGO} alt="html logo" className="card-logo" />
              <div className="card-title">HTML</div>
            </div>
            <div className="card-container">
              <img src={CSSLOGO} alt="" className="card-logo" />
              <div className="card-title">CSS</div>
            </div>
            <div className="card-container">
              <img src={JSLOGO} alt="" className="card-logo" />
              <div className="card-title">Javascript</div>
            </div>
            <div className="card-container">
              <img src={REACTLOGO} alt="" className="card-logo" />
              <div className="card-title">React</div>
            </div>
            <div className="card-container">
              <img src={AWSLOGO} alt="" className="card-logo" />
              <div className="card-title">AWS</div>
            </div>
            <div className="card-container">
              <img src={VITELOGO} alt="" className="card-logo" />
              <div className="card-title">Vite</div>
            </div>
            <div className="card-container">
              <img src={NODELOGO} alt="" className="card-logo" />
              <div className="card-title">NodeJS</div>
            </div>
            <div className="card-container">
              <img src={SQLLOGO} alt="" className="card-logo" />
              <div className="card-title">SQL</div>
            </div>
            <div className="card-container">
              <img src={EXPRESSLOGO} alt="" className="card-logo" />
              <div className="card-title">Express</div>
            </div>
            <div className="card-container">
              <img src={GITLOGO} alt="" className="card-logo" />
              <div className="card-title">Git</div>
            </div>
            <div className="card-container">
              <img src={MONGODBLOGO} alt="" className="card-logo" />
              <div className="card-title">MongoDB</div>
            </div>
            <div className="card-container">
              <img src={NPMLOGO} alt="" className="card-logo" />
              <div className="card-title">NPM</div>
            </div>
            <div className="card-container">
              <img src={WEBPACKLOGO} alt="" className="card-logo" />
              <div className="card-title">Webpack</div>
            </div>
            <div className="card-container">
              <img src={JESTLOGO} alt="" className="card-logo" />
              <div className="card-title">Jest</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
