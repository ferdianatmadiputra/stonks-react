import React, { }  from 'react'

export default function Card (props) {

    let stock = props.stock
    let imgUrl = `https://eodhistoricaldata.com/img/logos/US/${stock.ticker}.png`
    let imgUrl2 = `https://eodhistoricaldata.com/img/logos/US/${stock.ticker.toLowerCase()}.png`

    return (
      <div className="col mb-3">
        <div className='card shadow-sm'>
          <h5 className="card-header">
            <div className="row justify-content-between">
              <div className='col'>
                <span>
                  <b>{stock.ticker}</b>
                </span>
              </div>
              <div className="col-auto">
                <i className="far fa-star text-end text-secondary"></i>
              </div>
            </div>
          </h5>
          <div className="card-body">
            <div className="row">
              <div className="col-3 align-self-center">
                <img src={imgUrl} onError={(e)=>{ if (e.target.src !== imgUrl2) { e.target.onerror = null; e.target.src=imgUrl2; } }} alt='' width="60px" />
                {/* <img src={imgUrl} alt='' width="60px" /> */}
              </div>              
              <div className="col align-self-center">
                <p className="">{stock.companyName}</p>
              </div>
            </div>
          </div>

          <div className="card-footer">
            {
              stock.changes >= 0 
              ? <div className="row justify-content-between">
                  <div className='col'>
                    <span className="text-success">
                      <b>{stock.price}</b>
                    </span>
                  </div>
                  <div className="col-auto">
                    <span className="text-success">
                      <b>+{stock.changes} {stock.changesPercentage}</b>
                    </span>
                  </div>
                </div>
              : <div className="row justify-content-between">
                  <div className='col'>
                    <span className="text-danger">
                      <b>{stock.price}</b>
                    </span>
                  </div>
                  <div className="col-auto">
                    <span className="text-danger">
                      <b>{stock.changes} {stock.changesPercentage}</b>
                    </span>
                  </div>
                </div>
            }
          </div>

        </div>
      </div>
    )
}