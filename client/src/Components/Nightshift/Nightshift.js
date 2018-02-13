import React from 'react';
import nightshift from '../../Assests/Historia/nightshift.jpg';
import car1 from '../../Assests/Historia/car1.jpg';
import vard from '../../Assests/Historia/vard.jpg';

const Nightshift = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>TRYGGHETSVANDRING</h2>
          <p>
            X-CONS ( Byta namn till Vision Center Sweden ) Haninge har sedan 2009 bedrivit trygghetsvandringar i Haninge tillsammans med volontärer, ungdomar, Civilförsvarsförbundet med flera. Det har gett oss god kontakt med ungdomar som rör sig i samhället sena kvällar och nätter. Vi har också kontrollerat att olika fastigheters dörrar är låsta där vi har en överenskommelse.
          </p>
          <p>
            <strong>Grundidén med nattvandringarna är att se, höra, att närvara på plats, att informera och därmed kunna förebygga! Vi satsar först och främst på ungdomar från 13år och uppåt!!</strong>
          </p>
          <p>
            Från att föreningen öppnade sina dörrar så började nattvandringen äga rum med minst två-tre kvällar/nätter i veckan från klockan ca 20:00-02:00.
            Volontärerna har alltid bestått av både tjejer och killar och vi har alltid varit minst 7 volontärer/medlemmar som nattvandrat samtidigt runt om hela Haninge kommun!Syftet med nattvandringen är att ge en trygghetskänsla och att vägleda ungdomar.
          </p>
        </div>
        <div className="col-md-6">
          <div
            data-interval="2000"
            id="myCarousel"
            data-wrap="true"
            className=" antiBlur carousel slide"
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
                  src={nightshift}
                  alt="First slide"
                />
                <div className="container" />
              </div>
              <div className="carousel-item">
                <img className="img-fluid second-slide" src={car1} alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="img-fluid third-slide" src={vard} alt="Third slide" />
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

        <p className="col-md-12">
          Området för våra nattvandringar är inom Haninge kommun. I dagsläget är vi en liten grupp med ca 5-7 nattvandrare, men tanken är att vi ska vara minst dubbelt så många under 2011 (ju fler desto bättre!).  I framtiden vill vi kunna erbjuda Haninges ungdomar flera varierande och spännande alternativ istället för att dricka alkohol och missbruka droger. Ungdomarna är välkomna till våra lokaler för att umgås, se på film, spela biljard och sällskapsspel och dyl. Vi har dock märkt att ungdomarna uppskattar våra nattvandringar och vi får kontakt med ca ett femtiotal ungdomar per nattvandring. Ungdomarna visar stort intresse för Vision Center Sweden Haninge och många vill veta mer om våra aktiviteter och vad vi kan erbjuda just dem. Vår närvaro har markerat tydligt för ungdomarna att vi ser de och vet vad som pågår och visar att vi bryr oss och vill hjälpa dem.
          Vi tror att Vision Center Sweden Haninge kan erbjuda livsviktig information till dessa ungdomar så att de lär sig och förstår sig på kriminalitetens och missbrukets farliga följder. Nattvandringarna innebär en chans för dem att välja bort båda två!
        </p>
      </div>
    </div>
  </div >
);

export default Nightshift;
