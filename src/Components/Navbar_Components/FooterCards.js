import React, { Component } from "react";
import { Redirect, Route, Link } from "react-router-dom";
import Startups from "../Navbar_Components/startups.js";
import { createHashHistory } from "history";
export const history = createHashHistory();

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

export default class FooterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startdata: "",
      profile: "",
      type: ""
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange = () => {
    var type = this.props.data.type;
    this.setState({
      profile: this.props.data,
      type: this.props.data.type
    });
  };

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
        val = "ARTS";
        break;
      case FEEDTYPE_TRAVEL:
        val = "TRAVEL";
        break;
      case FEEDTYPE_STARTUPS:
        val = "STARTUPS";
        break;
      case FEEDTYPE_SCIENCE:
        val = "SCIENCE";
        break;
      case FEEDTYPE_CARS:
        val = "CARS";
        break;
      case FEEDTYPE_BUSINESS:
        val = "BUSINESS";
        break;
      case FEEDTYPE_BLOCKCHAIN:
        val = "BLOCKCHAIN";
        break;
    }
    return val;
  }
  render() {
    const { type, profile } = this.state;

    if (type == FEEDTYPE_STARTUPS) {
      return (
        <Redirect
          to={{
            pathname: "/startups",
            state: {
              referrer: this.state.profile
            }
          }}
        />
      );
    } else if (type == FEEDTYPE_ARTS) {
      return (
        <Redirect
          to={{
            pathname: "/arts",
            state: {
              referrer: this.state.profile
            }
          }}
        />
      );
    } else if (type == FEEDTYPE_BLOCKCHAIN) {
      return (
        <Redirect
          to={{
            pathname: "/block_chain",
            state: {
              referrer: this.state.profile
            }
          }}
        />
      );
    } else if (type == FEEDTYPE_SCIENCE) {
      return (
        <Redirect
          to={{
            pathname: "/science",
            state: {
              referrer: this.state.profile
            }
          }}
        />
      );
    } else if (type == FEEDTYPE_CARS) {
      return (
        <Redirect
          to={{
            pathname: "/cars",
            state: {
              referrer: this.state.profile
            }
          }}
        />
      );
    } else if (type == FEEDTYPE_MISCELLANEOUS) {
      return (
        <Redirect
          to={{
            pathname: "/miscellaneous",
            state: {
              referrer: this.state.profile
            }
          }}
        />
      );
    } else if (type == FEEDTYPE_CRYPTO) {
      return (
        <Redirect
          to={{
            pathname: "/crypto",
            state: {
              referrer: this.state.profile
            }
          }}
        />
      );
    } else if (type == FEEDTYPE_FASHION) {
      return (
        <Redirect
          to={{
            pathname: "/fashion",
            state: {
              referrer: this.state.profile
            }
          }}
        />
      );
    } else if (type == FEEDTYPE_TRAVEL) {
      return (
        <Redirect
          to={{
            pathname: "/travel",
            state: {
              referrer: this.state.profile
            }
          }}
        />
      );
    } else if (type == FEEDTYPE_BUSINESS) {
      return (
        <Redirect
          to={{
            pathname: "/bussiness",
            state: {
              referrer: this.state.profile
            }
          }}
        />
      );
    } else if (type == FEEDTYPE_TECHNOLOGY) {
      return (
        <Redirect
          to={{
            pathname: "/technology",
            state: {
              referrer: this.state.profile
            }
          }}
        />
      );
    } else if (type == FEEDTYPE_ARTS) {
      return (
        <Redirect
          to={{
            pathname: "/arts",
            state: {
              referrer: this.state.profile
            }
          }}
        />
      );
    }

    return (
      <div>
        {this.props.data !== undefined ? (
          // {this.props.data !== undefined
          // ?
          //  <div style={{display:"flex",margin:25,width:"65%",height:"60%",position:"relative"}}>
          //  <div style={{display:"flex",flexDirection:"row"}}>
          //  <div style={{marginLeft:10,height:"10px",width:"200px",position: "absolute",top:-10,right:0,left:115,backgroundColor:this.getTypeToColor(this.props.data.type)}}>
          // </div>
          // <img src={this.props.data.image} style={{width:"100%",height:"100%"}} value={this.props.data.type} onClick={this.handlePageChange}/>
          // <div style={{position: "absolute",display:"flex",flexDirection:"row",top:-40,left:200,fontSize:20,height: "20px",width:"50%"}}>
          // {/* {this.props.data.type} */}
          // {this.getTypeToString(this.props.data.type)}

          // </div>
          // </div>

          <div class="container-fostrap">
            <div class="container">
              <div class="row footercard-box">
                <div>
                  {" "}
                  <figure
                    style={{
                      backgroundColor: this.getTypeToColor(this.props.data.type)
                    }}
                    class="square"
                  >
                    {" "}
                    {this.getTypeToString(this.props.data.type)}{" "}
                  </figure>
                </div>
                <div class="card-footercard">
                  <div
                    style={{
                      backgroundColor: this.getTypeToColor(this.props.data.type)
                    }}
                    class="vr-7"
                  >
                    {" "}
                  </div>{" "}
                  <div class="img-card-footercard">
                    <img
                      src={this.props.data.image}
                      style={{
                        width: "100%",
                        height: "100%"
                      }}
                      onClick={this.handlePageChange}
                    />{" "}
                    <div class="relatedtxt">
                      <small onClick={this.handlePageChange}>
                        {" "}
                        {this.props.data.header}{" "}
                      </small>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        ) : (
          ""
        )}{" "}
        {/* 
                                {this.props.list !== undefined ?
                                 <div class="row">
                                    <div class="card-layout-3">
                                      <img  src={this.props.list.image} style={{width:"100%",height:"100%"}} value={this.props.list.type} onClick={this.handlePageChange3}/>
                                   </div>
                                   <div >
                                    <div style={{fontSize:14,color: "#F69E39"}} value={this.props.list.type} onClick={this.handlePageChange3}>{this.props.list.type}</div>   
                                    <div style={{fontSize:14,fontWeight:"bold"}} value={this.props.list.type} onClick={this.handlePageChange3}>{this.props.list.header}</div>
                                  </div>
                                </div>
                                :
                                ""
                                } */}
      </div>
    );
  }
}
