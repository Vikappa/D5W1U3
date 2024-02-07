import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import UserName from './subcomponents/UserName'
import '../style/netflixnavbar.css'
import { Link } from 'react-router-dom'

function NetflixNavbar(props) {

  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="netflixNavbar" >
      <Container fluid>
          <Link to='/' className='navbar-brand'>
        <Navbar.Brand>
          <img
            src="./netflix_logo.png"
            className="d-inline-block align-top"
            alt="Netflix Logo"
            id='netflixLogo'
            />
        </Navbar.Brand>
            </Link>
        <div className="d-none d-lg-flex container-fluid">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>

            <Link to='/' className='nav-link'>
            <div className='navBarNavigators text-white'>Movies</div>
            </Link>

            <Link to='/tvshows' className='nav-link'>
            <div className='navBarNavigators text-white'>Tv Shows</div>
            </Link>

            <Nav.Link className='navBarNavigators text-white' href="#action2">Recently added</Nav.Link>
            <Nav.Link className='navBarNavigators text-white' href="#action2">My List</Nav.Link>
          </Nav>
        </div>
        <UserName currentPage={props.currentPage} setCurrentpage={props.setCurrentpage} userName={props.userName} setCurrentUserName={props.setCurrentUserName} showModal={props.showModal} setShowModal={props.setShowModal}/>
      </Container>
    </Navbar>
  )
}

export default NetflixNavbar;




