import React, { Component } from 'react';

class Search extends Component {
  constructor(props){
    super(props);

  }

  renderSearchResults = () => {
    const { searchResults } = this.props;
    return searchResults.map((curr)=> {
      return (
        <li key={curr.id} className="currency-list-item">
          <a href="#" className="currency">
            <span>{curr.name}</span> <span>{curr.currency_symbol}</span>
          </a>
        </li>
      );
    })

  }

  render() {


    return (
      <div>
        <h1>Cryptocurrency Portfolio Calculator</h1>
        <form className="form-group" action="">
          <label>Search for a currency:</label><br/>
          <input
            autoComplete="off"
            type="text"
            name="name"
            placeholder="ex: Bitcoin, Litecoin, Ethereum etc..."
            value={this.props.name}
            onChange={this.props.handleChange}
            className="field" />
        </form>
        <div className="currency-list">
          {this.renderSearchResults()}
        </div>
      </div>
    );
  }
}

export default Search;
