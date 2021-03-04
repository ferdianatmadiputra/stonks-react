// reducer untuk detail
const initialState = {
  detail: {},
  keyMetrics: [],
  loading: false,
  loadingChart: false,
  error: [],
  chartData: {},
  errorChart: []
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case 'DETAIL/SETDETAIL':
      return { ...state, detail: payload }
    case 'DETAIL/SETCHART':
      return { ...state, chartData: payload }
    case 'DETAIL/SETMETRICS':
      return { ...state, keyMetrics: [...payload] }
    case 'DETAIL/SETERRORCHART':
      return { ...state, errorChart: [...state.errorChart, payload] }
    case 'DETAIL/SETERRORMETRICS':
      return { ...state, error: [...state.error, payload] }
    case 'DETAIL/SETLOADING':
      return { ...state, loading: payload }
    case 'DETAIL/SETLOADINGCHART':
      return { ...state, loadingChart: payload }
    default:
      return state
  }
}

export default reducer
