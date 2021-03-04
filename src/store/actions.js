

export function addWatchlist (payload) {
  return { type: 'WATCHLIST/ADDWATCHLIST', payload }
}

export function removeWatchlist (payload) {
  return { type: 'WATCHLIST/REMOVEWATCHLIST', payload }
}

export function setDetail (payload) {
  return { type: 'DETAIL/SETDETAIL', payload}
}