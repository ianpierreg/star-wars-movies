import { useState, useEffect } from 'react'

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(url, options)
        const json = await res.json()
        setResponse(json)
        setIsLoading(false)
        setError(null)
      } catch (err) {
        setError(err)
        alert(err)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return { response, error, isLoading }
}

export default useFetch
