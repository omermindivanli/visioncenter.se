import React, { Component } from 'react';
import './Video.css';

class Video extends Component{
    render(){
        let video = {
            url: 'https://www.youtube.com/embed/FWeP_OjEq54'
        }
        return(
            <div className="container">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" 
                        width="1000" height="360" src={video.url} 
                        frameborder="0" gesture="media" 
                        allow="encrypted-media" allowFullScreen>
                    </iframe>
                </div>  
            </div>
        )
    }
}

export default Video;
