import React from 'react';
import './contact.scss';

const Contact = () => {
  document.title = 'Contact';
  return (
    <div className="contact-wrapper-div">
      <h3
        className="contact-h3"
        style={{ display: `flex`, alignItems: `center`, marginLeft: `2rem` }}
      >
        <img src={`${process.env.PUBLIC_URL}/mail.png`} alt="mail"></img>
        <a
          style={{
            textDecoration: 'none',
            color: '#1840c4',
            marginTop: '0',
          }}
          href="mailto:turkaytunc00@gmail.com"
        >
          turkaytunc00@gmail.com
        </a>
      </h3>
      <h3
        className="contact-h3"
        style={{ display: `flex`, alignItems: `center`, marginLeft: `2rem` }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/footer/linkedin.png`}
          alt="linkedin"
        ></img>
        <a
          style={{
            textDecoration: 'none',
            color: '#1840c4',
            marginTop: '0',
          }}
          href="https://www.linkedin.com/in/turkaytunc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </h3>
    </div>
  );
};

export default Contact;
