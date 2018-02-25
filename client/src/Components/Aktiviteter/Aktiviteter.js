import React from 'react';
import './Aktiviteter.css';
import aktivity from '../../Assests/Aktiviteter/aktivity.JPG';
import aktivity12 from '../../Assests/Aktiviteter/aktivity12.JPG';
import aktivity13 from '../../Assests/Aktiviteter/aktivity13.JPG';
import aktivity1 from '../../Assests/Aktiviteter/aktivity1.png';
import aktivity2 from '../../Assests/Aktiviteter/aktivity2.png';
import aktivity3 from '../../Assests/Aktiviteter/aktivity3.JPG';
import aktivity4 from '../../Assests/Aktiviteter/aktivity4.JPG';
import aktivity5 from '../../Assests/Aktiviteter/aktivity5.png';
import aktivity6 from '../../Assests/Aktiviteter/aktivity6.png';
import aktivity7 from '../../Assests/Aktiviteter/aktivity7.png';
import aktivity8 from '../../Assests/Aktiviteter/aktivity8.JPG';
import aktivity9 from '../../Assests/Aktiviteter/aktivity9.JPG';
import aktivity11 from '../../Assests/Aktiviteter/aktivity11.JPG';
import aktivity14 from '../../Assests/Aktiviteter/aktivity14.JPG';
import aktivity15 from '../../Assests/Aktiviteter/aktivity15.JPG';
import aktivity16 from '../../Assests/Aktiviteter/aktivity16.JPG';
import aktivity17 from '../../Assests/Aktiviteter/aktivity17.JPG';
import aktivity18 from '../../Assests/Aktiviteter/aktivity18.JPG';
import aktivity19 from '../../Assests/Aktiviteter/aktivity19.JPG';

