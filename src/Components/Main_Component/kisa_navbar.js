import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import "./kisa_navbar.css";
import Top_Stories from "../Navbar_Components/top_Stories.js";
import Startups from "../Navbar_Components/startups.js";
import Technology from "../Navbar_Components/technology.js";
import Travel from "../Navbar_Components/travel.js";
import Fashion from "../Navbar_Components/fashion.js";
import Cars from "../Navbar_Components/cars.js";
import Science from "../Navbar_Components/science.js";
import Bussiness from "../Navbar_Components/bussiness.js";
import Miscellaneous from "../Navbar_Components/miscellaneous.js";
import Arts from "../Navbar_Components/arts.js";
import BlockChain from "../Navbar_Components/block_chain.js";
import Crypto from "../Navbar_Components/crypto.js";
import Events from "../Navbar_Components/events.js";
import FinancialRates from "../Navbar_Components/financial_rates.js";
// import Chart  from '../Navbar_Components/chart.js';
import Contact from "../header_components/contact.js";

class kisa_Navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav class="kisa-nav-font">
            <ul>
              <li>
                <NavLink activeClassName="current" exact to={"/"}>
                  TopStories
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="current" exact to={"/startups"}>
                  Startups
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="current" exact to={"/technology"}>
                  Technology
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="current" exact to={"/travel"}>
                  Travel
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="current" exact to={"/fashion"}>
                  Fashion
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="current" exact to={"/cars"}>
                  Cars
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="current" exact to={"/science"}>
                  Science
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="current" exact to={"/bussiness"}>
                  Bussiness
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="current" exact to={"/miscellaneous"}>
                  Miscellaneous
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="current" exact to={"/arts"}>
                  Arts
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="current" exact to={"/block_chain"}>
                  BlockChain
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="current" exact to={"/crypto"}>
                  Crypto
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="current" exact to={"/events"}>
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="current"
                  exact
                  to={"/financial_rates"}
                >
                  FinancialRates
                </NavLink>
              </li>
              <div class="horizontal-line-3" />
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Top_Stories} />
            <Route path="/startups" component={Startups} />
            <Route path="/technology" component={Technology} />
            <Route path="/travel" component={Travel} />
            <Route path="/fashion" component={Fashion} />
            <Route path="/cars" component={Cars} />
            <Route path="/science" component={Science} />
            <Route path="/bussiness" component={Bussiness} />
            <Route path="/miscellaneous" component={Miscellaneous} />
            <Route path="/arts" component={Arts} />
            <Route path="/block_chain" component={BlockChain} />
            <Route path="/crypto" component={Crypto} />
            <Route path="/events" component={Events} />
            <Route path="/financial_rates" component={FinancialRates} />
            <Route path="/contact" component={Contact} />
            {/* <Route path='/chart' component={Chart} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default kisa_Navbar;
