import React from 'react';

export const ProjectCard = (props) => {
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/projects/${props.imgSource}`}
        alt={''}
      />
      <h1>{props.title}</h1>
      <h4>{props.tech}</h4>
    </div>
  );
};
