

export function addWatchlist (payload) {
  return { type: 'WATCHLIST/ADDWATCHLIST', payload }
}

export function removeWatchlist (payload) {
  return { type: 'WATCHLIST/REMOVEWATCHLIST', payload }
}