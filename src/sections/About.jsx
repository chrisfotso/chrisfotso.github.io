import React from "react";
import Skills from "../components/skills/Skills";
import CategoryPicker from '../components/skills/CategoryPicker'

const About = () => {
  return (
    <div className="about__container">
      <section className="about">
        <div className="about__text">
          <div className="about__text--justify">
            I'm a software developer with over{" "}
            <strong>one year of professional experience</strong> in various{" "}
            <strong>front end and back end technologies</strong>. I'm{" "}
            <strong>most comfortable with JavaScript</strong> and its related
            technologies, but I consider myself a <strong>fast learner</strong>.
            If I need to use a technology I don't know yet, I'll{" "}
            <strong>rise to the occasion</strong> and learn it quickly. In my
            free time I enjoy lifting weights, playing video games, and
            listening to music.
          </div>
        </div>
        <br/>
        <hr/>
        <div className="about__picker">
          <CategoryPicker />
        </div>
        <Skills />
      </section>
    </div>
  );
};

export default About;
