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

    // **Ref for future self -syntax for non ES6 this-binding:**
    // this.handleChange = this.handleChange.bind(this)
  }

  // for Search
  handleChange = (e) => {
    axios.get('/search',{ params: {
      search: e.target.value
    }})
    .then(data => {
      this.setState({
        search_results: data.data.currencies
      })
    })
    .catch(data => {debugger}
    );
  }

  // for Search
  handleSelect = (e) => {
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

  // for Calculate
  handleSubmit = (e) => {
    e.preventDefault();
    let currency = this.state.active_currency;
    let amount = this.state.amount;

    axios.get('/calculate', { params: {
      id: currency.id,
      amount: amount
    }})
    .then(data => {
      // clear amount/active currency, set portfolio state and append result of request
      this.setState({
        amount: '',
        active_currency: null,
        portfolio: [...this.state.portfolio, data.data]
      })
      console.log(data)
    })
    .catch(data => {debugger}
    );
  }

  // for Calculate
  handleAmount = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  }

  render() {
    const searchOrCalculate = this.state.active_currency ?
    <Calculate
      activeCurrency={this.state.active_currency}
      amount={this.state.amount}
      handleSubmit={this.handleSubmit}
      handleAmount={this.handleAmount}
       /> :
    <Search
      searchResults={this.state.search_results}
      handleChange={this.handleChange}
      handleSelect={this.handleSelect} />

    return (
      <div>
        {searchOrCalculate}
        <Portfolio portfolio={this.state.portfolio} />
      </div>
    );
  }
}

export default PortfolioContainer;
