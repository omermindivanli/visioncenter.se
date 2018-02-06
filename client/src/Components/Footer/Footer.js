import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../Assests/logo.png';

const Footer = () => (
  <div id="footer">
    <hr id="border" />
    <div className="container">
      <div className="row">
        <div className="col-12 col-md">
          <img className="mb-2" src={logo} alt="" width="90" height="90" />
          <small className="d-block mb-3 text-muted">&copy; 2017-2018</small>
        </div>
        <div className="col-6 col-md">
          <h5>Om Oss</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="text-muted" href="/grundaren">
                Grundaren
              </a>
            </li>
            <li>
              <a className="text-muted" href="/historia">
                Historia
              </a>
            </li>
            <li>
              <a className="text-muted" href="/omvisioncenter">
                Om Vision Center
              </a>
            </li>
            <li>
              <a className="text-muted" href="/stadgar">
                Stadgar
              </a>
            </li>
            <li>
              <a className="text-muted" href="/blimedlem">
                Bli Medlem
              </a>
            </li>
            <li>
              <a className="text-muted" href="/ideellarbete">
                Ideell Arbete
              </a>
            </li>
            <li>
              <a className="text-muted" href="/styrelse">
                Styrelse
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md">
          <h5>Verksamheter</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="text-muted" href="/aktiviteter">
                Aktiviteter
              </a>
            </li>
            <li>
              <a className="text-muted" href="/miljöarbete">
                Miljö Arbete
              </a>
            </li>
            <li>
              <a className="text-muted" href="/nightshift">
                Trygghetsvandring
              </a>
            </li>
            <li>
              <a className="text-muted" href="/film">
                Film
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md">
          <h5>Kontakt</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="text-muted" href="#">
                Vision Center Sweden AB
              </a>
            </li>
            <li className="text-muted">
              Adress: Handens Stationsväg 19, Handen Stockholm, Sweden 13640
            </li>
            <hr />
            <li>
              E-Mail: <a href="mailto:sweden@visioncenter.se">sweden@visioncenter.se</a>
            </li>
          </ul>
        </div>
      </div>
      <p id="lastP" className="text-small text-muted">
        &copy; 2017-2019 Created by <a href="http://omermindivanli.com">Ömer Mindivanli</a>
        , Front-End Web Utveckläre
      </p>
    </div>
  </div>
);

export default Footer;
