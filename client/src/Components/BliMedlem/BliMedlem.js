/* eslint-disable */
import React from 'react';
import './BliMedlem.css';

const BliMedlem = () => (
  <div className="container">
    <h2 className="col-md-4">Ansök För Bli Medlem: </h2>
    <p className="col-md-6">
      Medlemsinformation Ordinariemedlem 500 kr/år, för dig som har fyllt 26 år. Ungdomsmedlem 150
      kr/år, för dig mellan 13 – 25 år. Betalningsalternativ: <br /> 1) Betala medlemsavgiften
      kontant vid VISION CENTER SWEDEN's lokalen. 2) Inbetala medlemsavgiften till vårt PlusGiro 53
      05 47-9 eller Bankgiro 460-2769 och uppge dina uppgifter. För ungdomar under 18 år Målsmans
      namn telefon.
    </p>
    <div className="row">
      <div className="container col-md-8">
        <div className="well well-sm">
          <form method="POST">
            <div className="container col-md-6">
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
                <label hmtlFor="phone">Telefonnummer</label>
                <div className="input-group">
                  <span className="input-group-addon">
                    <span className="glyphicon glyphicon-envelope" />
                  </span>
                  <input
                    type="phone"
                    className="form-control"
                    id="phone"
                    placeholder="Phone number"
                    required="required"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Postnummer</label>
                <input
                  type="postnummer"
                  className="form-control"
                  id="postnummer"
                  placeholder="Postnummer"
                  required="required"
                />
              </div>
            </div>
            <div className="container col-lg-6 form-group">
              <label htmlFor="subject">Medlemstyp</label>
              <select
                id="medlemstyp"
                name="medlemstyp"
                className="form-control"
                required="required"
              >
                <option value="na" selected="">
                  Choose One:
                </option>
                <option value="ordinariemedlem">Ordinariemedlem 150 kr/år</option>
                <option value="ungdomsmedlem">Ungdomsmedlem 50 kr/år</option>
              </select>
            </div>
            <div className="container col-md-6">
              <div className="form-group">
                <label htmlFor="name">Address</label>
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="8"
                  cols="25"
                  required="required"
                  placeholder="Address"
                />
              </div>
            </div>
            <div className="container col-md-6">
              <button type="submit" className="btn btn-primary pull-right" id="btnContactUs">
                Skicka
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default BliMedlem;
