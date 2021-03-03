import { createStore } from 'redux'

const initialState = {
  watchlist: []
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    // case 'COUNTER/INCREMENTED':
    //   return { ...state, counter: state.counter + payload}
    // case 'MESSAGE/CHANGEMESSAGE':
    //   return { ...state, message: payload }
    case 'WATCHLIST/REMOVEWATCHLIST':
      return { ...state, watchlist: payload }
    case 'WATCHLIST/ADDWATCHLIST':
      return { ...state, watchlist: [...state.watchlist, payload]}
    default:
      return state
  }
}

// jangan lupa di index js kasi store dan provider 
const store = createStore(reducer)

export default store