// reducer untuk watchlist
const initialState = {
  watchlist: []
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case 'WATCHLIST/REMOVEWATCHLIST':
      return { ...state, watchlist: payload }
    case 'WATCHLIST/ADDWATCHLIST':
      return { ...state, watchlist: [...state.watchlist, payload]}
    default:
      return state
  }
}

export default reducer
