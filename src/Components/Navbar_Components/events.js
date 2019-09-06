import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Card from "../Navbar_Components/card.js";
import "bootstrap/dist/css/bootstrap.css";
import Constant_header from "./contant_header.js";
import FooterCard from "./FooterCards.js";

const axios = require("axios");

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      event_data1: "",
      event_data2: "",
      event_data3: "",
      event_data4: "",
      event_data: ""
    };
  }

  componentDidMount() {
    var self = this;
    if (this.props.location.state != undefined) {
      let event_data1 = [];
      var user = this.props.location.state.referrer;
      event_data1.push(user);
      self.setState(
        {
          event_data1: event_data1,
          event_data2: event_data1,
          event_data3: event_data1,
          event_data4: event_data1
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
          var event_data = [];
          for (var key in response.data.data) {
            var value = response.data.data[key];

            // if(value.type == FEEDTYPE_STARTUPS){
            event_data.push(value);
            //  }
          }
          self.setState({ event_data: event_data }, () => {
            console.log(self.state.event_data);
          });
        });
    }
  }

  render() {
    if (this.props.location.state != undefined) {
      return (
        <div>
          <Constant_header />
          <h1 style={{ textAlign: "center" }}>Upcoming events - 2020</h1>
        </div>
      );
    } else {
      return (
        <div>
          <Constant_header />
          <h1 style={{ textAlign: "center" }}>Upcoming events - 2020</h1>
          <div>
            {this.state.event_data.length > 0 ? (
              <div className="container-fluid">
                <div className="row">
                  {this.state.event_data.map((val, idx) => {
                    if (idx <= 6) {
                      return (
                        <div key={idx}>
                          <Card event_data={val} />
                          <div class="eventhorizontal-line-1" />
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
        </div>
      );
    }
  }
}

export default Events;
