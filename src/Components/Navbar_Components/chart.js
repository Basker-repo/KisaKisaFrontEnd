import React from 'react';
import './navbar_common.css';
import 'font-awesome/css/font-awesome.min.css';
import Constant_header from './contant_header.js';
import TradingViewWidget, { BarStyles } from 'react-tradingview-widget';


class Chart extends React.Component {

  constructor(props) {
    super(props);

  }


  componentDidMount() {
  
  }

  render() {
    return (<div>
      <div id="tradeviewWidget" style={{width: "90%",paddingLeft: "9%",height: "500px"}}>
      <TradingViewWidget
    symbol="NASDAQ:AAPL"
    style={BarStyles.AREA}
    locale="en"
    hide_top_toolbar="true"
    autosize
  />
</div>
    </div>
    );
  }
}

export default Chart;
