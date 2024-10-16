import { Container, Nav, Navbar } from 'react-bootstrap'
import { LogoImage } from '../assets';

function Header() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#"><img src={LogoImage.logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <Nav.Link href="#action3">Explore</Nav.Link>
            <Nav.Link href="#action4">Reviws</Nav.Link>
            <Nav.Link href="#action5">FQA</Nav.Link>
            <button className='btn'>1213 343 333</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;