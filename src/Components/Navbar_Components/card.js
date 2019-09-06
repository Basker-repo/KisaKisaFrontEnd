import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { KeyObject } from "crypto";
import { NONAME } from "dns";

export const FEEDTYPE_BLOCKCHAIN = "FEEDTYPE_BLOCKCHAIN";
export const FEEDTYPE_STARTUPS = "FEEDTYPE_STARTUPS";
export const FEEDTYPE_SCIENCE = "FEEDTYPE_SCIENCE";
export const FEEDTYPE_CARS = "FEEDTYPE_CARS";
export const FEEDTYPE_MISCELLANEOUS = "FEEDTYPE_MISCELLANEOUS";
export const FEEDTYPE_CRYPTO = "FEEDTYPE_CRYPTO";
export const FEEDTYPE_FASHION = "FEEDTYPE_FASHION";
export const FEEDTYPE_TRAVEL = "FEEDTYPE_TRAVEL";
export const FEEDTYPE_BUSINESS = "FEEDTYPE_BUSINESS";
export const FEEDTYPE_TECHNOLOGY = "FEEDTYPE_TECHNOLOGY";
export const FEEDTYPE_ARTS = "FEEDTYPE_ARTS";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: "",
      type: "",
      profile_1: "",
      type_1: "",
      profile_2: "",
      type_2: "",
      profile_3: "",
      type_3: "",
      profile_4: "",
      type_4: ""
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePageChange1 = this.handlePageChange1.bind(this);
    this.handlePageChange2 = this.handlePageChange2.bind(this);
    this.handlePageChange3 = this.handlePageChange3.bind(this);
    this.start_handlePageChange = this.start_handlePageChange.bind(this);
    this.start_handlePageChange1 = this.start_handlePageChange1.bind(this);
    this.start_handlePageChange2 = this.start_handlePageChange2.bind(this);
    this.event_handlePageChange = this.event_handlePageChange.bind(this);

  }
  event_handlePageChange(){
    var type = this.props.event_data.type;
    var data = this.props;

    this.setState({
      profile: this.props.event_data,
      type: this.props.event_data.type
    });
  }
  start_handlePageChange() {
    var type = this.props.startup_2.type;
    var data = this.props;

    this.setState({
      profile: this.props.startup_2,
      type: this.props.startup_2.type
    });
  }

  start_handlePageChange1() {
     var type = this.props.startup_3.type;
      var data = this.props;

      this.setState({
        profile: this.props.startup_3,
        type: this.props.startup_3.type
      });
  }
  start_handlePageChange2(){
   var type = this.props.startup_5.type;
  var data = this.props;

  this.setState({
    profile: this.props.startup_5,
    type: this.props.startup_5.type
  });
  }
  
  handlePageChange() {
    if (this.props.data != undefined) {
      var type = this.props.data.type;
      var data = this.props;

      this.setState({
        profile: this.props.data,
        type: this.props.data.type
      });
    } else {
      var type = this.props.startup_1.type;
      var data = this.props;

      this.setState({
        profile: this.props.startup_1,
        type: this.props.startup_1.type
      });
    }
  }

  handlePageChange1() {
      var type = this.props.data1.type;
      var data = this.props;

      this.setState({
        profile: this.props.data1,
        type: this.props.data1.type
      });
     
  }

  handlePageChange2() {
    var type = this.props.datum.type;
    var data = this.props;

    this.setState({
      profile: this.props.datum,
      type: this.props.datum.type
    });
  }

  handlePageChange3() {
      var type = this.props.data2.type;
      var data = this.props;
  
      this.setState({
        profile: this.props.data2,
        type: this.props.data2.type
      });
  }
  // start_handlePageChange() {
  //   var type = this.props.data2.type;
  //   var data = this.props;

  //   this.setState({
  //     profile: this.props.data2,
  //     type: this.props.data2.type
  //   });
  // }

  getTypeToColor(type) {
    var color = "";
    switch (type) {
      case FEEDTYPE_ARTS:
        color = "#1f1ffa";
        break;
      case FEEDTYPE_TRAVEL:
        color = "#e6194b";
        break;
      case FEEDTYPE_STARTUPS:
        color = "#469990";
        break;
      case FEEDTYPE_SCIENCE:
        color = "#ffe119";
        break;
      case FEEDTYPE_CARS:
        color = "#42d4f4";
        break;
      case FEEDTYPE_BUSINESS:
        color = "#42d4f4";
        break;
      case FEEDTYPE_BLOCKCHAIN:
        color = "#42d4f4";
        break;
    }
    return color;
  }

  getTypeToString(type) {
    var val = "";
    switch (type) {
      case FEEDTYPE_ARTS:
        val = "Arts";
        break;
      case FEEDTYPE_TRAVEL:
        val = "Travel";
        break;
      case FEEDTYPE_STARTUPS:
        val = "Startups";
        break;
      case FEEDTYPE_SCIENCE:
        val = "Science";
        break;
      case FEEDTYPE_CARS:
        val = "Cars";
        break;
      case FEEDTYPE_BUSINESS:
        val = "Business";
        break;
      case FEEDTYPE_BLOCKCHAIN:
        val = "Blockchain";
        break;
    }
    return val;
  }

  render() {
    const { type, profile } = this.state;
    const { type_1, profile_1 } = this.state;
    const { type_2, profile_2 } = this.state;
    const { type_3, profile_3 } = this.state;
    const { type_4, profile_4 } = this.state;


    if (type == FEEDTYPE_STARTUPS) {
      return (
        <Redirect
          to={{
            pathname: "/startups",
            state: { referrer: this.state.profile }
          }}
        />
      );
    } else if (type == FEEDTYPE_ARTS) {
      return (
        <Redirect
          to={{
            pathname: "/arts",
            state: { referrer: this.state.profile }
          }}
        />
      );
    } else if (type == FEEDTYPE_BLOCKCHAIN) {
      return (
        <Redirect
          to={{
            pathname: "/block_chain",
            state: { referrer: this.state.profile }
          }}
        />
      );
    } else if (type == FEEDTYPE_SCIENCE) {
      return (
        <Redirect
          to={{
            pathname: "/science",
            state: { referrer: this.state.profile }
          }}
        />
      );
    } else if (type == FEEDTYPE_CARS) {
      return (
        <Redirect
          to={{
            pathname: "/cars",
            state: { referrer: this.state.profile }
          }}
        />
      );
    } else if (type == FEEDTYPE_MISCELLANEOUS) {
      return (
        <Redirect
          to={{
            pathname: "/miscellaneous",
            state: { referrer: this.state.profile }
          }}
        />
      );
    } else if (type == FEEDTYPE_CRYPTO) {
      return (
        <Redirect
          to={{
            pathname: "/crypto",
            state: { referrer: this.state.profile }
          }}
        />
      );
    } else if (type == FEEDTYPE_FASHION) {
      return (
        <Redirect
          to={{
            pathname: "/fashion",
            state: { referrer: this.state.profile }
          }}
        />
      );
    } else if (type == FEEDTYPE_TRAVEL) {
      return (
        <Redirect
          to={{
            pathname: "/travel",
            state: { referrer: this.state.profile }
          }}
        />
      );
    } else if (type == FEEDTYPE_BUSINESS) {
      return (
        <Redirect
          to={{
            pathname: "/bussiness",
            state: { referrer: this.state.profile }
          }}
        />
      );
    } else if (type == FEEDTYPE_TECHNOLOGY) {
      return (
        <Redirect
          to={{
            pathname: "/technology",
            state: { referrer: this.state.profile }
          }}
        />
      );
    } else if (type == FEEDTYPE_ARTS) {
      return (
        <Redirect
          to={{
            pathname: "/arts",
            state: { referrer: this.state.profile }
          }}
        />
      );
    }

    if (type_1 == FEEDTYPE_STARTUPS) {
      return (
        <Redirect
          to={{
            pathname: "/startups",
            state: { referrer: this.state.profile_1 }
          }}
        />
      );
    } else if (type_1 == FEEDTYPE_ARTS) {
      return (
        <Redirect
          to={{
            pathname: "/arts",
            state: { referrer: this.state.profile_1 }
          }}
        />
      );
    } else if (type_1 == FEEDTYPE_BLOCKCHAIN) {
      return (
        <Redirect
          to={{
            pathname: "/block_chain",
            state: { referrer: this.state.profile_1 }
          }}
        />
      );
    } else if (type_1 == FEEDTYPE_SCIENCE) {
      return (
        <Redirect
          to={{
            pathname: "/science",
            state: { referrer: this.state.profile_1 }
          }}
        />
      );
    } else if (type_1 == FEEDTYPE_CARS) {
      return (
        <Redirect
          to={{
            pathname: "/cars",
            state: { referrer: this.state.profile_1 }
          }}
        />
      );
    } else if (type_1 == FEEDTYPE_MISCELLANEOUS) {
      return (
        <Redirect
          to={{
            pathname: "/miscellaneous",
            state: { referrer: this.state.profile_1 }
          }}
        />
      );
    } else if (type_1 == FEEDTYPE_CRYPTO) {
      return (
        <Redirect
          to={{
            pathname: "/crypto",
            state: { referrer: this.state.profile_1 }
          }}
        />
      );
    } else if (type_1 == FEEDTYPE_FASHION) {
      return (
        <Redirect
          to={{
            pathname: "/fashion",
            state: { referrer: this.state.profile_1 }
          }}
        />
      );
    } else if (type_1 == FEEDTYPE_TRAVEL) {
      return (
        <Redirect
          to={{
            pathname: "/travel",
            state: { referrer: this.state.profile_1 }
          }}
        />
      );
    } else if (type_1 == FEEDTYPE_BUSINESS) {
      return (
        <Redirect
          to={{
            pathname: "/bussiness",
            state: { referrer: this.state.profile_1 }
          }}
        />
      );
    } else if (type_1 == FEEDTYPE_TECHNOLOGY) {
      return (
        <Redirect
          to={{
            pathname: "/technology",
            state: { referrer: this.state.profile_1 }
          }}
        />
      );
    } else if (type_1 == FEEDTYPE_ARTS) {
      return (
        <Redirect
          to={{
            pathname: "/arts",
            state: { referrer: this.state.profile_1 }
          }}
        />
      );
    }

    if (type_2 == FEEDTYPE_STARTUPS) {
      return (
        <Redirect
          to={{
            pathname: "/startups",
            state: { referrer: this.state.profile_2 }
          }}
        />
      );
    } else if (type_2 == FEEDTYPE_ARTS) {
      return (
        <Redirect
          to={{
            pathname: "/arts",
            state: { referrer: this.state.profile_2 }
          }}
        />
      );
    } else if (type_2 == FEEDTYPE_BLOCKCHAIN) {
      return (
        <Redirect
          to={{
            pathname: "/block_chain",
            state: { referrer: this.state.profile_2 }
          }}
        />
      );
    } else if (type_2 == FEEDTYPE_SCIENCE) {
      return (
        <Redirect
          to={{
            pathname: "/science",
            state: { referrer: this.state.profile_2 }
          }}
        />
      );
    } else if (type_2 == FEEDTYPE_CARS) {
      return (
        <Redirect
          to={{
            pathname: "/cars",
            state: { referrer: this.state.profile_2 }
          }}
        />
      );
    } else if (type_2 == FEEDTYPE_MISCELLANEOUS) {
      return (
        <Redirect
          to={{
            pathname: "/miscellaneous",
            state: { referrer: this.state.profile_2 }
          }}
        />
      );
    } else if (type_2 == FEEDTYPE_CRYPTO) {
      return (
        <Redirect
          to={{
            pathname: "/crypto",
            state: { referrer: this.state.profile_2 }
          }}
        />
      );
    } else if (type_2 == FEEDTYPE_FASHION) {
      return (
        <Redirect
          to={{
            pathname: "/fashion",
            state: { referrer: this.state.profile_2 }
          }}
        />
      );
    } else if (type_2 == FEEDTYPE_TRAVEL) {
      return (
        <Redirect
          to={{
            pathname: "/travel",
            state: { referrer: this.state.profile_2 }
          }}
        />
      );
    } else if (type_2 == FEEDTYPE_BUSINESS) {
      return (
        <Redirect
          to={{
            pathname: "/bussiness",
            state: { referrer: this.state.profile_2 }
          }}
        />
      );
    } else if (type_2 == FEEDTYPE_TECHNOLOGY) {
      return (
        <Redirect
          to={{
            pathname: "/technology",
            state: { referrer: this.state.profile_2 }
          }}
        />
      );
    } else if (type_2 == FEEDTYPE_ARTS) {
      return (
        <Redirect
          to={{
            pathname: "/arts",
            state: { referrer: this.state.profile_2 }
          }}
        />
      );
    }
    if (type_2 == FEEDTYPE_STARTUPS) {
      return (
        <Redirect
          to={{
            pathname: "/startups",
            state: { referrer: this.state.profile_4 }
          }}
        />
      );
    } else if (type_2 == FEEDTYPE_ARTS) {
      return (
        <Redirect
          to={{
            pathname: "/arts",
            state: { referrer: this.state.profile_4 }
          }}
        />
      );
    } else if (type_2 == FEEDTYPE_BLOCKCHAIN) {
      return (
        <Redirect
          to={{
            pathname: "/block_chain",
            state: { referrer: this.state.profile_4 }
          }}
        />
      );
    } else if (type_2 == FEEDTYPE_SCIENCE) {
      return (
        <Redirect
          to={{
            pathname: "/science",
            state: { referrer: this.state.profile_4 }
          }}
        />
      );
    } else if (type_2 == FEEDTYPE_CARS) {
      return (
        <Redirect
          to={{
            pathname: "/cars",
            state: { referrer: this.state.profile_4 }
          }}
        />
      );
    } else if (type_2 == FEEDTYPE_MISCELLANEOUS) {
      return (
        <Redirect
          to={{
            pathname: "/miscellaneous",
            state: { referrer: this.state.profile_4 }
          }}
        />
      );
    } else if (type_2 == FEEDTYPE_CRYPTO) {
      return (
        <Redirect
          to={{
            pathname: "/crypto",
            state: { referrer: this.state.profile_4 }
          }}
        />
      );
    } else if (type_2 == FEEDTYPE_FASHION) {
      return (
        <Redirect
          to={{
            pathname: "/fashion",
            state: { referrer: this.state.profile_4 }
          }}
        />
      );
    } else if (type_2 == FEEDTYPE_TRAVEL) {
      return (
        <Redirect
          to={{
            pathname: "/travel",
            state: { referrer: this.state.profile_4 }
          }}
        />
      );
    } else if (type_2 == FEEDTYPE_BUSINESS) {
      return (
        <Redirect
          to={{
            pathname: "/bussiness",
            state: { referrer: this.state.profile_4 }
          }}
        />
      );
    } else if (type_2 == FEEDTYPE_TECHNOLOGY) {
      return (
        <Redirect
          to={{
            pathname: "/technology",
            state: { referrer: this.state.profile_4 }
          }}
        />
      );
    } else if (type_2 == FEEDTYPE_ARTS) {
      return (
        <Redirect
          to={{
            pathname: "/arts",
            state: { referrer: this.state.profile_4 }
          }}
        />
      );
    }


    if (type_3 == FEEDTYPE_STARTUPS) {
      return (
        <Redirect
          to={{
            pathname: "/startups",
            state: { referrer: this.state.profile_3 }
          }}
        />
      );
    } else if (type_3 == FEEDTYPE_ARTS) {
      return (
        <Redirect
          to={{
            pathname: "/arts",
            state: { referrer: this.state.profile_3 }
          }}
        />
      );
    } else if (type_3 == FEEDTYPE_BLOCKCHAIN) {
      return (
        <Redirect
          to={{
            pathname: "/block_chain",
            state: { referrer: this.state.profile_3 }
          }}
        />
      );
    } else if (type_3 == FEEDTYPE_SCIENCE) {
      return (
        <Redirect
          to={{
            pathname: "/science",
            state: { referrer: this.state.profile_3 }
          }}
        />
      );
    } else if (type_3 == FEEDTYPE_CARS) {
      return (
        <Redirect
          to={{
            pathname: "/cars",
            state: { referrer: this.state.profile_3 }
          }}
        />
      );
    } else if (type_3 == FEEDTYPE_MISCELLANEOUS) {
      return (
        <Redirect
          to={{
            pathname: "/miscellaneous",
            state: { referrer: this.state.profile_3 }
          }}
        />
      );
    } else if (type_3 == FEEDTYPE_CRYPTO) {
      return (
        <Redirect
          to={{
            pathname: "/crypto",
            state: { referrer: this.state.profile_3 }
          }}
        />
      );
    } else if (type_3 == FEEDTYPE_FASHION) {
      return (
        <Redirect
          to={{
            pathname: "/fashion",
            state: { referrer: this.state.profile_3 }
          }}
        />
      );
    } else if (type_3 == FEEDTYPE_TRAVEL) {
      return (
        <Redirect
          to={{
            pathname: "/travel",
            state: { referrer: this.state.profile_3 }
          }}
        />
      );
    } else if (type_3 == FEEDTYPE_BUSINESS) {
      return (
        <Redirect
          to={{
            pathname: "/bussiness",
            state: { referrer: this.state.profile_3 }
          }}
        />
      );
    } else if (type_3 == FEEDTYPE_TECHNOLOGY) {
      return (
        <Redirect
          to={{
            pathname: "/technology",
            state: { referrer: this.state.profile_3 }
          }}
        />
      );
    } else if (type_3 == FEEDTYPE_ARTS) {
      return (
        <Redirect
          to={{
            pathname: "/arts",
            state: { referrer: this.state.profile_3 }
          }}
        />
      );
    }

    // const users = this.props.startup;
    // console.log(users);
    // const filter = {
    //     type: 'FEEDTYPE_ARTS',
    //   };
    //   console.log(filter);

    // var users= users.filter(item => {
    //     for (let key in filter) {
    //       if (item[key] === undefined || item[key] != filter[key])
    //         return false;
    //     }
    //     return true;
    //   });

    //   console.log(users)

    return (
      <div>
        {this.props.data !== undefined ? (
          <div className="row">
            <div className="col-md-8" style={{ display: "contents" }}>
              <div className="card-layout-1">
                <img
                  src={this.props.data.image}
                  style={{ width: "100%", height: "100%" }}
                  value={this.props.data.type}
                  onClick={this.handlePageChange}
                />
              </div>
            </div>
            <div style={{ left: "6px" }} class="col-md-4">
              {(() => {
                if (this.props.data.type == FEEDTYPE_STARTUPS) {
                  return (
                    <div
                      className="feed_type_font"
                      value={this.props.data.type}
                      onClick={this.handlePageChange}
                    >
                      {/* {this.props.data.type}{" "} */}
                      Startup
                    </div>
                  );
                } else if (this.props.data.type == FEEDTYPE_ARTS) {
                  return (
                    <div
                      className="feed_type_font"
                      value={this.props.data.type}
                      onClick={this.handlePageChange}
                    >
                      {/* {this.props.data.type}{" "} */}
                      Arts
                    </div>
                  );
                } else if (this.props.data.type == FEEDTYPE_BLOCKCHAIN) {
                  return (
                    <div
                      className="feed_type_font"
                      value={this.props.data.type}
                      onClick={this.handlePageChange}
                    >
                      Blockchain
                    </div>
                  );
                }
              })()}
              <div
                className="feed_header_font"
                value={this.props.data.type}
                onClick={this.handlePageChange}
              >
                {this.props.data.header}{" "}
              </div>
              <div
                className="feed_content_font"
                value={this.props.data.type}
                onClick={this.handlePageChange}
              >
                {this.props.data.content}{" "}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {this.props.datum !== undefined ? (
          <div className="row const-header">
            <div className="col-sm-6 col-sm-push-8 const-img">
              <div className="card-layout-4">
                <img
                  src={this.props.datum.image}
                  style={{ width: "100%", height: "100%" }}
                  value={this.props.datum.type}
                  onClick={this.handlePageChange2}
                />
              </div>
            </div>
            <div className="col-sm-6 col-sm-pull-4 const-title">
              <div
                className="const-content"
                style={{ fontSize: 10, fontWeight: "bold", color: "#909295" }}
                value={this.props.datum.type}
                onClick={this.handlePageChange2}
              >
                {this.props.datum.header}
              </div>
              <div className="vr-3" />
            </div>
          </div>
        ) : (
          // <div class="row flex-wrapp-override ">
          //   <div class="col-md-6 " style={{display:'contents'}}>
          //     <div class="card-layout-4">
          //        <img src={this.props.datum.image} style={{width:"100%",height:"100%"}} value={this.props.datum.type} onClick={this.handlePageChange2}/>
          //        </div>
          //     </div>
          //     <div class="col-md-6" style={{marginTop:'2em',marginBottom:'1em'}}>
          // <div style={{fontSize:10,fontWeight:"bold",color:'#909295'}}  value={this.props.datum.type} onClick={this.handlePageChange2}>
          //  {this.props.datum.header}</div>
          //  <div className="vr-3"></div>

          //  </div>
          //  </div>
          ""
        )}

        {this.props.data1 !== undefined ? (
          <div className="row">
            <div className="col-md-8" style={{ display: "contents" }}>
              <div className="card-layout-2">
                <img
                  src={this.props.data1.image}
                  style={{ width: "100%", height: "100%" }}
                  value={this.props.data1.type}
                  onClick={this.handlePageChange1}
                />
              </div>
            </div>
            <div style={{ left: "6px" }} className="col-md-4">
              {(() => {
                if (this.props.data1.type == FEEDTYPE_STARTUPS) {
                  return (
                    <div
                      className="feed_type_font"
                      value={this.props.data1.type}
                      onClick={this.handlePageChange}
                    >
                      {/* {this.props.data.type}{" "} */}
                      Startup
                    </div>
                  );
                } else if (this.props.data1.type == FEEDTYPE_ARTS) {
                  return (
                    <div
                      className="feed_type_font"
                      value={this.props.data1.type}
                      onClick={this.handlePageChange}
                    >
                      {/* {this.props.data.type}{" "} */}
                      Arts
                    </div>
                  );
                } else if (this.props.data1.type == FEEDTYPE_BLOCKCHAIN) {
                  return (
                    <div
                      className="feed_type_font"
                      value={this.props.data1.type}
                      onClick={this.handlePageChange}
                    >
                      Blockchain
                    </div>
                  );
                }
              })()}
              {/* <div
                className="feed_type_font"
                value={this.props.data1.type}
                onClick={this.handlePageChange}
              >
                {this.props.data1.type}{" "}
              </div> */}
              <div
                className="feed_header_font"
                value={this.props.data1.type}
                onClick={this.handlePageChange1}
              >
                {this.props.data1.header}
              </div>
              <div
                className="feed_content_font"
                value={this.props.data1.type}
                onClick={this.handlePageChange1}
              >
                {this.props.data1.content}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {this.props.data2 !== undefined ? (
          <div className="row">
            <div className="card-layout-3">
              <img
                src={this.props.data2.image}
                style={{ width: "100%", height: "100%" }}
                value={this.props.data2.type}
                onClick={this.handlePageChange3}
              />
            </div>
            <div
              className="col-md-12"
              style={{
                padding: "0",
                marginLeft: "-1em",
                marginBottom: "1em",
                paddingRight: "6px"
              }}
            >
              {(() => {
                if (this.props.data2.type == FEEDTYPE_STARTUPS) {
                  return (
                    <div
                      className="slider_feed_type"
                      value={this.props.data2.type}
                      onClick={this.handlePageChange3}
                    >
                      {/* {this.props.data.type}{" "} */}
                      Startup
                    </div>
                  );
                } else if (this.props.data2.type == FEEDTYPE_ARTS) {
                  return (
                    <div
                      className="slider_feed_type"
                      value={this.props.data2.type}
                      onClick={this.handlePageChange3}
                    >
                      {/* {this.props.data.type}{" "} */}
                      Arts
                    </div>
                  );
                } else if (this.props.data2.type == FEEDTYPE_BLOCKCHAIN) {
                  return (
                    <div
                      className="slider_feed_type"
                      value={this.props.data2.type}
                      onClick={this.handlePageChange3}
                    >
                      Blockchain
                    </div>
                  );
                }
              })()}
              {/* <div
                className="slider_feed_type"
                value={this.props.data2.type}
                onClick={this.handlePageChange3}
              >
                {this.props.data2.type}
              </div> */}
              <div
                className="slider_header_feed"
                value={this.props.data2.type}
                onClick={this.handlePageChange3}
              >
                {this.props.data2.header}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {this.props.startup_5 !== undefined ? (
          <div className="row">
            <div className="card-layout-3">
              <img
                src={this.props.startup_5.image}
                style={{ width: "100%", height: "100%" }}
                value={this.props.startup_5.type}
                onClick={this.start_handlePageChange2}
              />
            </div>
            <div
              className="col-md-12"
              style={{
                padding: "0",
                marginLeft: "-1em",
                marginBottom: "1em",
                paddingRight: "6px"
              }}
            >
              {(() => {
                if (this.props.startup_5.type == FEEDTYPE_STARTUPS) {
                  return (
                    <div
                      className="slider_feed_type"
                      value={this.props.startup_5.type}
                      onClick={this.start_handlePageChange2}
                    >
                      {/* {this.props.data.type}{" "} */}
                      Startup
                    </div>
                  );
                } else if (this.props.startup_5.type == FEEDTYPE_ARTS) {
                  return (
                    <div
                      className="slider_feed_type"
                      value={this.props.startup_5.type}
                      onClick={this.start_handlePageChange2}
                    >
                      {/* {this.props.data.type}{" "} */}
                      Arts
                    </div>
                  );
                } else if (this.props.startup_5.type == FEEDTYPE_BLOCKCHAIN) {
                  return (
                    <div
                      className="slider_feed_type"
                      value={this.props.startup_5.type}
                      onClick={this.start_handlePageChange2}
                    >
                      Blockchain
                    </div>
                  );
                }
              })()}
              {/* <div
                className="slider_feed_type"
                value={this.props.startup_5.type}
                onClick={this.handlePageChange3}
              >
                {this.props.startup_5.type}
              </div> */}
              <div
                className="slider_header_feed"
                value={this.props.startup_5.type}
                onClick={this.start_handlePageChange2}
              >
                {this.props.startup_5.header}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {this.props.stories_1 !== undefined ? (
          <div>
            <img
              src={this.props.stories_1.image}
              style={{ width: "300px", height: "300px" }}
            />
            <p>{this.props.stories_1.header}</p>
          </div>
        ) : (
          ""
        )}

        {this.props.stories_2 !== undefined ? (
          <div>
            <img
              src={this.props.stories_2.image}
              style={{ width: "300px", height: "300px", marginTop: "10%" }}
            />
            {/* <p>{this.props.stories_2.header}</p> */}
          </div>
        ) : (
          ""
        )}

        {this.props.stories_3 !== undefined ? (
          <div>
            <img
              src={this.props.stories_3.image}
              style={{
                width: "170px",
                height: "170px",
                marginRight: "15px",
                float: "left"
              }}
            />
            <p>{this.props.stories_3.header}</p>
          </div>
        ) : (
          ""
        )}

        {this.props.startup_3 !== undefined ? (
          <div>
            <img src={this.props.startup_3.image} className="news-image" onClick={this.start_handlePageChange1}
/>
            <p className="startupfeed_header_font" onClick={this.start_handlePageChange1}
>
              {this.props.startup_3.header}
            </p>
            <p className="startupfeed_content_font" onClick={this.start_handlePageChange1}>
              {this.props.startup_3.content}
            </p>
          </div>
        ) : (
          ""
        )}

        {this.props.blockchain_data1 !== undefined ? (
          <div>
            <h1 style={{ color: "black",fontSize:"33px" }}>
              {this.props.blockchain_data1.header}
            </h1>
            <img
              src={this.props.blockchain_data1.image}
              style={{ width: "80%", height: "20%", borderRadius: "15px" }}
            />
            <p style={{ marginTop: "2%",  width: "82%" }}>
              {this.props.blockchain_data1.content}
            </p>
          </div>
        ) : (
          ""
        )}

        {this.props.blockchain_data2 !== undefined ? (
          <div>
            <p>
              <img
                src={this.props.blockchain_data2.image}
                style={{
                  width: "170px",
                  borderRadius: "10%",
                  height: "170px",
                  marginBottom: "5%",
                  marginRight: "15px",
                  float: "left"
                }}
              />
              {this.props.blockchain_data2.header}
            </p>
          </div>
        ) : (
          ""
        )}

        {this.props.blockchain_data3 !== undefined ? (
          <div>
            <p style={{ fontSize: "20px" }}>
              {this.props.blockchain_data3.header}
            </p>
          </div>
        ) : (
          ""
        )}

        {this.props.blockchain_data4 !== undefined ? (
          <div>
            <p style={{ fontSize: "20px" }}>
              {this.props.blockchain_data4.header}
            </p>
          </div>
        ) : (
          ""
        )}

        {this.props.startup_1 !== undefined ? (
          <div className="row">
            <div className="col-md-8" style={{ display: "contents" }}>
              <div className="startcard-layout-1">
                <img
                  src={this.props.startup_1.image}
                  style={{ width: "100%", height: "100%" }}
                  value={this.props.startup_1.type}
                  onClick={this.handlePageChange}
                />
              </div>
            </div>
            <div style={{ left: "6px" }} class="col-md-4">
              {(() => {
                if (this.props.startup_1.type == FEEDTYPE_STARTUPS) {
                  return (
                    <div
                      className="startfeed_type_font"
                      value={this.props.startup_1.type}
                      onClick={this.handlePageChange}
                    >
                      {/* {this.props.data.type}{" "} */}
                      Startup
                    </div>
                  );
                } else if (this.props.startup_1.type == FEEDTYPE_ARTS) {
                  return (
                    <div
                      className="startfeed_type_font"
                      value={this.props.startup_1.type}
                      onClick={this.handlePageChange}
                    >
                      {/* {this.props.data.type}{" "} */}
                      Arts
                    </div>
                  );
                } else if (this.props.startup_1.type == FEEDTYPE_BLOCKCHAIN) {
                  return (
                    <div
                      className="startfeed_type_font"
                      value={this.props.startup_1.type}
                      onClick={this.handlePageChange}
                    >
                      Blockchain
                    </div>
                  );
                }
              })()}
              {/* <div
                className="startfeed_type_font"
                value={this.props.startup_1.type}
                onClick={this.handlePageChange}
              >
                {this.props.startup_1.type}{" "}
              </div> */}
              <div
                className="startfeed_header_font"
                value={this.props.startup_1.type}
                onClick={this.handlePageChange}
              >
                {this.props.startup_1.header}{" "}
              </div>
              <div
                className="startfeed_content_font"
                value={this.props.startup_1.type}
                onClick={this.handlePageChange}
              >
                {this.props.startup_1.content}{" "}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {this.props.startup_2 !== undefined ? (
          <div className="row">
            <div className="col-md-12">
              <div className="startup-card-layout-2">
                <img
                  src={this.props.startup_2.image}
                  value={this.props.startup_2.type}
                  onClick={this.start_handlePageChange}
                />
              </div>
              {(() => {
                if (this.props.startup_2.type == FEEDTYPE_STARTUPS) {
                  return (
                    <div
                      className="startfeed_type_font"
                      value={this.props.startup_2.type}
                      onClick={this.start_handlePageChange}
                    >
                      {/* {this.props.data.type}{" "} */}
                      Startup
                    </div>
                  );
                } else if (this.props.startup_2.type == FEEDTYPE_ARTS) {
                  return (
                    <div
                      className="startfeed_type_font"
                      value={this.props.startup_2.type}
                      onClick={this.start_handlePageChange}
                    >
                      {/* {this.props.data.type}{" "} */}
                      Arts
                    </div>
                  );
                } else if (this.props.startup_2.type == FEEDTYPE_BLOCKCHAIN) {
                  return (
                    <div
                      className="startfeed_type_font"
                      value={this.props.startup_2.type}
                      onClick={this.start_handlePageChange}
                    >
                      Blockchain
                    </div>
                  );
                }
              })()}
              {/* <div
                className="startupfeed_type_font"
                value={this.props.startup_2.type}
                onClick={this.handlePageChange}
              >
                {this.props.startup_2.type}{" "}
              </div> */}
              <div
                className="startupfeed_header_font"
                value={this.props.startup_2.type}
                onClick={this.start_handlePageChange}
              >
                {this.props.startup_2.header}{" "}
              </div>
              <div
                className="startupfeed_content_font"
                value={this.props.startup_2.type}
                onClick={this.start_handlePageChange}
              >
                {this.props.startup_2.content}{" "}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* {this.props.startup_3 !== undefined
                ?
                <div>
                <p style={{fontSize: "20px"}}>{this.props.startup_3.header}</p>  

                </div>
                :
                ""
                } */}

        {this.props.startup_4 !== undefined ? (
          <div>
            <p style={{ fontSize: "20px" }}>{this.props.startup_4.header}</p>
          </div>
        ) : (
          ""
        )}

        {this.props.list !== undefined ? (
          <div>
            <div className="row">
              <div
                className="rw-words rw-words-1 col-md-12 pull-md-right"
                style={{ padding: "0" }}
              >
                {/* <span></span>  
                <span></span>    */}

                <span>NEO + 4.45%</span>
                <span>EOS + 4.47%</span>
                <span>Tether+ 0.43%</span>
                <span>Qtum + 2.32%</span>
                <span>TRON + 7.20%</span>
                <span>XRP +2.7%</span>
                {/* <span>Bitcoin + 2.22%</span>  */}
                {/* <span>Stellar + 1.25%</span> */}
              </div>
              <div className="vr-6" />
            </div>
            {/* <div class="rw-words rw-words-1 col-md-12" style={{padding:'0'}}>
						<span>Bitcoin</span>
						<span>Ethereum</span>
						<span>Bitcoin Cash</span>
						<span>Litecoin</span>
						<span>EOS</span>
						<span>Binance Coin</span>
					</div> */}
            {/* <div className="vr-6"></div> */}

            {/* <div className="col-md-12" style={{padding:'0'}}><span>{this.props.list}</span><span style={{color:'green'}}>+0.45%</span></div>
                <div class="br-hr"></div> */}
          </div>
        ) : (
          ""
        )}

        {this.props.menu_data !== undefined ? (
          <div
            style={{ marginLeft: "6%", paddingBottom: "5%", padding: "none" }}
          >
            <h6 style={{ fontSize: "16px" }}>{this.props.menu_data.type}</h6>
            <p className="menu-paragraphs"> {this.props.menu_data.content}</p>
            <img
              className="menuimg"
              src={this.props.menu_data.image}
              alt="Pineapple"
            />
          </div>
        ) : (
          ""
        )}

        {this.props.event_data !== undefined ? (
          <div className="row" style={{ margin: "1%" }}>
            <div className="col-md-8" style={{ display: "contents" }}>
              <div className="eventcard-layout-1">
                <img
                  src={this.props.event_data.image}
                  style={{ width: "100%", height: "100%" }}
                  value={this.props.event_data.type}
                  onClick={this.event_handlePageChange}
                />
              </div>
            </div>
            <div style={{ left: "6px" }} class="col-md-4">
              <div
                className="eventfeed_header_font"
                value={this.props.event_data.type}
                onClick={this.event_handlePageChange}
              >
                {this.props.event_data.header}{" "}
              </div>
              <div
                className="startfeed_content_font"
                value={this.props.event_data.type}
                onClick={this.event_handlePageChange}
              >
                {this.props.event_data.content}{" "}
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
