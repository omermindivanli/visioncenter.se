import React from 'react';
import stadgar1 from '../../Assests/Stadgar/stadgar1.png';
import stadgar2 from '../../Assests/Stadgar/stadgar2.png';
import stadgar3 from '../../Assests/Stadgar/stadgar3.png';
import './Stadgar.css';

const Stadgar = () => (
  <div className="container">
    <div className="grundaren">
      <h2 className="container">Stadgar</h2>
      <img className="img-fluid shadow-box float-right" src={stadgar1} />
      <p className="col-lg-12">
        Föreningens paroll är: ”Ärlighet – Gemenskap – Framtid – Unik”. Ärligheten innebär att en
        medlem inte begår brott, att medlemmen ständigt är ärlig mot sig själv och andra samt hela
        tiden följer gällande lag och uppträder som ett föredöme för andra. Att medlemmen ej är
        påverkad av narkotika, alkohol eller andra berusningsmedel vid deltagande i föreningens
        verksamheter, arrangemang eller uppdrag eller vid vistelse i lokaler som tillhör eller
        används av föreningen. Gemenskap innebär att en medlem engagerar sig i sina medmänniskors
        välbefinnande och att medlemmen respekterar andra människors rätt till en egen uppfattning.
        Framtid innebär att en medlem finns tillgänglig för sina medmänniskor, hjälper till i
        föreningens aktiviteter och på annat sätt verkar för föreningens syften Unik innebär att
        medlemmen ska dela med sig och använda sig av sina unika förmågor och erfarenheter på ett
        bra sätt och förmedla detta inom föreningen och till andra medlemmar och medlemmen ska ha i
        åtanke att han eller hon är just det – unik.
      </p>
      <ul>
        <li>
          Att genom opinionsbildning, information och studier verka för ärlighet och för ett
          drogfritt samhälle.
        </li>
        <li>
          Att genom samhällsinriktad verksamhet arbeta för en minskning av nyrekryteringen till
          drogmissbruk och kriminalitet.{' '}
        </li>
        <li>
          Att genom gemenskap, kontaktverksamhet och rådgivning för medlemmar hjälpa medlemmarna att
          utvecklas till ansvarsfulla samhällsmedborgare och främja deras personliga utveckling,
          sociala upprättelse och deras återinträde och delaktighet i samhällslivet.
        </li>
        <li>Att genom utbildning främja rekrytering av lekmannaövervakare ur de egna leden.</li>
      </ul>
      <div className="container col-md-5">
        <img id="marginers" className="img-fluid shadow-box" src={stadgar2} />
      </div>
      <p className="col-lg-12">Föreningen är obunden i religiösa och partipolitiska frågor.</p>
      <p className="col-lg-12">
        Föreningens verksamhet skall i alla delar präglas av öppenhet, ansvarskänsla och respekt för
        mänskliga rättigheter.
      </p>
      <p className="col-lg-12">
        Ordinarie medlemskap kan vinnas av en enskild person som har en personlig bakgrund med
        drog/spel och alkoholmissbruk eller kriminalitet. Ordinarie medlem ska ha förklarat sig
        villig att arbeta för föreningens syfte och efter bästa förmåga följa bestämmelserna i dessa
        stadgar.
      </p>
      <div className="container col-md-5">
        <img id="marginers" className="img-fluid shadow-box" src={stadgar3} />
      </div>
      <p className="col-lg-12">
        Stödmedlemskap kan vinnas av varje enskild person som har förklarat sig villig att verka för
        föreningens syften. Stödmedlem har ej rösträtt inom föreningen, däremot kan stödmedlem
        väljas som adjungerad till styrelsen för yttranderätt.
      </p>
    </div>
    <p className="col-lg-12">
      Föreningens högsta beslutande organ är årsmötet. Föreningsstämman består av samtliga
      närvarande ordinarie medlemmar som betalt medlemsavgift innevarande eller föregående
      kalenderår samt revisorerna. Varje medlem har en röst. Extern revisor har närvaro-, yttrande-
      och yrkanderätt, men ej rösträtt. Omröstning genom fullmakt får ej förekomma.
      Föreningsstyrelsen äger ej rösträtt i frågor som gäller dess egen ansvarsfrihet. Vi lika
      röstetal avgörs både val och beslut genom lottning.
    </p>
  </div>
);

export default Stadgar;

{
  /* Mail Stadgar */
}
