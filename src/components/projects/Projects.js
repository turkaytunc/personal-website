import React from 'react';
import { ProjectCard } from '../project-card/ProjectCard';
import './projects.scss';

const Projects = () => {
  document.title = 'Projects';
  return (
    <div className="projects-wrapper-div">
      <ProjectCard
        title={'MD-Prev'}
        imgSource={'md-prev.png'}
        techs={['Sass', 'Regex', 'Reactjs', 'TravisCI', 'Bash', 'Jest']}
        githubLink={'https://github.com/turkaytunc/md-prev'}
      />
      <ProjectCard
        title={'Study-timer'}
        imgSource={'study-timer.png'}
        techs={['Sass', 'Jest', 'Reactjs', 'TravisCI', 'Codecov']}
        githubLink={'https://github.com/turkaytunc/study-timer'}
        liveProject={'https://turkaytunc.github.io/study-timer/'}
      />
      <ProjectCard
        title={'Chef'}
        imgSource={'food.jpg'}
        techs={['Reactjs', 'Axios', 'Sass']}
        githubLink={'https://github.com/turkaytunc/recipe-app'}
        liveProject={'https://turkaytunc.github.io/recipe-app/'}
      />
      <ProjectCard
        title={'Restful API'}
        imgSource={'rest.jpg'}
        techs={['MongoDB', 'Mongoose', 'Nodejs']}
        githubLink={'https://github.com/turkaytunc/rest-api-practice'}
      />
    </div>
  );
};

export default Projects;
