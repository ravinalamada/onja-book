import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './Pages/App';
import {GlobalContextProvider }from './Components/GlobalContext'

ReactDOM.render(
  <GlobalContextProvider>
    <Router>
      <App/>
    </Router>
  </GlobalContextProvider>,
  document.getElementById("root"))
