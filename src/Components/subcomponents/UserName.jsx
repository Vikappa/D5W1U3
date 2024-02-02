import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';

import './username.css'

function UserName(props) {
  const handleClick = (e) => {
    e.preventDefault()
  }

  const clickSignIn = (e) => {
    e.preventDefault()
    props.setShowModal(true)
  }

  return (
    <div className="mt-2 d-flex justify-content-center align-items-center custom-split-button">
      <SplitButton
        align={{ lg: 'end' }}
        title={props.userName === "Anon"? <p className='text-nowrap p-0 m-0' id="userNameButton">Sign in</p> : <p className='text-nowrap p-0 m-0'>{props.userName}</p>}
        id="signInButton"
        className='d-flex justify-content-center align-items-center'
        onClick={handleClick}
      >
{
  props.userName === "Anon"
  ? <Dropdown.Item onClick={clickSignIn} href="/login">Sign in</Dropdown.Item>
  : <>
      <Dropdown.Item href="#">Profile</Dropdown.Item>
      <Dropdown.Item href="#">Settings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="/logout">Logout</Dropdown.Item>
    </>
}
      </SplitButton>
    </div>
  )
}

export default UserName
