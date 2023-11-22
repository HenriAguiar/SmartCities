
export default function CardCategoria({ imgUrl, nome, id }) {
    console.log("o id dentro do card é")
    console.log(imgUrl)
    return (
        <>
            <div className="col d-flex flex-column align-items-center justify-items-center">
                <div className="d-flex align-items-center justify-items-center">
                    <a href={`/restaurantes/${id}`} className="Link">
                        <div className="rounded-circle card-categoria d-flex align-items-center justify-content-center">
                                <img src={imgUrl} className="imagem"></img>
                        </div>
                            <p className="text-center pt-4">{nome}</p>
                    </a>
                </div>
            </div>
        </>
    )
}