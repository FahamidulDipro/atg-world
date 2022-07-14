import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import { MdOutlineExitToApp } from "react-icons/md";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiFillCaretDown } from "react-icons/ai";
import { MdGroupAdd } from "react-icons/md";
import {NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const SecondNavbar = () => {
  const [user] = useAuthState(auth);
  const handleJoinGroup = ()=>{
    
      alert("Please Log In to join Group");
    
  }
  const leaveGroupHandler = ()=>{
   
      signOut(auth);
    
  }
  return (
    <Navbar
      expand="lg"
      variant="light"
      className="container  border-bottom my-5"
    >
      <Container>
        <Navbar.Brand to="#home">All Posts(32)</Navbar.Brand>
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
              <button className="btn btn-light text-dark fw-bold">
                Write a Post <AiFillCaretDown></AiFillCaretDown>
              </button>
            </NavLink>
            <NavLink eventKey={2} to="#memes">
              {
                !user?  <button className="btn btn-primary ms-3" onClick={handleJoinGroup}>
                {" "}
                <MdGroupAdd style={{ fontSize: "20px" }} className="ms-2"></MdGroupAdd> Join
                Group
              </button>:<button className="btn btn-light ms-3" onClick={leaveGroupHandler}><MdOutlineExitToApp style={{ fontSize: "20px" }} className="me-2"/> Leave Group</button>
              }
            
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SecondNavbar;
