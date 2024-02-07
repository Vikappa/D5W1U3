import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import  InserisciCommento from './subcomponents/InserisciCommento'
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
        console.log(`https://striveschool-api.herokuapp.com/api/comments/${extractMovieId(location.pathname)}`)
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
            setCurrentCommentList(comments)
          } else {
          }
        }

        fetchMovieComments()
      } catch(error) {
      }
    }
  }, [location.pathname])

  const updateComments = async () => {
    try {
      const fetchMovieComments = async () => {
      console.log(`https://striveschool-api.herokuapp.com/api/comments/${extractMovieId(location.pathname)}`)
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
          setCurrentCommentList(comments)
        } else {
        }
      }
  
      fetchMovieComments()
    } catch(error) {
    }
  }

  return (
    <Container>
      <Row>
        <Col xs={7}>
          <h1>{currentFilm ? currentFilm.Title : "Caricamento..."}</h1>
          <img alt='Locandina film' src={currentFilm ? currentFilm.Poster :'https://http.cat/images/102.jpg' }></img>
          <h3>Anno: {currentFilm ? currentFilm.Year : "Caricamento..."}</h3>
          <h3>Voto: {currentFilm ? currentFilm.imdbRating : "Caricamento..."}</h3>
          <h3>Regia di: {currentFilm ? currentFilm.Director : "Caricamento..."}</h3>
          <h2>Trama</h2>
          <p>{currentFilm ? currentFilm.Plot : "Caricamento..."}</p>
        </Col>
        <Col className='py-5 ps-5' xs={5}>
          <div className='bg-white rounded-4'>
            <h2 className='text-black'>Commenti:</h2>
            <br></br>
            {currentCommentList && currentCommentList.length > 0 ? (
              <ul>
                {currentCommentList.slice(currentCommentList.length-20, currentCommentList.length).map((comment, index) => (
                  <div className='d-flex flex-wrap' key={index}><span className='text-primary'>{comment.author}</span><div className='d-flex align-items-center justify-content-between'><p className='text-black'>{comment.comment}</p><p className='text-black'>Voto: {comment.rate}</p> </div></div>
                ))}
              </ul>
            ) : (
              <p>Caricamento..</p>
              )}
              <InserisciCommento elementID={extractMovieId(location.pathname)} currentCommentList={currentCommentList} updateComments={updateComments}/>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetail

