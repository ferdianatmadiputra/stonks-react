import React, { useState, useEffect } from 'react'
import './App.css';
import Card from './Card'
import database from './database.json'
import ApexChart from './candlestickchart'

function App () {
const [list, setList] = useState(database)
const [loading, setLoading] = useState(false)


  // useEffect(() => {
  //   setLoading(false)
  //   fetch('https://financialmodelingprep.com/api/v3/actives?apikey=d6685846f598c9b1c22d6c036f6d59ff')
  //   .then(res => res.json())
  //   .then(data => setList(data))
  //   .catch(console.log)
  //   .finally(_=> setLoading(false))
  // }, []) 

  function filterData (e) {
    console.log(e.target.value)
    let filteredData = list.filter(data => data.ticker.toLowerCase().includes(e.target.value.toLowerCase()))
    setList(filteredData)
    if (e.target.value.length === 0) {
      setList(database)
    }
  }


  return (
    <div className='container'>
      <div>
        {/* <pre>{JSON.stringify(this.state.list)}</pre> */}
        <h1 className="display-1 text-center bg-secondary py-5 text-light">New York Stock Exchange</h1>
        <ApexChart/>
        <div className="navbar justify-content-between">
          <div className="row">
            <p>most active</p>
          </div>
          <div className="row">
            <div className="col">
              <div className="row">
                <input className="form-control inline-form col" type='text' onChange={filterData} placeholder="search by ticker"/>
                <button className="btn btn-sm btn-outline-dark col-auto" onClick={filterData}>Search</button>
              </div>
            </div>
          </div>
        </div>


        <div className='row row-cols-xl-5 row-cols-md-3 row-cols-sm-2'>
          {
            loading ? <h1>Loading...</h1> :
            list.map((stock, index) => (
              <Card stock={stock} key={stock.ticker}/>
            ))
          }
        </div>
      </div>
    </div>
  )

}

export default App;