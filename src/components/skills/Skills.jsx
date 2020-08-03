import React, { useState, useEffect, useContext } from "react";
import { SKILLS } from "../../constants";
import { CategoryContext } from "../../context/Category";
import Skill from "./Skill";

const Skills = () => {
  const [category, setCategory] = useContext(CategoryContext);
  const [skills, setSkills] = useState(SKILLS[category]);

  useEffect(() => {
    setSkills(SKILLS[category]);
  }, [category]);

  return (
    <div className="about__skills">
      <ul className="skills">
        {skills.map((skill) => (
          <Skill {...skill} />
        ))}
      </ul>
    </div>
  );
};

export default Skills;
