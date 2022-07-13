import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";

const Navigation = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);
  return (
    <Navbar bg="light" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand className="text-uppercase ">
          <NavLink to="/" className="text-decoration-none text-dark fw-bold">
            ATG World
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto">
            <NavDropdown
              title="Create an Account.Its Free"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                {" "}
                <>
                  <Button
                    variant="link text-decoration-none text-dark"
                    onClick={handleShow}
                  >
                    Signup
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Signup></Signup>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <>
                  <Button
                    variant="link text-decoration-none text-dark"
                    onClick={handleShow2}
                  >
                    Login
                  </Button>

                  <Modal show={show2} onHide={handleClose2}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Login></Login>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose2}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose2}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item>
                <button className="btn btn-primary">Logout</button>{" "}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
