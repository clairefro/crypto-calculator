import React, { Component } from 'react';

import PortfolioItem from './portfolio_item';

class Portfolio extends Component {
  constructor(props){
    super(props);

  }

  render() {
    const portfolioItems = this.props.portfolio.map((item, i) => {
      return <PortfolioItem key={i} item={item} />
    });

    const total = this.props.portfolio.reduce((total, curr)=>  total + curr.value, 0);

    return (
      <div>
        <div className="portfolio-value">
          <div className="portfolio-value--header">
            Your Total portfolio value is:
          </div>
          <div className="portfolio-value--content">{total}</div>
        </div>
        <div className="portfolio-items">
        {portfolioItems}
        </div>
      </div>
    );
  }
}

export default Portfolio;
