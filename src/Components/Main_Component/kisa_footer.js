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
import footerlogo from "../../assets/footerlogo.png";
import contact from "../header_components/contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

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

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleFooterPage = this.handleFooterPage.bind(this);
  }
  handleFooterPage(value) {
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
  }

  render() {
    return (
      <div>
        <div className="overlap">
          <div className="row footerimg">
            <div className="col-md-1 footerrow1">
              <p>Startups</p>
              <img
                src={startup}
                onClick={() => this.handleFooterPage("Startups")}
              />
            </div>
            <div className="col-md-1 footerrow1">
              <p>Technology</p>
              <img
                src={technology}
                onClick={() => this.handleFooterPage("Technology")}
              />
            </div>
            <div className="col-md-1 footerrow1">
              <p>Business</p>
              <img
                src={business}
                onClick={() => this.handleFooterPage("Business")}
              />
            </div>
            <div className="col-md-1 footerrow1">
              <p>Travel</p>
              <img
                src={travel}
                onClick={() => this.handleFooterPage("Travel")}
              />
            </div>
            <div className="col-md-1 footerrow1">
              <p>Fashion</p>
              <img
                src={fashion}
                onClick={() => this.handleFooterPage("Fashion")}
              />
            </div>
            <div className="col-md-1 footerrow1">
              <p>Cars</p>
              <img src={cars} onClick={() => this.handleFooterPage("Cars")} />
            </div>
            <div className="col-md-1 footerrow1">
              <p>Science</p>
              <img
                src={science}
                onClick={() => this.handleFooterPage("Science")}
              />
            </div>
          </div>
          <div className="row footerimg footerrow2">
            <div className="col-md-1">
              <p>Miscellaneous</p>
              <img
                src={miscellaneous}
                onClick={() => this.handleFooterPage("Miscellaneous")}
              />
            </div>
            <div className="col-md-1">
              <p>Blockchain</p>
              <img
                src={blockchain}
                onClick={() => this.handleFooterPage("Blockchain")}
              />
            </div>
            <div className="col-md-1">
              <p>Crypto</p>
              <img
                src={crypto}
                onClick={() => this.handleFooterPage("Crypto")}
              />
            </div>
            <div className="col-md-1">
              <p>Events</p>
              <img
                src={event}
                onClick={() => this.handleFooterPage("Events")}
              />
            </div>
            <div className="col-md-1">
              <p>Crypto Rates</p>
              <img
                src={cryptorate}
                onClick={() => this.handleFooterPage("Crypto_Rates")}
              />
            </div>
            <div className="col-md-1">
              <p>Support</p>
              <img
                src={support}
                onClick={() => this.handleFooterPage("Support")}
              />
            </div>
            <div className="col-md-1">
              <p>Bookmark</p>
              <img
                src={bookmark}
                onClick={() => this.handleFooterPage("Bookmark")}
              />
            </div>
          </div>
        </div>
        <div id="footer" style={{ marginTop: "-3em" }}>
          <div>
            <p className="footer-paragraph">
              © 2019 KısaKısa Company
              <img className="footer_logo-css" src={footerlogo} alt="logo" />
              <span>
                <ul className="contactclass">
                  <li>
                    <a
                      href="#"
                      style={{ color: "white" }}
                      onClick={() => this.handleFooterPage("Contact")}
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{ color: "white" }}
                      onClick={() => this.handleFooterPage("Contact")}
                    >
                      Advertise
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{ color: "white" }}
                      onClick={() => this.handleFooterPage("Contact")}
                    >
                      Help
                    </a>
                  </li>
                </ul>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
