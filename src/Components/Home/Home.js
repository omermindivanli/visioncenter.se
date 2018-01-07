import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo_visionCenter.jpg';

import room_visionCenter from '../../images/room_visionCenter.jpg';
import room_info_visionCenter from '../../images/room_info_visionCenter.jpg';

import './Home.css';

const Home = () => (
  <div className="Home">
    <nav className="navbar navbar-toggleable-md navbar-light bg-light">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <a className="navbar-brand" href="http://visioncenter.se">
        <img alt="Vision Center" src={logo} />
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <Link className="nav-link dropdown active" to="/">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              OM OSS
            </a>
            <ul className="nav-item dropdown-menu">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  GRUNDAREN
                </a>
              </li>
              <li>
                <a className="nav-link active" href="#">
                  HISTORIA
                </a>
              </li>
              <li>
                <a className="nav-link active" href="#">
                  STADGAR
                </a>
              </li>
              <li>
                <a className="nav-link active" href="#">
                  BLI MEDLEM
                </a>
              </li>
              <li>
                <a className="nav-link active" href="#">
                  IDEELL ARBETE
                </a>
              </li>
              <li>
                <a className="nav-link active" href="#">
                  STYRELSE
                </a>
              </li>
            </ul>
          </Link>
          <Link className="nav-link active" to="/stödboende">
            <a className="nav-link" href="#">
              STÖDBOENDE
            </a>
          </Link>
          <Link className="nav-link dropdown active" to="/verksamheter">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              VERKSAMHETER
            </a>
            <ul className="nav-item dropdown-menu">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  AKTIVITETER
                </a>
              </li>
              <li>
                <a className="nav-link active" href="#">
                  MILJÖ ARBETE
                </a>
              </li>
              <li>
                <a className="nav-link active" href="#">
                  FILM
                </a>
              </li>
            </ul>
          </Link>
          <Link className="nav-link active" to="/sponsorer">
            <a className="nav-link" href="#">
              SPONSORER
            </a>
          </Link>
          <Link className="nav-link active" to="/kontakt">
            <a className="nav-link" href="#">
              KONTAKT
            </a>
          </Link>
        </ul>
      </div>
    </nav>

    {/* Footer Constant for Home Page */}

    <div id="carouselExampleIndicators" className="container carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img
            className="d-block img-fluid"
            src={'https://mitti.se/images/889891-1200x630.jpeg'}
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img className="d-block img-fluid" src={room_visionCenter} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block img-fluid" src={room_info_visionCenter} alt="Third slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>

    {/* Footer Constant for Home Page */}
    <div className="container main">
      <hr className="featurette-divider" />
      <h2 className="text-center">Vårt Motto Är</h2>
      <div className="row">
        <div className="col-lg-4">
          <img
            className="rounded-circle"
            src="http://www.arvsfonden.se/sites/default/files/project_updates/10991/Hillevi%20Engstr%C3%B6m.jpg"
            width="200"
            height="200"
            alt=""
          />
          <h3>Ärligheten</h3>
          <p>
            Ärligheten innebär att en medlem inte begår brott, att medlemmen ständigt är ärlig mot
            sig själv och andra samt hela tiden följer gällande lag och uppträder som ett föredöme
            för andra.
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details &raquo;
            </a>
          </p>
        </div>
        <div className="col-lg-4">
          <img
            className="rounded-circle"
            src="http://3.bp.blogspot.com/_buSfLYmEHSw/THLLru2Aq5I/AAAAAAAAASw/hYWzung75Mc/s1600/x-cons.ny.jpg"
            width="200"
            height="200"
            alt=""
          />
          <h3>Gemenskap</h3>
          <p>
            Gemenskap innebär att en medlem engagerar sig i sina medmänniskors välbefinnande och att
            medlemmen respekterar andra människors rätt till en egen uppfattning.
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details &raquo;
            </a>
          </p>
        </div>
        <div className="col-lg-4">
          <img
            className="rounded-circle"
            src="http://x-cons.se/wp-content/uploads/20150701_1114401.jpg"
            alt="Generic placeholder image"
            width="200"
            height="200"
          />
          <h3>Framtid</h3>
          <p>
            Framtid innebär att en medlem finns tillgänglig för sina medmänniskor, hjälper till i
            föreningens aktiviteter och på annat sätt verkar för föreningens syften.
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details &raquo;
            </a>
          </p>
        </div>
      </div>
    </div>

    {/* Footer Constant for Home Page */}
    <section className="container">
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            Vad Vision Center är... <span className="text-muted"> För Alla</span>
          </h2>
          <p className="lead">
            Vision Center riktar sig i första hand till ungdomar som riskerar att hamna i ett
            destruktivt liv men vi vänder oss också till kriminella och missbrukare som bestämt sig
            för att starta ett nytt ärligt och drogfritt liv.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="featurette-image img-fluid mx-auto"
            src="http://x-conshaninge.se/x/wp-content/uploads/2017/04/fritids.jpg"
            data-src="holder.js/500x500/auto"
            alt="Generic placeholder image"
          />
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7 push-md-5">
          <h2 className="featurette-heading">
            Vision Center arbetar i brottsförebyggande syfte.{' '}
            <span className="text-muted">Bli Vänner...</span>
          </h2>
          <p className="lead">
            Vi kämpar för att vara en god resurs för ungdomar och deras föräldrar. Vi SER ungdomarna
            som kommer till vår verksamhet eller våra aktiviteter. Respekten måste vara ömsesidig
            för att få ungdomarnas förtroende.
          </p>
        </div>
        <div className="col-md-5 pull-md-7">
          <img
            className="featurette-image img-fluid mx-auto"
            src="https://haninge.sd.se/wp-content/uploads/sites/41/2014/08/Xcon.jpg"
            data-src="holder.js/500x500/auto"
            alt="Generic placeholder image"
          />
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            Vision Centers grundare och eldsjäl. <span className="text-muted"> Hej...</span>
          </h2>
          <p className="lead">
            Vi har uppsökande verksamhet på anstalter, behandlingshem m.m. där vi ger föreläsningar
            om missbrukets baksidor samt ger information om den hjälp vi kan ge för att de ska kunna
            bygga upp ett nytt liv utan droger och kriminalitet. Vårt mål är att kunna motivera de
            intagna till att livet är för värdefullt för att slängas bort. Vi är en av många
            organisationer som kan hjälpa dem till att få styrkan att leva enligt samhällets normer
            och även känna att de trivs där.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="featurette-image img-fluid mx-auto"
            src="https://mitti.se/images/849975-1200x630.jpeg"
            data-src="holder.js/500x500/auto"
            alt="Generic placeholder image"
          />
        </div>
      </div>
      <hr className="featurette-divider" />
    </section>

    {/* Footer Constant for Home Page */}
    <footer className="container">
      <p className="float-right">
        <a href="#">Back to top</a>
      </p>
      <p>
        &copy; Copyright 2018 <a href="http://omermindivanli.com">omermindivanli.com</a> &middot;
        Privacy &middot; <a href="#">Terms</a>
      </p>
    </footer>

    {/* Footer Constant for Home Page */}
  </div>
);

export default Home;
