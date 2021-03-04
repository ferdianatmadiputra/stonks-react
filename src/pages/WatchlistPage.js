import React from 'react'
// import { useHistory, useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import useFetch from '../hooks/useFetch'

function WatchlistPage () {
  const watchlist = useSelector(state => state.watchlist.watchlist)
  let apikey='d6685846f598c9b1c22d6c036f6d59ff'
  const urlFetchWatchlist = `https://financialmodelingprep.com/api/v3/quote/${watchlist.concat(',')}?apikey=${apikey}`
  // const urlFetchWatchlist = `http://localhost:3000/batchquote`
  const [stocks, loading, filterData, setList, setLoading, error] = useFetch(urlFetchWatchlist)

  return (
    <div className="container">
      <h1 className="m-5">Your Watchlist</h1>
      {
        error ? <h1>{error}</h1> : <></>
      }
      <div className='row row-cols-xl-3 row-cols-md-2 row-cols-sm-1 row-cols-1 mb-5'>
          {
            loading
            ? <div class="spinner-border text-secondary" role="status">
                <span class="sr-only">Loading...</span>
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