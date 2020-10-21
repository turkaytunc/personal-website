import React from 'react';
import { ProjectLink } from '../project-link/ProjectLink';
import { TechUsed } from '../tech-used/TechUsed';
import './project-card.scss';

export const ProjectCard = (props) => {
  return (
    <div className="projectcard-wrapper-div">
      <img
        src={`${process.env.PUBLIC_URL}/projects/${props.imgSource}`}
        alt={''}
      />
      <div className="projectcard-title-div">{props.title}</div>
      <TechUsed techs={props.techs} />
      <ProjectLink
        githubLink={props.githubLink}
        liveProject={props.liveProject}
      />
    </div>
  );
};
