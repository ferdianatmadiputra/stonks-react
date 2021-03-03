import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import Card from '../components/Card'
// import database from './database.json'
import Chart from '../components/candlestickchart'
import useFetch from '../hooks/useFetch'

function HomePage () {
  const [reload, setReload] = useState(0)
  // using hooks fetch
  // apikey='d6685846f598c9b1c22d6c036f6d59ff'
    // const url = `https://financialmodelingprep.com/api/v3/actives?apikey=${apikey}`
  const [url, setUrl] = useState('http://localhost:3000/most-active')
  const [list, loading, filterData, setList, setLoading, error] = useFetch(url, reload)
  // JANGAN LUPA HILANGKAN INDEKS 0 DI candlestickchart.js KALO BALIK KE API!!
  // const urlHistorical = `https://financialmodelingprep.com/api/v3/historical-price-full/%5EGSPC?timeseries=60&apikey=${apikey}`
  const urlHistorical = 'http://localhost:3000/historicalStockList?symbol=5EGSPC'
  const [urlChart, setUrlChart] = useState(urlHistorical)
  const [viewTitle, setViewTitle] = useState('Most-Active')
  const [chartData, chartLoading, filterChart, setChartData, setChartLoading, errorChart] =useFetch(urlChart)

  function searchInput (e) {
    if (e.target.value.length > 0) {
      filterData(e)
    } else if(e.target.value.length === 0) {
      let currReload = reload
      setReload( currReload + 1)
      console.log('ketrigger ga')
    }
  }
  function losers () {
    let losersUrl = 'http://localhost:3000/losers'
    // let losersUrl = `https://financialmodelingprep.com/api/v3/losers?apikey=${apikey}`
    setViewTitle('Losers')
    setUrl(losersUrl)
  }
  function gainers () {
    let gainersUrl = 'http://localhost:3000/gainers'
    // let gainersUrl = `https://financialmodelingprep.com/api/v3/gainers?apikey=${apikey}`
    setViewTitle('Gainers')
    setUrl(gainersUrl)
  }

  function mostActive () {
    let activesUrl = 'http://localhost:3000/most-active'
    // let activesUrl = `https://financialmodelingprep.com/api/v3/actives?apikey=${apikey}`
    setViewTitle('Most-Active')
    setUrl(activesUrl)
  }

  return (
    <div className='container'>
      <div>
        {/* <h1 className="display-1 text-center bg-secondary py-5 mb-3 text-light">New York Stock Exchange</h1> */}
        <span className="mt-5"><b>S&P 500 INDEX</b></span>
        <Chart chartData={chartData}/>
        <hr/>
        <div className="navbar justify-content-between mb-3">
          <div className="row mx-1">
            <div className="btn-group mr-2" role="group" aria-label="First group">
              <button type="button" onClick={mostActive} className="btn btn-outline-secondary">Most Active</button>
              <button type="button" onClick={gainers} className="btn btn-outline-success">Most Gainer</button>
              <button type="button" onClick={losers} className="btn btn-outline-danger">Most Loser</button>
            </div>
          </div>
          <div className="row">
            <span className=""><b>
              {viewTitle}
            </b></span>
          </div>
          <div className="row mx-2">
            <div className="col">
              <div className="row">
                <input className="form-control inline-form" type='text' onChange={searchInput} placeholder="search by ticker"/>
              </div>
            </div>
          </div>
        </div>

        <div className='row row-cols-xl-3 row-cols-md-2 row-cols-sm-1 row-cols-1'>
          {
            loading ? <h1>Loading...</h1> :
            list.map((stock, index) => (
              <Card stock={stock} key={stock.ticker}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage;