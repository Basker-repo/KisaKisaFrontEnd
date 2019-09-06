import React, { Component } from "react";
import Card from "../Navbar_Components/card.js";
import "bootstrap/dist/css/bootstrap.css";
import FooterCard from "./FooterCards.js";
import Constant_header from "./contant_header.js";
import Blockchain from "./block_chain.js";
import { gapi } from "gapi-script";
import loader from "../../assets/loader.gif";
import Loaderimg from "../../assets/loaderimg.jpeg";

const axios = require("axios");
class Top_stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      data1: "",
      data2: "",
      stories_1: "",
      stories_2: "",
      stories_3: "",
      img_src: "",
      value: "",
      lengthOfSilder: "",
      loading: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    var value = this.state.value;
    event.preventDefault();
    alert("A name was submitted: " + value);
    this.setState({
      value: ""
    });
    // axios.post('/user', this.state)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
  }

  componentDidMount() {
    var self = this;

    axios
      .all([
        axios.get(
          "http://kisakisa-1041517533.eu-central-1.elb.amazonaws.com/products"
        ),
        // axios.get('https://api.apixu.com/v1/current.json?key=55cdc0d4d82c4aafbf610228190508&q=Turkey')
        axios.get(
          "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/6845a56131f8adb87c9d82e51f8d7239/37.8267,-122.4233"
        )
      ])
      .then(
        axios.spread((response, weather) => {
          // do something with both responses

          var data = [];
          for (var key in response.data.data) {
            var value = response.data.data[key];
            data.push(value);
            var lengthOfData = data.length;
          }
        console.log("response", data)
          self.setState(
            {
              loading: false,
              data: data,
              data1: data,
              data2: data,
              stories_1: data,
              stories_2: data,
              stories_3: data,
              img_src: data,
              lengthOfSilder: lengthOfData
            },
            () => {}
          );
        })
      );
  }
  render() {
    let data;
    if (this.state.loading) {
      data = (
        <img
          src={loader}
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
      );
    } else {
      data = (
        <div>
          <Constant_header />


          <div class="rowflexes flexsflexs">
     <div class="felxcolumn col-xs-12 col-sm-6">
       <div class="containerflex">
    <img className="imgflex" src={Loaderimg} width="200px" height="200px"/>
    <p class="Palign">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aenean est lectus, venenatis sit amet nisl sed, molestie 
    interdum elit. Proin maximus fermentum rhoncus. 
    Vestibulum blandit ligula ligula. Mauris volutpat cursus 
    enim eu iaculis. Duis condimentum ante sed dolor lacinia 
    imperdiet. Phasellus felis orci, dictum sed elit sed, 
    lobortis congue sem. Etiam at tortor diam. 
    </p>
</div>
       
  </div>
  <div class="containerflex">
    <img className="imgflex" src={Loaderimg} width="200px" height="200px"/>
            <p class="Palign">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aenean est lectus, venenatis sit amet nisl sed, molestie 
    interdum elit. Proin maximus fermentum rhoncus. 
    Vestibulum blandit ligula ligula. Mauris volutpat cursus 
    enim eu iaculis. Duis condimentum ante sed dolor lacinia 
    imperdiet. Phasellus felis orci, dictum sed elit sed, 
    lobortis congue sem. Etiam at tortor diam. 
    </p>
</div>
     
</div>
          {/* <div class="row">
            <div className="col-md-6">
              {" "}
              {this.state.data.length > 0 ? (
                <div className="container-fluid">
                  <div className="row">
                    {" "}
                    {this.state.data.map((val, idx) => {
                      if (idx <= 0) {
                        return (
                          <div key={idx}>
                            <Card data={val} />{" "}
                          </div>
                        );
                      }
                    })}{" "}
                  </div>{" "}
                </div>
              ) : (
                ""
              )}{" "}
            </div>
            <div class="vertical1" />
            <div className="col-md-6">
              {" "}
              {this.state.data1.length > 0 ? (
                <div className="container-fluid">
                  <div className="row">
                    {" "}
                    {this.state.data1.map((val, idx) => {
                      if (idx <= 0) {
                        return (
                          <div key={idx}>
                            <Card data1={val} />{" "}
                          </div>
                        );
                      }
                    })}{" "}
                  </div>{" "}
                </div>
              ) : (
                ""
              )}{" "}
            </div>{" "}
          </div> */}
          <div class="horizontal-line-1" />
          <nav>
            <div>
              <section class="card-slider">
                {" "}
                {this.state.data2.length > 0 &&
                  this.state.data2.map((val, idx) => {
                    return idx <= this.state.lengthOfSilder ? (
                      <div class="col-xs-3 col-sm-3 col-md-3">
                        <Card data2={val} />{" "}
                      </div>
                    ) : (
                      ""
                    );
                  })}{" "}
              </section>{" "}
            </div>{" "}
          </nav>
          <div class="horizontal-line-2" />
          {this.state.stories_2.length > 0 ? (
            <div
              style={{
                marginTop: "50"
              }}
            >
              <div className="container-fluid">
                <div className="row footercard-box">
                  {" "}
                  {this.state.stories_2.map((val, idx) => {
                    if (idx <= 5) {
                      return (
                        <div className="col-4" key={idx}>
                          <FooterCard data={val} />{" "}
                        </div>
                      );
                    }
                  })}{" "}
                </div>{" "}
              </div>{" "}
            </div>
          ) : (
            ""
          )}{" "}
          <div class="horizontal-line-1-1" />
          <div className="emailcontainer">
            <div className="row valign-wrapper">
              <div className="col s6 offset-s3 valign">
                <div className="card blue-grey darken-1 cardcontainer1">
                  <div className="card-content white-text cardcontainer">
                    <form onSubmit={this.handleSubmit}>
                      <h1> Get Full Access </h1>{" "}
                      <p>
                        To enjoy the every features of KIsa Kisa sign up today
                        and become our premium user.{" "}
                      </p>{" "}
                      <input
                        className="textfield"
                        type="email"
                        placeholder="Email"
                        id="mainInput"
                        value={this.state.value}
                        onChange={this.handleChange}
                      />{" "}
                      <button
                        type="submit"
                        value="Signup"
                        className="signupbtn"
                        style={{
                          verticalAlign: "middle"
                        }}
                      >
                        <span> Signup </span>{" "}
                      </button>{" "}
                    </form>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      );
    }
    return (
      <div>
        <div> {data} </div>{" "}
      </div>
    );
  }
}

export default Top_stories;
