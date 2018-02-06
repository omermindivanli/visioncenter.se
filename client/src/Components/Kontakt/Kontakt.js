import React from 'react';
import './Kontakt.css';

const Kontakt = () => (
  <div className="container">
    <h2 className="container">Kontakt</h2>
    <div className="container">
      <div className="row">
        <div className="container col-md-8">
          <div className="well well-sm">
            <form method="POST">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="" className="name">
                      Namn och Efternamn
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter name"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <label hmtlFor="email">Email</label>
                    <div className="input-group">
                      <span className="input-group-addon">
                        <span className="glyphicon glyphicon-envelope" />
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      className="form-control"
                      required="required"
                    >
                      <option value="na" selected="">
                        Choose One:
                      </option>
                      <option value="service">Question</option>
                      <option value="suggestions">Meeting Demand</option>
                      <option value="product">Events</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="8"
                      cols="25"
                      required="required"
                      placeholder="Message"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn btn-primary pull-right" id="btnContactUs">
                    Skicka
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-4">
          <form />
          <legend>
            <span className="glyphicon glyphicon-globe" /> Our office
          </legend>
          <address>
            <strong>Vision Center SWEDEN, AB.</strong>
            <br />
            Handens Stationsväg 19, Handen<br />
            Stockholm, Sweden 13640<br />
            <abbr title="Phone">Telefonnummer:</abbr>
            +468 777 30 10
          </address>
          <address>
            <strong>Vision Center</strong>
            <br />
            <a href="mailto:sweden@visioncenter.se">sweden@visioncenter.se</a>
          </address>
        </div>
      </div>
    </div>
  </div>
);

export default Kontakt;
