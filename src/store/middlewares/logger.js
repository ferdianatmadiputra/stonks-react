const logger = store => next => action => {
  console.log('mau dispatch action',action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}
// npm i redux-thunk

export default logger