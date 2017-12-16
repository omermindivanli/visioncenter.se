import React from 'react';
import ReactDOM from 'react-dom';
import './Video.css';

const Video = () => (
    <div className="container">
        <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" width="1000" height="360" src="https://www.youtube.com/embed/FWeP_OjEq54" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
        </div>
    </div>
);

export default Video;
