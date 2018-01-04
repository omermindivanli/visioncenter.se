import React, { Component } from 'react';
import './Video.css';

class Video extends Component{
    render(){
        return(
            <div className="container">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" width="1000" height="360" src="https://www.youtube.com/embed/FWeP_OjEq54" frameborder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
                </div>  
            </div>
        )
    }
}

export default Video;
