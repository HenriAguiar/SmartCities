'use client'
import React, { useState } from 'react';
import { getRestaurantById } from "@/lib/services/service"
import ComentarioPaginaDetalhe from './comentarios'
import { BsClock } from 'react-icons/bs';
import { BiAccessibility } from 'react-icons/bi';



const HorariosFuncionamento = ({ horarios }) => {
  const horariosArray = Object.entries(horarios);

  return (
    <div className="horarios-funcionamento">
      <h2>Horários de Funcionamento <BsClock style={{ marginRight: '8px' }} /> </h2>
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
              <td>
                <BsClock style={{ marginRight: '5px' }} /> {horario}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Acessibilidades = ({ acessibilidade }) => {
  const acessibilidadeArray = Object.entries(acessibilidade);

  const coresPastel = ['#B2DFDB', '#FFCCBC', '#FFD180', '#C5E1A5', '#FFAB91', '#80CBC4'];

  // Largura fixa das caixas em percentagem
  const larguraFixa = '18%'; // Ajuste conforme necessário
  const margemFixa = '2%'; // Ajuste conforme necessário

  return (
    <div className="container p-5" style={{ color: 'white' }}>
      <div className="acessibilidades">
        <h2>
          <span style={{ color: 'black' }}>Acessibilidades</span>{' '}
          <BiAccessibility style={{ marginRight: '8px', color: 'black' }} />
        </h2>
        <div className="row">
          {acessibilidadeArray.map(([item, descricao], index) => (
            <div
              key={index}
              className={`col-lg-2 col-md-3 col-sm-4 col-6 mb-3`}
              style={{
                color: 'black',
                width: larguraFixa,
                marginRight: index % 5 === 4 ? '0' : margemFixa, // Remova a margem à direita para a última caixa na linha
              }}
            >
              <div
                className="card"
                style={{
                  backgroundColor: coresPastel[index % coresPastel.length],
                  height: '100%', // Garante que a altura da caixa seja 100% da altura do contêiner
                }}
              >
                <div className="card-body">
                  <BiAccessibility style={{ marginRight: '5px' }} />
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


export default async function Detalhes({ params }) {
  const restaurantData = await getRestaurantById(params.slug);
  const tamanhoNomeRestaurante = 40;

  return (
    <>
      <div className="main-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', margin: 0 }}>
        <img
          src="/images/background-navbar.png"
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
      
      <Acessibilidades acessibilidade={restaurantData[0].acessibilidade} />

      <ComentarioPaginaDetalhe idRestaurante={params.slug} />
    </>
  );
};
























