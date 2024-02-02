import React, { useState } from 'react'
import './style/style.css'
import NetflixNavbar from './Components/NetflixNavbar'
import Body from './Components/Body'
import ModalSignIn from './Components/ModalSignIn'
function App() {
  const [currentuserName, setCurrentUserName] = useState("Anon")
  const [showModal, setShowModal] = useState(false)
  const [currentPage, setCurrentpage] = useState("gallery")


  return (
    <>
      <NetflixNavbar userName={currentuserName}  showModal={showModal} setShowModal={setShowModal} currentPage={currentPage} setCurrentpage={setCurrentpage} />
      <Body currentuserName={currentuserName} currentPage={currentPage} setCurrentpage={setCurrentpage} />
      <ModalSignIn showModal={showModal} setShowModal={setShowModal} setCurrentUserName={setCurrentUserName} />
    </>
  )
}

export default App;
