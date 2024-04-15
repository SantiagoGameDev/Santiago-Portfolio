import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i class="fa-solid fa-gamepad fa-2xl"></i>

        <div>
          <h3 className="about__title">Games Made</h3>
          <span className="about__subtitle">3</span>
        </div>
      </div>

      <div className="about__box">
      <i class="fa-solid fa-file-code fa-2xl"></i>

        <div>
          <h3 className="about__title">Lines of Code Written</h3>
          <span className="about__subtitle">6,294</span>
        </div>
      </div>

      <div className="about__box">
        <i class="fa-solid fa-bug fa-2xl"></i>

        <div>
          <h3 className="about__title">Bugs Squashed</h3>
          <span className="about__subtitle">96</span>
        </div>
      </div>

      <div className="about__box">
        <i class="fa-solid fa-code-commit fa-2xl"></i>

        <div>
          <h3 className="about__title">Commits Pushed</h3>
          <span className="about__subtitle">862</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
