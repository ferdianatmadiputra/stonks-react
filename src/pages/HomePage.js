import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import Card from '../components/Card'
import { useSelector, useDispatch } from 'react-redux'
import Chart from '../components/CandlestickChart'
import useFetch from '../hooks/useFetch'
// import useFetchObj from '../hooks/useFetchObj'
import { fetchChart, fetchList, filterList } from '../store/actions'


function HomePage () {
  const dispatch = useDispatch()
  const chartData = useSelector(state => state.home.homeChart)
  const errorChart = useSelector(state => state.home.errorChart)
  // const chartLoading = useSelector(state => state.home.loadingChart)
  const list = useSelector(state => state.home.homeList)
  const loading = useSelector(state => state.home.loadingList)
  const error = useSelector(state => state.home.errorList)
  const [reload, setReload] = useState(0)
  // using hooks fetch
  let apikey='d6685846f598c9b1c22d6c036f6d59ff'
  const [url, setUrl] = useState(`https://financialmodelingprep.com/api/v3/actives?apikey=${apikey}`)
  // const urlHistorical = `https://financialmodelingprep.com/api/v3/historical-price-full/%5EGSPC?timeseries=100&apikey=${apikey}`
  // const [url, setUrl] = useState('http://localhost:3000/most-active')
  // const [list, loading, filterData, setList, setLoading, error] = useFetch(url, reload)
  // JANGAN LUPA HILANGKAN INDEKS 0 DI candlestickchart.js KALO BALIK KE API!!
  // const urlHistorical = 'http://localhost:3000/historicalStockList?symbol=5EGSPC'
  // const [urlChart, setUrlChart] = useState(urlHistorical)
  const [viewTitle, setViewTitle] = useState('Most-Active')
  // const [chartData, chartLoading, filterChart, setChartData, setChartLoading, errorChart] =useFetchObj('https://financialmodelingprep.com/api/v3/historical-price-full/%5EGSPC?timeseries=100&apikey=d6685846f598c9b1c22d6c036f6d59ff')

  useEffect(()=> {
    dispatch(fetchChart())
  }, [dispatch])

  useEffect(()=> {
    dispatch(fetchList(url))
  }, [url, reload, dispatch])

  function searchInput (e) {
    if (e.target.value.length > 0) {
      console.log(e.target.value)
      let filteredData = list.filter(datum => datum.ticker.toLowerCase().includes(e.target.value.toLowerCase()))
      dispatch(filterList(filteredData))
    } else if(e.target.value.length === 0) {
      let currReload = reload
      setReload(currReload + 1)
      console.log('ketrigger ga')
    }
  }
  function losers () {
    // let losersUrl = 'http://localhost:3000/losers'
    let losersUrl = `https://financialmodelingprep.com/api/v3/losers?apikey=${apikey}`
    setViewTitle('Losers')
    setUrl(losersUrl)
  }
  function gainers () {
    // let gainersUrl = 'http://localhost:3000/gainers'
    let gainersUrl = `https://financialmodelingprep.com/api/v3/gainers?apikey=${apikey}`
    setViewTitle('Gainers')
    setUrl(gainersUrl)
  }

  function mostActive () {
    // let activesUrl = 'http://localhost:3000/most-active'
    let activesUrl = `https://financialmodelingprep.com/api/v3/actives?apikey=${apikey}`
    setViewTitle('Most-Active')
    setUrl(activesUrl)
  }

  return (
    <div className='container'>
      <div>
        <h4 className="mt-5"><b>S&P 500 INDEX</b></h4>
        {
          error ? <h1>{error}</h1> : <></>
        }
        {
          errorChart ? <h1>{errorChart}</h1> : <></>
        }
        {
          !chartData.historical 
          // chartLoading
          ? <div class="spinner-border text-secondary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          : <Chart chartData={chartData}/>
        }
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

        <div className='row row-cols-xl-3 row-cols-md-2 row-cols-sm-1 row-cols-1 mb-5'>
          {
            loading
            ? <div class="spinner-border text-secondary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            : list.map((stock, index) => (
                <Card stock={stock} key={stock.ticker}/>
              ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage;