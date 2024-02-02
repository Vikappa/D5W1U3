import React, { useState } from 'react'
import './style/style.css'
import NetflixNavbar from './Components/NetflixNavbar'
import Body from './Components/Body'
import ModalSignIn from './Components/ModalSignIn'
function App() {
  const [currentuserName, setCurrentUserName] = useState("Anon")
  const [showModal, setShowModal] = useState(false)


  return (
    <>
      <NetflixNavbar userName={currentuserName}  showModal={showModal} setShowModal={setShowModal}/>
      <Body currentuserName={currentuserName} />
      <ModalSignIn showModal={showModal} setShowModal={setShowModal} setCurrentUserName={setCurrentUserName} />
    </>
  )
}

export default App;
