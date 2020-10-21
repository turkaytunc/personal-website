import React from 'react';
import { ProjectCard } from '../project-card/ProjectCard';
import './projects.scss';

const Projects = () => {
  document.title = 'Projects';
  return (
    <div className="projects-wrapper-div">
      <ProjectCard title={'Hello'}></ProjectCard>
    </div>
  );
};

export default Projects;
