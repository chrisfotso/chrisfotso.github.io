import React, { useState, useEffect, useContext } from "react";
import { SKILLS } from "../data";
import { CategoryContext } from "../context/Category";
import { library } from "@fortawesome/fontawesome-svg-core";

const Skills = () => {
  const [category, setCategory] = useContext(CategoryContext);
  const [skills, setSkills] = useState(SKILLS[category]);

  useEffect(() => {
    setSkills(SKILLS[category]);
  }, [category]);

  const selectCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="about__skills">
      <ul className="skills">
        {skills.map((skill) => (
          <li className="skill">
            <a href={skill.link} target="_blank">
              <img
                alt={skill.name}
                className="skill__image"
                src={skill.src}
              ></img>
            </a>
            <p className="skill__label">{skill.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
