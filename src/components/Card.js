import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addWatchlist, removeWatchlist, setDetail } from '../store/actions'
import {ToastsContainer, ToastsStore} from 'react-toasts';

export default function Card (props) {
  const watchlist = useSelector(state=> state.watchlist.watchlist)
  const dispatch = useDispatch()
  const history = useHistory()

  let stock = props.stock
  let imgUrl = `https://eodhistoricaldata.com/img/logos/US/${stock.ticker}.png`
  let imgUrl2 = `https://eodhistoricaldata.com/img/logos/US/${stock.ticker.toLowerCase()}.png`

  function ToDetailPage () {
    console.log('trigger')
    dispatch(setDetail(stock))
    history.push(`/detail/${stock.ticker}`)
  }

  function toggleWatchlist () {
    if (!watchlist.includes(stock.ticker)) {
      console.log('trigger addWatchlist', stock.ticker)
      dispatch(addWatchlist(stock.ticker))
      ToastsStore.info(`⭐ success add ${stock.ticker} to your watchlist`)
    } else {
      let payload = watchlist.filter(el => el !== stock.ticker)
      dispatch(removeWatchlist(payload))
      ToastsStore.info(`🗑️ success remove ${stock.ticker} from your watchlist`)
    }
    // setTimeout(() => {
    //   history.push(`/detail/${stock.ticker}`)
    // }, 2000)
  }

  return (
    <div className="col mb-3">
      <ToastsContainer store={ToastsStore}/>
      <div className='card shadow-sm'>
        <h5 className="card-header">
          <div className="row justify-content-between">
            <div className='col-auto'>
              <span>
                <b>{stock.ticker}</b>
              </span>
            </div>
            <div className="col-auto">
              {
                watchlist.includes(stock.ticker)
                  ? <i className="fas fa-star text-end text-warning" onClick={toggleWatchlist}></i>
                  : <i className="far fa-star text-end text-secondary" onClick={toggleWatchlist}></i>
              }
            </div>
          </div>
        </h5>
        <div className="card-body" onClick={ToDetailPage}>
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
                <div className='col-auto'>
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
                <div className='col-auto'>
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