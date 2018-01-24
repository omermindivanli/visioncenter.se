import React from 'react';
import sponsor1 from '../../Assests/Sponsors/sponsor1.png';
import sponsor2 from '../../Assests/Sponsors/sponsor2.png';
import sponsor3 from '../../Assests/Sponsors/sponsor3.png';

const Sponsorer = () => (
  <section className="container col-md-7 bg-white shadow-box" id="portfolio">
    <div className="container text-center">
      <h2 className="section-heading text-uppercase">Sponsorer</h2>
      <div className="row">
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content" />
            </div>
            <img className="img-fluid" src={sponsor1} alt="" />
          </a>
          <div className="portfolio-caption">
            <h4>Arvsfonden</h4>
            <p className="text-muted" />
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content" />
            </div>
            <img className="img-fluid" src={sponsor2} alt="" />
          </a>
          <div className="portfolio-caption">
            <h4>Mucf.se</h4>
            <p className="text-muted" />
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content" />
            </div>
            <img className="img-fluid" src={sponsor3} alt="" />
          </a>
          <div className="portfolio-caption">
            <h4>Gålöstiftelsen</h4>
            <p className="text-muted" />
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content" />
            </div>
            <img
              className="img-fluid"
              src="http://x-conshaninge.se/x/wp-content/uploads/2017/03/Haninge-logo-medium-2.png"
              alt=""
            />
          </a>
          <div className="portfolio-caption">
            <h4>Haninge Kommun</h4>
            <p className="text-muted" />
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content" />
            </div>
            <img
              className="img-fluid"
              src="http://x-conshaninge.se/x/wp-content/uploads/2017/03/McDonalds-1.gif"
              alt=""
            />
          </a>
          <div className="portfolio-caption">
            <h4>McDonald´s</h4>
            <p className="text-muted" />
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content" />
            </div>
            <img
              className="img-fluid"
              src="http://x-conshaninge.se/x/wp-content/uploads/2017/03/gb.png"
              alt=""
            />
          </a>
          <div className="portfolio-caption">
            <h4>GB Glace</h4>
            <p className="text-muted" />
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content" />
            </div>
            <img
              className="img-fluid"
              src="http://www.fastighetsjobb.se/wp-content/uploads/2014/02/HaningeBostader.png"
              alt=""
            />
          </a>
          <div className="portfolio-caption">
            <h4>Haninge Bostäder</h4>
            <p className="text-muted" />
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content" />
            </div>
            <img
              className="img-fluid"
              src="http://profi.se/wp-content/uploads/2016/04/Profi_Logo-1.png"
              alt=""
            />
          </a>
          <div className="portfolio-caption">
            <h4>Profi Fastigheter </h4>
            <p className="text-muted" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Sponsorer;
