import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import { AiFillCaretDown } from "react-icons/ai";
import { MdGroupAdd } from "react-icons/md";
import {NavLink } from "react-router-dom";
const SecondNavbar = () => {
  return (
    <Navbar
      expand="lg"
      variant="light"
      className="container  border-bottom my-5"
    >
      <Container>
        <Navbar.Brand to="#home">All Posts</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/article" className="text-decoration-none text-dark me-2">Article</NavLink>
            <NavLink to="/event"  className="text-decoration-none text-dark me-2">Event</NavLink>
            <NavLink to="/education"  className="text-decoration-none text-dark me-2">Education</NavLink>
            <NavLink to="/job"  className="text-decoration-none text-dark me-2">Job</NavLink>
          </Nav>
          <Nav>
            <NavLink to="#deets">
              <button className="btn btn-light text-dark">
                Write a Post <AiFillCaretDown></AiFillCaretDown>
              </button>
            </NavLink>
            <NavLink eventKey={2} to="#memes">
              <button className="btn btn-primary">
                {" "}
                <MdGroupAdd style={{ fontSize: "20px" }} className="ms-2"></MdGroupAdd> Join
                Group
              </button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SecondNavbar;
