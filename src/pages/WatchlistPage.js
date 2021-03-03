import React from 'react'
import { useHistory, useLocation, useParams, Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeWatchlist } from '../store/actions'
import Card from '../components/Card'
import useFetch from '../hooks/useFetch'

function Watchlist () {
  // const [reload, setReload] = useState(0)
  const watchlist = useSelector(state => state.watchlist)
  // apikey='d6685846f598c9b1c22d6c036f6d59ff'

  // const urlFetchWatchlist = `https://financialmodelingprep.com/api/v3/quote/${watchlist.concat(',')?apikey=${apikey}`
  const urlFetchWatchlist = `http://localhost:3000/batchquote`
  const [stocks, loading, filterData, setList, setLoading, error] = useFetch(urlFetchWatchlist)

  const history = useHistory()
  const location = useLocation()
  const params = useParams()
  // const handleButtonClick = () => {
  //   console.log('trigger')
  //   setTimeout(() => {
  //     history.push('/')
  //   }, 2000)
  // }


  console.log({ location })
  console.log({ params })

  return (
    <>
      <h1>Your Watchlist</h1>
      {/* <button onClick={handleButtonClick}> Home Page </button> */}
      <div className='row row-cols-xl-3 row-cols-md-2 row-cols-sm-1 row-cols-1'>
          {
            loading ? <h1>Loading...</h1> :
            stocks.map((stock, index) => (
              <Card stock={stock} key={stock.ticker}/>
            ))
          }
        </div>
    </>
  )
}
export default Watchlist