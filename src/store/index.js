import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import detailReducer from './reducers/detail'
import watchlistReducer from './reducers/watchlist'
import homeReducer from './reducers/home'
import logger from './middlewares/logger'

const rootReducer = combineReducers({
  detail: detailReducer,
  watchlist: watchlistReducer,
  home: homeReducer,
})

const store = createStore(rootReducer, applyMiddleware(/*middlewaredisini. */  logger, thunk))

export default store

// const initialState = {
//   watchlist: [],
//   detail: {}
// }

// function reducer(state = initialState, action) {
//   const { type, payload } = action
//   switch(type) {
//     case 'WATCHLIST/REMOVEWATCHLIST':
//       return { ...state, watchlist: payload }
//     case 'WATCHLIST/ADDWATCHLIST':
//       return { ...state, watchlist: [...state.watchlist, payload]}
//     case 'DETAIL/SETDETAIL':
//       return { ...state, detail: payload}
//     default:
//       return state
//   }
// }

// // jangan lupa di index js kasi store dan provider 
// const store = createStore(reducer)

// export default store