import React from 'react';
import './Article.css';

const Article = () => (
  <div className="container main">
    <hr className="featurette-divider" />
    <h2 className="text-center">Vårt Motto Är</h2>
    <div className="row">
      <div className="col-lg-4">
        <img
          className="rounded-circle"
          src="http://www.arvsfonden.se/sites/default/files/project_updates/10991/Hillevi%20Engstr%C3%B6m.jpg"
          width="200"
          height="200"
          alt=""
        />
        <h3>Ärligheten</h3>
        <p>
          Ärligheten innebär att en medlem inte begår brott, att medlemmen ständigt är ärlig mot sig själv och andra samt hela tiden följer gällande lag och uppträder som ett föredöme för andra.
        </p>
        <p>
          <a className="btn btn-secondary" href="#" role="button">
            View details &raquo;
          </a>
        </p>
      </div>
      <div className="col-lg-4">
        <img
          className="rounded-circle"
          src="http://3.bp.blogspot.com/_buSfLYmEHSw/THLLru2Aq5I/AAAAAAAAASw/hYWzung75Mc/s1600/x-cons.ny.jpg"
          width="200"
          height="200"
          alt=""
        />
        <h3>Gemenskap</h3>
        <p>
          Gemenskap innebär att en medlem engagerar sig i sina medmänniskors välbefinnande och att medlemmen respekterar andra människors rätt till en egen uppfattning.</p>
        <p>
          <a className="btn btn-secondary" href="#" role="button">
            View details &raquo;
          </a>
        </p>
      </div>
      <div className="col-lg-4">
        <img
          className="rounded-circle"
          src="http://x-cons.se/wp-content/uploads/20150701_1114401.jpg"
          alt="Generic placeholder image"
          width="200"
          height="200"
        />
        <h3>Framtid</h3>
        <p>
          Framtid innebär att en medlem finns tillgänglig för sina medmänniskor, hjälper till i föreningens aktiviteter och på annat sätt verkar för föreningens syften.</p>
        <p>
          <a className="btn btn-secondary" href="#" role="button">
            View details &raquo;
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default Article;
