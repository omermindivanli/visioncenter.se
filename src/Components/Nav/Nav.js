import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import icon from '../../Assests/icon.png';

const Nav = () => (
  <nav class="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand">
      <img alt="Vision Center" src={icon} />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <Link className="nav-link active" to="/">
          <a className="nav-link active" id="greenButton">
            HEM
          </a>
        </Link>
        <Link className="nav-link dropdown active" to="/grundaren">
          <a
            class="nav-link dropdown-toggle"
            href="#"
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
            <Link className="nav-item active" to="/omvisioncenter">
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
        <Link className="nav-link active" to="/stödboende">
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
            <Link className="nav-item active" to="/activities">
              <a id="greenButton" className="nav-link">
                AKTIVITETER
              </a>
            </Link>
            <Link className="nav-item active" to="/miljöArbete">
              <a id="greenButton" className="nav-link active">
                MILJÖ ARBETE
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
        <li className="nav-link active">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1200px-Flag_of_Sweden.svg.png" />
        </li>
        <li className="nav-link active">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png" />
        </li>
        <li className="nav-link active">
          <img src="https://img00.deviantart.net/d88d/i/2012/283/4/7/turkish_flag_003_by_johnlegendre-d5hdmop.png" />
        </li>
      </ul>
    </div>
  </nav>
);

const video = {
  url: 'https://youtu.be/FWeP_OjEq54',
};

export default Nav;
