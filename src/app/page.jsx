'use client'

import CardRestaurante from "@/components/CardRestaurante"
import { useEffect, useState } from "react"

const Categorias = [{
  id: 1,
  nome: 'Principal',
  subinfo: 'Teste'
},{
  id: 2,
  nome: 'Lanche',
  subinfo: 'Teste'
},{
  id: 3,
  nome: 'Sobremesa',
  subinfo: 'Teste'
},{
  id: 4,
  nome: 'Todos',
  subinfo: 'Teste'
},]





export default function Home() {

  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    setCategorias(Categorias)
  },[])
  return (
    <div className='container pb-5'>
      <div className='flex items-center justify-center w-full py-10' >
        <h1 className='font-bold text-3xl'>Recomendados</h1>
      </div>

      <div className="row row-cols-4 justify-center items-center">
        {categorias.map((categoria) => (
            <div key={categoria.id} className="">
              <CardRestaurante/>
            </div>
          ))}
      </div>
    </div>
  )
}
