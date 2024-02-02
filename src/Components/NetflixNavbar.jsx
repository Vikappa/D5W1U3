import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import UserName from './subcomponents/UserName'

function NetflixNavbar(props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="./netflix_logo.png"
            height="30"
            className="d-inline-block align-top"
            alt="Netflix Logo"
          />
        </Navbar.Brand>
        <div className="d-none d-lg-flex container-fluid">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
          </Nav>
        </div>
        <UserName userName={props.userName} setCurrentUserName={props.setCurrentUserName}/>
      </Container>
    </Navbar>
  )
}

export default NetflixNavbar;




