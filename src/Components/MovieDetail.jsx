import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function extractMovieId(url) {
  const parts = url.split("/movie-details/")
  if (parts.length > 1) {
    return parts[1]
  } else {
    return null
  }
}

function MovieDetail(props) {
  const location = useLocation()
  const [currentFilm, setCurrentFilm] = useState(null) 
  const [currentCommentList, setCurrentCommentList] = useState(null)

  useEffect(() => {
    if (location.pathname) {
      try {
        const fetchFilm = async () => {
          const movieId = extractMovieId(location.pathname)
          if (!movieId) return 
          let response = await fetch(`http://www.omdbapi.com/?apikey=1ab1d1e3&i=${movieId}`, {
            headers: {},
          })

          if (response.ok) {
            let film = await response.json()
            setCurrentFilm(film)
            console.log(film)
          } else {
            console.error("Errore Fetch Movie", response)
          }
        }

        fetchFilm()
      } catch (error) {
        console.error("Errore Fetch movie (2)", error)
      }

      try {
        const fetchMovieComments = async () => {
          let response = await fetch(
            `https://striveschool-api.herokuapp.com/api/comments/${extractMovieId(location.pathname)}`,
            {
              headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhMmY2MDE4N2U1YzAwMTgxNGM1ZjYiLCJpYXQiOjE3MDcxODA5NjUsImV4cCI6MTcwODM5MDU2NX0.m18iQGAjFbus5eW2GN5NBb-m4kxJt6NRqXwEYXveaVU',
              },
            }
          )

          if (response.ok) {
            let comments = await response.json()
            console.log(comments)
          } else {
          }
        }

        fetchMovieComments()
      } catch(error) {
      }
    }
  }, [location.pathname])
  return (
    <Container>
      <Row>
        <Col xs={9}>
          <h1>{currentFilm ? currentFilm.Title : "Caricamento..."}</h1>
          <img alt='Locandina film' src={currentFilm ? currentFilm.Poster :'https://http.cat/images/102.jpg' }></img>
          <h3>Anno: {currentFilm ? currentFilm.Year : "Caricamento..."}</h3>
          <h3>Voto:{currentFilm ? currentFilm.imdbRating : "Caricamento..."}</h3>
          <h3>Regia di: {currentFilm ? currentFilm.Director : "Caricamento..."}</h3>
          <h2>Trama</h2>
          <p>{currentFilm ? currentFilm.Plot : "Caricamento..."}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetail
