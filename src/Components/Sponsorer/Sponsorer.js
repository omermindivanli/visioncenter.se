import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo_visionCenter.jpg';

const Sponsorer = () => (
  <div>
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
    <footer className="container">
      <p className="float-right">
        <a href="#">Back to top</a>
      </p>
      <p>
        &copy; Copyright 2018 <a href="http://omermindivanli.com">omermindivanli.com</a> &middot;
        Privacy &middot; <a href="#">Terms</a>
      </p>
    </footer>
  </div>
);

export default Sponsorer;
