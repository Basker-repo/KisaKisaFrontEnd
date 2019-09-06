
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Kisa_Main_Application from './Components/Main_Component/Kisa_Main_Application.js';

ReactDOM.render((
  <BrowserRouter>
    <Kisa_Main_Application />
  </BrowserRouter>
), document.getElementById('root'))
