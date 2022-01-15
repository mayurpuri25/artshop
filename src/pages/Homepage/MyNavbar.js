import React from "react";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../assets/css/homepage/mynavbar.css';


export default function MyNavbar() {
  return (
    <>
      <Navbar bg="light" expand="lg" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Row id="row">
            <Col id="col1" className="col_center" md="auto">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">About</Nav.Link>
                  <NavDropdown title="Categories" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Abstract
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Figurative
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Expressionism
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                    Pop Art
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">
                      Conceptual
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#link">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
            <Col id="col2" className="col" md="auto">
              <Link to="/"><Navbar.Brand className="logo">ArtLove</Navbar.Brand></Link>
            </Col>
            <Col id="col3" className="col" md="auto">
              <i className="icons" className="bx bx-search bx-xs p-2"></i>
              <Link to='/myaccount'><i className="icons bx bx-user bx-xs p-2"></i></Link>
              <i className="icons" className="bx bx-cart bx-xs p-2"></i>
              <Nav id="sell">
              <Nav.Link href="#link" pb-2>Sell</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}
