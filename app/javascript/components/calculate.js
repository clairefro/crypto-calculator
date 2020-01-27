import React, { Component } from 'react';

class Calculate extends Component {
  constructor(props){
    super(props);

    this.state = {
      amount: null
    }
  }

  render() {
    const { currency_symbol, name } = this.props.activeCurrency;
    return (
      <div>
        <h1>How much {name} ({currency_symbol}) do you own?</h1>
        <form className="form-group" onSubmit={this.props.handleSubmit}>
          <label>Enter Amount Owned:</label><br/>
          <input
            autoComplete="off"
            type="text"
            name="amount"
            placeholder="how much?"
            value={this.props.amount}
            onChange={this.props.handleAmount}
            className="field" />
            <input type="submit" className="calculate-btn" value="Calculate My Total"/>
        </form>

      </div>
    );
  }
}

export default Calculate;
