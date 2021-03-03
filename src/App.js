import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import WatchlistPage from './pages/WatchlistPage'
import NavbarComponent from './components/NavbarComponent'

export default function App () {
  return (
    <div className="App">
      <NavbarComponent />
      <Switch>
        <Route path="/detail/:ticker_id">
          <DetailPage />
        </Route>
        <Route path="/watchlist">
          <WatchlistPage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </div>
  )
}