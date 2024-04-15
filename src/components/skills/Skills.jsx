import React from "react";
import "./skills.css";
import Image1 from "..//..//assets//Engine.svg";
import Image2 from "..//..//assets//Programming.svg";
import Image3 from "..//..//assets//Model.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Engine",
    description:
      "Deep understanding of Unity and most aspects regarding game creation, from Shader Graph, lighting to set dressing and prefab workflow",
  },
  {
    id: 2,
    image: Image2,
    title: "Programming",
    description:
      "Well versed in both C# and C++ as well as HLSL. Currently also learning Web Development languages in my free time such as HTML, CSS, Node.js",
  },
  {
    id: 3,
    image: Image3,
    title: "Modelling",
    description:
      "Very experienced with 3D modelling .",
  },
];

const skills = () => {
  return (
    <section className="skills container section" id="skills">
      <h2 className="section__title">Skills</h2>
      <div className="skills__container grid">
        {data.map(({ id, image, title, description }) => {
          return(
            <div className="skills__card" key={id}>
              <img src={image} alt="" className="skills__img" />

              <h3 className="skills__title">{title}</h3>
              <p className="skills__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default skills;
