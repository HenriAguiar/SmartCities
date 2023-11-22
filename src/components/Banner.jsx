"use client";

import { useState } from 'react';
import { searchRestaurantsByName } from "@/lib/services/service";
import * as Bootstrap from 'react-bootstrap';


export default function Banner() {
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
    <div className="banner-container" style={{ position: 'relative', width: '100%', height: '300px' }}>
      <img
        src="/images/background-navbar.png"
        alt="Banner"
        className="banner-image"
        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
      />
      <div className="banner-content" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff' }}>
        <h1 style={{ color: 'black', fontStyle: 'italic', fontFamily: 'serif' }}>Onde vamos?</h1>
        <div className="position-relative">
          <Bootstrap.Form className="d-flex">
            <Bootstrap.FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              style={{ width: '600px' }}
            />
          </Bootstrap.Form>
          <div className="position-absolute start-0 mt-3" style={{ zIndex: 1000, maxHeight: '300px', overflowY: 'auto'}}>
            <div className="search-results" style={{ width: '600px', textAlign: 'left' }}>
              {searchResults.length > 0 && (
                <>
                  <ul className="list-group" style={{ width: '100%', padding: 0 }}>
                    {searchResults.slice(0, 4).map((restaurante) => (
                      <li key={restaurante.id_restaurante} className="list-group-item" style={{ textAlign: 'center'}}>
                        <a href={`/detalhes/${restaurante.id_restaurante}`} className="text-decoration-none">
                          <p style={{ color: 'black', margin: 0 }}>{restaurante.nome}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}