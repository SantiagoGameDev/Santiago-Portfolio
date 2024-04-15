import React from "react";
import "./home.css";
import Santiago from "../../assets/SantiagoProfile.png";
import { useState, useEffect } from "react";
import HeaderSocials from "./HeaderSocials";
import Scrolldown from "./Scrolldown";
import Shapes from "./Shapes";

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Game Developer ",
    "Programmer ",
    "Technical Artist ",
    "Web Developer ",
  ];
  const period = 1;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Santiago} alt="" className="home__img" />
        <h1 className="intro">Hi! I'm Santiago</h1>
        <h2>
          <span
            className="txt-rotate"
            dataPeriod="2000"
            data-rotate='[ "Game Developer", "Programmer", "Technical Artist", "Web Developer" ]'
          >
            <span className="wrap">{text}</span>
          </span>
        </h2>
        <HeaderSocials />
        <a href="#contact" className="btn">
          Love What I Do?
        </a>

        <Scrolldown />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;
