import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

  




function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          
          <strong><h4>OKIKI.DEV</h4></strong>
          </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#Home">
            
          <Nav.Item className="fork-btn">
              <Button className="fork-btn-inner">
              <Nav.Link
                as={Link}
                to="/Home"
                onClick={() => updateExpanded(false)}
              >Home
                
              </Nav.Link>
              </Button>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button className="fork-btn-inner">
              <Nav.Link
                as={Link}
                to="/Projects"
                onClick={() => updateExpanded(false)}
              >Projects
                
              </Nav.Link>
              </Button>
            </Nav.Item>

            
            <Nav.Item className="fork-btn">
              <Button className="fork-btn-inner">
              <Nav.Link
                as={Link}
                to="/Resume"
                onClick={() => updateExpanded(false)}
              >Resume
                
              </Nav.Link>
              </Button>
            </Nav.Item>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
