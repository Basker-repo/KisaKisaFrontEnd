import React, { Component } from "react";
import startup from "../../assets/startup.png";
import cars from "../../assets/cars.png";
import event from "../../assets/event.png";
import blockchain from "../../assets/blockchain.png";
import fashion from "../../assets/fashion.png";
import travel from "../../assets/travel.png";
import technology from "../../assets/technology.png";
import miscellaneous from "../../assets/miscellaneous.png";
import business from "../../assets/business.png";
import crypto from "../../assets/crypto.png";
import bookmark from "../../assets/bookmark.png";
import science from "../../assets/science.png";
import cryptorate from "../../assets/cryptorate.png";
import support from "../../assets/support.png";
import active from "../../assets/active.png";
import active1 from "../../assets/active1.png";
import Card from "../Navbar_Components/card.js";
import "./kisa_header.css";
import "font-awesome/css/font-awesome.min.css";

export const Startups = "Startups";
export const Technology = "Technology";
export const Business = "Business";
export const Fashion = "Fashion";
export const Cars = "Cars";
export const Science = "Science";
export const Travel = "Travel";
export const Miscellaneous = "Miscellaneous";
export const Blockchain = "Blockchain";
export const Crypto = "Crypto";
export const Events = "Events";
export const Crypto_Rates = "Crypto_Rates";
export const Support = "Support";
export const Bookmark = "Bookmark";
export const Contact = "Contact";

