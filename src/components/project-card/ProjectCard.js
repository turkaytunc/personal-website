import React from 'react';
import './project-card.scss';

export const ProjectCard = (props) => {
  return (
    <div className="projectcard-wrapper-div">
      <img
        src={`${process.env.PUBLIC_URL}/projects/${props.imgSource}`}
        alt={''}
      />
      <div className="projectcard-title-div">{props.title}</div>
      <h4>{props.tech}</h4>
    </div>
  );
};
