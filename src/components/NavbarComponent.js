import React from 'react'
import { Link } from 'react-router-dom'
export default function NavbarComponent () {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link to="/" class="navbar-brand mx-3">
        <i className="fas fa-chart-line"></i>
        &nbsp;Stonks!
      </Link>
        <div className="navbar-nav">
          <Link to="/watchlist" className="nav-item nav-link">Watchlist</Link>
        </div>
    </nav>
  )
}