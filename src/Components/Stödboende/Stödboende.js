import React from 'react';
import stödboende1 from '../../Assests/stödboende1.jpg';

import './Stödboende.css';

const Stödboende = () => (
  <div className="container">
    <h2 className="">Stödboende</h2>
    <p>
      Har du bestämt dig för att göra ett ärligt försök att leva hederligt och drogfritt? Är du less
      på att sitta på anstalt? Vill du skaffa ett riktigt arbete och ha en egen lägenhet? Vision
      Center stödboende riktar sig till alla män och kvinnor som är 18 år och uppåt. Du skall ha en
      kontinuerlig kontakt med någon från Vision Center samt ett medlemskap i föreningen för att
      kvalificera dig. Dessutom skall du ha en kontakt med någon stadsdelsnämnd som tillsammans med
      dig skall utarbeta en s.k. behandlingsplan för dig. Planen är något som du och din
      socialsekreterare tillsammans utarbetar för hur ditt liv skall se ut de närmaste 6 -12
      månaderna efter din frigivning. Den skall innehålla vilka mål som skall uppnås och hur du
      skall bearbeta ett eventuellt drogmissbruk och andra stödinsatser som kan vara lämpliga för
      dig.
    </p>
    <p>
      Ett tryggt boende är en av förutsättningarna för att starta ett liv utan kriminalitet och
      missbruk. Vårt stödboende i Tungelsta, Haninge är en villa belägen nära natur, kommunikationer
      och affärer. Boendet har 6 platser och ligger i Tungelsta nära kommunikationer och affärer.
    </p>
    <p>Vi erbjuder följande stödboende: </p>
    <ul>
      <li>Möblerat rum</li>
      <li>3 timmar kontaktmannaskap / Vec</li>
      <li>Baspaket (Handling av mat inför inflyttning 450kr)</li>
      <li>Husmöte 1 gång per vecka</li>
      <li>Sysselsättningsmöjlighet</li>
      <li>Jourtelefon, dygnet runt</li>
    </ul>

    <div id="myCarousel" className=" container shadow-box carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
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
          <img className="img-fluid third-slide" src={stödboende1} alt="Third slide" />
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
  </div>
);

export default Stödboende;
