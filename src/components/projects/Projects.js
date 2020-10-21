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
        techs={['Sass', 'Jest', 'Reactjs', 'TravisCI', 'Coveralls', 'fetchAPI']}
        githubLink={'https://github.com/turkaytunc/random-quote-machine'}
        liveProject={'https://turkaytunc.github.io/random-quote-machine/'}
      />

      <ProjectCard
        title={'Digital Clock'}
        imgSource={'digital-clock.png'}
        techs={['Sass', 'Jest', 'TravisCI', 'Coveralls', 'fetchAPI']}
        githubLink={'https://github.com/turkaytunc/digital-clock'}
        liveProject={'https://turkaytunc.github.io/digital-clock/'}
      />
      <ProjectCard
        title={'First Person Character Controller'}
        imgSource={'fps-controller.png'}
        techs={['C#', 'Unity', 'GLSL']}
        githubLink={'https://github.com/turkaytunc/3D-character-controller'}
      />

      <ProjectCard
        title={'Password Generator'}
        imgSource={'password-generator.png'}
        techs={['Reactjs', 'Jest', 'Sass', 'Hooks']}
        githubLink={'https://github.com/turkaytunc/pass-gen'}
        liveProject={'https://turkaytunc.github.io/pass-gen/'}
      />

      <ProjectCard
        title={'Space Shooter'}
        imgSource={'space-shooter.png'}
        techs={['GIMP', 'Aseprite', 'Unity', 'C#', 'GLSL']}
        githubLink={'https://github.com/turkaytunc/Racon'}
        liveProject={'https://turkaytunc.itch.io/racon'}
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
      <ProjectCard
        title={'Random Color Generator'}
        imgSource={'random-color-generator.png'}
        techs={['Reactjs', 'Css']}
        githubLink={'https://github.com/turkaytunc/random-color-generator'}
        liveProject={'https://turkaytunc.github.io/random-color-generator/'}
      />
    </div>
  );
};

export default Projects;
