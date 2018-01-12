import React from 'react';

import room_visionCenter from '../../Assests/room_visionCenter.jpg';
import room_info_visionCenter from '../../Assests/room_info_visionCenter.jpg';

import './Home.css';

const video = {
  url: 'https://www.youtube.com/embed/FWeP_OjEq54',
};

const Home = () => (
  <div className="container">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active" />
        <li data-target="#myCarousel" data-slide-to="1" />
        <li data-target="#myCarousel" data-slide-to="2" />
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="img-fluid first-slide"
            src="http://x-conshaninge.se/x/wp-content/uploads/2017/04/Boende-slider-3.jpg"
            alt="First slide"
          />
          <div class="container" />
        </div>
        <div class="carousel-item">
          <img
            class="img-fluid second-slide"
            src="http://x-conshaninge.se/x/wp-content/uploads/2017/04/fritids.jpg"
            alt="Second slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="img-fluid third-slide"
            src="            http://x-conshaninge.se/x/wp-content/uploads/2017/04/Föreläsning-slider-kopia-1.jpg"
            alt="Third slide"
          />
          <div class="container" />
        </div>
      </div>
      <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true" />
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true" />
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        className="embed-responsive-item"
        width="1000"
        height="360"
        src={video.url}
        gesture="media"
        allow="encrypted-media"
        allowFullScreen
        title="Vision Center"
      />
    </div>

    <div className="container">
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
            <a className="btn btn-secondary" href="./grundaren" role="button">
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
    </section>
  </div>
);

export default Home;
