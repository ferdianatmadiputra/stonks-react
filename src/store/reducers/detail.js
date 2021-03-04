// reducer untuk detail
const initialState = {
  detail: {}
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case 'DETAIL/SETDETAIL':
      return { ...state, detail: payload}
    default:
      return state
  }
}

export default reducer
