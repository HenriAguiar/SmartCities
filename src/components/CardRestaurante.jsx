import Image from "next/image"

export default function CardRestaurante() {
    return (
        <>
            <div className="col">
                <a href={``} className="Link">
                    <div className="card card-palestra">
                        <div className="ratio ratio-4x3">
                            <img src={``} alt="..." />
                        </div>
                        <div className="card-body d-flex">
                            <p className="TextoTag">aaaaaaaaaa</p>
                            <h5 href="#" className="card-title textInfoP">bbbbbbbbbbbbbbb</h5>
                            <div>
                                <div className="textoData">
                                    <p>ccccccccccccc</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}