import React from 'react';
import './Film.css';
const Film = () => (
  <div className="container">
    <div className="filmBoken">
      <h2>FILM</h2>
      <p>
        Främmande land, Sarah från Mellanöstern flyttade till Sverige hos en fosterfamilj.
        Balansgången från hennes religiösa och traditionella liv till det öppna samhället i Sverige
        kom som en kulturchock för henne. Sex år gick och hon började få ett grepp av sitt nya liv,
        tills dagen hon blev våldtagen och gravid. Som ensamkommande kände hon sig övergiven och
        begränsad. Hon kunde inte ta hjälp av familjen från hemlandet då hon hade ”förlorat” sin
        heder och begått en synd. Sarah behövde hjälp och träffade Dennis som kanske kunde ändra på
        hennes liv.
      </p>
      <iframe
        className="shadow-box"
        width="1080"
        height="600"
        src="https://www.youtube.com/embed/VwQDzmyPRI8"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      />
      <h2>Boken</h2>
      <img
        src="https://www.ginza.se/Archive/Images/item_img_600/692790.jpg"
        className="col-md-2 float-right"
      />
      <p>
        Dennis har skrivit en bok om sitt liv som handlar om hederskultur, utanförskap och hans väg
        in och ut ur kriminalitet och missbruk. Den ämnar vi skapa en film av där vi använder våra
        unga medlemmar både i Sverige och Turkiet. Det är en lärande uppgift på många sätt. Boken
        finns att beställas…..
      </p>
    </div>
  </div>
);
export default Film;
