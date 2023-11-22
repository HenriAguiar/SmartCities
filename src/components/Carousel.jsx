'use client'

import { useEffect, useRef } from 'react';
import CardCategoria from './CardCategoria';

const Carousel = ({categorias}) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then(() => {
      const myCarousel = new window.bootstrap.Carousel(carouselRef.current, {
        interval: 2000,
        wrap: true,
      });
    });
  }, []);

  return (
    <div className='container d-flex align-items-center justify-content-center'>
      <div id="carouselExample" className="carousel slide externo interno" ref={carouselRef}>
        <div className='carousel-inner  w-100'>
          <div className="carousel-item active">
            <div className='row row-cols-4'>
            {categorias.slice(0, 4).map((Categoria) => (
                <CardCategoria key={Categoria.id} imgUrl={Categoria.Imagem} nome={Categoria.nome} id={Categoria.id}/>
            ))}
            

            </div>
          </div>
          <div className="carousel-item">
            <div className='row row-cols-4'>
            {categorias.slice(4, 8).map((Categoria) => (
                <CardCategoria key={Categoria.id} imgUrl={Categoria.Imagem} nome={Categoria.nome} id={Categoria.id}/>
            ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className='row row-cols-4'>
            {categorias.slice(8, 12).map((Categoria) => (
                <CardCategoria key={Categoria.id} imgUrl={Categoria.Imagem} nome={Categoria.nome} id={Categoria.id}/>
            ))}
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
export default Carousel;

