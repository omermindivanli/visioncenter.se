import React from 'react';
import './SocialMedia.css';

const SocialMedia = () => (
  <div className="container text-center">
    <div className="socialMedia">
      <ul className="list-group">
        <a href="https://www.facebook.com/xcons.haninge/" class="btn btn-social-icon btn-facebook">
          <span class="fa fa-facebook fa-3x" />
        </a>
        <a href="" class="btn btn-social-icon btn-twitter">
          <span class="fa fa-twitter fa-3x" />
        </a>
        <a
          href="https://www.linkedin.com/in/dervis-dennis-aksay-26520647/"
          class="btn btn-social-icon btn-linkedin"
        >
          <span class="fa fa-linkedin fa-3x" />
        </a>
        <a
          href="https://www.instagram.com/xcons_haninge/"
          class="btn btn-social-icon btn-instagram"
        >
          <span class="fa fa-instagram fa-3x" />
        </a>
      </ul>
    </div>
  </div>
);

export default SocialMedia;
