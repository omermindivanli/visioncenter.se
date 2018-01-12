import React from 'react';

const Film = () => (
  <div className="container">
    <h2>FILM</h2>
    <p>
      Främmande land, Sarah från Mellanöstern flyttade till Sverige hos en fosterfamilj.
      Balansgången från hennes religiösa och traditionella liv till det öppna samhället i Sverige
      kom som en kulturchock för henne. Sex år gick och hon började få ett grepp av sitt nya liv,
      tills dagen hon blev våldtagen och gravid. Som ensamkommande kände hon sig övergiven och
      begränsad. Hon kunde inte ta hjälp av familjen från hemlandet då hon hade ”förlorat” sin heder
      och begått en synd. Sarah behövde hjälp och träffade Dennis som kanske kunde ändra på hennes
      liv.
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
  </div>
);
export default Film;
