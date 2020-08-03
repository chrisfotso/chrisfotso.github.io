import React from "react";

const Skill = (props) => {
  return (
    <li className="skill">
      <a href={props.link} target="_blank">
        <img alt={props.name} className="skill__image" src={props.src}></img>
      </a>
      <p className="skill__label">{props.name}</p>
    </li>
  );
};

export default Skill;
