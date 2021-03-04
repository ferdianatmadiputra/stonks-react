

export function addWatchlist (payload) {
  return { type: 'WATCHLIST/ADDWATCHLIST', payload }
}

export function removeWatchlist (payload) {
  return { type: 'WATCHLIST/REMOVEWATCHLIST', payload }
}

export function setDetail (payload) {
  return { type: 'DETAIL/SETDETAIL', payload}
}

export function fetchStocks() {
  return async (dispatch) => {
    try {
      dispatch(setLoadingStocks(true))
      const response = await fetch('http://localhost:3000/most-active')
      const data = await response.json()
      dispatch(setStocks(data))
      dispatch(setLoadingStocks(false))
    } catch(err) {
      console.log(err)
    } 
  }
}

export function setStocks(payload) {
  return { type: 'STOCKS/SETSTOCKS', payload}
}

export function setLoadingStocks(payload) {
  return { type: 'TALENTS/LOADING', payload }
}