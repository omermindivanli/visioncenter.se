import React from 'react';
import './Grundaren.css';
import grundarenSlider from '../../Assests/Grundaren/grundarenSlider.jpg';
import dervisBey from '../../Assests/Grundaren/dervisBey.jpeg';
import dervis033 from '../../Assests/Grundaren/dervis033.jpeg';
import photoV from '../../Assests/Historia/dsc.jpg';

const Grundaren = () => (
  <div className="container">
    <h3 className="col-md-8">VISION CENTER SWEDEN Grundare och Eldsjäl</h3>
    <p className="col-md-8 text-muted">
      <em>Dervis ”Dennis” Aksay, Director / Founder</em>
    </p>
    <div className="">
      <img className="img-fluid col-md-6 float-right" src={dervisBey} alt="First slide" />
    </div>
    <p className="col-md-6">
      ”Min bakgrund är mitt verktyg till att hjälpa andra in på bättre vägar. På gott och ont har
      jag gått den hårda vägen. Jag har tagit mig ur kriminalitet för att idag få uppleva ett liv
      utan oro och ångest och jag har förstått hur viktigt det är att ha nära och kära som tror på
      en. Nu vill jag förmedla mina kunskaper och erfarenheter för att förebygga kriminella tankar
      hos människor som lever i utanförskap” /Dervis
    </p>
    <p className="col-md-6">
      Dervis ”Dennis” Aksay är uppvuxen i Turkiet med hederskultur som måttstock. Han blev som
      18-åring bortgift i Sverige trots att varken kvinnan eller han ville gifta sig med varandra.
      Utanförskap blev hans vardag då svärföräldrarna vägrade låta honom integreras i det nya
      landet. Han säger själv ”Ingen såg mig”. Frustrationen tog honom till slut till droger,
      spelmissbruk och kriminalitet.
    </p>
    <p className="col-lg-12">
      2008 blev han fri från allt och bestämde sig för att använda sin energi till att hjälpa andra,
      speciellt ungdomar så att de inte ska behöva uppleva det som han gjorde. 2009 startade han
      X-CONS Haninge ideella förening som idag har bytt namn till Vision Center. Att föreningen
      ändrade namn till Vision Center berodde på två saker:
    </p>
    <ul className="col-md-6">
      <li>Samhället sätter ofta en negativ stämpel på en organisation som heter Vision Center.</li>
      <li>
        Vi ville betona att vi kämpar för att alla ska känna att de har en vision/framtidsdröm.
      </li>
    </ul>
    <p className="col-lg-12">
      Resan från 2009 har gått både upp och ner (det är många fördomar att kämpa mot när man är en
      före detta kriminell som vill leva hederligt) men han har lyckats! Genom idogt arbete har han
      skapat en verksamhet i Haninge som verkligen hjälper. 2016 startade han en liknande verksamhet
      i Istanbul, Turkiet.
    </p>
    <div className="">
      <img className="img-fluid col-lg-13 shadow-box" src={dervis033} alt="First slide" />
    </div>
    <br />
    <br />
    <div
      data-interval="2000"
      id="myCarousel"
      data-wrap="true"
      className=" container col-md-6 carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active" />
        <li data-target="#myCarousel" data-slide-to="1" />
        <li data-target="#myCarousel" data-slide-to="2" />
      </ol>

      <div className="carousel-inner">
        <div className="carousel-item">
          <img
            className="img-fluid first-slide"
            src="http://www.habername.com/images/other/sema1706-uyusturucu-bana-kimligimi-unutturdu4.20120623024028.jpg"
            alt="First slide"
          />
        </div>

        <div className="carousel-item active">
          <img
            src={photoV}
            className="img-fluid second-slide"
            alt="Second slide"
          />
          <div className="carousel-caption text-left">
            <h6 id="shorter">
              2014 tilldelades Dervis ”Vitsippspriset” av Kristdemokraterna Haninge med
              motiveringen: .
            </h6>
            <p id="shorter">
              Exkriminella har fått chansen till nytt liv och unga i gråzonen har fått möjlighet
              till ett tryggare liv med positiv framtidstro.
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img className="third-slide img-fluid" src={grundarenSlider} alt="Third slide" />
          <div className="carousel-caption">
            <div className="float-left">
              <img
                alt=""
                className="img-fluid"
                id="shortImg"
                src="http://www.moderat.info/wp-content/uploads/2016/08/huvudlogotyp_fa%CC%88rg_utantxt.png"
              />
            </div>
            <img
              alt=""
              className="img-fluid"
              id="shortImg"
              src="http://wpskane.kristdemokraterna.se/orkelljunga/files/2014/04/Kristdemokraterna_symbol.png"
            />
            <div className="float-right">
              <img
                alt=""
                className="img-fluid"
                id="shortImg"
                src="https://vignette.wikia.nocookie.net/logopedia/images/1/1c/Milj%C3%B6partiet_symbolb.png/revision/latest?cb=20101225164953"
              />
            </div>
          </div>
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
  </div>
);

export default Grundaren;
