import React from 'react'
import { Link } from 'react-router-dom'
export default function NavbarComponent () {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link to="/" class="navbar-brand mx-3">
      <i class="fas fa-chart-line"></i>
      &nbsp;Stonks!
    </Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        {/* <Link to="/" class="nav-item nav-link">Home</Link> */}
        <Link to="/watchlist" class="nav-item nav-link">Watchlist</Link>
      </div>
    </div>
  </nav>
  )
}