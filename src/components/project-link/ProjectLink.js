import React from 'react';
import './project-link.scss';

export const ProjectLink = (props) => {
  const liveP = () => (
    <a href={`${props.liveProject}`} target="_blank" rel="noopener noreferrer">
      Go to project
    </a>
  );
  return (
    <div className="project-link-wrapper">
      <a href={`${props.githubLink}`} target="_blank" rel="noopener noreferrer">
        See code on github
      </a>
      {props.liveProject ? liveP() : null}
    </div>
  );
};
