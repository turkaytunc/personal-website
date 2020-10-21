import React from 'react';
import './tech-used.scss';
export const TechUsed = (props) => {
  const items = props.techs.map((item, i) => <li key={i}>{item}</li>);
  return (
    <>
      <ul className="techused-ul">{items}</ul>
    </>
  );
};
