import React from 'react';
import './StudentHouse.css';
import Slider1 from '../../Assests/Slider1.jpg';
import Slider3 from '../../Assests/Slider3.jpg';
import Slider4 from '../../Assests/Slider4.jpg';
import stdboende from '../../Assests/stdboende.jpg';

const StudentHouse = () => (
  <div className="container">
    <h2 className="">Stödboende</h2>
    <img className="img-fluid container" src={stdboende} alt="Third slide" />

    <p className="text-right container">
      <strong>Kontakt: </strong> Dervis Dennis Aksay <br />
      Telefon: 0722900965
      <br />
      E-Post: <a href="mailto:sweden@visioncenter.se">sweden@visioncenter.se</a>
    </p>

    <div id="myCarousel" className="col-6 carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active" />
        <li data-target="#myCarousel" data-slide-to="1" />
        <li data-target="#myCarousel" data-slide-to="2" />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="img-fluid first-slide" src={Slider4} alt="First slide" />
          <div className="container" />
        </div>
        <div className="carousel-item">
          <img className="img-fluid second-slide" src={Slider1} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="img-fluid third-slide" src={Slider3} alt="Third slide" />
          <div className="container" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
);

export default StudentHouse;
