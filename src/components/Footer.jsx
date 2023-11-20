import "bootstrap-icons/font/bootstrap-icons.css";

export default function Rodape() {
    return (
        <>
            <div className="rodape">
                <div className="container">
                    <div className="row align-items-center logoSite">
                        <div className="col-md-12 col-lg-3 mb-md-2">
                            <div className="d-flex justify-content-start">
                                <img className=""
                                    src="/images/LogoPNGPreto.png"
                                    alt="Logo Preto"
                                    style={{ height: "8rem" }}
                                />
                            </div>

                        </div>
                        <div className=" col-md-12 col-lg-6 mb-sm-5 mb-md-0">
                            <h4 className="tituloRodape">Links úteis</h4>
                        </div>
                        <div className=" col-md-12 col-lg-3 mb-sm-5 mb-md-0">
                            <h4 className="tituloRodape">Redes Sociais</h4>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-lg-3 md-12">
                            <ul className="list-unstyled">
                                <li>
                                    <h6 className="linkSemDecoracao">
                                        Sua bússola gourmet!
                                    </h6>
                                </li>
                                <li>
                                    <h6 className="linkSemDecoracao">
                                        Descubra. Deguste. Discuta.
                                    </h6>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 md-12">
                            <div className="row">
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="linkSemDecoracao" href="/">
                                            Sobre
                                        </a>
                                    </li>

                                    <li>
                                        <a className="linkSemDecoracao" href="/">
                                            Eventos
                                        </a>
                                    </li>

                                    <li>
                                        <a className="linkSemDecoracao" href="/">
                                            FAQ
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 md-12">
                            <div className="row">
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="linkSemDecoracao" href="/">
                                            Home
                                        </a>
                                    </li>

                                    <li>
                                        <a className="linkSemDecoracao" href="/">
                                            Ofertas
                                        </a>
                                    </li>

                                    <li>
                                        <a className="linkSemDecoracao" href="/">
                                            Menu
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 md-12">
                            <div className="row">
                                <ul className="list-unstyled">
                                    <li>
                                        <a
                                            className="linkSemDecoracao"
                                            href="https://www.instagram.com/helyezer_teofilo/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
                                        >
                                            <i className="bi bi-instagram fs-4"></i> Product Owner
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="linkSemDecoracao"
                                            href="https://www.instagram.com/henri.aguiar/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
                                        >
                                            <i className="bi bi-instagram fs-4"></i> Henrique boiola
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="linkSemDecoracao"
                                            href="https://www.instagram.com/joaovictordss.png/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
                                        >
                                            <i className="bi bi-instagram fs-4"></i> Design Manager
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="linkSemDecoracao"
                                            href="https://www.youtube.com/@renatocariani"
                                        >
                                            <i className="bi bi-youtube fs-4"></i> Projeto de 30 dias
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
