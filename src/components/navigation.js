import React from 'react';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Navigation() {
    return (
<Navbar variant="light">
<Navbar.Brand id="georgeChai" className="mr-auto" href="/" >George Chai</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link class="navWord" href="/">Work</Nav.Link>
      <Nav.Link class="navWord" href="./About">About</Nav.Link>
      <Nav.Link class="navWord" href="/s/George_Chai_Resume.pdf" target="_blank">Resume</Nav.Link>
    </Nav>
    {/* </div> */}
  </Navbar>
    ); 
}

export default Navigation;
