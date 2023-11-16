'use client'

import CardRestaurante from "@/components/CardRestaurante"
import { useEffect, useState } from "react"
import { getRecommendedRestaurants, getTopRatedRestaurants } from "@/services/service"

export default function Home() {

  const [recommendedRestaurants, setRecommendedRestaurants] = useState([]);
  const [topRatedRestaurants, setTopRatedRestaurants] = useState([]);

  useEffect(() => {
    async function fetchRecommendedRestaurants() {
      try {
        const restaurants = await getRecommendedRestaurants();
        setRecommendedRestaurants(restaurants);
      } catch (error) {
        console.error("Erro ao obter restaurantes recomendados:", error);
      }
    }
    async function fetchTopRatedRestaurants() {
      try {
        const restaurants = await getTopRatedRestaurants();
        setTopRatedRestaurants(restaurants);
      } catch (error) {
        console.error("Erro ao obter restaurantes recomendados:", error);
      }
    }

    fetchRecommendedRestaurants();
    fetchTopRatedRestaurants();
  }, []);

  return (
    <>
      <div>
        <div className='container pb-5'>
          <div className='flex items-center justify-center w-full py-10' >
            <h1 className='font-bold text-3xl'>Recomendados</h1>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 gy-4 justify-center items-center">
            {recommendedRestaurants.map((restaurante) => (
              <div key={restaurante.id_restaurante} className="">
                <CardRestaurante imgUrl={restaurante.Foto[0].imagem} avaliacao={restaurante.mediaNotas} nome={restaurante.nome} id={restaurante.id_restaurante}/>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className='container'>
          <div className='flex items-center justify-center w-full py-10'>
            <h1 className='font-bold text-3xl'>Restaurantes em Destaque</h1>
          </div>
          <div className="row justify-center items-center">
            {topRatedRestaurants.map((restaurante) => (
              <div key={restaurante.id_restaurante} className="col-12 col-md-6 col-lg-3 mb-4">
                <CardRestaurante imgUrl={restaurante.Foto[0].imagem} avaliacao={restaurante.mediaNotas} nome={restaurante.nome} id={restaurante.id_restaurante}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