const Aktiviteter = () => (
  <div className="container">
    <h3 className="">VISION CENTER SWEDEN Aktiviteter</h3>
    <h6 className="">FÖREBYGGANDE ARBETE MED UNGDOMAR 13-26 ÅR</h6>
    <br />
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
        <li data-target="#carouselExampleIndicators" data-slide-to="15" />
        <li data-target="#carouselExampleIndicators" data-slide-to="16" />
        <li data-target="#carouselExampleIndicators" data-slide-to="17" />
        <li data-target="#carouselExampleIndicators" data-slide-to="18" />
      </ol>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={aktivity} alt="Second slide" />
        </div>
        <div className="carousel-item ">
          <img className="d-block w-100" src={aktivity12} alt="Fourth slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={aktivity13} alt="Fifth slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={aktivity9} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={aktivity5} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={aktivity6} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={aktivity7} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={aktivity8} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={aktivity14} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={aktivity4} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={aktivity1} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={aktivity11} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={aktivity15} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={aktivity2} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={aktivity3} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={aktivity16} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={aktivity17} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={aktivity18} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={aktivity19} alt="First slide" />
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
    <p>
      Många unga söker sig till oss på grund av ett ömsesidigt förtroende. De är öppna för påverkan
      i riktning mot humana, demokratiska och jämställda värderingar. I alla våra aktiviteter tar vi
      upp frågor som missbruk, rökning, spelande, hedersproblematik och mycket annat.
    </p>
    <h6>ARBETSMARKNADSPROJEKT ”FÖRSTA JOBBET” MED TONVIKT PÅ MILJÖARBETE</h6>
    <p>
      Många unga söker sig till oss på grund av ett ömsesidigt förtroende. De är öppna för påverkan
      i riktning mot humana, demokratiska och jämställda värderingar. I alla våra aktiviteter tar vi
      upp frågor som missbruk, rökning, spelande, hedersproblematik och mycket annat.
    </p>
    <h6>ARBETSMARKNADSPROJEKT ”FÖRSTA JOBBET” MED TONVIKT PÅ MILJÖARBETE</h6>
    <p>
      Vi kommer i kontakt med ungdomar som misslyckats med skola och etablering på arbetsmarknaden.
      Att kunna ge dem en första anställning tränar dem i vad det innebär att vara anställd och ger
      dem en ökad möjlighet att lyckas i samhället. Att tjäna egna pengar på ett hederligt sätt
      stärker deras självkänsla och ändrar destruktivt beteende. Att få erkänsla förstärker
      motivationen att göra ett nytt försök med utbildningen.
    </p>
    <p>
      Våra Första-jobbet-anställningar genomförs tack vare bidrag från Allmänna Arvsfonden och
      arbetsuppgifterna varierar men de flesta jobben genomförs på Miljöstationer i Handen och
      Jordbro. Efter utbildning sorterar ungdomarna på stationerna. De har också uppdraget att på
      ett pedagogiskt sätt informera de boende i området att sortera på rätt sätt.
    </p>
    <h6>JÄMSTÄLLDHET</h6>
    <p>
      I alla våra aktiviteter väver vi in jämställdhet men vi har också möten där vi pratar om vad
      som är tillåtet och inte tillåtet. På dessa möten strävar vi efter att tjejerna tar plats.
    </p>
    <p>
      Vår förening tilldelades Haninge kommuns Jämställdhetspris år 2015 med motiveringen: För sitt
      progressiva arbete med att förändra killars attityd och genom detta skapa jämställdhet och
      respekt mellan killar och tjejer.
    </p>
    <h6>TJEJGRUPPER</h6>
    <p>
      Vissa flickor har inte möjligheten att närvara på våra aktiviteter för både pojkar och
      flickor. Vi har därför startat ´Tjejgruppen´ som efter egna förslag planerar och genomför
      olika aktiviteter enbart för flickor.
    </p>
    <h6>NATTVANDRING/BEVAKNINGSUPPDRAG</h6>
    <p>
      Vid behov och om vi har resurser utför vi nattvandringar och lättare bevakningsuppdrag. Under
      vandringarna fångar vi upp ungdomar som behöver ledas i rätt riktning. De möts med respekt av
      oss och inbjuds till våra aktiviteter. Via telefon ser vi till att de verkligen kommer.
      Bevakningsuppdragen har snabbt blivit kända och skadegörelsen har därför minskat markant. upp
      frågor som missbruk, rökning, spelande, hedersproblematik och mycket annat.
    </p>
    <h6>SEMINARIUM/FÖRELÄSNINGAR</h6>
    <p>
      Dennis reser runt på skolor, ungdomsgårdar, behandlingshem och anstalter för att föreläsa om
      missbrukets avigsidor.
    </p>
    <div className="row">
      <img alt="" src="" className="" />
      <img alt="" src="" className="" />
      <img alt="" src="" className="" />
    </div>
    <h6>UPPSÖKANDE VERKSAMHET</h6>
    <p>
      Vi besöker anstalter, behandlingshem med mera för att motivera de intagna att byta livsstil
      och för att ge information om det stöd vi kan ge.
    </p>
    <h6>STÖDBOENDE</h6>
    <p>
      Ett tryggt boende är en av förutsättningarna för att starta ett liv utan kriminalitet och
      missbruk. Vårt stödboende i Tungelsta, Haninge är en villa belägen nära natur, kommunikationer
      och affärer.
    </p>
    <h6>KONTAKTMANNASKAP</h6>
    <p>
      Vi kommer regelbundet i kontakt med ungdomar som har problem med missbruk och eller
      kriminalitet. Tack vare det förtroende vi har hos ungdomarna i Haninge är det ofta de som
      kommer till oss för att få stöd och hjälp. Detta gör det lättare att motivera dem att delta
      med positiv attityd i vårdprogram. Vi har då åtagit oss uppdraget att vara kontaktman vilket
      har fungerat mycket bra.
    </p>
    <h6>SAMHÄLLSTJÄNST</h6>
    <p>
      Vision Center är en av de föreningar som åtar sig uppdraget att ta emot individer som blivit
      dömda till samhällstjänst. Vi aktiverar dem med passande uppgifter.
    </p>
    <h6> BOK/FILM</h6>
    <p>
      Dennis har skrivit en bok om sitt liv som handlar om hederskultur, utanförskap och hans väg in
      och ut ur kriminalitet och missbruk. Den ämnar vi skapa en film av där vi använder våra unga
      medlemmar både i Sverige och Turkiet. Det är en lärande uppgift på många sätt. Boken finns att
      beställas…..{' '}
    </p>
  </div>
);

export default Aktiviteter;
