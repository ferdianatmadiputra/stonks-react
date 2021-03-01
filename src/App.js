import React from 'react'
import './App.css';
import Card from './Card'
import database from './database.json'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: database
    }
  }

  // componentDidMount () {
  //   console.log('component did mount')
  //   fetch('https://financialmodelingprep.com/api/v3/actives?apikey=d6685846f598c9b1c22d6c036f6d59ff')
  //   .then((res)=> res.json())
  //   .then((data) => {
  //     console.log(data)
  //     this.setState({
  //       list: data,
  //       filter: ''
  //     })
  //   })
  //   .catch(err => console.log(err))
  // }

    // fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=30', {
    //   method: 'GET',
    //   headers: {
    //     'X-CMC_PRO_API_KEY': 'eb1f2013-faac-4bb6-a8fa-44a4d7d5d45e',
    //   },
    // })
    // .then((res)=> res.json())
    // .then((data) => {
    //   console.log(data)
    //   this.setState({
    //     list: data
    //   })
    // })
    // .catch(err => console.log(err))

  filterdata = (e) => { //               vvv ini array             vvv ini key yang mengandung content filter
    console.log(e.target.value)
    let filteredData = this.state.list.filter(data => data.ticker.toLowerCase().includes(this.state.filter.toLowerCase()))
    this.setState({
      list: filteredData
    })
    if (e.target.value.length === 0) {

    }
  }

  render () {
    return (
      <div className='container'>
        <div>
          {/* <pre>{JSON.stringify(this.state.list)}</pre> */}
          <h1 className="display-1 text-center bg-secondary py-5 text-light">S&P 500</h1>
          <div className="navbar justify-content-between">
            <div className="row">
              <p>most active</p>
            </div>
            <div className="row">
              <div className="col">
                <div className="row">
                  <input className="form-control inline-form col" type='text' onChange={this.filterData} placeholder="search by ticker"/>
                  <button className="btn btn-sm btn-outline-dark col-auto" onClick={this.filterData}>Search</button>
                </div>
              </div>
            </div>
          </div>

          <div className='row row-cols-xl-5 row-cols-md-3 row-cols-sm-2'>
            {this.state.list.map((stock, index) => (
            <Card stock={stock} key={stock.ticker}/>
            ))}
          </div>
        </div>
      </div>
    )
  }

}

export default App;
