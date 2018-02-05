import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '../../Assests/logo.png';

const Nav = () => (
  <nav className="navbar navbar-expand-lg sticky-top navbar-light">
    <Link to="/">
      <a className="navbar-brand">
        <img alt="Vision Center" src={logo} />
      </a>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <Link className="nav-link dropbtn dropdown active" to="/grundaren">
          <a
            className="nav-link dropdown-toggle"
            href=""
            id="greenButton"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            OM OSS
          </a>
          <ul className="nav-item dropdown-menu">
            <Link className="nav-item active" to="/grundaren">
              <a className="nav-link active" id="greenButton">
                GRUNDAREN
              </a>
            </Link>
            <Link className="nav-item active" to="/historia">
              <a id="greenButton" className="nav-link active">
                HISTORIA
              </a>
            </Link>
            <Link className="nav-item active bg-dark" to="/omvisioncenter">
              <a id="greenButton" className="nav-link active">
                OM VISION CENTER
              </a>
            </Link>
            <Link className="nav-item active" to="/stadgar">
              <a id="greenButton" className="nav-link active">
                STADGAR
              </a>
            </Link>
            <Link className="nav-item active" to="/blimedlem">
              <a id="greenButton" className="nav-link active">
                BLI MEDLEM
              </a>
            </Link>
            <Link className="nav-item active" to="/ideellarbete">
              <a id="greenButton" className="nav-link active">
                IDEELL ARBETE
              </a>
            </Link>
            <Link className="nav-item active" to="/styrelse">
              <a id="greenButton" className="nav-link active">
                STYRELSE
              </a>
            </Link>
          </ul>
        </Link>
        <Link className="nav-link active" to="/studentHouse">
          <a id="greenButton" className="nav-link">
            STÖDBOENDE
          </a>
        </Link>
        <Link className="nav-link dropdown active" to="/aktiviteter">
          <a
            id="greenButton"
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
              <a id="greenButton" className="nav-link active">
                AKTIVITETER
              </a>
            </Link>
            <Link className="nav-item active" to="/miljöArbete">
              <a id="greenButton" className="nav-link active">
                MILJÖ ARBETE
              </a>
            </Link>
            <Link className="nav-item active" to="/nightshift">
              <a id="greenButton" className="nav-link active">
                TRYGGHETSVANDRING
              </a>
            </Link>
            <Link className="nav-item active" to="/film">
              <a id="greenButton" className="nav-link active">
                FILM
              </a>
            </Link>
          </ul>
        </Link>
        <Link className="nav-link active" to="/sponsorer">
          <a id="greenButton" className="nav-link">
            SPONSORER
          </a>
        </Link>
        <Link className="nav-link active" to="/turkiet">
          <a id="greenButton" className="nav-link">
            TURKIET
          </a>
        </Link>
        <Link className="nav-link active" to="/kontakt">
          <a id="greenButton" className="nav-link">
            KONTAKT
          </a>
        </Link>
        <li id="maro" className="nav-link active">
          <a
            href="https://www.facebook.com/xcons.haninge/"
            className="btn btn-social-icon btn-facebook"
          >
            <span className="fa fa-facebook fa-2x" />
          </a>
        </li>
        <li id="maro" className="nav-link active">
          <a href="" className="btn btn-social-icon btn-twitter">
            <span className="fa fa-twitter fa-2x" />
          </a>
        </li>
        <li id="maro" className="nav-link active">
          <a
            href="https://www.linkedin.com/in/dervis-dennis-aksay-26520647/"
            className="btn btn-social-icon btn-linkedin"
          >
            <span className="fa fa-linkedin fa-2x" />
          </a>
        </li>
        <li id="maro" className="nav-link active">
          <a
            href="https://www.instagram.com/xcons_haninge/"
            className="btn btn-social-icon btn-instagram"
          >
            <span className="fa fa-instagram fa-2x" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
