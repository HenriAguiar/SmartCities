'use client'

import CardRestaurante from "@/components/CardRestaurante"
import { useEffect, useState } from "react"

const Categorias = [{
  id: 1,
  nome: 'Principal',
  subinfo: 'Teste'
}, {
  id: 2,
  nome: 'Lanche',
  subinfo: 'Teste'
}, {
  id: 3,
  nome: 'Sobremesa',
  subinfo: 'Teste'
}, {
  id: 4,
  nome: 'Todos',
  subinfo: 'Teste'
}, {
  id: 5,
  nome: 'Todos',
  subinfo: 'Teste'
},]





export default function Home() {

  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    setCategorias(Categorias)
  }, [])
  return (
    <>
      <div>
        <div className='container pb-5'>
          <div className='flex items-center justify-center w-full py-10' >
            <h1 className='font-bold text-3xl'>Recomendados</h1>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 gy-4 justify-center items-center">
            {categorias.map((categoria) => (
              <div key={categoria.id} className="">
                <CardRestaurante />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className='container'>
          <div className='flex items-center justify-center w-full py-10'>
            <h1 className='font-bold text-3xl'>Restaurante em Destaque</h1>
          </div>
          <div className="row justify-center items-center">
            {categorias.map((categoria) => (
              <div key={categoria.id} className="col-12 col-md-6 col-lg-3 mb-4">
                <CardRestaurante />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
