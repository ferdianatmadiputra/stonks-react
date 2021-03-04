import { useState, useEffect } from 'react'
import useDebounce from './useDebounce';


export default function useFetch(url, reload) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  console.log('masuk pembukaan fetch')
  useEffect (() => {
    console.log('masuk useEffect')
    setLoading(true)
    fetch(url)
    .then((response) => {
      if (!response.ok) {
        console.log(response, 'ini yg response not oke')
        throw Error(response.statusText)
      } else {
        return response.json()
      }
    })
    .then((result) => {
      console.log('useFetch finish succesfully')
      setData(result)
    })
    .catch((err) => {
      console.log('errir disini kah?')
      console.log('error fetchnya bro', err)
      setError(err)
    })
    .finally((_) => {
      setLoading(false)
    })
  }, [url, reload])
    
  function filterData (e) {
    console.log(e.target.value)
    let filteredData = data.filter(datum => datum.ticker.toLowerCase().includes(e.target.value.toLowerCase()))
    setData(filteredData)
  }

  return [data, loading, filterData, setData, setLoading, error]
} 