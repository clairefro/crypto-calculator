import React, { Component } from 'react';

class Search extends Component {
  constructor(props){
    super(props);

  }

  renderSearchResults = () => {
    const { searchResults } = this.props;
    return searchResults.map((result)=> {
      return (
        <li key={result.id}>{result.name}</li>
      );
    })

  }

  render() {


    return (
      <div>
        <h1>Cryptocurrency Portfolio Calculator</h1>
        <form className="form-group" action="">
          <label htmlFor="">Search for a currency:</label><br/>
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
