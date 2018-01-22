import React from 'react';
import certificate from '../../Assests/certificate.png';
import historia2 from '../../Assests/historia2.png';
import historia3 from '../../Assests/historia3.png';
import historia4 from '../../Assests/historia4.png';

const Historia = () => (
  <div className="container">
    <h2 className="container">Historia</h2>
    <div
      id="myCarousel"
      className="container col-md-6 float-right carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active" />
        <li data-target="#myCarousel" data-slide-to="1" />
        <li data-target="#myCarousel" data-slide-to="2" />
        <li data-target="#myCarousel" data-slide-to="3" />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="img-fluid first-slide"
            src="http://x-conshaninge.se/x/wp-content/uploads/2017/04/Boende-slider-3.jpg"
            alt="First slide"
          />
          <div className="container" />
        </div>
        <div className="carousel-item">
          <img className="img-fluid second-slide" src={''} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="img-fluid third-slide" src={historia2} alt="Third slide" />
          <div className="container" />
        </div>
        <div className="carousel-item">
          <img className="img-fluid fourth-slide" src={historia3} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="img-fluid fifth-slide" src={historia4} alt="Second slide" />
        </div>
      </div>

      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
    <p className="container">
      Vision Center Sweden är en fristående lokalförening. <br />Förutom vad som gäller för Vision
      Center enligt ovan har denna förening fokuserat på förebyggande arbete med ungdomar, särskilt
      de i riskzon för kriminalitet eller missbruk. <br />Vi strävar även att hjälpa ungdomar med
      problem in på arbetsmarknaden. Men arbetet är inte bara förbyggande. <br /> Vi gör också
      insatser med unga som missbrukar eller är kriminella. Vision Center Haninge tidigare namnet
      X-CONS Haninge har funnits sedan 2009 och har nu en stark förankring i lokalsamhället med goda
      kontakter med kommun, socialtjänst, kultur- och fritidsförvaltning, arbetsförmedling, polis,
      ungdomsmottagning och med en lång rad föreningar i området. Vi har också utvecklat kontakter
      med flera omgivande kommuner.<br /> Vi ändrade namnet 2018 till VISION CENTER SWEDEN.
    </p>
    <h5 className="container">Genom åren har vi hunnit med mycket</h5>
    <p className=" container">
      Förutom vårt arbete i brottförebyggande syfte med ungdomar och vuxna har vi drivit fritidsgård
      med café, haft loppis med café, åkt runt på skolor-ungdomsgårdar-behandlingshem-anstalter för
      att hålla föreläsningar, anordnat flera stora festivaler, startat tjejverksamhet, genomfört
      mängder av ungdomsaktiviteter, nattvandrat, haft läxhjälp, genomfört flertalet möten med
      ungdomar i ämnen som jämställdhet och demokrati, utbildat, haft svenskspråkträning, gett ut en
      film om hederskulturens avigsidor….och mycket mer.
    </p>
    <h6 className="container">Vi har också genomfört/genomför flera stora ungdomsprojekt:</h6>
    <ul>
      <li>Folkhälsomyndigheten-Lyckas utan spel</li>
      <li>MUCF-Stödja ungdomars självständiga organisering och inflytande i samhället</li>
      <li>Gålöstiftelsen-Meningen med livet</li>
      <li>Arvsfonden-Första jobbet</li>
    </ul>
    <p className="container">
      Vision Center är en fristående lokalförening. Förutom vad som gäller för Vision Center enligt
      ovan har denna förening fokuserat på förebyggande arbete med ungdomar, särskilt de i riskzon
      för kriminalitet eller missbruk. Vi strävar även att hjälpa ungdomar med problem in på
      arbetsmarknaden. Men arbetet är inte bara förbyggande. Vi gör också insatser med unga som
      missbrukar eller är kriminella. Vision Center Haninge tidigare namnet X-CONS Haninge har
      funnits sedan 2009 och har nu en stark förankring i lokalsamhället med goda kontakter med
      kommun, socialtjänst, kultur- och fritidsförvaltning, arbetsförmedling, polis,
      ungdomsmottagning och med en lång rad föreningar i området. Vi har också utvecklat kontakter
      med flera omgivande kommuner. Vi ändrade namnet 2018 till VISION CENTER SWEDEN.
    </p>
    <p className=" container">
      Vi har även hunnit med att vidareutbilda oss själva för att bli bättre i vårt arbete. Exempel
      på utbildningar: MI-motiverande samtal, ART-från aggressivitet till harmoni, VÄXA-att leda
      praktikanter och sommarjobbare, BSF-beteende-samtal-förändring.
    </p>
    <p className="container">
      2013 blev vi (efter 2 års utbildning i 4 steg) kvalitetscertifierade som Utmärkt Förening av
      Haninge kommun.
    </p>
    <div className="container">
      <ul className="col-6 float-right">
        <li>Det innebär att vi har:</li>
        <li>Tydliga mål, vision och värdegrund</li>
        <li>En organisations- och rekryteringsplan med arbetsbeskrivning kopplade till sig</li>
        <li>Utbildade ledare i hjärt-och lungräddning (HLR) samt krishantering (LABC)</li>
        <li>Drogförebyggande arbete</li>
      </ul>
      <img className="img-fluid first-slide" src={certificate} alt="First slide" />
      <br />
      <br />
    </div>
    <p className="container">
      Vision Centers engagemang genom åren har gett oss en stark förankring i lokalsamhället med
      goda kontakter med kommun, socialtjänst, kultur- och fritidsförvaltning, arbetsförmedling,
      polis, ungdomsmottagningar och med en lång rad föreningar i området. Vi har också utvecklat
      kontakter med flera omkringliggande kommuner.
    </p>
  </div>
);

export default Historia;
