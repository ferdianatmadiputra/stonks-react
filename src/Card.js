import React, { Component }  from 'react'

class Card extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    let stock = this.props.stock
    let imgUrl = `https://eodhistoricaldata.com/img/logos/US/${stock.ticker}.png`
    console.log(imgUrl)
    if (!imgUrl) {
      imgUrl = `https://eodhistoricaldata.com/img/logos/US/${stock.ticker.toLowerCase()}.png`
    }
    return (
      <div className="col">
        <div className='card shadow-sm'>
          <h5 className="card-header">
            <div className="row justify-content-between">
              <div className='col'>
                <span>
                  <b>{stock.ticker}</b>
                </span>
              </div>
              <div className="col-auto">
                <i className="far fa-star text-end"></i>
              </div>
            </div>
          </h5>
          <div className="card-body">
            <img src={imgUrl} alt='' width="60px" height="60px"/>
            <p className="card-text">{stock.companyName}</p>
            {/* <p className="text-success">{stock.price}</p>
            <p className="text-success"><b>{stock.changes} {stock.changesPercentage}</b></p> */}
          </div>

          <div className="card-footer">
            <div className="row justify-content-between">
              <div className='col'>
                <span>
                  {stock.price}
                </span>
              </div>
              <div className="col-auto">
                <span className="text-success">
                  <b>{stock.changes} {stock.changesPercentage}</b>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
export default Card