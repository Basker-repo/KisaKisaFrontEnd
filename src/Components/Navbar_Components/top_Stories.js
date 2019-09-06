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
          {/* <Constant_header /> */}


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
