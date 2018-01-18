import React from 'react';
import './SocialMedia.css';

const SocialMedia = () => (
  <div className="container text-center">
    <div className="socialMedia">
      <ul className="list-group">
        <a
          href="https://www.facebook.com/xcons.haninge/"
          className="btn btn-social-icon btn-facebook"
        >
          <span className="fa fa-facebook fa-3x" />
        </a>
        <a href="" className="btn btn-social-icon btn-twitter">
          <span className="fa fa-twitter fa-3x" />
        </a>
        <a
          href="https://www.linkedin.com/in/dervis-dennis-aksay-26520647/"
          className="btn btn-social-icon btn-linkedin"
        >
          <span className="fa fa-linkedin fa-3x" />
        </a>
        <a
          href="https://www.instagram.com/xcons_haninge/"
          className="btn btn-social-icon btn-instagram"
        >
          <span className="fa fa-instagram fa-3x" />
        </a>
      </ul>
    </div>
  </div>
);

export default SocialMedia;
