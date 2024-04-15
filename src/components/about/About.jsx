import React from "react";
import "./about.css";
import Image from "../../assets/ProgrammerIcon.png";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me!</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img"></img>

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Welcome to my portfolio! I'm a game developer with a passion for
              blending programming and art. As a technical artist and
              programmer, I bring worlds to life through code and visuals."
            </p>
            <a href="" className="btn">
              {" "}
              Download Resume
            </a>
          </div>
          <div className="about__skills grid">
            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__name">Unity Engine</h3>
                <span className="skills_number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage unity"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__name">C# Programming</h3>
                <span className="skills_number">85%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage programming"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__name">3D Modelling</h3>
                <span className="skills_number">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage modelling"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
