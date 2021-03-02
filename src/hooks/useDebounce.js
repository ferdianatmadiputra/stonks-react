import { useState, useEffect } from 'react'

export default function useDebounce (value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(()=> { // coba tidak pakai use effect
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  },
  [value, delay]
  )
  return debouncedValue
}