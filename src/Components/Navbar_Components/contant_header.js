import React from "react";
import Card from "./card.js";
import Sunlogo from "../../assets/sun.png";

const axios = require("axios");

class Constant_header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datum: "",
      list: ["Bitcoin", "Ethereum"],
      weathertemp: "",
      weathername: ""
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
        axios.spread((response, weather) => {
          var data = [];
          for (var key in response.data.data) {
            var value = response.data.data[key];
            data.push(value);
            var lengthOfData = data.length;
          }
          // var weathertemp = weather.data.main.temp;
          // var weathername = weather.data.name;
          //  console.log(weather);
          self.setState({ datum: data, list: self.state.list }, () => {});
        })
      );
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-9 ">
            {this.state.datum.length > 0 ? (
              <div className="row flex-wrapp-override">
                {this.state.datum.map((val, idx) => {
                  if (idx <= 2) {
                    return (
                      <div key={idx}>
                        <Card className="col-md-3" datum={val} />
                      </div>
                    );
                  }
                })}
              </div>
            ) : (
              ""
            )}
          </div>
          <div class="col-md-1 fin-rate">
            {this.state.list.map((val, idx) => {
              if (idx <= 2) {
                return (
                  <div key={idx}>
                    <Card className="col-md-3" list={val} />
                  </div>
                );
              }
            })}
          </div>
          <div className="col-md-1 weather">
            <div className="col-md-12">
              <img src={Sunlogo} alt="sun-logo" />
            </div>
            <div className="col-md-12">
              <a>
                <span>India</span>
                <span className="weather-temp">90</span>
              </a>
            </div>
          </div>
        </div>
        <div className="horizontal-line-4" />
      </div>
    );
  }
}

export default Constant_header;
