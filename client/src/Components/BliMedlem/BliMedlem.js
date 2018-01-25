/* eslint-disable */
import React from 'react';
import './BliMedlem.css';

const BliMedlem = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h2>Ansök För Bli Medlem: </h2>
        <p>
          Medlemsinformation Ordinariemedlem 500 kr/år, för dig som har fyllt 26 år. Ungdomsmedlem
          150 kr/år, för dig mellan 13 – 25 år. Betalningsalternativ:
          <br />
          <br /> 1) Betala medlemsavgiften kontant vid VISION CENTER SWEDEN's lokalen.
          <br />
          <br />
          2) Inbetala medlemsavgiften till vårt PlusGiro 53 05 47-9 eller Bankgiro 460-2769 och
          uppge dina uppgifter. För ungdomar under 18 år Målsmans namn telefon.
        </p>
      </div>

      <div className="col-md-5">
        <form method="POST">
          <div className="container">
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

          <div className="container form-group">
            <label htmlFor="subject">Medlemstyp</label>
            <select id="medlemstyp" name="medlemstyp" className="form-control" required="required">
              <option value="na" selected="">
                Choose One:
              </option>
              <option value="ordinariemedlem">Ordinariemedlem 150 kr/år</option>
              <option value="ungdomsmedlem">Ungdomsmedlem 50 kr/år</option>
            </select>
          </div>

          <div className="container form-group">
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

          <div className="container">
            <button type="submit" className="btn btn-primary pull-right" id="btnContactUs">
              Skicka
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default BliMedlem;
