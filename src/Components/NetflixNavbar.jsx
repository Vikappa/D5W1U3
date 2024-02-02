import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import UserName from './subcomponents/UserName'
import '../style/netflixnavbar.css'

function NetflixNavbar(props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="netflixNavbar" >
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="./netflix_logo.png"
            className="d-inline-block align-top"
            alt="Netflix Logo"
            id='netflixLogo'
          />
        </Navbar.Brand>
        <div className="d-none d-lg-flex container-fluid">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link className='navBarNavigators text-white' href="#action1">Home</Nav.Link>
            <Nav.Link className='navBarNavigators text-white' href="#action2">Tv Shows</Nav.Link>
            <Nav.Link className='navBarNavigators text-white' href="#action2">Movies</Nav.Link>
            <Nav.Link className='navBarNavigators text-white' href="#action2">Recently added</Nav.Link>
            <Nav.Link className='navBarNavigators text-white' href="#action2">My List</Nav.Link>
          </Nav>
        </div>
        <UserName userName={props.userName} setCurrentUserName={props.setCurrentUserName} showModal={props.showModal} setShowModal={props.setShowModal}/>
      </Container>
    </Navbar>
  )
}

export default NetflixNavbar;




