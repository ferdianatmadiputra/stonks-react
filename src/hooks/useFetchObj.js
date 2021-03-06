import { useState, useEffect } from 'react'
import useDebounce from './useDebounce';

export default function useFetchObj(url, reload) {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  console.log('masuk pembukaan fetch')
  useEffect (() => {
    console.log('masuk useEffect')
    setLoading(true)
    fetch(url)
    .then((response) => {
      if (!response.ok) {
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
      console.log('error fetchnya', err)
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