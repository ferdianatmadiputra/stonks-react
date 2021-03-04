import { useEffect } from 'react'
// import { useHistory, useLocation, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../components/Card'
// import useFetch from '../hooks/useFetch'
import { fetchWatchlist } from '../store/actions'


function WatchlistPage () {
  const dispatch = useDispatch()
  const watchlist = useSelector(state => state.watchlist.watchlist)
  const stocks = useSelector(state => state.watchlist.fullData)
  const loading = useSelector(state => state.watchlist.loading)
  const error = useSelector(state => state.watchlist.error)
  let apikey='d6685846f598c9b1c22d6c036f6d59ff'
  const url = `https://financialmodelingprep.com/api/v3/quote/${watchlist.concat(',')}?apikey=${apikey}`
  // const urlFetchWatchlist = `http://localhost:3000/batchquote`
  // const [stocks, loading, filterData, setList, setLoading, error] = useFetch(urlFetchWatchlist)

  useEffect(()=> {
    dispatch(fetchWatchlist(url))
  }, [url, dispatch, watchlist])

  if(error) {
    console.log(error)
  }
  if(watchlist.length === 0) {
    return (
      <div className="container">
        <h1 className="m-5">Your Watchlist</h1>
        <h1>empty... lets add more!</h1>
      </div>
    )
  }
  

  if (stocks.length <= 0) {
    return (<div className="spinner-border text-secondary" role="status">
            <span className="sr-only">Loading...</span>
          </div>)
  }
  return (
    <div className="container">
      <h1 className="m-5">Your Watchlist</h1>
      <div className='row row-cols-xl-3 row-cols-md-2 row-cols-sm-1 row-cols-1 mb-5'>
          {
            loading
            ? <div className="spinner-border text-secondary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            : stocks.map((stock, index) => (
                <Card 
                  stock={{
                    ticker: stock.symbol,
                    companyName: stock.name,
                    price: stock.price,
                    changes: stock.change,
                    changesPercentage: `(${stock.changesPercentage})`
                  }}
                  key={stock.symbol}
                />
              ))
          }
        </div>
    </div>
  )
}
export default WatchlistPage