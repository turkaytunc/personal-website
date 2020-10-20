import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer-main-wrap">
      <div className="footer-div-1">
        <ul>
          <li>
            <a
              className="footer-div-1-a"
              href="https://github.com/turkaytunc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/footer/github-icon-white.png`}
                alt="github-img"
              />
              <p>GitHub</p>
            </a>
          </li>
          <li>
            <a
              className="footer-div-1-a"
              href="https://www.linkedin.com/in/t%C3%BCrkay-tun%C3%A7-674353177/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/footer/linkedin.png`}
                alt="linkedin-img"
              />
              <p>LinkedIn</p>
            </a>
          </li>
          <li>
            <a
              className="footer-div-1-a"
              href="https://www.youtube.com/channel/UChkxm4Q14X0NdGFvZOm1hMQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/footer/youtube.png`}
                alt="youtube-img"
              />
              <p>YouTube</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-div-2">
        <ul>
          <li>
            <a
              className="footer-div-2-a"
              href="https://www.instagram.com/filthycoder/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/footer/instagramlogo.png`}
                alt="instagram-img"
              />
              <p>Instagram</p>
            </a>
          </li>
          <li>
            <a
              className="footer-div-2-a"
              href="https://twitter.com/filthycoder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/footer/twitterlogo.jpg`}
                alt="twitter-img"
              />
              <p>Twitter</p>
            </a>
          </li>
          <li>
            <a
              className="footer-div-2-a"
              href="https://turkaytunc.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/footer/itchiologo.png`}
                alt="itchio-img"
              />
              <p>Itch.io</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-div-3">
        <p className="footer-div-3-p">Copyright &copy; 2020 Türkay Tunç</p>
      </div>
    </div>
  );
};

export default Footer;
