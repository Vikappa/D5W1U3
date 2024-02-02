import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import './username.css'

function UserName(props) {
  return (
    <div className="mt-2 d-flex justify-content-center align-items-center custom-split-button">
      <SplitButton
        align={{ lg: 'start' }}
        title={props.userName === "Anon"? <p className='text-nowrap p-0 m-0' id="userNameButton">Sign in</p> : <p className='text-nowrap p-0 m-0'>{props.userName}</p>}
        id="signInButton"
        className='d-flex justify-content-center align-items-center'
      >
        <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
        <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="3">Action 3</Dropdown.Item>
      </SplitButton>
    </div>
  )
}

export default UserName;
