'use client'
import React, { useState } from 'react';
import { getRestaurantById } from "@/lib/services/service"
import ComentarioPaginaDetalhe from './comentarios'


const HorariosFuncionamento = ({ horarios }) => {
  const horariosArray = Object.entries(horarios);

  return (
    <div className="horarios-funcionamento">
      <h2>Horários de Funcionamento</h2>
      <table className="table table-sm">
        <thead>
          <tr>
            <th>Dia</th>
            <th>Horário</th>
          </tr>
        </thead>
        <tbody>
          {horariosArray.map(([dia, horario]) => (
            <tr key={dia}>
              <td>{dia}</td>
              <td>{horario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Acessibilidades = ({ acessibilidade }) => {
  const acessibilidadeArray = Object.entries(acessibilidade);

  return (
    <div className="container p-5">
      <div className="acessibilidades">
        <h2>Acessibilidades</h2>
        <div className="row">
          {acessibilidadeArray.map(([item, descricao], index) => (
            <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
              <div className="card" style={{ width: '100%' }}>
                <div className="card-body">
                  <p className="card-text">{descricao}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// No seu componente Detalhes, passe as informações de acessibilidade no formato JSON
export default async function Detalhes({ params }) {
  const restaurantData = await getRestaurantById(params.slug);
  const tamanhoNomeRestaurante = 40;

  return (
    <>
      <div className="main-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', margin: 0 }}>
        <img
          src="https://i.pinimg.com/originals/f0/98/b1/f098b1474bc51d35964b6faa032605dd.jpg"
          className="img-fluid"
          alt="Imagem"
          style={{ width: '100%' }}
        />
        <div className="logo-container">
          <img src={restaurantData[0].Foto[0].imagem} alt="Logo" />
        </div>
        <p className="restaurant-name" style={{ fontSize: `${tamanhoNomeRestaurante}px`, fontFamily: 'Playfair Display, serif', fontWeight: 'regular', textAlign: 'center' }}>
          {restaurantData[0].nome}
        </p>
      </div>

      <div className="container p-5 grid-container">
        <div className="horarios-container">
          <HorariosFuncionamento horarios={restaurantData[0].horarios} />
        </div>
        <div className="map-container">
          <iframe
            title="Mapa"
            width="100%"
            height="95%"
            frameBorder="0"
            style={{ border: 0 }}
            src={restaurantData[0].endereco}
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Passe as informações de acessibilidade no formato JSON para o componente Acessibilidades */}
      <Acessibilidades acessibilidade={restaurantData[0].acessibilidade} />

      <ComentarioPaginaDetalhe idRestaurante={params.slug} />
    </>
  );
};
























