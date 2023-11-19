
const HorariosFuncionamento = ({ horarios }) => {
    const horariosArray = Object.entries(horarios);

    return (
        <div>
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

export default function Detalhes() {
    const horariosRestaurante = {
        "domingo": "10:00–20:00",
        "sábado": "10:00–22:00",
        "sexta-feira": "10:00–22:00",
        "quarta-feira": "10:00–22:00",
        "quinta-feira": "10:00–22:00",
        "terça-feira": "10:00–22:00",
        "segunda-feira": "10:00–22:00"
    };

    return (
        <>
            <div className="container p-5" style={{ position: 'relative', textAlign: 'center' }}>
                <img
                    src="https://i.pinimg.com/originals/f0/98/b1/f098b1474bc51d35964b6faa032605dd.jpg"
                    className="img-fluid"
                    alt="Imagem"
                    style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
                />
                <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
                    Nome do Restaurante{' '}
                </p>
            </div>

            <div className="container p-2" style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ flex: '1', marginRight: '10px' }}>
                    <HorariosFuncionamento horarios={horariosRestaurante} />
                </div>
                <div style={{ flex: '1', marginLeft: '10px' }}>
                    {/* Adicione aqui o componente do mapa */}
                    {/* Substitua o link abaixo com seu componente de mapa ou iframe do Google Maps */}
                    <iframe
                        title="Mapa"
                        width="100%"
                        height="300"
                        frameBorder="0"
                        style={{ border: 0 }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.575979434016!2d-0.12818138422964882!3d51.507780279636466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI3JzUzLjAiTiAxMMKwMTUnMzQuMyJF!5e0!3m2!1sen!2sus!4v1636530904245!5m2!1sen!2sus"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div className="container p-2" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
                <img
                    src="https://jtjqaoakgnhcwspvtygj.supabase.co/storage/v1/object/public/imagens/Imagens%20Restaurantes/BurgerKing.png" 
                    alt="Logo"
                    style={{ width: '150px', height: '150px', borderRadius: '50%' }}
                />
            </div>
        </>
    );
}













