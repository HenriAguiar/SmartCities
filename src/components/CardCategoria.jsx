
export default function CardCategoria({ imgUrl,nome,avaliacao,id}) {
    console.log("o id dentro do card é")
    console.log(id)
    return (
        <>
            <div className="col">
                <a href={`/detalhes/${id}`} className="Link">
                    <div className="card card-palestra">
                        <div className="container h-100 pb-3 pt-3">
                            <div className="rounded-circle">
                                <img src={imgUrl} className=""></img>
                            </div>
                            <div className="card-body d-flex align-items-center justify-items-center">
                                <p>categoria</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}