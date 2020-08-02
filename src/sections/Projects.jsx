import React from 'react'
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div className="projects__container">
      <section className="projects">
        { PROJECTS.map(proj => <ProjectCard {...proj} />)}
      </section>
    </div>
  )
}

export default Projects
