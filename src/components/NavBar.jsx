"use client";

import { useState } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form, FormControl, Button } from 'react-bootstrap';
import { searchRestaurantsByName } from '@/services/service';
import Image from "next/image"

export default function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchClick = async () => {
    // Redirecionar para a página /detalhes com base no termo de pesquisa
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
              <Nav.Link className='link' href="/">Menu</Nav.Link>
              <Nav.Link className='link' href="/">Shop</Nav.Link>
              <Nav.Link className='link' href="/">Service</Nav.Link>
            </Nav>

            {/* Adicionando a barra de pesquisa */}
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
              />
              <Button variant="outline-light" onClick={handleSearchClick}>
                Search
              </Button>
            </Form>

            {/* Adicionando o componente de resultados de pesquisa */}
            <div className="search-results">
              {searchResults.length > 0 && (
                <>
                  <h3>Search Results:</h3>
                  <ul className="list-unstyled">
                    {searchResults.map((restaurante) => (
                      <li key={restaurante.id_restaurante} className="mb-3">
                        {/* Adicionando um link para a página de detalhes */}
                        <a href={`/detalhes?id=${restaurante.id_restaurante}`}>
                          <h4>{restaurante.nome}</h4>
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
