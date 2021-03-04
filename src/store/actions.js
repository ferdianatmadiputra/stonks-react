export function fetchDetailMetrics(url) {
  return async (dispatch) => {
    try {
      // let apikey='d6685846f598c9b1c22d6c036f6d59ff'
      // const url = `https://financialmodelingprep.com/api/v3/historical-price-full/%5EGSPC?timeseries=100&apikey=${apikey}`
      dispatch(setDetailLoading(true))
      const response = await fetch(url)
      if (!response.ok) {
        console.log(response, 'ini yg response not oke')
        throw Error(response.statusText)
      } else {
        const data = await response.json()
        dispatch(setDetailMetrics(data))
        dispatch(setDetailLoading(false))
      }
    } catch(err) {
      console.log(err)
      dispatch(setDetailErrorMetrics(err))
    } 
  }
}

export function fetchDetailChart(url) {
  return async (dispatch) => {
    try {
      // let apikey='d6685846f598c9b1c22d6c036f6d59ff'
      // const url = `https://financialmodelingprep.com/api/v3/historical-price-full/%5EGSPC?timeseries=100&apikey=${apikey}`
      dispatch(setDetailLoading(true))
      const response = await fetch(url)
        if (!response.ok) {
          console.log(response, 'ini yg response not oke')
          throw Error(response.statusText)
        } else {
          const data = await response.json()
          dispatch(setDetailChart(data))
          dispatch(setDetailLoading(false))
        }
    } catch(err) {
      console.log(err)
      dispatch(setDetailErrorMetrics(err))
    } 
  }
}

export function setDetail (payload) {
  return { type: 'DETAIL/SETDETAIL', payload}
}

export function setDetailChart (payload) {
  return { type: 'DETAIL/SETCHART', payload}
}

export function setDetailMetrics (payload) {
  return { type: 'DETAIL/SETMETRICS', payload}
}

export function setDetailErrorChart (payload) {
  return { type: 'DETAIL/SETERRORCHART', payload}
}

export function setDetailErrorMetrics (payload) {
  return { type: 'DETAIL/SETERRORMETRICS', payload}
}

export function setDetailLoading (payload) {
  return { type: 'DETAIL/SETLOADING', payload}
}

export function setDetailLoadingChart (payload) {
  return { type: 'DETAIL/SETLOADINGCHART', payload}
}

export function fetchWatchlist(url) {
  return async (dispatch) => {
    try {
      // let apikey='d6685846f598c9b1c22d6c036f6d59ff'
      // const url = `https://financialmodelingprep.com/api/v3/historical-price-full/%5EGSPC?timeseries=100&apikey=${apikey}`
      dispatch(setLoadingWatchlist(true))
      const response = await fetch(url)
        if (!response.ok) {
          console.log(response, 'ini yg response not oke')
          throw Error(response.statusText)
        } else {
          const data = await response.json()
          dispatch(setFullDataWatchlist(data))
          dispatch(setLoadingWatchlist(false))
        }
    } catch(err) {
      console.log(err)
      dispatch(setErrorWatchlist(err))
    } 
  }
}

export function addWatchlist (payload) {
  return { type: 'WATCHLIST/ADDWATCHLIST', payload }
}

export function removeWatchlist (payload) {
  return { type: 'WATCHLIST/REMOVEWATCHLIST', payload }
}

export function setErrorWatchlist (payload) {
  return { type: 'WATCHLIST/SETERROR', payload }
}

export function setLoadingWatchlist (payload) {
  return { type: 'WATCHLIST/SETLOADING', payload }
}

export function setFullDataWatchlist (payload) {
  return { type: 'WATCHLIST/SETFULLDATA', payload }
}


// export function fetchStocks() {
//   return async (dispatch) => {
//     try {
//       dispatch(setLoadingStocks(true))
//       const response = await fetch('http://localhost:3000/most-active')
//       const data = await response.json()
//       dispatch(setStocks(data))
//       dispatch(setLoadingStocks(false))
//     } catch(err) {
//       console.log(err)
//     } 
//   }
// }

export function fetchChart() {
  return async (dispatch) => {
    try {
      let apikey='d6685846f598c9b1c22d6c036f6d59ff'
      const url = `https://financialmodelingprep.com/api/v3/historical-price-full/%5EGSPC?timeseries=100&apikey=${apikey}`
      dispatch(setHomeLoadingChart(true))
      const response = await fetch(url)
      if (!response.ok) {
        console.log(response, 'ini yg response not oke')
        throw Error(response.statusText)
      } else {
        const data = await response.json()
        dispatch(setHomeChart(data))
        dispatch(setHomeLoadingChart(false))
      }
    } catch(err) {
      console.log(err)
      dispatch(setHomeErrorChart(err))
    } 
  }
}

export function fetchList(url) {
  return async (dispatch) => {
    try {
      // let apikey='d6685846f598c9b1c22d6c036f6d59ff'
      // const url = `https://financialmodelingprep.com/api/v3/historical-price-full/%5EGSPC?timeseries=100&apikey=${apikey}`
      dispatch(setHomeLoadingList(true))
      const response = await fetch(url)
      const data = await response.json()
      dispatch(setHomeList(data))
      dispatch(setHomeLoadingList(false))
    } catch(err) {
      console.log(err)
      dispatch(setHomeErrorList(err))
    } 
  }
}

export function filterList(payload) {
  return { type: 'HOME/SETLIST', payload }
}

export function setHomeChart(payload) {
  return { type: 'HOME/SETCHART', payload }
}

export function setHomeList(payload) {
  return { type: 'HOME/SETLIST', payload }
}

export function setHomeErrorChart(payload) {
  return { type: 'HOME/SETERRORCHART', payload }
}

export function setHomeErrorList(payload) {
  return { type: 'HOME/SETERRORLIST', payload }
}

export function setHomeLoadingChart(payload) {
  return { type: 'HOME/SETLOADINGCHART', payload }
}

export function setHomeLoadingList(payload) {
  return { type: 'HOME/SETLOADINGLIST', payload }
}