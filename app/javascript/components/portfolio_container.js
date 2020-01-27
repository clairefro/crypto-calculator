import React, { Component } from 'react';
import axios from 'axios';

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

    // **For future self-reference: syntax for non ES6 this-binding**
    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    console.log(e.target.value);

    axios.post('http://localhost:3000/search', {
      search: e.target.value
    })
    .then(data => {
      this.setState({
        search_results: data.data.currencies
      })
    })
    .catch(data => {debugger});
  }

  // for search
  handleSelect = async(e) => {
    // no redirect from anchor
    e.preventDefault();
     const currencyId = e.currentTarget.dataset.id;
     const activeCurrency = this.state.search_results.find(curr => curr.id === parseInt(currencyId));

     // update active currency and clear search results
    this.setState({
      active_currency: activeCurrency,
      search_results: []
    });
    
  }

  render() {
    return (
      <div>
        <Search
          searchResults={this.state.search_results}
          handleChange={this.handleChange}
          handleSelect={this.handleSelect} />
        <Calculate />
      </div>
    );
  }
}

export default PortfolioContainer;
