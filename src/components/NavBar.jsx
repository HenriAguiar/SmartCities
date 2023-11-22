"use client";

import { useState } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { searchRestaurantsByName } from "@/lib/services/service";
import Image from "next/image";
import * as Bootstrap from 'react-bootstrap';
import { BsPersonFill } from "react-icons/bs";

export default function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchClick = async () => {
    window.location.href = `/detalhes?search=${searchTerm}`;
  };

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
            <Bootstrap.Form className="d-flex">
              <Bootstrap.FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
              />
              <Bootstrap.Button variant="outline-light" onClick={handleSearchClick}>
                Search
              </Bootstrap.Button>
            </Bootstrap.Form>
            <div className="search-results">
              {searchResults.length > 0 && (
                <>
                  <h3>Search Results:</h3>
                  <ul className="list-unstyled">
                    {searchResults.map((restaurante) => (
                      <li key={restaurante.id_restaurante} className="mb-3">
                        <a href={`/detalhes/${restaurante.id_restaurante}`}>
                          <h4>{restaurante.nome}</h4>
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <Bootstrap.Button
              variant="outline-light"
              className="ms-auto login-button"
            >
              <BsPersonFill className="me-1" />
                Login
            </Bootstrap.Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}