import React from 'react';
import './project-card.scss';

export const ProjectCard = (props) => {
  return (
    <div className="projectcard-wrapper-div">
      <img
        src={`${process.env.PUBLIC_URL}/projects/${props.imgSource}`}
        alt={''}
      />
      <h1>{props.title}</h1>
      <h4>{props.tech}</h4>
    </div>
  );
};
