"use client";

import { useState } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { searchRestaurantsByName } from "@/lib/services/service";
import * as Bootstrap from 'react-bootstrap';
import { BsPersonFill } from "react-icons/bs";

export default function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (search) => {
    setSearchTerm(search);
    if (search.length > 0) {
      const results = await searchRestaurantsByName(search);
      if (results) {
        setSearchResults(results);
      }
    } else {
      setSearchResults([]);
    }
  };

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
            <div className="position-relative">
              <Bootstrap.Form className="d-flex">
                <Bootstrap.FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </Bootstrap.Form>
              <div className="position-absolute start-0 mt-3" style={{ zIndex: 1000, maxHeight: '300px', overflowY: 'auto' }}>
                <div className="search-results">
                  {searchResults.length > 0 && (
                    <>
                      <ul className="list-group">
                        {searchResults.slice(0, 10).map((restaurante) => (
                          <li key={restaurante.id_restaurante} className="list-group-item">
                            <a href={`/detalhes/${restaurante.id_restaurante}`} className="text-decoration-none">
                              <p style={{color: 'black'}}>{restaurante.nome}</p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
            <Bootstrap.Button variant="outline-light" className="ms-auto">
              <BsPersonFill className="me-1" />
              Login
            </Bootstrap.Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
