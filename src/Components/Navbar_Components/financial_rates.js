import React from 'react';
import './navbar_common.css';
import 'font-awesome/css/font-awesome.min.css';
import Constant_header from './contant_header.js';
// import console = require('console');

const axios = require('axios');

class Financial_Rates extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }

  }

  componentDidMount() {

    // const api = 'https://www.googleapis.com/analytics/v3/data/ga?ids=ga:149871498&metrics=ga:sessions&start-date=7daysAgo&end-date=today'; 
    // const token = 'ya29.GlxpB6nm7oKmmALSKH6R18wDBu-EYb8qXMILz2BzXDBaz33NlpTrm_bb_wjiGynBfrLuOQLvTetldMSQpgvGBZUaKi05g2sMsyeH1lgRO2Fw422G7L3ch36QiFx1XQ'; 
    // axios.get(api , { headers: {"Authorization" : 'OAuth 2.0 ' + token} })
    // .then(res => {
    // console.log(res)
    // })
    // .catch((error) => {
    //   console.log(error)
    // });


      const data = {
        grant_type: 'Bearer',
        client_id: '528307463948-rllrb8rihaorh7b3hs56m2b8ibslpjd2.apps.googleusercontent.com',
        client_secret: 'jGMOtH5yZa80qmC2oUSF8-Rq',
        username: 'meykandan96@gmail.com',
        password: 'gowsalya'
      };
    console.log("data", data);
      const url = 'https://www.googleapis.com/analytics/v3/data/ga?ids=ga:149871498&metrics=ga:pageviews&start-date=7daysAgo&end-date=today';
      axios.get(url, (data))   
      .then(response => {
        console.log(response);
        //   console.log(response.data);
        // var USER_TOKEN = response.data.access_token;
        //   console.log('userresponse ' + response.data.access_token); 
        })   
      .catch((error) => {
          console.log('error ' + error);   
      });

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "width": "100%",
      "height": "100%",
      "defaultColumn": "overview",
      "defaultScreen": "general",
      "market": "crypto",
      "showToolbar": false,
      "colorTheme": "light",
      "locale": "in",
      "isTransparent": false,
      "largeChartUrl": "http://localhost:3000/chart"
    })
    script.onload = () => this.scriptLoaded();
    console.log(script);
    document.getElementById("tradingview-widget-container").appendChild(script);


  }

  scriptLoaded() {
    console.log("in script load..");
  }
  render() {
    return (<div>
      <Constant_header></Constant_header>

      <div id="tradeviewWidget" style={{width: "90%",paddingLeft: "9%",height: "800px"}}>
      <div id="tradingview-widget-container" class="tradingview-widget-container">
        <div class="tradingview-widget-container__widget"></div>
        {/* <div class="tradingview-widget-copyright"><a href="https://in.tradingview.com/markets/cryptocurrencies/prices-all/" rel="noopener" target="_blank"><span class="blue-text">Cryptocurrency Markets</span></a> by TradingView</div> */}
        {/* <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js" async>
          {
          "width": "100%",
          "height": "100%",
          "defaultColumn": "overview",
          "screener_type": "crypto_mkt",
          "displayCurrency":   "USD",
          "colorTheme": "light",
          "locale": "in",
          "isTransparent": true
        }
  </script> */}
      </div>
      </div>
      {/* <table class="data">
        <tr>
          <th>Currency</th>
          <th>Marketcap</th>
          <th>Price</th>
          <th>Volume</th>
          <th>Circulating supply</th>
          <th>Change(24h)</th>

        </tr>
        <tr >
          <td>Bitcoin</td>
          <td>$208,537,588,445</td>
          <td>$11,725.35</td>
          <td> $40,091,069,747</td>
          <td>17,785,187 BTC</td>
          <td> -2.64%</td>

        </tr>
        <tr>
          <td>Ethereum</td>
          <td>$208,537,588,445</td>
          <td>$11,725.35</td>
          <td>$40,091,069,747</td>
          <td>17,785,187 BTC</td>
          <td> -2.64%</td>
        </tr>
        <tr>
          <td>Bitcoin Cash</td>
          <td>$208,537,588,445</td>
          <td>$11,725.35</td>
          <td>$40,091,069,747</td>
          <td>17,785,187 BTC</td>
          <td> -2.64%</td>
        </tr>
        <tr>
          <td>Litecoin </td>
          <td>$208,537,588,445</td>
          <td>$11,725.35</td>
          <td>$40,091,069,747</td>
          <td>17,785,187 BTC</td>
          <td> -2.64%</td>
        </tr>
        <tr>
          <td>EOS </td>
          <td>$208,537,588,445</td>
          <td>$11,725.35</td>
          <td>$40,091,069,747</td>
          <td>17,785,187 BTC</td>
          <td> -2.64%</td>
        </tr>
        <tr>
          <td>Binance Coin </td>
          <td>$208,537,588,445</td>
          <td>$11,725.35</td>
          <td>$40,091,069,747</td>
          <td>17,785,187 BTC</td>
          <td> -2.64%</td>
        </tr>
        <tr>
          <td>Bitcoin SV </td>
          <td>$208,537,588,445</td>
          <td>$11,725.35</td>
          <td>$40,091,069,747</td>
          <td>17,785,187 BTC</td>
          <td> -2.64%</td>
        </tr>
        <tr>
          <td>Tether</td>
          <td>$208,537,588,445</td>
          <td>$11,725.35</td>
          <td>$40,091,069,747</td>
          <td>17,785,187 BTC</td>
          <td> -2.64%</td>
        </tr>
        <tr>
          <td>Cardano </td>
          <td>$208,537,588,445</td>
          <td>$11,725.35</td>
          <td>$40,091,069,747</td>
          <td>17,785,187 BTC</td>
          <td> -2.64%</td>
        </tr>
        <tr>
          <td>TRON </td>
          <td>$208,537,588,445</td>
          <td>$11,725.35</td>
          <td>$40,091,069,747</td>
          <td>17,785,187 BTC</td>
          <td> -2.64%</td>
        </tr>
        <tr>
          <td>Stellar </td>
          <td>$208,537,588,445</td>
          <td>$11,725.35</td>
          <td>$40,091,069,747</td>
          <td>17,785,187 BTC</td>
          <td> -2.64%</td>
        </tr>
        <tr>
          <td>UNUS SED LEO </td>
          <td>$208,537,588,445</td>
          <td>$11,725.35</td>
          <td>$40,091,069,747</td>
          <td>17,785,187 BTC</td>
          <td> -2.64%</td>
        </tr>
        <tr>
          <td>Monero </td>
          <td>$208,537,588,445</td>
          <td>$11,725.35</td>
          <td>$40,091,069,747</td>
          <td>17,785,187 BTC</td>
          <td> -2.64%</td>
        </tr>
        <tr>
          <td>Dash</td>
          <td>$208,537,588,445</td>
          <td>$11,725.35</td>
          <td>$40,091,069,747</td>
          <td>17,785,187 BTC</td>
          <td> -2.64%</td>
        </tr>

      </table>



      <table style={{ padding: '8px' }} class="data">
        <tr>
          <th>Exchanges</th>
          <th>Adj. Vol (24h)</th>
          <th>Volume  (24h)</th>
          <th>Volume  (7d)</th>
          <th>Volume  (30d) </th>
          <th>Change  (24h)</th>
        </tr>

        <tr>
          <td>Bitcoin</td>
          <td>$208,537,588,445</td>
          <td>$11,725.35</td>
          <td>$40,091,069,747</td>
          <td>17,785,187 BTC</td>
          <td> -2.64%</td>

        </tr>
        <tr>
          <td>OKEx</td>
          <td>$208,537,588,445</td>
          <td>$11,725.35</td>
          <td>$40,091,069,747</td>
          <td>17,785,187 BTC</td>
          <td> -2.64%</td>
        </tr>
        <tr>
          <td> Huobi Global </td>
          <td>$208,537,588,445</td>
          <td>$11,725.35</td>
          <td>$40,091,069,747</td>
          <td>17,785,187 BTC</td>
          <td> -2.64%</td>
        </tr>
        <tr>
          <td>DigiFinex </td>
          <td>$208,537,588,445</td>
          <td>$11,725.35</td>
          <td>$40,091,069,747</td>
          <td>17,785,187 BTC</td>
          <td> -2.64%</td>
        </tr>
        <tr>
          <td>BitForex </td>
          <td>$208,537,588,445</td>
          <td>$11,725.35</td>
          <td>$40,091,069,747</td>
          <td>17,785,187 BTC</td>
          <td> -2.64%</td>
        </tr>
        <tr>
          <td>Coineal  </td>
          <td>$208,537,588,445</td>
          <td>$11,725.35</td>
          <td>$40,091,069,747</td>
          <td>17,785,187 BTC</td>
          <td> -2.64%</td>
        </tr>
        <tr>
          <td>Bibox </td>
          <td>$208,537,588,445</td>
          <td>$11,725.35</td>
          <td>$40,091,069,747</td>
          <td>17,785,187 BTC</td>
          <td> -2.64%</td>
        </tr>
        <tr>
          <td>CoinTiger</td>
          <td>$208,537,588,445</td>
          <td>$11,725.35</td>
          <td>$40,091,069,747</td>
          <td>17,785,187 BTC</td>
          <td> -2.64%</td>
        </tr>
        <tr>
          <td> LBank  </td>
          <td>$208,537,588,445</td>
          <td>$11,725.35</td>
          <td>$40,091,069,747</td>
          <td>17,785,187 BTC</td>
          <td> -2.64%</td>
        </tr>
        <tr>
          <td>CoinBene </td>
          <td>$208,537,588,445</td>
          <td>$11,725.35</td>
          <td>$40,091,069,747</td>
          <td>17,785,187 BTC</td>
          <td> -2.64%</td>
        </tr>

      </table> */}


      {this.props.data !== undefined
        ?

        <div style={{ display: "flex", margin: 25, width: "65%", height: "60%", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginLeft: 10, height: "10px", width: "200px", position: "absolute", top: -10, right: 0, left: 115, backgroundColor: this.getTypeToColor(this.props.data.type) }}>
            </div>
            <img src={this.props.data.image} style={{ width: "100%", height: "100%" }} />
            <div style={{ position: "absolute", display: "flex", flexDirection: "row", top: -40, left: 200, fontSize: 20, height: "20px", width: "50%" }}>
              {/* {this.props.data.type} */}
              {this.getTypeToString(this.props.data.type)}

            </div>
          </div>

          <div style={{ marginLeft: 10, height: "100px", width: "20px", position: "absolute", top: -10, right: 0, left: 300, bottom: 0, backgroundColor: this.getTypeToColor(this.props.data.type) }}>
          </div>


        </div>

        :
        ""
      }
    </div>
    );
  }
}

export default Financial_Rates;
