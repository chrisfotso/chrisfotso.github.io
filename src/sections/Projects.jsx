import React from 'react'
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <React.Fragment>
      <div className="projects__container">
      <br/>
      <section className="projects">
        { PROJECTS.map(proj => <ProjectCard {...proj} />)}
      </section>
    </div>
    </React.Fragment>
  )
}

export default Projects
