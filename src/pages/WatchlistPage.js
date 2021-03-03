import React from 'react'
import { useHistory, useLocation, useParams, Switch, Route } from 'react-router-dom'

function Watchlist () {
  const history = useHistory()
  const location = useLocation()
  const params =useParams()
  const handleButtonClick = () => {
    console.log('trigger')
    setTimeout(() => {
      history.push('/')
    }, 2000)
  }

  console.log({ location })
  console.log({ params })

  return (
    <>
      <h1> Watchlist Page</h1>
      <button onClick={handleButtonClick}> Home Page </button>
    </>
  )
}
export default Watchlist