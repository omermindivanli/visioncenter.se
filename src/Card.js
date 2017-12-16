import React from 'react';
import ReactDOM from 'react-dom';
import './Card.css';

// ana girisi kısalt

const Card = () => (
    <section className="container">
    <hr class="featurette-divider"></hr>
    
    <div className="row featurette">
    <div className="col-md-7">
        <h2 className="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
    </div>
    <div className="col-md-5">
        <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
    </div>
    </div>

    <hr className="featurette-divider"></hr>

    <div className="row featurette">
    <div className="col-md-7 push-md-5">
        <h2 className="featurette-heading">Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
    </div>
    <div className="col-md-5 pull-md-7">
        <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
    </div>
    </div>

    <hr className="featurette-divider"></hr>

    <div className="row featurette">
    <div className="col-md-7">
        <h2 className="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
    </div>
    <div className="col-md-5">
        <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
    </div>
    </div>
    
    <hr className="featurette-divider"></hr>
    </section>
);

export default Card;


    