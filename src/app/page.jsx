'use client'

import CardRestaurante from "@/components/CardRestaurante"
import { useEffect, useState } from "react"
import { getRecommendedRestaurants, getTopRatedRestaurants } from "@/services/service"

export default async function Home() {

  const recommendedRestaurants = await getRecommendedRestaurants();
  const topRatedRestaurants = await getTopRatedRestaurants();

  return (
    <>
      <div>
        <div className='container pb-5'>
          <div className='flex items-center justify-center w-full py-10' >
            <h1 className='font-bold text-3xl'>Recomendados</h1>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gy-4 justify-center items-center">
            {recommendedRestaurants.map((restaurante) => (
              <div key={restaurante.id_restaurante} className="">
                <CardRestaurante imgUrl={restaurante.Foto[0].imagem} avaliacao={restaurante.mediaNotas} nome={restaurante.nome} id={restaurante.id_restaurante} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="faixa bg-green-200 text-white text-center py-8">
          <h2 className="text-2xl font-bold mb-4">Quem Somos</h2>
          <p className="text-lg">
            Buscamos trazer um cardápio com as melhores opções para uma boa refeição na nossa cidade
          </p>
          <p className="text-lg">
            Nosso objetivo é conectar os amantes da boa comida com os melhores restaurantes da região!
          </p>
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
                <CardRestaurante imgUrl={restaurante.Foto[0].imagem} avaliacao={restaurante.mediaNotas} nome={restaurante.nome} id={restaurante.id_restaurante} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
