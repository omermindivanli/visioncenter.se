import React from 'react';

const Historia = () => (
  <div className="container">
    <h2 className="container">Historia</h2>
    <p className=" container">
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

    <div
      id="myCarousel"
      className="container col-md-9 shadow-box carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active" />
        <li data-target="#myCarousel" data-slide-to="1" />
        <li data-target="#myCarousel" data-slide-to="2" />
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
          <img
            className="img-fluid second-slide"
            src="http://x-conshaninge.se/x/wp-content/uploads/2017/04/fritids.jpg"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="img-fluid third-slide"
            src="http://x-conshaninge.se/x/wp-content/uploads/2017/04/Föreläsning-slider-kopia-1.jpg"
            alt="Third slide"
          />
          <div className="container" />
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

    <h5 className="container">Genom åren har vi hunnit med mycket</h5>

    <p className=" container">
      Förutom vårt arbete i brottförebyggande syfte med ungdomar och vuxna har vi drivit fritidsgård
      med café, haft loppis med café, åkt runt på skolor-ungdomsgårdar-behandlingshem-anstalter för
      att hålla föreläsningar, anordnat flera stora festivaler, startat tjejverksamhet, genomfört
      mängder av ungdomsaktiviteter, nattvandrat, haft läxhjälp, genomfört flertalet möten med
      ungdomar i ämnen som jämställdhet och demokrati, utbildat, haft svenskspråkträning, gett ut en
      film om hederskulturens avigsidor….och mycket mer.{' '}
    </p>
    <p className=" container">
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
  </div>
);

export default Historia;
