"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as Bootstrap from 'react-bootstrap';
import { BsPersonFill } from "react-icons/bs";

export default function NavBar() {

  return (
    <>
      <Navbar className="posicao-navbar" variant="dark" expand="lg">
        <Container className="gap-4">
          <div className="d-flex align-items-center">
            <a href="/" className="Link">
              <img className="img-logotipo" src="/images/LogoPNGPreto.png" alt="Logo" />
            </a>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='link' href="/">Home</Nav.Link>
              <Nav.Link className='link' href={'/#recomendados'}>Recomendados</Nav.Link>
              <Nav.Link className='link' href={'/#sobre'}>Sobre</Nav.Link>
              <Nav.Link className='link' href={'/#destaque'}>Destaque</Nav.Link>
            </Nav>
            <a href={`/login`} className="Link">
              <Bootstrap.Button
                variant="outline-light"
                className="ms-auto login-button"
              >
                <BsPersonFill className="me-1" />
                Login
              </Bootstrap.Button>
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}