import React from 'react';
import './Film.css';
import booken from '../../Assests/booken.jpg';
import film1 from '../../Assests/Film/film1.JPG';
import film2 from '../../Assests/Film/film2.JPG';
import film3 from '../../Assests/Film/film3.JPG';
import film4 from '../../Assests/Film/film4.JPG';
import film5 from '../../Assests/Film/film5.JPG';

const Film = () => (
  <div className="container">
    <div className="row">
      <h2 className="col-md-4"><em>Filmen Someone´s Live</em></h2>
      <iframe
        id="iframe"
        title="VisionCenter Video"
        height="450"
        width="650"
        src="https://www.youtube.com/embed/VwQDzmyPRI8"
        allow="autoplay; encrypted-media"
      />
    </div>
    <br />
    <p>
      <strong>Kort om filmen:</strong>
      Främmande land, Sarah från Mellanöstern flyttade till Sverige hos en fosterfamilj.Balansgången
      från hennes religiösa och traditionella liv till det öppna samhället i Sverige kom som en
      kulturchock för henne. Sex år gick och hon började få ett grepp av sitt nya liv, tills dagen
      hon blev våldtagen och gravid. Som ensamkommande.
      </p>
    <p>
      Kände hon sig övergiven och begränsad. Hon kunde inte ta hjälp av familjen från hemlandet då
      hon hade ”förlorat” sin heder och begått en synd. Sarah behövde hjälp och träffade
      Dennis som kanske kunde ändra på hennes liv.
      </p>
    <div className="row">
      <div className="container col-md-6">
        <img alt="" src={film4} className="shadow-box img-fluid" />
      </div>
    </div>
    <br />
    <div className="row">
      <div className="container col-md-6">
        <img alt="" src={film1} className="shadow-box img-fluid" />
      </div>
      <br />
      <div className="container col-md-6">
        <img alt="" src={film2} className="shadow-box img-fluid" />
      </div>
    </div>
    <br />
    <div className="row">
      <div className="container col-md-6">
        <img alt="" src={film3} className="shadow-box img-fluid" />
      </div>
      <br />
      <div className="container col-md-6">
        <img alt="" src={film5} className="shadow-box img-fluid" />
      </div>
    </div>
    <br />
    <h2 className="text">
      <em>MEDIA</em>
    </h2>
    <br />

    <div className="row">
      <div className="col-md-4">
        <iframe
          title="VisionCenterVideo"
          width="350"
          height="300"
          src="https://www.youtube.com/embed/-6CiwGgQw-E"
          allow="autoplay; encrypted-media"
        />
      </div>

      <div className="col-md-4">
        <iframe
          title="VisionCenter Video"
          width="350"
          height="300"
          src="https://www.youtube.com/embed/t-wWm8EKUJ8"
          allow="autoplay; encrypted-media"
        />
      </div>

      <div className="col-md-4">
        <iframe
          title="VisionCenter Video"
          width="350"
          height="300"
          src="https://www.youtube.com/embed/DpaLwyvj6bg"
          allow="autoplay; encrypted-media"
        />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <iframe
              title="VisionCenter Video"
              width="400"
              height="300"
              src="https://www.youtube.com/embed/1ZjUXP7a8TU"
              allow="autoplay; encrypted-media"
            />
          </div>

          <br />
          <br />
          <div className="col-md-6">
            <iframe
              title="VisionCenter Video"
              width="400"
              height="300"
              src="https://www.youtube.com/embed/iIX259MenCU"
              allow="autoplay; encrypted-media"
            />
          </div>
        </div>
      </div>



    </div>

    <br />

    <h2>
      <em>Boken</em>
    </h2>

    <br />

    <img
      alt=""
      src="https://www.ginza.se/Archive/Images/item_img_600/692790.jpg"
      className="col-md-2 float-right"
    />
    <p className="col-xl-10">
      Dennis har skrivit en bok om sitt liv som handlar om hederskultur, utanförskap och hans väg
      in och ut ur kriminalitet och missbruk. Den ämnar vi skapa en film av där vi använder våra
      unga medlemmar både i Sverige och Turkiet. Det är en lärande uppgift på många sätt. Boken
      finns att beställas…..
      </p>
    <div className="col-md-10">
      <img alt="" src={booken} className="shadow-box img-fluid" />
    </div>
  </div >

);

export default Film;
