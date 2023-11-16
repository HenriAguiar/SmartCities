import Image from "next/image"

export default function CardRestaurante({ imgUrl,nome,avaliacao}) {
    return (
        <>
            <div className="col">
                <a href='/detalhes' className="Link">
                    <div className="card card-palestra">
                        <div className="container h-100 pb-3 pt-3">
                            <div className="ratio ratio-4x3">
                                <img src={imgUrl} className=""></img>
                            </div>
                            <div className="card-body d-flex align-items-center justify-items-center">
                                <div className="row row-cols-1">
                                    <div className="col">
                                        <div className="d-flex fw-bold fs-5 align-items-center pb-2">{nome}</div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex justify-content-start">
                                            <svg className="p-0" width="24" height="20" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.1042 0.895752C21.6497 0.917646 20.227 1.31057 18.9796 2.03484C17.7322 2.75911 16.7045 3.78909 16 5.02075C15.2956 3.78909 14.2678 2.75911 13.0205 2.03484C11.7731 1.31057 10.3503 0.917646 8.89586 0.895752C6.57724 0.99324 4.39273 1.97482 2.81958 3.62604C1.24643 5.27727 0.412516 7.46391 0.500028 9.70825C0.500028 15.392 6.68194 21.5995 11.8667 25.8083C13.0243 26.7497 14.4879 27.2658 16 27.2658C17.5121 27.2658 18.9757 26.7497 20.1334 25.8083C25.3181 21.5995 31.5 15.392 31.5 9.70825C31.5875 7.46391 30.7536 5.27727 29.1805 3.62604C27.6073 1.97482 25.4228 0.99324 23.1042 0.895752Z" fill="#17E168" />
                                            </svg>
                                            <svg className="p-0" width="24" height="20" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.1042 0.895752C21.6497 0.917646 20.227 1.31057 18.9796 2.03484C17.7322 2.75911 16.7045 3.78909 16 5.02075C15.2956 3.78909 14.2678 2.75911 13.0205 2.03484C11.7731 1.31057 10.3503 0.917646 8.89586 0.895752C6.57724 0.99324 4.39273 1.97482 2.81958 3.62604C1.24643 5.27727 0.412516 7.46391 0.500028 9.70825C0.500028 15.392 6.68194 21.5995 11.8667 25.8083C13.0243 26.7497 14.4879 27.2658 16 27.2658C17.5121 27.2658 18.9757 26.7497 20.1334 25.8083C25.3181 21.5995 31.5 15.392 31.5 9.70825C31.5875 7.46391 30.7536 5.27727 29.1805 3.62604C27.6073 1.97482 25.4228 0.99324 23.1042 0.895752Z" fill="#17E168" />
                                            </svg>
                                            <svg className="p-0" width="24" height="20" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.1042 0.895752C21.6497 0.917646 20.227 1.31057 18.9796 2.03484C17.7322 2.75911 16.7045 3.78909 16 5.02075C15.2956 3.78909 14.2678 2.75911 13.0205 2.03484C11.7731 1.31057 10.3503 0.917646 8.89586 0.895752C6.57724 0.99324 4.39273 1.97482 2.81958 3.62604C1.24643 5.27727 0.412516 7.46391 0.500028 9.70825C0.500028 15.392 6.68194 21.5995 11.8667 25.8083C13.0243 26.7497 14.4879 27.2658 16 27.2658C17.5121 27.2658 18.9757 26.7497 20.1334 25.8083C25.3181 21.5995 31.5 15.392 31.5 9.70825C31.5875 7.46391 30.7536 5.27727 29.1805 3.62604C27.6073 1.97482 25.4228 0.99324 23.1042 0.895752Z" fill="#17E168" />
                                            </svg>
                                            <svg className="p-0" width="24" height="20" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.1042 0.895752C21.6497 0.917646 20.227 1.31057 18.9796 2.03484C17.7322 2.75911 16.7045 3.78909 16 5.02075C15.2956 3.78909 14.2678 2.75911 13.0205 2.03484C11.7731 1.31057 10.3503 0.917646 8.89586 0.895752C6.57724 0.99324 4.39273 1.97482 2.81958 3.62604C1.24643 5.27727 0.412516 7.46391 0.500028 9.70825C0.500028 15.392 6.68194 21.5995 11.8667 25.8083C13.0243 26.7497 14.4879 27.2658 16 27.2658C17.5121 27.2658 18.9757 26.7497 20.1334 25.8083C25.3181 21.5995 31.5 15.392 31.5 9.70825C31.5875 7.46391 30.7536 5.27727 29.1805 3.62604C27.6073 1.97482 25.4228 0.99324 23.1042 0.895752Z" fill="#17E168" />
                                            </svg>
                                            <svg className="p-0" width="24" height="20" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.1042 0.895752C21.6497 0.917646 20.227 1.31057 18.9796 2.03484C17.7322 2.75911 16.7045 3.78909 16 5.02075C15.2956 3.78909 14.2678 2.75911 13.0205 2.03484C11.7731 1.31057 10.3503 0.917646 8.89586 0.895752C6.57724 0.99324 4.39273 1.97482 2.81958 3.62604C1.24643 5.27727 0.412516 7.46391 0.500028 9.70825C0.500028 15.392 6.68194 21.5995 11.8667 25.8083C13.0243 26.7497 14.4879 27.2658 16 27.2658C17.5121 27.2658 18.9757 26.7497 20.1334 25.8083C25.3181 21.5995 31.5 15.392 31.5 9.70825C31.5875 7.46391 30.7536 5.27727 29.1805 3.62604C27.6073 1.97482 25.4228 0.99324 23.1042 0.895752Z" fill="#17E168" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="position-absolute bottom-0 right-0 p-3 container">
                                <div className="row row-cols-2">
                                    <div className="col col-9 pe-0 d-flex justify-content-end">
                                        <svg className="" width="30" height="30" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.68546 9.19103C7.61546 9.19131 7.54642 9.1748 7.48413 9.14289L5.25202 7.97431L3.01991 9.14289C2.94743 9.181 2.86571 9.19801 2.78404 9.19199C2.70238 9.18597 2.62403 9.15716 2.55792 9.10883C2.49181 9.06051 2.44059 8.9946 2.41007 8.91861C2.37956 8.84262 2.37097 8.75959 2.3853 8.67896L2.82296 6.21489L1.01977 4.46421C0.963512 4.40807 0.923603 4.33767 0.904326 4.26056C0.885049 4.18346 0.887133 4.10256 0.910354 4.02655C0.935721 3.94876 0.982383 3.87964 1.04505 3.82704C1.10771 3.77443 1.18386 3.74044 1.26486 3.72893L3.75957 3.36567L4.85812 1.12043C4.89396 1.04643 4.94992 0.984025 5.01958 0.94036C5.08925 0.896694 5.1698 0.873535 5.25202 0.873535C5.33424 0.873535 5.4148 0.896694 5.48446 0.94036C5.55413 0.984025 5.61008 1.04643 5.64592 1.12043L6.7576 3.36129L9.25231 3.72455C9.33331 3.73607 9.40947 3.77006 9.47213 3.82266C9.53479 3.87527 9.58145 3.94438 9.60682 4.02217C9.63004 4.09818 9.63213 4.17908 9.61285 4.25619C9.59357 4.33329 9.55366 4.40369 9.4974 4.45984L7.69421 6.21051L8.13188 8.67458C8.1475 8.75663 8.13932 8.84144 8.1083 8.919C8.07728 8.99655 8.02471 9.06361 7.95681 9.11225C7.87756 9.16779 7.78213 9.19549 7.68546 9.19103Z" fill="#FFD747" />
                                        </svg>
                                    </div>
                                    <div className="col col-3 d-flex align-items-center">
                                        {avaliacao}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}