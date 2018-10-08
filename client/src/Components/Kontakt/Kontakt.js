  import React from 'react';
  import './Kontakt.css';
  import axios from "axios";

  class Kontakt extends React.Compoennt {
    constructor(props){
      super(props)
      this.state = {
        name: "",
        surname: "",
        message: "",
        email: "",
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSumit = this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    async handleSubmit = (e) => {
      e.preventDefault();
      const {name, surbname, email, message} = this.state
      const form  = await axios.post("/api/form", {
        name,
        surname,
        message,
        email
      })
    }
      render() {
        return(
          <div className="container">
            <h2 className="container">Kontakt</h2>
            <div className="container">
              <div className="row">
                <div className="container col-md-8">
                  <div className="well well-sm">
                    <form onSubmit={this.handleSubmit}>
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
                              onChange={this.handleChange}
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
                                onChange={this.handleChange}
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
                              onChange={this.handleChange}
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
                  <address>
                    <strong>VISION CENTER SWEDEN</strong>
                    <br />
                    Handenterminalen 4, 9 tr.<br />
                    13640 Handen <br />
                    Stockholm, Sweden <br />
                    <abbr title="Phone">
                      <strong>Mobil:</strong>
                    </abbr>
                    +467 229 00 965
                    <br />
                    <abbr title="Phone">
                      <strong>Kontor:</strong>
                    </abbr>
                    +468 777 30 10
                  </address>
                  <address>
                    <strong>Orgnr: </strong>802448-2989
                    <br />
                    <strong>Pg: </strong>530547-9 <br />
                    <strong>Bg: </strong> 460-27-69
                  </address>
                  <address>
                    <strong>E-Post:</strong>
                    <br />
                    <a href="mailto:sweden@visioncenter.se">sweden@visioncenter.se</a>
                  </address>
                </div>
              </div>
            </div>
        </div>
      )
    }
  }


  export default Kontakt;
