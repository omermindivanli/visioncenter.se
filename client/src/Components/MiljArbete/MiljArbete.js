import React from 'react';
import milj1 from '../../Assests/MiljArbete/milj1.png';
import milj2 from '../../Assests/MiljArbete/milj2.png';
import milj3 from '../../Assests/MiljArbete/milj3.png';
import milj4 from '../../Assests/MiljArbete/milj4.png';
import milj5 from '../../Assests/MiljArbete/milj5.png';
import milj6 from '../../Assests/MiljArbete/milj6.png';
import m4464 from '../../Assests/MiljArbete/m4464.JPG';
import m4476 from '../../Assests/MiljArbete/m4476.JPG';
import m4565 from '../../Assests/MiljArbete/m4565.JPG';
import m4623 from '../../Assests/MiljArbete/m4623.JPG';
import m4710 from '../../Assests/MiljArbete/m4710.JPG';
import m7017 from '../../Assests/MiljArbete/m7017.JPG';
import m7006 from '../../Assests/MiljArbete/m7006.JPG';
import m4804 from '../../Assests/MiljArbete/m4804.JPG';
import m7015 from '../../Assests/MiljArbete/m7015.JPG';

const MiljArbete = () => (
  <div className="container miljöArbete">
    <div className="row">
      <h2 className="col-md-6">Miljö Arbete / Projekt Första Jobbet</h2>
    </div>
    <div
      data-interval="2000"
      data-wrap="true"
      id="carouselExampleIndicators"
      className="float-right col-lg-6 carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        <li data-target="#carouselExampleIndicators" data-slide-to="3" />
        <li data-target="#carouselExampleIndicators" data-slide-to="4" />
        <li data-target="#carouselExampleIndicators" data-slide-to="5" />
        <li data-target="#carouselExampleIndicators" data-slide-to="6" />
        <li data-target="#carouselExampleIndicators" data-slide-to="7" />
        <li data-target="#carouselExampleIndicators" data-slide-to="8" />
        <li data-target="#carouselExampleIndicators" data-slide-to="9" />
        <li data-target="#carouselExampleIndicators" data-slide-to="10" />
        <li data-target="#carouselExampleIndicators" data-slide-to="11" />
        <li data-target="#carouselExampleIndicators" data-slide-to="12" />
        <li data-target="#carouselExampleIndicators" data-slide-to="13" />
        <li data-target="#carouselExampleIndicators" data-slide-to="14" />
      </ol>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={milj2} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={milj3} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={milj1} alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={milj4} alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={milj5} alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={milj6} alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={m4464} alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={m4476} alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={m4565} alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={m4623} alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={m7017} alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={m4710} alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={m7006} alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={m7015} alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={m4804} alt="Third slide" />
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div className="col-md-2">
      <img alt="" src="http://www.arvsfonden.se/sites/default/files/project_updates/12713/arvsfonden_0.png" className="img-fluid" />
    </div>
    <br />

    <p className="col-lg-7">
      Sedan 2012 har vi försöka bidra till att hjälpa ungdomar bort från kriminalitet och droger
      samt människor som har suttit i fängelse att få ett riktigt jobb och ett nytt liv.
    </p>
    <h6 className="col-lg-7">Målet</h6>
    <p className="col-lg-6">
      Målet är dock att vi ska från börja plocka ut de som vi tror kan klara av jobbet med tiden så
      att det ”slutar” med en fast anställning. Detta spar mycket pengar åt våra kunder samt att en
      väl fungerande källsortering och avfallshantering är något som uppskattas och prioriteras idag
      av de flesta hyresgäster.
    </p>
    <h6 className="container">Utbildning</h6>
    <p className="col-lg-6">
      Personalen får regelbunden utbildning inom allt som rör avfall och återvinning så som:
    </p>

    <ul>
      <li>Behandlings- och återvinningstekniker för avfall och återvinningsbart material.</li>
      <li>Kostnader för behandling av olika typer av avfall och restprodukter.</li>
      <li>
        Olika transportsätt och kostnader för dessa samt vilka entreprenörer som använder sig av de
        olika transportsätten.
      </li>
      <li>Källsorteringskunskap; d.v.s. hur ska allt sorteras på bästa sätt.</li>
      <li>
        Kundservice. Det är viktigt att som personalen kunna bemöta människor på ett positivt sätt
        så att en tillrättavisning känns som en hjälp och inte en utskällning.
      </li>
    </ul>

    <div className="container">
      <p className="col-lg-8">
        För att säkerställa att personalen verkligen har den kunskap vi lovar har vi skriftliga
        tester med jämna mellanrum.
      </p>
      <h4 className="col-lg-8">
        Tack för ett gott samarbete. <br />Våran uppdragsgivare inom Miljoarbete/Återviningsarbete
      </h4>
      <img
        className="img-fluid col-lg-4"
        src="http://www.fastighetsjobb.se/wp-content/uploads/2014/02/HaningeBostader.png"
        alt="Third slide"
      />
      <img
        className="img-fluid col-lg-4"
        src="http://profi.se/wp-content/uploads/2016/04/Profi_Logo-1.png"
        alt="Third slide"
      />
      <br />
      <br />
    </div>
  </div>
);

export default MiljArbete;
