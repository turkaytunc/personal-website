import React from 'react';
import { ProjectCard } from '../project-card/ProjectCard';
import './projects.scss';

const Projects = () => {
  document.title = 'Projects';
  return (
    <div className="projects-wrapper-div">
      <ProjectCard
        title={'Markdown Previewer'}
        imgSource={'md-prev.png'}
        techs={['Sass', 'Regex', 'Reactjs', 'TravisCI', 'Bash', 'Jest']}
        githubLink={'https://github.com/turkaytunc/md-prev'}
        liveProject={'https://turkaytunc.github.io/md-prev/'}
      />
      <ProjectCard
        title={'Study Timer'}
        imgSource={'study-timer.png'}
        techs={['Sass', 'Jest', 'Reactjs', 'TravisCI', 'Codecov']}
        githubLink={'https://github.com/turkaytunc/study-timer'}
        liveProject={'https://turkaytunc.github.io/study-timer/'}
      />
      <ProjectCard
        title={'Random Quote Machine'}
        imgSource={'random-quote-machine.png'}
        techs={['Sass', 'Jest', 'Reactjs', 'TravisCI', 'Coveralls']}
        githubLink={'https://github.com/turkaytunc/random-quote-machine'}
        liveProject={'https://turkaytunc.github.io/random-quote-machine/'}
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
