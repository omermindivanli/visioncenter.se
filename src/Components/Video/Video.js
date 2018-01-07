import React from 'react';
import './Video.css';

const video = {
  url: 'https://www.youtube.com/embed/FWeP_OjEq54',
};

const Video = () => (
  <div className="container">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        className="embed-responsive-item"
        width="1000"
        height="360"
        src={video.url}
        gesture="media"
        allow="encrypted-media"
        allowFullScreen
        title="Vision Center"
      />
    </div>
  </div>
);

export default Video;
