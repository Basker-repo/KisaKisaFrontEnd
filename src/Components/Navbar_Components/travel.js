import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Card from "../Navbar_Components/card.js";
import "bootstrap/dist/css/bootstrap.css";
import Constant_header from "./contant_header.js";
import FooterCard from "./FooterCards.js";

const axios = require("axios");

class Travel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      blockchain_data1: "",
      blockchain_data2: "",
      blockchain_data3: "",
      blockchain_data4: "",
      startup_1: "",
      startup_2: "",
      startup_3: "",
      startup_4: "",
      startup_5: "",
      stories_2: "",
      lengthOfSilder: ""
    };
  }

  componentDidMount() {
    var self = this;
    if (this.props.location.state != undefined) {
      let blockchain_data1 = [];
      var user = this.props.location.state.referrer;
      blockchain_data1.push(user);
      self.setState(
        {
          blockchain_data1: blockchain_data1,
          blockchain_data2: blockchain_data1,
          blockchain_data3: blockchain_data1,
          blockchain_data4: blockchain_data1
        },
        () => {
          console.log(self.state.blockchain_data1);
        }
      );
    } else {
      var self = this;
      axios
        .get(
          "http://kisakisa-1041517533.eu-central-1.elb.amazonaws.com/products"
        )
        .then(function(response) {
          var startup_1 = [];
          for (var key in response.data.data) {
            var value = response.data.data[key];

            // if(value.type == FEEDTYPE_STARTUPS){
            startup_1.push(value);
            var lengthOfData = startup_1.length;
            //  }
          }
          self.setState(
            {
              startup_1: startup_1,
              startup_2: startup_1,
              startup_3: startup_1,
              stories_2: startup_1,
              startup_1,
              startup_4: startup_1,
              startup_5: startup_1,
              lengthOfSilder: lengthOfData
            },
            () => {
              console.log(self.state.startup_5);
            }
          );
        });
    }
  }

  render() {
    if (this.props.location.state != undefined) {
      return (
        <div>
          <Constant_header />

          <div className="row">
            <div className="col-md-8">
              {this.state.blockchain_data1.length > 0 ? (
                <div className="container-fluid">
                  {this.state.blockchain_data1.map((val, idx) => {
                    console.log(val);
                    console.log(idx);
                    if (idx <= 0) {
                      return (
                        <div key={idx}>
                          <Card blockchain_data1={val} />
                        </div>
                      );
                    }
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="col-md-4" style={{ marginTop: "3%" }}>
              {this.state.blockchain_data2.length > 0 ? (
                <div className="container-fluid">
                  <h3 style={{ color: "black" }}>
                    Saudi Arabia launches special residency scheme for expats{" "}
                  </h3>
                  <h5>More stories</h5>
                  {this.state.blockchain_data2.map((val, idx) => {
                    if (idx <= 4) {
                      return (
                        <div className="row" key={idx}>
                          <Card blockchain_data2={val} />
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
          <div className="row">
            <div className="col-md-6">
              {this.state.blockchain_data3.length > 0 ? (
                <div className="container-fluid">
                  <h4 style={{ color: "black" }}>
                    More from <span style={{ color: "#008080" }}>startups</span>{" "}
                  </h4>
                  {this.state.blockchain_data3.map((val, idx) => {
                    if (idx <= 5) {
                      return (
                        <div key={idx}>
                          <Card blockchain_data3={val} />
                          <hr className="dash" />
                        </div>
                      );
                    }
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="col-md-6">
              {this.state.blockchain_data4.length > 0 ? (
                <div className="container-fluid">
                  <h4 style={{ color: "black" }}>
                    More from <span style={{ color: "#808080" }}>others</span>{" "}
                  </h4>
                  {this.state.blockchain_data4.map((val, idx) => {
                    if (idx <= 5) {
                      return (
                        <div key={idx}>
                          <Card blockchain_data4={val} />
                          <hr className="dash" />
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
      );
    } else {
      return (
        <div>
          <Constant_header />
          <div class="row">
            <div className="col-md-5">
              {this.state.startup_1.length > 0 ? (
                <div className="container-fluid">
                  <div className="row">
                    {this.state.startup_1.map((val, idx) => {
                      if (idx <= 0) {
                        return (
                          <div key={idx}>
                            <Card startup_1={val} />
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="col-md-2 vertical" />

            <div className="col-md-5">
              {this.state.startup_2.length > 0 ? (
                <div className="row" style={{ width: "140%" }}>
                  {this.state.startup_2.map((val, idx) => {
                    if (idx <= 2) {
                      return (
                        <div className="col-md-4" key={idx}>
                          <Card startup_2={val} />
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

          <div class="horizontal-dotter-line-2" />

          {this.state.startup_3.length > 0 ? (
            <div style={{ margin: "3em" }} className="container-fluid">
              <div className="row" style={{ width: "98%" }}>
                {this.state.startup_3.map((val, idx) => {
                  if (idx <= 2) {
                    return (
                      <div className="col-4" key={idx}>
                        <Card startup_3={val} />
                        <div className="vr" />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          ) : (
            ""
          )}

          <div class="horizontal-line-1" />

          <nav>
            <div>
              <section class="card-slider">
                {this.state.startup_5.length > 0 &&
                  this.state.startup_5.map((val, idx) => {
                    return idx <= this.state.lengthOfSilder ? (
                      <div class="col-xs-3 col-sm-3 col-md-3">
                        <Card startup_5={val} />
                      </div>
                    ) : (
                      ""
                    );
                  })}
              </section>
            </div>
          </nav>

          <div class="horizontal-line-2" />

          {this.state.stories_2.length > 0 ? (
            <div style={{ marginTop: 50 }}>
              <div className="container-fluid">
                <div className="row">
                  {this.state.stories_2.map((val, idx) => {
                    if (idx <= 5) {
                      return (
                        <div className="col-4" key={idx}>
                          <FooterCard data={val} />
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      );
    }
  }
}

export default Travel;
