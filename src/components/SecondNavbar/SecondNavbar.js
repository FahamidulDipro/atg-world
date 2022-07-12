import React from 'react';
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Form,
    Button,
  } from "react-bootstrap";
const SecondNavbar = () => {
    return (
        <Navbar  expand="lg"  variant="light" className='container  border-bottom my-5'>
        <Container >
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="me-auto">
              <Nav.Link href="#features">Article</Nav.Link>
              <Nav.Link href="#pricing">Event</Nav.Link>
              <Nav.Link href="#pricing">Education</Nav.Link>
              <Nav.Link href="#pricing">Job</Nav.Link>
             
             
            </Nav>
            <Nav>
              <Nav.Link href="#deets"><button className='btn btn-light'>Write a Post</button></Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
              <button className='btn btn-primary'>Join Group</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default SecondNavbar;