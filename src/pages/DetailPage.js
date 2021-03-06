import React, { useEffect } from 'react'
import { useParams} from 'react-router-dom'
import Chart from '../components/CandlestickChart'
// import useFetch from '../hooks/useFetch'
import { useSelector, useDispatch } from 'react-redux'
import { addWatchlist, removeWatchlist } from '../store/actions'
import {ToastsContainer, ToastsStore} from 'react-toasts';
import KeyMetrics from '../components/KeyMetrics'
// import useFetchObj from '../hooks/useFetchObj'
import { fetchDetailMetrics, fetchDetailChart } from '../store/actions'


function DetailPage () {
  const watchlist = useSelector(state => state.watchlist.watchlist)
  const detail = useSelector(state => state.detail.detail)
  const keyMetrics = useSelector(state => state.detail.keyMetrics)
  // const loading = useSelector(state => state.detail.loading)
  // const error = useSelector(state => state.detail.error)
  const chartData = useSelector(state => state.detail.chartData)
  // const errorChart = useSelector(state => state.detail.errorChart)
  console.log(detail, 'ini isi detail store')
  // const history = useHistory()
  const params =useParams()
  const dispatch = useDispatch()
  // const [reload, setReload] = useState(0)

  // key metrics company
  let apikey='d6685846f598c9b1c22d6c036f6d59ff'
  let keyMetricsUrl = `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${params.ticker_id}?limit=40&apikey=${apikey}`
  let urlHistorical = `https://financialmodelingprep.com/api/v3/historical-price-full/${params.ticker_id}?timeseries=100&apikey=${apikey}`
  // let keyMetricsUrl = `http://localhost:3000/key-metrics-ttm-2`
  // const urlHistorical = `http://localhost:3000/historicalStockList?symbol=${params.ticker_id}`
  // const [urlMetrics, setUrlMetrics] = useState(keyMetricsUrl)
  // const [keyMetrics, loading, filterData, setKeyMetrics, setLoading, error] = useFetch(urlMetrics, reload)
  
  // console.log(keyMetrics[0], ' << ini isi key', loading, '<<isi loading')
  // const [urlChart, setUrlChart] = useState(urlHistorical)
  // const [chartData, chartLoading, filterChart, setChartData, setChartLoading, errorChart] =useFetchObj(urlChart)

  useEffect(()=> {
    dispatch(fetchDetailMetrics(keyMetricsUrl))
  }, [keyMetricsUrl, dispatch])

  useEffect(()=> {
    dispatch(fetchDetailChart(urlHistorical))
  }, [urlHistorical, dispatch])

  function toggleWatchlist () {
    if (!watchlist.includes(detail.ticker)) {
      console.log('trigger addWatchlist', detail.ticker)
      dispatch(addWatchlist(detail.ticker))
      ToastsStore.info(`??? success add ${detail.ticker} to your watchlist`)
    } else {
      let payload = watchlist.filter(el => el !== detail.ticker)
      dispatch(removeWatchlist(payload))
      ToastsStore.info(`??????? success remove ${detail.ticker} from your watchlist`)
    }
  }

  if (keyMetrics.length === 0 || !chartData.historical ) {
    return (<div className="spinner-border text-secondary" role="status">
            <span className="sr-only">Loading...</span>
          </div>)
  }
  return (
    <div className="container">
      <ToastsContainer store={ToastsStore}/>
      {/* {
        error ? <h1>{error} error from fetch Key Metrics</h1> : <></>
      }
      {
        errorChart ? <h1>{errorChart} error from fetch chart Data</h1> : <></>
      } */}
      <div className="row p-3 pt-3 justify-content-between">
        <div className="col justify-content-start d-flex">
          <h2>{detail.companyName}</h2>
        </div>
        <div className="col-auto align-items-center justify-content-end d-flex">
          {
            watchlist.includes(detail.ticker)
              ? <h3>
                  <i className="fas fa-star text-end text-warning" onClick={toggleWatchlist}></i>
                </h3>
              : <h3>
                  <i className="far fa-star text-end text-secondary" onClick={toggleWatchlist}></i>
                </h3>
          }
        </div>
      </div>
      {
        !chartData.historical
        ? <div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        : <Chart chartData={chartData}/>
      }
      <hr />
      {
        keyMetrics.length <= 0
        ? <div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        : <KeyMetrics metrics={keyMetrics} />
      }
    </div>
  )
}
export default DetailPage