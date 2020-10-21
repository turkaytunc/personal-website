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
        techs={['mongo', 'nodejs', 'express']}
      />
      <ProjectCard
        title={'Hello'}
        imgSource={'rest.jpg'}
        techs={['mongo', 'nodejsdfsfsdfsd', 'express']}
      />
      <ProjectCard
        title={'Hello'}
        imgSource={'food.jpg'}
        techs={['mongo', 'nodejs', 'express']}
      />
    </div>
  );
};

export default Projects;
