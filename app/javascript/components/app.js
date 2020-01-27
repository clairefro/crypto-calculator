import React, { Component } from 'react';
import axios from 'axios';

// configure axios with csrf token in all headers
// get token from meta tag
const csrfToken = document.querySelector('[name="csrf-token"]').content;
// set axios common headers to csrf token
axios.defaults.headers.common['X-CSRF-TOKEN']= csrfToken;

import PortfolioContainer from './portfolio_container'

class App extends Component {
  render() {
    return (
      <div className="container">
        <PortfolioContainer />
      </div>
    );
  }
}

export default App;
