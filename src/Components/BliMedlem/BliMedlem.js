import React from 'react';
import './BliMedlem.css';

const BliMedlem = () => (
  <div className="container col-xl-3">
    <form className="form-signin" />
    <h2 className="form-signin-heading">Please sign in</h2>
    <label for="inputEmail" className="sr-only">
      Namn och Förnamn
    </label>
    <input
      type="namn"
      id="namn"
      className="form-control"
      placeholder="Namn och Förnamn"
      required
      autofocus
    />
    <label for="inputEmail" className="sr-only">
      Email address
    </label>
    <input
      type="email"
      id="inputEmail"
      className="form-control"
      placeholder="Email address"
      required
      autofocus
    />
    <label for="inputPassword" class="sr-only">
      Password
    </label>
    <input
      type="password"
      id="inputPassword"
      className="form-control"
      placeholder="Password"
      required
    />
    <div className="checkbox">
      <label>
        <input type="checkbox" value="remember-me" /> Remember me
      </label>
    </div>
    <button className="btn btn-lg btn-primary btn-block" type="submit">
      Sign in
    </button>
  </div>
);

export default BliMedlem;

{
  /* namn efternamn e-mail blimedlem address samma telefonnummer   */
}
