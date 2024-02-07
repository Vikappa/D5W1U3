import React, { useState } from 'react'
import './style/style.css'
import NetflixNavbar from './Components/NetflixNavbar'
import Body from './Components/Body'
import ModalSignIn from './Components/ModalSignIn'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TVShows from './Components/TVShows'
import MovieDetail from './Components/MovieDetail'

function App() {
  const [currentuserName, setCurrentUserName] = useState("Anon")
  const [showModal, setShowModal] = useState(false)

  return (
    <BrowserRouter>
      <NetflixNavbar userName={currentuserName}  showModal={showModal} setShowModal={setShowModal} />
        <ModalSignIn showModal={showModal} setShowModal={setShowModal} setCurrentUserName={setCurrentUserName} />
      <Routes>
        <Route path='/' element={<Body currentuserName={currentuserName} />}>
        </Route>
        <Route path='/tvshows' element={<TVShows currentuserName={currentuserName} />} >
        </Route>
        <Route path="/movie-details/:movieId" element={<MovieDetail  />} />
        {/* ROTTA CATCH ERRORI INDIRIZZO */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
