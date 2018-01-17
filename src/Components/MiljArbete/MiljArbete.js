import React from 'react';
import milj1 from '../../Assests/MiljArbete/milj1.png';
import milj2 from '../../Assests/MiljArbete/milj2.png';
import milj3 from '../../Assests/MiljArbete/milj3.png';

const MiljArbete = () => (
  <div className="container">
    <div className="miljöArbete">
      <h2 className="col-lg-9">Miljö Arbete</h2>
      <img
        src="http://x-cons.se/wp-content/uploads/2015/06/img_4-960x300.jpg"
        className="shadow-box img-fluid float-right"
        alt=""
      />
      <p className="col-lg-8">
        ”Min bakgrund är mitt verktyg till att hjälpa andra in på bättre vägar. På gott och ont har
        jag gått den hårda vägen. Jag har tagit mig ur kriminalitet för att idag få uppleva ett liv
        utan oro och ångest och jag har förstått hur viktigt det är att ha nära och kära som tror på
        en. Nu vill jag förmedla mina kunskaper och erfarenheter för att förebygga kriminella tankar
        hos människor som lever i utanförskap” /Dervis
      </p>
      <img alt="" src={milj1} className=" shadow-box img-fluid" />
      <img alt="" src={milj2} className=" shadow-box img-fluid " />
      <img alt="" src={milj3} className="shadow-box img-fluid " />
    </div>
  </div>
);

export default MiljArbete;
