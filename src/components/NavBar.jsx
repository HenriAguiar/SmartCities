"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { BsPersonFill } from "react-icons/bs";


export default function NavBar() {
  return (
    <>
      <Navbar className="bg-green-300 posicao-navbar custom-navbar" variant="dark" expand="lg">
        <Container className="gap-4">
          <div className="d-flex align-items-center">
            <a href="/" className="Link">
              <img className="img-logotipo" src="/images/LogoPNGPreto.png" alt="Logo"/>
            </a>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='link' href="/">Home</Nav.Link>
              <Nav.Link className='link' href="/">Menu</Nav.Link>
              <Nav.Link className='link' href="/">Shop</Nav.Link>
              <Nav.Link className='link' href="/">Service</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Sushi"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Pesquisar</Button>
            </Form>
            <Button variant="success" className="ms-2 login-button">
              <BsPersonFill /> Login
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}