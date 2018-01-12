import React from 'react';
import sponsor1 from '../../Assests/Sponsors/sponsor1.png';
import sponsor2 from '../../Assests/Sponsors/sponsor2.png';
import sponsor3 from '../../Assests/Sponsors/sponsor3.png';

const Sponsorer = () => (
  <section class="container col-md-7 bg-white shadow-box" id="portfolio">
    <div class="container text-center">
      <h2 class="section-heading text-uppercase">Sponsorer</h2>
      <div class="row">
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content"> </div>
            </div>
            <img class="img-fluid" src={sponsor1} alt="" />
          </a>
          <div class="portfolio-caption">
            <h4>Arvsfonden</h4>
            <p class="text-muted" />
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content" />
            </div>
            <img class="img-fluid" src={sponsor2} alt="" />
          </a>
          <div class="portfolio-caption">
            <h4>Mucf.se</h4>
            <p class="text-muted" />
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content" />
            </div>
            <img class="img-fluid" src={sponsor3} alt="" />
          </a>
          <div class="portfolio-caption">
            <h4>Gålöstiftelsen</h4>
            <p class="text-muted" />
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal4">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content" />
            </div>
            <img
              class="img-fluid"
              src="http://x-conshaninge.se/x/wp-content/uploads/2017/03/Haninge-logo-medium-2.png"
              alt=""
            />
          </a>
          <div class="portfolio-caption">
            <h4>Haninge Kommun</h4>
            <p class="text-muted" />
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal5">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content" />
            </div>
            <img
              class="img-fluid"
              src="http://x-conshaninge.se/x/wp-content/uploads/2017/03/McDonalds-1.gif"
              alt=""
            />
          </a>
          <div class="portfolio-caption">
            <h4>McDonald's</h4>
            <p class="text-muted" />
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal6">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content" />
            </div>
            <img
              class="img-fluid"
              src="http://x-conshaninge.se/x/wp-content/uploads/2017/03/gb.png"
              alt=""
            />
          </a>
          <div class="portfolio-caption">
            <h4>GB Glace</h4>
            <p class="text-muted" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Sponsorer;
