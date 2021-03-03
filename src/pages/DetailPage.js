import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, useParams, Switch, Route } from 'react-router-dom'
import Chart from '../components/candlestickchart'
import useFetch from '../hooks/useFetch'
import { useSelector, useDispatch } from 'react-redux'


function Detail () {
  const watchlist = useSelector(state => state.watchlist)
  const history = useHistory()
  const location = useLocation()
  const params =useParams()

  // apikey='d6685846f598c9b1c22d6c036f6d59ff'
  // const urlHistorical = `https://financialmodelingprep.com/api/v3/historical-price-full/${params.ticker_id}?timeseries=60&apikey=${apikey}`
  const urlHistorical = `http://localhost:3000/historicalStockList?symbol=${params.ticker_id}`
  const [urlChart, setUrlChart] = useState(urlHistorical)
  const [chartData, chartLoading, filterChart, setChartData, setChartLoading, errorChart] =useFetch(urlChart)

  // key metrics company
  // let aaplKeymetricsUrl = `https://financialmodelingprep.com/api/v3/key-metrics-ttm/AAPL?limit=40&apikey=${apikey}`

  function addToWatchlist () {
    return console.log('addded')
  }


  const handleButtonClick = () => {
    console.log('trigger')
    setTimeout(() => {
      history.push('/')
    }, 2000)
  }

  console.log({ location })
  console.log({ params })

  return (
    <div className="container">
      <h1> Detail Page</h1>
      <p>{params.ticker_id}</p>
      <button className="btn btn-outline-secondary" onClick={addToWatchlist}>
      <i className="far fa-star"></i>
        &nbsp;add to watchlist
      </button>
      <Chart chartData={chartData}/> 
      <button onClick={handleButtonClick}> Home Page </button>
    </div>
  )
}
export default Detail