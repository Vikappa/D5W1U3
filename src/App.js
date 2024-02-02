import React, { useState } from 'react'
import './style/style.css'
import NetflixNavbar from './Components/NetflixNavbar'
import Body from './Components/Body'
function App() {
  const [currentuserName, setCurrentUserName] = useState("Anon")

  return (
    <>
      <NetflixNavbar userName={currentuserName} setCurrentUserName={setCurrentUserName}/>
      <Body currentuserName={currentuserName} />
    </>
  )
}

export default App;
