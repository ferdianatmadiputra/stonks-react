import { useState, useEffect } from 'react'
import useDebounce from './useDebounce';


export default function useFetchChart(url, reload) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  console.log('fetchchartdata ketrigger')
  useEffect (() => {
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
      setData(result)
      console.log(result, 'dari ufetchchart')
    })
    .catch((err) => {
      console.log(err, 'ini dari si fetchchartdata')
      setError(err)
    })
    .finally((_) => {
      setLoading(false)
    })
  }, [url, reload])

  return [data, loading, setData, setLoading, error]
} 