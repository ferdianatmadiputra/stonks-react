import React, { useState, useEffect } from 'react'
import './App.css';
import Card from './components/Card'
// import database from './database.json'
import Chart from './components/candlestickchart'
import useFetch from './hooks/useFetch'
import useFetchChart from './hooks/useFetchChartData'

function App () {
  const [reload, setReload] = useState(0)
  // using hooks fetch
  const [url, setUrl] = useState('http://localhost:3000/most-active')
  // apikey='d6685846f598c9b1c22d6c036f6d59ff'
  // const url = `https://financialmodelingprep.com/api/v3/actives?apikey=${apikey}`
  const [list, loading, filterData, setList, setLoading, error] = useFetch(url, reload)

  // const urlHistorical = `https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?timeseries=5&apikey=${apikey}`
  const urlHistorical = 'http://localhost:3000/historicalStockList?symbol=GOOG'
  const [urlChart, setUrlChart] = useState(urlHistorical)
  const [chartData, chartLoading, setChartData, setChartLoading, errorChart] =useFetchChart(urlChart)

  function searchInput (e) {
    if (e.target.value.length > 0) {
      filterData(e)
    } else if(e.target.value.length === 0) {
      let currReload = reload
      setReload( currReload + 1)
      console.log('ketrigger ga')
    }
  }

  return (
    <div className='container'>
      <div>
        <h1 className="display-1 text-center bg-secondary py-5 text-light">New York Stock Exchange</h1>
        <Chart chartData={chartData}/>
        <div className="navbar justify-content-between">
          <div className="row">
            <div className="btn-group mr-2" role="group" aria-label="First group">
              <button type="button" className="btn btn-outline-secondary">Most Active</button>
              <button type="button" className="btn btn-outline-secondary">Most Gainer</button>
              <button type="button" className="btn btn-outline-secondary">Most Loser</button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="row">
                <input className="form-control inline-form col" type='text' onChange={searchInput} placeholder="search by ticker"/>
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

export default App;