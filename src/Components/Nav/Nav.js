import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '../../Assests/logo_visionCenter.jpg';

const Nav = () => (
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

    <a className="navbar-brand">
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
            <Link className="nav-item active" to="/grundaren">
              <a className="nav-link">GRUNDAREN</a>
            </Link>
            <Link className="nav-item active" to="/historia">
              <a className="nav-link active">HISTORIA</a>
            </Link>
            <Link className="nav-item active" to="/omvisioncenter">
              <a className="nav-link">OM VISION CENTER</a>
            </Link>
            <Link className="nav-item active" to="/stadgar">
              <a className="nav-link active">STADGAR</a>
            </Link>
            <Link className="nav-item active" to="/blimedlem">
              <a className="nav-link active">BLI MEDLEM</a>
            </Link>
            <Link className="nav-item active" to="/ideellarbete">
              <a className="nav-link active">IDEELL ARBETE</a>
            </Link>
            <Link className="nav-item active" to="/styrelse">
              <a className="nav-link active">STYRELSE</a>
            </Link>
          </ul>
        </Link>
        <Link className="nav-link active" to="/stödboende">
          <a className="nav-link">STÖDBOENDE</a>
        </Link>
        <Link className="nav-link dropdown active" to="/verksamheter">
          <a
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            VERKSAMHETER
          </a>
          <ul className="nav-item dropdown-menu">
            <Link className="nav-item active" to="/aktiviteter">
              <a className="nav-link">AKTIVITETER</a>
            </Link>
            <Link className="nav-item active" to="/miljöArbete">
              <a className="nav-link active">MILJÖ ARBETE</a>
            </Link>
            <Link className="nav-item active" to="/film">
              <a className="nav-link active">FILM</a>
            </Link>
          </ul>
        </Link>
        <Link className="nav-link active" to="/sponsorer">
          <a className="nav-link">SPONSORER</a>
        </Link>
        <Link className="nav-link active" to="/kontakt">
          <a className="nav-link">KONTAKT</a>
        </Link>
      </ul>
    </div>
  </nav>
);

export default Nav;
