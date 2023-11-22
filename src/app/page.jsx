import CardRestaurante from "@/components/CardRestaurante"
import Carrosel from "@/components/Carousel"

import FaixaInfo from "@/components/FaixaInfo";
import Banner from '@/components/banner';
import { getAllCategories, getRecommendedRestaurants, getTopRatedRestaurants } from "@/lib/services/service"

export default async function Home() {

  const recommendedRestaurants = await getRecommendedRestaurants();
  const topRatedRestaurants = await getTopRatedRestaurants();

  const categorias = await getAllCategories();
  console.log()
  recommendedRestaurants.map((restaurante) => (console.log(restaurante.id_restaurante)))

  return (
    <>
      <Banner/>
      <div>

        <div className="container p-5">
          <h1 className='font-bold text-3xl text-center'>Categorias</h1>
        </div>
        <Carrosel categorias={categorias}/>

        <div className='container p-5'>
          <div id="recomendados" className='d-flex align-items-center justify-content-center w-full p-5' >
            <h1 className='font-bold text-3xl text-center'>Recomendados</h1>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gy-4 justify-content-center">
            {recommendedRestaurants.map((restaurante) => (
              <div key={restaurante.id_restaurante} className="">

                <CardRestaurante imgUrl={restaurante.Foto[0].imagem} avaliacao={restaurante.mediaNotas} nome={restaurante.nome} id={restaurante.id_restaurante} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div id="sobre" className='d-flex align-items-center justify-content-center w-full p-5'>
          <h1 className='font-bold text-3xl'>Sobre</h1>
        </div>
        <div className="faixa text-white text-center p-5">
          <FaixaInfo />
        </div>
      </div>
      <div>
        <div className='container'>
          <div id="destaque" className='d-flex align-items-center justify-content-center w-full p-5'>
            <h1 className='font-bold text-3xl'>Restaurantes em Destaque</h1>
          </div>
          <div className="row justify-content-center align-items-center">
            {topRatedRestaurants.map((restaurante) => (
              <div key={restaurante.id_restaurante} className="col-12 col-md-6 col-lg-3 mb-4">
                <CardRestaurante imgUrl={restaurante.Foto[0].imagem} avaliacao={restaurante.mediaNotas} nome={restaurante.nome} id={restaurante.id_restaurante} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
