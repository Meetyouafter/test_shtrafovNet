import React, { useState, useEffect } from "react"

export default function Index() {
  let [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.movies)
      })
  }, [])

  useEffect(() => {
    fetch("/api/customers")
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      })
  }, [])

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          {movie.name} ({movie.year})
        </li>
      ))}
    </ul>
  )
}