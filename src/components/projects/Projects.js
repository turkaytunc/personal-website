import React from 'react';
import { ProjectCard } from '../project-card/ProjectCard';
import './projects.scss';

const Projects = () => {
  document.title = 'Projects';
  return (
    <div className="projects-wrapper-div">
      <ProjectCard
        title={'Hello'}
        imgSource={'food.jpg'}
        tech={'mongo nodejs express'}
      />
      <ProjectCard
        title={'Hello'}
        imgSource={'rest.jpg'}
        tech={'mongo nodejs express'}
      />
      <ProjectCard
        title={'Hello'}
        imgSource={'food.jpg'}
        tech={'mongo nodejs express'}
      />
    </div>
  );
};

export default Projects;
