
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

const Detalhes = () => {
  const horariosRestaurante = {
    domingo: '10:00–20:00',
    sábado: '10:00–22:00',
    'sexta-feira': '10:00–22:00',
    'quarta-feira': '10:00–22:00',
    'quinta-feira': '10:00–22:00',
    'terça-feira': '10:00–22:00',
    'segunda-feira': '10:00–22:00',
  };

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
            src="https://jtjqaoakgnhcwspvtygj.supabase.co/storage/v1/object/public/imagens/Imagens%20Restaurantes/BurgerKing.png"
            alt="Logo"
          />
        </div>
        <p className="restaurant-name" style={{ fontSize: `${tamanhoNomeRestaurante}px`, fontFamily: 'Playfair Display, serif', fontWeight: 'regular', textAlign: 'center' }}>
          BURGER KING{' '}
          <PhoneOutlined className="icon" style={{ fontSize: `${tamanhoNomeRestaurante}px`, verticalAlign: 'middle' }} />
          <InstagramOutlined className="icon" style={{ fontSize: `${tamanhoNomeRestaurante}px`, verticalAlign: 'middle' }} />
        </p>
      </div>

      <div className="container p-2 grid-container">
        <div className="horarios-container">
          <HorariosFuncionamento horarios={horariosRestaurante} />
        </div>
        <div className="map-container">
          <iframe
            title="Mapa"
            width="100%"
            height="95%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.8808398398114!2d-48.335423424042425!3d-10.190331310121156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9324cb667a30fe93%3A0x11218e2564b2bff2!2sBurger%20King!5e0!3m2!1spt-BR!2sbr!4v1700229835625!5m2!1spt-BR!2sbr"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};














