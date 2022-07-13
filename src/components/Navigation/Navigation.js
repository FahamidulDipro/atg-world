import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Navigation = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
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
              title={user ? `${user?.email}` : `Create an Account.Its Free`}
              id="basic-nav-dropdown"
            >
              {!user ? (
                <>
                  {" "}
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
                        <p
                          style={{
                            fontSize: "11px",
                            backgroundColor: "#EFFFF4",
                          }}
                          className="p-2 text-success"
                        >
                          Let's learn, share & inspire each other with our
                          passion for computer engineering. Sign up now 🤘🏼
                        </p>
                        <Modal.Header closeButton>
                          <Modal.Title>Create Account</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Signup></Signup>
                        </Modal.Body>
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
                        <p
                          style={{
                            fontSize: "11px",
                            backgroundColor: "#EFFFF4",
                          }}
                          className="p-2 text-success"
                        >
                          Let's learn, share & inspire each other with our
                          passion for computer engineering. Sign up now 🤘🏼
                        </p>
                        <Modal.Header closeButton>
                          <Modal.Title>Sign In</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Login></Login>
                        </Modal.Body>
                      </Modal>
                    </>
                  </NavDropdown.Item>
                </>
              ) : (
                <NavDropdown.Item>
                  <button className="btn btn-primary" onClick={logout}>
                    Logout
                  </button>{" "}
                </NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
