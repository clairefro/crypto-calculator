import React, { Component } from 'react';

import Search from './search'
import Calculate from './calculate'
import Portfolio from './portfolio'

class PortfolioContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      portfolio: [],
      search_results: [],
      active_currency: null,
      amount: ''
    }
  }

  handleChange = (e) => {
    // e.target.name below is defined in the input field that calls this function on change
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.name)
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <Calculate />
      </div>
    );
  }
}

export default PortfolioContainer;
