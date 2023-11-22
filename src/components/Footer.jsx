'use client'
import "bootstrap-icons/font/bootstrap-icons.css";
import Animacao from './animacao';

export default function Rodape() {
    return (
        <>
            <div className="rodape">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 md-12">
                            <ul className="list-unstyled">
                                <li>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <h4 className="tituloRodape">Links úteis</h4>
                                    </div>
                                </li>
                                <li>
                                    <a className="linkSemDecoracao d-flex align-items-center justify-content-center" href="/">
                                        Home
                                    </a>
                                </li>

                                <li>
                                    <a className="linkSemDecoracao d-flex align-items-center justify-content-center" href="/#recomendados">
                                        Recomendados
                                    </a>
                                </li>

                                <li>
                                    <a className="linkSemDecoracao d-flex align-items-center justify-content-center" href="/#sobre">
                                        Sobre
                                    </a>
                                </li>

                                <li>
                                    <a className="linkSemDecoracao d-flex align-items-center justify-content-center" href="/#destaque">
                                        Destaque
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 md-12">
                            <ul className="list-unstyled">
                                <li>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <h4 className="tituloRodape RedeSocial">Redes Sociais</h4>
                                    </div>
                                </li>
                                <li>
                                    <a
                                        className="linkSemDecoracao d-flex align-items-center justify-content-center"
                                        href="https://www.instagram.com/helyezer_teofilo/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
                                    >
                                        <i className="bi bi-instagram fs-4 me-1"></i> Product Owner
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="linkSemDecoracao d-flex align-items-center justify-content-center"
                                        href="https://www.instagram.com/henri.aguiar/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
                                    >
                                        <i className="bi bi-instagram fs-4 me-1"></i> Desenvolvedor Web
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="linkSemDecoracao d-flex align-items-center justify-content-center"
                                        href="https://www.instagram.com/joaovictordss.png/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
                                    >
                                        <i className="bi bi-instagram fs-4 me-1"></i> Design Manager
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 md-12">
                            <ul className="list-unstyled">
                                <li>
                                    <div className="colLogo d-flex flex-column">
                                        <img
                                            src="/images/LogoPNGPreto.png"
                                            alt="Logo Preto"
                                            style={{ height: "8rem" }}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <h6 className="linkSemDecoracao mt-2 text-center">
                                        Sua bússola gourmet!
                                    </h6>
                                </li>
                                <li>
                                    <h6 className="linkSemDecoracao text-center">
                                        Descubra. Deguste. Discuta.
                                    </h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <div className="colAnimacao d-flex">
                            <Animacao />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
