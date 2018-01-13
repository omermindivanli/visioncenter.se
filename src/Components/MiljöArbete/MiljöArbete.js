import React from 'react';

import miljö1 from '../../Assests/MiljöArbete/miljö1.png';
import miljö2 from '../../Assests/MiljöArbete/miljö2.png';
import miljö3 from '../../Assests/MiljöArbete/miljö3.png';

const MiljöArbete = () => (
  <div className="container">
    <div className="miljöArbete">
      <h2 className="col-lg-9">Miljö Arbete</h2>
      <img
        src={'http://x-cons.se/wp-content/uploads/2015/06/img_4-960x300.jpg'}
        className="shadow-box img-fluid float-right"
      />
      <p className="col-lg-8">
        ”Min bakgrund är mitt verktyg till att hjälpa andra in på bättre vägar. På gott och ont har
        jag gått den hårda vägen. Jag har tagit mig ur kriminalitet för att idag få uppleva ett liv
        utan oro och ångest och jag har förstått hur viktigt det är att ha nära och kära som tror på
        en. Nu vill jag förmedla mina kunskaper och erfarenheter för att förebygga kriminella tankar
        hos människor som lever i utanförskap” /Dervis
      </p>
      <div class="container col-md-9">
        <img src={miljö1} className="col-md-5 shadow-box img-fluid" />
        <img src={miljö2} className="col-md-5 shadow-box img-fluid " />
        <img src={miljö3} className="col-md-5 shadow-box img-fluid " />
      </div>
    </div>
  </div>
);

export default MiljöArbete;
