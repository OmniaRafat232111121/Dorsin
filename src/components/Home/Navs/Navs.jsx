
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container} from 'react-bootstrap';

import React from 'react'

const Navs = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
<Container>
  <Navbar.Brand href="#home">Dorsin</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto">
              <Nav.Link href="/">Home</Nav.Link>
             <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
             <Nav.Link href="/features">Features</Nav.Link>
           <Nav.Link href="/team">Team</Nav.Link>
           <Nav.Link href="/contact us">Contact Us</Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
</Container>
</Navbar>
    </div>
  )
}

export default Navs
