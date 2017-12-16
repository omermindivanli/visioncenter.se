import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const App = () => (
    <nav>
      <div className="navbar navbar-toggleable-md navbar-light bg-light">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="http://visioncenter.se">
          <img alt="Vision Center" src="./fav.png" />
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown active">
              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">OM OSS</a>
              <ul className="nav-item dropdown-menu">
                <li className="nav-item active"><a class="nav-link" href="#">GRUNDAREN</a></li>
                <li><a className="nav-link active" href="#">HISTORIA</a></li>
                <li><a className="nav-link active" href="#">STADGAR</a></li>
                <li><a className="nav-link active" href="#">BLI MEDLEM</a></li>
                <li><a className="nav-link active" href="#">IDEELL ARBETE</a></li>
                <li><a className="nav-link active" href="#">STYRELSE</a></li>
              </ul>
            </li>  
            <li className="nav-item active">
              <a className="nav-link" href="#">STÖDBOENDE</a>
            </li> 
            <li className="nav-item dropdown active">
              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">VERKSAMHETER</a>
              <ul className="nav-item dropdown-menu">
                <li className="nav-item active"><a class="nav-link" href="#">AKTIVITETER</a></li>
                <li><a className="nav-link active" href="#">MILJÖ ARBETE</a></li>
                <li><a className="nav-link active" href="#">FILM</a></li>
              </ul>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">SPONSORER</a>
            </li> 
            <li className="nav-item active">
              <a className="nav-link" href="#">KONTAKT</a>
            </li>
          </ul> 
        </div>
      </div>
    </nav>      
);

export default App;
