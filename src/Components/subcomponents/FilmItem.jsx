import React from 'react'
import './filmItemsCSS.css'
import { Link } from 'react-router-dom'
import MovieDetail from '../MovieDetail'


function FilmItem( film ) {
  const preventDragHandler = (e) => {
    e.preventDefault()
  }

  let posterUrl = film.film.Poster !== "N/A" ? film.film.Poster : "https://http.cat/404"
  return (
    <Link element={<MovieDetail film={film.film} />} to={`/movie-details/${film.film.imdbID}`} className="film-item">
      <img
        src={posterUrl}
        alt="Locandina film"
        onDragStart={preventDragHandler}
      />
    </Link>
  )
}

export default FilmItem
