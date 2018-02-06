import React from 'react';
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
              <a className="text-muted" href="#">
                Grundaren
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Historia
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Om Vision Center
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Stadgar
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Bli Medlem
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Ideell Arbete
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Styrelse
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="text-muted" href="#">
                Resource
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Resource name
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Another resource
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Final resource
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Verksamheter</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="text-muted" href="#">
                Team
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Locations
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Privacy
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p id="lastP" className="text-small text-muted">
        <small className="d-block mb-3 text-muted">&copy; 2017-2018</small>
        2021 Created by <a href="http://omermindivanli.com">Ömer Mindivanli</a>
        , Web Utveckläre och JS Ingenjör.
      </p>
    </div>
  </div>
);

export default Footer;
