import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCode, faLink } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = (props) => {
  const languageMapper = (l, i, arr) => (i === arr.length - 1 ? l : `${l}, `);
  return (
    <a className="project__link" href={props.code}>
      <article className="project">
        <span className="project__imageContainer">
          <img
            src={props.src ? require(`../images/projects/${props.src}`) : ""}
            alt={props.name}
            className="project__image"
          />
        </span>
        <span className="project__title-links">
          <span className="project__title">{props.name}</span>
          <span className="project__links">
            <span className="project__links">
              <a
                className="project__link project__link--code"
                href={props.code}
                target="_blank"
              >
                <FontAwesomeIcon icon={faCode} />
              </a>
              {props.live && (
                <a
                  className="project__link project__link--code"
                  href={props.live}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLink} />
                </a>
              )}
            </span>
          </span>
        </span>
        <span className="project__langs">
          {props.langs.map(languageMapper)}
        </span>
      </article>
    </a>
  );
};

export default ProjectCard;
