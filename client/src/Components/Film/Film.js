import React from 'react';
import './Film.css';
import booken from '../../Assests/booken.jpg';

const Film = () => (
  <div className="container">
    <div className="filmBoken">
      <h2 className="text-right">Filmen Someone´s Live</h2>
      <iframe
        id="iframe"
        title="VisionCenter Video"
        className="shadow-box float-right"
        width="300"
        height="200"
        src="https://www.youtube.com/embed/VwQDzmyPRI8"
        allow="autoplay; encrypted-media"
      />
      <p className="">
        <strong>Kort om filmen:</strong> Främmande land, Sarah från Mellanöstern flyttade till
        Sverige hos en fosterfamilj. Balansgången från hennes religiösa och traditionella liv till
        det öppna samhället i Sverige kom som en kulturchock för henne. Sex år gick och hon började
        få ett grepp av sitt nya liv, tills dagen hon blev våldtagen och gravid. Som ensamkommande
        kände hon sig övergiven och begränsad. Hon kunde inte ta hjälp av familjen från hemlandet då
        hon hade ”förlorat” sin heder och begått en synd. Sarah behövde hjälp och träffade Dennis
        som kanske kunde ändra på hennes liv.
      </p>
      <h2 className="text">MEDIA</h2>
      <iframe
        id="iframe"
        title="VisionCenter Video"
        width="300"
        height="200"
        src="https://www.youtube.com/embed/-6CiwGgQw-E"
        allow="autoplay; encrypted-media"
      />
      <iframe
        id="iframe"
        title="VisionCenter Video"
        width="300"
        height="200"
        src="https://www.youtube.com/embed/t-wWm8EKUJ8"
        allow="autoplay; encrypted-media"
      />
      <iframe
        id="iframe"
        title="VisionCenter Video"
        width="300"
        height="200"
        src="https://www.youtube.com/embed/DpaLwyvj6bg"
        allow="autoplay; encrypted-media"
      />
      <iframe
        id="iframe"
        title="VisionCenter Video"
        width="300"
        height="200"
        src="https://www.youtube.com/embed/1ZjUXP7a8TU"
        allow="autoplay; encrypted-media"
      />
      <iframe
        id="iframe"
        title="VisionCenter Video"
        width="300"
        height="200"
        src="https://www.youtube.com/embed/iIX259MenCU"
        allow="autoplay; encrypted-media"
      />
      <br />
      <br />
      <h2>Boken</h2>
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
      <img alt="" src={booken} className="col-xl-10 img-fluid" />
    </div>
  </div>
);
export default Film;
