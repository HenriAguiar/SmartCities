import React, { useState, useEffect } from 'react';
import { getRestaurantById } from "@/lib/services/service";
import './stars.scss';
import { BiChat } from 'react-icons/bi';

const StarRating = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : 'empty'}`}>&#9733;</span>
    ));
  
    return <div className="star-rating">{stars}</div>;
  };

export default function ComentarioPaginaDetalhe({ idRestaurante }) {
  const [comentariosList, setComentariosList] = useState([]);
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [avaliacao, setAvaliacao] = useState(0);
  const [novoComentario, setNovoComentario] = useState('');
  const [paginaAtual, setPaginaAtual] = useState(1);
  const comentariosPorPagina = 3;

  useEffect(() => {
    const fetchComentarios = async () => {
      if (!idRestaurante) {
        return;
      }

      const restaurantData = await getRestaurantById(idRestaurante);

      if (restaurantData && restaurantData.length > 0 && restaurantData[0].Avaliacao) {
        setComentariosList(restaurantData[0].Avaliacao);
      }
    };

    fetchComentarios();
  }, [idRestaurante]);

  const handleNomeUsuarioChange = (e) => {
    setNomeUsuario(e.target.value);
  };

  const handleAvaliacaoChange = (e) => {
    setAvaliacao(parseInt(e.target.value, 10));
  };

  const handleComentarioChange = (e) => {
    setNovoComentario(e.target.value);
  };

  const handleComentarioSubmit = async (e) => {
    e.preventDefault();

    if (nomeUsuario.trim() !== '' && novoComentario.trim() !== '' && avaliacao > 0 && avaliacao <= 5) {
      setComentariosList([...comentariosList, { Usuario: { nome: nomeUsuario }, nota: avaliacao, comentario: novoComentario }]);

      setNomeUsuario('');
      setAvaliacao(0);
      setNovoComentario('');
    }
  };

  const indiceInicial = (paginaAtual - 1) * comentariosPorPagina;
  const indiceFinal = paginaAtual * comentariosPorPagina;
  const comentariosPaginaAtual = comentariosList.slice(indiceInicial, indiceFinal);

  return (
    <div className="comentarios-container container mt-4">
      <h2>Comentários <BiChat style={{ marginRight: '8px' }} /></h2>

      <ul className="list-group mt-3">
        {comentariosPaginaAtual.map((comentario, index) => (
          <li key={index} className="list-group-item">
            <p>
              <strong>{comentario.Usuario.nome}</strong>
              <br />
              Avaliação: <StarRating rating={comentario.nota} />
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
          onClick={() =>
            setPaginaAtual(
              Math.min(Math.ceil(comentariosList.length / comentariosPorPagina), paginaAtual + 1)
            )
          }
          disabled={paginaAtual === Math.ceil(comentariosList.length / comentariosPorPagina)}
        >
          Próxima
        </button>
      </div>

      <form onSubmit={handleComentarioSubmit} className="mt-4">
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
          <label htmlFor="novoComentario">Novo Comentário:</label>
          <textarea
            id="novoComentario"
            className="form-control"
            rows="4"
            value={novoComentario}
            onChange={handleComentarioChange}
          ></textarea>
        </div>
        <button type="submit" className="custom-button">
            Enviar Comentário
        </button> 
      </form>
    </div>
  );
}





