'use client'
import React, { useState } from 'react';
import { getRestaurantById } from "@/lib/services/service"

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

const Comentarios = () => {
  const [comentario, setComentario] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [avaliacao, setAvaliacao] = useState(0);
  const [comentariosList, setComentariosList] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const comentariosPorPagina = 3;

  const handleComentarioChange = (e) => {
    setComentario(e.target.value);
  };

  const handleNomeUsuarioChange = (e) => {
    setNomeUsuario(e.target.value);
  };

  const handleAvaliacaoChange = (e) => {
    setAvaliacao(parseInt(e.target.value, 10));
  };

  const handleComentarioSubmit = (e) => {
    e.preventDefault();
    if (nomeUsuario.trim() !== '' && comentario.trim() !== '' && avaliacao > 0 && avaliacao <= 5) {
      const novoComentario = {
        nomeUsuario,
        avaliacao,
        comentario,
      };
      setComentariosList([...comentariosList, novoComentario]);
      setNomeUsuario('');
      setAvaliacao(0);
      setComentario('');
    }
  };

  const indiceInicial = (paginaAtual - 1) * comentariosPorPagina;
  const indiceFinal = paginaAtual * comentariosPorPagina;

  const comentariosPaginaAtual = comentariosList.slice(indiceInicial, indiceFinal);

  return (
    <div className="comentarios-container container mt-4">
      <h2>Comentários</h2>
      <form onSubmit={handleComentarioSubmit} className="mb-4">
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="nomeUsuario">Nome:</label>
            <input
              type="text"
              id="nomeUsuario"
              className="form-control"
              value={nomeUsuario}
              onChange={handleNomeUsuarioChange}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="avaliacao">Avaliação:</label>
            <select
              id="avaliacao"
              className="form-control"
              value={avaliacao}
              onChange={handleAvaliacaoChange}
            >
              <option value="0">Escolha uma avaliação</option>
              {[1, 2, 3, 4, 5].map((numero) => (
                <option key={numero} value={numero}>
                  {numero}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="comentario">Comentário:</label>
          <textarea
            id="comentario"
            className="form-control"
            rows="4"
            value={comentario}
            onChange={handleComentarioChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar Comentário
        </button>
      </form>

      <ul className="list-group mt-3">
        {comentariosPaginaAtual.map((comentario, index) => (
          <li key={index} className="list-group-item">
            <p>
              <strong>{comentario.nomeUsuario}</strong>
              <br />
              Avaliação: {comentario.avaliacao} estrelas
            </p>
            <p>{comentario.comentario}</p>
          </li>
        ))}
      </ul>

      <div className="pagination mt-3">
        <button
          className="btn btn-light"
          onClick={() => setPaginaAtual(Math.max(1, paginaAtual - 1))}
          disabled={paginaAtual === 1}
        >
          Anterior
        </button>
        <span className="mx-2">
          Página {paginaAtual} de {Math.ceil(comentariosList.length / comentariosPorPagina)}
        </span>
        <button
          className="btn btn-light"
          onClick={() => setPaginaAtual(Math.min(Math.ceil(comentariosList.length / comentariosPorPagina), paginaAtual + 1))}
          disabled={paginaAtual === Math.ceil(comentariosList.length / comentariosPorPagina)}
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default async function Detalhes({ params }) {

  const restaurantData = await getRestaurantById(params.slug)
  const tamanhoNomeRestaurante = 40;

  return (
    <>
      <div className="container p-5 main-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src="https://i.pinimg.com/originals/f0/98/b1/f098b1474bc51d35964b6faa032605dd.jpg"
          className="img-fluid"
          alt="Imagem"
        />
        <div className="logo-container">
          <img
            src={restaurantData[0].Foto[0].imagem}
            alt="Logo"
          />
        </div>
        <p className="restaurant-name" style={{ fontSize: `${tamanhoNomeRestaurante}px`, fontFamily: 'Playfair Display, serif', fontWeight: 'regular', textAlign: 'center' }}>
          {restaurantData[0].nome}
        </p>
      </div>

      <div className="container p-2 grid-container">
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
      <Comentarios />
    </>
  );
};




















