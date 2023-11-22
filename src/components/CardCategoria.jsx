
export default function CardCategoria({ imgUrl, nome, avaliacao, id }) {
    console.log("o id dentro do card é")
    console.log(id)
    return (
        <>
            <div className="col ">
                <div className="d-flex align-items-center justify-items-center">
                    <a href={`/detalhes/${id}`} className="Link">
                        <div className="rounded-circle card-categoria d-flex align-items-center justify-content-center">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src='/images/imagemRestaurante.png' className="logo-container" style={{ height: 120, width: 120 }}></img>

                            </div>
                        </div>
                            <p className="text-center pt-4">categoria</p>
                    </a>
                </div>
            </div>
        </>
    )
}