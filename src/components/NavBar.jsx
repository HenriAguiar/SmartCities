"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


export default function NavBar() {
  return (
    <>
      <Navbar className="bg-green-300 posicao-navbar" variant="dark" expand="lg">
        <Container className="gap-4">
          <div className="d-flex align-items-center">
            <a href="/" className="Link" >
              <img className="img-logotipo" src="/images/LogoPNGPreto.png"/>
            </a>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link className='link' href="/">Home</Nav.Link>
              <Nav.Link className='link' href="/">Menu</Nav.Link>
              <Nav.Link className='link' href="/">Shop</Nav.Link>
              <Nav.Link className='link' href="/">Service</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}