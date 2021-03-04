// reducer untuk watchlist
const initialState = {
  watchlist: [],
  fullData: [],
  loading: false,
  error: []
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case 'WATCHLIST/REMOVEWATCHLIST':
      return { ...state, watchlist: payload }
    case 'WATCHLIST/ADDWATCHLIST':
      return { ...state, watchlist: [...state.watchlist, payload]}
    case 'WATCHLIST/SETFULLDATA':
      return { ...state, fullData: payload}
    case 'WATCHLIST/SETERROR':
      return { ...state, error: [...state.error, payload] }
    case 'WATCHLIST/SETLOADING':
      return { ...state, loading: payload }
    default:
      return state
  }
}

export default reducer