const axios = require("axios");
export default class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu_data: "",
      items: ""
    };
  }

  componentDidMount() {
    var self = this;

    axios
      .all([
        axios.get(
          "http://kisakisa-1041517533.eu-central-1.elb.amazonaws.com/products"
        )
      ])
      .then(
        axios.spread(response => {
          var menu_data = [];
          for (var key in response.data.data) {
            var value = response.data.data[key];
            menu_data.push(value);
          }
          self.setState({ menu_data: menu_data }, () => {
            console.log(self.state.menu_data);
          });
        })
      );
  }

  filterList = event => {
    console.log("event", this.refs.search.value);

    this.setState({
      searchString: this.refs.search.value
    });

    let menu_data = this.state.menu_data;
    console.log("1", menu_data);
    let search = this.state.searchString;
    console.log("2", search);
    if (search) {
      menu_data = menu_data.filter(function(user) {
        return user.type.toLowerCase().match(search);
      });
      this.setState({
        menu_data: menu_data
      });
    }
  };

  handleMenuPage = value => {
    console.log("alert", value);
    var type = value;

    if (type == Blockchain) {
      window.location = "/block_chain";
    } else if (type == Startups) {
      window.location = "/startups";
    } else if (type == Science) {
      window.location = "/science";
    } else if (type == Cars) {
      window.location = "/cars";
    } else if (type == Miscellaneous) {
      window.location = "/miscellaneous";
    } else if (type == Crypto) {
      window.location = "/crypto";
    } else if (type == Fashion) {
      window.location = "/fashion";
    } else if (type == Travel) {
      window.location = "/travel";
    } else if (type == Business) {
      window.location = "/bussiness";
    } else if (type == Technology) {
      window.location = "/technology";
    } else if (type == Events) {
      window.location = "/events";
    } else if (type == Crypto_Rates) {
      window.location = "/financial_rates";
    } else if (type == Support) {
      window.location = "/technology";
    } else if (type == Contact) {
      window.location = "/contact";
    } else {
      window.location = "/arts";
    }
  };

  openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  openCity(event, cityName) {
    console.log(cityName);
    console.log(event);
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    event.target.className += " active";
  }
  render() {
    return (
      <div>
        <div id="mySidenav" className="sidenav">
          <a
            href="javascript:void(0)"
            className="closebtn"
            onClick={this.closeNav}
          >
            &times;
          </a>
          <div className="row menurow">
            <div
              className="column menu-left"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div>
              <div className="col-md-1">
                <p
                  className="menu-paragraph" onMouseOver={event => this.openCity(event, "Startups")}
                  onClick={() => this.handleMenuPage("Startups")}
                >
                  Startups
                  <img src={startup} style={{ marginLeft: "26%" }} />
                </p>
              </div>
              <div className="col-md-1">
                <p
                  className="menu-paragraph" onMouseOver={event => this.openCity(event, "Technology")}
                  onClick={() => this.handleMenuPage("Technology")}
                >
                  Technology
                  <img src={technology} style={{ marginLeft: "16%" }} />
                </p>
              </div>
              <div className="col-md-1">
                <p
                  className="menu-paragraph" onMouseOver={event => this.openCity(event, "Business")}
                  onClick={() => this.handleMenuPage("Business")}
                >
                  Business
                  <img src={business} style={{ marginLeft: "24%" }} />
                </p>
              </div>
              <div className="col-md-1">
                <p
                  className="menu-paragraph" onMouseOver={event => this.openCity(event, "Travel")}
                  onClick={() => this.handleMenuPage("Travel")}
                >
                  Travel
                  <img src={travel} style={{ marginLeft: "29%" }} />
                </p>
              </div>
              <div className="col-md-1">
                <p
                  className="menu-paragraph" onMouseOver={event => this.openCity(event, "Fashion")}
                  onClick={() => this.handleMenuPage("Fashion")}
                >
                  Fashion
                  <img src={fashion} style={{ marginLeft: "26%" }} />
                </p>
              </div>
              <div className="col-md-1">
                <p
                  className="menu-paragraph" onMouseOver={event => this.openCity(event, "Cars")}
                  onClick={() => this.handleMenuPage("Cars")}
                >
                  Cars
                  <img src={cars} style={{ marginLeft: "35%" }} />
                </p>
              </div>
              <div className="col-md-1">
                <p
                  className="menu-paragraph" onMouseOver={event => this.openCity(event, "Science")}
                  onClick={() => this.handleMenuPage("Science")}
                >
                  Science
                  <img src={science} style={{ marginLeft: "25%" }} />
                </p>
              </div>
              {/* <img src={active1} style={{width: "5%", marginLeft: "98%"}}/> */}
              <div className="col-md-1">
                <p
                  className="menu-paragraph" onMouseOver={event => this.openCity(event, "Miscellaneous")}
                  onClick={() => this.handleMenuPage("Miscellaneous")}
                >
                  Miscellaneous
                  <img src={miscellaneous} style={{ marginLeft: "7%" }} />
                </p>
              </div>
              <div
                className="col-md-1" 
                onClick={() => this.handleMenuPage("Blockchain")}
              >
                <p className="menu-paragraph" onMouseOver={event => this.openCity(event, "Blockchain")}>
                  Blockchain
                  <img src={blockchain} style={{ marginLeft: "18%" }} />
                </p>
              </div>
              <div
                className="col-md-1"
                onClick={() => this.handleMenuPage("Crypto")}
              >
                <p className="menu-paragraph" onMouseOver={event => this.openCity(event, "Crypto")}>
                  Crypto
                  <img src={crypto} style={{ marginLeft: "27%" }} />
                </p>
              </div>
              <div
                className="col-md-1"
                onClick={() => this.handleMenuPage("Events")}
              >
                <p className="menu-paragraph" onMouseOver={event => this.openCity(event, "Events")}>
                  Events
                  <img src={event} style={{ marginLeft: "29%" }} />
                </p>
              </div>
              <div
                className="col-md-1"
                onClick={() => this.handleMenuPage("Crypto_Rates")}
              >
                <p className="menu-paragraph" onMouseOver={event => this.openCity(event, "Crypto_Rates")}>
                  Crypto Rates
                  <img src={cryptorate} style={{ marginLeft: "10%" }} />
                </p>
              </div>
              <div
                className="col-md-1"
                onClick={() => this.handleMenuPage("Support")}
              >
                <p className="menu-paragraph" onMouseOver={event => this.openCity(event, "Crypto_Rates")}>
                  Support
                  <img src={support} style={{ marginLeft: "25%" }} />
                </p>
              </div>
              <div
                className="col-md-1"
                onClick={() => this.handleMenuPage("Events")}
              >
                <p className="menu-paragraph" onMouseOver={event => this.openCity(event, "Events")}>
                  Bookmark
                  <img src={bookmark} style={{ marginLeft: "21% " }} />
                </p>
              </div>
              </div>
            </div>
            <div
              className="column menu-right"
              style={{ backgroundColor: "#ea5524" }}
            >
               <div
                className="input-group menu-search"
              >
                <input
                  type="text"
                  ref="search"
                  className="form-control search-form"
                  placeholder="Search"
                  value={this.state.value}
                  onChange={this.filterList}
                />
                <span className="input-group-btn">
                  <button
                    className="btn  search-btn"
                    data-target="#search-form"
                    name="q"
                  >
                    <i className="fa fa-search" />
                  </button>
                </span>
              </div>
              <div className="menu-rightside">
                <p style={{ color: "white", fontSize: "25px" }}>Top Stories</p>
              </div>
             
              <div id="Startups" class="tabcontent">
              <div>
                {this.state.menu_data.length > 0 ? (
                  <div>
                    {this.state.menu_data.map((val, idx) => {
                      console.log(val.type, idx);
                      if (idx <= 4 && val.type == 'FEEDTYPE_STARTUPS') {
                        return (
                          <div key={idx}>
                            <Card menu_data={val} />
                          </div>
                        );
                      }
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
              </div>

              <div id="Technology" class="tabcontent">
              <div>
                {this.state.menu_data.length > 0 ? (
                  <div>
                    {this.state.menu_data.map((val, idx) => {
                      console.log(val.type, idx);
                      if (idx <= 4 && val.type == 'FEEDTYPE_ARTS') {
                        return (
                          <div key={idx}>
                            <Card menu_data={val} />
                          </div>
                        );
                      }
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
              </div>

              <div id="Business" class="tabcontent">
              <div>
                {this.state.menu_data.length > 0 ? (
                  <div>
                    {this.state.menu_data.map((val, idx) => {
                      console.log(val.type, idx);
                      if (idx <= 4 && val.type == 'FEEDTYPE_STARTUPS') {
                        return (
                          <div key={idx}>
                            <Card menu_data={val} />
                          </div>
                        );
                      }
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
              </div>
              <div id="Travel" class="tabcontent">
              <div>
                {this.state.menu_data.length > 0 ? (
                  <div>
                    {this.state.menu_data.map((val, idx) => {
                      console.log(val.type, idx);
                      if (idx <= 4 && val.type == 'FEEDTYPE_STARTUPS') {
                        return (
                          <div key={idx}>
                            <Card menu_data={val} />
                          </div>
                        );
                      }
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
              </div>

              <div id="Fashion" class="tabcontent">
              <div>
                {this.state.menu_data.length > 0 ? (
                  <div>
                    {this.state.menu_data.map((val, idx) => {
                      console.log(val.type, idx);
                      if (idx <= 4 && val.type == 'FEEDTYPE_STARTUPS') {
                        return (
                          <div key={idx}>
                            <Card menu_data={val} />
                          </div>
                        );
                      }
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
              </div>

              <div id="Cars" class="tabcontent">
              <div>
                {this.state.menu_data.length > 0 ? (
                  <div>
                    {this.state.menu_data.map((val, idx) => {
                      console.log(val.type, idx);
                      if (idx <= 4 && val.type == 'FEEDTYPE_STARTUPS') {
                        return (
                          <div key={idx}>
                            <Card menu_data={val} />
                          </div>
                        );
                      }
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
              </div>
              <div id="Science" class="tabcontent">
              <div>
                {this.state.menu_data.length > 0 ? (
                  <div>
                    {this.state.menu_data.map((val, idx) => {
                      console.log(val.type, idx);
                      if (idx <= 4 && val.type == 'FEEDTYPE_STARTUPS') {
                        return (
                          <div key={idx}>
                            <Card menu_data={val} />
                          </div>
                        );
                      }
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
              </div>

              <div id="Miscellaneous" class="tabcontent">
              <div>
                {this.state.menu_data.length > 0 ? (
                  <div>
                    {this.state.menu_data.map((val, idx) => {
                      console.log(val.type, idx);
                      if (idx <= 4 && val.type == 'FEEDTYPE_STARTUPS') {
                        return (
                          <div key={idx}>
                            <Card menu_data={val} />
                          </div>
                        );
                      }
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
              </div>
              <div id="Blockchain" class="tabcontent">
              <div>
                {this.state.menu_data.length > 0 ? (
                  <div>
                    {this.state.menu_data.map((val, idx) => {
                      console.log(val.type, idx);
                      if (idx <= 4 && val.type == 'FEEDTYPE_BLOCKCHAIN') {
                        return (
                          <div key={idx}>
                            <Card menu_data={val} />
                          </div>
                        );
                      }
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
              </div>

              <div id="Crypto" class="tabcontent">
              <div>
                {this.state.menu_data.length > 0 ? (
                  <div>
                    {this.state.menu_data.map((val, idx) => {
                      console.log(val.type, idx);
                      if (idx <= 4 && val.type == 'FEEDTYPE_STARTUPS') {
                        return (
                          <div key={idx}>
                            <Card menu_data={val} />
                          </div>
                        );
                      }
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
              </div>
              <div id="Events" class="tabcontent">
              <div>
                {this.state.menu_data.length > 0 ? (
                  <div>
                    {this.state.menu_data.map((val, idx) => {
                      console.log(val.type, idx);
                      if (idx <= 4 && val.type == 'FEEDTYPE_STARTUPS') {
                        return (
                          <div key={idx}>
                            <Card menu_data={val} />
                          </div>
                        );
                      }
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
              </div>
              <div id="Crypto_Rates" class="tabcontent">
              <div>
                {this.state.menu_data.length > 0 ? (
                  <div>
                    {this.state.menu_data.map((val, idx) => {
                      console.log(val.type, idx);
                      if (idx <= 4 && val.type == 'FEEDTYPE_STARTUPS') {
                        return (
                          <div key={idx}>
                            <Card menu_data={val} />
                          </div>
                        );
                      }
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
              </div>
            </div>
          </div>
        </div>
        <span onClick={this.openNav}>
          <img
            src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
            width="40px"
          />
        </span>
      </div>
    );
  }
}
