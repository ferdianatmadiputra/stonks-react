// reducer untuk detail
const initialState = {
  homeChart: {},
  homeList: [],
  errorChart: [],
  errorList: [],
  loadingChart: false,
  loadingList: false

}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case 'HOME/SETCHART':
      return { ...state, homeChart: payload }
    case 'HOME/SETLIST':
      return { ...state, homeList: payload }
    case 'HOME/SETERRORCHART':
      return { ...state, errorChart: [...state.errorChart, payload] }
    case 'HOME/SETERRORLIST':
      return { ...state, errorList: [...state.errorList, payload] }
    case 'HOME/SETLOADINGCHART':
      return { ...state, loadingChart: payload }
    case 'HOME/SETLOADINGLIST':
      return { ...state, loadingList: payload }
    default:
      return state
  }
}

export default reducer