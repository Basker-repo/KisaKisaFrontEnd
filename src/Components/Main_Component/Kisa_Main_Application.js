import React, { Component } from "react";
import "./kisa_header.css";
import Kisa_header from "../Main_Component/kisa_header.js";
import Kisa_menu from "../Main_Component/MainMenu.js";
import Footer from "../Main_Component/kisa_footer.js";
import Kisa_Navbar from "../Main_Component/kisa_navbar.js";
import "./kisa_navbar.css";
import jQuery from "jquery";
import ReactGA from "react-ga";

class Kisa_Main_Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language_test: false
    };
    this.someTrackingHandler = this.someTrackingHandler.bind(this);
    ReactGA.initialize("UA-98745811-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  someTrackingHandler() {
    ReactGA.event({
      category: "some category",
      action: "some action"
    });
  }

  googleTranslateElementInit() {
    new window.google.translate.TranslateElement(
      { pageLanguage: "en" },
      "google_translate_element"
    );
  }

  google_Language() {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    // document.body.appendChild(addScript);
    //  window.googleTranslateElementInit = this.googleTranslateElementInit;
    this.googleTranslateElementInit();
  }

  componentDidMount() {
    // this.isLoading = setTimeout(()=>{this.setState({loading: false})}, 4000);

    jQuery(".lang-select").click(function() {
      // var theLang = jQuery(this).attr('data-lang');
      // jQuery('.goog-te-combo').val(theLang);
      //alert(jQuery(this).attr('href'));
      window.location = jQuery(this).attr("href");
      window.location.reload();
    });
  }

  componentWillUnmount() {}

  render() {
    return (
      <div
        className="kisaheader"
        style={{
          overflowX: "hidden",
          overflowY: "hidden",
          position: "relative",
          minHeight: "100%"
        }}
      >
        <Kisa_menu />
        <Kisa_header />
        <Kisa_Navbar />
        <Footer />
      </div>
    );
  }
}

export default Kisa_Main_Application;
