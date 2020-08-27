import React, {useEffect, useState} from 'react'
import useFetch from "./common/fetch";

const mockMovies = [
  {
    id: 1,
    title: 'movie 1'
  },
  {
    id: 2,
    title: 'movie 2'
  }
]
const Movies = ({ characterId }) => {
  const [moviesPath, setMoviesPath] = useState({})
  const [movies, setMovies] = useState([])
  const [urlCharacter, setUrlCharacter] = useState()
  const [urlMovies, setUrlMovies] = useState()

  const fetchData = async url => {
    try {
      const res = await fetch(url)
      const response = await res.json()
      return response
    } catch (err) {
      alert(err)
      return undefined
    }
  }

  useEffect(() => {
    if (Object.entries(moviesPath).length === 0) return
    setUrlMovies(moviesPath.pop())
  }, [moviesPath])

  useEffect(() => {
    const characterRes = fetchData(urlCharacter)
    if (characterRes) setMoviesPath(characterRes.films)
  }, [urlCharacter])

  useEffect(() => {
    const moviesRes = fetchData()
    if (moviesPathRes) setMovies(movies => )
  }, [urlMovies])

  // useEffect()
  const searchMovies = () => {
    setUrlCharacter('https://swapi.dev/api/people/1/')
  }

  return (
    <div>
      <button onClick={searchMovies}>
        Check out my movies
      </button>
      <div>
        {moviesPath.length > 0 && moviesPath.map(movie => (
          <li>
            {movie.title}
          </li>
        ))}
      </div>
    </div>
  )
}

export default Movies
