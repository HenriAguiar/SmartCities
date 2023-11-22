import { getRestaurantsByCategory } from "@/lib/services/service"
import CardRestaurante from "@/components/CardRestaurante"

export default async function restaurantes({ params }) {
    const restaurantes = await getRestaurantsByCategory(params.slug);
    console.log(restaurantes)
    return (
        <>
            <div className="container pb-5">
                <div className="d-flex align-items-center justify-content-center p-5">
                <h1 className='font-bold text-3xl text-center'>Restaurantes</h1>
                </div>
                <div className="pb-5">
                    <div className="row row-cols-4 pb-5">
                        {restaurantes.map((restaurante) => (
                            <div key={restaurante.id_restaurante} className="">
                                <CardRestaurante imgUrl={restaurante.Foto[0].imagem} avaliacao={restaurante.mediaNotas} nome={restaurante.nome} id={restaurante.id_restaurante} />
                            </div>
                        ))}
                    </div>      
                </div>
            </div>
        </>
    )


}