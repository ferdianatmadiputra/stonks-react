import React, { Component }  from 'react'

class Card extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    let stock = this.props.stock
    return (
      <div className="col">
        <div className='card shadow-sm'>
          <h5 className="card-header">Ticker: <b>{stock.ticker}</b></h5>
          <div className="card-body">
            <p className="card-text">{stock.companyName}</p>
            <p className="text-success">{stock.price}</p>
            <p className="text-success"><b>{stock.changes} {stock.changesPercentage}</b></p>
          </div>
        </div>
      </div>
    )
  }
}
export default Card