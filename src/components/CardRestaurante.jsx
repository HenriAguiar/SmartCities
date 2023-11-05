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
                        <div className="card-body d-flex align-items-center justify-items-center">
                            <div className="row row-cols-1">
                                <div className="col">
                                    <p className="TextoTag">aaaaaaaaaa</p>
                                </div>
                                <div className="col">
                                    <h5 href="#" className="card-title textInfoP">bbbbbbbbbbbbbbb</h5>

                                </div>
                                <div className="textoData col">
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